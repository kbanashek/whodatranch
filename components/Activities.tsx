"use client";

import Image from "next/image";
import {
  FaCar,
  FaFish,
  FaPaw,
  FaFireAlt,
  FaSwimmingPool,
} from "react-icons/fa";
import { GiAxeSwing } from "react-icons/gi";

export default function Activities() {
  const activities = [
    {
      icon: FaCar,
      title: "4 Wheel Adventure",
      description:
        "With ample space to let loose, enjoy a high speed chase or a slow paced cruise through the entire property with multiple fully customized Polaris machines with more than enough juice to entertain as well as storage to carry on site picnic gear.",
      image: "/images/gallery1.jpg",
    },
    {
      icon: FaFish,
      title: "Fishing Ponds",
      description:
        "Grab a rod and enjoy ponds filled with bass, perch and more while you unwind by the water. Whether lake-side or dock fishing is your preference enjoy a calming experience catching your potential lunch.",
      image: "/images/fishing-pond.jpg",
    },
    {
      icon: FaPaw,
      title: "Animal Exploration",
      description:
        "An array of friendly wildlife call Who Dat Ranch home and it is all up for exploration. Between cows, hogs, goats, sheep, swans, ducks, tortoises and space for so much more you've got your own personal petting zoo right on property.",
      image: "/images/barn.jpg",
    },
    {
      icon: GiAxeSwing,
      title: "Axe Throwing",
      description:
        "Grab a hatchet and enjoy some healthy competition amongst friends and family.",
      image: "/images/gallery2.jpg",
    },
    {
      icon: FaFireAlt,
      title: "Fire Pit",
      description:
        "Gather everyone around a designated fire pit area to roast s'mores, share stories, down some cold ones and truly immerse yourselves under the stars amongst loved ones.",
      image: "/images/gallery3.jpg",
    },
    {
      icon: FaSwimmingPool,
      title: "Heated Pool",
      description:
        "Whether it's a hot summer day or a cool fall afternoon you can enjoy this fully screened in heated pool. The deck has ample seating, a propane grill, a TV, surround sound speakers, a pool table, two dart boards and an outdoor bathroom to host the perfect pool party.",
      image: "/images/main-home.jpg",
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-white mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Hero Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Entertainment & Recreation
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-primary mb-8 font-display leading-none uppercase tracking-tight">
            Activities
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto">
            Don't just be housed, be entertained
          </p>
        </div>

        {/* Activities Grid */}
        <div className="space-y-32">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="mb-8">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-6 bg-accent">
                      <activity.icon className="text-6xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display uppercase tracking-tight">
                        {activity.title}
                      </h2>
                      <div className="w-24 h-1 bg-accent mt-3"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`group relative h-[600px] overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/80 backdrop-blur-sm p-6 border-t-4 border-accent">
                    <h3 className="text-3xl font-bold text-white font-display uppercase tracking-wide">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-32 bg-black p-16 md:p-20 border-t-4 border-accent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-6xl font-bold text-accent mb-4 font-display">
                32
              </p>
              <p className="text-white uppercase tracking-[0.3em] text-sm font-bold">
                Acres to Explore
              </p>
            </div>
            <div>
              <p className="text-6xl font-bold text-accent mb-4 font-display">
                6+
              </p>
              <p className="text-white uppercase tracking-[0.3em] text-sm font-bold">
                Unique Activities
              </p>
            </div>
            <div>
              <p className="text-6xl font-bold text-accent mb-4 font-display">
                ∞
              </p>
              <p className="text-white uppercase tracking-[0.3em] text-sm font-bold">
                Unforgettable Memories
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                window.location.href = "/#booking";
              }
            }}
            className="group px-16 py-6 bg-accent text-white font-bold text-xl uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl border-2 border-accent relative overflow-hidden"
          >
            <span className="relative z-10">Book Your Experience</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
