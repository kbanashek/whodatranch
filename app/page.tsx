import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyOverview from "@/components/PropertyOverview";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PropertyOverview />
      <BookingForm />
      <Gallery />
      <Amenities />
      <WhyChoose />
      <Footer />
    </main>
  );
}
