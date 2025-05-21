/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e6ff',
          300: '#66daff',
          400: '#33cdff',
          500: '#00c1ff', // Blue from logo
          600: '#009acc',
          700: '#007499',
          800: '#004d66',
          900: '#002733',
        },
        secondary: {
          50: '#e6fff2',
          100: '#ccffe6',
          200: '#99ffcc',
          300: '#66ffb3',
          400: '#33ff99',
          500: '#00ff80', // Green from logo
          600: '#00cc66',
          700: '#00994d',
          800: '#006633',
          900: '#00331a',
        },
        accent1: {
          50: '#fff0f5',
          100: '#ffe0eb',
          200: '#ffc2d7',
          300: '#ffa3c2',
          400: '#ff85ae',
          500: '#ff669a', // Pink from logo
          600: '#cc527b',
          700: '#993d5c',
          800: '#66293e',
          900: '#33141f',
        },
        accent2: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffcf33',
          500: '#ffc300', // Yellow from logo
          600: '#cc9c00',
          700: '#997500',
          800: '#664e00',
          900: '#332700',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};