/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rojo: '#F65151',
      blanco: '#FEF4F4',
      marron: '#503A3A',
      negro: '#2E2828',
    },
  },
  plugins: [],
};
