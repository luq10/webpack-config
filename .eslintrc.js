module.exports = {
  extends: [
    "eslint:recommended"
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    "process": true
  },
  parser: "babel-eslint",
  plugins: [
    "class-property",
  ],
  rules: {
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "prefer-const": "error",
    "no-var": "error",
    "comma-dangle": ["error", "only-multiline"],
    "jsx-quotes": ["error", "prefer-double"],
    "semi": ["error", "always"],
    "max-len": ["error", {code: 120}],
    "class-property/class-property-semicolon": ["error", "always"],
    "no-console": "error",
  },
};
