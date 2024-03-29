module.exports = {
    plugins: {
        autoprefixer:             {},
        "postcss-px-to-viewport": {
            viewportWidth:     750,
            viewportHeight:    1334,
            unitPrecision:     5,
            viewportUnit:      "vw",
            selectorBlackList: [],
            minPixelValue:     1,
            mediaQuery:        false,
            exclude:           [/node_modules/]
        }
    }
};
