module.exports = {
  extends: ["@antfu", "@vue/eslint-config-prettier"],
  rules: {
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: []
      }
    ],
    "no-unref": "off",
    "no-undef": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "@typescript-eslint/consistent-type-imports": "error",
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    "quote-props": "off",
    "@typescript-eslint/comma-dangle": "off"
  }
}
