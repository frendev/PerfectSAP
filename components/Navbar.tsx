import React from "react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="fixed top-0 w-full h-20 shadow-xl z-[100] opacity-100 bg-slate-50">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <Image
          className="cursor-pointer"
          src="/assets/sap.png"
          alt="perfectsap"
          width="125"
          height="50"
        />
      </div>
    </div>
  );
}

export default Navbar;
