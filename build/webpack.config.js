const path = require("path");
require("dotenv").config();
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/main.js")
    },
    output: {
        path:          path.resolve(__dirname, "../dist"),
        filename:      "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[hash:8].js",
        publicPath:    "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:  "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                use:     [
                    {
                        loader: "cache-loader"
                    },
                    {
                        loader: "thread-loader"
                    },
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use:  [
                    {
                        loader:  "url-loader",
                        options: {
                            limit:    4096,
                            fallback: {
                                loader:  "file-loader",
                                options: {
                                    name: "img/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use:  [
                    {
                        loader:  "url-loader",
                        options: {
                            limit:    4096,
                            fallback: {
                                loader:  "file-loader",
                                options: {
                                    name: "media/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use:  [
                    {
                        loader:  "url-loader",
                        options: {
                            limit:    4096,
                            fallback: {
                                loader:  "file-loader",
                                options: {
                                    name: "fonts/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use:  [
                    {
                        loader: "cache-loader"
                    },
                    {
                        loader: "thread-loader"
                    },
                    {
                        loader:  "vue-loader",
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                VUE_APP_BASE_URL: JSON.stringify("http://localhost:3068")
            }
        })
    ],
    devServer: {
        hot:              true,
        host:             process.env.HOST,
        port:             process.env.PORT,
        open:             true,
        disableHostCheck: true,
        contentBase:      path.resolve(__dirname, "../dist"),
        proxy:            {
            "/music": {
                target:      process.env.MUSIC_API,
                pathRewrite: {
                    "^/music": ""
                },
                changeOrigin: true,
                secure:       false
            }
        }
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
            "@":  path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".vue"]
    }
};
