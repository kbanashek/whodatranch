"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

interface VideoItem {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  description?: string;
}

export default function VirtualTour() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // You'll need to replace these with actual video URLs
  // For now, using placeholder YouTube embed format
  const videos: VideoItem[] = [
    {
      title: "Interior & Drone View",
      videoUrl: "https://www.youtube.com/embed/yOSgz_nmqP8",
      thumbnailUrl: "/images/hero1.jpg",
      description: "Aerial and interior views of the property",
    },
    {
      title: "Life at Who Dat Ranch",
      videoUrl: "https://www.youtube.com/embed/fcFAYZp4bdU",
      thumbnailUrl: "/images/gallery1.jpg",
      description: "Experience daily life at the ranch",
    },
    {
      title: "Drone & 3 Cabins",
      videoUrl: "https://www.youtube.com/embed/hsDhF9849dQ",
      thumbnailUrl: "/images/hero2.jpg",
      description: "Stunning aerial views of all three cabins",
    },
    {
      title: "Main House Interior",
      videoUrl: "https://www.youtube.com/embed/xqh2n70eKAQ",
      thumbnailUrl: "/images/main-home.jpg",
      description: "Tour the beautiful main home",
    },
    {
      title: "Westgate River Ranch",
      videoUrl: "https://www.youtube.com/embed/dCpjnDXz87w",
      thumbnailUrl: "/images/gallery3.jpg",
      description: "Explore the nearby Westgate River Ranch",
    },
  ];

  return (
    <section id="virtual-tour" className="py-32 md:py-40 mt-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Video Experience
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-primary mb-8 font-display leading-none uppercase tracking-tight">
            Virtual Tour
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Take a virtual tour of Who Dat Ranch and experience the property
            from the comfort of your home
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white border-4 border-gray-200 hover:border-accent shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Video Thumbnail */}
              <div
                className="relative h-80 bg-black cursor-pointer overflow-hidden"
                onClick={() => setSelectedVideo(index)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-accent border-4 border-white flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                    <FaPlay className="text-white text-3xl ml-2" />
                  </div>
                </div>

                {/* Coming Soon Badge (remove when videos are added) */}
                {!video.videoUrl && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-8 bg-white">
                <h3 className="text-3xl font-bold text-primary mb-3 font-display uppercase tracking-tight">
                  {video.title}
                </h3>
                <div className="w-16 h-1 bg-accent mb-4"></div>
                {video.description && (
                  <p className="text-gray-700 text-lg">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                window.location.href = "/#booking";
              }
            }}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Schedule Your In-Person Tour
          </button>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo !== null && videos[selectedVideo].videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-50"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Replace with actual video embed based on your video platform */}
            <iframe
              src={videos[selectedVideo].videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videos[selectedVideo].title}
            />
          </div>
        </div>
      )}
    </section>
  );
}
