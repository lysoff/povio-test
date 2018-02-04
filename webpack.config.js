const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000
  }
};
