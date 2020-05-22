const path = require("path");
const webpack = require("webpack");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "eval-source-map",
  plugins: [
    // 热加载插件：它允许你在修改组件代码后，自动刷新实时预览修改后的效果
    new webpack.HotModuleReplacementPlugin()
  ],
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
});