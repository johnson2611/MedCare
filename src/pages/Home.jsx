/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/banner.png";
import Calendar from "../assets/Calendar.svg";
import Team from "../assets/Team.svg";
import Cash from "../assets/Cash.svg";
import doctors from "../assets/doctors.jpg";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/docCarousel";

// footer
import FooterCom from "../components/Footer";

function Home() {
  const service = useNavigate();
  const handleService = () => {
    service("/service");
  };

  const about = useNavigate();
  const handleAbout = () => {
    about("/about");
  };

  const login = useNavigate();
  const handleLogin = () => {
    service("/login");
  };

  return (
    <>
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
          <button
            className="mt-6 md:mt-8 border-2 bg-[#8ab9d8] text-[#343ca8] text-sm md:text-base lg:text-lg font-semibold p-2 px-4 rounded-2xl"
            onClick={handleLogin}
          >
            Join Us
          </button>
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

      {/* Welcome Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mx-6 md:mx-16 lg:mx-24 mt-10 md:mt-44 mb-8">
        <div className="w-full">
          <img src={doctors} className="w-full rounded-2xl" alt="Doctors" />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-[#1F2B6C] font-semibold text-xl md:text-2xl lg:text-3xl">
            Welcome to MedCare
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laudantium ad perferendis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet laudantium ad perferendis!
          </p>
          <button
            className="flex mt-4 px-4 p-2 justify-center m-auto bg-[#1F2B6C] text-sm md:text-base text-white rounded-lg hover:bg-[#8ab9d8]"
            onClick={handleAbout}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto bg-[#1F2B6C] my-16 py-2 pb-6">
        <h2 className="text-white text-center font-bold text-2xl mb-2 mt-4">
          Our Services
        </h2>
        <div className="mx-auto sm:px-6 md:px-10 lg:px-20 py-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
                  <path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M6.303 5.21a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.1h1.207a.43.43 0 0 0 .43-.43V7.277a.43.43 0 0 0-.43-.429H8.128V5.639a.43.43 0 0 0-.43-.429z" />
                </g>
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              Free Checkup
            </h2>
            <p className="text-justify text-sm md:text-base">
              Receive a comprehensive health evaluation, including vital signs
              and overall well-being assessment, all at no cost.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.2 13.73a1 1 0 0 0-1.41-.05A11.18 11.18 0 0 0 4 22a1 1 0 0 0 2 0a9.15 9.15 0 0 1 3.15-6.86a1 1 0 0 0 .05-1.41m10.17 4.64a10.9 10.9 0 0 0-1.6-3A14.3 14.3 0 0 0 14.06 12C16.3 10.57 20 7.4 20 2a1 1 0 0 0-2 0c0 5.4-4.59 8.17-6 8.89A13.4 13.4 0 0 1 9.31 9H12a1 1 0 0 0 0-2H7.55a9.4 9.4 0 0 1-1-2H15a1 1 0 0 0 0-2H6.06A8 8 0 0 1 6 2a1 1 0 0 0-2 0c0 7.57 7.3 10.79 7.61 10.92A13 13 0 0 1 14.7 15H12a1 1 0 0 0 0 2h4.43a9 9 0 0 1 1 2H9a1 1 0 0 0 0 2h8.94a8 8 0 0 1 .06 1a1 1 0 0 0 2 0a10.5 10.5 0 0 0-.22-2.19a9 9 0 0 0-.41-1.44"
                />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              DNA Testing
            </h2>
            <p className="text-justify  text-sm md:text-base">
              Explore your genetic blueprint through advanced DNA testing to
              understand your predisposition to certain health conditions and
              tailor preventive care.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="M11.2 6.1L7.5 1L3.8 6.1c-.5.7-.8 1.6-.8 2.5C3 11 5 13 7.5 13S12 11 12 8.6c0-.9-.3-1.8-.8-2.5M10 9H8v2H7V9H5V8h2V6h1v2h2z"
                />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              Blood Bank
            </h2>
            <p className="text-justify text-sm md:text-base">
              A facility that collects, tests, and stores blood for
              transfusions, ensuring safe, compatible blood for patients in need
              during surgeries, emergencies, or treatments.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.345 11.988C8.885 13.846 8 16.384 8 19.035c0 1.537.264 3.009.73 4.41h8.685l3.388-6.024l2.117 7.41l2.59-3.331H32v2h-5.51l-4.41 5.67l-1.883-6.591l-1.612 2.865H4v-2h2.636A15.8 15.8 0 0 1 6 19.034c0-3.075 1.021-6.054 2.772-8.282C10.528 8.518 13.056 7 16.032 7c3.503 0 6.167 1.963 7.968 4.734C25.8 8.964 28.465 7 31.969 7c2.975 0 5.504 1.518 7.26 3.753C40.978 12.98 42 15.96 42 19.035c0 6.582-4.544 12.079-8.842 15.831a49 49 0 0 1-8.494 5.914l-.151.08l-.04.022l-.012.005l-.003.002h-.001S24.456 40.89 24 40l-.434.9l-.006-.002l-.014-.007l-.05-.025l-.188-.094a31 31 0 0 1-.688-.363a44 44 0 0 1-2.394-1.402c-1.951-1.224-4.51-3.027-6.918-5.333c-1.284-1.23-2.53-2.61-3.62-4.128a1 1 0 1 1 1.624-1.166c1.005 1.4 2.166 2.687 3.38 3.85c2.279 2.184 4.72 3.905 6.597 5.083a42 42 0 0 0 2.698 1.559l.252-.141a47 47 0 0 0 7.603-5.371C36.044 29.691 40 24.705 40 19.034c0-2.65-.885-5.189-2.344-7.047C36.2 10.137 34.213 9 31.969 9c-3.103 0-5.51 2.02-7.071 5.202L24 16.03l-.898-1.828C21.541 11.02 19.134 9 16.032 9c-2.245 0-4.232 1.136-5.687 2.988M24 40l-.434.9l.448.217l.443-.227z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              Cardiogram
            </h2>
            <p className="text-justify text-sm md:text-base">
              Monitor your heart's electrical activity with a non-invasive test
              to detect abnormalities and ensure optimal cardiovascular health.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="mt-0 md:mt-8 border-2 bg-[#1F2B6C] text-[#fff] text-sm md:text-base lg:text-lg font-semibold p-2 px-4 rounded-2xl"
            onClick={handleService}
          >
            Our Services
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mx-6 md:mx-16 lg:mx-24 mt-10 md:mt-10 mb-8">
        <div className="mt-4 md:mt-0">
          <h2 className="text-[#1F2B6C] font-semibold text-xl md:text-2xl lg:text-3xl">
            Welcome to MedCare
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laudantium ad perferendis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet laudantium ad perferendis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eveniet laudantium ad
            perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet laudantium ad perferendis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet laudantium ad perferendis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laudantium ad perferendis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet laudantium ad perferendis Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eveniet laudantium ad
            perferendis! laudantium ad perferendis Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet laudantium ad perferendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laudantium ad perferendis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet laudantium ad perferendis! laudantium ad
          </p>
        </div>
        <div className="w-full">
          <img src={doctors} className="w-full rounded-2xl" alt="Doctors" />
        </div>
      </div>

      {/* doctors */}
      <div>
        <Carousel />
      </div>

      {/* footer */}
      <FooterCom />
    </>
  );
}

export default Home;
