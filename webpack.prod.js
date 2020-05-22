const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [
    // 顶部内容插件：在输出的资源顶部输出内容
    new webpack.BannerPlugin("版权所有，翻版必究"),
    // 自动清理输出目录
    new CleanWebpackPlugin(),
    // 自动生成入口HTML页面插件
    new HtmlWebpackPlugin({
      // 指定页面模板
       template: __dirname + "/src/index.html",
    }),
  ],
};
