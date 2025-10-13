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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6 font-serif">
              Who Dat Ranch
            </h3>
            <p className="text-lg mb-6">
              Brought to you by King Gilbert & Matthew Christian
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-semibold text-accent mb-2">
                  Your Path to Luxury Living
                </p>
                <p className="text-gray-300">Call 813-530-2061</p>
                <p className="text-gray-300">813-492-8233</p>
              </div>

              <div>
                <p className="font-semibold text-accent mb-2">Email:</p>
                <p className="text-gray-300">mchristian@trinitygroupfl.com</p>
                <p className="text-gray-300">kgilbert@trinitygroupfl.com</p>
              </div>

              <div>
                <p className="font-semibold text-accent mb-2">Address:</p>
                <p className="text-gray-300">5330 Hwy 630 E</p>
                <p className="text-gray-300">Frostproof, FL, USA</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-2xl font-bold mb-6 font-serif">
              Quick Contact
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2035 by Who Dat Ranch. Powered and secured by Wix</p>
        </div>
      </div>
    </footer>
  );
}
