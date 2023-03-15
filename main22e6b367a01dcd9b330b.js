/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Quicksand', sans-serif;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    background-color: hsl(0, 0%, 89%);\n}\n\nbody h1 {\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n\n    font-size: 3rem;\n    \n    font-family: 'Nixie One', cursive;\n}\n\nmain {\n    margin-bottom: 15px;\n}\n\nh3 {\n    font-weight: 400;\n}\n\n.weather-form {\n    /* box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2); */\n    border-radius: 5px;\n\n    /* background-color: hsl(0, 0%, 97%); */\n\n    padding: 10px 20px;\n}\n\n.weather-form input {\n    border-radius: 5px;\n    padding: 10px;\n\n    outline: none;\n    border: 1px solid black;\n\n    font-size: 1.5rem;\n}\n\n.error-msg {\n    display: none;\n    color: hsl(0, 100%, 42%);\n\n    margin-top: 10px;\n}\n\n.error-msg.active {\n    display: block;\n}\n\n.temp-units {\n    width: 100%;\n\n    padding: 10px;\n\n    font-size: 1rem;\n\n    margin-top: 10px;\n}\n\nspan.current-unit {\n    font-weight: bold;\n}\n\n.hourly-weather {\n    display: flex;\n    gap: 20px;\n\n    overflow: auto;\n    min-height: 220px;\n\n    width: 100%;\n\n    margin-bottom: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.hourly-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    width: 120px;\n\n    flex: 1;\n}\n\n.pop {\n    /* color: rgb(78, 181, 255); */\n    color: #026cde;\n}\n\n.weather-stats {\n    min-width: 100%;\n    background-color: hsl(0, 0%, 79%);\n    \n    padding: 10px 20px;\n}\n\n.stats-grid {\n    margin-top: 20px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 20px;\n\n    padding-bottom: 20px;\n}\n\n.stats-grid > div {\n    text-align: center;\n}\n\n.stats-grid abbr {\n    cursor: help;\n}\n\n.weather-cards {\n    display: grid;\n\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n\n    padding: 20px;\n}\n\n.weather-card {\n    background-color: white;\n    padding: 10px;\n\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2);\n\n    display: flex;\n}\n\n.weather-card h2 {\n    font-weight: 400;\n}\n\n.weather-card img {\n    margin-left: auto;\n\n    height: 100px;\n    width: 100px;\n}\n\n.skeleton {\n    opacity: .7;\n    animation: skeleton-loading 1s linear infinite alternate;\n}\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: hsl(200, 20%, 70%);\n    }\n\n    100% {\n        background-color: hsl(200, 20%, 95%);\n    }\n}\n\n.skeleton-text {\n    width: 100%;\n    height: .5rem;\n    margin-bottom: 10px;\n    padding: 10px 100px 10px 10px;\n\n    border-radius: 5px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n    padding-bottom: 10px;\n}\n\n.fa-github {\n    font-size: 24px;\n    color: black; /* prevent icon from going red on click */\n    transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n\n@media screen and (max-width: 500px) {\n    .stats-grid {\n        grid-template-columns: repeat(3, minmax(100px, 1fr));\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,oCAAoC;AACxC;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;;IAEnB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB,eAAe;;IAEf,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kDAAkD;IAClD,kBAAkB;;IAElB,uCAAuC;;IAEvC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;;IAEb,aAAa;IACb,uBAAuB;;IAEvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,wBAAwB;;IAExB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;;IAEX,aAAa;;IAEb,eAAe;;IAEf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;;IAET,cAAc;IACd,iBAAiB;;IAEjB,WAAW;;IAEX,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;IAElB,YAAY;;IAEZ,OAAO;AACX;;AAEA;IACI,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iCAAiC;;IAEjC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;;IAEhB,WAAW;;IAEX,aAAa;IACb,qCAAqC;;IAErC,SAAS;;IAET,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;;IAEb,WAAW;IACX,2DAA2D;IAC3D,SAAS;;IAET,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;;IAEb,kBAAkB;IAClB,4CAA4C;;IAE5C,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,wDAAwD;AAC5D;;AAEA;IACI;QACI,oCAAoC;IACxC;;IAEA;QACI,oCAAoC;IACxC;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;IAET,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,YAAY,EAAE,yCAAyC;IACvD,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;QACI,oDAAoD;IACxD;AACJ","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Quicksand', sans-serif;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    background-color: hsl(0, 0%, 89%);\n}\n\nbody h1 {\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n\n    font-size: 3rem;\n    \n    font-family: 'Nixie One', cursive;\n}\n\nmain {\n    margin-bottom: 15px;\n}\n\nh3 {\n    font-weight: 400;\n}\n\n.weather-form {\n    /* box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2); */\n    border-radius: 5px;\n\n    /* background-color: hsl(0, 0%, 97%); */\n\n    padding: 10px 20px;\n}\n\n.weather-form input {\n    border-radius: 5px;\n    padding: 10px;\n\n    outline: none;\n    border: 1px solid black;\n\n    font-size: 1.5rem;\n}\n\n.error-msg {\n    display: none;\n    color: hsl(0, 100%, 42%);\n\n    margin-top: 10px;\n}\n\n.error-msg.active {\n    display: block;\n}\n\n.temp-units {\n    width: 100%;\n\n    padding: 10px;\n\n    font-size: 1rem;\n\n    margin-top: 10px;\n}\n\nspan.current-unit {\n    font-weight: bold;\n}\n\n.hourly-weather {\n    display: flex;\n    gap: 20px;\n\n    overflow: auto;\n    min-height: 220px;\n\n    width: 100%;\n\n    margin-bottom: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.hourly-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    width: 120px;\n\n    flex: 1;\n}\n\n.pop {\n    /* color: rgb(78, 181, 255); */\n    color: #026cde;\n}\n\n.weather-stats {\n    min-width: 100%;\n    background-color: hsl(0, 0%, 79%);\n    \n    padding: 10px 20px;\n}\n\n.stats-grid {\n    margin-top: 20px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 20px;\n\n    padding-bottom: 20px;\n}\n\n.stats-grid > div {\n    text-align: center;\n}\n\n.stats-grid abbr {\n    cursor: help;\n}\n\n.weather-cards {\n    display: grid;\n\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n\n    padding: 20px;\n}\n\n.weather-card {\n    background-color: white;\n    padding: 10px;\n\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2);\n\n    display: flex;\n}\n\n.weather-card h2 {\n    font-weight: 400;\n}\n\n.weather-card img {\n    margin-left: auto;\n\n    height: 100px;\n    width: 100px;\n}\n\n.skeleton {\n    opacity: .7;\n    animation: skeleton-loading 1s linear infinite alternate;\n}\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: hsl(200, 20%, 70%);\n    }\n\n    100% {\n        background-color: hsl(200, 20%, 95%);\n    }\n}\n\n.skeleton-text {\n    width: 100%;\n    height: .5rem;\n    margin-bottom: 10px;\n    padding: 10px 100px 10px 10px;\n\n    border-radius: 5px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n    padding-bottom: 10px;\n}\n\n.fa-github {\n    font-size: 24px;\n    color: black; /* prevent icon from going red on click */\n    transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n\n@media screen and (max-width: 500px) {\n    .stats-grid {\n        grid-template-columns: repeat(3, minmax(100px, 1fr));\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const weatherInput = document.querySelector(".weather-form input")

const weatherForm = document.querySelector(".weather-form")

const unitsButton = weatherForm.querySelector(".temp-units")

unitsButton.addEventListener("click", () => {
    const buttonSpans = unitsButton.querySelectorAll("span")

    let currentUnit
    // If the first span (Celsius) is the current unit, switch to Fahrenheit
    if (buttonSpans[0].classList.contains("current-unit")) {
        buttonSpans[0].classList.remove("current-unit")
        buttonSpans[1].classList.add("current-unit")

        currentUnit = "F"
    }
    else {
        buttonSpans[0].classList.add("current-unit")
        buttonSpans[1].classList.remove("current-unit")

        currentUnit = "C"
    }

    const allTemperatures = document.querySelectorAll(".temp")

    allTemperatures.forEach(p => {
        const degreeString = p.textContent.split("°")[0]
        const degrees = parseInt(degreeString)
        if (currentUnit === "F") {
            p.textContent = `${celsiusToFahrenheit(degrees)}°`
        }
        else {
            p.textContent = `${fahrenheitToCelsius(degrees)}°`
        }
    })
})

function resetUnitsButton() {
    const buttonSpans = unitsButton.querySelectorAll("span")
    buttonSpans[0].classList.remove("current-unit")
    buttonSpans[1].classList.add("current-unit")

    unitsButton.classList.add("hidden")
}

function fahrenheitToCelsius(degreesFahrenheit) {
    const celsius = ((degreesFahrenheit - 32) * 5 ) / 9
    return Math.round(celsius)
}

function celsiusToFahrenheit(degreesCelsius) {
    const fahrenheit = (degreesCelsius * (9 / 5)) + 32
    return Math.round(fahrenheit)
}

weatherForm.addEventListener("submit", e => {
    e.preventDefault()
})

weatherInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        resetUnitsButton()

        const errorMsg = weatherForm.querySelector(".error-msg")

        errorMsg.classList.remove("active")
        const cityName = weatherForm.querySelector("input").value

        createSkeletonHourlyCards()
        createSkeletonWeatherCards()

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51508559a54a70928ab3aed23d3a0b63`, {
            mode: "cors",
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)

                if (json.cod === "404") {
                    errorMsg.textContent = `${cityName} not found`
                    errorMsg.classList.add("active")

                    unitsButton.classList.add("hidden")

                    // Remove skeleton loading
                    const weatherCards = document.querySelector('.weather-cards')
                    weatherCards.replaceChildren()

                    const hourlyCards = document.querySelector(".hourly-weather")
                    hourlyCards.replaceChildren()
                    hourlyCards.classList.add("hidden")
                } else {
                    errorMsg.classList.remove("active")
                    const latitude = json.coord.lat
                    const longitude = json.coord.lon

                    getWeatherInfo(latitude, longitude)
                }
            })
        e.preventDefault()
    }
})

function getWeatherInfo(latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=51508559a54a70928ab3aed23d3a0b63&units=imperial`,
        {
            mode: "cors",
        }
    )
        .then(response => response.json())
        .then(json => {
            console.log(json)

            createHourlyCards(json)
            createWeatherStats(json)
            createWeatherCards(json)

            unitsButton.classList.remove("hidden")
        })
}

function createHourlyCards(json) {
    const hourlyDisplay = document.querySelector(".hourly-weather")
    hourlyDisplay.replaceChildren()

    for (let i = 0; i < 24; ++i) {
        const hourlyInfo = json.hourly[i]

        let hourString = new Date(hourlyInfo.dt * 1000).toLocaleTimeString("us-EN")
        let amOrPM = hourString.split(" ")[1]
        let hourTime = hourString.split(":")[0]
        hourString = `${hourTime} ${amOrPM}`

        const imgCode = hourlyInfo.weather[0].icon
        const imgSrc = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

        let descriptionString = hourlyInfo.weather[0].description
        descriptionString = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1)

        hourlyDisplay.innerHTML += `
        <article class="hourly-card">
            <h3>${hourString}</h3>
            <img src=${imgSrc}>

            <p class="pop">${hourlyInfo.pop * 100}%</p>
            <p class="temp">${Math.round(hourlyInfo.feels_like)}&deg;</p>
            <p>${descriptionString}</p>
        </article>
        `
    }
}

function createSkeletonHourlyCards() {
    const hourlyCards = document.querySelector(".hourly-weather")
    hourlyCards.replaceChildren()
    hourlyCards.classList.remove("hidden")

    for (let i = 0; i < 10; ++i) {
        hourlyCards.innerHTML += `
        <article class="hourly-card">
            <h3 class="skeleton skeleton-text"></h3>
            <img class="skeleton" style="height: 100px; width: 100px; margin-bottom: 20px;">

            <p class="skeleton skeleton-text"></p>
            <p class="skeleton skeleton-text"></p>
        </article>
        `
    }
}

function createWeatherStats(json) {
    const stats = document.querySelector(".stats-grid")
    
    // Clear old stats
    for (const childDiv of stats.children) {
        const statInfo = childDiv.querySelector("p.stat")
        statInfo.textContent = ""
    }

    const sunriseStat = stats.querySelector(".sunrise p.stat")

    const timeString = new Date(json.current.sunrise * 1000).toLocaleTimeString("en-US")
    sunriseStat.textContent = timeString

    const sunsetStat = stats.querySelector(".sunset p.stat")
    sunsetStat.textContent = new Date(json.current.sunset * 1000).toLocaleTimeString("en-US")

    const rainStat = stats.querySelector(".rain-chance p.stat")
    rainStat.textContent = `${json.daily[0].pop * 100}%`

    const humidityStat = stats.querySelector(".humidity p.stat")
    humidityStat.textContent = `${json.current.humidity}%`

    const windStat = stats.querySelector(".wind p.stat")
    windStat.textContent = `${json.current.wind_speed} m/s`

    const feelsLike = stats.querySelector(".feels-like p.stat")
    feelsLike.textContent = `${Math.round(json.current.feels_like)}°`

    const precipitationStat = stats.querySelector(".precipitation p.stat")

    if (json.current.rain) {
        precipitationStat.textContent = `${json.current.rain["1h"]} mm/h`
    }
    else if (json.current.snow) {
        precipitationStat.textContent = `${json.current.snow["1h"]} mm/h`
    }
    else {
        precipitationStat.textContent = "0 mm/h"
    }

    const pressureStat = stats.querySelector(".pressure p.stat")
    pressureStat.textContent = `${json.current.pressure} hPa`

    const visibilityStat = stats.querySelector(".visibility p.stat")
    const kmVisibility = json.current.visibility / 1000
    visibilityStat.textContent = `${kmVisibility} km`

    const uvStat = stats.querySelector(".uv-index p.stat")
    uvStat.textContent = `${json.current.uvi}`
}

function createSkeletonWeatherCards() { 
    const weatherCards = document.querySelector(".weather-cards")
    weatherCards.replaceChildren()
    const template = document.querySelector("template")

    for (let i = 0; i < 8; ++i) {
        const skeletonContent = template.content.cloneNode(true)
        weatherCards.appendChild(skeletonContent)
    }
}

function createWeatherCards(json) {
    const daily = json.daily
    const weatherCards = document.querySelector(".weather-cards")
    weatherCards.replaceChildren()

    daily.forEach((dayInfo, index) => {
        const dayName = new Date(dayInfo.dt * 1000).toLocaleDateString("us-en", {
            weekday: "long"
        })

        const descriptions = []

        dayInfo.weather.forEach(weatherInfo => {
            descriptions.push(weatherInfo.description)
        })

        const imgCode = dayInfo.weather[0].icon
        const imgSrc = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

        let descriptionString = descriptions.join("; ")
        descriptionString = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1)

        weatherCards.innerHTML += `
            <article class="weather-card">
                <div class="main-weather">
                    <h2>${dayName}</h2>
                    <div>
                        <p>H: <span class="temp">${Math.round(dayInfo.temp.max)}&deg;</span></p>
                        <p>L: <span class="temp">${Math.round(dayInfo.temp.min)}&deg;</span></p>
                    </div>
                    <p>Chance of precipitation: <span class="pop">${dayInfo.pop * 100}%</span></p>
                    <p>${descriptionString}</p>
                </div>
                <img src=${imgSrc}>
            </article>
        `
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLO0FBQ3JGLG1EQUFtRCw2QkFBNkIsS0FBSztBQUNyRjtBQUNBLG9FQUFvRSxrQkFBa0I7QUFDdEYseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODklKTtcXG59XFxuXFxuYm9keSBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdOaXhpZSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1mb3JtIHtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYigwLCAwLCAwLCAuMik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NyUpOyAqL1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi53ZWF0aGVyLWZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiBoc2woMCwgMTAwJSwgNDIlKTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmVycm9yLW1zZy5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRlbXAtdW5pdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5zcGFuLmN1cnJlbnQtdW5pdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG91cmx5LWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMjBweDtcXG5cXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnBvcCB7XFxuICAgIC8qIGNvbG9yOiByZ2IoNzgsIDE4MSwgMjU1KTsgKi9cXG4gICAgY29sb3I6ICMwMjZjZGU7XFxufVxcblxcbi53ZWF0aGVyLXN0YXRzIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDc5JSk7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zdGF0cy1ncmlkIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zdGF0cy1ncmlkID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCBhYmJyIHtcXG4gICAgY3Vyc29yOiBoZWxwO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYigwLCAwLCAwLCAuMik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgaDIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIGltZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5za2VsZXRvbiB7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBhbmltYXRpb246IHNrZWxldG9uLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMjAlLCA3MCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMjAlLCA5NSUpO1xcbiAgICB9XFxufVxcblxcbi5za2VsZXRvbi10ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMTBweCAxMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7IC8qIHByZXZlbnQgaWNvbiBmcm9tIGdvaW5nIHJlZCBvbiBjbGljayAqL1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnN0YXRzLWdyaWQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLG1CQUFtQjs7SUFFbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsZUFBZTs7SUFFZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsa0JBQWtCOztJQUVsQix1Q0FBdUM7O0lBRXZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7O0lBRXhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7O0lBRWIsZUFBZTs7SUFFZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxjQUFjO0lBQ2QsaUJBQWlCOztJQUVqQixXQUFXOztJQUVYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLFlBQVk7O0lBRVosT0FBTztBQUNYOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDOztJQUVqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHFDQUFxQzs7SUFFckMsU0FBUzs7SUFFVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixXQUFXO0lBQ1gsMkRBQTJEO0lBQzNELFNBQVM7O0lBRVQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhOztJQUViLGtCQUFrQjtJQUNsQiw0Q0FBNEM7O0lBRTVDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVksRUFBRSx5Q0FBeUM7SUFDdkQsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxvREFBb0Q7SUFDeEQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODklKTtcXG59XFxuXFxuYm9keSBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdOaXhpZSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1mb3JtIHtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYigwLCAwLCAwLCAuMik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NyUpOyAqL1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi53ZWF0aGVyLWZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiBoc2woMCwgMTAwJSwgNDIlKTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmVycm9yLW1zZy5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRlbXAtdW5pdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5zcGFuLmN1cnJlbnQtdW5pdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG91cmx5LWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMjBweDtcXG5cXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnBvcCB7XFxuICAgIC8qIGNvbG9yOiByZ2IoNzgsIDE4MSwgMjU1KTsgKi9cXG4gICAgY29sb3I6ICMwMjZjZGU7XFxufVxcblxcbi53ZWF0aGVyLXN0YXRzIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDc5JSk7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5zdGF0cy1ncmlkIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zdGF0cy1ncmlkID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCBhYmJyIHtcXG4gICAgY3Vyc29yOiBoZWxwO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYigwLCAwLCAwLCAuMik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgaDIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIGltZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5za2VsZXRvbiB7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBhbmltYXRpb246IHNrZWxldG9uLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMjAlLCA3MCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMjAlLCA5NSUpO1xcbiAgICB9XFxufVxcblxcbi5za2VsZXRvbi10ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMTBweCAxMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7IC8qIHByZXZlbnQgaWNvbiBmcm9tIGdvaW5nIHJlZCBvbiBjbGljayAqL1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnN0YXRzLWdyaWQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5cbmNvbnN0IHdlYXRoZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1mb3JtIGlucHV0XCIpXG5cbmNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWZvcm1cIilcblxuY29uc3QgdW5pdHNCdXR0b24gPSB3ZWF0aGVyRm9ybS5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtdW5pdHNcIilcblxudW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBidXR0b25TcGFucyA9IHVuaXRzQnV0dG9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXG5cbiAgICBsZXQgY3VycmVudFVuaXRcbiAgICAvLyBJZiB0aGUgZmlyc3Qgc3BhbiAoQ2Vsc2l1cykgaXMgdGhlIGN1cnJlbnQgdW5pdCwgc3dpdGNoIHRvIEZhaHJlbmhlaXRcbiAgICBpZiAoYnV0dG9uU3BhbnNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3VycmVudC11bml0XCIpKSB7XG4gICAgICAgIGJ1dHRvblNwYW5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXVuaXRcIilcbiAgICAgICAgYnV0dG9uU3BhbnNbMV0uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdW5pdFwiKVxuXG4gICAgICAgIGN1cnJlbnRVbml0ID0gXCJGXCJcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJ1dHRvblNwYW5zWzBdLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXVuaXRcIilcbiAgICAgICAgYnV0dG9uU3BhbnNbMV0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtdW5pdFwiKVxuXG4gICAgICAgIGN1cnJlbnRVbml0ID0gXCJDXCJcbiAgICB9XG5cbiAgICBjb25zdCBhbGxUZW1wZXJhdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBcIilcblxuICAgIGFsbFRlbXBlcmF0dXJlcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBkZWdyZWVTdHJpbmcgPSBwLnRleHRDb250ZW50LnNwbGl0KFwiwrBcIilbMF1cbiAgICAgICAgY29uc3QgZGVncmVlcyA9IHBhcnNlSW50KGRlZ3JlZVN0cmluZylcbiAgICAgICAgaWYgKGN1cnJlbnRVbml0ID09PSBcIkZcIikge1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXNUb0ZhaHJlbmhlaXQoZGVncmVlcyl9wrBgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdFRvQ2Vsc2l1cyhkZWdyZWVzKX3CsGBcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiByZXNldFVuaXRzQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvblNwYW5zID0gdW5pdHNCdXR0b24ucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiAgICBidXR0b25TcGFuc1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC11bml0XCIpXG4gICAgYnV0dG9uU3BhbnNbMV0uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdW5pdFwiKVxuXG4gICAgdW5pdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxufVxuXG5mdW5jdGlvbiBmYWhyZW5oZWl0VG9DZWxzaXVzKGRlZ3JlZXNGYWhyZW5oZWl0KSB7XG4gICAgY29uc3QgY2Vsc2l1cyA9ICgoZGVncmVlc0ZhaHJlbmhlaXQgLSAzMikgKiA1ICkgLyA5XG4gICAgcmV0dXJuIE1hdGgucm91bmQoY2Vsc2l1cylcbn1cblxuZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdChkZWdyZWVzQ2Vsc2l1cykge1xuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSAoZGVncmVlc0NlbHNpdXMgKiAoOSAvIDUpKSArIDMyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmFocmVuaGVpdClcbn1cblxud2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbn0pXG5cbndlYXRoZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICByZXNldFVuaXRzQnV0dG9uKClcblxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IHdlYXRoZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbXNnXCIpXG5cbiAgICAgICAgZXJyb3JNc2cuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IHdlYXRoZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZVxuXG4gICAgICAgIGNyZWF0ZVNrZWxldG9uSG91cmx5Q2FyZHMoKVxuICAgICAgICBjcmVhdGVTa2VsZXRvbldlYXRoZXJDYXJkcygpXG5cbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9NTE1MDg1NTlhNTRhNzA5MjhhYjNhZWQyM2QzYTBiNjNgLCB7XG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24pXG5cbiAgICAgICAgICAgICAgICBpZiAoanNvbi5jb2QgPT09IFwiNDA0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBgJHtjaXR5TmFtZX0gbm90IGZvdW5kYFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgdW5pdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBza2VsZXRvbiBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmRzJylcbiAgICAgICAgICAgICAgICAgICAgd2VhdGhlckNhcmRzLnJlcGxhY2VDaGlsZHJlbigpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cmx5Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS13ZWF0aGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIGhvdXJseUNhcmRzLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgICAgIGhvdXJseUNhcmRzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0ganNvbi5jb29yZC5sYXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0ganNvbi5jb29yZC5sb25cblxuICAgICAgICAgICAgICAgICAgICBnZXRXZWF0aGVySW5mbyhsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTUxNTA4NTU5YTU0YTcwOTI4YWIzYWVkMjNkM2EwYjYzJnVuaXRzPWltcGVyaWFsYCxcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuXG4gICAgICAgICAgICBjcmVhdGVIb3VybHlDYXJkcyhqc29uKVxuICAgICAgICAgICAgY3JlYXRlV2VhdGhlclN0YXRzKGpzb24pXG4gICAgICAgICAgICBjcmVhdGVXZWF0aGVyQ2FyZHMoanNvbilcblxuICAgICAgICAgICAgdW5pdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkcyhqc29uKSB7XG4gICAgY29uc3QgaG91cmx5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIilcbiAgICBob3VybHlEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyArK2kpIHtcbiAgICAgICAgY29uc3QgaG91cmx5SW5mbyA9IGpzb24uaG91cmx5W2ldXG5cbiAgICAgICAgbGV0IGhvdXJTdHJpbmcgPSBuZXcgRGF0ZShob3VybHlJbmZvLmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwidXMtRU5cIilcbiAgICAgICAgbGV0IGFtT3JQTSA9IGhvdXJTdHJpbmcuc3BsaXQoXCIgXCIpWzFdXG4gICAgICAgIGxldCBob3VyVGltZSA9IGhvdXJTdHJpbmcuc3BsaXQoXCI6XCIpWzBdXG4gICAgICAgIGhvdXJTdHJpbmcgPSBgJHtob3VyVGltZX0gJHthbU9yUE19YFxuXG4gICAgICAgIGNvbnN0IGltZ0NvZGUgPSBob3VybHlJbmZvLndlYXRoZXJbMF0uaWNvblxuICAgICAgICBjb25zdCBpbWdTcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aW1nQ29kZX1AMngucG5nYFxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvblN0cmluZyA9IGhvdXJseUluZm8ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvblN0cmluZyA9IGRlc2NyaXB0aW9uU3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb25TdHJpbmcuc2xpY2UoMSlcblxuICAgICAgICBob3VybHlEaXNwbGF5LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiaG91cmx5LWNhcmRcIj5cbiAgICAgICAgICAgIDxoMz4ke2hvdXJTdHJpbmd9PC9oMz5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1nU3JjfT5cblxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3BcIj4ke2hvdXJseUluZm8ucG9wICogMTAwfSU8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBcIj4ke01hdGgucm91bmQoaG91cmx5SW5mby5mZWVsc19saWtlKX0mZGVnOzwvcD5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb25TdHJpbmd9PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNrZWxldG9uSG91cmx5Q2FyZHMoKSB7XG4gICAgY29uc3QgaG91cmx5Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS13ZWF0aGVyXCIpXG4gICAgaG91cmx5Q2FyZHMucmVwbGFjZUNoaWxkcmVuKClcbiAgICBob3VybHlDYXJkcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgaG91cmx5Q2FyZHMuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJob3VybHktY2FyZFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwic2tlbGV0b24gc2tlbGV0b24tdGV4dFwiPjwvaDM+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic2tlbGV0b25cIiBzdHlsZT1cImhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDsgbWFyZ2luLWJvdHRvbTogMjBweDtcIj5cblxuICAgICAgICAgICAgPHAgY2xhc3M9XCJza2VsZXRvbiBza2VsZXRvbi10ZXh0XCI+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJza2VsZXRvbiBza2VsZXRvbi10ZXh0XCI+PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTdGF0cyhqc29uKSB7XG4gICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRzLWdyaWRcIilcbiAgICBcbiAgICAvLyBDbGVhciBvbGQgc3RhdHNcbiAgICBmb3IgKGNvbnN0IGNoaWxkRGl2IG9mIHN0YXRzLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHN0YXRJbmZvID0gY2hpbGREaXYucXVlcnlTZWxlY3RvcihcInAuc3RhdFwiKVxuICAgICAgICBzdGF0SW5mby50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCBzdW5yaXNlU3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZSBwLnN0YXRcIilcblxuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBuZXcgRGF0ZShqc29uLmN1cnJlbnQuc3VucmlzZSAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpXG4gICAgc3VucmlzZVN0YXQudGV4dENvbnRlbnQgPSB0aW1lU3RyaW5nXG5cbiAgICBjb25zdCBzdW5zZXRTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi5zdW5zZXQgcC5zdGF0XCIpXG4gICAgc3Vuc2V0U3RhdC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGpzb24uY3VycmVudC5zdW5zZXQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKVxuXG4gICAgY29uc3QgcmFpblN0YXQgPSBzdGF0cy5xdWVyeVNlbGVjdG9yKFwiLnJhaW4tY2hhbmNlIHAuc3RhdFwiKVxuICAgIHJhaW5TdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5kYWlseVswXS5wb3AgKiAxMDB9JWBcblxuICAgIGNvbnN0IGh1bWlkaXR5U3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHkgcC5zdGF0XCIpXG4gICAgaHVtaWRpdHlTdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50Lmh1bWlkaXR5fSVgXG5cbiAgICBjb25zdCB3aW5kU3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIud2luZCBwLnN0YXRcIilcbiAgICB3aW5kU3RhdC50ZXh0Q29udGVudCA9IGAke2pzb24uY3VycmVudC53aW5kX3NwZWVkfSBtL3NgXG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBzdGF0cy5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2UgcC5zdGF0XCIpXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChqc29uLmN1cnJlbnQuZmVlbHNfbGlrZSl9wrBgXG5cbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uU3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIucHJlY2lwaXRhdGlvbiBwLnN0YXRcIilcblxuICAgIGlmIChqc29uLmN1cnJlbnQucmFpbikge1xuICAgICAgICBwcmVjaXBpdGF0aW9uU3RhdC50ZXh0Q29udGVudCA9IGAke2pzb24uY3VycmVudC5yYWluW1wiMWhcIl19IG1tL2hgXG4gICAgfVxuICAgIGVsc2UgaWYgKGpzb24uY3VycmVudC5zbm93KSB7XG4gICAgICAgIHByZWNpcGl0YXRpb25TdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50LnNub3dbXCIxaFwiXX0gbW0vaGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZWNpcGl0YXRpb25TdGF0LnRleHRDb250ZW50ID0gXCIwIG1tL2hcIlxuICAgIH1cblxuICAgIGNvbnN0IHByZXNzdXJlU3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIucHJlc3N1cmUgcC5zdGF0XCIpXG4gICAgcHJlc3N1cmVTdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50LnByZXNzdXJlfSBoUGFgXG5cbiAgICBjb25zdCB2aXNpYmlsaXR5U3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIudmlzaWJpbGl0eSBwLnN0YXRcIilcbiAgICBjb25zdCBrbVZpc2liaWxpdHkgPSBqc29uLmN1cnJlbnQudmlzaWJpbGl0eSAvIDEwMDBcbiAgICB2aXNpYmlsaXR5U3RhdC50ZXh0Q29udGVudCA9IGAke2ttVmlzaWJpbGl0eX0ga21gXG5cbiAgICBjb25zdCB1dlN0YXQgPSBzdGF0cy5xdWVyeVNlbGVjdG9yKFwiLnV2LWluZGV4IHAuc3RhdFwiKVxuICAgIHV2U3RhdC50ZXh0Q29udGVudCA9IGAke2pzb24uY3VycmVudC51dml9YFxufVxuXG5mdW5jdGlvbiBjcmVhdGVTa2VsZXRvbldlYXRoZXJDYXJkcygpIHsgXG4gICAgY29uc3Qgd2VhdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRzXCIpXG4gICAgd2VhdGhlckNhcmRzLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XG4gICAgICAgIGNvbnN0IHNrZWxldG9uQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHdlYXRoZXJDYXJkcy5hcHBlbmRDaGlsZChza2VsZXRvbkNvbnRlbnQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZHMoanNvbikge1xuICAgIGNvbnN0IGRhaWx5ID0ganNvbi5kYWlseVxuICAgIGNvbnN0IHdlYXRoZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkc1wiKVxuICAgIHdlYXRoZXJDYXJkcy5yZXBsYWNlQ2hpbGRyZW4oKVxuXG4gICAgZGFpbHkuZm9yRWFjaCgoZGF5SW5mbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IG5ldyBEYXRlKGRheUluZm8uZHQgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoXCJ1cy1lblwiLCB7XG4gICAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtdXG5cbiAgICAgICAgZGF5SW5mby53ZWF0aGVyLmZvckVhY2god2VhdGhlckluZm8gPT4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25zLnB1c2god2VhdGhlckluZm8uZGVzY3JpcHRpb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgaW1nQ29kZSA9IGRheUluZm8ud2VhdGhlclswXS5pY29uXG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWdDb2RlfUAyeC5wbmdgXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uU3RyaW5nID0gZGVzY3JpcHRpb25zLmpvaW4oXCI7IFwiKVxuICAgICAgICBkZXNjcmlwdGlvblN0cmluZyA9IGRlc2NyaXB0aW9uU3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb25TdHJpbmcuc2xpY2UoMSlcblxuICAgICAgICB3ZWF0aGVyQ2FyZHMuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwid2VhdGhlci1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4td2VhdGhlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtkYXlOYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5IOiA8c3BhbiBjbGFzcz1cInRlbXBcIj4ke01hdGgucm91bmQoZGF5SW5mby50ZW1wLm1heCl9JmRlZzs8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TDogPHNwYW4gY2xhc3M9XCJ0ZW1wXCI+JHtNYXRoLnJvdW5kKGRheUluZm8udGVtcC5taW4pfSZkZWc7PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNoYW5jZSBvZiBwcmVjaXBpdGF0aW9uOiA8c3BhbiBjbGFzcz1cInBvcFwiPiR7ZGF5SW5mby5wb3AgKiAxMDB9JTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb25TdHJpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1nU3JjfT5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYFxuICAgIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9