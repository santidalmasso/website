const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        rooftop: "var(--colors-rooftop)",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        fade: {
          "100%": { opacity: 1, filter: "blur(0px)" },
        },
      },
    },
  },
  plugins: [],
};
