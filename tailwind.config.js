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
        'custom-button': '#cc115c',
        customBlue: {
          100: '#cce7ff',
          200: '#99ceff',
          300: '#66b6ff',
          400: '#339dff',
          500: '#0085ff',
        },
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        Sofia: ["Sofia", 'sans-serif'],
        Merriweather: ['Merriweather', 'cursive']
      },
    },
  },
  plugins: [],
}

// background: -webkit-linear-gradient(90deg, #cc115c,#d95078,#e37895);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(90deg, #cc115c,#d95078,#e37895);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                             