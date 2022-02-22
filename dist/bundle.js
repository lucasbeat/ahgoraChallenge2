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

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function ytData(term) {\r\n  const KEY = \"AIzaSyCQi-3MgbF44-qG7bDf8IEwpnAq48V-mas\";\r\n\r\n  const search = await fetch(\r\n    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&q=${term}&maxResults=5`\r\n  )\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      return data.items.map((item) => item.id.videoId);\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n\r\n  const formattedIds = search.toString();\r\n  const videos = await fetch(\r\n    `https://www.googleapis.com/youtube/v3/videos?part=id,contentDetails,snippet&id=${formattedIds}&key=${KEY}`\r\n  )\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      return data.items.map((item) => ({\r\n        id: item.id,\r\n        duration: item.contentDetails.duration,\r\n        title: item.snippet.title,\r\n        description: item.snippet.description,\r\n      }));\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n\r\n  return videos;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ytData);\r\n\n\n//# sourceURL=webpack://youtube2/./src/api/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ \"./src/api/api.js\");\n\r\n\r\nconst nada = (0,_api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cachorro\").then((data) => {\r\n  return data.map((item) => {\r\n    return item;\r\n  });\r\n});\r\n\r\nconsole.log(nada);\r\n\n\n//# sourceURL=webpack://youtube2/./src/index.js?");

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