const fs = require("fs");
const path = require("path");
const sass = require("sass");

const compile = ({ source, output }) => {
    const res = sass.compile(path.resolve(source), {
        style: "expanded",
        verbose: true,
    });
    if (!fs.existsSync("lib")) {
        fs.mkdirSync("lib", { recursive: true });
    }
    fs.writeFileSync(path.resolve(output), res.css);
};
// compile({ source: "src/atoms/Button.scss", output: "lib/Button.css" });
compile({ source: "src/global.scss", output: "lib/global.css" });

const getComponents = () => {
    const allComponents = [];
    const types = ["atoms", "molecules", "organisms"];
    types.forEach((type) => {
        fs.readdirSync(`src/${type}`).map((item) => {
            const source = `src/${type}/${item}`;
            const output = "lib/" + item.replace(path.extname(item), ".css");
            allComponents.push({ source, output });
        });
    });
    return allComponents;
};
getComponents().forEach((component) => compile(component));
