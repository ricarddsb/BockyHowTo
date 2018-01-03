import * as path from 'path';
import pkg from '../package.json';

export default {
  // Constant with our paths
  paths: {
    dist: path.join(__dirname, '../dist'),
    nodeModules: path.join(__dirname, '../node_modules'),
    src: path.join(__dirname, '../src'),
  },
  pkg,
  filename: pkg.name,
  library: 'MavenHowTo',
};

export const AUTOPREFIXER_BROWSERS = [
  'Android 2.3', 'Android >= 4', 'Chrome >= 35', 'Firefox >= 31', 'Explorer >= 9',
  'iOS >= 7', 'Opera >= 12', 'Safari >= 7.1',
];

export const COMMON_CSS = [];
