/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/banner.png";
import Calendar from "../assets/Calendar.svg";
import Team from "../assets/Team.svg";
import Cash from "../assets/Cash.svg";
import doctors from "../assets/doctors.jpg";
import FooterCom from "../components/Footer";

function About() {
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

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 mt-32">
        {/* Left Section: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={doctors}
            alt="Doctor"
            className="w-full h-auto object-cover max-w-md"
          />
        </div>

        {/* Right Section: Text */}
        <div className="md:w-1/2 w-full flex flex-col md:justify-start md:items-start justify-center items-center">
          <h2 className="text-gray-700 text-left mt-8 text-xl font-bold">
            Welcome MedCare
          </h2>
          <p className="text-gray-700 text-left mt-4 text-xl font-bold">
            Best Care for Your Good Health
          </p>
          <div className="hidden md:flex space-x-10 items-center pb-4">
            {/* First group */}
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">A Passion for Healing</span>
            </div>

            {/* Second group */}
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">5-Star Care</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">5-Star Care</span>
            </div>
          </div>

          <div className="hidden space-x-10 items-center md:flex">
            {/* First group */}
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">A Passion for Healing</span>
            </div>

            {/* Second group */}
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">5-Star Care</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#03D395]"></div>
              <span className="ml-2">5-Star Care</span>
            </div>
          </div>

          <p className="text-gray-700 md:text-left text-center max-w-md mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>
      </div>

      {/* footer */}
      <FooterCom/>
    </div>
  );
}

export default About;
