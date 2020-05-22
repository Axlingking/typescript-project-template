const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 模式
  mode: "development",
  devtool: "eval-source-map",
  // 入口文件
   entry: "./src/index.ts",
  // 输出管理
  output: {
    filename: "main.js",
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
    extensions: [".ts"],
  },
  // 本地服务器
  devServer: {
    // 所加载的页面所在的目录
    contentBase: path.join(__dirname, "dist"),
    // 不跳转
    historyApiFallback: true,
    // 实时刷新
    inline: true,
    // 指定端口
    port: 8080,
  },
  plugins: [
    // 自动清理输出目录
    new CleanWebpackPlugin(),
    // 自动生成入口HTML页面插件
    new HtmlWebpackPlugin({
      // 指定页面模板
      template: __dirname + "/src/index.html",
    }),
    // 热加载插件：它允许你在修改组件代码后，自动刷新实时预览修改后的效果
    new webpack.HotModuleReplacementPlugin(),
  ],
};
