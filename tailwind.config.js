/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/img/TobaLake.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        amatic: ["Amatic SC", "cursive"],
        badscript: ["Bad Script", "cursive"],
      },
    },
  },
  plugins: [],
};
