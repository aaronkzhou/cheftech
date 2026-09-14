/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chili: {
          50: '#fdf3f1',
          100: '#fbe3de',
          200: '#f6c4ba',
          300: '#ef9c8a',
          400: '#e56d51',
          500: '#d6472a',
          600: '#b8331c',
          700: '#932818',
          800: '#6f1e14',
          900: '#4a140d',
        },
        ink: '#1c1614',
        cream: '#fdf8f1',
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Noto Serif"', 'serif'],
        body: ['"Noto Sans SC"', '"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
