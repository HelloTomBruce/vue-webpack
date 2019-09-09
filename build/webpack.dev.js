const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

module.exports = webpackMerge(webpackConfig, {
    mode:    "development",
    devtool: "cheap-module-eval-source-map",
    module:  {
        rules: [
            {
                test: /\.less$/,
                use:  [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:  "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader:  "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
});
