/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "bebas-neue":["Bebas Neue", "sans-serif"],
        "Rajdhani":["Rajdhani","sans-serif"],
        "reboto":["Roboto", "sans-serif"],
        "kanti":["Kanit"," sans-serif"],
      },
      colors:{
        primary:"#32c36c",
        "dark-primary":"#1a2a36",
      }
    },
  },
  plugins: [],
}