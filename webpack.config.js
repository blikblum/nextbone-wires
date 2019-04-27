var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCSSExtractPlugin = require('mini-css-extract-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var DIST_DIR = 'dist';

var plugins = [
  new HtmlWebpackPlugin({
    filename: __dirname + '/dist/index.html',
    template: __dirname + '/src/index.html',
  }),

  new MiniCSSExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];

module.exports = function(env) {
  var isProd = env.mode === 'production';

  if (isProd) plugins.push(new CleanPlugin([DIST_DIR + '/*.*']));

  return {
    entry: __dirname + '/src/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    mode: isProd ? 'production' : 'development',
    plugins: plugins,
    resolve: {
      modules: [path.resolve(__dirname, './src/common'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: [path.resolve('src')],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(sass|scss)$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.ttf$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.eot$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        },
      ],
    },
  };
};
