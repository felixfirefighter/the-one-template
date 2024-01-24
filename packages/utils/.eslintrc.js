/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@the-one/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["postcss.config.cjs"],
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
