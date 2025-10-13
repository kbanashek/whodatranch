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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen mt-16">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full h-full relative">
              <Image
                src={image}
                alt={`Who Dat Ranch - View ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            {/* Premium Badge */}
            <div className="inline-block mb-6">
              <div className="px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full">
                <p className="text-white font-semibold tracking-wider text-sm uppercase">
                  Luxury Estate • 32 Acres • Central Florida
                </p>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-display leading-tight">
              Who Dat Ranch
            </h1>
            
            <div className="w-24 h-1 bg-accent mb-8"></div>
            
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-light max-w-3xl">
              A rare opportunity to own a <span className="font-semibold text-accent">world-class equestrian estate</span> in the heart of Central Florida. 
              Three custom cabins, pristine pastures, and endless possibilities await on this exclusive 32-acre sanctuary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button
                onClick={scrollToBooking}
                className="group px-10 py-5 bg-accent text-white font-bold text-lg rounded-none hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-accent/50 relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Private Tour</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("property-overview");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl"
              >
                Explore Property
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 max-w-2xl">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">32</p>
                <p className="text-white/80 text-sm uppercase tracking-wider">Acres</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">3</p>
                <p className="text-white/80 text-sm uppercase tracking-wider">Cabins</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">∞</p>
                <p className="text-white/80 text-sm uppercase tracking-wider">Possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/80 text-xs uppercase tracking-widest mb-2">Discover More</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
