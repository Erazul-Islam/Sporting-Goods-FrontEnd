/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#9b0372',
        'custom-blue': '#0b8fc0',
      },
    },
  },
  plugins: [],
}

