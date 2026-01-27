export default {
    theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
    },
  },
    plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      })
    }
  ],
    content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}


