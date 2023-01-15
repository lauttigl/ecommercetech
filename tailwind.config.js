/** @type {import('tailwindcss').Config} */
const defaultTheme= require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
