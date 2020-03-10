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

/***/ "./src/bodyBackground.js":
/*!*******************************!*\
  !*** ./src/bodyBackground.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getGiffy(weather) {\n  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Ct2SCnHe4VliC4ZpH4LzOkF3g67csISR&s=${weather}`, \n    { mode: 'cors' });\n  const weatherGif = await response.json();\n  console.log(weatherGif.data.images.original.url);\n  setBodyBackground(`url(${weatherGif.data.images.original.url})`);\n}\n\nfunction setBodyBackground(weather) {\n  const bodyBuilder = document.getElementById('body');\n  bodyBuilder.style.backgroundImage = weather;\n  console.log(bodyBuilder.style.backgroundImage);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getGiffy);\n\n//# sourceURL=webpack:///./src/bodyBackground.js?");

/***/ }),

/***/ "./src/documentBottom.js":
/*!*******************************!*\
  !*** ./src/documentBottom.js ***!
  \*******************************/
/*! exports provided: getCityForm, changeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCityForm\", function() { return getCityForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeButton\", function() { return changeButton; });\nfunction getCityForm() {\n  const lines = document.createElement('div');\n  lines.innerHTML = `\n  <form class=\"form\">\n    <fieldset>\n      <label for=\"city\">Choose a city</label><br>\n      <input type=\"text\" id=\"getCity\" required>\n    </fieldset>\n    <button id=\"submitCity\" class=\"btn-black\">Submit</button>\n  </form>\n  `;\n  return lines;\n}\n\nfunction changeButton(symbol) {\n  const lines = document.createElement('div');\n  lines.innerHTML = `\n    <button id=\"changeTempSymbol\" class=\"btn-black\">\n      Change to ${symbol}\n    </button>\n  `;\n  lines.setAttribute('id', 'changeTempButton');\n  return lines;\n}\n\n\n\n//# sourceURL=webpack:///./src/documentBottom.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useData */ \"./src/useData.js\");\n/* harmony import */ var _bodyBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyBackground */ \"./src/bodyBackground.js\");\n\n\n\nasync function getWeather(cityId) {\n  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`,\n    { mode: 'cors' });\n  const weatherData = await response.json();\n\n  console.log(weatherData);\n  console.log(weatherData.name, weatherData.sys.country);\n  console.log(Math.round(weatherData.main.temp - 273.15), 'C');\n  console.log(weatherData.wind.speed);\n  console.log(weatherData.weather[0].description);\n\n  Object(_useData__WEBPACK_IMPORTED_MODULE_0__[\"cityName\"])(weatherData);\n  Object(_useData__WEBPACK_IMPORTED_MODULE_0__[\"temperature\"])(weatherData);\n  Object(_useData__WEBPACK_IMPORTED_MODULE_0__[\"otherInfo\"])(weatherData.main, weatherData.wind.speed);\n  Object(_bodyBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData.weather[0].description);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWeather);\n\n//# sourceURL=webpack:///./src/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _documentBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentBottom */ \"./src/documentBottom.js\");\n\n\n\nfunction init() {\n  Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Juiz de Fora');\n\n  document.getElementById('weather-bottom').appendChild(Object(_documentBottom__WEBPACK_IMPORTED_MODULE_1__[\"getCityForm\"])());\n  document.getElementById('weather-bottom').appendChild(Object(_documentBottom__WEBPACK_IMPORTED_MODULE_1__[\"changeButton\"])());\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/useData.js":
/*!************************!*\
  !*** ./src/useData.js ***!
  \************************/
/*! exports provided: cityName, temperature, otherInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityName\", function() { return cityName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"temperature\", function() { return temperature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"otherInfo\", function() { return otherInfo; });\nasync function cityName(data) {\n  const ctNm = document.getElementById('weather-top');\n  ctNm.innerHTML = `\n    <h1>${data.name}, ${data.sys.country}</h1>\n    <h4>${new Date(data.dt * 1000).toUTCString()}</h4>\n  `;\n}\n\nfunction temperature(weatherData) {\n  const mainInfo = document.getElementById('weather-left');\n  mainInfo.innerHTML = `\n    <h2>${Math.round(weatherData.main.temp - 273.15)}°C</h2>\n    <h2>${weatherData.weather[0].description}</h2>\n  `;\n}\n\nfunction otherInfo(weatherData, windSpeed) {\n  const otherInfoLines = document.getElementById('weather-right');\n  otherInfoLines.innerHTML = `\n    <h3>Felling: ${Math.round(weatherData.feels_like - 273.15)} °C</h3>\n    <h3>Min: ${Math.round(weatherData.temp_min - 273.15)} °C</h3>\n    <h3>Max: ${Math.round(weatherData.temp_max - 273.15)} °C</h3>\n    <h3>Humidity: ${weatherData.humidity}</h3>\n    <h3>Wind speed: ${windSpeed}</h3>\n  `;\n}\n\n\n\n//# sourceURL=webpack:///./src/useData.js?");

/***/ })

/******/ });