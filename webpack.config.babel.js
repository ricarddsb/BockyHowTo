const devConfig = require('./webpack/dev.config');
const distConfig = require('./webpack/dist.config');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'dev' || !TARGET) {
  module.exports = devConfig.dev;
}
if (TARGET === 'dist' || !TARGET) {
  module.exports = distConfig.dist;
}
/* else if (TARGET === 'test' || !TARGET) {

}
*/
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
/*
import webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import pkg from './package.json';

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src'), // source folder path
};

// Webpack configuration
module.exports = {
  context: path.join(__dirname, 'src'), // afegit
  // entry: path.join(paths.JS, 'app.js'),
  entry: path.join(__dirname, 'src'),
  // output: {
  //  path: paths.DIST,
  //  filename: 'app.bundle.js',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.join(paths.SRC, 'index.html'),
      title: `${pkg.name} - ${pkg.description}`,
    }),
    new ExtractTextPlugin('style.bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: [
          'babel-loader', 'react-hot-loader/webpack',
        ],
      },
      // CSS loader to CSS files -> ADDED IN THIS STEP
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      // file loader for multimedia files
      {
        test: /\.(png|jpg|gif)$/,
        include: path.join(__dirname, 'src'),
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: paths.SRC,
    hot: true,
  },
};
*/
