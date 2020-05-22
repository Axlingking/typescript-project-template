这是一个 TypeScript + Webpack 4 的项目开发模板，它非常精简，只包含基本的配置。

老铁，繁琐的配置我已经做好了，抓紧时间写代码吧。

**集成内容**

* 集成 webpack-dev-server

    本地开发服务器,能够实时重新加载
    
* 集成 HtmlWebpackPlugin 插件

    自动生成入口页面

* 集成 HotModuleReplacementPlugin 插件
    
    热加载，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。

* 集成 CleanWebpackPlugin 插件

    打包前清理历史打包输出文件

* 集成 UglifyJSPlugin 插件

    打包时对脚本进行压缩处理