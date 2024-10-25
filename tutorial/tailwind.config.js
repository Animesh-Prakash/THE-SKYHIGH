/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-lg': { 'max': '1000px' },  // Custom breakpoint for screens below 1000px
        'below-sm': {'max': '500px'},
        'below-ls':{'max': '400px'},
        'below-800':{'max':'800px'},
        'below-1200':{'max':'1200px'},
        'below-600':{'max':'600px'},
        'below-500':{'max':'500px'},
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [],
}
