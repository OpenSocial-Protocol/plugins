const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CreateFileWebpack = require("create-file-webpack");
const figmaPlugin = require("./manifest.json");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
// const env = dotenv.config().parsed;

// // 将环境变量从对象转换为适合DefinePlugin使用的格式
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

// 根据NODE_ENV环境变量决定加载哪个.env文件
const envFile =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : // eslint-disable-next-line no-undef
    process.env.NODE_ENV === "development"
    ? ".env.development"
    : ".env.test";

const env = dotenv.config({ path: envFile }).parsed;

// 将环境变量从对象转换为适合DefinePlugin使用的格式
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === "production" ? false : "inline-source-map",
  entry: {
    ui: "./src/ui.tsx", // The entry point for your UI code
    code: "./src/code.ts", // The entry point for your plugin code
  },

  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      // { test: /\.(png|jpg|gif|webp|svg|zip)$/, loader: [{ loader: 'url-loader' }] }
      {
        test: /\.(svg|png|gif)/,
        type: "asset/inline",
      },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
    fallback: { "process/browser": require.resolve("process/browser") },
  },
  output: {
    publicPath: "",
    assetModuleFilename: "[name][ext]",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
  },
  // 开发服务器

  devServer: {
    host: "0.0.0.0", // 启动服务器域名
    port: "5178", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    static: "./dist",
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: [
      {
        context: ["/v1"],
        target: "https://talentdev.dipbit.xyz",
        changeOrigin: true,
        secure: false,
      },
    ],
  },
  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      global: {}, // Fix missing symbol error when running in developer VM
    }),
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/ui.html",
      filename: "ui.html",
      cache: false,
      chunks: ["ui"],
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    new CreateFileWebpack({
      path: path.resolve(__dirname, "dist"),
      fileName: "manifest.json",
      content: JSON.stringify(figmaPlugin),
    }),
  ],
});
