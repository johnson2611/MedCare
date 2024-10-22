/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/banner.png";
import FooterCom from "../components/Footer";

function Services() {
  return (
    <div>
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
        </div>
      </div>
      <div className="mx-auto bg-[#1F2B6C] my-16 py-2 pb-6">
        <h2 className="text-white text-center font-bold text-2xl mb-2 mt-20">
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
                height="4.8em"
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

          {/* second section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 48 48"
              >
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M29 9a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
                    clipRule="evenodd"
                  />
                  <path d="M17 41v-7h2v7a1 1 0 0 0 1 1h.087a1 1 0 0 0 .995-.91l.645-7.09h2.008l-.66 7.272a3 3 0 0 1-.097.53A3 3 0 0 1 20.086 44H20a3 3 0 0 1-3-3m9.917.09L26.272 34h-2.008l.661 7.272a3 3 0 0 0 .097.53A3 3 0 0 0 27.913 44H28a3 3 0 0 0 3-3v-7h-2v7a1 1 0 0 1-1 1h-.087a1 1 0 0 1-.996-.91" />
                  <path
                    fillRule="evenodd"
                    d="M11 15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1zm1 2v13h7.5c0-.558.26-1.043.528-1.4a4.9 4.9 0 0 1 1.051-.998A6.3 6.3 0 0 1 23 26.668V24.5h-.8c-.603 0-1.447.364-2.257.855a13 13 0 0 0-1.285.898l-.015.013l-.003.002L18 25.5l-.64-.768l.001-.002l.003-.002l.007-.006l.026-.02q.03-.027.09-.072a15 15 0 0 1 1.42-.985c.84-.51 2.096-1.145 3.293-1.145h.8v-2h-.5c-.57 0-1.31.2-1.97.44a12 12 0 0 0-1.069.447l-.012.007h-.002L19 20.5l-.447-.895l.003-.001l.007-.003l.021-.011a9 9 0 0 1 .346-.16c.227-.1.546-.235.916-.37c.713-.26 1.723-.56 2.654-.56h.5V17zm13 7.5h1.1c.749 0 1.519.366 2.163.819a7 7 0 0 1 .986.841l.008.01l.743-.67l.743-.67l-.002-.001l-.002-.003l-.007-.008l-.022-.023l-.075-.079a9 9 0 0 0-1.223-1.035c-.78-.547-1.96-1.181-3.312-1.181H25v-2h.75c.694 0 1.37.201 1.893.422a6 6 0 0 1 .8.408l.003.002L29 20.5l.554-.832l-.001-.001l-.003-.002l-.007-.005l-.02-.013l-.067-.042a8 8 0 0 0-1.037-.527c-.663-.28-1.613-.578-2.669-.578H25V17h11v13h-7.5c0-.562-.268-1.055-.536-1.413a5 5 0 0 0-1.063-1.02A5.9 5.9 0 0 0 25 26.638zm1.493 5.5a1 1 0 0 0-.129-.212a3 3 0 0 0-.64-.604c-.576-.42-1.23-.672-1.692-.684c-.544.046-1.227.325-1.787.727c-.28.2-.49.404-.62.577a1 1 0 0 0-.119.196z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              X-Ray Services
            </h2>
            <p className="text-justify text-sm md:text-base">
              Imaging technology used to capture internal structures such as
              bones and organs, aiding in the diagnosis of fractures,
              infections, and other conditions.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M40.324 17.516a3.363 3.363 0 1 0-5.552 3.8a3.365 3.365 0 0 0 4.672.879a3.375 3.375 0 0 0 .879-4.679zm-4.818 6.117s-2.731-2.881-3.405-3.59c.045-.857.152-3.076.152-3.076a1.454 1.454 0 0 0-1.385-1.515a1.443 1.443 0 0 0-1.515 1.378l-.172 3.694c-.02.394.122.783.392 1.067l1.247 1.318l-3.745 2.472l.202-2.828a1.985 1.985 0 0 0-2.145-1.803s-3.561.246-4.853.354a1.49 1.49 0 0 0-1.354 1.612a1.49 1.49 0 0 0 1.608 1.357c.901-.079 3.009-.151 3.863-.222c0 0-.74 2.154-.587 3.217c.096.697.296 1.399.721 2.021a4.21 4.21 0 0 0 5.854 1.094l4.74-3.241a2.16 2.16 0 0 0 .691-2.768a1.4 1.4 0 0 0-.309-.54z"
                />
                <path
                  fill="currentColor"
                  d="M43.783 36.417a4.274 4.274 0 0 1 2.551-5.475l3.601 9.834h3.325V8.457H10.928v32.319h34.453zM14.768 25.052l14.059-14.066a4.61 4.61 0 0 0 6.527 0l14.064 14.066c-9.568 9.566-25.082 9.566-34.65 0"
                />
                <path
                  fill="currentColor"
                  d="M55.486.37H8.701C4.116.37.387 4.101.387 8.686v46.78c0 4.586 3.73 8.317 8.314 8.317h46.785c4.584 0 8.316-3.731 8.316-8.317V8.686c0-4.585-3.731-8.316-8.316-8.316m-.927 41.707h-4.142l.683 1.887a5.97 5.97 0 0 1-.996 5.845l2.451 7.082l-10.368-.002l-1.239-3.749a5.98 5.98 0 0 1-4.522-3.834l-2.636-7.23H9.628V7.156h44.931z"
                />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              Ultrasound
            </h2>
            <p className="text-justify text-sm md:text-base">
              Non-invasive imaging that uses sound waves to create images of
              internal organs, often used for monitoring pregnancies and
              diagnosing conditions related to the abdomen, heart, and soft
              tissues.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="5.8em"
                viewBox="0 0 72 72"
              >
                <path
                  fill="#92d3f5"
                  d="M11.797 32.146h12.968a1.7 1.7 0 0 1 1.207.502a14.4 14.4 0 0 1 2.554 3.097l.015.053a1.69 1.69 0 0 1-1.655 2.106l-15.067-.008a1.7 1.7 0 0 1-1.7-1.686l-.023-2.347a1.7 1.7 0 0 1 1.701-1.717"
                />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.986 42.762a20.43 20.43 0 0 0 39.6-7.484a20.43 20.43 0 0 0-39.684-7.257s8.798.275 8.887.167c3.72-4.512 6.023-5.59 10.318-5.59a12.682 12.682 0 0 1 0 25.36a12.36 12.36 0 0 1-10.198-5.412m-8.577-.134l7.241.044"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m10.186 40.904l26.07.078a3.23 3.23 0 0 1-2.036 1.41c-1.252.156-24.068.035-24.068.035Z"
                />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M11.797 32.146h12.968a1.7 1.7 0 0 1 1.207.502a14.4 14.4 0 0 1 2.554 3.097l.015.053a1.69 1.69 0 0 1-1.655 2.106l-15.067-.008a1.7 1.7 0 0 1-1.7-1.686l-.023-2.347a1.7 1.7 0 0 1 1.701-1.717Z"
                />
                <ellipse cx="32.8" cy="34.819" rx="3.217" ry="3.199" />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">
              CT Scan
            </h2>
            <p className="text-justify text-sm md:text-base">
              An advanced imaging tool that creates detailed cross-sectional
              images of the body, allowing for the diagnosis of conditions such
              as tumors, blood clots, and internal injuries.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center items-center mx-auto rounded-full border-2 border-[#1F2B6C] w-[120px] h-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4.8em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M3.765 7A10.5 10.5 0 0 1 13 1.5c5.799 0 10.5 4.701 10.5 10.5S18.799 22.5 13 22.5A10.5 10.5 0 0 1 3.289 16M18 16H3.289M0 16h3.289M2 13h9.5v-1a3 3 0 0 0-3-3c-.54 0-4.692.437-8.4.84m13.4 1.56s1 1.6 2.25 1.6a1.75 1.75 0 0 0 1.75-1.75c0-.966-.784-1.746-1.75-1.746c-1.25 0-2.25 1.596-2.25 1.596z"
                />
              </svg>
            </div>
            <h2 className="text-center text-[#1F2B6C] font-bold my-2">MRI</h2>
            <p className="text-justify text-sm md:text-base">
              A detailed imaging test that uses magnetic fields to create clear
              images of soft tissues, muscles, and the brain, aiding in the
              diagnosis of neurological disorders and joint problems.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <FooterCom />
    </div>
  );
}

export default Services;
