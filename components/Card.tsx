import Image from "next/image";
import React from "react";
import trainingImage from "../public/assets/b2b.png";

function Card(props: any) {
  return (
    <div className="transition ease-in-out duration-200 hover:scale-105 grid justify-self-center bg-white shadow-xl rounded-3xl w-4/5">
      <div className="mx-auto py-2">
        <Image
          width="128px"
          height="128px"
          layout="intrinsic"
          src={trainingImage}
          className="rounded-full"
        ></Image>
      </div>
      {props.children}
    </div>
  );
}

export default Card;
