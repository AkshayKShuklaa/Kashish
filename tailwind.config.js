/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F5EFE9',
          200: '#EADBCE',
          300: '#D8C3AF',
          400: '#C4A991',
          500: '#B08E74',
        },
        nude: {
          50: '#FCFAF8',
          100: '#F7F2ED',
          200: '#EFE6DC',
          300: '#E3D4C4',
        },
        champagne: {
          50: '#FAF7F0',
          100: '#F9F4E8',
          200: '#F0E5CB',
          300: '#E2CF9F',
          400: '#CDB575',
          500: '#B89C53',
        },
        espresso: {
          950: '#14100E',
          900: '#1E1816',
          800: '#2F2624',
          700: '#463B38',
          600: '#645450',
          500: '#84726D',
        },
        roseGold: {
          300: '#E8B6A5',
          400: '#D89B84',
          500: '#C7846C',
          600: '#AE6A53',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'soft-glow': '0 10px 40px -10px rgba(199, 132, 108, 0.15)',
        'luxury': '0 20px 60px -15px rgba(30, 24, 22, 0.08)',
      }
    },
  },
  plugins: [],
}

