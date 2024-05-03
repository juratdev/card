/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#49D39F",
        secondary: "#E03528",
        "gradient-primary": "#D8FF3E",
        "gradient-secondary": "#01F0FF",
        "black-rgba": "rgba(255, 255, 255, 0.16)", // 40%
        "white-rgba": "rgba(255, 255, 255, 0.70)",
      },
    },
  },
  plugins: [],
};
