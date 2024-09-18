/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e6deb",
      },
    },
  },
  plugins: [
    require('daisyui')
  ]
};