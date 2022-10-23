import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    // Desktop Menu
    <>
      <div
        className={
          mobileMenu
            ? "fixed h-screen left-0 right-0 bottom-0 bg-black/50 z-[2]"
            : "d-none"
        }
      ></div>
      <div
        id="/"
        className="fixed left-0 top-0 w-full h-20 shadow-xl z-[100] opacity-100 bg-slate-50"
      >
        <div className="flex m-auto justify-between items-center h-full w-full px-2 2xl:px-16">
          {/* This div is for logo */}
          <div>
            <Link href="/">
              <Image
                className="cursor-pointer items-center"
                src="/assets/PerfectSAP-Logo.png"
                alt="perfectsap"
                width="80"
                height="75"
              />
            </Link>
          </div>

          {/* This div is for desktop menu's links */}

          <ul className="hidden sm:flex text-xl">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/#about"> About Us </Link>
            </li>

            <li className="p-4">
              <Link href="/#contact"> Contact Us </Link>
            </li>
          </ul>

          {/* This div is for mobile menu's divs */}
          {/* {Mobile Menu Close and Open Icon} */}
          <div
            onClick={mobileMenuHandler}
            className="cursor-pointer block sm:hidden z-10 text-white"
          >
            {mobileMenu ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} className="text-black" />
            )}
          </div>

          {/* Mobile Menu */}

          <div
            className={
              mobileMenu
                ? "sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen bg-gradient-to-r from-blue-500 to-blue-300 text-3xl text-center transition duration-300 text-white"
                : "sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen bg-blue-500 text-3xl text-center translate-x-full text-white"
            }
          >
            <ul>
              <li
                onClick={mobileMenuHandler}
                className="p-4 hover:text-yellow-200 ease-in duration-200"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={mobileMenuHandler}
                className="p-4 hover:text-yellow-200 ease-in duration-200"
              >
                <Link href="/#about">About Us</Link>
              </li>

              <li
                onClick={mobileMenuHandler}
                className="p-4 hover:text-yellow-200 ease-in duration-200"
              >
                <Link href="/#contact"> Contact Us </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
