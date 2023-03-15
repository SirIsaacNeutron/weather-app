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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Quicksand', sans-serif;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    background-color: hsl(0, 0%, 89%);\n}\n\nbody h1 {\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n\n    font-size: 3rem;\n    \n    font-family: 'Nixie One', cursive;\n}\n\nmain {\n    margin-bottom: 15px;\n}\n\nh3 {\n    font-weight: 400;\n}\n\n.weather-form {\n    /* box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2); */\n    border-radius: 5px;\n\n    /* background-color: hsl(0, 0%, 97%); */\n\n    padding: 10px 20px;\n}\n\n.weather-form input {\n    border-radius: 5px;\n    padding: 10px;\n\n    outline: none;\n    border: 1px solid black;\n\n    font-size: 1.5rem;\n}\n\n.error-msg {\n    display: none;\n    color: hsl(0, 100%, 42%);\n\n    margin-top: 10px;\n}\n\n.error-msg.active {\n    display: block;\n}\n\n.temp-units {\n    width: 100%;\n\n    padding: 10px;\n\n    font-size: 1rem;\n\n    margin-top: 10px;\n}\n\nspan.current-unit {\n    font-weight: bold;\n}\n\n.hourly-weather {\n    display: flex;\n    gap: 20px;\n\n    overflow: auto;\n    min-height: 220px;\n\n    width: 100%;\n\n    margin-bottom: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.hourly-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    width: 120px;\n\n    flex: 1;\n}\n\n.pop {\n    /* color: rgb(78, 181, 255); */\n    color: #026cde;\n}\n\n.weather-stats {\n    min-width: 100%;\n    background-color: hsl(0, 0%, 79%);\n    \n    padding: 10px 20px;\n}\n\n.stats-grid {\n    margin-top: 20px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 20px;\n\n    padding-bottom: 20px;\n}\n\n.stats-grid > div {\n    text-align: center;\n}\n\n.stats-grid abbr {\n    cursor: help;\n}\n\n.weather-cards {\n    display: grid;\n\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n\n    padding: 20px;\n}\n\n.weather-card {\n    background-color: white;\n    padding: 10px;\n\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2);\n\n    display: flex;\n}\n\n.weather-card h2 {\n    font-weight: 400;\n}\n\n.weather-card img {\n    margin-left: auto;\n\n    height: 100px;\n    width: 100px;\n}\n\n.skeleton {\n    opacity: .7;\n    animation: skeleton-loading 1s linear infinite alternate;\n}\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: hsl(200, 20%, 70%);\n    }\n\n    100% {\n        background-color: hsl(200, 20%, 95%);\n    }\n}\n\n.skeleton-text {\n    width: 100%;\n    height: .5rem;\n    margin-bottom: 10px;\n    padding: 10px 100px 10px 10px;\n\n    border-radius: 5px;\n}\n\n@media screen and (max-width: 500px) {\n    .stats-grid {\n        grid-template-columns: repeat(3, minmax(100px, 1fr));\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,oCAAoC;AACxC;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;;IAEnB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB,eAAe;;IAEf,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kDAAkD;IAClD,kBAAkB;;IAElB,uCAAuC;;IAEvC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;;IAEb,aAAa;IACb,uBAAuB;;IAEvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,wBAAwB;;IAExB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;;IAEX,aAAa;;IAEb,eAAe;;IAEf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;;IAET,cAAc;IACd,iBAAiB;;IAEjB,WAAW;;IAEX,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;IAElB,YAAY;;IAEZ,OAAO;AACX;;AAEA;IACI,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iCAAiC;;IAEjC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;;IAEhB,WAAW;;IAEX,aAAa;IACb,qCAAqC;;IAErC,SAAS;;IAET,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;;IAEb,WAAW;IACX,2DAA2D;IAC3D,SAAS;;IAET,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;;IAEb,kBAAkB;IAClB,4CAA4C;;IAE5C,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,wDAAwD;AAC5D;;AAEA;IACI;QACI,oCAAoC;IACxC;;IAEA;QACI,oCAAoC;IACxC;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,kBAAkB;AACtB;;AAEA;IACI;QACI,oDAAoD;IACxD;AACJ","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Quicksand', sans-serif;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    background-color: hsl(0, 0%, 89%);\n}\n\nbody h1 {\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n\n    font-size: 3rem;\n    \n    font-family: 'Nixie One', cursive;\n}\n\nmain {\n    margin-bottom: 15px;\n}\n\nh3 {\n    font-weight: 400;\n}\n\n.weather-form {\n    /* box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2); */\n    border-radius: 5px;\n\n    /* background-color: hsl(0, 0%, 97%); */\n\n    padding: 10px 20px;\n}\n\n.weather-form input {\n    border-radius: 5px;\n    padding: 10px;\n\n    outline: none;\n    border: 1px solid black;\n\n    font-size: 1.5rem;\n}\n\n.error-msg {\n    display: none;\n    color: hsl(0, 100%, 42%);\n\n    margin-top: 10px;\n}\n\n.error-msg.active {\n    display: block;\n}\n\n.temp-units {\n    width: 100%;\n\n    padding: 10px;\n\n    font-size: 1rem;\n\n    margin-top: 10px;\n}\n\nspan.current-unit {\n    font-weight: bold;\n}\n\n.hourly-weather {\n    display: flex;\n    gap: 20px;\n\n    overflow: auto;\n    min-height: 220px;\n\n    width: 100%;\n\n    margin-bottom: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.hourly-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    width: 120px;\n\n    flex: 1;\n}\n\n.pop {\n    /* color: rgb(78, 181, 255); */\n    color: #026cde;\n}\n\n.weather-stats {\n    min-width: 100%;\n    background-color: hsl(0, 0%, 79%);\n    \n    padding: 10px 20px;\n}\n\n.stats-grid {\n    margin-top: 20px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 20px;\n\n    padding-bottom: 20px;\n}\n\n.stats-grid > div {\n    text-align: center;\n}\n\n.stats-grid abbr {\n    cursor: help;\n}\n\n.weather-cards {\n    display: grid;\n\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n\n    padding: 20px;\n}\n\n.weather-card {\n    background-color: white;\n    padding: 10px;\n\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2);\n\n    display: flex;\n}\n\n.weather-card h2 {\n    font-weight: 400;\n}\n\n.weather-card img {\n    margin-left: auto;\n\n    height: 100px;\n    width: 100px;\n}\n\n.skeleton {\n    opacity: .7;\n    animation: skeleton-loading 1s linear infinite alternate;\n}\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: hsl(200, 20%, 70%);\n    }\n\n    100% {\n        background-color: hsl(200, 20%, 95%);\n    }\n}\n\n.skeleton-text {\n    width: 100%;\n    height: .5rem;\n    margin-bottom: 10px;\n    padding: 10px 100px 10px 10px;\n\n    border-radius: 5px;\n}\n\n@media screen and (max-width: 500px) {\n    .stats-grid {\n        grid-template-columns: repeat(3, minmax(100px, 1fr));\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHdEQUF3RCxjQUFjLG9CQUFvQjs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHdCQUF3Qjs7QUFFdEQ7QUFDQSxrQ0FBa0Msc0JBQXNCOztBQUV4RDtBQUNBLDhCQUE4Qix5QkFBeUI7O0FBRXZEO0FBQ0EsK0JBQStCLG9DQUFvQzs7QUFFbkU7O0FBRUE7QUFDQSwyQ0FBMkMseUJBQXlCO0FBQ3BFO0FBQ0E7QUFDQSwyQ0FBMkMseUJBQXlCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHVCQUF1Qjs7QUFFekQ7QUFDQTtBQUNBLG9DQUFvQyxjQUFjOztBQUVsRDtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDREQUE0RCxRQUFROztBQUVwRSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQSxtREFBbUQsNkJBQTZCLEtBQUs7QUFDckYsbURBQW1ELDZCQUE2QixLQUFLO0FBQ3JGO0FBQ0Esb0VBQW9FLGtCQUFrQjtBQUN0Rix5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4OSUpO1xcbn1cXG5cXG5ib2R5IGgxIHtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ05peGllIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi53ZWF0aGVyLWZvcm0ge1xcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiKDAsIDAsIDAsIC4yKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7ICovXFxuXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLndlYXRoZXItZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IGhzbCgwLCAxMDAlLCA0MiUpO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGVtcC11bml0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbnNwYW4uY3VycmVudC11bml0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob3VybHktd2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob3VybHktY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEyMHB4O1xcblxcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgLyogY29sb3I6IHJnYig3OCwgMTgxLCAyNTUpOyAqL1xcbiAgICBjb2xvcjogIzAyNmNkZTtcXG59XFxuXFxuLndlYXRoZXItc3RhdHMge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNzklKTtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLnN0YXRzLWdyaWQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG5cXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnN0YXRzLWdyaWQgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0cy1ncmlkIGFiYnIge1xcbiAgICBjdXJzb3I6IGhlbHA7XFxufVxcblxcbi53ZWF0aGVyLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiKDAsIDAsIDAsIC4yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgaW1nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnNrZWxldG9uIHtcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGFuaW1hdGlvbjogc2tlbGV0b24tbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwLCAyMCUsIDcwJSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwLCAyMCUsIDk1JSk7XFxuICAgIH1cXG59XFxuXFxuLnNrZWxldG9uLXRleHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMDBweCAxMHB4IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnN0YXRzLWdyaWQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLG1CQUFtQjs7SUFFbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsZUFBZTs7SUFFZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsa0JBQWtCOztJQUVsQix1Q0FBdUM7O0lBRXZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7O0lBRXhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7O0lBRWIsZUFBZTs7SUFFZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxjQUFjO0lBQ2QsaUJBQWlCOztJQUVqQixXQUFXOztJQUVYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLFlBQVk7O0lBRVosT0FBTztBQUNYOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDOztJQUVqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHFDQUFxQzs7SUFFckMsU0FBUzs7SUFFVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixXQUFXO0lBQ1gsMkRBQTJEO0lBQzNELFNBQVM7O0lBRVQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhOztJQUViLGtCQUFrQjtJQUNsQiw0Q0FBNEM7O0lBRTVDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksb0RBQW9EO0lBQ3hEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg5JSk7XFxufVxcblxcbmJvZHkgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnTml4aWUgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLndlYXRoZXItZm9ybSB7XFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2IoMCwgMCwgMCwgLjIpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTclKTsgKi9cXG5cXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogaHNsKDAsIDEwMCUsIDQyJSk7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5lcnJvci1tc2cuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50ZW1wLXVuaXRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuc3Bhbi5jdXJyZW50LXVuaXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjIwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvdXJseS1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTIwcHg7XFxuXFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wb3Age1xcbiAgICAvKiBjb2xvcjogcmdiKDc4LCAxODEsIDI1NSk7ICovXFxuICAgIGNvbG9yOiAjMDI2Y2RlO1xcbn1cXG5cXG4ud2VhdGhlci1zdGF0cyB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA3OSUpO1xcbiAgICBcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcblxcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN0YXRzLWdyaWQgYWJiciB7XFxuICAgIGN1cnNvcjogaGVscDtcXG59XFxuXFxuLndlYXRoZXItY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2IoMCwgMCwgMCwgLjIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIGgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCBpbWcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG5cXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uc2tlbGV0b24ge1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2tlbGV0b24tbG9hZGluZyB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDIwJSwgNzAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDIwJSwgOTUlKTtcXG4gICAgfVxcbn1cXG5cXG4uc2tlbGV0b24tdGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDEwcHggMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAuc3RhdHMtZ3JpZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuY29uc3Qgd2VhdGhlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWZvcm0gaW5wdXRcIilcblxuY29uc3Qgd2VhdGhlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZm9ybVwiKVxuXG5jb25zdCB1bml0c0J1dHRvbiA9IHdlYXRoZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC11bml0c1wiKVxuXG51bml0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvblNwYW5zID0gdW5pdHNCdXR0b24ucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcblxuICAgIGxldCBjdXJyZW50VW5pdFxuICAgIC8vIElmIHRoZSBmaXJzdCBzcGFuIChDZWxzaXVzKSBpcyB0aGUgY3VycmVudCB1bml0LCBzd2l0Y2ggdG8gRmFocmVuaGVpdFxuICAgIGlmIChidXR0b25TcGFuc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJyZW50LXVuaXRcIikpIHtcbiAgICAgICAgYnV0dG9uU3BhbnNbMF0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtdW5pdFwiKVxuICAgICAgICBidXR0b25TcGFuc1sxXS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC11bml0XCIpXG5cbiAgICAgICAgY3VycmVudFVuaXQgPSBcIkZcIlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYnV0dG9uU3BhbnNbMF0uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdW5pdFwiKVxuICAgICAgICBidXR0b25TcGFuc1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC11bml0XCIpXG5cbiAgICAgICAgY3VycmVudFVuaXQgPSBcIkNcIlxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRlbXBlcmF0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcFwiKVxuXG4gICAgYWxsVGVtcGVyYXR1cmVzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IGRlZ3JlZVN0cmluZyA9IHAudGV4dENvbnRlbnQuc3BsaXQoXCLCsFwiKVswXVxuICAgICAgICBjb25zdCBkZWdyZWVzID0gcGFyc2VJbnQoZGVncmVlU3RyaW5nKVxuICAgICAgICBpZiAoY3VycmVudFVuaXQgPT09IFwiRlwiKSB7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1c1RvRmFocmVuaGVpdChkZWdyZWVzKX3CsGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0VG9DZWxzaXVzKGRlZ3JlZXMpfcKwYFxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIHJlc2V0VW5pdHNCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uU3BhbnMgPSB1bml0c0J1dHRvbi5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuICAgIGJ1dHRvblNwYW5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXVuaXRcIilcbiAgICBidXR0b25TcGFuc1sxXS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC11bml0XCIpXG5cbiAgICB1bml0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG59XG5cbmZ1bmN0aW9uIGZhaHJlbmhlaXRUb0NlbHNpdXMoZGVncmVlc0ZhaHJlbmhlaXQpIHtcbiAgICBjb25zdCBjZWxzaXVzID0gKChkZWdyZWVzRmFocmVuaGVpdCAtIDMyKSAqIDUgKSAvIDlcbiAgICByZXR1cm4gTWF0aC5yb3VuZChjZWxzaXVzKVxufVxuXG5mdW5jdGlvbiBjZWxzaXVzVG9GYWhyZW5oZWl0KGRlZ3JlZXNDZWxzaXVzKSB7XG4gICAgY29uc3QgZmFocmVuaGVpdCA9IChkZWdyZWVzQ2Vsc2l1cyAqICg5IC8gNSkpICsgMzJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmYWhyZW5oZWl0KVxufVxuXG53ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxufSlcblxud2VhdGhlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHJlc2V0VW5pdHNCdXR0b24oKVxuXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gd2VhdGhlckZvcm0ucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tc2dcIilcblxuICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlXG5cbiAgICAgICAgY3JlYXRlU2tlbGV0b25Ib3VybHlDYXJkcygpXG4gICAgICAgIGNyZWF0ZVNrZWxldG9uV2VhdGhlckNhcmRzKClcblxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD01MTUwODU1OWE1NGE3MDkyOGFiM2FlZDIzZDNhMGI2M2AsIHtcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanNvbilcblxuICAgICAgICAgICAgICAgIGlmIChqc29uLmNvZCA9PT0gXCI0MDRcIikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IGAke2NpdHlOYW1lfSBub3QgZm91bmRgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICAgICAgICAgICAgICAgICAgICB1bml0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHNrZWxldG9uIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZHMnKVxuICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyQ2FyZHMucmVwbGFjZUNoaWxkcmVuKClcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VybHlDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIilcbiAgICAgICAgICAgICAgICAgICAgaG91cmx5Q2FyZHMucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAgICAgaG91cmx5Q2FyZHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBqc29uLmNvb3JkLmxhdFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBqc29uLmNvb3JkLmxvblxuXG4gICAgICAgICAgICAgICAgICAgIGdldFdlYXRoZXJJbmZvKGxhdGl0dWRlLCBsb25naXR1ZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8obGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9NTE1MDg1NTlhNTRhNzA5MjhhYjNhZWQyM2QzYTBiNjMmdW5pdHM9aW1wZXJpYWxgLFxuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG5cbiAgICAgICAgICAgIGNyZWF0ZUhvdXJseUNhcmRzKGpzb24pXG4gICAgICAgICAgICBjcmVhdGVXZWF0aGVyU3RhdHMoanNvbilcbiAgICAgICAgICAgIGNyZWF0ZVdlYXRoZXJDYXJkcyhqc29uKVxuXG4gICAgICAgICAgICB1bml0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUNhcmRzKGpzb24pIHtcbiAgICBjb25zdCBob3VybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHktd2VhdGhlclwiKVxuICAgIGhvdXJseURpc3BsYXkucmVwbGFjZUNoaWxkcmVuKClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7ICsraSkge1xuICAgICAgICBjb25zdCBob3VybHlJbmZvID0ganNvbi5ob3VybHlbaV1cblxuICAgICAgICBsZXQgaG91clN0cmluZyA9IG5ldyBEYXRlKGhvdXJseUluZm8uZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJ1cy1FTlwiKVxuICAgICAgICBsZXQgYW1PclBNID0gaG91clN0cmluZy5zcGxpdChcIiBcIilbMV1cbiAgICAgICAgbGV0IGhvdXJUaW1lID0gaG91clN0cmluZy5zcGxpdChcIjpcIilbMF1cbiAgICAgICAgaG91clN0cmluZyA9IGAke2hvdXJUaW1lfSAke2FtT3JQTX1gXG5cbiAgICAgICAgY29uc3QgaW1nQ29kZSA9IGhvdXJseUluZm8ud2VhdGhlclswXS5pY29uXG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWdDb2RlfUAyeC5wbmdgXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uU3RyaW5nID0gaG91cmx5SW5mby53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uU3RyaW5nID0gZGVzY3JpcHRpb25TdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkZXNjcmlwdGlvblN0cmluZy5zbGljZSgxKVxuXG4gICAgICAgIGhvdXJseURpc3BsYXkuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJob3VybHktY2FyZFwiPlxuICAgICAgICAgICAgPGgzPiR7aG91clN0cmluZ308L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtpbWdTcmN9PlxuXG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcFwiPiR7aG91cmx5SW5mby5wb3AgKiAxMDB9JTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcFwiPiR7TWF0aC5yb3VuZChob3VybHlJbmZvLmZlZWxzX2xpa2UpfSZkZWc7PC9wPlxuICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvblN0cmluZ308L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2tlbGV0b25Ib3VybHlDYXJkcygpIHtcbiAgICBjb25zdCBob3VybHlDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIilcbiAgICBob3VybHlDYXJkcy5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGhvdXJseUNhcmRzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICBob3VybHlDYXJkcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImhvdXJseS1jYXJkXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJza2VsZXRvbiBza2VsZXRvbi10ZXh0XCI+PC9oMz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJza2VsZXRvblwiIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxuXG4gICAgICAgICAgICA8cCBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlclN0YXRzKGpzb24pIHtcbiAgICBjb25zdCBzdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHMtZ3JpZFwiKVxuICAgIFxuICAgIC8vIENsZWFyIG9sZCBzdGF0c1xuICAgIGZvciAoY29uc3QgY2hpbGREaXYgb2Ygc3RhdHMuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3Qgc3RhdEluZm8gPSBjaGlsZERpdi5xdWVyeVNlbGVjdG9yKFwicC5zdGF0XCIpXG4gICAgICAgIHN0YXRJbmZvLnRleHRDb250ZW50ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHN1bnJpc2VTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlIHAuc3RhdFwiKVxuXG4gICAgY29uc3QgdGltZVN0cmluZyA9IG5ldyBEYXRlKGpzb24uY3VycmVudC5zdW5yaXNlICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIilcbiAgICBzdW5yaXNlU3RhdC50ZXh0Q29udGVudCA9IHRpbWVTdHJpbmdcblxuICAgIGNvbnN0IHN1bnNldFN0YXQgPSBzdGF0cy5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldCBwLnN0YXRcIilcbiAgICBzdW5zZXRTdGF0LnRleHRDb250ZW50ID0gbmV3IERhdGUoanNvbi5jdXJyZW50LnN1bnNldCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpXG5cbiAgICBjb25zdCByYWluU3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIucmFpbi1jaGFuY2UgcC5zdGF0XCIpXG4gICAgcmFpblN0YXQudGV4dENvbnRlbnQgPSBgJHtqc29uLmRhaWx5WzBdLnBvcCAqIDEwMH0lYFxuXG4gICAgY29uc3QgaHVtaWRpdHlTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eSBwLnN0YXRcIilcbiAgICBodW1pZGl0eVN0YXQudGV4dENvbnRlbnQgPSBgJHtqc29uLmN1cnJlbnQuaHVtaWRpdHl9JWBcblxuICAgIGNvbnN0IHdpbmRTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi53aW5kIHAuc3RhdFwiKVxuICAgIHdpbmRTdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50LndpbmRfc3BlZWR9IG0vc2BcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZSBwLnN0YXRcIilcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGpzb24uY3VycmVudC5mZWVsc19saWtlKX3CsGBcblxuICAgIGNvbnN0IHByZWNpcGl0YXRpb25TdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi5wcmVjaXBpdGF0aW9uIHAuc3RhdFwiKVxuXG4gICAgaWYgKGpzb24uY3VycmVudC5yYWluKSB7XG4gICAgICAgIHByZWNpcGl0YXRpb25TdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50LnJhaW5bXCIxaFwiXX0gbW0vaGBcbiAgICB9XG4gICAgZWxzZSBpZiAoanNvbi5jdXJyZW50LnNub3cpIHtcbiAgICAgICAgcHJlY2lwaXRhdGlvblN0YXQudGV4dENvbnRlbnQgPSBgJHtqc29uLmN1cnJlbnQuc25vd1tcIjFoXCJdfSBtbS9oYFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlY2lwaXRhdGlvblN0YXQudGV4dENvbnRlbnQgPSBcIjAgbW0vaFwiXG4gICAgfVxuXG4gICAgY29uc3QgcHJlc3N1cmVTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZSBwLnN0YXRcIilcbiAgICBwcmVzc3VyZVN0YXQudGV4dENvbnRlbnQgPSBgJHtqc29uLmN1cnJlbnQucHJlc3N1cmV9IGhQYWBcblxuICAgIGNvbnN0IHZpc2liaWxpdHlTdGF0ID0gc3RhdHMucXVlcnlTZWxlY3RvcihcIi52aXNpYmlsaXR5IHAuc3RhdFwiKVxuICAgIGNvbnN0IGttVmlzaWJpbGl0eSA9IGpzb24uY3VycmVudC52aXNpYmlsaXR5IC8gMTAwMFxuICAgIHZpc2liaWxpdHlTdGF0LnRleHRDb250ZW50ID0gYCR7a21WaXNpYmlsaXR5fSBrbWBcblxuICAgIGNvbnN0IHV2U3RhdCA9IHN0YXRzLnF1ZXJ5U2VsZWN0b3IoXCIudXYtaW5kZXggcC5zdGF0XCIpXG4gICAgdXZTdGF0LnRleHRDb250ZW50ID0gYCR7anNvbi5jdXJyZW50LnV2aX1gXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNrZWxldG9uV2VhdGhlckNhcmRzKCkgeyBcbiAgICBjb25zdCB3ZWF0aGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZHNcIilcbiAgICB3ZWF0aGVyQ2FyZHMucmVwbGFjZUNoaWxkcmVuKClcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgY29uc3Qgc2tlbGV0b25Db250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgd2VhdGhlckNhcmRzLmFwcGVuZENoaWxkKHNrZWxldG9uQ29udGVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkcyhqc29uKSB7XG4gICAgY29uc3QgZGFpbHkgPSBqc29uLmRhaWx5XG4gICAgY29uc3Qgd2VhdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRzXCIpXG4gICAgd2VhdGhlckNhcmRzLnJlcGxhY2VDaGlsZHJlbigpXG5cbiAgICBkYWlseS5mb3JFYWNoKChkYXlJbmZvLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gbmV3IERhdGUoZGF5SW5mby5kdCAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZyhcInVzLWVuXCIsIHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25zID0gW11cblxuICAgICAgICBkYXlJbmZvLndlYXRoZXIuZm9yRWFjaCh3ZWF0aGVySW5mbyA9PiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnMucHVzaCh3ZWF0aGVySW5mby5kZXNjcmlwdGlvbilcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBpbWdDb2RlID0gZGF5SW5mby53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgY29uc3QgaW1nU3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ltZ0NvZGV9QDJ4LnBuZ2BcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25TdHJpbmcgPSBkZXNjcmlwdGlvbnMuam9pbihcIjsgXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uU3RyaW5nID0gZGVzY3JpcHRpb25TdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkZXNjcmlwdGlvblN0cmluZy5zbGljZSgxKVxuXG4gICAgICAgIHdlYXRoZXJDYXJkcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ3ZWF0aGVyLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi13ZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke2RheU5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkg6IDxzcGFuIGNsYXNzPVwidGVtcFwiPiR7TWF0aC5yb3VuZChkYXlJbmZvLnRlbXAubWF4KX0mZGVnOzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5MOiA8c3BhbiBjbGFzcz1cInRlbXBcIj4ke01hdGgucm91bmQoZGF5SW5mby50ZW1wLm1pbil9JmRlZzs8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmNlIG9mIHByZWNpcGl0YXRpb246IDxzcGFuIGNsYXNzPVwicG9wXCI+JHtkYXlJbmZvLnBvcCAqIDEwMH0lPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvblN0cmluZ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9JHtpbWdTcmN9PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICBgXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=