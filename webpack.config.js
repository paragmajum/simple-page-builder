// Load utils
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

// external configs
const devServerConfig = require('./config/dev-server.webpack.config');

// local configs
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/assets/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Page Builder Demo',
      template: 'index.ejs'
    })
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders:['babel?cacheDirectory'], include: PATHS.app}
    ]
  }
};


// branching out config
let config;
switch(TARGET) {
  case 'deploy':
    config = merge(common, {

    });
    break;
  case 'develop':
  default: // `develop`
    config = merge(common, devServerConfig({
      host: process.env.HOST,
      port: process.env.PORT
    }));
    break;
}

module.exports = validate(config);
