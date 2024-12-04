const webpack = require('webpack');
const { addMonacoWebpackConfig } = require('@uifabric/tsx-editor/scripts/addMonacoWebpackConfig');

module.exports = addMonacoWebpackConfig({
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './public',
    publicPath: './dist'
  },

  entry: {
    app: './src/index.tsx'
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'eval',

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: {
          loader: 'ts-loader',
          options: {
            experimentalWatchApi: true
          }
        },
        exclude: [/node_modules/, /\.test.tsx?$/]
      }
    ]
  }
});
