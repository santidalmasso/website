const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: "var(--colors-primary)",
        secondary: "var(--colors-secondary)",
        blue: "var(--colors-yellow)",
        green: "var(--colors-green)",
        "dark-green": "var(--colors-dark-green)",
        "light-green": "var(--colors-light-green)",
        rooftop: "var(--colors-rooftop)",
        highlight: "var(--colors-highlight)",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
