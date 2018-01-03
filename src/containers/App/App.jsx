const dev = require('./App.dev');
const prod = require('./App.prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}

