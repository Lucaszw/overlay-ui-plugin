var config = {
  entry: './src/overlay-ui-plugin.js',
  output: {
    filename: './build/overlay-ui-plugin.js',
    library: 'OverlayUI',
    libraryTarget: 'var'
  },
  module:{
    loaders: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};

module.exports = config;
