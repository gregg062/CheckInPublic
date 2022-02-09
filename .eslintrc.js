module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/react',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'indent': ["error", 2],
    'max-len': ["error", { "code": 40 }]
  },
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        jest: true,
        'jest/globals': true
      }
    }
  ]
}
