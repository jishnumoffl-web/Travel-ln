"use client";

import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ramesh Kumar",
      place: "Kochi, Kerala",
      review:
        "The Sabarimala trip was very well arranged. Vehicle, accommodation and Pamba assistance were smooth. Truly a peaceful experience.",
    },
    {
      name: "Suresh Nair",
      place: "Alappuzha",
      review:
        "Drivers were experienced and supportive. Everything was on time. We felt safe and focused only on devotion.",
    },
    {
      name: "Anil Menon",
      place: "Trivandrum",
      review:
        "Very professional service. Ideal for families and senior citizens. Highly recommended for Sabarimala pilgrims.",
    },
  ];

  return (
    <section className="bg-white px-6 text-[#0000008d] py-16 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            Devotee Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            What Our Pilgrims Say
          </h2>
          <p className="text-sm text-gray-500 mt-4">
            Trusted by hundreds of Ayyappa devotees across Kerala
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-black text-black" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* User */}
              <div className="border-t pt-4">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-xs text-gray-400">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
