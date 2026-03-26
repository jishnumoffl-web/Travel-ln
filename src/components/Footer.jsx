"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-14 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            {/* <h3 className="text-xl font-black mb-4">
              Lekshmi Narayan Associates
            </h3> */}
            <img src="/images/durga.webp" alt="" className="h-18" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted travel service offering safe, comfortable, and
              well-organized devotional journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              {/* <li className="hover:text-white cursor-pointer">
                Sabarimala Package
              </li> */}
              <li className="hover:text-white cursor-pointer">Testimonials</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Packages
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Sabarimala Pilgrimage
              </li>
              <li className="hover:text-white cursor-pointer">
                Group Packages
              </li>
              <li className="hover:text-white cursor-pointer">
                Family Packages
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={14} /> +91 8714135772
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={14} /> WhatsApp Support
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} /> durgatravels@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} /> Nagampadam,Kottayam,Kerala 686001
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ayyappa Travels. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a className="hover:text-gray-300 cursor-pointer">
              <Facebook size={16} />
            </a>
            <a className="hover:text-gray-300 cursor-pointer">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
