const defaultTheme = require('tailwindcss/defaultTheme');

// Colors are CSS variables (see src/index.css) so light/dark mode is handled
// in one place and every utility still supports opacity modifiers (bg-brand/10).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
        mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        subtle: token('subtle'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        brand: {
          DEFAULT: token('brand'),
          strong: token('brand-strong'),
        },
        accent: token('accent'),
        warn: token('warn'),
      },
    },
  },
  plugins: [],
}
