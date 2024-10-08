/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#f6e0a4",
        bgSecondary: "#ff608c",
        bgTetiary: "#fff",
        bgFourth: "#00c1b5",
        bgFifth: "#ff6519",
        bgSix: "#ffbe00",
        bgSeven: "#1d3fbb",
        bgEight: "#E30512",
      },
    },
  },
  plugins: [],
};
