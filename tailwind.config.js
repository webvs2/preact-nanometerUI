/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"media",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      animation: {
        // 'yang': 'wiggle .5s linear infinite',
       },
      keyframes: {
      //  wiggle: {
      //   '0%, 100%': { transform: 'rotate(-3deg)' },
      //   '50%': { transform: 'rotate(3deg)' },
      //  }
      }
    }
  },
  plugins: [],
}

