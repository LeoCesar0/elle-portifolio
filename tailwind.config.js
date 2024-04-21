/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        onBackground: "rgba(27, 24, 26, 1)",
        "onBackground/75": "rgba(27, 24, 26, 0.75)",
        primary: "rgba(234, 96, 126, 1)",
        primaryHover: "rgba(227, 40, 81, 1)",
        onPrimary: "#FFFFFF",
        card: "#fff",
        onCard: "rgba(45, 45, 45, 1)",
        border: "rgba(75, 75, 75, 1)",
      },
    },
  },
  plugins: [],
};
