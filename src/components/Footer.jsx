/* eslint-disable no-unused-vars */
import { Footer, FooterCopyright } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-[#1F2B6C]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 rounded-lg text-white">
                MedCare
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  className="hover:text-blue-900 pt-2"
                  target=""
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/service"
                  className="hover:text-blue-900 pt-2"
                  target=""
                  rel="noopener noreferrer"
                >
                  Service
                </Footer.Link>
                <Footer.Link
                  href="/doctor"
                  className="hover:text-blue-900 pt-2"
                  target=""
                  rel="noopener noreferrer"
                >
                  Doctor
                </Footer.Link>
                <Footer.Link
                  href="/news"
                  className="hover:text-blue-900 pt-2"
                  target=""
                  rel="noopener noreferrer"
                >
                  News
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="hover:text-blue-900 pt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:text-blue-900 pt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="hover:text-blue-900 pt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:text-blue-900 pt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between py-12">
          <FooterCopyright
            href="#"
            by="MedCare"
            year={new Date().getFullYear()}
            className="m-auto text-center text-black font-bold text-medium"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="hover:text-blue-900"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-blue-900"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitterX}
              className="hover:text-blue-900"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="hover:text-blue-900"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
