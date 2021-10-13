module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
          custom: ["Jost", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif"],
      },
      right: {
        "9/10": "90%",
        "1/10": "10%",
      },
      height: {
        "1/50": "2%",
      },
      letterSpacing: {
        widestest: "0.5em",
      },
      fontSize: {
        sizeHeader: ["55px", "67px"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
