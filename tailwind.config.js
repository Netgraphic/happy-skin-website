/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E3347',
        'light-blue': '#EAF3FF'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'shippori': ['Shippori Mincho', 'sans-serif']
      }
    },
  },
  plugins: [],
}

