/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5FA8D3",
        secondary: "#CAE9FF",
        tertiary: "#1B4965",
        accent: "#62B6CB",
        light: "#BEE9E8",
      },
    },
  },
  plugins: [],
};
