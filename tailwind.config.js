/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ["Pokemon"],
        "montserrat-regular": ["Montserrat-Regular"],
        "montserrat-bold": ["Montserrat-Bold"],
      },
      colors: {
        pokedex: "#e15554",
      },
    },
  },
  plugins: [],
};
