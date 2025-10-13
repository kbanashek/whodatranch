import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyOverview from "@/components/PropertyOverview";
import BookingForm from "@/components/BookingForm";
import Amenities from "@/components/Amenities";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PropertyOverview />
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Explore Our Gallery
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            View over 200 professional photos showcasing every detail of this luxury 32-acre property
          </p>
          <a
            href="/gallery"
            className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            View Full Gallery (205 Photos)
          </a>
        </div>
      </section>
      <BookingForm />
      <Amenities />
      <WhyChoose />
      <Footer />
    </main>
  );
}
