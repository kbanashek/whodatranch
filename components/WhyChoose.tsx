"use client";

import { FaHome, FaLeaf, FaChartLine } from "react-icons/fa";

export default function WhyChoose() {
  const benefits = [
    {
      icon: FaHome,
      title: "Luxury Living",
      subtitle: "Exclusive Amenities",
      description:
        "Immerse yourself in luxury with top-notch amenities including fully customized Polaris 4-wheelers, livestock, and diverse on-site activities.",
    },
    {
      icon: FaLeaf,
      title: "Tranquil Environment",
      subtitle: "Relaxation at its Best",
      description:
        "Enjoy the serenity of nature in a peaceful setting that embraces tranquility and rejuvenation.",
    },
    {
      icon: FaChartLine,
      title: "Investment Potential",
      subtitle: "Profitable Venture",
      description:
        "Unlock the investment potential of Who Dat Ranch as a profitable short-term rental property, offering a unique and extraordinary experience to guests.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-24 md:py-32 bg-gradient-to-b from-white to-ranch-cream"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              The Investment
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 font-display leading-none uppercase tracking-tight">
            Why Who Dat Ranch
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            More than a property—this is a rare opportunity to own a turnkey
            luxury estate with unparalleled lifestyle potential and investment
            returns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-gray-200 hover:border-accent p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-10">
                  <div className="w-28 h-28 bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="text-6xl text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-4 text-center font-display uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
                <p className="text-accent font-bold text-center mb-8 uppercase tracking-[0.3em] text-xs">
                  {benefit.subtitle}
                </p>
                <p className="text-gray-700 text-center leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
