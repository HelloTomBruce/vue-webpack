const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

module.exports = webpackMerge(webpackConfig, {
    mode:    "development",
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
});
