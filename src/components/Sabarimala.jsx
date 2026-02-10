"use client";

import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const SabarimalaPackage = () => {
  return (
    <section className="bg-[#f9f7f3] text-[#0000008d] px-6 py-14 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            Devotional Travel
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Sabarimala <br /> Pilgrimage Package
          </h2>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Experience a peaceful and well-organized pilgrimage to
            <strong> Lord Ayyappa’s sacred Sabarimala temple</strong>. Our
            package is designed for comfort, safety, and devotion.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {[
              "AC / Non-AC vehicle options",
              "Experienced pilgrimage drivers",
              "Pamba drop & pickup assistance",
              "Comfortable accommodation",
              "Group & family friendly",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle size={16} className="text-black" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-7 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition">
              Book Now
            </button>

            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:gap-3 transition-all">
              View Itinerary <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-black/5 rounded-3xl"></div>

          <img
            src="https://i.pinimg.com/736x/57/df/6e/57df6eeebbcd6924a55fd247ed860c15.jpg"
            alt="Sabarimala Temple"
            className="relative rounded-3xl shadow-xl w-full h-[420px] object-cover"
          />

          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-xs font-bold uppercase tracking-widest">
            Ayyappa Swamy 🙏
          </div>
        </div>
      </div>
    </section>
  );
};

export default SabarimalaPackage;
