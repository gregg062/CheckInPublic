module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  [
    'module:react-native-dotenv',
    {
      moduleName: '@/env',
      envName: 'USE_ENV',
      allowUndefined: false,
    },
  ],
],
};
