/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {sourceExts} = require('metro-config/src/defaults/defaults');

const storybookSourceExt =
  process.env.STORYBOOK_VARIANT === 'true'
    ? ['storybook.tsx', 'storybook.ts', 'storybook.js']
    : [];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    sourceExts: [...storybookSourceExt, ...sourceExts],
  },
};
