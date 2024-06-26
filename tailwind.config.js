/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-inset': '-2px 4px 4px 0px #00000040 inset, 2px 0px 4px 0px #00000040 inset',
        'pricing': '0px 12px 24px 0px #2562CC1F, 0px 0px 12px 0px #2562CC14',
        'usecase': '1px 1px 4px 0px #00000040',
        'proxy-type': '0px 4px 4px 0px #00000040',
        'flag': '3px 3px 4px 0px #1B1B1B8C',
        'navbar': '0px 2px 4px 0px #00000040',
        'first-btn': '0px 0px 0px 1.92px #FFFFFF33 inset, 0px 1.92px 0px 0px #FFFFFF33 inset, 0px 0px 0px 0.92px #FFFFFF, 0px 0px 0px 1.92px #CCDEE6',
        'second-btn': '0px 0px 0px 1.92px #FFFFFF33 inset, 0px 1.92px 0px 0px #FFFFFF33 inset, 0px 0px 0px 0.92px #FFFFFF, 0px 0px 0px 1.92px #4970FF',
        'btn': '0px 1px 2px 0px #1018280D',
        'add-box': '0px 8px 16px 0px #ABBED166',
        'navbar': '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
        
      },
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(0, 0, 0, 0.24) 3.52%, #000000 62.84%, #000000 70.94%, #000000 77.72%, #000000 100%)',
        'custom-gradient-2': 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(26, 29, 24, 0) 27.62%, #000000 67.41%, #000000 90%)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}