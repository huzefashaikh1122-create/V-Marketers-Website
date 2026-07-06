/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./Service_Pages/**/*.html",
    "./js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ec5b13",
        "primary-gradient-start": "#f97316",
        "primary-gradient-end": "#ea580c",
        "background-light": "#ffffff",
        "background-dark": "#111827",
        brand: {
          charcoal: '#1A1A1A',
          gold: '#C5A059',
          teal: '#1B4D4D',
          softWhite: '#F9F9F7',
          gray: '#e1e2e5',
        },
      },
      fontFamily: {
        "display": ["'Plus Jakarta Sans'", "Public Sans", "sans-serif"],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
