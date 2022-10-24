import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import success from "../public/assets/success.png";

function Success() {
  return (
    <div>
      <Head>
        <title>Perfect SAP</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-5">
            <Image
              width="128px"
              height="128px"
              layout="intrinsic"
              src={success}
            ></Image>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p className="text-xl">
              Thank you for your interest! We will get back to you as soon as
              possible.
            </p>
            <button className="bg-blue-500 text-xl p-3 rounded text-white flex items-center">
              <span>
                <MdKeyboardBackspace size={30} />
              </span>
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
