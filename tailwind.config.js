/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {
      colors: {
        bg: "#0F0F0F",
        secondary: "#3E403F",
      },
    },
  },
  plugins: [],
};
