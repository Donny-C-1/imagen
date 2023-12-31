/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bluegray": {
          700: "#1f2234",
          800: "#191a2c",
          900: "#141823",
        },
        myblue: {
          300: '#adcce9',
          400: '#77abd9',
          700: '#0056fe'
        }
      }
    },
    fontFamily: {
      sans: ['Rockwell', 'Open Sans', 'Arial']
    }
  },
  plugins: [],
}

