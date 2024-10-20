import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#222e9a",
          "50": "#ebf3ff",
          "100": "#dbe9ff",
          "200": "#bdd5ff",
          "300": "#96b8ff",
          "400": "#6c8fff",
          "500": "#4a67ff",
          "600": "#2b3cff",
          "700": "#1f2be3",
          "800": "#1c27b7",
          "900": "#222e9a",
          "950": "#131853",
        },
        secondary: {
          DEFAULT: "#ff871c",
          "50": "#fff8ed",
          "100": "#fff0d4",
          "200": "#ffdca8",
          "300": "#ffc370",
          "400": "#ff9d37",
          "500": "#ff871c",
          "600": "#f06406",
          "700": "#c74b07",
          "800": "#9e3b0e",
          "900": "#7f330f",
          "950": "#451705",
        },
        black: {
          DEFAULT: "#121212"
        }
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
