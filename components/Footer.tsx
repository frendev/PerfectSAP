import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-around py-4 bg-slate-600 md:text-lg text-md text-yellow-300 mt-10">
      <div>
        <a target="_blank" href="https://www.freepik.com/">
          Images by FreePik
        </a>
      </div>
      <div>Copyright ©2022 | All Rights Reserved</div>
    </div>
  );
}

export default Footer;
