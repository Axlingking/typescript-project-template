const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 模式
  mode: "development",
  // 入口文件
  entry: "./src/index.ts",
  // 输出管理
  output: {
    // 输出文件名
    filename: "main.js",
    // 输出目录
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // 匹配规则
        test: /\.ts$/,
        // 确定loader
        use: "ts-loader",
        // 排除规则
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    // 自动生成入口HTML页面插件
    new HtmlWebpackPlugin({
      // 指定页面模板
      template: __dirname + "/src/index.html",
    })
  ],
};
