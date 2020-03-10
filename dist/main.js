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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function getWeather(cityId) {\n  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`, {mode: 'cors'});\n  const weatherData = await response.json();\n  \n  cityName(weatherData.city.name, weatherData.city.country);\n  temperature(weatherData.list[0]);\n  otherInfo(weatherData.list[0].main, weatherData.list[0].wind.speed);\n\n  console.log(weatherData.city.name, weatherData.city.country);\n  console.log(Math.round(weatherData.list[0].main.temp - 273.15), 'C');\n  console.log(weatherData.list[0].wind.speed);\n  console.log(weatherData.list[0].weather[0].description);\n  console.log(weatherData);\n}\n\nfunction cityName(name, country) {\n  const ctNm = document.createElement('h1');\n  ctNm.innerHTML = name + ', ' + country;\n  document.getElementById('weather-top').appendChild(ctNm);\n}\n\nfunction temperature(weatherData) {\n  const mainInfo = document.getElementById('weather-left');\n  mainInfo.innerHTML =  `\n    <h2>${Math.round(weatherData.main.temp - 275.15)}°C</h2>\n    <h2>${weatherData.weather[0].description}</h2>\n  `\n}\n\nfunction otherInfo(weatherData, windSpeed) {\n  const otherInfoLines = document.getElementById('weather-right');\n  otherInfoLines.innerHTML = `\n    <h3>Felling: ${Math.round(weatherData.feels_like - 273.15)} °C</h3>\n    <h3>Min: ${Math.round(weatherData.temp_min - 273.15)} °C</h3>\n    <h3>Max: ${Math.round(weatherData.temp_max - 273.15)} °C</h3>\n    <h3>Humidity: ${weatherData.humidity}</h3>\n    <h3>Wind speed: ${windSpeed}</h3>\n  `\n}\n\nasync function getFile() {\n  const response = await fetch(\"data/city.list.json\");\n  const cityData = await response.json();\n  console.log(cityData);\n}\n\nfunction init() {\n  getWeather(3459504);\n  getFile();\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });