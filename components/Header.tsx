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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold font-serif text-primary">
            Who Dat Ranch
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("virtual-tour")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Virtual Tour
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Activities
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("virtual-tour")}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Virtual Tour
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </button>
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
