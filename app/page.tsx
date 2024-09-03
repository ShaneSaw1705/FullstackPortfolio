"use client";
import AboutMe from "@/components/aboutme";
import Hero from "@/components/hero";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default LandingPage;
