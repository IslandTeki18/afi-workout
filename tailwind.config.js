/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E43E3E",
        secondary: "#5F5F5F",
        tertiary: "#fff",
      },
      fontSize: {
        xxlTitle: "40px",
        xlTitle: "32px",
        lgTitle: "24px",
        mdTitle: "16px",
        smTitle: "12px",
      },
      textColor: {
        primary: "#E43E3E",
        secondary: "#5F5F5F",
        tertiary: "#fff",
        white: "#fff",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
};
