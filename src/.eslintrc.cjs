module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
   
    'react-app',
    'react-app/jest',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'global-require': 0,
  },
};
