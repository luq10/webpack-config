module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    process: true,
    module: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["class-property", "react-hooks", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "prefer-const": "error",
    "no-var": "error",
    "comma-dangle": ["error", "only-multiline"],
    "jsx-quotes": ["error", "prefer-double"],
    semi: ["error", "always"],
    "max-len": ["error", { code: 120 }],
    "class-property/class-property-semicolon": ["error", "always"],
    "no-console": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^on.+$/",
          "everything-else",
          "/^render.+$/",
          "render",
        ],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // Fix collision between rules:
        //
        // ESLint: Unnecessary semicolon.(@typescript-eslint/no-extra-semi)
        // ESLint: Missing semicolon.(semi)
        semi: ["off"],
      },
    },
  ],
};
