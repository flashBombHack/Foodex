/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: 'floating 10s ease-in-out infinite',
        'floating-reverse': 'floating-reverse 12s ease-in-out infinite',
        fadeUp: 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(10px) translateY(-30px)' },
        },
        'floating-reverse': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-10px) translateY(20px)' },
        },
      },
      fontFamily: {
        pangram: ['Pangram', 'sans-serif'],
      },
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '700',
    },
  },
  plugins: [],
};
