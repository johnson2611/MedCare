/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [active, setActive] = useState("home");

  const handleClick = (navlink) => {
    setActive(navlink);
  };

  return (
    <nav className="bg-[#1F2B6C] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between p-5 md:p-2  md:flex-row relative">
        {/* Logo or Brand */}
        <div className="text-white text-xl md:order-1 md:absolute md:mx-12 md:bottom-[-2rem]">
          <a href="/">MedCare</a>
        </div>

        {/* Hamburger Icon (visible on mobile screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Links (visible on larger screens or when menu is open on mobile) */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:flex w-full items-center`}
      >
        <ul className="flex flex-col md:flex-row w-full justify-center md:space-x-8 md:ml-24 items-center md:gap-4 mt-4 md:mt-0 -md:py-2 text-white">
          <li className="block py-2 px-3 md:pb-6">
            <Link
              to="/"
              className={`${
                active === "home" ? "text-[#159EEC]" : "text-white"
              } hover:text-[#159EEC] font-semibold`}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </li>
          <li className="block py-2 px-3 md:pb-6">
            <Link
              to="/about"
              className={`${
                active === "about" ? "text-[#159EEC]" : "text-white"
              } hover:text-[#159EEC] font-semibold`}
              onClick={() => handleClick("about")}
            >
              About
            </Link>
          </li>
          <li className="block py-2 px-3 md:pb-6">
            <Link
              to="/service"
              className={`${
                active === "service" ? "text-[#159EEC]" : "text-white"
              } hover:text-[#159EEC] font-semibold`}
              onClick={() => handleClick("service")}
            >
              Service
            </Link>
          </li>
          <li className="block py-2 px-3 md:pb-6">
            <Link
              to="/doctor"
              className={`${
                active === "doctor" ? "text-[#159EEC]" : "text-white"
              } hover:text-[#159EEC] font-semibold`}
              onClick={() => handleClick("doctor")}
            >
              Doctor
            </Link>
          </li>
          <li className="block py-2 px-3 md:pb-6">
            <Link
              to="/news"
              className={`${
                active === "news" ? "text-[#159EEC]" : "text-white"
              } hover:text-[#159EEC] font-semibold`}
              onClick={() => handleClick("news")}
            >
              News
            </Link>
          </li>
        </ul>
        <div className="flex justify-center m-auto my-4">
          <Link to="/sign-up" className="hover:text-[#159EEC]">
            <Button className="w-28 -mt-2 mx-10 border-2 border-white hover:bg-[#000]">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
