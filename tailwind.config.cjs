/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
        danielbd: ["Danielbd", "cursive"],
      },
      boxShadow: {
        bottom: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
}
