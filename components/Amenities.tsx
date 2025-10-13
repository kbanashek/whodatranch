"use client";

import Image from "next/image";
import { FaFish, FaCar, FaPaw } from "react-icons/fa";

export default function Amenities() {
  const amenities = [
    {
      icon: FaFish,
      title: "Fishing Ponds",
      description:
        "Grab a rod and enjoy ponds filled with bass, perch and more while you unwind by the water. Whether lake-side or dock fishing is your preference enjoy a calming experience catching your potential lunch.",
      image: "/images/fishing-pond.jpg",
    },
    {
      icon: FaCar,
      title: "Machine Garages",
      description:
        "With ample space to let loose, enjoy a high speed chase or a slow paced cruise through the entire property with multiple fully customized Polaris machines with more than enough juice to entertain as well as storage to carry on site picnic gear.",
      image: "/images/garage.jpg",
    },
    {
      icon: FaPaw,
      title: "Multiple Barns",
      description:
        "Take a stroll through the animal area and feed or play with a host of wildlife who call Who Dat Ranch home.",
      image: "/images/barn.jpg",
    },
  ];

  return (
    <section id="activities" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Recreation & Lifestyle
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 font-display leading-none uppercase tracking-tight">
            World-Class Amenities
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Experience a lifestyle where every day brings new adventures. This
            isn&apos;t just a property— it&apos;s your private resort with endless
            entertainment for family and guests.
          </p>
        </div>

        <div className="space-y-24">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="mb-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-5 bg-accent">
                      <amenity.icon className="text-5xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-primary font-display uppercase tracking-tight">
                        {amenity.title}
                      </h3>
                      <div className="w-20 h-1 bg-accent mt-2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              <div
                className={`group relative h-[500px] overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-bold text-2xl">
                    {amenity.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group px-16 py-6 bg-accent text-white font-bold text-xl uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl border-2 border-accent relative overflow-hidden"
          >
            <span className="relative z-10">Experience It Yourself</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
