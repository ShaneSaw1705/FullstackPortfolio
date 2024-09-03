/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { TbBrandReact, TbBrandTypescript, TbBrandNodejs, TbBrandGolang, TbBrandHtml5, TbBrandCss3, TbBrandTailwind, TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";

const Hero = () => {
  const adjectives = [
    "Beautiful",
    "Responsive",
    "Modern",
    "Fast",
    "Interactive",
    "Scalable",
    "Smooth",
    "Advanced",
  ];
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdjectiveIndex(
        (prevIndex) => (prevIndex + 1) % adjectives.length,
      );
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-evenly items-center h-[50vh] max-w-[1200px] lg:w-full lg:flex-row">
        <div className="text-4xl font-mono font-extrabold w-[40%]">
          <h1>Full Stack Developer 👋🏻</h1>
          <h2>Building</h2>
          <div className="items-center font-medium">
            <TextTransition
              className="text-primary font-extrabold font-mono"
              springConfig={presets.wobbly}
            >
              {
                adjectives[
                currentAdjectiveIndex % adjectives.length
                ]
              }
            </TextTransition>{" "}
            <span>Web Apps</span>
          </div>
        </div>
        <img
          className="mask mask-hexagon min-w-80"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
        />
      </div>
      <div className="flex flex-row gap-4 justify-start items-center *:text-2xl">
        <h2 className="font-mono">My Stack |</h2>
        <div className="flex flex-row gap-2">
          <TbBrandReact />
          <TbBrandNextjs />
          <TbBrandTypescript />
          <TbBrandNodejs />
          <TbBrandGolang />
          <TbBrandCSharp />
          <TbBrandHtml5 />
          <TbBrandCss3 />
          <TbBrandTailwind />
        </div>
      </div>
    </div>
  );
};

export default Hero;
