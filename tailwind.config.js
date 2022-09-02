/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merri: "Merriweather Sans, serif",
        julius: "Julius Sans One",
        alegreya: "Alegreya Sans, sans-serif",
      },
      colors: {
        header: "#293355",
        headerHover: "#44589c",
        cart: '#131b36'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
