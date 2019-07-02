const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: '8089',
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
});
