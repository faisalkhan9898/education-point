/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#172554',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#facc15',
          dark: '#ca8a04',
          light: '#fef08a',
        },
      },
    },
  },
  plugins: [],
}


