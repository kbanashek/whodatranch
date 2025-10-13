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
    <section id="property-overview" className="py-24 md:py-32 bg-gradient-to-b from-white to-ranch-cream">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest rounded-full">
              The Estate
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-display leading-tight">
            A Legacy Property
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            32 acres of pristine Central Florida paradise, meticulously crafted for luxury living and endless possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative h-[600px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <Image
              src="/images/main-home.jpg"
              alt="Who Dat Ranch Main Home"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="bg-white/95 backdrop-blur-sm p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-primary mb-2 font-display">Main House</h3>
                <p className="text-gray-700">4 Bedrooms • 3 Bathrooms • Heated Pool</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4 font-display">Your Private Sanctuary</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nestled in the heart of <span className="font-semibold text-accent">Frostproof, Florida</span>, 
                Who Dat Ranch represents a rare convergence of luxury, privacy, and endless recreational opportunity. 
                This is more than an estate—it's a lifestyle destination where families create lasting memories 
                or savvy investors discover Florida's most unique short-term rental opportunity.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The 32-acre fully-fenced property features a magnificent 4-bedroom, 3-bathroom main residence 
                with screened heated pool and expansive front porch. Two additional guest cabins—including a 
                one-bedroom efficiency and a fully-equipped 1/1 cottage with private patio—offer privacy 
                for guests or income potential.
              </p>
            </div>
            
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The estate comes alive with exotic animals including cows, goats, sheep, tortoises, and even a camel. 
                Two stocked fishing ponds with covered docks, a bird-watching tower, RC racing track, skeet shooting, 
                archery range, and ATV/Polaris course transform this property into Central Florida's premier 
                recreational paradise.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12 font-display">Estate Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-8 bg-white border-2 border-gray-100 hover:border-accent hover:shadow-2xl transition-all duration-300"
              >
                <feature.icon className="text-5xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-center text-gray-800 font-bold text-sm uppercase tracking-wide">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="bg-gradient-to-br from-primary to-primary/90 p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Unmatched Amenities</h3>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-4xl">
              The estate boasts two stocked fishing ponds, axe throwing station, fire pit, and an impressive 8-car carport. 
              For collectors and enthusiasts, a 4-bay machine garage provides vehicle storage, while a massive 4-bay garage 
              accommodates 50-foot trailers, RVs, tour buses, or yachts—complete with a private service entrance 
              separate from the main property access.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group px-12 py-5 bg-accent text-white font-bold text-lg rounded-none hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-accent/50 relative overflow-hidden"
          >
            <span className="relative z-10">Schedule Your Private Tour</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
