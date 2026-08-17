import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fdf2f7",
          100: "#fce7f0",
          200: "#fbcfe3",
          300: "#f9a8d0",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        ivory: {
          50: "#fffefb",
          100: "#fefcf7",
          200: "#fdf8ef",
        },
        rose: {
          850: "#7a1438",
          950: "#4c0d22",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(157, 23, 77, 0.08)",
        lift: "0 12px 40px -8px rgba(157, 23, 77, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
