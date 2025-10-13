"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image Slideshow */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Who Dat Ranch - Luxury Estate ${index + 1}`}
              fill
              className="object-cover scale-105 animate-slow-zoom"
              priority={index === 0}
              quality={100}
            />
          </div>
        ))}
        {/* Dramatic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
          <div className="max-w-5xl">
            {/* Luxury Badge */}
            <div className="mb-8">
              <div className="inline-block px-8 py-3 bg-accent border-2 border-accent shadow-2xl">
                <p className="text-white font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
                  Exclusive Offering
                </p>
              </div>
            </div>

            {/* Main Headline - MASSIVE */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 font-display leading-[0.9] tracking-tight drop-shadow-2xl">
              WHO DAT
              <br />
              RANCH
            </h1>

            <div className="w-32 h-1 bg-accent mb-10"></div>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-6 leading-tight font-light drop-shadow-lg">
              32-Acre Luxury Equestrian Estate
            </p>

            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl drop-shadow-md">
              Frostproof, Florida • Three Custom Cabins • Stocked Ponds •
              Private Paradise
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button
                onClick={scrollToBooking}
                className="group px-12 py-6 bg-accent text-white font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl relative overflow-hidden border-2 border-accent"
              >
                <span className="relative z-10">Schedule Showing</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("property-overview");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group px-12 py-6 bg-transparent border-3 border-white text-white font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl"
              >
                View Details
              </button>
            </div>

            {/* Key Features Bar */}
            <div className="flex flex-wrap gap-6 md:gap-12 pt-8 border-t-2 border-white/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent"></div>
                <p className="text-white font-bold text-lg uppercase tracking-wider">
                  32 Acres
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent"></div>
                <p className="text-white font-bold text-lg uppercase tracking-wider">
                  3 Residences
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent"></div>
                <p className="text-white font-bold text-lg uppercase tracking-wider">
                  Investment Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-3">
          <p className="text-white/70 text-xs uppercase tracking-[0.3em] font-bold">
            Scroll
          </p>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-4 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-10 right-10 z-20 text-white/60 text-sm font-bold tracking-wider">
        {currentImageIndex + 1} / {heroImages.length}
      </div>
    </section>
  );
}
