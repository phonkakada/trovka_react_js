/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover' , 'active'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

