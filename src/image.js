/**
 * 
 * @param {string} image URL 
 * @returns {Element} img
 */
const makeImage = (url) => {
    const image = document.createElement("img");
    image.src = url;
    image.height = 100;
    return image;
};
export default makeImage;