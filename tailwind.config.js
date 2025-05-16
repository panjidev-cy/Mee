/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "fluid-h1": "clamp(3rem, 7vw, 6rem)", // 56px - 96px
        "fluid-h2": "clamp(2.75rem, 5.5vw, 4rem)", // 44px - 72px
        "fluid-h3": "clamp(2.25rem, 4.5vw, 2.8rem)", // 36px - 56px
        "fluid-h4": "clamp(1rem, 3vw, 1.5rem)", // 16px - 28.8px
        "fluid-h5": "clamp(.9rem, 2.8vw, 1rem)", // 16px - 28.8px
        "fluid-h6": "clamp(.7rem, 2.2vw, .9rem)", // 20px - 28px
        "fluid-body": "clamp(1.125rem, 2vw, 1.5rem)", // 18px - 24px
        "fluid-caption": "clamp(0.8rem, 1.5vw, 1rem)", // 12.8px - 16px
      },
      colors: {
        // === White shades background ===
        // ghost_white: "#f4f4f8", // catatan: digunakan versi terakhir yang ditimpa
        // lavender_web: "#eeecff",
        // periwinkle: "#dfdbff",
        // risd_blue: "#4a52eb",
        // // === Blue shades ===
        // blue: "#4a25eb",
        // lavender: "#e8e9fc",
        // periwinkle: "#d1d3fa",
        // vistaBlue: "#a3a7f5",
        // mediumSlateBlue: "#757bf0",
        // majorelleBlue: "#474feb",
        // risdBlue: "#4a52eb",
        // zaffre: "#141cb8",
        // phthaloBlue: "#0f158a",
        // federalBlue: "#0a0e5c",

        // // Green-Yellow shades
        // mindaro: "#d1f577",
        // mindaroAlt1: "#dff8a0",
        // mindaroAlt2: "#cff570",
        // lime: "#bff141",
        // beige: "#f7fde7",
        // nyanza: "#effccf",

        // // Dark/Neutral shades
        // eerieBlack: "#19191d",
        // jet: "#2f2f37",
        // davysGray: "#474752",
        // dimGray: "#5e5e6e",

        // magenta: "#ff018fff",
        // jonquil: "#ffcc00ff",
        // "persian-indigo": "#2a0c62ff",
        // "russian-violet": "#11012eff",
        dark: "#161515ff",
        "hunyadi-yellow": "#eeaa44ff",
        "dark-purple": "#16052bff",
        "dark-low": "#121119",
        "peach-yellow": "#edd69dff",
        "federal-blue": "#220055ff",
        "floral-white": "#faf7f0ff",
        blue: "#460effff",
        "blue-light": "#426EFF",
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

        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },

          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        scroll: "scroll 50s linear infinite",
        scrollReverse: "scrollReverse 50s linear infinite",
        fadeOut: "fadeOut 0.4s ease-out forwards",
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
