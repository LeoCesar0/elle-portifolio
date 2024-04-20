/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        onBackground: "#1B181A",
        primary: "#EA607E",
        onPrimary: "#FFFFFF",
        muted: "rgba(27, 24, 26, 0.75)",
        card: "#fff",
        onCard: "rgba(45, 45, 45, 1)",
      },
    },
  },
  plugins: [],
};
