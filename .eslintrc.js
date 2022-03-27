module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-restricted-exports':[0],
    'no-loss-of-precision':[0],
    'no-promise-executor-return':[0],
    'no-useless-backreference':[0],
    'default-case-last':[0],
    'no-unreachable-loop':[0],
    'no-unsafe-optional-chaining':[0],
    'no-nonoctal-decimal-escape':[0],
    'react/jsx-filename-extension':[0],
    'import/no-unresolved':[0],
    'react/jsx-props-no-spreading':[0],
    'import/extensions':[0],
    'react/function-component-definition':[0],
    'react/button-has-type':[0],
    'react/require-default-props':[0],
    'max-len':[0],
    'react/jsx-no-constructed-context-values':[0],
    'no-unused-vars':[1]
  },
};
