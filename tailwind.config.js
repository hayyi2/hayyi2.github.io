/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.{html,njk,md}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
