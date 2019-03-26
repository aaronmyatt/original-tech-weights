module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'warning',
    'vue/no-boolean-default': 'warning',
    'vue/no-restricted-syntax': 'warning',
    'vue/object-curly-spacing': 'error',
    'vue/require-direct-export': 'error',
    'vue/script-indent': 'error',
    'vue/space-infix-ops': 'warning',
    'vue/space-unary-ops': 'warning',
    'vue/v-on-function-call': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  globals: {
    cy: true,
    describe: true,
    it: true,
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ]
};
