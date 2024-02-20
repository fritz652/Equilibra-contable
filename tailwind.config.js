/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#285E7D",
        lightBlue: "#5884B0",
        darkGreen: "#206B5E",
        lightGreen: "#95CEC4",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        "Montserrat-Regular": ["Montserrat-Regular", "sans-serif"],
        "Montserrat-Bold": ["Montserrat-Bold", "sans-serif"],
        "Montserrat-SemiBold": ["Montserrat-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
});
