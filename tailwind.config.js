// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '16': "16px", // use text-16
        '61': "61px", // use text-61
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(#ff1818, #fd030300)',
      },
      fontFamily: {
        customFont: ['Epunda Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
