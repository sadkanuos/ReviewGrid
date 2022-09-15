/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
  theme: {
    extend: {
      fontFamily:{
        sans:['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
