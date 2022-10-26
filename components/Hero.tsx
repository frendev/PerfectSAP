import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen-2 text-center mt-20 bg-center custom-img">
      {/* overlay */}
      <div className="absolute h-screen-2 left-0 right-0 bottom-0 bg-black/50 z-[2]" />

      <div className="container w-4/5 text-white z-[20] flex flex-col items-center md:items-start">
        <h2 className="text-5xl font-bold">PerfectSAP</h2>
        <p className="py-5 text-3xl underline-offset-5">We Pursue Quality</p>
        <button className="bg-yellow-300 p-3 text-black text-2xl rounded-md">
          <Link href="/#contact">Contact US</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
