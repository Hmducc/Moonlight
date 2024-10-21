/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1280: "80rem",
        765: "48rem",
      },
    },
  },
  plugins: [],
};
