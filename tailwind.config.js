/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        "tech-mono": ["Share Tech Mono", "monospace"],
      },
      colors: {
        "cyber-dark": "#0a0a0f",
        "cyber-darker": "#050507",
        "neon-pink": "#ff2d55",
        "neon-blue": "#0ff",
        "neon-purple": "#bc13fe",
        "neon-green": "#00ff9d",
        "neon-red": "#ff0000",
        "cyber-gray": "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        "neon-glow": "0 0 10px rgba(0, 255, 255, 0.2)",
        "neon-glow-hover": "0 0 20px rgba(0, 255, 255, 0.4)",
        "neon-pink-glow": "0 0 10px rgba(255, 45, 85, 0.2)",
        "neon-pink-glow-hover": "0 0 20px rgba(255, 45, 85, 0.4)",
        "neon-purple-glow": "0 0 10px rgba(188, 19, 254, 0.2)",
        "neon-purple-glow-hover": "0 0 20px rgba(188, 19, 254, 0.4)",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translate(-5px, 3px)" },
          "66%": { transform: "translate(5px, -3px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        scanline: "scanline 4s linear infinite",
        glitch: "glitch 0.3s ease-in-out infinite",
        pulse: "pulse 5s ease-in-out infinite",
      },
      backdropFilter: {
        cyber: "blur(10px) saturate(180%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-glow": {
          "text-shadow": "0 0 10px var(--tw-shadow-color)",
        },
        ".text-glow-lg": {
          "text-shadow": "0 0 20px var(--tw-shadow-color)",
        },
        ".cyber-border": {
          "border-style": "solid",
          "border-width": "2px",
          "border-image":
            "linear-gradient(45deg, var(--neon-blue), var(--neon-purple)) 1",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
