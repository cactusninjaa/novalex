/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#212529',
        'secondary-gray': '#424649',  
        'tertiary-gray': '#A6A6AB',   
        'light-gray': '#F4F4F4',    
        'white': '#FFFFFF',
        'black': '#000000',
      }
    },
  },
  plugins: [],
};
