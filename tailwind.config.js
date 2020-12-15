module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['*.html'], // WILL PURGE WHEN NODE_ENV=PRODUCTION
  // MANUAL PURGE ON BUILD IF NEEDED FOR LOCAL TESTING
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
