const commonConfig = require("./webpack.common");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const envConfigJson = require("./src/config/envConfig.json");

module.exports = (env, argv) => {
  const commonConfigResult = commonConfig(env, argv);
  const { __envConfig, ...commonConfigValue } = commonConfigResult;
  const proxyTarge = envConfigJson.deepApis[__envConfig.PROXY_TARGET_ENV];
  console.log("proxyTarge:", proxyTarge);
  return {
    ...commonConfigValue,
    mode: "development",
    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: "inline-source-map",
    entry: "./src/ui.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/", // 指向生成的文件的URL前缀
    },
    // 开发服务器
    devServer: {
      host: "0.0.0.0", // 启动服务器域名
      port: "5178", // 启动服务器端口号
      open: true, // 是否自动打开浏览器
      static: "./dist",
      historyApiFallback: true,
      hot: true,
      // headers: { "Access-Control-Allow-Origin": "*" },
      // beta: https://talentbeta.dipbit.xyz/
      // dev: https://talentdev.dipbit.xyz/
      proxy: [
        {
          context: ["/v1", "/v2"],
          target: proxyTarge,
          changeOrigin: true,
          secure: false,
        },
      ],
    },
    // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
    plugins: [
      ...commonConfigResult.plugins,
      new HtmlWebpackPlugin({
        template: "./src/ui.html",
        charset: 'utf-8' // 解决中文乱码问题
      }),
      new HtmlWebpackPlugin({
        template: "./src/ui.html",
        charset: "utf-8", // 解决中文乱码问题
      }),
    ],
  };
};
