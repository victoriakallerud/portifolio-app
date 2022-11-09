import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-gradient-to-r from-[#f8faff] to-[#0353a4]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          Victoria Kallerud
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#0353a4]">
          I´m a developer.
        </h2>
        <p className="text-[#0353a4] py-4 max-w-[700px]">
          Thanks for visiting my page, feel free to check out my portifolio
        </p>
        <div>
        <Link to="about" smooth={true} duration={500}>
          <button className="text-[#0353a4] group border-2 border-[#0353a45f] px-6 py-3 my-2 flex items-center hover:bg-[#0353a4] hover:border-[#0353a4] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
