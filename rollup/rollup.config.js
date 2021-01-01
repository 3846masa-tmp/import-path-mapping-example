const path = require('path');
const alias = require('@rollup/plugin-alias');

module.exports = {
  input: path.resolve(__dirname, 'src/index.js'),
  output: {
    file: path.resolve(__dirname, 'dist/main.js'),
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: {
        '~': path.resolve(__dirname, 'src'),
      },
    }),
  ],
};
