module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './*.html',
  ],
  theme: {
    fontFamily: {
      display: ['Soleil', 'sans-serif'],
      body: ['Soleil', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: "#00BFDA",
        coral: "#F9665E",
        orange: "#FFCC1B",
        darkGrey: "#242424",
        medGrey: "#B3B3B3",
        lightGrey: "#DADADA",
        cyan: "#00CCAB"
      }
    },
  },
  variants: {},
  plugins: [],
}
