const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'web',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    watchContentBase: true,
  },

/*  mode: "production",/!**!/*/
  entry: [
   path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: './[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      minify: false,
      template: path.resolve(__dirname, './src/register.html'),
      filename: 'register.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./[name].css"
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: './assets'}
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      // CSS, Sass
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,

        extractComments: true,
        terserOptions: {
          ecma: 5,
          ie8: false,
          compress: true,
          warnings: true,
        },
      }),
    ],
  },
}
