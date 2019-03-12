const path = require(`path`);
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: `development`,
  entry: `./src/js/main.js`,
  output: {
    filename: `./js/bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
