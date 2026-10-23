/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Paleta B5 de la auditoría. Es el único lugar con valores HEX; los componentes usan estos nombres.
      colors: {
        primary: { DEFAULT: "#2F63E9", strong: "#1D4ED8", soft: "#E8EEFD", text: "#1E4FD0" },
        progress: { DEFAULT: "#0F7B6C", soft: "#E3F4F0", deco: "#16A085" }, // deco: solo decorativo o texto ≥ 24 px
        analysis: { DEFAULT: "#6850D8", soft: "#EEEBFB" },
        ink: "#202124", // texto
        muted: "#5F6B7A", // texto secundario
        page: "#F3F5F9", // fondo de página
        surface: "#FFFFFF",
        line: "#E5E7EB", // bordes decorativos
        control: "#7A8394", // bordes de controles (≥ 3:1)
        success: { DEFAULT: "#15803D", soft: "#DCFCE7" },
        warning: { DEFAULT: "#B45309", soft: "#FEF3C7", text: "#92400E" },
        error: { DEFAULT: "#B91C1C", soft: "#FEE2E2" },
      },
      fontFamily: {
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
