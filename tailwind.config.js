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
      },
    },
  },
  plugins: [],
};
