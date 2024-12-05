/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@the-one/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['postcss.config.cjs'],
  parserOptions: {
    project: true,
  },
}
