/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AddSymbol.js":
/*!*************************************!*\
  !*** ./src/components/AddSymbol.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n\n\n\nconst AddSymbol = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ui icon input\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"symbol-search\",\n    type: \"text\",\n    placeholder: \"Symbol\",\n    value: props.symbol,\n    onChange: props.handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onFormSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"inverted circular search link icon\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AddSymbol);\n\n//# sourceURL=webpack:///./src/components/AddSymbol.js?");

/***/ }),

/***/ "./src/components/DatePicker.js":
/*!**************************************!*\
  !*** ./src/components/DatePicker.js ***!
  \**************************************/
/*! exports provided: DatePicker */
/*! exports used: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return DatePicker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n\n\nconst DatePicker = props => {\n  const [date4Price, setDate4Price] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('2021-02-01');\n\n  const handleDate = event => {\n    setDate4Price(event.target.value);\n    props.todayDateChild(event.target.value); // passing props from child back up to parent\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"date\",\n    type: \"date\",\n    value: date4Price,\n    onChange: handleDate\n  }));\n};\n\n//# sourceURL=webpack:///./src/components/DatePicker.js?");

/***/ }),

/***/ "./src/components/DeleteSymbol.js":
/*!****************************************!*\
  !*** ./src/components/DeleteSymbol.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nconst DeleteSymbol = props => {\n  const [symbolDelete, setSymbolDelete] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleDelete = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (event) {\n      try {\n        const response = yield fetch(\"/api/stocks/\".concat(props.stockID), {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        const data = yield response.json();\n        setSymbolDelete(!symbolDelete);\n      } catch (error) {\n        console.error(error);\n      } finally {}\n    });\n\n    return function handleDelete(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    onClick: handleDelete,\n    className: \"large red trash icon\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (DeleteSymbol);\n\n//# sourceURL=webpack:///./src/components/DeleteSymbol.js?");

/***/ }),

/***/ "./src/components/EditButton.js":
/*!**************************************!*\
  !*** ./src/components/EditButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n\n\n\nconst EditSymbol = props => {\n  const handleEdit = () => {};\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleEdit\n  }, \"EDIT\");\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = (EditSymbol);\n\n//# sourceURL=webpack:///./src/components/EditButton.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/SortButton.js":
/*!**************************************!*\
  !*** ./src/components/SortButton.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SortButton = props => {\n  const sortAZ = () => {\n    console.log('U clicked to sort A-Z');\n    const sortedListAZ = props.DBTicker.sort((a, b) => {\n      let tickerA = a.symbol;\n      let tickerB = b.symbol;\n\n      if (tickerA < tickerB) {\n        return -1;\n      }\n\n      if (tickerA > tickerB) {\n        return 1;\n      }\n\n      return 0;\n    });\n    props.setDBTicker(sortedListAZ);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    onClick: sortAZ,\n    className: \"sort alphabet down icon\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SortButton);\n\n//# sourceURL=webpack:///./src/components/SortButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AboutPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddSymbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AddSymbol */ \"./src/components/AddSymbol.js\");\n/* harmony import */ var _components_DeleteSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DeleteSymbol */ \"./src/components/DeleteSymbol.js\");\n/* harmony import */ var _components_EditButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditButton */ \"./src/components/EditButton.js\");\n/* harmony import */ var _components_SortButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SortButton */ \"./src/components/SortButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _StockNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StockNews */ \"./src/pages/StockNews.js\");\n/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DatePicker */ \"./src/components/DatePicker.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\nconst AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;\nfunction App(props) {\n  const [symbol, setSymbol] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''); // sets state of ticker symbol what user enters\n\n  const [DBSymbolAdd, setDBSymbolAdd] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}); //sets state of what to add to database\n\n  const [DBTicker, _setDBTicker] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); //sets state of what is returned from database\n\n  const [dateFrmChild, setDateFrmChild] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('2021-02-19');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Immediately Invoked Function Expression\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/stocks');\n        const data = yield response.json();\n\n        _setDBTicker(data);\n      } catch (error) {\n        console.error(error);\n      } finally {}\n    })();\n  }, [DBTicker]); // Question for Arthur - if I put DBTicker in empty brackets why does useEffect keep running continuously even though my DBTicker state is not changing constantly?\n\n  const APIDataPull = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=\".concat(symbol.toUpperCase(), \"&apikey=\").concat(AlphaVantageAPIKey));\n        const data = yield response.json();\n        yield sendToDB(data);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function APIDataPull() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  const sendToDB = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator(function* (data) {\n      const modifiedObject = {\n        symbol: symbol,\n        lastPrice: data['Time Series (Daily)'][todayDate()]['5. adjusted close']\n      };\n\n      try {\n        setDBSymbolAdd(modifiedObject);\n        const response = yield axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('api/stocks', modifiedObject);\n\n        _setDBTicker([...DBTicker, modifiedObject]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function sendToDB(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  const onFormSubmit = /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator(function* (event) {\n      event.preventDefault();\n\n      try {\n        yield APIDataPull();\n      } catch (error) {\n        console.error(error);\n      } finally {\n        setSymbol('');\n      }\n    });\n\n    return function onFormSubmit(_x2) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  const handleChange = event => {\n    setSymbol(event.target.value);\n  };\n\n  const todayDateBegin = () => {\n    const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY\n\n    var today = new Date();\n    const previousDayFlag = previousDay ? String(today.getDate()).padStart(2, '0') //Change here to get date correct\n    : String(today.getDate()).padStart(2, '0');\n    var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it should be after insertion and 2nd argument is what do you want inserted\n\n    var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted\n\n    var yyyy = today.getFullYear(); // gets current year\n\n    let todaysDate = \"\".concat(yyyy, \"-\").concat(mm, \"-\").concat(previousDayFlag);\n    return todaysDate;\n  };\n\n  const todayDate = () => {\n    const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY\n\n    var today = new Date();\n    const previousDayFlag = previousDay ? String(today.getDate() - 3).padStart(2, '0') //Change here to get date correct\n    : String(today.getDate()).padStart(2, '0');\n    var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it should be after insertion and 2nd argument is what do you want inserted\n\n    var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted\n\n    var yyyy = today.getFullYear(); // gets current year\n    //let todaysDate = `${yyyy}-${mm}-${previousDayFlag}`;\n\n    let todaysDate = \"\".concat(dateFrmChild); //this gets the date from the date input selector. Need to eventually build in logic to get last valid market date if it falls on Saturday/Sunday or holiday\n\n    return todaysDate;\n  };\n\n  let count = 1; //`https://cors-anywhere.herokuapp.com/'\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"total-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"stage\",\n    id: \"heading\"\n  }, \"STOCK WATCHLIST\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DatePicker__WEBPACK_IMPORTED_MODULE_8__[/* DatePicker */ \"a\"], {\n    todayDateChild: date => setDateFrmChild(date)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddSymbol__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    onFormSubmit: onFormSubmit,\n    handleChange: handleChange,\n    symbol: symbol\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SortButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    DBTicker: DBTicker,\n    setDBTicker: sortedListAZ => _setDBTicker(sortedListAZ)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"watchlist-container\"\n  }, DBTicker.map(stock => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: stock._id,\n      className: \"watchlist-data\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ \"b\"], {\n      to: \"/\".concat(stock._id),\n      symbol: stock.symbol\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, stock.symbol.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"$\", stock.lastPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DeleteSymbol__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      stockID: stock._id\n    }));\n  })));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Contact(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ContactPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/Contact.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomePage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/StockNews.js":
/*!********************************!*\
  !*** ./src/pages/StockNews.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return StockNews; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/pages/App.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nconst PolygonAPIKey = 'lb5t4CfGCkFI2pFpkTrfsZlaswHw8xIC';\nfunction StockNews(props) {\n  console.log(props);\n  const [ticker, setTicker] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    symbol: '',\n    lastPrice: 0\n  });\n  const [APINews, setAPINews] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const tickerUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/stocks/\".concat(props.match.params.id));\n        const data = yield response.json();\n        yield setTicker(data);\n      } catch (err) {\n        console.error(err);\n      }\n    })();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        console.log(ticker);\n        const response = yield fetch(\"https://api.polygon.io/v1/meta/symbols/\".concat(ticker.symbol, \"/news?perpage=50&page=1&apiKey=\").concat(PolygonAPIKey));\n        console.log(response);\n        const data = yield response.json();\n        console.log(data);\n        console.log(data[0].title);\n        yield setAPINews(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, [ticker]);\n\n  const handleUpdate = () => {\n    console.log('You clicked to update');\n    const inputFieldtoModify = document.getElementById('ticker-update-input');\n    const labelFieldToHide = document.getElementById('ticker-update-label');\n    const buttonToHide = document.getElementById('ticker-update-button');\n    inputFieldtoModify.style.visibility = 'visible';\n    labelFieldToHide.style.visibility = 'visible';\n    buttonToHide.style.visibility = 'visible';\n  };\n\n  const handleUpdateSubmit = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator(function* (event) {\n      console.log('You clicked to submit your update');\n\n      try {\n        const response = yield fetch(\"/api/stocks/\".concat(props.match.params.id), {\n          method: 'PUT',\n          //making a put request to database\n          headers: {\n            'Content-Type': 'application/json' // telling database we are going to send it json data\n\n          },\n          body: JSON.stringify({\n            // this is converting the Javascript data we are sending to be updated to json data so our database understands it and can use it to update our database\n            symbol: tickerUpdate.current.value,\n            //useRef from input field to update original entry\n            lastPrice: ticker.lastPrice //useRef from input field to update original entry\n\n          })\n        });\n        const data = yield response.json(); //json method here converts json to javascript\n\n        setTicker(data);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function handleUpdateSubmit(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"stock-news-headers\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, ticker.symbol), \" News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"$\", ticker.lastPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: \"/\".concat(ticker._id, \"/edit\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleUpdate\n  }, \"Update Post\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    id: \"ticker-update-label\",\n    htmlFor: \"ticker-update\"\n  }, \"Update Ticker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"ticker-update-input\",\n    ref: tickerUpdate,\n    defaultValue: ticker.symbol\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"ticker-update-button\",\n    onClick: handleUpdateSubmit\n  }, \"Send Update\"), APINews.map(article => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"stock-news-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"article-title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: article.url,\n      target: \"_blank\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, article.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"article-image\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: article.url,\n      target: \"_blank\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: article.image\n    }))));\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/StockNews.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n/* harmony import */ var _pages_StockNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/StockNews */ \"./src/pages/StockNews.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _components_DeleteSymbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeleteSymbol */ \"./src/components/DeleteSymbol.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props))\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Contact */ \"./src/pages/Contact.js\");\n/* harmony import */ var _pages_StockNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/StockNews */ \"./src/pages/StockNews.js\");\n/* harmony import */ var _components_DeleteSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DeleteSymbol */ \"./src/components/DeleteSymbol.js\");\n\n\n\n\n\n\n\nconst routes = [{\n  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'Contact',\n  path: '/contact'\n}, {\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/home'\n}, {\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _components_DeleteSymbol__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'UpdateStock',\n  path: '/:id/delete'\n}, {\n  Component: _pages_StockNews__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'StockNews',\n  path: '/:id'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });