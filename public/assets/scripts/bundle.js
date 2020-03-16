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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ \"./src/scripts/position.js\");\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_position__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/scripts/projects.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/position.js":
/*!*********************************!*\
  !*** ./src/scripts/position.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar stateModule = function () {\n  var positionSection = document.querySelector(\".position\");\n  var state = {\n    isReverseText: false,\n    transform: -50,\n    textIntervalAnimate: null,\n    isTextAnimate: false,\n    sectionFromTop: positionSection.offsetTop,\n    sectionHeight: positionSection.clientHeight,\n    previousScrollYPosition: 0,\n    circleSize: 300,\n    previousCircleSize: 300\n  };\n  var pub = {};\n\n  pub.changeState = function (newState) {\n    state = newState;\n  };\n\n  pub.getState = function () {\n    return state;\n  };\n\n  return pub;\n}();\n\nvar animateText = function animateText() {\n  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.15;\n  var transformProgress;\n\n  var _stateModule$getState = stateModule.getState(),\n      isReverseText = _stateModule$getState.isReverseText,\n      transform = _stateModule$getState.transform;\n\n  var text = document.querySelector(\".position__photo__title--text\");\n\n  if (!isReverseText) {\n    if (transform + speed > 50) {\n      text.style.transform = \"translateX(50%)\";\n      return stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n        isReverseText: true\n      }));\n    }\n\n    transformProgress = transform + speed;\n    text.style.transform = \"translateX(\".concat(transformProgress, \"%)\");\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      transform: transformProgress\n    }));\n  } else if (isReverseText) {\n    if (transform - speed < -50) {\n      text.style.transform = \"translateX(-50%)\";\n      return stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n        isReverseText: false\n      }));\n    }\n\n    transformProgress = transform - speed;\n    text.style.transform = \"translateX(\".concat(transformProgress, \"%)\");\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      transform: transformProgress\n    }));\n  }\n};\n\nvar scrollAnimationText = function scrollAnimationText(event) {\n  animateText(0.3);\n  animateText(0.3);\n};\n\nvar textIntervalAnimate;\n\nvar managmentAnimationText = function managmentAnimationText(type) {\n  var _stateModule$getState2 = stateModule.getState(),\n      textIntervalAnimate = _stateModule$getState2.textIntervalAnimate;\n\n  if (type === \"start\") {\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      textIntervalAnimate: setInterval(animateText, 30)\n    }));\n    window.addEventListener(\"scroll\", scrollAnimationText);\n  } else if (type === \"remove\") {\n    clearInterval(textIntervalAnimate);\n    window.removeEventListener(\"scroll\", scrollAnimationText);\n  }\n};\n\nwindow.addEventListener(\"scroll\", function () {\n  var _stateModule$getState3 = stateModule.getState(),\n      isTextAnimate = _stateModule$getState3.isTextAnimate,\n      sectionFromTop = _stateModule$getState3.sectionFromTop,\n      sectionHeight = _stateModule$getState3.sectionHeight;\n\n  var scrollY = window.scrollY;\n  var heightWindow = window.innerHeight;\n\n  if (scrollY > sectionFromTop - heightWindow && scrollY < sectionFromTop + sectionHeight) {\n    if (!isTextAnimate) {\n      managmentAnimationText(\"start\");\n      stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n        isTextAnimate: true\n      }));\n    }\n  } else {\n    managmentAnimationText(\"remove\");\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      isTextAnimate: false\n    }));\n  }\n});\n\nvar circleAnimatePhoto = function circleAnimatePhoto() {\n  var glass = document.querySelector(\".position_photo--maginfier-glass\");\n\n  var _stateModule$getState4 = stateModule.getState(),\n      sectionFromTop = _stateModule$getState4.sectionFromTop,\n      sectionHeight = _stateModule$getState4.sectionHeight,\n      circleSize = _stateModule$getState4.circleSize,\n      previousCircleSize = _stateModule$getState4.previousCircleSize;\n\n  if (window.scrollY + window.innerHeight < sectionFromTop || window.scrollY > sectionFromTop + sectionHeight) {\n    return false;\n  }\n\n  var blowUpPhoto = function blowUpPhoto() {\n    glass.style.width = previousCircleSize * 1.2 + \"px\";\n    glass.style.height = previousCircleSize * 1.2 + \"px\";\n  };\n\n  var zoomOutPhoto = function zoomOutPhoto() {\n    glass.style.width = previousCircleSize + \"px\";\n    glass.style.height = previousCircleSize + \"px\";\n  };\n\n  glass.addEventListener(\"mousemove\", blowUpPhoto);\n  glass.addEventListener(\"mouseout\", zoomOutPhoto);\n  var distanseToMiddle = sectionFromTop + sectionHeight / 2 - (window.scrollY + window.innerHeight / 2);\n  distanseToMiddle = distanseToMiddle < 0 ? distanseToMiddle * -1 : distanseToMiddle;\n  var scaleAboutSection;\n  var nowposition = window.scrollY + window.innerHeight - sectionFromTop;\n  var aboutCenterPosition = (sectionFromTop + sectionHeight / 2 - sectionFromTop) * 2;\n\n  if (nowposition > aboutCenterPosition) {\n    scaleAboutSection = (nowposition - 2 * (nowposition - aboutCenterPosition)) / aboutCenterPosition;\n  } else {\n    scaleAboutSection = nowposition / aboutCenterPosition;\n  }\n\n  var newCircleSize = scaleAboutSection * circleSize + 100;\n  glass.style.width = newCircleSize + \"px\";\n  glass.style.height = newCircleSize + \"px\";\n  glass.style.opacity = scaleAboutSection * 1.5;\n  stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n    previousCircleSize: newCircleSize\n  }));\n};\n\naddEventListener(\"scroll\", circleAnimatePhoto);\n\n//# sourceURL=webpack:///./src/scripts/position.js?");

/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar stateModule = function () {\n  var state = {\n    transformProjectsPosition: 0,\n    transformTitlePosition: 0,\n    isScrollOn: true\n  };\n  var pub = {};\n\n  pub.getState = function () {\n    return state;\n  };\n\n  pub.changeState = function (newState) {\n    state = newState;\n  };\n\n  return pub;\n}();\n\nvar projectSection = document.querySelector(\".projects\");\nvar projects = document.querySelector(\".projects__items\");\nvar projectsItem = document.querySelectorAll(\".projects__items__item\");\nvar projectsTitle = document.querySelector(\".projects__title h1\");\nvar projectsWidth = projects.offsetWidth;\nvar windowWidth = window.innerWidth;\nvar sizeOutOfScreen = projectsWidth - windowWidth + 100;\n\nvar moveProjects = function moveProjects(e) {\n  var _stateModule$getState = stateModule.getState(),\n      transformProjectsPosition = _stateModule$getState.transformProjectsPosition,\n      transformTitlePosition = _stateModule$getState.transformTitlePosition;\n\n  var newTransformProjectsPosition;\n  var newTransformTitlePosition;\n\n  if (e.deltaY < 0) {\n    if (transformProjectsPosition + 20 < 0) {\n      newTransformTitlePosition = transformTitlePosition + 2;\n      newTransformProjectsPosition = transformProjectsPosition + 20;\n      projectsTitle.style.transform = \"translateX(\".concat(newTransformTitlePosition, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition - 15, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition - 10, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition - 5, \"px)\");\n    } else {\n      projectsTitle.style.transform = \"translateX(\".concat(0, \"px)\");\n      newTransformTitlePosition = 0;\n      newTransformProjectsPosition = 0;\n    }\n  } else {\n    if ((transformProjectsPosition - 20) * -1 < sizeOutOfScreen) {\n      newTransformTitlePosition = transformTitlePosition - 2;\n      newTransformProjectsPosition = transformProjectsPosition - 20;\n      projectsTitle.style.transform = \"translateX(\".concat(newTransformTitlePosition, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition + 15, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition + 10, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition + 5, \"px)\");\n      projects.style.transform = \"translateX(\".concat(newTransformProjectsPosition, \"px)\");\n    } else {\n      newTransformTitlePosition = transformTitlePosition;\n      newTransformProjectsPosition = -sizeOutOfScreen;\n    }\n  }\n\n  stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n    transformProjectsPosition: newTransformProjectsPosition,\n    transformTitlePosition: newTransformTitlePosition\n  }));\n  projectsItem.forEach(function (item) {\n    item.style.transform = \"scale(0.999)\";\n    item.style.transform = \"scale(0.998)\";\n    item.style.transform = \"scale(0.997)\";\n    item.style.transform = \"scale(0.996)\";\n    item.style.transform = \"scale(0.995)\";\n    item.style.transform = \"scale(0.994)\";\n    item.style.transform = \"scale(0.993)\";\n    item.style.transform = \"scale(0.992)\";\n    item.style.transform = \"scale(0.991)\";\n    item.style.transform = \"scale(0.990)\";\n    setTimeout(function () {\n      item.style.transform = \"scale(0.990)\";\n      item.style.transform = \"scale(0.991)\";\n      item.style.transform = \"scale(0.992)\";\n      item.style.transform = \"scale(0.993)\";\n      item.style.transform = \"scale(0.994)\";\n      item.style.transform = \"scale(0.995)\";\n      item.style.transform = \"scale(0.996)\";\n      item.style.transform = \"scale(0.997)\";\n      item.style.transform = \"scale(0.998)\";\n      item.style.transform = \"scale(0.999)\";\n      item.style.transform = \"scale(1.0)\";\n    }, 200);\n  });\n};\n\nvar scrollProject = function scrollProject(action) {\n  if (action === \"on\") {\n    addEventListener(\"wheel\", moveProjects);\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      isScrollOn: false\n    }));\n  } else if (action === \"off\") {\n    removeEventListener(\"wheel\", moveProjects);\n    stateModule.changeState(_objectSpread({}, stateModule.getState(), {\n      isScrollOn: true\n    }));\n  }\n};\n\nfunction preventDefault(e) {\n  e = e || window.event;\n  if (e.preventDefault) e.preventDefault();\n  e.returnValue = false;\n}\n\nfunction preventDefaultForScrollKeys(e) {\n  if (keys[e.keyCode]) {\n    preventDefault(e);\n    return false;\n  }\n}\n\naddEventListener(\"wheel\", function () {\n  var _stateModule$getState2 = stateModule.getState(),\n      transformProjectsPosition = _stateModule$getState2.transformProjectsPosition,\n      isScrollOn = _stateModule$getState2.isScrollOn;\n\n  if (window.scrollY === projectSection.offsetTop && isScrollOn) scrollProject(\"on\");else if (window.scrollY < projectSection.offsetTop && !isScrollOn) scrollProject(\"off\");\n\n  if (transformProjectsPosition < 0) {\n    if (window.removeEventListener) window.addEventListener(\"DOMMouseScroll\", preventDefault, false);\n    document.addEventListener(\"wheel\", preventDefault, {\n      passive: false\n    });\n    window.onwheel = preventDefault;\n    window.onmousewheel = document.onmousewheel = preventDefault;\n    window.ontouchmove = preventDefault;\n    document.onkeydown = preventDefaultForScrollKeys;\n    document.querySelector(\"body\").style.overflow = \"hidden\";\n  } else if (transformProjectsPosition === 0) {\n    if (window.removeEventListener) window.removeEventListener(\"DOMMouseScroll\", preventDefault, false);\n    document.removeEventListener(\"wheel\", preventDefault, {\n      passive: false\n    });\n    window.onmousewheel = document.onmousewheel = null;\n    window.onwheel = null;\n    window.ontouchmove = null;\n    document.onkeydown = null;\n    document.querySelector(\"body\").style.overflow = \"visible\";\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/projects.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });