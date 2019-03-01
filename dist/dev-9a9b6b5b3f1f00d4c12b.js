/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/button-styles.js":
/*!******************************!*\
  !*** ./src/button-styles.js ***!
  \******************************/
/*! exports provided: red, blue, makeColorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"red\", function() { return red; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blue\", function() { return blue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeColorStyle\", function() { return makeColorStyle; });\nvar red = \"color:red;\";\nvar blue = \"color:blue;\";\n\nvar makeColorStyle = function makeColorStyle(color) {\n  return \"color: \".concat(color, \";\");\n}; // named exports at the bottom is a common standard\n// exports.red = red;\n// exports.blue = blue;\n// exports.makeColorStyle = makeColorStyle;\n\n\n\n\n//# sourceURL=webpack:///./src/button-styles.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// commonjs example\n\n/**\n * \n * @param {string} buttonLabel \n * @returns {Element} button\n */\nvar makeButton = function makeButton(buttonLabel) {\n  console.log(\"Button: \".concat(buttonLabel));\n  var button = document.createElement('button');\n  button.innerText = buttonLabel;\n  return button;\n};\n\nmodule.exports = makeButton;\n\n//# sourceURL=webpack:///./src/button.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: top, bottom, footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"top\", function() { return top; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bottom\", function() { return bottom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-styles.js */ \"./src/button-styles.js\");\n\nvar top = document.createElement('div');\ntop.innerHTML = \"Top of Footer\";\ntop.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__[\"red\"];\nvar bottom = document.createElement('div');\nbottom.innerHTML = \"Bottom of Footer\";\nbottom.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__[\"blue\"];\nvar footer = document.createElement('footer');\nfooter.appendChild(top);\nfooter.appendChild(bottom);\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-styles.js */ \"./src/button-styles.js\");\n\n\n //(can use require or import);\n\n\nvar button = _button_js__WEBPACK_IMPORTED_MODULE_2___default()('Le Button');\nbutton.style = Object(_button_styles_js__WEBPACK_IMPORTED_MODULE_3__[\"makeColorStyle\"])('pink');\ndocument.body.appendChild(button);\ndocument.body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]);\nconsole.log(Object(_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// single primitive\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return \"nav\";\n});\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ })

/******/ });