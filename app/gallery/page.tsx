import Header from "@/components/Header";
import EnhancedGallery from "@/components/EnhancedGallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery | Who Dat Ranch",
  description:
    "Explore our comprehensive photo gallery showcasing the Main House, Big Who Cabin, Little Who Cabin, Ranch Structures, and Ranch Lifestyle at Who Dat Ranch.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <EnhancedGallery />
      </div>
      <Footer />
    </main>
  );
}
