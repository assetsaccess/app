/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#1D2B64',
        lightblue: '#68A0CF',
        white: '#FFFFFF',
        darkgray: '#4A4A4A',
        orange: '#FFA500',
      },
    },
  },
  plugins: [],
}

