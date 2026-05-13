/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        violet: {
          950: "#1e0a3c",
        },
      },
      animation: {
        blink: "blink 0.8s step-end infinite",
        floatChip: "floatChip 4s ease-in-out infinite",
        floatOrb: "floatOrb 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
        spinSlowReverse: "spinSlowReverse 12s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        floatChip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatOrb: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-28px) scale(1.04)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px 4px rgba(124,58,237,0.4)" },
          "50%": { boxShadow: "0 0 40px 10px rgba(124,58,237,0.7)" },
        },
        spinSlow: {
          from: { transform: "translate(-50%, -50%) rotate(0deg)" },
          to: { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        spinSlowReverse: {
          from: { transform: "translate(-50%, -50%) rotate(0deg)" },
          to: { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
