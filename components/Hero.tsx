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
            <div className="w-full h-full bg-gradient-to-r from-primary/30 to-transparent relative">
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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              For Sale Now: Who Dat Ranch
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Welcome to Who Dat Ranch, the perfect retreat for those seeking
              luxury, tranquility, and adventure all in one place. Explore our
              one of a kind property and immerse yourself in a home with an
              array of experiences all within 32 acres of paradise which could
              be yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
              >
                Book Your Visit
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("property-overview");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
