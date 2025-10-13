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
        // Central Florida Ranch Color Palette
        primary: "#8B4513", // Saddle Brown - rustic, earthy
        secondary: "#D2691E", // Chocolate - warm, inviting
        accent: "#CD853F", // Peru - sunset, golden hour
        sage: "#9CAF88", // Sage green - pastures, nature
        sand: "#F5DEB3", // Wheat - Florida sand, warmth
        sky: "#87CEEB", // Sky blue - Florida skies
        earth: "#6B4423", // Dark earth - rich soil
        cream: "#FFF8DC", // Cornsilk - light, airy
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        'wood-texture': "url('/images/wood-texture.jpg')",
        'ranch-pattern': "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
