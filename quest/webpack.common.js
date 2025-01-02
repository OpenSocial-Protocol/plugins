const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require("dotenv");
const webpack = require("webpack");


module.exports = (env, argv) => {
    const envFile =
        argv.mode === "production"
            ? ".env.production" : argv.mode === "development"
                ? ".env.development"
                : ".env.test";
    const envConfig = dotenv.config({ path: envFile }).parsed;

    return {
        __envConfig: envConfig,
        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules/katex/dist/")],
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.less$/i,
                    include: path.resolve(__dirname, "src"),
                    use: ["style-loader", "css-loader", "postcss-loader", 'less-loader'],
                },
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
                {
                    test: /\.(svg|png|gif)/,
                    type: "asset/resource",
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@app": path.resolve(__dirname, 'src'),
            },
            fallback: { "process/browser": require.resolve("process/browser") },
        },
        plugins: [
            // new webpack.DefinePlugin({
            //     global: {}, // Fix missing symbol error when running in developer VM
            //   }),
            new webpack.ProvidePlugin({
                process: "process/browser",
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(envConfig)
            }),
        ],
    };
};
