const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");


module.exports = (env, argv) => {
  const commonConfigResult = commonConfig(env, argv)
  const {__envConfig, ...commonConfigValue} = commonConfigResult
  return {
    ...commonConfigValue,
    mode: "production",
    entry: {
      code: "./src/codeJs/mainCode.ts", // The entry point for your plugin code
      preview: "./src/codeJs/preview.ts", // The entry point for your plugin code
    },
    output: {
      publicPath: "",
      assetModuleFilename: "[name][ext]",
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
    },
  }
};
