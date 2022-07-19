/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#EBF0FF",
          100: "#D7E2FE",
          200: "#AAC0FD",
          300: "#82A3FC",
          400: "#5B85FB",
          500: "#3168FA",
          600: "#0643EA",
          700: "#0432AE",
          800: "#032173",
          900: "#01113C",
        },
      },
    },
  },
  plugins: [],
};
