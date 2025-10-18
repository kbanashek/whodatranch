"use client";

import Image from "next/image";

export default function AerialShowcase() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.jpg"
          alt="Aerial view of Who Dat Ranch"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 sm:px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Aerial View
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 font-display leading-tight uppercase tracking-tight">
            32 Acres of Pure Florida Paradise
          </h2>

          <div className="w-24 md:w-32 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            From above, experience the breathtaking scope of this extraordinary
            estate. Three luxury residences, pristine ponds, endless recreation,
            and absolute privacy—all on one remarkable property.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">
                32
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wider font-bold">
                Acres
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">
                3
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wider font-bold">
                Residences
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">
                2
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wider font-bold">
                Stocked Ponds
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wider font-bold">
                Fenced
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group px-8 sm:px-12 py-4 sm:py-5 md:py-6 bg-accent text-white font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl border-2 border-accent relative overflow-hidden min-h-[48px]"
          >
            <span className="relative z-10">Experience This Estate</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
