const path = require('path');
const { addMonacoWebpackConfig } = require('@uifabric/tsx-editor/scripts/addMonacoWebpackConfig');

module.exports = addMonacoWebpackConfig({
  entry: {
    app: './lib/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    pathinfo: false
  },

  devtool: 'cheap-module-source-map',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});
