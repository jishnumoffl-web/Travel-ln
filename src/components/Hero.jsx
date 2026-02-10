"use client";

import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const images = [
  "/images/hero1.webp",
  "/images/hero2.webp",
  "/images/hero3.webp",
];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Background carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[95vh] overflow-hidden font-sans">
      {/* Background carousel */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentImage ? "opacity-100 scale-105" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/35" />

      {/* Transparent Navbar */}
      <nav className="relative z-20 px-6 md:px-12 py-5">
        <div className="flex items-center justify-between text-white">
          {/* Logo */}
          {/* <img
            src="/images/logo.webp"
            alt="logo"
            className="h-8 object-contain"
          /> */}
          <div className="leading-none select-none ">
            <h1 className="font-[Cinzel] text-[8px] md:text-sm tracking-[0.25em] text-white">
              LEKSHMI NARAYAN
            </h1>
            <p className="font-[Cinzel] text-[7px] md:text-xs tracking-[0.6em] text-white/80 text-center mt-1">
              ASSOCIATES
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-sm font-medium">
            {["Home", "Destinations", "Packages", "Blog", "About"].map(
              (item) => (
                <a key={item} href="#" className="hover:opacity-75 transition">
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center border border-white/30 rounded-full px-4 py-2 text-xs backdrop-blur-md">
              <input
                placeholder="Search places..."
                className="bg-transparent focus:outline-none w-32 placeholder-white/70"
              />
              <Search size={14} />
            </div>

            <button className="hidden md:block border border-white/40 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
              Book now
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 rounded-2xl bg-black/80 backdrop-blur-lg text-white p-6 space-y-4 text-center">
            {["Home", "Destinations", "Packages", "Blog", "About"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
            <button className="w-full border border-white/40 py-3 rounded-full mt-2">
              Book now
            </button>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          EXPLORE
          {/* <span className="text-lg md:text-2xl align-top ml-2">PH</span> */}
        </h1>

        <p className="max-w-xl mt-4 text-sm md:text-base opacity-90">
          Explore breathtaking destinations with curated trips and stress-free
          planning.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">
            Plan Trip
          </button>
          <button className="border border-white px-7 py-3 rounded-full font-bold text-sm">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
