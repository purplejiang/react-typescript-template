const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV);

module.exports = function(env = 'development', config2) {
  console.log(env, config2);
  const devMode = env === 'development';
  let config = {
    entry: {
      index: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].chunk.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
          include: path.resolve(__dirname, 'src')
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        // {
        //   test: /\.(js|jsx)$/,
        //   exclude: path.resolve(__dirname, 'node_modules'),
        //   use: { loader: 'babel-loader' }
        // },
        {
          test: /\.(css|scss)$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)/,
          use: ['url-loader?limit=8192&name=assets/[name].[ext]']
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'react+typescript',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: '[id].[contenthash:12].css',
        chunkFilename: '[id].[contenthash:12].css'
      })
    ]
  };
  return config;
};
