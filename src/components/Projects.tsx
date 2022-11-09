import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen bg-[#e2eafc] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6f85b8]">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
