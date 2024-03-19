import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "black-01": "#0F0F0F",
        "black-02": "#141414",
        "black-03": "#1A1A1A",
        "black-04": "#1F1F1F",
        "black-05": "#262626",
        "black-06": "#333333",
        "black-07": "#404040",
        "black-08": "#4C4C4C",
        "red-01": "#E50000",
        "red-02": "#FF0000",
        "red-03": "#FF1919",
        "red-04": "#FF3333",
        "red-05": "#FF9999",
        "red-06": "#FFCCCC",
        "red-07": "#FF3535",
        "red-08": "#FFFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
