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
      cal: ['"Cal Sans"', "sans-serif"],
      fredoka: ['"Fredoka"', "sans-serif"],
      jua: ['"Jua"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      fontSize: {
        "fluid-h1": "clamp(3rem, 7vw, 6rem)",
        "fluid-h2": "clamp(1.5rem, 4vw, 3rem)",
        "fluid-h3": "clamp(1.25rem, 2vw, 2rem)",
        "fluid-h4": "clamp(1rem, 1.8vw, 1.7rem)",
        "fluid-body": "clamp(.8rem, 1.5vw, 1.25rem)",
        "fluid-caption": "clamp(0.875rem, 1.5vw, 1rem)",
      },
      colors: {
        // === White shades background ===
        ghost_white: "#f4f4f8", // catatan: digunakan versi terakhir yang ditimpa
        lavender_web: "#eeecff",
        periwinkle: "#dfdbff",
        risd_blue: "#4a52eb",
        // === Blue shades ===
        blue: "#4a25eb",
        lavender: "#e8e9fc",
        periwinkle: "#d1d3fa",
        vistaBlue: "#a3a7f5",
        mediumSlateBlue: "#757bf0",
        majorelleBlue: "#474feb",
        risdBlue: "#4a52eb",
        zaffre: "#141cb8",
        phthaloBlue: "#0f158a",
        federalBlue: "#0a0e5c",

        // Green-Yellow shades
        mindaro: "#d1f577",
        mindaroAlt1: "#dff8a0",
        mindaroAlt2: "#cff570",
        lime: "#bff141",
        beige: "#f7fde7",
        nyanza: "#effccf",

        // Dark/Neutral shades
        eerieBlack: "#19191d",
        jet: "#2f2f37",
        davysGray: "#474752",
        dimGray: "#5e5e6e",
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
