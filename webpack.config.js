const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    //chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: 'json-loader',
        test: /\.json%/
      }
    ]
  },
  plugins: [
    // Extract vendor modules into a separate chunk
    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    // Generate a chunk to be added to the html template
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  }
};
