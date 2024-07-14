/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        onBackground: "rgba(27, 24, 26, 1)",
        "onBackground/75": "rgba(27, 24, 26, 0.75)",
        primary: "rgba(244, 183, 196, 0.6)",
        primaryHover: "rgba(234, 96, 126, 0.75)",
        secondary: "rgba(234, 96, 126, 1)",
        secondaryHover: "rgba(227, 40, 81, 1)",
        softPink: "rgba(253, 246, 247, 1)",
        onPrimary: "rgba(27, 24, 26, 1)",
        onSecondary: "#fafafa",
        card: "#fff",
        onCard: "rgba(45, 45, 45, 1)",
        border: "rgba(75, 75, 75, 1)",
        muted: "rgba(105, 95, 103, 1)",
      },
    },
  },
  plugins: [],
};
