var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCSSExtractPlugin = require('mini-css-extract-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var DIST_DIR = 'dist';

var plugins = [
  new HtmlWebpackPlugin({
    filename: __dirname + '/dist/index.html',
    template: __dirname + '/src/index.html'
  }),

  new MiniCSSExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
];

var envPresetConfig = {
  modules: false,
  targets: {
    browsers: [
      'ie 11'  
    ]
  }
};

module.exports = function (env) {

  var isProd = env && env.production;

  if (isProd) plugins.push(new CleanPlugin([DIST_DIR + '/*.*']));

  return {
    entry: __dirname + '/src/main.js',
    output: {
      path: __dirname + '/dist',
      filename: "bundle.js"
    },
    devtool: "source-map",
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve('src')],
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [['env', envPresetConfig]],
              plugins: [
                'syntax-dynamic-import', 'transform-class-properties', 
                ['transform-react-jsx', {pragma: 'h'}],
                ['jsx-pragmatic', {
                  module: 'snabbdom-pragma-lite',
                  import: 'h',
                  export: 'createElement'
                }]
              ]
            }
          }]
        },
        { 
          test: /\.hbs$/, 
          loader: 'handlebars-loader' 
        },     
        { 
          test: /\.css$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader'
          ]
        }, 
        { 
          test: /\.(sass|scss)$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        { 
          test: /\.(woff|woff2)$/, 
          loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { 
          test: /\.ttf$/, 
          loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { 
          test: /\.eot$/, 
          loader: "file-loader" },
        { 
          test: /\.svg$/, 
          loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
        }
      ]
    }
  };
}

