// webpack.config.js

module.exports = {
  entry: './static/js/entry.js',
  // entry: './static/js-cjs/app.js',
  // entry: './static/js-esm/app.js',
  output: {
    path: __dirname,
    filename: 'webpack3.0_bundle.js',
    // filename: 'webpack3.0_bundle_cjs.js'
    // filename: 'webpack3.0_bundle_esm.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      }
    ]
  }
}
