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
        // Earthy Luxury Ranch Palette - Browns, Greens, Whites, Black
        primary: "#3A4D2C", // Deep olive green - pastures & nature
        secondary: "#6B4423", // Rich walnut brown - earth & wood
        accent: "#B8860B", // Dark goldenrod - understated luxury
        ranch: {
          brown: "#5C4033", // Coffee brown - deep earth tones
          darkBrown: "#3E2723", // Espresso - sophistication
          tan: "#C19A6B", // Camel tan - warm sand
          sage: "#9CAF88", // Soft sage - Florida landscape
          forestGreen: "#2E5339", // Forest green - trees & pastures
          moss: "#6B7F5B", // Moss green - natural feel
          cream: "#FFF8DC", // Cornsilk cream - light backgrounds
          ivory: "#FFFFF0", // Ivory white - premium feel
          charcoal: "#1A1A1A", // Near-black - luxury details
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        western: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
