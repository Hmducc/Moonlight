/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      80: "5rem",
      70: "4.375rem",
      40: "2.5rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      spacing: {
        1280: "80rem",
        765: "48rem",
        482: "30.125rem",
        70: "4.375rem",
        1600: "100rem",
        1500: "93.75rem",
        800: "50rem",
        500: "31.25rem",
      },
    },
  },
  plugins: [],
};
