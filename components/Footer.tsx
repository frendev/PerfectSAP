import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-around py-4 bg-slate-200 sticky top-[80vh] md:text-lg tet-md">
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
