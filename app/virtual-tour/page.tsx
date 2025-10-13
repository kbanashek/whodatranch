import Header from "@/components/Header";
import VirtualTour from "@/components/VirtualTour";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Virtual Tour | Who Dat Ranch",
  description:
    "Take a virtual tour of Who Dat Ranch with our video gallery showcasing life at the ranch, interior views, drone footage, and more.",
};

export default function VirtualTourPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VirtualTour />
      <Footer />
    </main>
  );
}

