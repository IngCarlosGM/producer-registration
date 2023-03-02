/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EBEBED',
        secondary: '#1B212D',
        third: '#FB6E1F',
        fourth: '#F2E9D8'
      }
    },
  },
  plugins: [],
}
