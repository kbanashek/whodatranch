"use client";

export default function FeaturedVideo() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-accent text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Video Tour
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-display leading-none uppercase tracking-tight">
            Experience The Ranch
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Take a virtual tour with stunning aerial drone footage and interior
            views
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-4 border-accent shadow-2xl"
              src="https://www.youtube.com/embed/yOSgz_nmqP8"
              title="Who Dat Ranch - Interior & Drone View"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/virtual-tour"
            className="group px-16 py-6 bg-accent text-white font-bold text-xl uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl border-2 border-accent relative overflow-hidden inline-block"
          >
            <span className="relative z-10">View More Videos</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
