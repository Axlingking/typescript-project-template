const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  plugins: [
    // 自动清理输出目录
    new CleanWebpackPlugin(),
    // JS压缩插件
    new UglifyJSPlugin(),
  ],
});
