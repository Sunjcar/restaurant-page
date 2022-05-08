/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n    //Cach Dom\n    const content = document.getElementById('content');\n\n    //Dom creation\n    const headline = document.createElement('h1');\n    const img = document.createElement('img');\n    \n    const info = document.createElement('h3');\n\n    headline.textContent = \"Contact Info\";\n    info.textContent = \"\";\n\n    content.appendChild(headline);\n    content.appendChild(img);\n    content.appendChild(info);\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n    //Cach Dom\n    const content = document.getElementById('content')   \n    \n    //Dom creation\n    \n    const headline = document.createElement('h1');\n    headline.classList.add('homeHead')\n    const img = document.createElement('img');\n    img.classList.add('homeImg')\n    const info = document.createElement('h3');\n    info.classList.add('quote')\n    const p = document.createElement('p');\n\n    headline.textContent = \"The Chinese Experience\";\n    info.textContent = \"“The art of Chinese cooking,” says Master James Wei, Taipei gourmet and prince of hospitality, “is to make the meat taste like vegetables and the vegetables test like meat, without either the meat or vegetables losing their original texture.” ~ Richard Hughes\";\n    p.textContent = \"Photo by Calum Lewis\"\n\n    content.appendChild(headline);\n    content.appendChild(img)\n    content.appendChild(info)\n    content.appendChild(p)\n  \n    \n};home()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n//Cache Dom\nconst navHome = document.getElementById('home')\nconst navMenu = document.getElementById('menu');\nconst navAbout = document.getElementById('about');\nconst content = document.getElementById('content')\n\nnavHome.addEventListener('click',() => {\n    clearContent();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    content.style.gridTemplateAreas = '\"home-image home-head\"\"home-image quote\"';\n})\n\nnavMenu.addEventListener('click', () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    content.style.gridTemplateAreas = '\". menu-head menu-head .\"\". img img1 .\"\". p p1 .\"\". img2 img3 .\"\". p2 p3 .\"'; \n   \n})\n\nnavAbout.addEventListener('click', () => {\n    clearContent();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n\nfunction clearContent(){\n    content.textContent = ''\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => { \n    //Cach Dom\n    const content = document.getElementById('content')\n  \n    //Dom creation\n    \n    const headline = document.createElement('h1');\n    headline.classList.add('menuHead')\n    headline.textContent = \"Menu\"\n \n    const img = document.createElement('img');\n    img.classList.add('menuImg');\n    img.src = './images/fish.jpg'\n    const p = document.createElement('p')\n    p.classList.add('menu-item')\n    p.textContent = \"Fish of the Great Wall\"\n \n    \n    const img1 = document.createElement('img')\n    img1.classList.add('menuImg1');\n    img1.src = './images/tofu.jpg' \n    const p1 = document.createElement('p')\n    p1.classList.add('menu-item1')\n    p1.textContent = \"Ma Po Tofu\"\n\n\n    const img2 = document.createElement('img');\n    img2.classList.add('menuImg2');\n    img2.src = './images/beef.jpg'\n    const p2 = document.createElement('p')\n    p2.classList.add('menu-item2')\n    p2.textContent = \"Beef Delight\"\n \n\n    const img3 = document.createElement('img');\n    img3.classList.add('menuImg3');\n    img3.src = './images/salad.jpg'\n    const p3 = document.createElement('p')\n    p3.classList.add('menu-item3')\n    p3.textContent = \"Chinese Fortune Salad\"\n \n\n    content.appendChild(headline);\n    content.appendChild(img)\n    content.appendChild(p)\n    content.appendChild(img1)\n    content.appendChild(p1)\n    content.appendChild(img2)\n    content.appendChild(p2)\n    content.appendChild(img3)\n    content.appendChild(p3)\n\n   \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;