var path = require('path')
var webpack = require('webpack')
var DashboardPlugin = require('webpack-dashboard/plugin')
const PrerendererWebpackPlugin = require('prerenderer-webpack-plugin')
const BrowserRenderer = PrerendererWebpackPlugin.BrowserRenderer

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        include: path.resolve(__dirname, "src"),
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new DashboardPlugin(),
    new PrerendererWebpackPlugin({
      staticDir: __dirname,
      routes: ['/'],
      renderer: new BrowserRenderer()
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
