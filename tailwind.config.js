/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'xxl': { 'max': '1400px' },
      'xl': { 'max': '1200px' },
      'lg': { 'max': '1000px' },
      'md': { 'max': '800px' },
      'sm': { 'max': '600px' },
      'xsm': { 'max': '400px' },
      'xxsm': { 'max': '200px' },

    }
  },
  plugins: [],
}