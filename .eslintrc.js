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
  rules: {
    "quotes": ["error", "single", { allowTemplateLiterals: true }],
    "prefer-const": "error",
    "no-var": "error",
    "comma-dangle": ["error", "only-multiline"],
    "jsx-quotes": ["error", "prefer-double"]
  },
};
