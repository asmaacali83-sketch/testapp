import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11101f",
        paper: "#f8f6f2",
        purple: "#9b6bff",
        coral: "#ff8067",
        sun: "#ffd166",
        aqua: "#66e3da",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        card: "0 22px 65px rgba(17, 16, 31, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
