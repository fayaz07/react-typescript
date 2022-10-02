module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/type-annotation-spacing": 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "@typescript-eslint/ban-ts-comment": "off",
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
