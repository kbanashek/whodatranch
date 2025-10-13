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
    <section
      id="property-overview"
      className="py-24 md:py-32 bg-gradient-to-b from-white to-ranch-cream"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              The Estate
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 font-display leading-none uppercase tracking-tight">
            A Legacy Property
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            32 acres of pristine Central Florida paradise, meticulously crafted
            for luxury living and endless possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative h-[600px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <Image
              src="/images/drone_view.png"
              alt="Who Dat Ranch Aerial View"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="bg-black/80 backdrop-blur-sm p-6 border-t-4 border-accent">
                <h3 className="text-3xl font-bold text-white mb-2 font-display uppercase tracking-wide">
                  Main House
                </h3>
                <p className="text-white/90 text-sm uppercase tracking-widest">
                  4 Bedrooms • 3 Bathrooms • Heated Pool
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display uppercase tracking-tight">
                Your Private Sanctuary
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Nestled in the heart of{" "}
                <span className="font-bold text-accent">
                  Frostproof, Florida
                </span>
                , Who Dat Ranch represents a rare convergence of luxury,
                privacy, and endless recreational opportunity. This is more than
                an estate—it&apos;s a lifestyle destination where families create
                lasting memories or savvy investors discover Florida&apos;s most
                unique short-term rental opportunity.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-8 py-4 bg-accent/5">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                The 32-acre fully-fenced property features a magnificent
                4-bedroom, 3-bathroom main residence with screened heated pool
                and expansive front porch. Two additional guest cabins—including
                a one-bedroom efficiency and a fully-equipped 1/1 cottage with
                private patio—offer privacy for guests or income potential.
              </p>
            </div>

            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The estate comes alive with exotic animals including cows,
                goats, sheep, tortoises, and even a camel. Two stocked fishing
                ponds with covered docks, a bird-watching tower, RC racing
                track, skeet shooting, archery range, and ATV/Polaris course
                transform this property into Central Florida&apos;s premier
                recreational paradise.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h3 className="text-5xl md:text-6xl font-bold text-primary text-center mb-16 font-display uppercase tracking-tight">
            Estate Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-10 bg-white border-3 border-gray-200 hover:border-accent hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                <feature.icon className="text-6xl text-accent mb-6 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-center text-gray-900 font-bold text-xs uppercase tracking-[0.2em]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="bg-black p-16 md:p-20 shadow-2xl relative overflow-hidden border-t-4 border-accent">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display uppercase tracking-tight">
              Unmatched Amenities
            </h3>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              The estate boasts two stocked fishing ponds, axe throwing station,
              fire pit, and an impressive 8-car carport. For collectors and
              enthusiasts, a 4-bay machine garage provides vehicle storage,
              while a massive 4-bay garage accommodates 50-foot trailers, RVs,
              tour buses, or yachts—complete with a private service entrance
              separate from the main property access.
            </p>
          </div>
        </div>

        {/* CTA */}
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
            <span className="relative z-10">Schedule Private Showing</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
