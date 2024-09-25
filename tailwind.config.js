/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'gradient-animation': 'gradient-animation 5s ease infinite',
      },
      backgroundSize: {
        'size-400' : '400% 400%'
      },
      colors: {
        primary: '#007BFF',
        secondary: '#FF6F61',
        baseGray: '#F8F9FA',
        darkGray: '#343A40',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
