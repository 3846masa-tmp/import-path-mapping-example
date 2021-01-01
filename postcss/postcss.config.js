const path = require('path');
const resolver = require('postcss-import-resolver');

module.exports = {
  plugins: {
    'postcss-import': {
      resolve: resolver({
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
      }),
    },
  },
};
