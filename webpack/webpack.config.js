const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const modoDev = process.env.NODE_ENV !== "production";
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const path = require("path"); // Importe o módulo 'path'

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
