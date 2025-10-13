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
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Why Choose Who Dat
          </h2>
          <p className="text-xl text-gray-700">Exceptional Benefits</p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Choosing Who Dat Ranch means selecting an exquisite property with
            luxurious amenities and endless possibilities for relaxation and
            adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center font-serif">
                {benefit.title}
              </h3>
              <p className="text-accent font-semibold text-center mb-4">
                {benefit.subtitle}
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
