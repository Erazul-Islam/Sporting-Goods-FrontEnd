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
        'custom-button':'#cc115c'
      },
    },
  },
  plugins: [],
}

// background: -webkit-linear-gradient(90deg, #cc115c,#d95078,#e37895);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(90deg, #cc115c,#d95078,#e37895);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                             