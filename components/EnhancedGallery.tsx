"use client";

import { useState } from "react";
import Image from "next/image";
import galleryData from "@/lib/gallery-images.json";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

type CategoryType =
  | "all"
  | "main-house"
  | "big-who"
  | "little-who"
  | "structures"
  | "lifestyle";

export default function EnhancedGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 24; // Show 24 images per page (4x6 grid)

  const allImages: GalleryImage[] = galleryData;

  const getCategoryCount = (category: CategoryType) => {
    if (category === "all") return allImages.length;
    return allImages.filter((img) => img.category === category).length;
  };

  const categories = [
    {
      id: "all" as CategoryType,
      name: "All Photos",
      count: getCategoryCount("all"),
    },
    {
      id: "main-house" as CategoryType,
      name: "Main House",
      count: getCategoryCount("main-house"),
    },
    {
      id: "big-who" as CategoryType,
      name: "Big Who Cabin",
      count: getCategoryCount("big-who"),
    },
    {
      id: "little-who" as CategoryType,
      name: "Little Who Cabin",
      count: getCategoryCount("little-who"),
    },
    {
      id: "structures" as CategoryType,
      name: "Ranch Structures",
      count: getCategoryCount("structures"),
    },
    {
      id: "lifestyle" as CategoryType,
      name: "Ranch Lifestyle",
      count: getCategoryCount("lifestyle"),
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Property Gallery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore every detail of Who Dat Ranch through our comprehensive
            photo collection
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold text-primary">
              {startIndex + 1}-{Math.min(endIndex, filteredImages.length)}
            </span>{" "}
            of {filteredImages.length} photos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => {
            const actualIndex = startIndex + index;
            return (
            <div
              key={actualIndex}
              className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(actualIndex)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                  +
                </span>
              </div>
            </div>
          );
        })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              ← Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold ${
                      currentPage === pageNum
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              Next →
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-50"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
            {selectedImage > 0 && (
              <button
                className="absolute left-4 text-white text-5xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                ‹
              </button>
            )}
            {selectedImage < filteredImages.length - 1 && (
              <button
                className="absolute right-4 text-white text-5xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                ›
              </button>
            )}
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              window.location.href = "/#booking";
            }}
            className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            Schedule a Private Tour
          </button>
        </div>
      </div>
    </section>
  );
}
