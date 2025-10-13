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
    <section id="why-choose" className="py-24 md:py-32 bg-gradient-to-b from-white to-ranch-cream">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest rounded-full">
              The Investment
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-display leading-tight">
            Why Who Dat Ranch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            More than a property—this is a rare opportunity to own a turnkey luxury estate 
            with unparalleled lifestyle potential and investment returns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 hover:border-accent p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors duration-300">
                    <benefit.icon className="text-5xl text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2 text-center font-display">
                  {benefit.title}
                </h3>
                <div className="w-12 h-1 bg-accent mx-auto mb-4"></div>
                <p className="text-accent font-bold text-center mb-6 uppercase tracking-wider text-sm">
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
