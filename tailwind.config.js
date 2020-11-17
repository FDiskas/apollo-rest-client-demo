module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge:
    process.env.NODE_ENV === "production"
      ? {
          mode: "all",
          content: ["./src/**/*.tsx"],
        }
      : false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
