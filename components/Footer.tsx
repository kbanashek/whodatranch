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
    <footer className="bg-black text-white py-24 border-t-4 border-accent">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 font-display uppercase tracking-tight">
              Who Dat Ranch
            </h3>
            <div className="w-32 h-1 bg-accent mb-8"></div>
            <p className="text-xl mb-10 text-white/90">
              Brought to you by King Gilbert & Matthew Christian
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <p className="font-bold text-accent mb-4 text-sm uppercase tracking-[0.3em]">
                  Your Path to Luxury Living
                </p>
                <a href="tel:813-530-2061" className="block text-white/90 hover:text-accent transition-colors text-xl mb-2 font-light">
                  813-530-2061
                </a>
                <a href="tel:813-492-8233" className="block text-white/90 hover:text-accent transition-colors text-xl font-light">
                  813-492-8233
                </a>
              </div>

              <div>
                <p className="font-bold text-accent mb-4 text-sm uppercase tracking-[0.3em]">Email</p>
                <a href="mailto:mchristian@trinitygroupfl.com" className="block text-white/90 hover:text-accent transition-colors mb-2 text-lg">
                  mchristian@trinitygroupfl.com
                </a>
                <a href="mailto:kgilbert@trinitygroupfl.com" className="block text-white/90 hover:text-accent transition-colors text-lg">
                  kgilbert@trinitygroupfl.com
                </a>
              </div>

              <div>
                <p className="font-bold text-accent mb-4 text-sm uppercase tracking-[0.3em]">Location</p>
                <p className="text-white/90 text-lg">5330 Hwy 630 E</p>
                <p className="text-white/90 text-lg">Frostproof, FL 33843</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-white/20 hover:border-accent hover:bg-accent transition-all text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-white/20 hover:border-accent hover:bg-accent transition-all text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-white/20 hover:border-accent hover:bg-accent transition-all text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-white/20 hover:border-accent hover:bg-accent transition-all text-2xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-4xl md:text-5xl font-bold mb-6 font-display uppercase tracking-tight">
              Schedule a Visit
            </h4>
            <div className="w-24 h-1 bg-accent mb-10"></div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 focus:outline-none focus:border-accent text-white placeholder-white/50 transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 focus:outline-none focus:border-accent text-white placeholder-white/50 transition-colors"
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
                  className="px-5 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 focus:outline-none focus:border-accent text-white transition-colors"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 focus:outline-none focus:border-accent text-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-10 py-5 bg-accent text-white font-bold text-lg uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl border-2 border-accent relative overflow-hidden"
              >
                <span className="relative z-10">Request Tour</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-white/10 pt-10 text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest">© 2025 Who Dat Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
