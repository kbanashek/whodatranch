import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Who Dat Ranch | Luxury Property in Frostproof, FL",
  description:
    "For Sale: Who Dat Ranch - 32 acres of paradise in Frostproof, FL. Luxury home with 4 bedrooms, 3 baths, fishing ponds, livestock, and endless amenities.",
  keywords:
    "Who Dat Ranch, Frostproof FL, luxury property, ranch for sale, Florida ranch, investment property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
