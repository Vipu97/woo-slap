/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : 'rgb(20, 106, 255,0.8)',
        featuresBg : 'rgb(244, 248, 255)',
      },
      screens:{
        'xs':'480px',
        'sm' : '697px'
      },
      boxShadow : {
        '2xl' : 'rgba(20, 106, 255, 0.3) 0px 10px 30px 0px',
        'question' : 'rgba(0,0,0,0.15) 0 0 10px 0',
        'result' : 'rgba(20, 106, 255, 0.16) 0px 0px 32px 0px',
      }
    },
  },
  plugins: [],
}