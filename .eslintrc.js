module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/airbnb/javascript
    'airbnb-base',
    // https://github.com/prettier/eslint-config-prettier
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
  },
  ignorePatterns: ['dist/']
}
