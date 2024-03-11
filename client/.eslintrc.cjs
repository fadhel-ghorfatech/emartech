module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    indent: ['error', 2], // Set 2 space indentation
    'no-restricted-syntax': 'off', // Allow any syntax
    '@typescript-eslint/no-unused-vars': 'warn', // Show warnings for unused variables
    'react-hooks/exhaustive-deps': 'warn', // Show warnings for missing dependency arrays
    "@typescript-eslint/no-explicit-any": "off"
  },
};
