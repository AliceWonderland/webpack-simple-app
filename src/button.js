// take button label (str), return button ele
// commonjs example
/**
 * 
 * @param {string} buttonLabel 
 * @returns {Element}
 */
const makeButton = (buttonLabel) => {
    return `Button: ${buttonLabel}`;
};

module.exports = makeButton;