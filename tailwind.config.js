/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1db954",
        black: "#191414",
        grey: "#B3B3B3",
        dark: "#282828",
        veryDark: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
