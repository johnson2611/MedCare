/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/banner.png";
import Calendar from "../assets/Calendar.svg";
import Team from "../assets/Team.svg";
import Cash from "../assets/Cash.svg";
import dental from "../assets/dental.jpg";
import nuel from "../assets/nuel.png";
import doctors from "../assets/doctors.jpg";

import { FaEye, FaHeart, FaSearch } from "react-icons/fa";
import FooterCom from "../components/Footer";
function News() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full md:h-max object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24 text-left">
          <h2 className="text-[#558aad] mt-24 text-lg md:text-2xl lg:text-3xl font-sans font-medium">
            Caring for life
          </h2>
          <span className="text-[#1F2B6C] text-xl font-extrabold font-serif md:text-4xl lg:text-5xl mt-2">
            Leading the Way in Medical
          </span>
          <span className="text-[#1F2B6C] text-xl font-extrabold font-serif md:text-4xl lg:text-5xl mt-2">
            Excellence
          </span>
          <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-8 mt-6 md:mt-8">
            <div className="bg-[#1F2B6C] text-white p-4 rounded-lg">
              <div className="flex items-center">
                <h2 className="text-sm md:text-base mr-2">
                  Book an Appointment
                </h2>
                <img
                  src={Calendar}
                  alt="calendar"
                  className="w-5 h-5 md:w-6 md:h-6 ml-4"
                />
              </div>
            </div>
            <div className="bg-[#8ab9d8] text-white p-4 rounded-lg">
              <div className="flex items-center">
                <h2 className="text-sm md:text-base mr-2">Find a Doctor</h2>
                <img
                  src={Team}
                  alt="team"
                  className="w-5 h-5 md:w-6 md:h-6 ml-4"
                />
              </div>
            </div>
            <div className="bg-[#159EEC] text-white p-4 rounded-lg">
              <div className="flex items-center">
                <h2 className="text-sm md:text-base mr-2">Consult Fees</h2>
                <img
                  src={Cash}
                  alt="cash"
                  className="w-5 h-5 md:w-6 md:h-6 ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:mx-12 justify-center md:gap-12 gap-2 mt-32">
        {/* Left Section: Image and Write-up */}
        <div className="flex flex-col items-center md:w-full w-full">
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img
              src={doctors}
              alt="Doctor"
              className="w-full h-auto object-cover max-w-md"
            />
          </div>

          {/* Write-up Section */}
          <div className="text-center md:text-center mt-6">
            <h2 className="font-semibold">05, October, 2024</h2>
            <div className="flex justify-center md:justify-center space-x-4 mt-2">
              <span className="flex items-center">
                <FaEye className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
              <span className="flex items-center">
                <FaHeart className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              suscipit quod quam eligendi iusto. Consectetur magni tempora illo
              et earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat suscipit quod quam eligendi iusto. Consectetur magni
              tempora illo et earum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat suscipit quod quam eligendi iusto.
              Consectetur magni tempora illo et earum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat suscipit quod quam
              eligendi iusto. Consectetur magni tempora illo et earum
            </p>
          </div>
        </div>

        {/* Right Section: Recent Posts */}
        <div className="md:w-full w-full mt-8 flex flex-col justify-center items-center md:items-start">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute mt-3 right-3 text-blue-500" />
            <input
              type="search"
              placeholder="enter anything...."
              className="w-full px-3 py-2 rounded-lg text-black placeholder-gray-500 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="border-2 border-[#1F2B6C] rounded-lg mt-6 w-full max-w-md">
            <h2 className="mt-2 text-xl mx-4 font-bold text-[#1F2B6C]">
              Recent Posts
            </h2>
            {/* Post Section */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex flex-col mx-4 mt-4 md:flex-row">
                <img
                  className="h-48 w-full border-[#1F2B6C] border-2 rounded-t-lg object-cover md:h-20 md:w-20 md:rounded-xl"
                  src={nuel}
                  alt=""
                />
                <div className="flex flex-col justify-start p-2 pt-0">
                  <h5 className="text-sm font-bold text-[#159EEC]">
                    Monday 05, September 2021 | By Author
                  </h5>
                  <p className="mb-4 text-sm text-black pt-2 line-clamp-2">
                    This is a wider card with supporting text below as a
                    natural.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:mx-12 justify-center md:gap-12 gap-2 mt-20 mb-8">
        {/* Left Section: Image and Write-up */}
        <div className="flex flex-col items-center md:w-full w-full">
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img
              src={dental}
              alt="Doctor"
              className="w-full h-auto object-cover max-w-md"
            />
          </div>

          {/* Write-up Section */}
          <div className="text-center md:text-center mt-6">
            <h2 className="font-semibold">05, October, 2024</h2>
            <div className="flex justify-center md:justify-center space-x-4 mt-2">
              <span className="flex items-center">
                <FaEye className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
              <span className="flex items-center">
                <FaHeart className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              suscipit quod quam eligendi iusto. Consectetur magni tempora illo
              et earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat suscipit quod quam eligendi iusto. Consectetur magni
              tempora illo et earum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat suscipit quod quam eligendi iusto.
              Consectetur magni tempora illo et earum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat suscipit quod quam
              eligendi iusto. Consectetur magni tempora illo et earum
            </p>
          </div>
        </div>

        {/* Right Section: Recent Posts */}
        <div className="md:w-full w-full mt-2 flex flex-col justify-center items-center md:items-start">
          <div className="border-2 border-[#1F2B6C] rounded-lg mt-6 w-full max-w-md">
            {/* Post Section */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex flex-col mx-4 mt-4 md:flex-row">
                <img
                  className="h-48 w-full border-[#1F2B6C] border-2 rounded-t-lg object-cover md:h-20 md:w-20 md:rounded-xl"
                  src={nuel}
                  alt=""
                />
                <div className="flex flex-col justify-start p-2 pt-0">
                  <h5 className="text-sm font-bold text-[#159EEC]">
                    Monday 05, September 2021 | By Author
                  </h5>
                  <p className="mb-4 text-sm text-black pt-2 line-clamp-2">
                    This is a wider card with supporting text below as a
                    natural.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:mx-12 justify-center md:gap-12 gap-2 mt-20 mb-8">
        {/* Left Section: Image and Write-up */}
        <div className="flex flex-col items-center md:w-full w-full">
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img
              src={dental}
              alt="Doctor"
              className="w-full h-auto object-cover max-w-md"
            />
          </div>

          {/* Write-up Section */}
          <div className="text-center md:text-center mt-6">
            <h2 className="font-semibold">05, October, 2024</h2>
            <div className="flex justify-center md:justify-center space-x-4 mt-2">
              <span className="flex items-center">
                <FaEye className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
              <span className="flex items-center">
                <FaHeart className="text-red-600 mr-2" />
                <h2 className="text-sm">66</h2>
              </span>
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              suscipit quod quam eligendi iusto. Consectetur magni tempora illo
              et earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat suscipit quod quam eligendi iusto. Consectetur magni
              tempora illo et earum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat suscipit quod quam eligendi iusto.
              Consectetur magni tempora illo et earum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat suscipit quod quam
              eligendi iusto. Consectetur magni tempora illo et earum
            </p>
          </div>
        </div>

        {/* Right Section: Recent Posts */}
        <div className="md:w-full w-full mt-2 flex flex-col justify-center items-center md:items-start">
          <div className="border-2 border-[#1F2B6C] rounded-lg mt-6 w-full max-w-md">
            {/* Post Section */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex flex-col mx-4 mt-4 md:flex-row">
                <img
                  className="h-48 w-full border-[#1F2B6C] border-2 rounded-t-lg object-cover md:h-20 md:w-20 md:rounded-xl"
                  src={nuel}
                  alt=""
                />
                <div className="flex flex-col justify-start p-2 pt-0">
                  <h5 className="text-sm font-bold text-[#159EEC]">
                    Monday 05, September 2021 | By Author
                  </h5>
                  <p className="mb-4 text-sm text-black pt-2 line-clamp-2">
                    This is a wider card with supporting text below as a
                    natural.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <FooterCom />
    </div>
  );
}

export default News;
