/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#144629',
          950: '#0a2315',
        },
        olive: {
          DEFAULT: '#556b2f',
          light: '#6b8e23',
          dark: '#3d4a26',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3ece2',
          200: '#e5d7c5',
          300: '#d4bea3',
          400: '#b89873',
          500: '#9d764b',
          600: '#835e3b',
          700: '#68482f',
          800: '#553c2a',
          900: '#3c291e',
        },
        cream: {
          50: '#fdfcf9',
          100: '#fbf8f2',
          200: '#f6f0e4',
          300: '#ede2ce',
          400: '#dfcdb1',
          DEFAULT: '#fbf8f2',
        },
        gold: {
          DEFAULT: '#cfa74b',
          light: '#e2bf65',
          dark: '#aa8130',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(34, 197, 94, 0.25)',
        'elevated': '0 20px 40px -15px rgba(10, 35, 21, 0.35)',
      }
    },
  },
  plugins: [],
}
