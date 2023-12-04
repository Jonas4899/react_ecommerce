/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Archivo Black",
        body: "Roboto",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: "#141f1b",
        background: "#e7efec",
        primary: "#534e74",
        secondary: "#e4d7dc",
        accent: "#899060",
      },
    },
  },
  plugins: [],
};
