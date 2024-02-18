/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { typography } = require('@material-tailwind/react');

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
  ],
  theme: {
    fontFamily: { 
      sans: ['Montserrat', 'sans-serif']
      } 
  },
})