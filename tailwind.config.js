/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "main": "#00ffee",
        "bg-2": "#131313",
        "bg-1": "#212121",
        "primary": "#535353",

      },
      textColor: {
        transparent: 'transparent',
      },
      textStroke: {
        DEFAULT: '1px',
        sm: '0.5px',
        lg: '2px',
      },
      textStrokeColor: {
        DEFAULT: '#ffffff',
      },


    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px white',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px black',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '2px black',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}