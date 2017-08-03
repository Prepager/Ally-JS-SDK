const webpack = require('webpack');
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    devtool: PROD ? false : 'inline-sourcemap',
    output: {
        path: __dirname + '/dist',
        filename: PROD ? 'bundle.min.js' : 'bundle.js',
        libraryTarget: 'umd',
        library: 'Ally',
    },
    plugins: PROD ? [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ] : [],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2017']
            }
          }
        }
      ]
    }
};