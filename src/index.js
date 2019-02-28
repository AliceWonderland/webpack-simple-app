import nav from "./nav.js";
import { footer } from "./footer.js";
import makeButton from "./button.js"; //(can use require or import);
import { makeColorStyle } from "./button-styles.js"

const button = makeButton('Le Button');
button.style = makeColorStyle('pink');
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(
    nav(), 
    makeColorStyle('cyan')
);