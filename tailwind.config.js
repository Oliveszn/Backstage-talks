/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#00c1b5",
        bgSecondary: "#ff651a",
        bgTetiary: "#ffbe00",
        bgFourth: "#1d3fbb",
        bgFifth: "#e30512",
      },
    },
  },
  plugins: [],
};
