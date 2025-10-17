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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
            WHO DAT RANCH
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="/"
              className="text-white/90 hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase"
            >
              Home
            </a>
            <a
              href="/virtual-tour"
              className="text-white/90 hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase"
            >
              Virtual Tour
            </a>
            <a
              href="/gallery"
              className="text-white/90 hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase"
            >
              Gallery
            </a>
            <a
              href="/activities"
              className="text-white/90 hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase"
            >
              Activities
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:cat@hcbyachts.com"
              className="flex items-center space-x-2 px-5 py-3 text-white/90 hover:text-accent transition-colors font-bold border border-white/20 hover:border-accent"
            >
              <FaEnvelope />
              <span className="text-xs tracking-widest uppercase">Email</span>
            </a>
            <a
              href="tel:8636401902"
              className="flex items-center space-x-2 px-6 py-3 bg-accent text-white font-bold hover:bg-white hover:text-primary transition-colors shadow-2xl border-2 border-accent"
            >
              <FaPhone />
              <span className="text-xs tracking-widest uppercase">
                Call Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 bg-black/60 backdrop-blur-lg p-6 rounded-lg border border-white/10">
            <a
              href="/"
              className="block w-full text-left text-white hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Home
            </a>
            <a
              href="/virtual-tour"
              className="block w-full text-left text-white hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Virtual Tour
            </a>
            <a
              href="/gallery"
              className="block w-full text-left text-white hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Gallery
            </a>
            <a
              href="/activities"
              className="block w-full text-left text-white hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Activities
            </a>
            <div className="border-t border-white/20 pt-4 space-y-3">
              <a
                href="mailto:cat@hcbyachts.com"
                className="flex items-center space-x-3 text-white hover:text-accent transition-colors font-bold"
              >
                <FaEnvelope />
                <span className="uppercase tracking-wider text-xs">Email</span>
              </a>
              <a
                href="tel:8636401902"
                className="flex items-center space-x-3 text-accent hover:text-white transition-colors font-bold"
              >
                <FaPhone />
                <span className="uppercase tracking-wider text-xs">
                  Call Now
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
