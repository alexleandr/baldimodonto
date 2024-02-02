/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      default: ['"Open Sans"', 'sans-serif']
    },
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '25px',
      '3xl': '30px',
      '4xl': '32px',
    },
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}