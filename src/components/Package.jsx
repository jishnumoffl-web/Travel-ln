"use client";

import React, { useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";

const TravelCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      id: 0,
      title: "Hill Stations",
      tag: "Nature",
      description: "Cool climate, mountains & scenic views",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
    },
    {
      id: 1,
      title: "Devotional Trips",
      tag: "Spiritual",
      description: "Temples, churches & peaceful journeys",
      image:
        "https://i.pinimg.com/736x/11/c0/13/11c013d998145d30ec34c56769d0fdc8.jpg",
    },
    {
      id: 2,
      title: "Beach Holidays",
      tag: "Relax",
      description: "Sea breeze, sunsets & calm vibes",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Adventure",
      tag: "Thrill",
      description: "Trekking, camping & adrenaline rush",
      image:
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-10 md:px-16">
      {/* Header */}
      <nav className="flex justify-between items-center mb-14">
        <h2 className="font-black text-[#0000008d] text-xl tracking-tight">
          Explore by Category
        </h2>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Menu size={20} />
        </button>
      </nav>

      {/* Title */}
      <div className="mb-14 max-w-xl">
        <h1 className="text-4xl md:text-6xl text-[#0000008d] font-black uppercase leading-tight">
          Choose your kind of travel
        </h1>
        <p className="text-gray-500 mt-4 text-sm">
          Discover destinations based on your mood and interest
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`group cursor-pointer transition-all duration-300 ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-[380px] object-cover transition-transform duration-500 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Category Tag */}
                <span className="absolute top-4 left-4 bg-white/90 text-[#0000008d] backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {item.tag}
                </span>

                {/* Arrow */}
                {isActive && (
                  <div className="absolute top-4 right-4 bg-white p-2 text-[#0000008d] rounded-full shadow">
                    <ArrowUpRight size={16} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-black uppercase text-[#0000008d] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TravelCategories;
