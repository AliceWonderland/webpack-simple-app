const red = "color:red;";
const blue = "color:blue;";

const makeColorStyle = (color) => {
    return `color: ${color};`;
};

// named exports at the bottom is a common standard
// exports.red = red;
// exports.blue = blue;
// exports.makeColorStyle = makeColorStyle;
export { red, blue, makeColorStyle };