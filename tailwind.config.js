module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['*.html'],
  // THIS IS A COMPLETELY NON-IDEAL WAY OF DEALING WITH THIS BUT ALLOWS FOR PUBLISHING OF LIGHTWEIGHT SITE UNTIL I CAN FIGURE OUT WHAT POSTPROCESSING IS NECESSARY
  // purge: {
  //   enabled: true,
  //   content: ['./*.html'],
  // },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
