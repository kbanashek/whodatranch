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
      title: "Life at Who Dat Ranch",
      videoUrl: "",
      thumbnailUrl: "/images/gallery1.jpg",
      description: "Experience daily life at the ranch",
    },
    {
      title: "Interior & Drone View",
      videoUrl: "",
      thumbnailUrl: "/images/gallery2.jpg",
      description: "Aerial and interior views of the property",
    },
    {
      title: "Airstrip & Westgate Ranch",
      videoUrl: "",
      thumbnailUrl: "/images/gallery3.jpg",
      description: "Explore the airstrip and surrounding areas",
    },
    {
      title: "Main Home Interior",
      videoUrl: "",
      thumbnailUrl: "/images/gallery4.jpg",
      description: "Tour the beautiful main home",
    },
  ];

  return (
    <section id="virtual-tour" className="py-20 mt-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Video Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take a virtual tour of Who Dat Ranch and experience the property
            from the comfort of your home
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Video Thumbnail */}
              <div
                className="relative h-64 bg-gray-900 cursor-pointer group"
                onClick={() => setSelectedVideo(index)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                    <FaPlay className="text-primary group-hover:text-white text-2xl ml-1" />
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
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-gray-600">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Need the Video URLs?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To complete the virtual tour, you&apos;ll need to add your video
              URLs (YouTube, Vimeo, or direct video links). Update the{" "}
              <code className="bg-white px-2 py-1 rounded text-sm">
                videoUrl
              </code>{" "}
              field in{" "}
              <code className="bg-white px-2 py-1 rounded text-sm">
                components/VirtualTour.tsx
              </code>
            </p>
          </div>
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

