// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Button from "../components/Button";

function Sign() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="w-full h-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Manage all your task here
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-5xl 2xl:text-7xl font-black text-center text-[#1F2B6C]">
              <span>MedCare</span>
              <span className="font-light italic text-xl text-[#1F2B6C]">We Care!!!</span>
            </p>
            <div>
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center ites-center">
          <form
            action=""
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14 mt-20"
          >
            <div className="">
              <p className="text-[#1F2B6C] text-3xl font-bold text-center">
                Join us today
              </p>
              <p className="text-center text-base text-gray-700">
                Keep all your credential safe
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
            <input
                type="text"
                placeholder="John Smith"
                name="full name"
                label="Full name"
                className="w-full  rounded-full"
              />
              <input
                type="text"
                placeholder="email@example.com"
                name="email"
                label="Email address"
                className="w-full  rounded-full"
              />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                label="Password"
                className="w-full  rounded-full"
              />
              <span className="text-sm text-gray-500 hover:text-[#1F2B6C] hover:underline cursor-pointer">
                Forget password
              </span>

              <Button
                type="submit"
                label="Submit"
                className="w-full h-10 bg-[#1F2B6C] text-white rounded-full"
              />
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Sign;
