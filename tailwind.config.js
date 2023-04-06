/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightblack': '#00000050',
        'black': '#000000',
        'overblack': '#00000080',
        'white': '#ffffff',
        'purple': '#8b6fb1',
        'lpurple': '#9f88bf',
        'dpurple': '#8162aa',
        'thistle': '#D8BFD8',
        'rviolet': '#32174D'
      },
      fontSize: {
        'xxs': '11px',
        'xs': '12px',
        'sm': '14px',
        's': '16px',
        'sm': '20px',
        'm': '24px',
        'ml': '28px',
        'l': '32px',
        'lg': '40px',
        'xl': '48px',
        'xxl': '80px',
      },
      screens: {
        'sm': '301px',
        'md': '500px',
        'l': '650px',
        'lg': '1000px'
      },
      fontFamily: {
        'sancreek': 'Sancreek, cursive',
      }
    },
  },
  plugins: [],
}
