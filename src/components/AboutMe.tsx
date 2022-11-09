import React from "react";
import meg from '../assets/bildeavMeg.png'


const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#669bbc] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Victoria, nice to meet you. Pleace take a look around.</p>
          </div>
          <div>
            <img
              className="object-contain md:object-scale-down h-49 w-96"
              src={meg}
              alt="Portrait picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
