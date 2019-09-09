const webpackMerge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssnanoPlugin = require("@intervolga/optimize-cssnano-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const webpackConfig = require("./webpack.config.js");

module.exports = webpackMerge(webpackConfig, {
    mode:         "production",
    devtool:      "#source-map",
    optimization: {
        minimize:    true,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name:     "chunk-vendors",
                    test:     /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks:   "initial"
                },
                common: {
                    name:               "chunk-common",
                    minChunks:          2,
                    priority:           -20,
                    chunks:             "initial",
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use:  [
                    {
                        loader: MiniCssExtractPlugin.loader
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
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new MiniCssExtractPlugin({
            filename:      "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
            ignoreOrder:   false
        }),
        new OptimizeCssnanoPlugin({
            sourceMap:      true,
            cssnanoOptions: {
                preset: [
                    "default",
                    {
                        mergeLonghand: false
                    }
                ]
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../public"),
                to:   path.resolve(__dirname, "../dist")
            }
        ]),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "static"
        })
    ]
});
