import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Central Florida Ranch Palette - Luxury & Warmth
        primary: "#2C5F2D", // Deep forest green - Florida pastures (kept for good contrast)
        secondary: "#8B7355", // Warm taupe - ranch wood, earth tones
        accent: "#D4AF37", // Rich gold - Florida sunshine, luxury
        ranch: {
          brown: "#8B4513", // Saddle brown - rustic accents
          tan: "#D2B48C", // Tan - warm sand
          sage: "#87AE73", // Sage green - natural landscape
          terracotta: "#CD6839", // Terracotta - Florida clay, warmth
          cream: "#FAF3E0", // Warm cream - light backgrounds
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
