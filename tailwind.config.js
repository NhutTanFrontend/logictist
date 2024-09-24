/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontSize: {
        'xs': '12px'
      },
      colors:{
        'main-blue': '#2A4189',
        'second-blue': '#337AB7',
        'main-blue-hover': '#1F336E',
        'background-gray': '#E9ECEF',
        'second-gray': '#F1F1F1'
      }
    },
  },
  plugins: [],
}

