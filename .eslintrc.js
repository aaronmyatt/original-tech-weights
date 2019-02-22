module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    'cy': true
  },
};
