/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

module.exports = config;
