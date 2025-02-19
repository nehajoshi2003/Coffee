import React from "react";
import bgImage from "./images/bg_home.jpg";
import coffeeMug from "./images/coffee_mug.png";
import TestimonialCarousel from "./TestimonialCarousel";
import bgtest from "./images/test-bg.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay for blur effect */}
        <div className="absolute inset-0 backdrop-blur-[9px] bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1
              className="text-[72px] md:text-[104px] font-bold mb-4"
              style={{ fontFamily: '"Imperial Script", cursive' }}
            >
              Cafe Coffee
            </h1>
            <Link to="/menu">
              <button
                className="mt-2 px-6 py-3 bg-[#371c09] text-white text-[18px] md:text-[20px] hover:bg-[#a17859] hover:text-[#371c09] hover:text-[22px] md:hover:text-[25px] rounded-lg"
                style={{
                  fontFamily: '"Montserrat Alternates", serif',
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Speciality Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-[#371c09]">
        <div className="text-white max-w-lg text-center md:text-left md:mr-[100px]">
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: '"Montserrat Alternates", serif',
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Our Speciality
          </h2>
          <p
            className="text-lg md:text-xl mb-6"
            style={{
              fontFamily: '"Montserrat Alternates", serif',
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            At Cafe Coffee, we serve freshly brewed coffee with the finest beans
            sourced globally. Our signature blends and cozy ambiance make every
            cup special.
          </p>
          <Link to="/contact">
            <button
              className="mt-2 px-6 py-3 bg-white text-[#371c09] text-[18px] md:text-[20px] hover:bg-[#a17859] hover:text-[#371c09] hover:text-[22px] md:hover:text-[25px] rounded-lg"
              style={{
                fontFamily: '"Montserrat Alternates", serif',
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Coffee Mug Image */}
        <div className="mt-6 md:mt-0">
          <img
            src={coffeeMug}
            alt="Rotating Coffee Mug"
            className="w-52 md:w-96 animate-spin"
            style={{ animationDuration: "30s" }}
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
        style={{ backgroundImage: `url(${bgtest})` }}
      >
        {/* Overlay with blur effect */}
        <div className="w-full h-full backdrop-blur-[1px] bg-black bg-opacity-20 absolute top-0 left-0 z-0"></div>

        {/* Testimonial Box */}
        <div className="relative bg-[#271e1b] bg-opacity-50 rounded-xl shadow-2xl p-4 w-full max-w-[90%] md:max-w-[700px] z-10 ">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
