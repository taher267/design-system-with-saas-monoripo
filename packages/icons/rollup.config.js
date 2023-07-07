const TS = require("rollup-plugin-typescript2");

module.exports = {
    input: [
        "src/index.ts",
        "src/IconCheck/index.ts",
        "src/IconChevronDown/index.ts",
        "src/IconChevronUp/index.ts",
    ],
    output: {
        dir: "hi", //heroicons
        format: "esm",
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [TS()],
    external: ["react"],
};
