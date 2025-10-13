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
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Amenities
          </h2>
          <p className="text-xl text-gray-700">Exclusive Features</p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A home that&apos;s more than a home! Never get bored as this 32 acre
            property offers an array of activities to keep the whole family
            entertained while enjoying each other&apos;s company.
          </p>
        </div>

        <div className="space-y-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="flex items-center mb-4">
                  <amenity.icon className="text-5xl text-primary mr-4" />
                  <h3 className="text-3xl font-bold text-gray-800 font-serif">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              <div
                className={`relative h-80 rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
