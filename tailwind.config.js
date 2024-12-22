/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rancho: ["Rancho", "serif"],
      Heebo: ["Heebo", "serif"],
    },
    extend: {
      colors: {
        primary: "#00c4cc", // Matches the teal color in your example
      },
    },
  },
  plugins: [require("daisyui")],
};
