/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docData from "./DoctorData";

export default function Carousel() {
  const sliderSettings = {
    // fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#1F2B6C] pb-10 my-8">
      <h3 className="text-center font-bold text-[#1F2B6C] text-2xl pt-2">
        Testimonials
      </h3>
      <Slider {...sliderSettings} className="testimonial  mx-14 my-8">
        {docData.map((card, index) => (
          <div className="testimonial-col px-8">
            <img
              src={card.img}
              alt="mot"
              style={{ width: "40px", height: "40px" }}
              className="testimonial-img rounded-full border-[#fff] border-2"
            />
            <h3 className="mt-2 font-bold text-sm text-white">{card.title}</h3>
            <p className="mt-2 italic font-medium text-sm text-white text-justify">
              {card.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
