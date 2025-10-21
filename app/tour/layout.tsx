import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hcbwhodatranch.com"),
  title: "Who Dat Ranch | Luxury Property in Frostproof, FL",
  description:
    "For Sale: Who Dat Ranch - 32 acres of paradise in Frostproof, FL. Luxury home with 4 bedrooms, 3 baths, fishing ponds, livestock, and endless amenities.",
  keywords:
    "Who Dat Ranch, Frostproof FL, luxury property, ranch for sale, Florida ranch, investment property",
  openGraph: {
    title: "Who Dat Ranch | Luxury Property in Frostproof, FL",
    description:
      "For Sale: Who Dat Ranch - 32 acres of paradise in Frostproof, FL. Luxury home with 4 bedrooms, 3 baths, fishing ponds, livestock, and endless amenities.",
    url: "https://hcbwhodatranch.com/tour",
    siteName: "Who Dat Ranch",
    images: [
      {
        url: "https://hcbwhodatranch.com/images/ranchEntrance_v3.png",
        width: 1200,
        height: 630,
        alt: "Who Dat Ranch - Grand Entrance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Dat Ranch | Luxury Property in Frostproof, FL",
    description:
      "For Sale: Who Dat Ranch - 32 acres of paradise in Frostproof, FL. Luxury home with 4 bedrooms, 3 baths, fishing ponds, livestock, and endless amenities.",
    images: ["https://hcbwhodatranch.com/images/ranchEntrance_v3.png"],
  },
};

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

