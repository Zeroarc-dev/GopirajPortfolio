import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0d",
        paper: "#f4f0e8",
        card: "#fbf9f4",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Anton", "Impact", "Haettenschweiler", "sans-serif"],
        sans: ["Manrope Variable", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 28s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
