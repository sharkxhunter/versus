/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Satoshi-Variable'
      },
      colors: {
        darkred: {
          50: "#F23DA9",
          100: "#ED1412",
          200: "#E6245A",
          300: "#C50D40",
          400: "#BA1040",
          500: "#AA103C",
          600: "#A4133C",
          700: "#971237",
          800: "#5D0909",
          900: "#5C001A",
        },
        purplebrown: {
          50: "#A4133C",
        }
      },
      boxShadow: {
        'side': '0 15px 60px rgba(125, 14, 46, 0.4)'
      },
      keyframes: {
        tabappear: {
          '0%': {display: "hidden"},
          '1%': {display: "block", opacity: 0},
          '100%': {display: "block", opacity: 1},
        },
      },
      animation: {
        tabappear: "tabappear 1s ease-in-out forwards",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
});
