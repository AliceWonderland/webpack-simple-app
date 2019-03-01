import nav from "./nav.js";
import { footer } from "./footer.js";
import makeButton from "./button.js"; //(can use require or import);
import { makeColorStyle } from "./button-styles.js"
import makeImage from "./image.js";
import logo from "./logo.jpg";

const image = makeImage(logo);
const button = makeButton('Le Button');
button.style = makeColorStyle('pink');
document.body.appendChild(image);
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(
    nav()
);