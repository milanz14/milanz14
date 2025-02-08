/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6F2DBD",
        secondary: "#A663CC",
        tertiary: "#B298DC",
        accent: "#B8D0EB",
        light: "#B9FAF8",
        dark: "#121212",
        white: "#fefdfd",
        studio: "#5f43b2",
        sunPearl: "#b1aebb",
        martinique: "#3a3153",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
