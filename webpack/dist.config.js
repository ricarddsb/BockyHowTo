import webpack from 'webpack';
import config from './config';

// Webpack configuration
export const dist = {
  output: {
    path: config.paths.dist,
    library: config.library,
    filename: `${config.filename}.min.js`,
  },
  entry: [
    config.paths.src,
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.js.zp'],
  },
  plugins: [
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: config.paths.src,
        use: [
          'babel-loader', 'react-hot-loader/webpack',
        ],
      },
      {
        test: /\.scss$/,
        include: config.paths.src,
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
};

export const COMMON_CSSS = [];
