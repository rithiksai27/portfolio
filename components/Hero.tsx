import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 h-screen flex flex-col justify-center items-center">
      {/* UI: Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Problem Solver
          </p>

          <TextGenerateEffect words="Rithik Sai" className="text-center text-[40px] md:text-5xl lg:text-6xl" />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Creating the Future of Technology Today
          </p>

          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Resume"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-xl font-bold text-blue-500 hover:text-blue-700"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
