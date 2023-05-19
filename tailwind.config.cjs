/** @type {import('@pinegrow/tailwindcss-plugin')} */
const {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} = require('./themes/pg-tailwindcss/tokens.cjs') // tailwind.config.[js,cjs]
// import { pg_colors, pg_fonts, pg_backgrounds } from './themes/pg-tailwindcss/tokens.cjs' // tailwind.config.[ts]
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.rainbow': {
          '@apply bg-gradient-to-r from-purple-500 to-pink-500': {},
        },
      })
      // addBase({
      //   ':root': {
      //     '--color-secondary-400': '118 169 223',
      //     '--color-secondary-500': '80 152 216',
      //     '--color-secondary-600': '2 136 209',
      //     // '--color-secondary-400': '233 118 105',
      //     // '--color-secondary-500': '223 86 76',
      //     // '--color-secondary-600': '211 47 47',
      //   },
      // })
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
      colorsAsCssVars: true,
    }),
  ],
  safelist: [
    {
      pattern: /pg-(.+)/, // If using theme classes dynamically in components
    },
  ],
  get content() {
    const _content = [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
