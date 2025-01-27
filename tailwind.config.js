/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      'phone': '480px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'contrast': '#973ed9',
      'contrast-lightest': '#F5ECFB',
      'primary-25': 'a5c697',
      'primary-75': '#63904f',
      'primary-lightest': '#e9f3e4',
      'primary-1': '#d4e7c9',
      'primary-2': '#bedbae',
      'primary-3': '#a8ce94',
      'primary-4': '#92c27b',
      'primary': '#7bb661',
      'primary-6': '#669551',
      'primary-7': '#527541',
      'primary-8': '#3e5732',
      'primary-9': '#2b3b24',
      'primary-darkest': '#192016',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}