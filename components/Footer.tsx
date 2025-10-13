"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

interface FooterFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<FooterFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-earth text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Who Dat Ranch
            </h3>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-xl mb-8 text-white/90 font-light">
              Brought to you by King Gilbert & Matthew Christian
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <p className="font-bold text-accent mb-3 text-lg tracking-wide">
                  YOUR PATH TO LUXURY LIVING
                </p>
                <a href="tel:813-530-2061" className="block text-white/90 hover:text-accent transition-colors text-lg mb-1">
                  813-530-2061
                </a>
                <a href="tel:813-492-8233" className="block text-white/90 hover:text-accent transition-colors text-lg">
                  813-492-8233
                </a>
              </div>

              <div>
                <p className="font-bold text-accent mb-3 text-lg tracking-wide">EMAIL</p>
                <a href="mailto:mchristian@trinitygroupfl.com" className="block text-white/90 hover:text-accent transition-colors mb-1">
                  mchristian@trinitygroupfl.com
                </a>
                <a href="mailto:kgilbert@trinitygroupfl.com" className="block text-white/90 hover:text-accent transition-colors">
                  kgilbert@trinitygroupfl.com
                </a>
              </div>

              <div>
                <p className="font-bold text-accent mb-3 text-lg tracking-wide">LOCATION</p>
                <p className="text-white/90 text-lg">5330 Hwy 630 E</p>
                <p className="text-white/90 text-lg">Frostproof, FL 33843</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent transition-colors text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent transition-colors text-2xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-3xl font-bold mb-6 font-display">
              Schedule a Visit
            </h4>
            <div className="w-16 h-1 bg-accent mb-8"></div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white placeholder-white/60"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white placeholder-white/60"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white placeholder-white/60"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white placeholder-white/60"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-none focus:outline-none focus:border-accent text-white"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-5 bg-accent text-white font-bold text-lg rounded-none hover:bg-accent/90 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Request Tour</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Who Dat Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
