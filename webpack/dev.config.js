import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';

// Webpack configuration
export const dev = {
  // context: config.paths.src,
  devtool: 'eval',
  entry: [
    'whatwg-fetch',
    config.paths.src,
    'webpack/hot/only-dev-server', // deactives auto-reload when HMR fails
  ],
  // output: {
  //  path: config.paths.dist,
  //  filename: 'app.bundle.js',
  // },
  plugins: [
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    //  new ExtractTextPlugin('style.bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: config.paths.src,
      },
      {
        test: /\.(js|jsx)$/,
        include: config.paths.src,
        use: [
          'babel-loader', 'react-hot-loader/webpack',
        ],
      },
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // ExtractTextPlugin.extract([
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      // file loader for png|jpg|gif files
      {
        test: /\.(png|jpg|gif)$/,
        include: config.paths.src,
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
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    // contentBase: config.paths.src,
    stats: 'errors-only', // show only bundle errors
    hot: true,
    inline: true,
    progress: true,
    // inline: true,
    // progress: true,
  },
};

export const COMMON_CSSS = [];
