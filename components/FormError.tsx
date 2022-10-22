import React from "react";

function FormError(props: any) {
  return (
    <div
      className="bg-orange-100 border-l-4 border-red-500 text-red-700 pl-2 my-2"
      role="alert"
    >
      <p className="font-bold">{props.message}</p>
    </div>
  );
}

export default FormError;
