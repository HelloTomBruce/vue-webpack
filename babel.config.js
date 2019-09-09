module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [
            "import",
            {
                libraryName:             "muse-ui",
                libraryDirectory:        "lib",
                camel2DashComponentName: false
            }
        ]
    ]
};
