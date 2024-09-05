/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./**/*.html"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
