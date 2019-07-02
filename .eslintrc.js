module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: { version: 'detect' }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react']
};
