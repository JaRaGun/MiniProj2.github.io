/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/backgrounds.jpg')",
        'gaze-logo': "url('../public/COVID-LOGO.gif')",
      }
    },
  },
  plugins: [],
}
