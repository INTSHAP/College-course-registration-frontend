/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0000ff",
        secondary: "#ffffff",
        dark: "#000000",
      },
      backgroundColor: {
        primary: "#0000ff",
        secondary: "#ffffff",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
