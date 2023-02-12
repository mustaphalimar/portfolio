/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#1E1F2B",
        primaryLight: "#CDFFF3",
        primaryGreen: "#2BA386",
      },
    },
  },
  plugins: [],
};
