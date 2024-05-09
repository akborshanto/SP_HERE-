/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //font family

      fontFamily: {
        lato: "'lato','sans-serif'",
      },
      //color
      colors: {
        white: "white",
        black: "black",
        green: "green",
        hex: "fb5200",
      },
      //font-size
      fontSize: {
        16: "16px",
        18: "18px",
        200: "200px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "synthwave","aqua" ],
  },

};
