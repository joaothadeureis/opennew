/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#4BDAAE",
        secondary: "#2F2F2F",
        accent: "#B9DF3A",
        surface: "#F5F9FC",
      }
    },
  },
  plugins: [],
}
