import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgian: ["Noto Sans Georgian", "sans-serif"],
      },
      colors: {
        primary: "#1E6091",
        secondary: "#F5F0E8",
        accent: "#E8A87C",
      },
    },
  },
  plugins: [],
};

export default config;