/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.{html,njk,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
