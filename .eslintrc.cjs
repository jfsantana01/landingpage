module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    //"no-unused-vars": ["warn"],
    //"@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: false }],
    // "@typescript-eslint/no-explicit-any": "error",
    //"@typescript-eslint/no-inferrable-types": "off",
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   {
    //     allowExpressions: true,
    //     allowTypedFunctionExpressions: true,
    //   },
    // ],
    // "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
  },
};
