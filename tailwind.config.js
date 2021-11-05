module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        facebook: "#3b5998",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
