/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif']
      },
      fontWeight: {
        'medium': '500'
      },
      colors: {
        'header': '#ffffff',
        'text-header': '#000000',
        'minor': '#3b82f6',
        'gray-light': '#f3f4f6',
        'gray-default': '#6b7280',
        'card': '#f9fafb',
        'footer': 'rgb(29 29 39)',
        'white-semi': 'rgba(255, 255, 255, 0.52)'
      },
      maxWidth: {
        'fixed': '88.75rem',
        '7xl': '80rem',
        'wrap': '71.25rem'
      },
      fontSize: {
        'xd': '0.8125rem'
      },
      spacing: {
        'ctx': '1rem'
      },
      backdropBlur: {
        '13': '13px'
      }
    },
  },
  plugins: [],
}