/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
      "7xl": "80rem",
      "8xl": "88rem",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#1a1a1a",
        textDarkBlue: "#FFD700",
        textLight: "#ffffff",
        textDark: "#e5e5e5",
        hoverColor: "rgba(255,215,0,0.1)",
        darkGray: "#282828",
        lightGray: "#404040",
        yellow: "#FFD700",
      },
      fontFamily: {
        Sevillana: ["Sevillana", "serif"],
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
