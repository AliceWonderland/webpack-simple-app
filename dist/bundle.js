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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


 //(can use require or import);


var button = _button_js__WEBPACK_IMPORTED_MODULE_2___default()('Le Button');
button.style = Object(_button_styles_js__WEBPACK_IMPORTED_MODULE_3__["makeColorStyle"])('pink');
document.body.appendChild(button);
document.body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__["footer"]);
console.log(Object(_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// single primitive
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return "nav";
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var top = document.createElement('div');
top.innerHTML = "Top of Footer";
top.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__["red"];
var bottom = document.createElement('div');
bottom.innerHTML = "Bottom of Footer";
bottom.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__["blue"];
var footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorStyle", function() { return makeColorStyle; });
var red = "color:red;";
var blue = "color:blue;";

var makeColorStyle = function makeColorStyle(color) {
  return "color: ".concat(color, ";");
}; // named exports at the bottom is a common standard
// exports.red = red;
// exports.blue = blue;
// exports.makeColorStyle = makeColorStyle;




/***/ }),
/* 4 */
/***/ (function(module, exports) {

// commonjs example

/**
 * 
 * @param {string} buttonLabel 
 * @returns {Element} button
 */
var makeButton = function makeButton(buttonLabel) {
  console.log("Button: ".concat(buttonLabel));
  var button = document.createElement('button');
  button.innerText = buttonLabel;
  return button;
};

module.exports = makeButton;

/***/ })
/******/ ]);