/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FF6079",
      secondary: "#000",
      tertiary: "#fff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      
    },
  },
};
