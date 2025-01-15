// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import data from "../components/data.json";
import FooterCom from "../components/Footer";

const Doctor = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(data);
  }, []);

  return (
    <div className="">
      <h2 className="flex text-center justify-center text-2xl font-bold mt-24">
        List Of Doctors
      </h2>
      <div className="mx-auto sm:px-6 md:px-10 lg:px-20 py-2 mt-8 mb-12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-[#BFD2F8] p-4 rounded-lg shadow-md overflow-hidden hover:shadow-blue-400"
          >
            <div className="flex justify-center items-center mx-auto w-[120px] h-[120px]">
              <img src={profile.image} alt={profile.name} />
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              {profile.name}
            </h2>
            <p className="text-[#1F2B6C] uppercase font-bold justify-center flex">
              {profile.specialization}
            </p>
            <p className="text-justify text-sm md:text-base mt-2">
              {profile.description} experience
            </p>
            <p className="text-justify text-sm md:text-base mt-2">
              <span className="font-bold">Phone:</span>
              {profile.contact.phone}
            </p>
            <p className="text-justify text-sm md:text-base mt-2">
              <span className="font-bold">Email:</span>
              {profile.contact.email}
            </p>
            <p className="text-justify text-sm md:text-base mt-2">
              <span className="font-bold"> Available on: </span>
              {profile.availability.join(", ")}
            </p>
            <div className="px-6 py-0 justify-center flex">
              <a
                href={profile.social.linkedin}
                className="inline-block p-2 mx-2 bg-blue-900 rounded-lg"
              >
                <FaLinkedin className="text-white w-4 bg-blue-900 rounded-full" />
              </a>
              <a
                href={profile.social.instagram}
                className="inline-block p-2 mx-2 bg-blue-900 rounded-lg"
              >
                <FaInstagram className="text-white w-4 bg-blue-900 rounded-full" />
              </a>
              <a
                href={profile.social.facebook}
                className="inline-block p-2 mx-2 bg-blue-900 rounded-lg"
              >
                <FaFacebook className="text-white w-4 bg-blue-900 rounded-full" />
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="text-blue-500 hover:underline justify-center flex"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
      <FooterCom />
    </div>
  );
};

export default Doctor;




