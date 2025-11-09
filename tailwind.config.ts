import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        sans: ["'Open Sans'", "Lato", "sans-serif"]
      },
      boxShadow: {
        "inner-glow": "inset 0 0 40px rgba(56, 189, 248, 0.25)"
      },
      animation: {
        orbit: "orbit 6s linear infinite"
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
