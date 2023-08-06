// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
// // const colors = require("tailwindcss/colors");
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       lato: ["Lato", "sans-serif"],
//     },
//     colors: {
//       "special-gray": "#F5F0F0",
//       ...defaultTheme.colors,
//     },
//     extend: {},
//   },
//   plugins: [],
// };

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"], // font-lato
    },
    colors: {
      "special-gray": "#F5F0F0",
      // ...defaultTheme.colors,
    },
    extend: {
      colors: {
        //just add this below and your all other tailwind colors willwork
        ...colors,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};
