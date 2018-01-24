var webpack = require("webpack")
var path = require("path")

module.exports = {
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [
      '.json', '.ts', '.tsx'
    ]
  },
  entry: __dirname + "/src/app.tsx",
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
  ]
};
