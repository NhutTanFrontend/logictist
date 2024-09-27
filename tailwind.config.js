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
      },
      keyframes: {
        'border-run': {
          '0%': { 'border-color': 'transparent transparent transparent transparent' },
          '25%': { 'border-color': 'blue transparent transparent transparent' },
          '50%': { 'border-color': 'blue blue transparent transparent' },
          '75%': { 'border-color': 'blue blue blue transparent' },
          '100%': { 'border-color': 'blue blue blue blue' },
        },
      },
      animation: {
        'border-run': 'border-run 1.5s linear forwards',
      },
    },
  },
  plugins: [],
}

