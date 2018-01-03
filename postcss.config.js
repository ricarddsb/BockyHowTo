const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const precss = require('precss');
const postcsscustommedia = require('postcss-custom-media');
const postcssdiscardcomments = require('postcss-discard-comments');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    postcsscustommedia,
    postcssdiscardcomments,
    postcssImport,
    precss,
  ],
};
