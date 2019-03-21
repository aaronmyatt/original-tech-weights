module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  globals: {
    cy: true
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ]
};
