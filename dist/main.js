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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#add-task-menu-container{\n  height: 100px;\n  border: #d6d3d1 solid 1px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  height: fit-content;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  display: flex;\n  flex: 1;\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn, .cancel-btn, #header-cancel-button{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn, .add-btn, #header-add-button{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n.cancel-btn{\n  width: 60px;\n}\n\n.add-btn{\n  width: 60px;\n}\n\n#bottom-menu-header-content{\n  display: flex;\n  column-gap: 0.5rem;\n}\n\n#bottom-menu-header-plus{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#bottom-menu-header-content:hover{\n  cursor: pointer;\n}\n\n#bottom-menu-header-content:hover #bottom-menu-header-plus{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n}\n\n#bottom-menu-header-content:hover .menu-header{\n  color: #be123c;\n}\n\n#project-menu-container, #expanded-todo-container {\n  isolation: isolate;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n  display: flex;\n  justify-content: center;\n}\n\n#project-menu-content, #expanded-todo-content {\n  width: 450px;\n  height: 200px;\n  background-color: white;\n  margin: 50px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#project-menu-header, #expanded-todo-header {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n}\n\n#project-menu-name-content{\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 1rem 0.5rem;\n  flex: 1;\n}\n\n#name-header{\n  font-weight: 700;\n}\n\n#project-menu-button-content{\n  display: flex;\n  justify-content: right;\n  column-gap: 1.5rem;\n  margin: 0.5rem 1rem 1rem;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-list-item:hover .trash-image{\n  visibility: visible;\n}\n\n.trash-image{\n  visibility: collapse;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n\n.stone-200{\n  background-color: var(--stone-200);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/inbox.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\nhtml, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(/src/assets/imgs/plus-circle.png);\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(/src/assets/imgs/plus.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#add-task-menu-container{\n  height: 100px;\n  border: #d6d3d1 solid 1px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  height: fit-content;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  display: flex;\n  flex: 1;\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn, .cancel-btn, #header-cancel-button{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn, .add-btn, #header-add-button{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n.cancel-btn{\n  width: 60px;\n}\n\n.add-btn{\n  width: 60px;\n}\n\n#bottom-menu-header-content{\n  display: flex;\n  column-gap: 0.5rem;\n}\n\n#bottom-menu-header-plus{\n  background-image: url(/src/assets/imgs/plus.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#bottom-menu-header-content:hover{\n  cursor: pointer;\n}\n\n#bottom-menu-header-content:hover #bottom-menu-header-plus{\n  background-image: url(/src/assets/imgs/plus-circle.png);\n  background-size: contain;\n}\n\n#bottom-menu-header-content:hover .menu-header{\n  color: #be123c;\n}\n\n#project-menu-container, #expanded-todo-container {\n  isolation: isolate;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n  display: flex;\n  justify-content: center;\n}\n\n#project-menu-content, #expanded-todo-content {\n  width: 450px;\n  height: 200px;\n  background-color: white;\n  margin: 50px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#project-menu-header, #expanded-todo-header {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n}\n\n#project-menu-name-content{\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 1rem 0.5rem;\n  flex: 1;\n}\n\n#name-header{\n  font-weight: 700;\n}\n\n#project-menu-button-content{\n  display: flex;\n  justify-content: right;\n  column-gap: 1.5rem;\n  margin: 0.5rem 1rem 1rem;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-list-item:hover .trash-image{\n  visibility: visible;\n}\n\n.trash-image{\n  visibility: collapse;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(/src/assets/imgs/todo-unchecked.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(/src/assets/imgs/todo-checked.png);\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(/src/assets/imgs/inbox.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n\n.stone-200{\n  background-color: var(--stone-200);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "firstLoad": () => (/* binding */ firstLoad),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/inbox */ "./src/pages/inbox.js");
/* harmony import */ var _pages_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/sidebar */ "./src/pages/sidebar.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo */ "./src/todo.js");





const firstLoad = () => {
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.storageFirstLoad)();
  render();
}

const render = () => {
  const content = document.querySelector('#content');
  const header = (0,_pages_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const sidebar = (0,_pages_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])().sidebarContainer;

  content.appendChild(header);
  content.appendChild(sidebar);
  (0,_pages_inbox__WEBPACK_IMPORTED_MODULE_1__["default"])();
}



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
    const viewHeader = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().activeProject.title;
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

        for (let i=0;i<viewList.children.length;i++) {
          viewList.children[i].remove();
        }

        const activeProject = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().activeProject;
        

        for (let i=0;i<activeProject.todoList.length;i++) {
          const todoListItem = document.createElement('li');
          todoListItem.classList.value = 'todo-list-item';
          todoListItem.setAttribute('data-list-id', `${i}`);
          todoListItem.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.expandTodo);
          
      
          const todoListItemCheckbox = document.createElement('div');
          todoListItemCheckbox.classList.add('checkbox');
          
          if (activeProject.todoList[i].priority === 3) {
            todoListItemCheckbox.classList.add('priority-3');
          }
          if (activeProject.todoList[i].priority === 2) {
            todoListItemCheckbox.classList.add('priority-2');
          }
          if (activeProject.todoList[i].priority === 1) {
            todoListItemCheckbox.classList.add('priority-1');
          } 

          todoListItem.appendChild(todoListItemCheckbox);

          const todoListItemContent = document.createElement('div');
          todoListItemContent.classList.add('list-item-content');

      
          const todoListItemTitle = document.createElement('p');
          todoListItemTitle.textContent = `${activeProject.todoList[i].title}`;
    
          todoListItemContent.appendChild(todoListItemTitle);

          const todoListItemDescription = document.createElement('p');
          todoListItemDescription.textContent = `${activeProject.todoList[i].description}`;
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
          taskProjectText.textContent = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().activeProject.title;

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
  return {viewList};
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
/* harmony import */ var _assets_imgs_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/plus.png */ "./src/assets/imgs/plus.png");
/* harmony import */ var _assets_imgs_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/trash.png */ "./src/assets/imgs/trash.png");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ "./src/todo.js");





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
    if ((0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().activeProject.title === "inbox") {
      inboxLi.classList.add('stone-200');
    }
    inboxLi.setAttribute('data-list-id', '0');

    inboxLi.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.selectProject);

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


    const bottomMenuHeaderContent = document.createElement('div');
    bottomMenuHeaderContent.id = 'bottom-menu-header-content';
    bottomMenuHeaderContent.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.projectMenu);

    bottomMenuContent.appendChild(bottomMenuHeaderContent);

    const bottomMenuHeader = document.createElement('p');
    bottomMenuHeader.classList.value = 'menu-header';
    bottomMenuHeader.textContent = 'Projects';

    bottomMenuHeaderContent.appendChild(bottomMenuHeader);

    const bottomMenuHeaderPlusImage = document.createElement('div');
    bottomMenuHeaderPlusImage.id = 'bottom-menu-header-plus';

    bottomMenuHeaderContent.appendChild(bottomMenuHeaderPlusImage);

    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    bottomMenuContent.appendChild(projectList);

    const renderProjectList = (projectListElement = projectList) => {

    const projectListArray = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadLocalStorage)();

    for (let i=1;i<projectListArray.length;i++) {
      const projectListItem = document.createElement('li');

      const projectListItemText = document.createElement('p');
      projectListItemText.textContent = projectListArray[i].title;
      projectListItem.appendChild(projectListItemText);

      const projectListItemTrashImage = new Image();
      projectListItemTrashImage.src = _assets_imgs_trash_png__WEBPACK_IMPORTED_MODULE_1__;
      projectListItemTrashImage.width = 20;
      projectListItemTrashImage.height = 20;
      projectListItemTrashImage.classList.add('trash-image');
      projectListItem.appendChild(projectListItemTrashImage);
      projectListItemTrashImage.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.removeProject);
      
      projectListItem.classList.add('project-list-item', 'hover-stone-200');
      const projectList = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadLocalStorage)();
      if ((0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().id === i) {
        projectListItem.classList.add('stone-200');
      }


      projectListItem.setAttribute('data-list-id', [i]);
      projectListItem.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_2__.selectProject);
      

      projectListElement.appendChild(projectListItem);
    }
  }
  renderProjectList();

    sidebarContent.appendChild(bottomMenuContent);

    return {renderProjectList};
  })();

  sidebarContainer.appendChild(sidebarContent);

  return {sidebarContainer, bottomMenu};
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
/* harmony export */   "expandTodo": () => (/* binding */ expandTodo),
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),
/* harmony export */   "projectMenu": () => (/* binding */ projectMenu),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "selectProject": () => (/* binding */ selectProject),
/* harmony export */   "storageFirstLoad": () => (/* binding */ storageFirstLoad)
/* harmony export */ });
/* harmony import */ var _pages_inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/inbox */ "./src/pages/inbox.js");
/* harmony import */ var _pages_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/sidebar */ "./src/pages/sidebar.js");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/imgs/close.png */ "./src/assets/imgs/close.png");





const createProject = (title, description, selected = false) => {
    const newProject = {
        title,
        description,
        selected,
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
    const inbox = createProject('inbox', 'the default', true);
    const projectList = [];

    projectList.push(inbox.getProject());
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const loadLocalStorage = () => {
    const projectList = JSON.parse(localStorage.getItem('projectList'));
    return projectList;
}

const createTodo = (title, description = "", project = loadLocalStorage()[0].title, dueDate = "", priority = 4) => {
    const newTodo = {
        title,
        description,
        project,
        dueDate,
        priority,
        notes: "",
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
    const activeProject = projectList[getActiveProject().id];

    const newTodo = createTodo(taskName, taskDescription, activeProject.title);
    activeProject.todoList.push(newTodo);

    updateLocalStorage(projectList);

    return true;
}

const updateLocalStorage = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const removeTask = (e) => {
    const taskId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();

    projectList[getActiveProject().id].todoList.splice(taskId, 1);
    updateLocalStorage(projectList);

    e.target.parentElement.remove();
}

const expandTodo = (e) => {
    if (e.target.className === 'checkbox') return;
    
    const projectList = loadLocalStorage();
    const activeProject = projectList[getActiveProject().id];
    const listId = e.currentTarget.dataset.listId;
    const selectedTodo = activeProject.todoList[listId];

    const container = (() => {
        const container = document.createElement('div');
        container.id = 'expanded-todo-container';
        
        const bodyContent = document.querySelector('#content');
        bodyContent.appendChild(container);
        
        return container;
    })();

    const content = document.createElement('div');
    content.id = 'expanded-todo-content';
    content.addEventListener('click', finishTodoEdit);
    content.todoListId = listId;

    container.appendChild(content);

    const header = document.createElement('div');
    header.id = 'expanded-todo-header';
    header.textContent = `${selectedTodo.title}`;
    header.addEventListener('click', editTodoHeader);

    content.appendChild(header);
}

const editTodoHeader = () => {
    const content = document.querySelector('#expanded-todo-content');

    const header = document.querySelector('#expanded-todo-header');
    const previousHeaderText = header.textContent;


    const headerEditBox = document.createElement('input');
    headerEditBox.id = 'expanded-todo-header-edit';
    headerEditBox.type = 'textarea';
    headerEditBox.maxLength = '30';
    headerEditBox.minLength = '1';
    headerEditBox.value = `${previousHeaderText}`;

    content.appendChild(headerEditBox);

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'header-button-content';
    content.appendChild(buttonContainer);

    const headerCancelBtn = document.createElement('button');
    headerCancelBtn.id = 'header-cancel-button';
    buttonContainer.appendChild(headerCancelBtn);

    const headerAddBtn = document.createElement('button');
    headerAddBtn.id = 'header-add-button';
    buttonContainer.appendChild(headerAddBtn);


    header.remove();
}

const finishTodoEdit = (e) => {
    /*
    const headerEditBox = document.querySelector('#expanded-todo-header-edit');
    if (headerEditBox === null) return;
    const newTodoTitle = headerEditBox.value; 
    if (newTodoTitle === "") return;

    const content = document.querySelector('#expanded-todo-content');
    if (e.target.id !== "expanded-todo-content") return;

    const projectList = loadLocalStorage();
    const activeProject = projectList[getActiveProject().id]
    const listId = content.todoListId;
    const selectedTodo = activeProject.todoList[listId];


    for (let i=0;i<content.children.length;i++) {
        if (content.children[i].id === 'expanded-todo-content') {
            return;   
        }
    }

    selectedTodo.title = `${newTodoTitle}`;

    updateLocalStorage(projectList);
    
    headerEditBox.remove();

    const newHeader = document.createElement('div');
    newHeader.id = 'expanded-todo-header';
    newHeader.textContent = `${newTodoTitle}`;
    newHeader.addEventListener('click', editTodoHeader);

    content.appendChild(newHeader);
    */
}

const removeProject = (e) => {
    const listId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();
    projectList.splice(listId, 1);
    updateLocalStorage(projectList);

    e.target.parentElement.remove();
}

const selectProject = (e) => {
    if (e.target.className === "trash-image") return;
    const listId = e.target.dataset.listId;
    const projectList = loadLocalStorage();

    if (projectList[listId].selected === true) return;
    e.target.classList.add('stone-200');

    projectList[getActiveProject().id].selected = false;
    projectList[listId].selected = true;
    
    updateLocalStorage(projectList);

    const content = document.querySelector('#content');

    while (content.children.length > 0) {
        content.children[0].remove();
    }
    (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__.render)();

    
}

const getActiveProject = () => {
    const projectList = loadLocalStorage();

    const getActiveProjectId = () => {
        const inboxId = 0;

        for (let i=0;i<projectList.length;i++) {
            if (projectList[i].selected === false) continue;
      
            const activeProjectId = i;
            return activeProjectId;
          }
          projectList[inboxId].selected = true;
          updateLocalStorage(projectList);
          return inboxId;
    }

    const id = getActiveProjectId();

    const getActiveProject = () => {
        const activeProject = projectList[id];
        return activeProject;
    }

    const activeProject = getActiveProject();

    return {activeProject, id};
}

const projectMenu = (e) => {
    const container = (() => {
        const container = document.createElement('div');
        container.id = 'project-menu-container';
        
        const bodyContent = document.querySelector('#content');
        bodyContent.appendChild(container);
        
        return container;
    })();

    const content = document.createElement('form');
    content.id = 'project-menu-content';
    container.appendChild(content);

    const header = document.createElement('div');
    header.id = 'project-menu-header';
    header.textContent = 'Add project';
    content.appendChild(header);

    const name = (() => {
        const content = document.createElement('div');
        content.id = 'project-menu-name-content';

        const nameHeader = document.createElement('div');
        nameHeader.id = 'name-header';
        nameHeader.textContent = 'Name';
        content.appendChild(nameHeader);

        const name = document.createElement('input');
        name.id = 'project-menu-name-input';
        name.type = 'textarea';
        name.maxLength = '300';
        name.minLength = '1';
        content.appendChild(name);

        return {content};
    })();
    content.appendChild(name.content);

    const addProject = (e) => {
        const projectName = document.querySelector('#project-menu-name-input');
        if (projectName === "") return;
        const projectList = loadLocalStorage();
        const newProject = createProject(projectName.value);
        projectList.push(newProject.getProject());
        updateLocalStorage(projectList);
        container.remove();
        const projectListElement = document.querySelector('#project-list');
        while (projectListElement.children.length > 0) {
            projectListElement.children[0].remove();
        }
        (0,_pages_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])().bottomMenu.renderProjectList(projectListElement);
    }

    const buttons = (() => {
        const content = document.createElement('div');
        content.id = 'project-menu-button-content';

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.type = 'button';
        cancelBtn.addEventListener('click', (e) => {
            container.remove();
        });
        content.appendChild(cancelBtn);

        const addBtn = document.createElement('button');
        addBtn.classList.add('add-btn');
        addBtn.textContent = 'Add';
        addBtn.type = 'button';
        addBtn.addEventListener('click', addProject);
        content.appendChild(addBtn);

        return {content};
    })();
    content.appendChild(buttons.content);
}










/***/ }),

/***/ "./src/assets/imgs/close.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/close.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dcac4a658d922d38d68.png";

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

/***/ }),

/***/ "./src/assets/imgs/trash.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/trash.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93fe8120e24fbb647363.png";

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



(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__.firstLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDb0I7O0FBRWhELCtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmJveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5ib3guY3NzPzZiOWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2ZpcnN0TG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1ncy9wbHVzLWNpcmNsZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3BsdXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1ncy90b2RvLXVuY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3RvZG8tY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL2luYm94LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCwgbGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5LCB1bCwgbGksIHB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gIC0tc3RvbmUtMjAwOiAjZTdlNWU0O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIHZpZXdcXFwiXFxuICA7XFxufVxcblxcbiN2aWV3LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogdmlldztcXG59XFxuXFxuI3ZpZXctbGlzdC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3ZpZXctY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI3ZpZXctaGVhZGVyLWNvbnRlbnQgaDF7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI3NpZGViYXItY29udGVudHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jc2lkZWJhci1jb250YWluZXJ7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcblxcbiNmaWx0ZXItaW5ib3h7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIGRpdiNhZGQtdGFzay1pbWFnZXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIHAjYWRkLXRhc2stdGV4dHtcXG4gIGNvbG9yOiAjYmUxMjNjO1xcbn1cXG5cXG4jYWRkLXRhc2staW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNhZGQtdGFzay1tZW51LWNvbnRhaW5lcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXI6ICNkNmQzZDEgc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jdGFzay1kdWUtZGF0ZS10ZXh0LCAjdGFzay1wcm9qZWN0LXRleHR7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDZweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnQgaW5wdXR7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmxlZnQtc2lkZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2x1bW4tZ2FwOiAzcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWhpbnR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0YXNrLW5hbWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFzay1uYW1lLWlucHV0e1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjYW5jZWwtYnRuLCAuY2FuY2VsLWJ0biwgI2hlYWRlci1jYW5jZWwtYnV0dG9ue1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1idG4sIC5hZGQtYnRuLCAjaGVhZGVyLWFkZC1idXR0b257XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jYW5jZWwtYnRue1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5hZGQtYnRue1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItcGx1c3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50OmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm90dG9tLW1lbnUtaGVhZGVyLWNvbnRlbnQ6aG92ZXIgI2JvdHRvbS1tZW51LWhlYWRlci1wbHVze1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50OmhvdmVyIC5tZW51LWhlYWRlcntcXG4gIGNvbG9yOiAjYmUxMjNjO1xcbn1cXG5cXG4jcHJvamVjdC1tZW51LWNvbnRhaW5lciwgI2V4cGFuZGVkLXRvZG8tY29udGFpbmVyIHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1jb250ZW50LCAjZXhwYW5kZWQtdG9kby1jb250ZW50IHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1oZWFkZXIsICNleHBhbmRlZC10b2RvLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0LW1lbnUtbmFtZS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbmFtZS1oZWFkZXJ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jcHJvamVjdC1tZW51LWJ1dHRvbi1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBjb2x1bW4tZ2FwOiAxLjVyZW07XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIgLnRyYXNoLWltYWdle1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRyYXNoLWltYWdle1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcblxcbi50b2RvLWxpc3QtaXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3RvbmUtMjAwKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5saXN0LWl0ZW0tZGVzY3JpcHRpb257XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmxpc3QtaXRlbS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jaGVja2JveHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJpb3JpdHktMXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnByaW9yaXR5LTJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS0ze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVye1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluYm94LWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaG92ZXItc3RvbmUtMjAwOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0b25lLTIwMHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lLTIwMCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5ib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQjs7O0VBR0E7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztB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Q0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQXdEO0VBQ3hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBaUQ7RUFDakQsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCwgbGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5LCB1bCwgbGksIHB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gIC0tc3RvbmUtMjAwOiAjZTdlNWU0O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIHZpZXdcXFwiXFxuICA7XFxufVxcblxcbiN2aWV3LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogdmlldztcXG59XFxuXFxuI3ZpZXctbGlzdC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3ZpZXctY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI3ZpZXctaGVhZGVyLWNvbnRlbnQgaDF7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI3NpZGViYXItY29udGVudHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jc2lkZWJhci1jb250YWluZXJ7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcblxcbiNmaWx0ZXItaW5ib3h7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIGRpdiNhZGQtdGFzay1pbWFnZXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWdzL3BsdXMtY2lyY2xlLnBuZyk7XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50OmhvdmVyIHAjYWRkLXRhc2stdGV4dHtcXG4gIGNvbG9yOiAjYmUxMjNjO1xcbn1cXG5cXG4jYWRkLXRhc2staW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy9wbHVzLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtY29udGFpbmVye1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogI2Q2ZDNkMSBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiN0YXNrLWR1ZS1kYXRlLXRleHQsICN0YXNrLXByb2plY3QtdGV4dHtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG5cXG4jYWRkLXRhc2stbWVudS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stbWVudS1mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogNnB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2Zvcm0tdGV4dGFyZWEtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2Zvcm0tdGV4dGFyZWEtY29udGVudCBpbnB1dHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbiNmb3JtLWJ0bi1jb250ZW50LWxlZnQtc2lkZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGNvbHVtbi1nYXA6IDNweDtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24taGludHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3Rhc2stbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXR7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVye1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NhbmNlbC1idG4sIC5jYW5jZWwtYnRuLCAjaGVhZGVyLWNhbmNlbC1idXR0b257XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biwgLmFkZC1idG4sICNoZWFkZXItYWRkLWJ1dHRvbntcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMTIzYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNhbmNlbC1idG57XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmFkZC1idG57XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1wbHVze1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvcGx1cy5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50OmhvdmVyICNib3R0b20tbWVudS1oZWFkZXItcGx1c3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWdzL3BsdXMtY2lyY2xlLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlciAubWVudS1oZWFkZXJ7XFxuICBjb2xvcjogI2JlMTIzYztcXG59XFxuXFxuI3Byb2plY3QtbWVudS1jb250YWluZXIsICNleHBhbmRlZC10b2RvLWNvbnRhaW5lciB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LW1lbnUtY29udGVudCwgI2V4cGFuZGVkLXRvZG8tY29udGVudCB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0LW1lbnUtaGVhZGVyLCAjZXhwYW5kZWQtdG9kby1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMC41cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1tZW51LW5hbWUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMC41cmVtO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI25hbWUtaGVhZGVye1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1idXR0b24tY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgY29sdW1uLWdhcDogMS41cmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW17XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIC50cmFzaC1pbWFnZXtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50cmFzaC1pbWFnZXtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG5cXG4udG9kby1saXN0LWl0ZW17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0b25lLTIwMCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlc2NyaXB0aW9ue1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5saXN0LWl0ZW0tY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy90b2RvLXVuY2hlY2tlZC5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByaW9yaXR5LTF7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcmlvcml0eS0ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktM3tcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxufVxcblxcbi5jaGVja2JveDpob3ZlcntcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWdzL3RvZG8tY2hlY2tlZC5wbmcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5ib3gtaW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy9pbmJveC5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5ob3Zlci1zdG9uZS0yMDA6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZS0yMDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RvbmUtMjAwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luYm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5ib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWFkZXJEaXYgZnJvbSAnLi4vcGFnZXMvaGVhZGVyJztcbmltcG9ydCBpbmJveCBmcm9tICcuLi9wYWdlcy9pbmJveCc7XG5pbXBvcnQgc2lkZWJhckRpdiBmcm9tICcuLi9wYWdlcy9zaWRlYmFyJztcbmltcG9ydCB7IHN0b3JhZ2VGaXJzdExvYWQgfSBmcm9tICcuLi90b2RvJztcblxuY29uc3QgZmlyc3RMb2FkID0gKCkgPT4ge1xuICBzdG9yYWdlRmlyc3RMb2FkKCk7XG4gIHJlbmRlcigpO1xufVxuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBoZWFkZXJEaXYoKTtcbiAgY29uc3Qgc2lkZWJhciA9IHNpZGViYXJEaXYoKS5zaWRlYmFyQ29udGFpbmVyO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgaW5ib3goKTtcbn1cblxuZXhwb3J0IHtmaXJzdExvYWQsIHJlbmRlcn07IiwiaW1wb3J0IHNpZGViYXJIYW1idXJnZXJNZW51SWNvbiBmcm9tICcuLi9hc3NldHMvaW1ncy9zaWRlYmFyLWhhbWJ1cmdlci1tZW51LWljb24ucG5nJ1xuXG5jb25zdCBoZWFkZXJEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuaWQgPSAnaGVhZGVyLWNvbnRhaW5lcic7XG5cbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250ZW50LmlkID0gJ2hlYWRlci1jb250ZW50JztcblxuICBjb25zdCBzaWRlYmFySGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzaWRlYmFySGFtYnVyZ2VyTWVudS5zcmMgPSBzaWRlYmFySGFtYnVyZ2VyTWVudUljb247XG4gIHNpZGViYXJIYW1idXJnZXJNZW51LmlkID0gJ3NpZGViYXItaGFtYnVyZ2VyLW1lbnUnO1xuICBzaWRlYmFySGFtYnVyZ2VyTWVudS53aWR0aCA9ICcyOCc7XG4gIHNpZGViYXJIYW1idXJnZXJNZW51LmhlaWdodCA9ICcyOCc7XG5cbiAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFySGFtYnVyZ2VyTWVudSk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckRpdjsiLCJpbXBvcnQgdGFza0R1ZURhdGVJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1ncy9kdWUtZGF0ZS5wbmcnO1xuaW1wb3J0IHRhc2tQcm9qZWN0SW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltZ3MvaW5ib3gucG5nJztcbmltcG9ydCB7IGFkZFRhc2ssIGdldEFjdGl2ZVByb2plY3QsIGV4cGFuZFRvZG99IGZyb20gXCIuLi90b2RvXCI7XG5pbXBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi4vdG9kb1wiO1xuXG5jb25zdCBpbmJveCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWV3Q29udGFpbmVyLmlkID0gYHZpZXctY29udGFpbmVyYDtcblxuICBjb25zdCB2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWV3Q29udGVudC5pZCA9ICd2aWV3LWNvbnRlbnQnO1xuXG4gIHZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0NvbnRlbnQpO1xuXG4gIGNvbnN0IHZpZXdIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHZpZXdIZWFkZXIgPSBnZXRBY3RpdmVQcm9qZWN0KCkuYWN0aXZlUHJvamVjdC50aXRsZTtcbiAgICBjb25zdCB2aWV3SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlld0hlYWRlckNvbnRhaW5lci5pZCA9ICd2aWV3LWhlYWRlci1jb250YWluZXInO1xuICBcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZCh2aWV3SGVhZGVyQ29udGFpbmVyKTtcbiAgXG4gICAgY29uc3Qgdmlld0hlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWV3SGVhZGVyQ29udGVudC5pZCA9ICd2aWV3LWhlYWRlci1jb250ZW50JztcbiAgICB2aWV3SGVhZGVyQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGgxPiR7dmlld0hlYWRlcn08L2gxPlxuICAgIGA7XG4gIFxuICAgIHZpZXdIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0hlYWRlckNvbnRlbnQpO1xuICB9KSgpO1xuXG4gIGNvbnN0IHZpZXdMaXN0ID0gKCgpID0+IHtcbiAgICBjb25zdCB2aWV3TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZXdMaXN0Q29udGFpbmVyLmlkID0gJ3ZpZXctbGlzdC1jb250YWluZXInO1xuXG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQodmlld0xpc3RDb250YWluZXIpO1xuXG4gICAgY29uc3Qgdmlld0xpc3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlld0xpc3RDb250ZW50LmlkID0gJ3ZpZXctbGlzdC1jb250ZW50JztcblxuICAgIGNvbnN0IHZpZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB2aWV3TGlzdC5pZCA9ICd2aWV3LWxpc3QnO1xuXG4gICAgY29uc3QgdG9kb0xpc3RJdGVtcyA9ICgoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHJlbmRlclRvZG9MaXN0SXRlbXMgPSAoKSA9PiB7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dmlld0xpc3QuY2hpbGRyZW4ubGVuZ3RoO2krKykge1xuICAgICAgICAgIHZpZXdMaXN0LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKS5hY3RpdmVQcm9qZWN0O1xuICAgICAgICBcblxuICAgICAgICBmb3IgKGxldCBpPTA7aTxhY3RpdmVQcm9qZWN0LnRvZG9MaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICBjb25zdCB0b2RvTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QudmFsdWUgPSAndG9kby1saXN0LWl0ZW0nO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIGAke2l9YCk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kVG9kbyk7XG4gICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICBjb25zdCB0b2RvTGlzdEl0ZW1DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudG9kb0xpc3RbaV0ucHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LTMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudG9kb0xpc3RbaV0ucHJpb3JpdHkgPT09IDIpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LTInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudG9kb0xpc3RbaV0ucHJpb3JpdHkgPT09IDEpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LTEnKTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbUNoZWNrYm94KTtcblxuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvTGlzdEl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbS1jb250ZW50Jyk7XG5cbiAgICAgIFxuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIHRvZG9MaXN0SXRlbVRpdGxlLnRleHRDb250ZW50ID0gYCR7YWN0aXZlUHJvamVjdC50b2RvTGlzdFtpXS50aXRsZX1gO1xuICAgIFxuICAgICAgICAgIHRvZG9MaXN0SXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtVGl0bGUpO1xuXG4gICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHthY3RpdmVQcm9qZWN0LnRvZG9MaXN0W2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICB0b2RvTGlzdEl0ZW1Db250ZW50LmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbURlc2NyaXB0aW9uKTtcblxuICAgICAgICAgIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW1Db250ZW50KTtcbiAgICAgIFxuICAgICAgICAgIHZpZXdMaXN0LmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbSk7XG4gIFxuICAgICAgICAgIHRvZG9MaXN0SXRlbUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFzayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZW5kZXJUb2RvTGlzdEl0ZW1zKCk7XG5cbiAgICAgIHJldHVybiB7cmVuZGVyVG9kb0xpc3RJdGVtc307XG5cbiAgICB9KSgpO1xuXG4gICAgXG4gICAgdmlld0xpc3RDb250ZW50LmFwcGVuZENoaWxkKHZpZXdMaXN0KTtcblxuICAgIHZpZXdMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdMaXN0Q29udGVudCk7XG5cbiAgICBjb25zdCBnZXRBZGRUYXNrQ29udGVudCA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBhZGRUYXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkVGFza0NvbnRlbnQuaWQgPSAnYWRkLXRhc2stY29udGVudCc7XG4gICAgICBcbiAgICAgIGNvbnN0IGFkZFRhc2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkVGFza0ltYWdlLmlkID0gJ2FkZC10YXNrLWltYWdlJztcbiAgICBcbiAgICAgIGFkZFRhc2tDb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tJbWFnZSk7XG4gICAgXG4gICAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGFkZFRhc2tUZXh0LmlkID0gJ2FkZC10YXNrLXRleHQnO1xuICAgICAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSAnQWRkIHRhc2snO1xuICAgIFxuICAgICAgYWRkVGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuXG4gICAgICB2aWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGVudCk7XG4gICAgICBcbiAgICAgIHJldHVybiBhZGRUYXNrQ29udGVudDtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtnZXRBZGRUYXNrQ29udGVudCwgdmlld0xpc3RDb250YWluZXIsIHRvZG9MaXN0SXRlbXN9O1xuICB9KSgpO1xuXG4gIFxuICBjb25zdCBvcGVuQWRkVGFza01lbnUgPSAoKSA9PiB7XG4gICAgdmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBhZGRUYXNrTWVudSA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pZCA9ICdhZGQtdGFzay1tZW51LWNvbnRhaW5lcic7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRlbnQuaWQgPSAnYWRkLXRhc2stbWVudS1jb250ZW50JztcblxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGZvcm0uaWQgPSAnYWRkLXRhc2stbWVudS1mb3JtJztcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgY29uc3QgZm9ybVRleHRBcmVhID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybVRleHRBcmVhQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtVGV4dEFyZWFDb250ZW50LmlkID0gJ2Zvcm0tdGV4dGFyZWEtY29udGVudCc7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UZXh0QXJlYUNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0YXNrTmFtZUxhYmVsLmlkID0gJ3Rhc2stbmFtZSc7XG5cbiAgICAgICAgZm9ybVRleHRBcmVhQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIG5hbWUnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc1MDAnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFzay1uYW1lLWlucHV0JztcblxuICAgICAgICBcbiAgICAgICAgdGFza05hbWVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIGZvcm1UZXh0QXJlYUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCc7XG5cbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgfSkoKTtcblxuICAgICAgY29uc3QgZm9ybUJ0bnMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtQnRuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQnRuQ29udGVudC5pZCA9ICdmb3JtLWJ0bi1jb250ZW50JztcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdG5Db250ZW50KTtcblxuICAgICAgICBjb25zdCBsZWZ0U2lkZUJ0bnMgPSAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbGVmdENvbnRlbnQuaWQgPSAnZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGUnO1xuXG4gICAgICAgICAgZm9ybUJ0bkNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuXG4gICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtYnRuJyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHRhc2tEdWVEYXRlSW1nLnNyYyA9IHRhc2tEdWVEYXRlSW1hZ2U7XG4gICAgICAgICAgdGFza0R1ZURhdGVJbWcud2lkdGggPSAnMjAnO1xuICAgICAgICAgIHRhc2tEdWVEYXRlSW1nLmhlaWdodCA9ICcyMCc7XG5cbiAgICAgICAgICB0YXNrRHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW1nKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICB0YXNrRHVlRGF0ZVRleHQuaWQgPSAndGFzay1kdWUtZGF0ZS10ZXh0JztcbiAgICAgICAgICB0YXNrRHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuXG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZVRleHQpO1xuXG4gICAgICAgICAgbGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICB0YXNrUHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1idG4nKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgdGFza1Byb2plY3RJbWcuc3JjID0gdGFza1Byb2plY3RJbWFnZTtcbiAgICAgICAgICB0YXNrUHJvamVjdEltZy53aWR0aCA9ICcyMCc7XG4gICAgICAgICAgdGFza1Byb2plY3RJbWcuaGVpZ2h0ID0gJzIwJztcblxuICAgICAgICAgIHRhc2tQcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RJbWcpO1xuXG4gICAgICAgICAgY29uc3QgdGFza1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIHRhc2tQcm9qZWN0VGV4dC5pZCA9ICd0YXNrLXByb2plY3QtdGV4dCc7XG4gICAgICAgICAgdGFza1Byb2plY3RUZXh0LnRleHRDb250ZW50ID0gZ2V0QWN0aXZlUHJvamVjdCgpLmFjdGl2ZVByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICB0YXNrUHJvamVjdExhYmVsLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0VGV4dCk7XG5cbiAgICAgICAgICBsZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdExhYmVsKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCByaWdodFNpZGVCdG5zID0gKCgpID0+IHtcbiAgICAgICAgICBjb25zdCByaWdodENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICByaWdodENvbnRlbnQuaWQgPSAnZm9ybS1idG4tY29udGVudC1yaWdodC1zaWRlJztcblxuICAgICAgICAgIGZvcm1CdG5Db250ZW50LmFwcGVuZENoaWxkKHJpZ2h0Q29udGVudCk7XG5cbiAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICBcbiAgICAgICAgfSkoKTtcblxuICAgICAgfSkoKTtcblxuICAgICAgXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tBY3Rpb25CdXR0b25zID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlkID0gJ2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcic7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRlbnQuaWQgPSAnYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGVudCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi5pZCA9ICdjYW5jZWwtYnRuJztcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1tZW51LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgIHZpZXdMaXN0LnZpZXdMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdMaXN0LmdldEFkZFRhc2tDb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuXG4gICAgICBjb25zdCBhZGRUYXNrQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLmlkID0gJ2FkZC10YXNrLWJ0bic7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIHRhc2snO1xuICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChhZGRUYXNrKCkgIT09IHRydWUpIHJldHVybjtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLW1lbnUtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgdmlld0xpc3Qudmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQpO1xuICAgICAgICAgIGNvbnN0IGdldFZpZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXctbGlzdCcpO1xuICAgICAgICAgIHdoaWxlIChnZXRWaWV3TGlzdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBnZXRWaWV3TGlzdC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlld0xpc3QudG9kb0xpc3RJdGVtcy5yZW5kZXJUb2RvTGlzdEl0ZW1zKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcblxuICAgICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9KSgpO1xuICB9XG5cbiAgdmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWRkVGFza01lbnUpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodmlld0NvbnRhaW5lcik7XG4gIHJldHVybiB7dmlld0xpc3R9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmJveDsiLCJpbXBvcnQgcGx1c0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL3BsdXMucG5nJztcbmltcG9ydCB0cmFzaEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL3RyYXNoLnBuZyc7XG5pbXBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0LCBsb2FkTG9jYWxTdG9yYWdlLCBwcm9qZWN0TWVudSB9IGZyb20gJy4uL3RvZG8nO1xuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCB9IGZyb20gJy4uL3RvZG8nO1xuXG5jb25zdCBzaWRlYmFyRGl2ID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJDb250YWluZXIuaWQgPSAnc2lkZWJhci1jb250YWluZXInO1xuXG4gIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJDb250ZW50LmlkID0gJ3NpZGViYXItY29udGVudCc7XG4gIFxuICBjb25zdCB0b3BNZW51ID0gKCgpID0+IHtcbiAgICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0b3BNZW51LmlkID0gJ3RvcC1tZW51JztcblxuICAgIGNvbnN0IGluYm94TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGluYm94TGkuaWQgPSAnZmlsdGVyLWluYm94JztcbiAgICBpbmJveExpLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXN0b25lLTIwMCcpO1xuICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCkuYWN0aXZlUHJvamVjdC50aXRsZSA9PT0gXCJpbmJveFwiKSB7XG4gICAgICBpbmJveExpLmNsYXNzTGlzdC5hZGQoJ3N0b25lLTIwMCcpO1xuICAgIH1cbiAgICBpbmJveExpLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzAnKTtcblxuICAgIGluYm94TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcblxuICAgIGNvbnN0IGluYm94SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveEltYWdlLmNsYXNzTGlzdC52YWx1ZSA9ICdpbmJveC1pbWFnZSc7XG5cbiAgICBpbmJveExpLmFwcGVuZENoaWxkKGluYm94SW1hZ2UpO1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIGluYm94TGkuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG5cbiAgICB0b3BNZW51LmFwcGVuZENoaWxkKGluYm94TGkpO1xuXG4gICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wTWVudSk7XG4gIH0pKCk7XG5cbiAgY29uc3QgYm90dG9tTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm90dG9tTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21NZW51Q29udGVudC5pZCA9ICdib3R0b20tbWVudS1jb250ZW50JztcblxuXG4gICAgY29uc3QgYm90dG9tTWVudUhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21NZW51SGVhZGVyQ29udGVudC5pZCA9ICdib3R0b20tbWVudS1oZWFkZXItY29udGVudCc7XG4gICAgYm90dG9tTWVudUhlYWRlckNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0TWVudSk7XG5cbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChib3R0b21NZW51SGVhZGVyQ29udGVudCk7XG5cbiAgICBjb25zdCBib3R0b21NZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJvdHRvbU1lbnVIZWFkZXIuY2xhc3NMaXN0LnZhbHVlID0gJ21lbnUtaGVhZGVyJztcbiAgICBib3R0b21NZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgIGJvdHRvbU1lbnVIZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbU1lbnVIZWFkZXIpO1xuXG4gICAgY29uc3QgYm90dG9tTWVudUhlYWRlclBsdXNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbU1lbnVIZWFkZXJQbHVzSW1hZ2UuaWQgPSAnYm90dG9tLW1lbnUtaGVhZGVyLXBsdXMnO1xuXG4gICAgYm90dG9tTWVudUhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tTWVudUhlYWRlclBsdXNJbWFnZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3QuaWQgPSAncHJvamVjdC1saXN0JztcbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9IChwcm9qZWN0TGlzdEVsZW1lbnQgPSBwcm9qZWN0TGlzdCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdExpc3RBcnJheSA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGZvciAobGV0IGk9MTtpPHByb2plY3RMaXN0QXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLnRpdGxlO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbVRleHQpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLnNyYyA9IHRyYXNoSW1hZ2U7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLndpZHRoID0gMjA7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLmhlaWdodCA9IDIwO1xuICAgICAgcHJvamVjdExpc3RJdGVtVHJhc2hJbWFnZS5jbGFzc0xpc3QuYWRkKCd0cmFzaC1pbWFnZScpO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbVRyYXNoSW1hZ2UpO1xuICAgICAgcHJvamVjdExpc3RJdGVtVHJhc2hJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuICAgICAgXG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nLCAnaG92ZXItc3RvbmUtMjAwJyk7XG4gICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCkuaWQgPT09IGkpIHtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3N0b25lLTIwMCcpO1xuICAgICAgfVxuXG5cbiAgICAgIHByb2plY3RMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIFtpXSk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcbiAgICAgIFxuXG4gICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUHJvamVjdExpc3QoKTtcblxuICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbU1lbnVDb250ZW50KTtcblxuICAgIHJldHVybiB7cmVuZGVyUHJvamVjdExpc3R9O1xuICB9KSgpO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnQpO1xuXG4gIHJldHVybiB7c2lkZWJhckNvbnRhaW5lciwgYm90dG9tTWVudX07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXJEaXY7IiwiaW1wb3J0IGluYm94IGZyb20gXCIuL3BhZ2VzL2luYm94XCI7XG5pbXBvcnQgc2lkZWJhckRpdiBmcm9tIFwiLi9wYWdlcy9zaWRlYmFyXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCI7XG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tIFwiLi9hc3NldHMvaW1ncy9jbG9zZS5wbmdcIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICB0b2RvTGlzdDogW10sXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdC50b2RvTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBnZXRUb2RvTGlzdH07XG59XG5cbmNvbnN0IHN0b3JhZ2VGaXJzdExvYWQgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSByZXR1cm47XG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KCdpbmJveCcsICd0aGUgZGVmYXVsdCcsIHRydWUpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKGluYm94LmdldFByb2plY3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcm9qZWN0ID0gbG9hZExvY2FsU3RvcmFnZSgpWzBdLnRpdGxlLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSA0KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbm90ZXM6IFwiXCIsXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1RvZG87XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lLWlucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcblxuICAgIGlmICh0YXNrTmFtZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0W2dldEFjdGl2ZVByb2plY3QoKS5pZF07XG5cbiAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCBhY3RpdmVQcm9qZWN0LnRpdGxlKTtcbiAgICBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5saXN0SWQ7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBwcm9qZWN0TGlzdFtnZXRBY3RpdmVQcm9qZWN0KCkuaWRdLnRvZG9MaXN0LnNwbGljZSh0YXNrSWQsIDEpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG5cbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5jb25zdCBleHBhbmRUb2RvID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2hlY2tib3gnKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0W2dldEFjdGl2ZVByb2plY3QoKS5pZF07XG4gICAgY29uc3QgbGlzdElkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgIGNvbnN0IHNlbGVjdGVkVG9kbyA9IGFjdGl2ZVByb2plY3QudG9kb0xpc3RbbGlzdElkXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuaWQgPSAnZXhwYW5kZWQtdG9kby1jb250YWluZXInO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSAnZXhwYW5kZWQtdG9kby1jb250ZW50JztcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmluaXNoVG9kb0VkaXQpO1xuICAgIGNvbnRlbnQudG9kb0xpc3RJZCA9IGxpc3RJZDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9ICdleHBhbmRlZC10b2RvLWhlYWRlcic7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7c2VsZWN0ZWRUb2RvLnRpdGxlfWA7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG9IZWFkZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5jb25zdCBlZGl0VG9kb0hlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8taGVhZGVyJyk7XG4gICAgY29uc3QgcHJldmlvdXNIZWFkZXJUZXh0ID0gaGVhZGVyLnRleHRDb250ZW50O1xuXG5cbiAgICBjb25zdCBoZWFkZXJFZGl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoZWFkZXJFZGl0Qm94LmlkID0gJ2V4cGFuZGVkLXRvZG8taGVhZGVyLWVkaXQnO1xuICAgIGhlYWRlckVkaXRCb3gudHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgaGVhZGVyRWRpdEJveC5tYXhMZW5ndGggPSAnMzAnO1xuICAgIGhlYWRlckVkaXRCb3gubWluTGVuZ3RoID0gJzEnO1xuICAgIGhlYWRlckVkaXRCb3gudmFsdWUgPSBgJHtwcmV2aW91c0hlYWRlclRleHR9YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWRpdEJveCk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuaWQgPSAnaGVhZGVyLWJ1dHRvbi1jb250ZW50JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBoZWFkZXJDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoZWFkZXJDYW5jZWxCdG4uaWQgPSAnaGVhZGVyLWNhbmNlbC1idXR0b24nO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJDYW5jZWxCdG4pO1xuXG4gICAgY29uc3QgaGVhZGVyQWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVhZGVyQWRkQnRuLmlkID0gJ2hlYWRlci1hZGQtYnV0dG9uJztcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQWRkQnRuKTtcblxuXG4gICAgaGVhZGVyLnJlbW92ZSgpO1xufVxuXG5jb25zdCBmaW5pc2hUb2RvRWRpdCA9IChlKSA9PiB7XG4gICAgLypcbiAgICBjb25zdCBoZWFkZXJFZGl0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8taGVhZGVyLWVkaXQnKTtcbiAgICBpZiAoaGVhZGVyRWRpdEJveCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGhlYWRlckVkaXRCb3gudmFsdWU7IFxuICAgIGlmIChuZXdUb2RvVGl0bGUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kZWQtdG9kby1jb250ZW50Jyk7XG4gICAgaWYgKGUudGFyZ2V0LmlkICE9PSBcImV4cGFuZGVkLXRvZG8tY29udGVudFwiKSByZXR1cm47XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3RbZ2V0QWN0aXZlUHJvamVjdCgpLmlkXVxuICAgIGNvbnN0IGxpc3RJZCA9IGNvbnRlbnQudG9kb0xpc3RJZDtcbiAgICBjb25zdCBzZWxlY3RlZFRvZG8gPSBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0W2xpc3RJZF07XG5cblxuICAgIGZvciAobGV0IGk9MDtpPGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoO2krKykge1xuICAgICAgICBpZiAoY29udGVudC5jaGlsZHJlbltpXS5pZCA9PT0gJ2V4cGFuZGVkLXRvZG8tY29udGVudCcpIHtcbiAgICAgICAgICAgIHJldHVybjsgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdGVkVG9kby50aXRsZSA9IGAke25ld1RvZG9UaXRsZX1gO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICBcbiAgICBoZWFkZXJFZGl0Qm94LnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3SGVhZGVyLmlkID0gJ2V4cGFuZGVkLXRvZG8taGVhZGVyJztcbiAgICBuZXdIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvVGl0bGV9YDtcbiAgICBuZXdIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kb0hlYWRlcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0hlYWRlcik7XG4gICAgKi9cbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgY29uc3QgbGlzdElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UobGlzdElkLCAxKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbn1cblxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0cmFzaC1pbWFnZVwiKSByZXR1cm47XG4gICAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBpZiAocHJvamVjdExpc3RbbGlzdElkXS5zZWxlY3RlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3N0b25lLTIwMCcpO1xuXG4gICAgcHJvamVjdExpc3RbZ2V0QWN0aXZlUHJvamVjdCgpLmlkXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHByb2plY3RMaXN0W2xpc3RJZF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIFxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIHdoaWxlIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29udGVudC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVuZGVyKCk7XG5cbiAgICBcbn1cblxuY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3RJZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3hJZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8cHJvamVjdExpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLnNlbGVjdGVkID09PSBmYWxzZSkgY29udGludWU7XG4gICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJZCA9IGk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdElkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9qZWN0TGlzdFtpbmJveElkXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICAgICAgICByZXR1cm4gaW5ib3hJZDtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IGdldEFjdGl2ZVByb2plY3RJZCgpO1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0W2lkXTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgIHJldHVybiB7YWN0aXZlUHJvamVjdCwgaWR9O1xufVxuXG5jb25zdCBwcm9qZWN0TWVudSA9IChlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LW1lbnUtY29udGFpbmVyJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29udGVudC5pZCA9ICdwcm9qZWN0LW1lbnUtY29udGVudCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gJ3Byb2plY3QtbWVudS1oZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgcHJvamVjdCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5pZCA9ICdwcm9qZWN0LW1lbnUtbmFtZS1jb250ZW50JztcblxuICAgICAgICBjb25zdCBuYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVIZWFkZXIuaWQgPSAnbmFtZS1oZWFkZXInO1xuICAgICAgICBuYW1lSGVhZGVyLnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lLmlkID0gJ3Byb2plY3QtbWVudS1uYW1lLWlucHV0JztcbiAgICAgICAgbmFtZS50eXBlID0gJ3RleHRhcmVhJztcbiAgICAgICAgbmFtZS5tYXhMZW5ndGggPSAnMzAwJztcbiAgICAgICAgbmFtZS5taW5MZW5ndGggPSAnMSc7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHtjb250ZW50fTtcbiAgICB9KSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZS5jb250ZW50KTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1lbnUtbmFtZS1pbnB1dCcpO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0LmdldFByb2plY3QoKSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgICAgICB3aGlsZSAocHJvamVjdExpc3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyRGl2KCkuYm90dG9tTWVudS5yZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSAncHJvamVjdC1tZW51LWJ1dHRvbi1jb250ZW50JztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBhZGRCdG4udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgICAgIHJldHVybiB7Y29udGVudH07XG4gICAgfSkoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbnMuY29udGVudCk7XG59XG5cblxuXG5cblxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssIHN0b3JhZ2VGaXJzdExvYWQsIGxvYWRMb2NhbFN0b3JhZ2UsIHJlbW92ZVRhc2ssIHByb2plY3RNZW51LCByZW1vdmVQcm9qZWN0LCBzZWxlY3RQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0LCBleHBhbmRUb2RvXG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmJveC5jc3MnO1xuaW1wb3J0IHtmaXJzdExvYWR9IGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIjtcblxuZmlyc3RMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=