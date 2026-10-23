/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Root-level, outside ./src — the MDX element map that styles every
    // journal entry. Unscanned, its exclusive classes (mb-5, my-6) were
    // never generated, so journal paragraphs rendered with no spacing.
    "./mdx-components.js",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0F",
        surface: "#12121A",
        "surface-light": "#1C1C2E",
        "neon-green": "#00FF88",
        "neon-cyan": "#00D4FF",
        "neon-magenta": "#FF00FF",
        "text-primary": "#E0E0E0",
        "text-muted": "#8484A4",
        border: "#2A2A3A",
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        glitch: "glitch 0.3s ease-in-out",
        float: "float 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
