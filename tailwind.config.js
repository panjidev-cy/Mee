/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" }, // Tambahan opsional untuk layar sangat kecil
    },
    fontFamily: {
      f1: ["Poppins", "sans-serif"],
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
