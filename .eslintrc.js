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
    // Custom rules
    'max-len': 0,
    'object-curly-newline': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
