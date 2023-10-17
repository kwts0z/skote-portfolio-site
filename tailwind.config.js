/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ImplementationBg': "url('/src/assets/download.svg')",
      }
    },
  },
  plugins: [],
}

