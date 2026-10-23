/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        muted: "#64748B",
        line: "#D6E0F5",
        soft: "#F8FAFC",
        royal: { DEFAULT: "#2563EB", dark: "#1D4ED8", soft: "#DBEAFE" },
        indigo: { brand: "#6366F1" },
        teal: { brand: "#0D9488", soft: "#D1FAE5", ink: "#047857" },
      },
      fontFamily: {
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
