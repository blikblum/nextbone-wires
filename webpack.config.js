const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const argv = require('webpack-nano/argv')

const DIST_DIR = 'dist'

const entry = ['./src/main.js']

const plugins = [
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
]

const { mode = 'production' } = argv

const isProd = mode === 'production'

if (isProd) {
  plugins.push(new CleanPlugin())
} else {
  // dev
  plugins.push(
    new WebpackPluginServe({
      host: 'localhost',
      port: '8080',
      static: ['.', path.resolve(__dirname, DIST_DIR)],
      liveReload: true,
      hmr: false,
    }),
  )

  // webpack-serve client
  entry.push('webpack-plugin-serve/client')
}

module.exports = {
  entry,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  mode: isProd ? 'production' : 'development',
  watch: !isProd,
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
        use: [isProd ? MiniCSSExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [isProd ? MiniCSSExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
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
}
