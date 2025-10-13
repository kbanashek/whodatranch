"use client";

import Image from "next/image";
import {
  FaBed,
  FaBath,
  FaHome,
  FaWarehouse,
  FaCar,
  FaFish,
} from "react-icons/fa";

export default function PropertyOverview() {
  const features = [
    { icon: FaBed, text: "4 Bedrooms" },
    { icon: FaBath, text: "3 Bathrooms" },
    { icon: FaHome, text: "32 Acres" },
    { icon: FaWarehouse, text: "Multiple Barns" },
    { icon: FaCar, text: "8-Car Carport" },
    { icon: FaFish, text: "2 Fishing Ponds" },
  ];

  return (
    <section id="property-overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Property Overview
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-700 mb-2">
            Home Details
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/main-home.jpg"
              alt="Who Dat Ranch Main Home"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Who Dat Ranch, located in <strong>Frostproof, FL</strong>, This
              beautiful home, nicknamed Who Dat Ranch, is truly a gem in the
              midst of paradise offering the opportunity to own a home that
              allows for a true escape from the world where you and your family
              can unplug under the stars or better yet, a budding investment
              property where the possibilities of a short term rental filled
              with an abundance of on site activities for guests awaits in this
              jewel of a home.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Who Dat Ranch offers 32 acres of fully fenced property home to a 4
              bedroom 3 bath main home with a screened in heated pool area and
              screened in front porch. On property you will find a small one
              bedroom efficiency dwelling as well as a 1/1 cottage equipped with
              full kitchen, living area and it&apos;s own screened in patio near
              the animal area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This slice of paradise is home to a small herd of cows, goats,
              sheep, tortoises, and a camel with enough land and multiple
              barns/stables to host more! Not to mention two ponds each with
              there own covered docks stocked with an array of fish species and
              viewing tower for bird watching, RC racing, skeet shooting,
              archery or the perfect place to watch the on site ATV/Polaris
              course.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <feature.icon className="text-4xl text-primary mb-3" />
              <span className="text-center text-gray-700 font-semibold">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The property includes a fishing pond, axe throwing station, fire
            pit, 8-car carport, a 4 bay machine garage for additional vehicle
            storage, and a massive machine garage with 4 bays large enough to
            hold 50 foot trailers, RV&apos;s, tour buses, yachts and whatever
            else your heart desires with a service entrance that avoids the main
            entrance.
          </p>
        </div>

        {/* CTA */}
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
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
