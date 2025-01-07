/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        colors: {
          customBlue: '#29a8f0',
        },
      },
    },
  },
  plugins: [],
}

