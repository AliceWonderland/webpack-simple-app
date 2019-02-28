const red = "red";
const blue = "blue";
const makeColorStyle = (color) => {
    return `Color: ${color};`;
};

// named exports at the bottom is a common standard
// exports.red = red;
// exports.blue = blue;
// exports.makeColorStyle = makeColorStyle;
export { red, blue, makeColorStyle };