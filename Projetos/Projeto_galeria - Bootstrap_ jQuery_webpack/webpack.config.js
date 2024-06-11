const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 9000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: modoDev,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"), // Corrigido para usar path.resolve
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "estilo.css" }),
    new CopyWebpackPlugin({
      patterns: [
        { context: path.resolve(__dirname, "src"), from: "**/*.html" }, // Corrigido o contexto e o padrão
        { context: path.resolve(__dirname, "src"), from: "imgs/**/*" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)$/,
        use: ["file-loader"],
      },
    ],
  },
};
