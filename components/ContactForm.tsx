import Image from "next/image";
import React from "react";
import ContactUsIllustration from "../public/assets/contact.jpg";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  console.log(errors);

  // const fetchHello = () => {
  //   return axios.get("/api/hello");
  // };

  const sendEmail = (formValues: any) => {
    const { firstName, lastName, email, phoneNumber, message } = formValues;
    return axios.post("/api/sendEmail", {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });
  };

  const { isLoading, data, isError, mutate } = useMutation(sendEmail);

  console.log(isLoading, data, isError);

  const onSubmit = async (data: any) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 bg-white shadow-lg p-10 mb-10 w-4/5 mx-auto relative rounded-lg">
      <div className="lg:col-span-2 lg:mx-10">
        <div>
          <h1 className="underline-effect text-center text-3xl font-bold relative w-max mx-auto">
            Do you have any queries?
          </h1>
          <br></br>
          <p className="text-center text-xl text-neutral-500">
            Tell us more about yourself, we'll reach out to you as soon as
            possible.
          </p>
        </div>
        <div className="flex justify-center my-10 align-bottom">
          <Image
            width="450px"
            height="450px"
            src={ContactUsIllustration}
            alt="Image by pikisuperstar on Freepik"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="underline-effect relative text-3xl font-bold mb-5 w-max mx-auto text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex md:justify-between md:space-x-4">
            <div className="w-full">
              <label className="text-gray-600 font-semibold uppercase mt-5">
                First Name
              </label>
              <input
                type="text"
                className={
                  errors.firstName
                    ? "outline-red-300 bg-gray-100 text-gray-900 p-3 rounded-lg w-full"
                    : "bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none w-full"
                }
                placeholder="First Name"
                {...register("firstName", {
                  pattern: /^[A-Za-z]*$/,
                  required: "First name is required.",
                  maxLength: 80,
                })}
              />
              {errors && (
                <FormError
                  className="block"
                  message={errors?.firstName?.message}
                />
              )}
            </div>
            <div className="w-full">
              <label className="text-gray-600 font-semibold uppercase">
                Last Name
              </label>
              <input
                className="input-field p-3"
                placeholder="Last Name"
                {...register("lastName", {
                  pattern: /^[A-Za-z]*$/,
                  required: "Last name is required.",
                  maxLength: 80,
                })}
              />
              {errors && <FormError message={errors?.lastName?.message} />}
              {errors?.lastName?.type === "pattern" && (
                <FormError message={"Please enter characters only."} />
              )}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-600 font-semibold uppercase">
              Phone Number
            </label>
            <input
              className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline w-full"
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: "Phone Number is required.",
                pattern: /^[0-9]*$/,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors && <FormError message={errors?.phoneNumber?.message} />}
            {errors?.phoneNumber?.type === "pattern" && (
              <FormError message={"Please enter numbers only."} />
            )}
            {errors?.phoneNumber?.type === "maxLength" && (
              <FormError message={"Maximum length is only 10 digits."} />
            )}
            {errors?.phoneNumber?.type === "minLength" && (
              <FormError message={"Minimum length is 10 digits."} />
            )}
          </div>
          <div className="mt-5">
            <label className="text-gray-600 font-semibold uppercase">
              Email
            </label>
            <input
              className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline w-full"
              placeholder="Email"
              {...register("email", {
                required: "Email is required.",
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors && <FormError message={errors?.email?.message} />}
            {errors?.email?.type === "pattern" && (
              <FormError message={"Please enter valid email address."} />
            )}
          </div>
          <div className="mt-5">
            <label className="text-gray-600 font-semibold uppercase">
              Message
            </label>
            <textarea
              className="bg-gray-100 text-gray-900 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline w-full"
              placeholder="Message"
              rows={5}
              {...register("message")}
            />
          </div>
          <input
            className="transition ease-in-out delay-150 uppercase text-md font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
