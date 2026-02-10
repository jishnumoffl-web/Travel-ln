"use client";

import React from "react";
import { ArrowRightCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
      {/* Background Stylized Mountains (Watermark effect) */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
        <svg
          width="600"
          height="400"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 400L150 100L300 300L450 0L600 400H0Z" fill="#2D3E50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side: Climber Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
            {/* The Climber - Ensure you use a transparent PNG */}
            <div className="relative z-20 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://i.pinimg.com/1200x/8a/33/89/8a3389185249e7975d9fcc832e301644.jpg"
                alt="Climber"
                className="w-full max-w-[450px] md:max-w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Decorative element behind climber (optional) */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#A38E77]/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Side: Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="text-[#A38E77] font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D3E50] leading-[1.1] mb-6">
              Nothing Feels Better Than <br className="hidden lg:block" />A
              Successful Climb
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-3 bg-[#A38E77] text-white px-8 py-4 rounded-md font-bold hover:bg-[#8d7a65] transition-all group shadow-lg">
              <ArrowRightCircle
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
