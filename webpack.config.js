const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
