// commonjs example
/**
 * 
 * @param {string} buttonLabel 
 * @returns {Element} button
 */
const makeButton = (buttonLabel) => {
    console.log(`Button: ${buttonLabel}`);

    const button = document.createElement('button');
    button.innerText = buttonLabel;
    return button;
};

module.exports = makeButton;