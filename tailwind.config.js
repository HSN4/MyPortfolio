/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#4278e3",
        secondary: "#1F1F1F",
        dark: "#121212",
        whitecolor: "#F0F0F0",
      },
      fontFamily: {
        montserrat: "'Montserrat' , 'serif'",
      },
      boxShadow: {
        sm: "0px 0px 4px 1px #00000011",
        darksm: "0px 0px 4px 1px #b7b7b710",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
