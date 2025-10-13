"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold font-display text-primary tracking-tight">
            Who Dat Ranch
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="/"
              className="text-gray-800 hover:text-accent transition-colors font-medium tracking-wide text-sm uppercase"
            >
              Home
            </a>
            <a
              href="/virtual-tour"
              className="text-gray-800 hover:text-accent transition-colors font-medium tracking-wide text-sm uppercase"
            >
              Virtual Tour
            </a>
            <a
              href="/gallery"
              className="text-gray-800 hover:text-accent transition-colors font-medium tracking-wide text-sm uppercase"
            >
              Gallery
            </a>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-gray-800 hover:text-accent transition-colors font-medium tracking-wide text-sm uppercase"
            >
              Activities
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:mchristian@trinitygroupfl.com"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-accent transition-colors font-medium"
            >
              <FaEnvelope className="text-accent" />
              <span>Email</span>
            </a>
            <a
              href="tel:813-530-2061"
              className="flex items-center space-x-2 px-6 py-3 bg-accent text-white font-bold rounded-none hover:bg-accent/90 transition-colors shadow-lg"
            >
              <FaPhone />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="/"
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/virtual-tour"
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Virtual Tour
            </a>
            <a
              href="/gallery"
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <button
              onClick={() => scrollToSection("activities")}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Activities
            </button>
            <div className="border-t pt-4 space-y-2">
              <a
                href="mailto:mchristian@trinitygroupfl.com"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a
                href="tel:813-530-2061"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <FaPhone />
                <span>Call</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
