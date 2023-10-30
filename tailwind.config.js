/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover' , 'active'],
    
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Bayon : ["Bayon"],
        Khmer : ["Khmer"],
        Playpen : ["Playpen Sans"],
        Robot : ['Roboto Condensed']
      }
    },
  },
  plugins: [],
}

