/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/inbox.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/inbox.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/imgs/plus-circle.png */ "./src/assets/imgs/plus-circle.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/imgs/plus.png */ "./src/assets/imgs/plus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/imgs/todo-unchecked.png */ "./src/assets/imgs/todo-unchecked.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/imgs/todo-checked.png */ "./src/assets/imgs/todo-checked.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/imgs/inbox.png */ "./src/assets/imgs/inbox.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  background-color: var(--stone-200);\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#add-task-menu-container{\n  height: 100px;\n  border: #d6d3d1 solid 1px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  height: fit-content;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  display: flex;\n  flex: 1;\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/inbox.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\nhtml, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  background-color: var(--stone-200);\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(/src/assets/imgs/plus-circle.png);\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(/src/assets/imgs/plus.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#add-task-menu-container{\n  height: 100px;\n  border: #d6d3d1 solid 1px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  height: fit-content;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  display: flex;\n  flex: 1;\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(/src/assets/imgs/todo-unchecked.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(/src/assets/imgs/todo-checked.png);\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(/src/assets/imgs/inbox.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/inbox.css":
/*!******************************!*\
  !*** ./src/styles/inbox.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_inbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./inbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/inbox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_inbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_inbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_inbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_inbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/functions/firstLoad.js":
/*!************************************!*\
  !*** ./src/functions/firstLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/inbox */ "./src/pages/inbox.js");
/* harmony import */ var _pages_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/sidebar */ "./src/pages/sidebar.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo */ "./src/todo.js");





const firstLoad = () => {
  const content = document.querySelector('#content');
  const header = (0,_pages_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const sidebar = (0,_pages_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();

  content.appendChild(header);
  content.appendChild(sidebar);
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.storageFirstLoad)();
  (0,_pages_inbox__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_imgs_sidebar_hamburger_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/sidebar-hamburger-menu-icon.png */ "./src/assets/imgs/sidebar-hamburger-menu-icon.png");


const headerDiv = () => {
  const headerContainer = document.createElement('div');
  headerContainer.id = 'header-container';

  const headerContent = document.createElement('div');
  headerContent.id = 'header-content';

  const sidebarHamburgerMenu = document.createElement('img');
  sidebarHamburgerMenu.src = _assets_imgs_sidebar_hamburger_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__;
  sidebarHamburgerMenu.id = 'sidebar-hamburger-menu';
  sidebarHamburgerMenu.width = '28';
  sidebarHamburgerMenu.height = '28';

  headerContent.appendChild(sidebarHamburgerMenu);

  headerContainer.appendChild(headerContent);

  return headerContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerDiv);

/***/ }),

/***/ "./src/pages/inbox.js":
/*!****************************!*\
  !*** ./src/pages/inbox.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_imgs_due_date_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/due-date.png */ "./src/assets/imgs/due-date.png");
/* harmony import */ var _assets_imgs_inbox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/inbox.png */ "./src/assets/imgs/inbox.png");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ "./src/todo.js");






const inbox = () => {
  const content = document.querySelector('#content');

  const viewContainer = document.createElement('div');
  viewContainer.id = `view-container`;

  const viewContent = document.createElement('div');
  viewContent.id = 'view-content';

  viewContainer.appendChild(viewContent);

  const viewHeader = (() => {
    let viewHeader = '';
    if ((0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadLocalStorage)().length === 1) {
      viewHeader = 'Inbox';
    }
    const viewHeaderContainer = document.createElement('div');
    viewHeaderContainer.id = 'view-header-container';
  
    viewContent.appendChild(viewHeaderContainer);
  
    const viewHeaderContent = document.createElement('div');
    viewHeaderContent.id = 'view-header-content';
    viewHeaderContent.innerHTML = `
    <h1>${viewHeader}</h1>
    `;
  
    viewHeaderContainer.appendChild(viewHeaderContent);
  })();

  const viewList = (() => {
    const viewListContainer = document.createElement('div');
    viewListContainer.id = 'view-list-container';

    viewContent.appendChild(viewListContainer);

    const viewListContent = document.createElement('div');
    viewListContent.id = 'view-list-content';

    const viewList = document.createElement('ul');
    viewList.id = 'view-list';

    const todoListItems = (() => {

      const renderTodoListItems = () => {

        const inbox = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadLocalStorage)()[0];

        for (let i=0;i<inbox.todoList.length;i++) {
          const todoListItem = document.createElement('li');
          todoListItem.classList.value = 'todo-list-item';
          todoListItem.setAttribute('data-list-id', `${i}`);
      
          const todoListItemCheckbox = document.createElement('div');
          todoListItemCheckbox.classList.add('checkbox');
          
          if (inbox.todoList[i].priority === 3) {
            todoListItemCheckbox.classList.add('priority-3');
          }
          if (inbox.todoList[i].priority === 2) {
            todoListItemCheckbox.classList.add('priority-2');
          }
          if (inbox.todoList[i].priority === 1) {
            todoListItemCheckbox.classList.add('priority-1');
          } 

          todoListItem.appendChild(todoListItemCheckbox);

          const todoListItemContent = document.createElement('div');
          todoListItemContent.classList.add('list-item-content');

      
          const todoListItemTitle = document.createElement('p');
          todoListItemTitle.textContent = `${inbox.todoList[i].title}`;
    
          todoListItemContent.appendChild(todoListItemTitle);

          const todoListItemDescription = document.createElement('p');
          todoListItemDescription.textContent = `${inbox.todoList[i].description}`;
          todoListItemDescription.classList.add('list-item-description');

          todoListItemContent.appendChild(todoListItemDescription);

          todoListItem.appendChild(todoListItemContent);
      
          viewList.appendChild(todoListItem);
  
          todoListItemCheckbox.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.removeTask);
        }
      };
      renderTodoListItems();

      return {renderTodoListItems};

    })();

    
    viewListContent.appendChild(viewList);

    viewListContainer.appendChild(viewListContent);

    const getAddTaskContent = (() => {
      const addTaskContent = document.createElement('div');
      addTaskContent.id = 'add-task-content';
      
      const addTaskImage = document.createElement('div');
      addTaskImage.id = 'add-task-image';
    
      addTaskContent.appendChild(addTaskImage);
    
      const addTaskText = document.createElement('p');
      addTaskText.id = 'add-task-text';
      addTaskText.textContent = 'Add task';
    
      addTaskContent.appendChild(addTaskText);

      viewListContainer.appendChild(addTaskContent);
      
      return addTaskContent;
    })();

    return {getAddTaskContent, viewListContainer, todoListItems};
  })();

  
  const openAddTaskMenu = () => {
    viewList.getAddTaskContent.remove();

    const addTaskMenu = (() => {
      const container = document.createElement('div');
      container.id = 'add-task-menu-container';

      const content = document.createElement('div');
      content.id = 'add-task-menu-content';

      const form = document.createElement('form');
      form.id = 'add-task-menu-form';

      content.appendChild(form);

      const formTextArea = (() => {
        const formTextAreaContent = document.createElement('div');
        formTextAreaContent.id = 'form-textarea-content';
        
        form.appendChild(formTextAreaContent);

        const taskNameLabel = document.createElement('label');
        taskNameLabel.id = 'task-name';

        formTextAreaContent.appendChild(taskNameLabel);

        const taskNameInput = document.createElement('input');
        taskNameInput.setAttribute('type', 'textarea');
        taskNameInput.setAttribute('name', 'task-name');
        taskNameInput.setAttribute('placeholder', 'Task name');
        taskNameInput.setAttribute('maxlength', '500');
        taskNameInput.setAttribute('minlength', '1');
        taskNameInput.id = 'task-name-input';

        
        taskNameLabel.appendChild(taskNameInput);

        const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.id = 'task-description';

        formTextAreaContent.appendChild(taskDescriptionLabel);

        const taskDescriptionInput = document.createElement('input');
        taskDescriptionInput.setAttribute('type', 'textarea');
        taskDescriptionInput.setAttribute('name', 'task-description');
        taskDescriptionInput.setAttribute('placeholder', 'Description');
        taskDescriptionInput.setAttribute('maxlength', '500');
        taskDescriptionInput.setAttribute('minlength', '1');
        taskDescriptionInput.id = 'task-description-input';

        taskDescriptionLabel.appendChild(taskDescriptionInput);
      })();

      const formBtns = (() => {
        const formBtnContent = document.createElement('div');
        formBtnContent.id = 'form-btn-content';

        form.appendChild(formBtnContent);

        const leftSideBtns = (() => {
          const leftContent = document.createElement('div');
          leftContent.id = 'form-btn-content-left-side';

          formBtnContent.appendChild(leftContent);

          const taskDueDateLabel = document.createElement('label');
          taskDueDateLabel.classList.add('left-side-btn');

          const taskDueDateImg = new Image();
          taskDueDateImg.src = _assets_imgs_due_date_png__WEBPACK_IMPORTED_MODULE_0__;
          taskDueDateImg.width = '20';
          taskDueDateImg.height = '20';

          taskDueDateLabel.appendChild(taskDueDateImg);

          const taskDueDateText = document.createElement('p');
          taskDueDateText.id = 'task-due-date-text';
          taskDueDateText.textContent = 'Due date';

          taskDueDateLabel.appendChild(taskDueDateText);

          leftContent.appendChild(taskDueDateLabel);

          const taskProjectLabel = document.createElement('label');
          taskProjectLabel.classList.add('left-side-btn');

          const taskProjectImg = new Image();
          taskProjectImg.src = _assets_imgs_inbox_png__WEBPACK_IMPORTED_MODULE_1__;
          taskProjectImg.width = '20';
          taskProjectImg.height = '20';

          taskProjectLabel.appendChild(taskProjectImg);

          const taskProjectText = document.createElement('p');
          taskProjectText.id = 'task-project-text';
          taskProjectText.textContent = 'Inbox';
          // 'Inbox' will be replaced with current project in view

          taskProjectLabel.appendChild(taskProjectText);

          leftContent.appendChild(taskProjectLabel);
        })();

        const rightSideBtns = (() => {
          const rightContent = document.createElement('div');
          rightContent.id = 'form-btn-content-right-side';

          formBtnContent.appendChild(rightContent);

          const priorityLabel = document.createElement('label');
          
        })();

      })();

      

      container.appendChild(content);
      viewContent.appendChild(container);
    })();

    const addTaskActionButtons = (() => {
      const container = document.createElement('div');
      container.id = 'add-task-action-buttons-container';

      const content = document.createElement('div');
      content.id = 'add-task-action-buttons-content';

      container.appendChild(content);

      const cancelBtn = (() => {
        const cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';

        content.appendChild(cancelBtn);

        cancelBtn.addEventListener('click', (e) => {
          container.remove();
          document.querySelector('#add-task-menu-container').remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        });
      })();

      const addTaskBtn = (() => {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.id = 'add-task-btn';
        addTaskBtn.textContent = 'Add task';
  
        content.appendChild(addTaskBtn);
  
        addTaskBtn.addEventListener('click', (e) => {
          if ((0,_todo__WEBPACK_IMPORTED_MODULE_2__.addTask)() !== true) return;
          container.remove();
          document.querySelector('#add-task-menu-container').remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
          const getViewList = document.querySelector('#view-list');
          while (getViewList.children.length > 0) {
            getViewList.children[0].remove();
          }
          viewList.todoListItems.renderTodoListItems();
        });
      })();

      viewContent.appendChild(container);
    })();
  }

  viewList.getAddTaskContent.addEventListener('click', openAddTaskMenu);

  content.appendChild(viewContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inbox);

/***/ }),

/***/ "./src/pages/sidebar.js":
/*!******************************!*\
  !*** ./src/pages/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sidebarDiv = () => {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.id = 'sidebar-container';

  const sidebarContent = document.createElement('div');
  sidebarContent.id = 'sidebar-content';
  
  const topMenu = (() => {
    const topMenu = document.createElement('ul');
    topMenu.id = 'top-menu';

    const inboxLi = document.createElement('li');
    inboxLi.id = 'filter-inbox';
    inboxLi.classList.add('hover-stone-200');

    const inboxImage = document.createElement('div');
    inboxImage.classList.value = 'inbox-image';

    inboxLi.appendChild(inboxImage);

    const inboxTitle = document.createElement('p');
    inboxTitle.textContent = 'Inbox';

    inboxLi.appendChild(inboxTitle);

    topMenu.appendChild(inboxLi);

    sidebarContent.appendChild(topMenu);
  })();

  const bottomMenu = (() => {
    const bottomMenuContent = document.createElement('div');
    bottomMenuContent.id = 'bottom-menu-content';

    const bottomMenuHeader = document.createElement('p');
    bottomMenuHeader.classList.value = 'menu-header';
    bottomMenuHeader.textContent = 'Projects';

    bottomMenuContent.appendChild(bottomMenuHeader);

    const projectList = document.createElement('ul');
    projectList.id = 'project-list';

    for (let i=1;i<=3;i++) {
      const projectListItem = document.createElement('li');
      projectListItem.classList.value = 'project-list-item';
      projectListItem.textContent = `Example project ${i}`;
      projectListItem.classList.add('hover-stone-200');
  
      projectList.appendChild(projectListItem);
    }
    
    bottomMenuContent.appendChild(projectList);

    sidebarContent.appendChild(bottomMenuContent);
  })();

  sidebarContainer.appendChild(sidebarContent);

  return sidebarContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarDiv);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "storageFirstLoad": () => (/* binding */ storageFirstLoad)
/* harmony export */ });
const createProject = (title, description) => {
    const newProject = {
        title,
        description,
        todoList: [],
    }

    const getProject = () => {
        return newProject;
    }
    
    const getTodoList = () => {
        return newProject.todoList;
    }
    return {getProject, getTodoList};
}

const storageFirstLoad = () => {
    if (localStorage.length > 0) return;
    const inbox = createProject('inbox', 'the default');
    const projectList = loadLocalStorage();

    projectList.push(inbox.getProject());
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const loadLocalStorage = () => {
    if (localStorage.length === 0) {
        const projectList = [];
        localStorage.setItem('projectList', JSON.stringify(projectList));
        return projectList;
    }
    else {
        const projectList = JSON.parse(localStorage.getItem('projectList'));
        return projectList;
    }
}

const createTodo = (title, description = "", dueDate = "", priority = 4, project = loadLocalStorage()[0].title) => {
    const newTodo = {
        title,
        description,
        dueDate,
        priority,
        notes: "",
        project,
    }

    return newTodo;
}

const addTask = () => {
    const taskName = document.querySelector('#task-name-input').value;
    const taskDescription = document.querySelector('#task-description-input').value;

    if (taskName === "") {
        return;
    }

    const projectList = loadLocalStorage();
    const inbox = projectList[0];

    const newTodo = createTodo(taskName, taskDescription);
    inbox.todoList.push(newTodo);

    localStorage.setItem('projectList', JSON.stringify(projectList));

    return true;
}

const updateLocalStorage = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const removeTask = (e) => {
    const listId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();
    const inbox = projectList[0];

    inbox.todoList.splice(listId, 1);
    console.log(inbox.todoList);
    updateLocalStorage(projectList);

    e.target.parentElement.remove();
}








/***/ }),

/***/ "./src/assets/imgs/due-date.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/due-date.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a0bb16fecb3e799d706.png";

/***/ }),

/***/ "./src/assets/imgs/inbox.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/inbox.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ccb025cc6c2b4c6e041.png";

/***/ }),

/***/ "./src/assets/imgs/plus-circle.png":
/*!*****************************************!*\
  !*** ./src/assets/imgs/plus-circle.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bea8911dbc637f2e6b69.png";

/***/ }),

/***/ "./src/assets/imgs/plus.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/plus.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f9928d96cfcd79fb457.png";

/***/ }),

/***/ "./src/assets/imgs/sidebar-hamburger-menu-icon.png":
/*!*********************************************************!*\
  !*** ./src/assets/imgs/sidebar-hamburger-menu-icon.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ff58c74bd8563f7e59a.png";

/***/ }),

/***/ "./src/assets/imgs/todo-checked.png":
/*!******************************************!*\
  !*** ./src/assets/imgs/todo-checked.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f876ebc1956ac4f6a367.png";

/***/ }),

/***/ "./src/assets/imgs/todo-unchecked.png":
/*!********************************************!*\
  !*** ./src/assets/imgs/todo-unchecked.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c105356c3c5d9dc4b69.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_inbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/inbox.css */ "./src/styles/inbox.css");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");



(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQW9CLEdBQUcsU0FBUyx1RkFBdUYsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZ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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNrQjs7QUFFOUMsZ0VBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luYm94LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmJveC5jc3M/NmI5ZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZmlyc3RMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3BsdXMtY2lyY2xlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZ3MvcGx1cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3RvZG8tdW5jaGVja2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZ3MvdG9kby1jaGVja2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZ3MvaW5ib3gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLCBsaXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHksIHVsLCBsaSwgcHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290e1xcbiAgLS1zdG9uZS0yMDA6ICNlN2U1ZTQ7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcInNpZGViYXIgdmlld1xcXCJcXG4gIDtcXG59XFxuXFxuI3ZpZXctY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiB2aWV3O1xcbn1cXG5cXG4jdmlldy1saXN0LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdmlldy1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jdmlldy1oZWFkZXItY29udGVudCBoMXtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jc2lkZWJhci1jb250ZW50e1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbiNzaWRlYmFyLWNvbnRhaW5lcntcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuXFxuI2ZpbHRlci1pbmJveHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZS0yMDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIGRpdiNhZGQtdGFzay1pbWFnZXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIHAjYWRkLXRhc2stdGV4dHtcXG4gIGNvbG9yOiAjYmUxMjNjO1xcbn1cXG5cXG4jYWRkLXRhc2staW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNhZGQtdGFzay1tZW51LWNvbnRhaW5lcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXI6ICNkNmQzZDEgc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jdGFzay1kdWUtZGF0ZS10ZXh0LCAjdGFzay1wcm9qZWN0LXRleHR7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDZweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnQgaW5wdXR7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmxlZnQtc2lkZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2x1bW4tZ2FwOiAzcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWhpbnR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0YXNrLW5hbWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFzay1uYW1lLWlucHV0e1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjYW5jZWwtYnRue1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1idG57XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS0yMDApO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbntcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcmlvcml0eS0xe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpb3JpdHktMntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LTN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5ib3gtaW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5ob3Zlci1zdG9uZS0yMDA6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZS0yMDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0I7OztFQUdBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQXdEO0VBQ3hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBaUQ7RUFDakQsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCwgbGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5LCB1bCwgbGksIHB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gIC0tc3RvbmUtMjAwOiAjZTdlNWU0O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIHZpZXdcXFwiXFxuICA7XFxufVxcblxcbiN2aWV3LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogdmlldztcXG59XFxuXFxuI3ZpZXctbGlzdC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3ZpZXctY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI3ZpZXctaGVhZGVyLWNvbnRlbnQgaDF7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI3NpZGViYXItY29udGVudHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jc2lkZWJhci1jb250YWluZXJ7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcblxcbiNmaWx0ZXItaW5ib3h7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2hlYWRlci1jb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUxMjNjO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiNoZWFkZXItY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNib3R0b20tbWVudS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudDpob3ZlciBkaXYjYWRkLXRhc2staW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy9wbHVzLWNpcmNsZS5wbmcpO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudDpob3ZlciBwI2FkZC10YXNrLXRleHR7XFxuICBjb2xvcjogI2JlMTIzYztcXG59XFxuXFxuI2FkZC10YXNrLWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvcGx1cy5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNhZGQtdGFzay1tZW51LWNvbnRhaW5lcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXI6ICNkNmQzZDEgc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jdGFzay1kdWUtZGF0ZS10ZXh0LCAjdGFzay1wcm9qZWN0LXRleHR7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDZweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnQgaW5wdXR7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmxlZnQtc2lkZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2x1bW4tZ2FwOiAzcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWhpbnR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0YXNrLW5hbWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFzay1uYW1lLWlucHV0e1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjYW5jZWwtYnRue1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1idG57XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS0yMDApO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbntcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvdG9kby11bmNoZWNrZWQucG5nKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcmlvcml0eS0xe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpb3JpdHktMntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LTN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy90b2RvLWNoZWNrZWQucG5nKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluYm94LWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvaW5ib3gucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaG92ZXItc3RvbmUtMjAwOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luYm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5ib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWFkZXJEaXYgZnJvbSAnLi4vcGFnZXMvaGVhZGVyJztcbmltcG9ydCBpbmJveCBmcm9tICcuLi9wYWdlcy9pbmJveCc7XG5pbXBvcnQgc2lkZWJhckRpdiBmcm9tICcuLi9wYWdlcy9zaWRlYmFyJztcbmltcG9ydCB7IHN0b3JhZ2VGaXJzdExvYWQgfSBmcm9tICcuLi90b2RvJztcblxuY29uc3QgZmlyc3RMb2FkID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gaGVhZGVyRGl2KCk7XG4gIGNvbnN0IHNpZGViYXIgPSBzaWRlYmFyRGl2KCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBzdG9yYWdlRmlyc3RMb2FkKCk7XG4gIGluYm94KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpcnN0TG9hZDsiLCJpbXBvcnQgc2lkZWJhckhhbWJ1cmdlck1lbnVJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWdzL3NpZGViYXItaGFtYnVyZ2VyLW1lbnUtaWNvbi5wbmcnXG5cbmNvbnN0IGhlYWRlckRpdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5pZCA9ICdoZWFkZXItY29udGFpbmVyJztcblxuICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRlbnQuaWQgPSAnaGVhZGVyLWNvbnRlbnQnO1xuXG4gIGNvbnN0IHNpZGViYXJIYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNpZGViYXJIYW1idXJnZXJNZW51LnNyYyA9IHNpZGViYXJIYW1idXJnZXJNZW51SWNvbjtcbiAgc2lkZWJhckhhbWJ1cmdlck1lbnUuaWQgPSAnc2lkZWJhci1oYW1idXJnZXItbWVudSc7XG4gIHNpZGViYXJIYW1idXJnZXJNZW51LndpZHRoID0gJzI4JztcbiAgc2lkZWJhckhhbWJ1cmdlck1lbnUuaGVpZ2h0ID0gJzI4JztcblxuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXJIYW1idXJnZXJNZW51KTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyRGl2OyIsImltcG9ydCB0YXNrRHVlRGF0ZUltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL2R1ZS1kYXRlLnBuZyc7XG5pbXBvcnQgdGFza1Byb2plY3RJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1ncy9pbmJveC5wbmcnO1xuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gXCIuLi90b2RvXCI7XG5pbXBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi4vdG9kb1wiO1xuXG5jb25zdCBpbmJveCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWV3Q29udGFpbmVyLmlkID0gYHZpZXctY29udGFpbmVyYDtcblxuICBjb25zdCB2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWV3Q29udGVudC5pZCA9ICd2aWV3LWNvbnRlbnQnO1xuXG4gIHZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0NvbnRlbnQpO1xuXG4gIGNvbnN0IHZpZXdIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGxldCB2aWV3SGVhZGVyID0gJyc7XG4gICAgaWYgKGxvYWRMb2NhbFN0b3JhZ2UoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZpZXdIZWFkZXIgPSAnSW5ib3gnO1xuICAgIH1cbiAgICBjb25zdCB2aWV3SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlld0hlYWRlckNvbnRhaW5lci5pZCA9ICd2aWV3LWhlYWRlci1jb250YWluZXInO1xuICBcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZCh2aWV3SGVhZGVyQ29udGFpbmVyKTtcbiAgXG4gICAgY29uc3Qgdmlld0hlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWV3SGVhZGVyQ29udGVudC5pZCA9ICd2aWV3LWhlYWRlci1jb250ZW50JztcbiAgICB2aWV3SGVhZGVyQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGgxPiR7dmlld0hlYWRlcn08L2gxPlxuICAgIGA7XG4gIFxuICAgIHZpZXdIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0hlYWRlckNvbnRlbnQpO1xuICB9KSgpO1xuXG4gIGNvbnN0IHZpZXdMaXN0ID0gKCgpID0+IHtcbiAgICBjb25zdCB2aWV3TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZXdMaXN0Q29udGFpbmVyLmlkID0gJ3ZpZXctbGlzdC1jb250YWluZXInO1xuXG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQodmlld0xpc3RDb250YWluZXIpO1xuXG4gICAgY29uc3Qgdmlld0xpc3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlld0xpc3RDb250ZW50LmlkID0gJ3ZpZXctbGlzdC1jb250ZW50JztcblxuICAgIGNvbnN0IHZpZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB2aWV3TGlzdC5pZCA9ICd2aWV3LWxpc3QnO1xuXG4gICAgY29uc3QgdG9kb0xpc3RJdGVtcyA9ICgoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHJlbmRlclRvZG9MaXN0SXRlbXMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaW5ib3ggPSBsb2FkTG9jYWxTdG9yYWdlKClbMF07XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8aW5ib3gudG9kb0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtLmNsYXNzTGlzdC52YWx1ZSA9ICd0b2RvLWxpc3QtaXRlbSc7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgYCR7aX1gKTtcbiAgICAgIFxuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaW5ib3gudG9kb0xpc3RbaV0ucHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LTMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluYm94LnRvZG9MaXN0W2ldLnByaW9yaXR5ID09PSAyKSB7XG4gICAgICAgICAgICB0b2RvTGlzdEl0ZW1DaGVja2JveC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS0yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmJveC50b2RvTGlzdFtpXS5wcmlvcml0eSA9PT0gMSkge1xuICAgICAgICAgICAgdG9kb0xpc3RJdGVtQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktMScpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtQ2hlY2tib3gpO1xuXG4gICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgXG4gICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtVGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbmJveC50b2RvTGlzdFtpXS50aXRsZX1gO1xuICAgIFxuICAgICAgICAgIHRvZG9MaXN0SXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtVGl0bGUpO1xuXG4gICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtpbmJveC50b2RvTGlzdFtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbS1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgdG9kb0xpc3RJdGVtQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtQ29udGVudCk7XG4gICAgICBcbiAgICAgICAgICB2aWV3TGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW0pO1xuICBcbiAgICAgICAgICB0b2RvTGlzdEl0ZW1DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2spO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVuZGVyVG9kb0xpc3RJdGVtcygpO1xuXG4gICAgICByZXR1cm4ge3JlbmRlclRvZG9MaXN0SXRlbXN9O1xuXG4gICAgfSkoKTtcblxuICAgIFxuICAgIHZpZXdMaXN0Q29udGVudC5hcHBlbmRDaGlsZCh2aWV3TGlzdCk7XG5cbiAgICB2aWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TGlzdENvbnRlbnQpO1xuXG4gICAgY29uc3QgZ2V0QWRkVGFza0NvbnRlbnQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYWRkVGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZFRhc2tDb250ZW50LmlkID0gJ2FkZC10YXNrLWNvbnRlbnQnO1xuICAgICAgXG4gICAgICBjb25zdCBhZGRUYXNrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZFRhc2tJbWFnZS5pZCA9ICdhZGQtdGFzay1pbWFnZSc7XG4gICAgXG4gICAgICBhZGRUYXNrQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrSW1hZ2UpO1xuICAgIFxuICAgICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBhZGRUYXNrVGV4dC5pZCA9ICdhZGQtdGFzay10ZXh0JztcbiAgICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJztcbiAgICBcbiAgICAgIGFkZFRhc2tDb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcblxuICAgICAgdmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRlbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gYWRkVGFza0NvbnRlbnQ7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7Z2V0QWRkVGFza0NvbnRlbnQsIHZpZXdMaXN0Q29udGFpbmVyLCB0b2RvTGlzdEl0ZW1zfTtcbiAgfSkoKTtcblxuICBcbiAgY29uc3Qgb3BlbkFkZFRhc2tNZW51ID0gKCkgPT4ge1xuICAgIHZpZXdMaXN0LmdldEFkZFRhc2tDb250ZW50LnJlbW92ZSgpO1xuXG4gICAgY29uc3QgYWRkVGFza01lbnUgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaWQgPSAnYWRkLXRhc2stbWVudS1jb250YWluZXInO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250ZW50LmlkID0gJ2FkZC10YXNrLW1lbnUtY29udGVudCc7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBmb3JtLmlkID0gJ2FkZC10YXNrLW1lbnUtZm9ybSc7XG5cbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgIGNvbnN0IGZvcm1UZXh0QXJlYSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1UZXh0QXJlYUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVRleHRBcmVhQ29udGVudC5pZCA9ICdmb3JtLXRleHRhcmVhLWNvbnRlbnQnO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGV4dEFyZWFDb250ZW50KTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGFza05hbWVMYWJlbC5pZCA9ICd0YXNrLW5hbWUnO1xuXG4gICAgICAgIGZvcm1UZXh0QXJlYUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stbmFtZScpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAwJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LmlkID0gJ3Rhc2stbmFtZS1pbnB1dCc7XG5cbiAgICAgICAgXG4gICAgICAgIHRhc2tOYW1lTGFiZWwuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uJztcblxuICAgICAgICBmb3JtVGV4dEFyZWFDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0YXJlYScpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzUwMCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnO1xuXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGZvcm1CdG5zID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUJ0bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUJ0bkNvbnRlbnQuaWQgPSAnZm9ybS1idG4tY29udGVudCc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgbGVmdFNpZGVCdG5zID0gKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGxlZnRDb250ZW50LmlkID0gJ2Zvcm0tYnRuLWNvbnRlbnQtbGVmdC1zaWRlJztcblxuICAgICAgICAgIGZvcm1CdG5Db250ZW50LmFwcGVuZENoaWxkKGxlZnRDb250ZW50KTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgIHRhc2tEdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlLWJ0bicpO1xuXG4gICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB0YXNrRHVlRGF0ZUltZy5zcmMgPSB0YXNrRHVlRGF0ZUltYWdlO1xuICAgICAgICAgIHRhc2tEdWVEYXRlSW1nLndpZHRoID0gJzIwJztcbiAgICAgICAgICB0YXNrRHVlRGF0ZUltZy5oZWlnaHQgPSAnMjAnO1xuXG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUltZyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdGFza0R1ZURhdGVUZXh0LmlkID0gJ3Rhc2stZHVlLWRhdGUtdGV4dCc7XG4gICAgICAgICAgdGFza0R1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJztcblxuICAgICAgICAgIHRhc2tEdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVUZXh0KTtcblxuICAgICAgICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuXG4gICAgICAgICAgY29uc3QgdGFza1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgdGFza1Byb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtYnRuJyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHRhc2tQcm9qZWN0SW1nLnNyYyA9IHRhc2tQcm9qZWN0SW1hZ2U7XG4gICAgICAgICAgdGFza1Byb2plY3RJbWcud2lkdGggPSAnMjAnO1xuICAgICAgICAgIHRhc2tQcm9qZWN0SW1nLmhlaWdodCA9ICcyMCc7XG5cbiAgICAgICAgICB0YXNrUHJvamVjdExhYmVsLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0SW1nKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICB0YXNrUHJvamVjdFRleHQuaWQgPSAndGFzay1wcm9qZWN0LXRleHQnO1xuICAgICAgICAgIHRhc2tQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgICAgICAgLy8gJ0luYm94JyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggY3VycmVudCBwcm9qZWN0IGluIHZpZXdcblxuICAgICAgICAgIHRhc2tQcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RUZXh0KTtcblxuICAgICAgICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0TGFiZWwpO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUJ0bnMgPSAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHJpZ2h0Q29udGVudC5pZCA9ICdmb3JtLWJ0bi1jb250ZW50LXJpZ2h0LXNpZGUnO1xuXG4gICAgICAgICAgZm9ybUJ0bkNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRDb250ZW50KTtcblxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgIFxuICAgICAgICB9KSgpO1xuXG4gICAgICB9KSgpO1xuXG4gICAgICBcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkVGFza0FjdGlvbkJ1dHRvbnMgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaWQgPSAnYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyJztcblxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudC5pZCA9ICdhZGQtdGFzay1hY3Rpb24tYnV0dG9ucy1jb250ZW50JztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnRuLmlkID0gJ2NhbmNlbC1idG4nO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLW1lbnUtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgdmlld0xpc3Qudmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkLXRhc2stYnRuJztcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGFkZFRhc2soKSAhPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stbWVudS1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICB2aWV3TGlzdC52aWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TGlzdC5nZXRBZGRUYXNrQ29udGVudCk7XG4gICAgICAgICAgY29uc3QgZ2V0Vmlld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1saXN0Jyk7XG4gICAgICAgICAgd2hpbGUgKGdldFZpZXdMaXN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdldFZpZXdMaXN0LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWV3TGlzdC50b2RvTGlzdEl0ZW1zLnJlbmRlclRvZG9MaXN0SXRlbXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuXG4gICAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pKCk7XG4gIH1cblxuICB2aWV3TGlzdC5nZXRBZGRUYXNrQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5BZGRUYXNrTWVudSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh2aWV3Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5ib3g7IiwiY29uc3Qgc2lkZWJhckRpdiA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyQ29udGFpbmVyLmlkID0gJ3NpZGViYXItY29udGFpbmVyJztcblxuICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyQ29udGVudC5pZCA9ICdzaWRlYmFyLWNvbnRlbnQnO1xuICBcbiAgY29uc3QgdG9wTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgdG9wTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9wTWVudS5pZCA9ICd0b3AtbWVudSc7XG5cbiAgICBjb25zdCBpbmJveExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpbmJveExpLmlkID0gJ2ZpbHRlci1pbmJveCc7XG4gICAgaW5ib3hMaS5jbGFzc0xpc3QuYWRkKCdob3Zlci1zdG9uZS0yMDAnKTtcblxuICAgIGNvbnN0IGluYm94SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveEltYWdlLmNsYXNzTGlzdC52YWx1ZSA9ICdpbmJveC1pbWFnZSc7XG5cbiAgICBpbmJveExpLmFwcGVuZENoaWxkKGluYm94SW1hZ2UpO1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIGluYm94TGkuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG5cbiAgICB0b3BNZW51LmFwcGVuZENoaWxkKGluYm94TGkpO1xuXG4gICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wTWVudSk7XG4gIH0pKCk7XG5cbiAgY29uc3QgYm90dG9tTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm90dG9tTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21NZW51Q29udGVudC5pZCA9ICdib3R0b20tbWVudS1jb250ZW50JztcblxuICAgIGNvbnN0IGJvdHRvbU1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYm90dG9tTWVudUhlYWRlci5jbGFzc0xpc3QudmFsdWUgPSAnbWVudS1oZWFkZXInO1xuICAgIGJvdHRvbU1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgYm90dG9tTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tTWVudUhlYWRlcik7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3QuaWQgPSAncHJvamVjdC1saXN0JztcblxuICAgIGZvciAobGV0IGk9MTtpPD0zO2krKykge1xuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QudmFsdWUgPSAncHJvamVjdC1saXN0LWl0ZW0nO1xuICAgICAgcHJvamVjdExpc3RJdGVtLnRleHRDb250ZW50ID0gYEV4YW1wbGUgcHJvamVjdCAke2l9YDtcbiAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdob3Zlci1zdG9uZS0yMDAnKTtcbiAgXG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChib3R0b21NZW51Q29udGVudCk7XG4gIH0pKCk7XG5cbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG5cbiAgcmV0dXJuIHNpZGViYXJDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXJEaXY7IiwiY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9MaXN0OiBbXSxcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0LnRvZG9MaXN0O1xuICAgIH1cbiAgICByZXR1cm4ge2dldFByb2plY3QsIGdldFRvZG9MaXN0fTtcbn1cblxuY29uc3Qgc3RvcmFnZUZpcnN0TG9hZCA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHJldHVybjtcbiAgICBjb25zdCBpbmJveCA9IGNyZWF0ZVByb2plY3QoJ2luYm94JywgJ3RoZSBkZWZhdWx0Jyk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKGluYm94LmdldFByb2plY3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSA9IDQsIHByb2plY3QgPSBsb2FkTG9jYWxTdG9yYWdlKClbMF0udGl0bGUpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBub3RlczogXCJcIixcbiAgICAgICAgcHJvamVjdCxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VG9kbztcbn1cblxuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXG4gICAgaWYgKHRhc2tOYW1lID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBpbmJveCA9IHByb2plY3RMaXN0WzBdO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgaW5ib3gudG9kb0xpc3QucHVzaChuZXdUb2RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuY29uc3QgcmVtb3ZlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgbGlzdElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBpbmJveCA9IHByb2plY3RMaXN0WzBdO1xuXG4gICAgaW5ib3gudG9kb0xpc3Quc3BsaWNlKGxpc3RJZCwgMSk7XG4gICAgY29uc29sZS5sb2coaW5ib3gudG9kb0xpc3QpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG5cbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5cblxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssIHN0b3JhZ2VGaXJzdExvYWQsIGxvYWRMb2NhbFN0b3JhZ2UsIHJlbW92ZVRhc2tcbn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL2luYm94LmNzcyc7XG5pbXBvcnQgZmlyc3RMb2FkIGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIjtcblxuZmlyc3RMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=