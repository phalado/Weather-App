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

/***/ "./src/bodyBackground.js":
/*!*******************************!*\
  !*** ./src/bodyBackground.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBodyBackground(weather) {\n  const bodyBuilder = document.getElementById('body');\n  bodyBuilder.style.backgroundImage = weather;\n}\n\nasync function getGiffy(weather) {\n  const url = `https://api.giphy.com/v1/gifs/translate?api_key=Ct2SCnHe4VliC4ZpH4LzOkF3g67csISR&s=${weather}`\n  const response = await fetch(url, { mode: 'cors' });\n  const weatherGif = await response.json();\n  setBodyBackground(`url(${weatherGif.data.images.original.url})`);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGiffy);\n\n//# sourceURL=webpack://weather-app/./src/bodyBackground.js?");

/***/ }),

/***/ "./src/documentBottom.js":
/*!*******************************!*\
  !*** ./src/documentBottom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCityForm\": () => (/* binding */ getCityForm),\n/* harmony export */   \"changeButton\": () => (/* binding */ changeButton)\n/* harmony export */ });\nfunction getCityForm() {\n  const lines = document.createElement('div');\n  lines.innerHTML = `\n  <form class=\"form\">\n    <fieldset>\n      <label for=\"city\">Choose a city</label><br>\n      <input type=\"text\" id=\"getCity\" required>\n    </fieldset>\n    <button id=\"submitCity\" class=\"btn-black\">Submit</button>\n  </form>\n  `;\n  return lines;\n}\n\nfunction changeButton(symbol) {\n  const lines = `\n    <button id=\"changeTempSymbol\" class=\"btn-black\">\n      Change to ${symbol.getTmpSmbl() ? 'Fahrenheit' : 'Celsius'}\n    </button>\n  `;\n  return lines;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/documentBottom.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _useData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useData */ \"./src/useData.js\");\n/* harmony import */ var _bodyBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyBackground */ \"./src/bodyBackground.js\");\n\n\n\nasync function getWeather(cityId, symbol = true) {\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`;\n  const response = await fetch(url, { mode: \"cors\" });\n  const weatherData = await response.json();\n\n  (0,_useData__WEBPACK_IMPORTED_MODULE_0__.cityName)(weatherData);\n  (0,_useData__WEBPACK_IMPORTED_MODULE_0__.temperature)(weatherData, symbol);\n  (0,_useData__WEBPACK_IMPORTED_MODULE_0__.otherInfo)(weatherData.main, weatherData.wind.speed, symbol);\n  (0,_bodyBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData.weather[0].description);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _documentBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentBottom */ \"./src/documentBottom.js\");\n/* harmony import */ var _newCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newCity */ \"./src/newCity.js\");\n/* harmony import */ var _tempSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempSymbol */ \"./src/tempSymbol.js\");\n\n\n\n\n\nfunction init() {\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Juiz de Fora');\n\n  const tmpSymbol = (0,_tempSymbol__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  document.getElementById('weather-bottom').appendChild((0,_documentBottom__WEBPACK_IMPORTED_MODULE_1__.getCityForm)());\n  const button = document.createElement('div');\n  button.setAttribute('id', 'changeTempDiv');\n  button.innerHTML = (0,_documentBottom__WEBPACK_IMPORTED_MODULE_1__.changeButton)(tmpSymbol);\n  document.getElementById('weather-bottom').appendChild(button);\n  document.getElementById('submitCity').addEventListener('click', _newCity__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  document.getElementById('changeTempDiv').addEventListener('click', () => {\n    tmpSymbol.setTmpSmbl();\n    const city = document.getElementById('cityName').innerHTML.split(',')[0];\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city, tmpSymbol.getTmpSmbl());\n    document.getElementById('changeTempDiv').innerHTML = (0,_documentBottom__WEBPACK_IMPORTED_MODULE_1__.changeButton)(tmpSymbol);\n  });\n}\n\ninit();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/newCity.js":
/*!************************!*\
  !*** ./src/newCity.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n\n\nfunction newCity(e) {\n  e.preventDefault();\n  const city = document.getElementById('getCity').value;\n  document.getElementById('getCity').value = '';\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newCity);\n\n//# sourceURL=webpack://weather-app/./src/newCity.js?");

/***/ }),

/***/ "./src/tempSymbol.js":
/*!***************************!*\
  !*** ./src/tempSymbol.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tempSymbol = () => {\n  let tmpSmbl = true;\n\n  const setTmpSmbl = () => {\n    tmpSmbl = !tmpSmbl;\n  };\n  const getTmpSmbl = () => (tmpSmbl);\n\n  return { tmpSmbl, setTmpSmbl, getTmpSmbl };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempSymbol);\n\n//# sourceURL=webpack://weather-app/./src/tempSymbol.js?");

/***/ }),

/***/ "./src/useData.js":
/*!************************!*\
  !*** ./src/useData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityName\": () => (/* binding */ cityName),\n/* harmony export */   \"temperature\": () => (/* binding */ temperature),\n/* harmony export */   \"otherInfo\": () => (/* binding */ otherInfo)\n/* harmony export */ });\nasync function cityName(data) {\n  const ctNm = document.getElementById('weather-top');\n  ctNm.innerHTML = `\n    <h1 id=\"cityName\">${data.name}, ${data.sys.country}</h1>\n    <h4>${new Date(data.dt * 1000).toUTCString()}</h4>\n  `;\n}\n\nfunction tempCelsius(value) {\n  return `${Math.round(value - 273.15)}°C`;\n}\n\nfunction tempFar(value) {\n  return `${Math.round((((value - 273.15) * 9) / 5) + 32)}°F`;\n}\n\nfunction temperature(weatherData, symbol = true) {\n  const mainInfo = document.getElementById('weather-left');\n  mainInfo.innerHTML = `\n    <h2>${symbol ? tempCelsius(weatherData.main.temp) : tempFar(weatherData.main.temp)}</h2>\n    <h2>${weatherData.weather[0].description}</h2>\n    <img src=\"http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png\">\n  `;\n}\n\nfunction otherInfo(weatherData, windSpeed, symbol = true) {\n  const otherInfoLines = document.getElementById('weather-right');\n  otherInfoLines.innerHTML = `\n    <h3>Felling: ${symbol ? tempCelsius(weatherData.feels_like) : tempFar(weatherData.feels_like)}</h3>\n    <h3>Min: ${symbol ? tempCelsius(weatherData.temp_min) : tempFar(weatherData.temp_min)}</h3>\n    <h3>Max: ${symbol ? tempCelsius(weatherData.temp_max) : tempFar(weatherData.temp_max)}</h3>\n    <h3>Humidity: ${weatherData.humidity}%</h3>\n    <h3>Wind speed: ${windSpeed}</h3>\n  `;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/useData.js?");

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