/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs",
    "./views/partials/*.ejs"
    ],
  theme: {
    extend: {
      colors: {
        "dark": "#0A1931",
        "blue": "#185ADB",
        "yellow": "#FFC947",
        "white": "#EFEFEF"
      },
      fontFamily: {
        body: ['Share Tech Mono']
      }
    },
  },
  plugins: [],
}

/* colors from 

https://colorhunt.co/palette/0a1931185adbffc947efefef

*/