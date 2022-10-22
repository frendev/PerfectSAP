import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen-2 text-center mt-20">
      <div className="w-full h-full mx-auto p-w flex justify-center items-center relative">
        <Image src="/assets/sap-hero.jpg" layout="fill"></Image>
      </div>
    </div>
  );
}

export default Hero;
