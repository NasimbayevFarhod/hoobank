/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        mf: '450px',
        sm: '576px',
        md: '790px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
      colors:{
        maintext:"#242D52",
        dark:"#F98F75",
        solution:"#00040F",
        ps:"#212024",
      }

    },
  },
  plugins: [],
}
