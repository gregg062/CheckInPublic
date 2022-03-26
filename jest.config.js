module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|react-native-reanimated|@react-native-community|@?react-navigation.*)'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  },
};
