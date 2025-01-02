const commonConfig = require("./webpack.common");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = (env, argv) => {
  const commonConfigResult = commonConfig(env, argv)
  const {__envConfig, ...commonConfigValue} = commonConfigResult
  return {
    ...commonConfigValue,
    entry: {
      styles: ['./src/style.css', "./src/pluginUi/pages/questDetail/detail.css", "./src/pluginUi/pages/quest/from.css"],
      ui: "./src/ui.tsx",
    },
    mode: "production",
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        // minSize: 100000, // 100KB
        // maxSize: 400000, // 400KB
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              warnings: true,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', "console.table"] // 删除console
            },
            output: {
              comments: false, // 移除注释
            },
          }
        })
      ]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      clean: true,
      filename: '[name].[hash].js',
      chunkFilename: '[name].[id].[hash].chunk.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...commonConfigResult.plugins,
      new HtmlWebpackPlugin({
        template: "./src/ui.html",
        inject: 'body',
        inlineSource: '.(css|js)$',
        filename: "ui.html",
        charset: 'utf-8' // 解决中文乱码问题
      }),
    ]
  };
}
