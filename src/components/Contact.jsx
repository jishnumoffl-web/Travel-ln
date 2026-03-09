"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="relative px-6 py-20 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/18/be/1f/18be1f7af1db345172b4096613fef6a2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Contact Us
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            Reach us anytime for Sabarimala booking & travel assistance
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Phone size={18} />,
                title: "Phone",
                value: "0474 297 0879",
              },
              {
                icon: <MessageCircle size={18} />,
                title: "WhatsApp",
                value: "Quick booking & enquiry support",
              },
              {
                icon: <Mail size={18} />,
                title: "Email",
                value: "travelpeakklm@gmail.com",
              },
              {
                icon: <MapPin size={18} />,
                title: "Location",
                value:
                  "AKL COMPLEX,OPP CORPORATION BANK PALLIMUKKU , Kollam (Quilon), India, 691010",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-white text-black rounded-xl shadow">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Form */}
          <div className="bg-white text-black rounded-3xl shadow-xl p-8">
            <h3 className="text-lg font-black mb-6">Send us a message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
