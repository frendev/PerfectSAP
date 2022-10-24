import React, { useEffect } from "react";
import FormError from "./FormError";

function InputField(props: any) {
  const {
    label,
    minLength,
    maxLength,
    fieldErrors,
    register,
    pattern,
    formField,
  } = props;

  return (
    <div>
      <label className="text-gray-600 font-semibold uppercase">{label}</label>
      <input
        className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full outline-none"
        placeholder={label}
        {...register(formField, {
          required: `${label} is required.`,
          pattern: pattern,
          minLength: minLength,
          maxLength: maxLength,
        })}
      />
    </div>
  );
}

export default InputField;
