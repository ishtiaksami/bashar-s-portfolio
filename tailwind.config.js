/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "url('./assets/img/Rectangle1.svg')",
      },
      maxWidth: {
        sitWidth: "1496px",
      },

      spacing: {
        30: "2.25rem",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        madeCanvas: ["MADE Canvas", "serif"],
      },

      colors: {
        oliveLight: "#576665",
        gray: "#ECECEC",
      },
    },
  },
  plugins: [],
};
