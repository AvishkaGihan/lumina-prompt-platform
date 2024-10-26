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
      },
      boxShadow: {
        "neon-glow": "0 0 10px rgba(0, 255, 255, 0.2)",
        "neon-glow-hover": "0 0 20px rgba(0, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
