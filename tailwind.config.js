const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: false,
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'my-font': ['"Bitter"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
