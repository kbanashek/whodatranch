"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Property view 1" },
  { src: "/images/gallery2.jpg", alt: "Property view 2" },
  { src: "/images/gallery3.jpg", alt: "Property view 3" },
  { src: "/images/gallery4.jpg", alt: "Property view 4" },
  { src: "/images/gallery5.jpg", alt: "Property view 5" },
  { src: "/images/gallery6.jpg", alt: "Property view 6" },
  { src: "/images/gallery7.jpg", alt: "Property view 7" },
  { src: "/images/gallery8.jpg", alt: "Property view 8" },
  { src: "/images/gallery9.jpg", alt: "Property view 9" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 font-serif">
          Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            {selectedImage > 0 && (
              <button
                className="absolute left-4 text-white text-4xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                ‹
              </button>
            )}
            {selectedImage < galleryImages.length - 1 && (
              <button
                className="absolute right-4 text-white text-4xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
