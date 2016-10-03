module.exports = {
  entry: "./es6/app.js",
  output: {
    filename: './public/javascripts/bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel", 
        query:{
          presets: ['es2015']
        }
      }
    ]
  }
};