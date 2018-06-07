var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
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
  ],
  module: {
    rules: [
      { 
        test: /\.hbs$/, 
        loader: 'handlebars-loader' 
      },
      { 
        test: /bootstrap.+\.js$/, 
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' 
      },
      { 
        test: /\.js$/, 
        loader: 'babel-loader?presets[]=es2015', 
        include: [path.resolve(__dirname, 'src')] 
      },
      { 
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }, 
      { 
        test: /\.less$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'less-loader']
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
