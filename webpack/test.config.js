import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';

// Webpack configuration
export const dev = {
  devtool: 'eval',
  entry: [
    config.paths.src,
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
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
      {
        test: /\.(png|jpg|gif)$/,
        include: config.paths.src,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    stats: 'errors-only',
    hot: true,
    inline: true,
    progress: true,
  },
};

export const COMMON_CSSS = [];
