import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import DesktopLink from "./DesktopNavLink";
import MobileNavLink from "./MobileNavLink";

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
        className="fixed left-0 top-0 w-full h- shadow-xl z-[49] opacity-100 bg-slate-50"
      >
        <div className="flex m-auto justify-between items-center h-full w-full px-2 2xl:px-16">
          {/* This div is for logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                className="cursor-pointer items-center"
                src="/assets/Perfect-SAP-Logo.png"
                alt="perfectsap"
                width="250"
                height="80"
              />
            </Link>
          </div>

          {/* This div is for desktop menu's links */}

          <ul className="hidden sm:flex text-xl">
            <DesktopLink hrefAttr="/" linkText="Home">
              <AiOutlineHome className="mr-2" size={30}></AiOutlineHome>
            </DesktopLink>
            <DesktopLink hrefAttr="/#about" linkText="About Us">
              <MdPeopleOutline className="mr-2" size={30}></MdPeopleOutline>
            </DesktopLink>
            <DesktopLink hrefAttr="/#contact" linkText="Contact Us">
              <BiPhone className="mr-2" size={30}></BiPhone>
            </DesktopLink>
          </ul>

          {/* This div is for mobile menu's divs */}
          {/* {Mobile Menu Close and Open Icon} */}
          <div
            onClick={mobileMenuHandler}
            className="cursor-pointer block sm:hidden z-10"
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
                ? "sm:hidden text-lg absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen bg-gradient-to-r from-white to-slate-200 text-center transition duration-300"
                : "sm:hidden text-lg absolute top-0 right-0 bottom-0 flex justify-center items-center w-1/2 h-screen text-center translate-x-full text-white"
            }
          >
            <ul>
              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/"
                linkText="Home"
              >
                <AiOutlineHome className="mr-2" size={30}></AiOutlineHome>
              </MobileNavLink>
              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/#about"
                linkText="About Us"
              >
                <MdPeopleOutline className="mr-2" size={30}></MdPeopleOutline>
              </MobileNavLink>

              <MobileNavLink
                mobileMenuHandler={mobileMenuHandler}
                hrefAttr="/#contact"
                linkText="Contact Us"
              >
                <BiPhone className="mr-2" size={30}></BiPhone>
              </MobileNavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
