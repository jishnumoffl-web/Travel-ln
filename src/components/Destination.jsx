"use client";

import React from "react";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Vagamon",
    tagline: "Beach paradise",
    rating: "4.8",
    reviews: "1.2k",
    location: "Location, Kerala",
    price: "4,999",
    image:
      "https://i.pinimg.com/736x/3d/5a/ff/3d5aff781699a3575bc8e18b6cc06719.jpg", // Replace with your image
  },
  {
    id: 2,
    name: "Munnar",
    tagline: "Mount Getaway",
    rating: "4.6",
    reviews: "950",
    location: "Benguet, Region",
    price: "3,200",
    image:
      "https://i.pinimg.com/1200x/8b/a1/e0/8ba1e06ee597c20c7d8975b4449c9646.jpg",
  },
  {
    id: 3,
    name: "Thekkadi",
    tagline: "Surf & Chill",
    rating: "4.9",
    reviews: "2k",
    location: "Surigao del Norte, Region",
    price: "5,500",
    image:
      "https://i.pinimg.com/1200x/64/fb/a6/64fba63ee81a4c82ff09c86284df5024.jpg",
  },
  {
    id: 4,
    name: "Wayanad",
    tagline: "Heritage City",
    rating: "4.7",
    reviews: "780",
    location: "Ilocos Sur, Region",
    price: "4,250",
    image:
      "https://i.pinimg.com/1200x/17/c9/f6/17c9f6d37db9b68eb4035b3b09ed3319.jpg",
  },
  {
    id: 5,
    name: "Ponmudi",
    tagline: "Heritage City",
    rating: "4.7",
    reviews: "780",
    location: "Ilocos Sur, Region",
    price: "4,250",
    image:
      "https://i.pinimg.com/1200x/a8/4e/bf/a84ebfc392b9281144c23e26c8a635d1.jpg",
  },
  {
    id: 6,
    name: "Idukki Dam",
    tagline: "Heritage City",
    rating: "4.7",
    reviews: "780",
    location: "Ilocos Sur, Region",
    price: "4,250",
    image:
      "https://i.pinimg.com/736x/e2/c2/02/e2c20287e367d82664a2e687b7ba538c.jpg",
  },
];

const DestinationsSection = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-16 px-6 md:px-12 lg:px-20 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="text-3xl font-bold text-slate-900">Top Destinations</h2>
        <p className="max-w-md text-slate-600 text-sm md:text-base leading-relaxed">
          From island escapes to cool mountain towns, discover where your next
          journey will take you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="group relative h-[400px] w-full rounded-[32px] overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Price Tag (Top Right) */}
            <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
              <span className="text-white text-[10px] uppercase font-medium mr-1 opacity-80">
                starts at
              </span>
              <span className="text-white text-xs font-bold">
                ₱{item.price}
              </span>
            </div>

            {/* Content (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">{item.name}</h3>

              <div className="flex items-center gap-2 text-xs opacity-90 mb-3">
                <span>{item.tagline}</span>
                <span className="opacity-50">|</span>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{item.rating}</span>
                  <span className="opacity-60">({item.reviews})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs opacity-80">
                <MapPin size={14} className="text-red-500" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-12">
        <button className="bg-[#2D3E50] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors">
          View more
        </button>

        <div className="flex gap-3">
          <button className="p-3 rounded-full border border-slate-300 hover:bg-white transition-all">
            <ChevronLeft size={20} className="text-slate-700" />
          </button>
          <button className="p-3 rounded-full border border-slate-300 hover:bg-white transition-all">
            <ChevronRight size={20} className="text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
