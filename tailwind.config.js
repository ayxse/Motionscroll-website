const colors = require('tailwindcss/colors') // Import the colors object

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist-mono': ['"Geist Mono"', 'monospace'], // Add Geist Mono
      },
    },
    colors: {
      // Map 'gray' to the 'neutral' palette for true monochrome
      gray: colors.neutral, 
      // Keep other default colors available if needed (optional, but good practice)
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      transparent: 'transparent',
      current: 'currentColor',
    }
  },
  plugins: [],
}
