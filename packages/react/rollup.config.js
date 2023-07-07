const TS = require("rollup-plugin-typescript2");

module.exports = {
    input: [
        "src/index.ts",
        "src/atoms/Button/index.ts",
        "src/atoms/Color/index.ts",
        "src/atoms/Text/index.ts",
        "src/atoms/Margin/index.ts",
        "src/atoms/Select/index.ts",
    ],
    output: {
        dir: "lib",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [TS()],
    external: [
        "react",
        "@dswsmr/scss/lib/Button.css",
        "@dswsmr/scss/lib/Color.css",
        "@dswsmr/scss/lib/Text.css",
        "@dswsmr/scss/lib/Select.css",
        // '@ds.e/foundation'
    ],
};
