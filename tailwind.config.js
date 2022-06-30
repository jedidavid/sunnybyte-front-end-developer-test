module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      body: ["Raleway", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "tricorn-black": "#2f2f2f",
        namibia: "#7b6c63",
        "dark-grey": "#363636",
        "grey-shingle": "#949494",
        "orka-black": "#272320",
        magnesium: "#c2c2c2",
        "shadow-mountain": "#595959",
      },
    },
  },
  plugins: [],
};
