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
        "primary":"#535353",
        
      },
      
      
    }
  },
  plugins: [require("tailwindcss-animate")],
}