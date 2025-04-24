/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      subHeader: ["Cal Sans", "sans-serif"],
      header: ["Special Gothic Expanded One", "cursive"],
    },
    extend: {
      colors: {
        blue: "#4046f6",
        white: "#fafbfd",
        "white-ghost": "#f5f5fc",
        "white-floral": "#fffaf0",
        "white-blue": "#f4f4ff",
        "white-lavender": "#fbf2f5",
        black: "#151c22",
        grey: "#586275",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        scroll: "scroll 50s linear infinite",
        scrollReverse: "scrollReverse 50s linear infinite",
      },
    },
  },
  plugins: [],
};
