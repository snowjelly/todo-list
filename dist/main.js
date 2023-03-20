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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn, .cancel-btn, #title-cancel-button{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn, .add-btn, #title-add-button{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n#title-cancel-button, #title-add-button{\n  cursor: pointer;\n}\n\n.cancel-btn{\n  width: 60px;\n}\n\n.add-btn{\n  width: 60px;\n}\n\n#bottom-menu-header-content{\n  display: flex;\n  column-gap: 0.5rem;\n}\n\n#bottom-menu-header-plus{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#expanded-todo-title{\n  cursor: text;\n}\n\n#expanded-todo-edit-container {\n  border: solid grey 0.5px;\n  border-radius: 0.2rem;\n  width: 300px;\n  height: 100px;\n } \n\n\n#expanded-todo-title-edit{\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n  border: 0;\n}\n\n#expanded-todo-description-edit {\n  border: 0;\n  margin: 1rem 1rem 0.5rem;\n } \n\n\n#title-button-content {\n  display: flex;\n  justify-content: end;\n  margin: 0.5rem 1rem 0.5rem;\n  gap: 1rem;\n}\n\n\n#bottom-menu-header-content:hover{\n  cursor: pointer;\n}\n\n#bottom-menu-header-content:hover #bottom-menu-header-plus{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n}\n\n#bottom-menu-header-content:hover .menu-header{\n  color: #be123c;\n}\n\n.isolated-container {\n  isolation: isolate;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n  display: flex;\n  justify-content: center;\n}\n\n.isolated-content {\n  width: 450px;\n  height: 200px;\n  background-color: white;\n  margin: 50px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#expanded-todo-content{\n  display: grid;\n  grid-template-areas:  'checkbox title right-sidebar'\n                        'checkbox description right-sidebar';\n  grid-template-columns: min-content 1fr min-content;\n  grid-template-rows: min-content min-content;\n  width: max(300px, 40%);\n  height: max(300px, 40%);\n}\n\n#expanded-todo-title-content{\n  display: flex;\n  flex-direction: column;\n  grid-area: title;\n}\n\n#close{\n  grid-area: right-sidebar;\n  cursor: pointer;\n  margin: 3px;\n}\n\n#expanded-todo-description{\n  grid-area: description;\n  margin: 0rem 1rem 0.5rem;\n  font-family: 'Montserrat', sans-serif;\n}\n\n#project-menu-header, #expanded-todo-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n}\n\n#project-menu-name-content{\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 1rem 0.5rem;\n  flex: 1;\n}\n\n#name-header{\n  font-weight: 700;\n}\n\n#project-menu-button-content{\n  display: flex;\n  justify-content: right;\n  column-gap: 1.5rem;\n  margin: 0.5rem 1rem 1rem;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-list-item:hover .trash-image{\n  visibility: visible;\n}\n\n.trash-image{\n  visibility: collapse;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  grid-area: checkbox;\n}\n\n#checkbox-container{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#checkbox-container > * {\n  margin-right: 0;\n  margin-left: 10px;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n\n.stone-200{\n  background-color: var(--stone-200);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/inbox.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\nhtml, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n:root{\n  --stone-200: #e7e5e4;\n  font-family: 'Poppins', sans-serif;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  \"header header\"\n  \"sidebar view\"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-list-container{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n#view-header-content h1{\n  font-size: 1.2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  gap: 1rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n#header-container{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n#header-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#bottom-menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#add-task-content{\n  display: flex;\n  cursor: pointer;\n}\n\n#add-task-content:hover div#add-task-image{\n  background-image: url(/src/assets/imgs/plus-circle.png);\n}\n\n#add-task-content:hover p#add-task-text{\n  color: #be123c;\n}\n\n#add-task-image{\n  background-image: url(/src/assets/imgs/plus.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#task-due-date-text, #task-project-text{\n  margin-right: 2px;\n}\n\n#add-task-menu-content{\n  padding: 1rem;\n}\n\n#add-task-menu-form{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  row-gap: 6px;\n  height: fit-content;\n}\n\n#form-textarea-content{\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#form-textarea-content input{\n  border: 0;\n  outline: 0;\n}\n\n#form-btn-content-left-side{\n  display: flex;\n  column-gap: 10px;\n  width: fit-content;\n}\n\n.left-side-btn{\n  display: flex;\n  width: fit-content;\n  border: black solid 1px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  align-items: center;\n  padding: 3px;\n  column-gap: 3px;\n}\n\n#task-description{\n  display: flex;\n  flex: 1;\n}\n\n#task-description-input{\n  width: 100%;\n}\n\n#task-description-hint{\n  position: absolute;\n}\n\n#task-name{\n  display: flex;\n}\n\n#task-name-input{\n  flex: 1;\n  font-size: 1rem;\n}\n\n#add-task-action-buttons-container{\n  margin-top: 0.5rem;\n}\n\n#add-task-action-buttons-content{\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n#cancel-btn, .cancel-btn, #title-cancel-button{\n  width: 70px;\n  height: 30px;\n  border: 0;\n  border-radius: 5px;\n}\n\n#add-task-btn, .add-btn, #title-add-button{\n  width: 80px;\n  height: 30px;\n  background-color: #be123c;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n}\n\n#title-cancel-button, #title-add-button{\n  cursor: pointer;\n}\n\n.cancel-btn{\n  width: 60px;\n}\n\n.add-btn{\n  width: 60px;\n}\n\n#bottom-menu-header-content{\n  display: flex;\n  column-gap: 0.5rem;\n}\n\n#bottom-menu-header-plus{\n  background-image: url(/src/assets/imgs/plus.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n#expanded-todo-title{\n  cursor: text;\n}\n\n#expanded-todo-edit-container {\n  border: solid grey 0.5px;\n  border-radius: 0.2rem;\n  width: 300px;\n  height: 100px;\n } \n\n\n#expanded-todo-title-edit{\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n  border: 0;\n}\n\n#expanded-todo-description-edit {\n  border: 0;\n  margin: 1rem 1rem 0.5rem;\n } \n\n\n#title-button-content {\n  display: flex;\n  justify-content: end;\n  margin: 0.5rem 1rem 0.5rem;\n  gap: 1rem;\n}\n\n\n#bottom-menu-header-content:hover{\n  cursor: pointer;\n}\n\n#bottom-menu-header-content:hover #bottom-menu-header-plus{\n  background-image: url(/src/assets/imgs/plus-circle.png);\n  background-size: contain;\n}\n\n#bottom-menu-header-content:hover .menu-header{\n  color: #be123c;\n}\n\n.isolated-container {\n  isolation: isolate;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n  display: flex;\n  justify-content: center;\n}\n\n.isolated-content {\n  width: 450px;\n  height: 200px;\n  background-color: white;\n  margin: 50px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#expanded-todo-content{\n  display: grid;\n  grid-template-areas:  'checkbox title right-sidebar'\n                        'checkbox description right-sidebar';\n  grid-template-columns: min-content 1fr min-content;\n  grid-template-rows: min-content min-content;\n  width: max(300px, 40%);\n  height: max(300px, 40%);\n}\n\n#expanded-todo-title-content{\n  display: flex;\n  flex-direction: column;\n  grid-area: title;\n}\n\n#close{\n  grid-area: right-sidebar;\n  cursor: pointer;\n  margin: 3px;\n}\n\n#expanded-todo-description{\n  grid-area: description;\n  margin: 0rem 1rem 0.5rem;\n  font-family: 'Montserrat', sans-serif;\n}\n\n#project-menu-header, #expanded-todo-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem;\n}\n\n#project-menu-name-content{\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 1rem 0.5rem;\n  flex: 1;\n}\n\n#name-header{\n  font-weight: 700;\n}\n\n#project-menu-button-content{\n  display: flex;\n  justify-content: right;\n  column-gap: 1.5rem;\n  margin: 0.5rem 1rem 1rem;\n}\n\n.project-list-item{\n  border-radius: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-list-item:hover .trash-image{\n  visibility: visible;\n}\n\n.trash-image{\n  visibility: collapse;\n}\n\n.todo-list-item{\n  display: flex;\n  border-bottom: 1px solid var(--stone-200);\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.list-item-description{\n  color: grey;\n  font-size: 10px;\n}\n\n.list-item-content{\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox{\n  background-image: url(/src/assets/imgs/todo-unchecked.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  grid-area: checkbox;\n}\n\n#checkbox-container{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#checkbox-container > * {\n  margin-right: 0;\n  margin-left: 10px;\n}\n\n.priority-1{\n  background-color: red;\n}\n\n.priority-2{\n  background-color: orange;\n}\n\n.priority-3{\n  background-color: cyan;\n}\n\n.checkbox:hover{\n  background-image: url(/src/assets/imgs/todo-checked.png);\n  cursor: pointer;\n}\n\n.inbox-image{\n  background-image: url(/src/assets/imgs/inbox.png);\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.hover-stone-200:hover{\n  background-color: var(--stone-200);\n  cursor: pointer;\n}\n\n.stone-200{\n  background-color: var(--stone-200);\n}\n"],"sourceRoot":""}]);
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

  const contentDiv = () => {
    const get = () => {
      const div = document.querySelector('#content');
      div.appendChild(viewContainerDiv().get());
      return div;
    }

    const viewContainerDiv = () => {
      const get = () => {
        const div = document.createElement('div');
        div.id = `view-container`;
        div.appendChild(viewContentDiv().get());
        return div;
      }

      const viewContentDiv = () => {
        const get = () => {
          const div = document.createElement('div');
          div.id = 'view-content';
          div.appendChild(viewHeaderContainerDiv().get());
          div.appendChild(viewListContainerDiv().get());
          return div;
        }

        const viewHeaderContainerDiv = () => {
          const get = () => {
            const div = document.createElement('div');
            div.id = 'view-header-container';
            div.appendChild(viewHeaderContentDiv().get());
            return div;
          }
          const viewHeader = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)().activeProject.title;

          const viewHeaderContentDiv = () => {
            const get = () => {
              const div = document.createElement('div');
              div.id = 'view-header-content';
              div.innerHTML = `
              <h1>${viewHeader}</h1>
              `;
              return div;
            }
            
            return { get };
          }

          return { get };
        }

        const viewListContainerDiv = () => {
          const get = () => {
            const div = document.createElement('div');
            div.id = 'view-list-container';
            div.appendChild(viewListContentDiv().get());
            return div;
          }
          

          const viewListContentDiv = () => {
            const get = () => {
              const div = document.createElement('div');
              div.id = 'view-list-content';
              div.appendChild(viewListUl().get());
              return div;
            }

            const viewListUl = () => {
              const get = () => {
                const ul = document.createElement('ul');
                ul.id = 'view-list';
                return ul;
              }
              return { get };
            }

            return { get };
          }

          return { get };
        }


        
        return { get };
      }

      return { get };
    }

    return { get };
  }

  contentDiv().get();





/*

  const viewList = (() => {

    const todoListItems = (() => {

      const renderTodoListItems = () => {
        const activeProject = getActiveProject().activeProject;

        for (let i=0;i<viewList.children.length;i++) {
          viewList.children[i].remove();
        }


        for (let i=0;i<activeProject.todoList.length;i++) {

          const todoListItemLi = () => {

            const get = () => {
              const li = document.createElement('li');
              li.classList.value = 'todo-list-item';
              li.setAttribute('data-list-id', `${i}`);
              li.addEventListener('click', expandTodo);
              li.appendChild(todoListItemCheckboxDiv().get());
              li.appendChild(todoListItemContent().get());
              return li;
            }

            const todoListItemCheckboxDiv = () => {
              const get = () => {
                const div = document.createElement('div');
                div.classList.add('checkbox');
                div.addEventListener('click', removeTask);
                return div;
              }
              return { get };
            }

            const todoListItemContent = () => {

              const get = () => {
                const div = document.createElement('div');
                div.classList.add('list-item-content');
                div.appendChild(todoListItemTitleP().get());
                div.appendChild(todoListItemDescriptionP().get());
                return div;
              }
  
              const todoListItemTitleP = () => {

                const get = () => {
                  const p = document.createElement('p');
                  p.textContent = `${activeProject.todoList[i].title}`;
                  return p;
                }
                return { get };
              }
  
              const todoListItemDescriptionP = () => {
                
                const get = () => {
                  const p = document.createElement('p');
                  p.textContent = `${activeProject.todoList[i].description}`;
                  p.classList.add('list-item-description');
                  return p;
                }
                return { get };
              }
              return { get };
            }
            return { get }
          }




          
          viewList.appendChild(todoListItemLi().get());
        }
      };
      renderTodoListItems();

      return {renderTodoListItems};

    })();

    
    viewListContent.appendChild(viewList);

    

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
      container.classList.add('isolated-container');
      container.addEventListener('click', (e)=> {
        if (e.currentTarget.id === e.target.id) {
          container.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        }
      });

      const content = document.createElement('div');
      content.id = 'add-task-menu-content';
      content.classList.add('isolated-content');

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
          taskDueDateLabel.id = 'due-date-btn';
          taskDueDateLabel.setAttribute('for', 'due-date-input');
          taskDueDateLabel.addEventListener('click', addDueDateInput, {once: true});

          const taskDueDateImg = new Image();
          taskDueDateImg.src = taskDueDateImage;
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
          taskProjectImg.src = taskProjectImage;
          taskProjectImg.width = '20';
          taskProjectImg.height = '20';

          taskProjectLabel.appendChild(taskProjectImg);

          const taskProjectText = document.createElement('p');
          taskProjectText.id = 'task-project-text';
          taskProjectText.textContent = getActiveProject().activeProject.title;

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
      const addTaskMenuContainer = document.querySelector('#add-task-menu-container');
      const addTaskMenuContent = document.querySelector('#add-task-menu-content');
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
          addTaskMenuContainer.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        });
      })();

      const addTaskBtn = (() => {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.id = 'add-task-btn';
        addTaskBtn.textContent = 'Add task';
  
        content.appendChild(addTaskBtn);
  
        addTaskBtn.addEventListener('click', (e) => {
          if (addTask() !== true) return;
          container.remove();
          addTaskMenuContainer.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
          const getViewList = document.querySelector('#view-list');
          while (getViewList.children.length > 0) {
            getViewList.children[0].remove();
          }
          viewList.todoListItems.renderTodoListItems();
        });
      })();

      addTaskMenuContent.appendChild(container);
    })();
  }

  viewList.getAddTaskContent.addEventListener('click', openAddTaskMenu);

  return {viewList};
  */
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
/* harmony export */   "addDueDateInput": () => (/* binding */ addDueDateInput),
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
    const taskDueDate = document.querySelector('#due-date-input');
    let taskDueDateValue = '';

    if (taskName === "") {
        return;
    }

    if (taskDueDate !== null && taskDueDate.value !== '') {
        const year = taskDueDate.value.slice(0, 4);
        const month = taskDueDate.value.slice(5, 7) - 1;
        const day = taskDueDate.value.slice(8);
        taskDueDateValue = new Date(year, month, day);
    }

    const projectList = loadLocalStorage();
    const activeProject = projectList[getActiveProject().id];

    const newTodo = createTodo(taskName, taskDescription, activeProject.title, taskDueDateValue);
    activeProject.todoList.push(newTodo);

    updateLocalStorage(projectList);
    resetHTML();
}

const updateLocalStorage = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const removeTask = (e) => {
    const taskId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();
    const expandedTodoContent = document.querySelector('#expanded-todo-content');

    if (e.target.parentElement.id === 'checkbox-container') {
        projectList[getActiveProject().id].todoList.splice(expandedTodoContent.todoListId, 1);
    }
    else if (e.target.parentElement.className === 'todo-list-item') {
        projectList[getActiveProject().id].todoList.splice(taskId, 1);
    }
    updateLocalStorage(projectList);
    resetHTML();
}

const resetHTML = () => {
    const rootContent = document.querySelector('#content');
    while (rootContent.children.length > 0) {
        rootContent.children[0].remove();
    }
    (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__.render)();
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
        container.classList.add('isolated-container');
        container.addEventListener('click', (e) => {
            if (e.currentTarget.id === e.target.id) {
                closeExpandedTodo();
            }
        });
        
        const bodyContent = document.querySelector('#content');
        bodyContent.appendChild(container);
        
        return container;
    })();

    const content = document.createElement('div');
    content.id = 'expanded-todo-content';
    content.classList.add('isolated-content');
    content.todoListId = listId;
    container.appendChild(content);

    const close = new Image();
    close.src = _assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_3__;
    close.width = 30;
    close.height = 30;
    close.id = 'close';
    close.addEventListener('click', closeExpandedTodo);
    content.appendChild(close);

    const checkboxContainer = document.createElement('div');
    checkboxContainer.id = 'checkbox-container';
    content.appendChild(checkboxContainer);

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkbox');
    checkboxDiv.width = 24;
    checkboxDiv.height = 24;
    checkboxDiv.addEventListener('click', removeTask);
    checkboxContainer.appendChild(checkboxDiv);

    const titleContent = document.createElement('div');
    titleContent.id = 'expanded-todo-title-content';
    content.appendChild(titleContent);

    const title = document.createElement('div');
    title.id = 'expanded-todo-title';
    title.textContent = `${selectedTodo.title}`;
    title.addEventListener('click', editTodoTitle);
    titleContent.appendChild(title);

    const description = document.createElement('div');
    description.id = 'expanded-todo-description';
    description.textContent = `${selectedTodo.description}`;
    description.addEventListener('click', editTodoDescription);
    content.appendChild(description);
}

const closeExpandedTodo = () => {
    while (content.children.length > 0) {
        content.children[0].remove();
    }
    (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__.render)();
}

const addDueDateInput = (e) => {
    if (e.target.id === 'due-date-input') return;
    const container = document.querySelector('#due-date-btn');
    const dueDateText = document.createElement('input');

    dueDateText.id = 'due-date-input';
    dueDateText.type = 'date';
    container.appendChild(dueDateText);
}

const editTodoTitle = () => {
    /*
    const content = document.querySelector('#expanded-todo-title-content');

    const title = document.querySelector('#expanded-todo-title');
    const previousTitleText = title.textContent;
    content.prevTitleText = previousTitleText;

    const description = document.querySelector('#expanded-todo-description');
    const previousDescriptionText = description.textContent;
    content.prevDescText = previousDescriptionText;


    const editContainer = document.createElement('div');
    editContainer.id = 'expanded-todo-edit-container';
    content.appendChild(editContainer);
    

    const titleEditBox = document.createElement('input');
    titleEditBox.id = 'expanded-todo-title-edit';
    titleEditBox.type = 'textarea';
    titleEditBox.maxLength = '30';
    titleEditBox.minLength = '1';
    titleEditBox.value = `${previousTitleText}`;

    content.appendChild(titleEditBox);

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'title-button-content';
    content.appendChild(buttonContainer);

    const titleCancelBtn = document.createElement('button');
    titleCancelBtn.id = 'title-cancel-button';
    titleCancelBtn.textContent = 'Cancel';
    titleCancelBtn.addEventListener('click', cancelTodoEdit);
    buttonContainer.appendChild(titleCancelBtn);

    const titleAddBtn = document.createElement('button');
    titleAddBtn.id = 'title-add-button';
    titleAddBtn.textContent = 'Submit';
    titleAddBtn.addEventListener('click', finishTodoEdit);
    buttonContainer.appendChild(titleAddBtn);


    title.remove();
    */
}

const finishTodoEdit = (e) => {
    /*
    const titleEditBox = document.querySelector('#expanded-todo-title-edit');
    if (titleEditBox === null) return;
    const newTodoTitle = titleEditBox.value; 
    if (newTodoTitle === "") return;

    const content = document.querySelector('#expanded-todo-title-content');

    const parentContent = document.querySelector('#expanded-todo-content');

    const projectList = loadLocalStorage();
    const activeProject = projectList[getActiveProject().id]
    const listId = parentContent.todoListId;
    const selectedTodo = activeProject.todoList[listId];


    selectedTodo.title = `${newTodoTitle}`;

    updateLocalStorage(projectList);
    
    titleEditBox.remove();

    const titleBtnContent = document.querySelector('#title-button-content');
    titleBtnContent.remove();

    const newTitle = document.createElement('div');
    newTitle.id = 'expanded-todo-title';
    newTitle.textContent = `${newTodoTitle}`;
    newTitle.addEventListener('click', editTodoTitle);

    content.appendChild(newTitle);
    */
}

const cancelTodoEdit = () => {
    const titleBtnContent = document.querySelector('#title-button-content');
    titleBtnContent.remove();
    
    const titleEditBox = document.querySelector('#expanded-todo-title-edit');
    titleEditBox.remove();

    const titleContent = document.querySelector('#expanded-todo-title-content');

    const title = document.createElement('div');
    title.id = 'expanded-todo-title';
    title.textContent = titleContent.prevTitleText;
    title.addEventListener('click', editTodoTitle);
    titleContent.appendChild(title);
}

const editTodoDescription = (e) => {

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
        container.classList.add('isolated-container');
        container.addEventListener('click', (e) => {
            if (e.currentTarget.id === e.target.id) {
                container.remove();
            }
        });
        
        const bodyContent = document.querySelector('#content');
        bodyContent.appendChild(container);
        
        return container;
    })();

    const content = document.createElement('form');
    content.id = 'project-menu-content';
    content.classList.add('isolated-content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdKQUFtRDtBQUMvRiw0Q0FBNEMsMElBQTRDO0FBQ3hGLDRDQUE0Qyw4SkFBc0Q7QUFDbEcsNENBQTRDLDBKQUFvRDtBQUNoRyw0Q0FBNEMsNElBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JILHdIQUF3SDtBQUN4SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSwrREFBK0QsaUJBQWlCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxvQkFBb0IsZUFBZSxjQUFjLEdBQUcsVUFBVSx5QkFBeUIsdUNBQXVDLEdBQUcsYUFBYSxrQkFBa0Isc0NBQXNDLG9DQUFvQyxzRUFBc0UsR0FBRyxvQkFBb0Isa0JBQWtCLDRCQUE0QixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsZUFBZSxHQUFHLDRCQUE0QixzQkFBc0IsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQixzQkFBc0Isd0JBQXdCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxzQkFBc0IsOEJBQThCLHNCQUFzQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxzQkFBc0Isa0JBQWtCLG9CQUFvQixHQUFHLCtDQUErQyxzRUFBc0UsR0FBRyw0Q0FBNEMsbUJBQW1CLEdBQUcsb0JBQW9CLHNFQUFzRSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLDRDQUE0QyxzQkFBc0IsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQixZQUFZLDJCQUEyQixpQkFBaUIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsWUFBWSxHQUFHLGlDQUFpQyxjQUFjLGVBQWUsR0FBRyxnQ0FBZ0Msa0JBQWtCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLHNCQUFzQix3QkFBd0IsaUJBQWlCLG9CQUFvQixHQUFHLHNCQUFzQixrQkFBa0IsWUFBWSxHQUFHLDRCQUE0QixnQkFBZ0IsR0FBRywyQkFBMkIsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxxQkFBcUIsWUFBWSxvQkFBb0IsR0FBRyx1Q0FBdUMsdUJBQXVCLEdBQUcscUNBQXFDLGtCQUFrQix5QkFBeUIsY0FBYyxHQUFHLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLGNBQWMsdUJBQXVCLEdBQUcsK0NBQStDLGdCQUFnQixpQkFBaUIsOEJBQThCLGlCQUFpQixjQUFjLHVCQUF1QixHQUFHLDRDQUE0QyxvQkFBb0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsYUFBYSxnQkFBZ0IsR0FBRyxnQ0FBZ0Msa0JBQWtCLHVCQUF1QixHQUFHLDZCQUE2QixzRUFBc0UsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsbUNBQW1DLDZCQUE2QiwwQkFBMEIsaUJBQWlCLGtCQUFrQixLQUFLLGdDQUFnQyxzQkFBc0IscUJBQXFCLDZCQUE2QixjQUFjLEdBQUcscUNBQXFDLGNBQWMsNkJBQTZCLEtBQUssNkJBQTZCLGtCQUFrQix5QkFBeUIsK0JBQStCLGNBQWMsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsK0RBQStELHNFQUFzRSw2QkFBNkIsR0FBRyxtREFBbUQsbUJBQW1CLEdBQUcseUJBQXlCLHVCQUF1Qix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxzQ0FBc0Msa0JBQWtCLDRCQUE0QixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLDRCQUE0QixpQkFBaUIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIsa0JBQWtCLHVIQUF1SCx1REFBdUQsZ0RBQWdELDJCQUEyQiw0QkFBNEIsR0FBRyxpQ0FBaUMsa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyxXQUFXLDZCQUE2QixvQkFBb0IsZ0JBQWdCLEdBQUcsK0JBQStCLDJCQUEyQiw2QkFBNkIsMENBQTBDLEdBQUcsZ0RBQWdELHNCQUFzQixxQkFBcUIsNkJBQTZCLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLFlBQVksR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsaUNBQWlDLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDZCQUE2QixHQUFHLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMENBQTBDLHdCQUF3QixHQUFHLGlCQUFpQix5QkFBeUIsR0FBRyxvQkFBb0Isa0JBQWtCLDhDQUE4QyxrQkFBa0Isb0JBQW9CLEdBQUcsMkJBQTJCLGdCQUFnQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsc0VBQXNFLGlDQUFpQyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyw2QkFBNkIsb0JBQW9CLHNCQUFzQixHQUFHLGdCQUFnQiwwQkFBMEIsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLG9CQUFvQixzRUFBc0Usb0JBQW9CLEdBQUcsaUJBQWlCLHNFQUFzRSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLDJCQUEyQix1Q0FBdUMsb0JBQW9CLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRyxTQUFTLHVGQUF1RixVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksdUdBQXVHLGtGQUFrRix5QkFBeUIsaUJBQWlCLEdBQUcsV0FBVyxx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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFdBQVc7O0FBRWxGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVULE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclo0QjtBQUNFO0FBQ3dCO0FBQ25COztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsZ0RBQWE7O0FBRW5EO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBTTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNiRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDb0I7O0FBRWhELCtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmJveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5ib3guY3NzPzZiOWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2ZpcnN0TG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1ncy9wbHVzLWNpcmNsZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3BsdXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1ncy90b2RvLXVuY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL3RvZG8tY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWdzL2luYm94LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLCBsaXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHksIHVsLCBsaSwgcHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290e1xcbiAgLS1zdG9uZS0yMDA6ICNlN2U1ZTQ7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcInNpZGViYXIgdmlld1xcXCJcXG4gIDtcXG59XFxuXFxuI3ZpZXctY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiB2aWV3O1xcbn1cXG5cXG4jdmlldy1saXN0LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdmlldy1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jdmlldy1oZWFkZXItY29udGVudCBoMXtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jc2lkZWJhci1jb250ZW50e1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbiNzaWRlYmFyLWNvbnRhaW5lcntcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuXFxuI2ZpbHRlci1pbmJveHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNoZWFkZXItY29udGFpbmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMTIzYztcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYm90dG9tLW1lbnUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGQtdGFzay1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWNvbnRlbnQ6aG92ZXIgZGl2I2FkZC10YXNrLWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuI2FkZC10YXNrLWNvbnRlbnQ6aG92ZXIgcCNhZGQtdGFzay10ZXh0e1xcbiAgY29sb3I6ICNiZTEyM2M7XFxufVxcblxcbiNhZGQtdGFzay1pbWFnZXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuI3Rhc2stZHVlLWRhdGUtdGV4dCwgI3Rhc2stcHJvamVjdC10ZXh0e1xcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcblxcbiNhZGQtdGFzay1tZW51LWNvbnRlbnR7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stbWVudS1mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogNnB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2Zvcm0tdGV4dGFyZWEtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2Zvcm0tdGV4dGFyZWEtY29udGVudCBpbnB1dHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbiNmb3JtLWJ0bi1jb250ZW50LWxlZnQtc2lkZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGNvbHVtbi1nYXA6IDNweDtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24taGludHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3Rhc2stbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXR7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVye1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NhbmNlbC1idG4sIC5jYW5jZWwtYnRuLCAjdGl0bGUtY2FuY2VsLWJ1dHRvbntcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuLCAuYWRkLWJ0biwgI3RpdGxlLWFkZC1idXR0b257XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTEyM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0aXRsZS1jYW5jZWwtYnV0dG9uLCAjdGl0bGUtYWRkLWJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbC1idG57XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmFkZC1idG57XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1wbHVze1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZXtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tZWRpdC1jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDAuNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gfSBcXG5cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZS1lZGl0e1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMC41cmVtO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby1kZXNjcmlwdGlvbi1lZGl0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG4gfSBcXG5cXG5cXG4jdGl0bGUtYnV0dG9uLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50OmhvdmVyICNib3R0b20tbWVudS1oZWFkZXItcGx1c3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlciAubWVudS1oZWFkZXJ7XFxuICBjb2xvcjogI2JlMTIzYztcXG59XFxuXFxuLmlzb2xhdGVkLWNvbnRhaW5lciB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pc29sYXRlZC1jb250ZW50IHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tY29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgJ2NoZWNrYm94IHRpdGxlIHJpZ2h0LXNpZGViYXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoZWNrYm94IGRlc2NyaXB0aW9uIHJpZ2h0LXNpZGViYXInO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1heCgzMDBweCwgNDAlKTtcXG4gIGhlaWdodDogbWF4KDMwMHB4LCA0MCUpO1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4jY2xvc2V7XFxuICBncmlkLWFyZWE6IHJpZ2h0LXNpZGViYXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tZGVzY3JpcHRpb257XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgbWFyZ2luOiAwcmVtIDFyZW0gMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1oZWFkZXIsICNleHBhbmRlZC10b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1uYW1lLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNuYW1lLWhlYWRlcntcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNwcm9qZWN0LW1lbnUtYnV0dG9uLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVte1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbTpob3ZlciAudHJhc2gtaW1hZ2V7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udHJhc2gtaW1hZ2V7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS0yMDApO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbntcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbn1cXG5cXG4jY2hlY2tib3gtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NoZWNrYm94LWNvbnRhaW5lciA+ICoge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS0xe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpb3JpdHktMntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LTN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5ib3gtaW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5ob3Zlci1zdG9uZS0yMDA6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZS0yMDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RvbmUtMjAwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmJveC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsK0JBQStCO0VBQy9COzs7RUFHQTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlB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YUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQTBEO0VBQzFELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBd0Q7RUFDeEQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5LCAjY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwsIGxpe1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSwgdWwsIGxpLCBwe1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAtLXN0b25lLTIwMDogI2U3ZTVlNDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICBcXFwic2lkZWJhciB2aWV3XFxcIlxcbiAgO1xcbn1cXG5cXG4jdmlldy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHZpZXc7XFxufVxcblxcbiN2aWV3LWxpc3QtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN2aWV3LWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbiN2aWV3LWhlYWRlci1jb250ZW50IGgxe1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLWNvbnRlbnR7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuI3NpZGViYXItY29udGFpbmVye1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbn1cXG5cXG4jZmlsdGVyLWluYm94e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2hlYWRlci1jb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUxMjNjO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiNoZWFkZXItY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNib3R0b20tbWVudS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudDpob3ZlciBkaXYjYWRkLXRhc2staW1hZ2V7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy9wbHVzLWNpcmNsZS5wbmcpO1xcbn1cXG5cXG4jYWRkLXRhc2stY29udGVudDpob3ZlciBwI2FkZC10YXNrLXRleHR7XFxuICBjb2xvcjogI2JlMTIzYztcXG59XFxuXFxuI2FkZC10YXNrLWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvcGx1cy5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiN0YXNrLWR1ZS1kYXRlLXRleHQsICN0YXNrLXByb2plY3QtdGV4dHtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG5cXG4jYWRkLXRhc2stbWVudS1jb250ZW50e1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLW1lbnUtZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDZweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNmb3JtLXRleHRhcmVhLWNvbnRlbnQgaW5wdXR7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmxlZnQtc2lkZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2x1bW4tZ2FwOiAzcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWhpbnR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0YXNrLW5hbWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFzay1uYW1lLWlucHV0e1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbi1idXR0b25zLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjYW5jZWwtYnRuLCAuY2FuY2VsLWJ0biwgI3RpdGxlLWNhbmNlbC1idXR0b257XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biwgLmFkZC1idG4sICN0aXRsZS1hZGQtYnV0dG9ue1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUxMjNjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdGl0bGUtY2FuY2VsLWJ1dHRvbiwgI3RpdGxlLWFkZC1idXR0b257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWwtYnRue1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5hZGQtYnRue1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItcGx1c3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWdzL3BsdXMucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZXtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tZWRpdC1jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDAuNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gfSBcXG5cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZS1lZGl0e1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMC41cmVtO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby1kZXNjcmlwdGlvbi1lZGl0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG4gfSBcXG5cXG5cXG4jdGl0bGUtYnV0dG9uLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvdHRvbS1tZW51LWhlYWRlci1jb250ZW50OmhvdmVyICNib3R0b20tbWVudS1oZWFkZXItcGx1c3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWdzL3BsdXMtY2lyY2xlLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiNib3R0b20tbWVudS1oZWFkZXItY29udGVudDpob3ZlciAubWVudS1oZWFkZXJ7XFxuICBjb2xvcjogI2JlMTIzYztcXG59XFxuXFxuLmlzb2xhdGVkLWNvbnRhaW5lciB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pc29sYXRlZC1jb250ZW50IHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tY29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgJ2NoZWNrYm94IHRpdGxlIHJpZ2h0LXNpZGViYXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoZWNrYm94IGRlc2NyaXB0aW9uIHJpZ2h0LXNpZGViYXInO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1heCgzMDBweCwgNDAlKTtcXG4gIGhlaWdodDogbWF4KDMwMHB4LCA0MCUpO1xcbn1cXG5cXG4jZXhwYW5kZWQtdG9kby10aXRsZS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4jY2xvc2V7XFxuICBncmlkLWFyZWE6IHJpZ2h0LXNpZGViYXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuI2V4cGFuZGVkLXRvZG8tZGVzY3JpcHRpb257XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgbWFyZ2luOiAwcmVtIDFyZW0gMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1oZWFkZXIsICNleHBhbmRlZC10b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbWVudS1uYW1lLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNuYW1lLWhlYWRlcntcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNwcm9qZWN0LW1lbnUtYnV0dG9uLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVte1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbTpob3ZlciAudHJhc2gtaW1hZ2V7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udHJhc2gtaW1hZ2V7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS0yMDApO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbntcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvdG9kby11bmNoZWNrZWQucG5nKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbn1cXG5cXG4jY2hlY2tib3gtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NoZWNrYm94LWNvbnRhaW5lciA+ICoge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS0xe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpb3JpdHktMntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LTN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1ncy90b2RvLWNoZWNrZWQucG5nKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluYm94LWltYWdle1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltZ3MvaW5ib3gucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaG92ZXItc3RvbmUtMjAwOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUtMjAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0b25lLTIwMHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lLTIwMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmJveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luYm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaGVhZGVyRGl2IGZyb20gJy4uL3BhZ2VzL2hlYWRlcic7XG5pbXBvcnQgaW5ib3ggZnJvbSAnLi4vcGFnZXMvaW5ib3gnO1xuaW1wb3J0IHNpZGViYXJEaXYgZnJvbSAnLi4vcGFnZXMvc2lkZWJhcic7XG5pbXBvcnQgeyBzdG9yYWdlRmlyc3RMb2FkIH0gZnJvbSAnLi4vdG9kbyc7XG5cbmNvbnN0IGZpcnN0TG9hZCA9ICgpID0+IHtcbiAgc3RvcmFnZUZpcnN0TG9hZCgpO1xuICByZW5kZXIoKTtcbn1cblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gaGVhZGVyRGl2KCk7XG4gIGNvbnN0IHNpZGViYXIgPSBzaWRlYmFyRGl2KCkuc2lkZWJhckNvbnRhaW5lcjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIGluYm94KCk7XG59XG5cbmV4cG9ydCB7Zmlyc3RMb2FkLCByZW5kZXJ9OyIsImltcG9ydCBzaWRlYmFySGFtYnVyZ2VyTWVudUljb24gZnJvbSAnLi4vYXNzZXRzL2ltZ3Mvc2lkZWJhci1oYW1idXJnZXItbWVudS1pY29uLnBuZydcblxuY29uc3QgaGVhZGVyRGl2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmlkID0gJ2hlYWRlci1jb250YWluZXInO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGVudC5pZCA9ICdoZWFkZXItY29udGVudCc7XG5cbiAgY29uc3Qgc2lkZWJhckhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2lkZWJhckhhbWJ1cmdlck1lbnUuc3JjID0gc2lkZWJhckhhbWJ1cmdlck1lbnVJY29uO1xuICBzaWRlYmFySGFtYnVyZ2VyTWVudS5pZCA9ICdzaWRlYmFyLWhhbWJ1cmdlci1tZW51JztcbiAgc2lkZWJhckhhbWJ1cmdlck1lbnUud2lkdGggPSAnMjgnO1xuICBzaWRlYmFySGFtYnVyZ2VyTWVudS5oZWlnaHQgPSAnMjgnO1xuXG4gIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckhhbWJ1cmdlck1lbnUpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcblxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJEaXY7IiwiaW1wb3J0IHRhc2tEdWVEYXRlSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltZ3MvZHVlLWRhdGUucG5nJztcbmltcG9ydCB0YXNrUHJvamVjdEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL2luYm94LnBuZyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBnZXRBY3RpdmVQcm9qZWN0LCBleHBhbmRUb2RvLCByZW1vdmVUYXNrLCBhZGREdWVEYXRlSW5wdXR9IGZyb20gXCIuLi90b2RvXCI7XG5cbmNvbnN0IGluYm94ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3Q29udGFpbmVyRGl2KCkuZ2V0KCkpO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3Q29udGFpbmVyRGl2ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gYHZpZXctY29udGFpbmVyYDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXdDb250ZW50RGl2KCkuZ2V0KCkpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2aWV3Q29udGVudERpdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5pZCA9ICd2aWV3LWNvbnRlbnQnO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3SGVhZGVyQ29udGFpbmVyRGl2KCkuZ2V0KCkpO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3TGlzdENvbnRhaW5lckRpdigpLmdldCgpKTtcbiAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgdmlld0hlYWRlckNvbnRhaW5lckRpdiA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5pZCA9ICd2aWV3LWhlYWRlci1jb250YWluZXInO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXdIZWFkZXJDb250ZW50RGl2KCkuZ2V0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgdmlld0hlYWRlciA9IGdldEFjdGl2ZVByb2plY3QoKS5hY3RpdmVQcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgY29uc3Qgdmlld0hlYWRlckNvbnRlbnREaXYgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBkaXYuaWQgPSAndmlldy1oZWFkZXItY29udGVudCc7XG4gICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxoMT4ke3ZpZXdIZWFkZXJ9PC9oMT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgZ2V0IH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHsgZ2V0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aWV3TGlzdENvbnRhaW5lckRpdiA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5pZCA9ICd2aWV3LWxpc3QtY29udGFpbmVyJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3TGlzdENvbnRlbnREaXYoKS5nZXQoKSk7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICAgIGNvbnN0IHZpZXdMaXN0Q29udGVudERpdiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGRpdi5pZCA9ICd2aWV3LWxpc3QtY29udGVudCc7XG4gICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3TGlzdFVsKCkuZ2V0KCkpO1xuICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2aWV3TGlzdFVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIHVsLmlkID0gJ3ZpZXctbGlzdCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7IGdldCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyBnZXQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4geyBnZXQgfTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGdldCB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBnZXQgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXQgfTtcbiAgfVxuXG4gIGNvbnRlbnREaXYoKS5nZXQoKTtcblxuXG5cblxuXG4vKlxuXG4gIGNvbnN0IHZpZXdMaXN0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHRvZG9MaXN0SXRlbXMgPSAoKCkgPT4ge1xuXG4gICAgICBjb25zdCByZW5kZXJUb2RvTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpLmFjdGl2ZVByb2plY3Q7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dmlld0xpc3QuY2hpbGRyZW4ubGVuZ3RoO2krKykge1xuICAgICAgICAgIHZpZXdMaXN0LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpPTA7aTxhY3RpdmVQcm9qZWN0LnRvZG9MaXN0Lmxlbmd0aDtpKyspIHtcblxuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbUxpID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LnZhbHVlID0gJ3RvZG8tbGlzdC1pdGVtJztcbiAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBgJHtpfWApO1xuICAgICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFRvZG8pO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW1DaGVja2JveERpdigpLmdldCgpKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtQ29udGVudCgpLmdldCgpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b2RvTGlzdEl0ZW1DaGVja2JveERpdiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2spO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHsgZ2V0IH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbUNvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0tY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW1UaXRsZVAoKS5nZXQoKSk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbURlc2NyaXB0aW9uUCgpLmdldCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBjb25zdCB0b2RvTGlzdEl0ZW1UaXRsZVAgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVByb2plY3QudG9kb0xpc3RbaV0udGl0bGV9YDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBnZXQgfTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtRGVzY3JpcHRpb25QID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7YWN0aXZlUHJvamVjdC50b2RvTGlzdFtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBnZXQgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4geyBnZXQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGdldCB9XG4gICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgdmlld0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtTGkoKS5nZXQoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZW5kZXJUb2RvTGlzdEl0ZW1zKCk7XG5cbiAgICAgIHJldHVybiB7cmVuZGVyVG9kb0xpc3RJdGVtc307XG5cbiAgICB9KSgpO1xuXG4gICAgXG4gICAgdmlld0xpc3RDb250ZW50LmFwcGVuZENoaWxkKHZpZXdMaXN0KTtcblxuICAgIFxuXG4gICAgY29uc3QgZ2V0QWRkVGFza0NvbnRlbnQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYWRkVGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZFRhc2tDb250ZW50LmlkID0gJ2FkZC10YXNrLWNvbnRlbnQnO1xuICAgICAgXG4gICAgICBjb25zdCBhZGRUYXNrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZFRhc2tJbWFnZS5pZCA9ICdhZGQtdGFzay1pbWFnZSc7XG4gICAgXG4gICAgICBhZGRUYXNrQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrSW1hZ2UpO1xuICAgIFxuICAgICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBhZGRUYXNrVGV4dC5pZCA9ICdhZGQtdGFzay10ZXh0JztcbiAgICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJztcbiAgICBcbiAgICAgIGFkZFRhc2tDb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcblxuICAgICAgdmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRlbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gYWRkVGFza0NvbnRlbnQ7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7Z2V0QWRkVGFza0NvbnRlbnQsIHZpZXdMaXN0Q29udGFpbmVyLCB0b2RvTGlzdEl0ZW1zfTtcbiAgfSkoKTtcblxuICBcbiAgY29uc3Qgb3BlbkFkZFRhc2tNZW51ID0gKCkgPT4ge1xuICAgIHZpZXdMaXN0LmdldEFkZFRhc2tDb250ZW50LnJlbW92ZSgpO1xuXG4gICAgY29uc3QgYWRkVGFza01lbnUgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaWQgPSAnYWRkLXRhc2stbWVudS1jb250YWluZXInO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzb2xhdGVkLWNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICB2aWV3TGlzdC52aWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TGlzdC5nZXRBZGRUYXNrQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250ZW50LmlkID0gJ2FkZC10YXNrLW1lbnUtY29udGVudCc7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lzb2xhdGVkLWNvbnRlbnQnKTtcblxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGZvcm0uaWQgPSAnYWRkLXRhc2stbWVudS1mb3JtJztcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgY29uc3QgZm9ybVRleHRBcmVhID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybVRleHRBcmVhQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtVGV4dEFyZWFDb250ZW50LmlkID0gJ2Zvcm0tdGV4dGFyZWEtY29udGVudCc7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UZXh0QXJlYUNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0YXNrTmFtZUxhYmVsLmlkID0gJ3Rhc2stbmFtZSc7XG5cbiAgICAgICAgZm9ybVRleHRBcmVhQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIG5hbWUnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc1MDAnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFzay1uYW1lLWlucHV0JztcblxuICAgICAgICBcbiAgICAgICAgdGFza05hbWVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIGZvcm1UZXh0QXJlYUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCc7XG5cbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgfSkoKTtcblxuICAgICAgY29uc3QgZm9ybUJ0bnMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtQnRuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQnRuQ29udGVudC5pZCA9ICdmb3JtLWJ0bi1jb250ZW50JztcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdG5Db250ZW50KTtcblxuICAgICAgICBjb25zdCBsZWZ0U2lkZUJ0bnMgPSAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbGVmdENvbnRlbnQuaWQgPSAnZm9ybS1idG4tY29udGVudC1sZWZ0LXNpZGUnO1xuXG4gICAgICAgICAgZm9ybUJ0bkNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuXG4gICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtYnRuJyk7XG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5pZCA9ICdkdWUtZGF0ZS1idG4nO1xuICAgICAgICAgIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUtaW5wdXQnKTtcbiAgICAgICAgICB0YXNrRHVlRGF0ZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRHVlRGF0ZUlucHV0LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB0YXNrRHVlRGF0ZUltZy5zcmMgPSB0YXNrRHVlRGF0ZUltYWdlO1xuICAgICAgICAgIHRhc2tEdWVEYXRlSW1nLndpZHRoID0gJzIwJztcbiAgICAgICAgICB0YXNrRHVlRGF0ZUltZy5oZWlnaHQgPSAnMjAnO1xuXG4gICAgICAgICAgdGFza0R1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUltZyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdGFza0R1ZURhdGVUZXh0LmlkID0gJ3Rhc2stZHVlLWRhdGUtdGV4dCc7XG4gICAgICAgICAgdGFza0R1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJztcblxuICAgICAgICAgIHRhc2tEdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVUZXh0KTtcblxuICAgICAgICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuXG4gICAgICAgICAgY29uc3QgdGFza1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgdGFza1Byb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtYnRuJyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHRhc2tQcm9qZWN0SW1nLnNyYyA9IHRhc2tQcm9qZWN0SW1hZ2U7XG4gICAgICAgICAgdGFza1Byb2plY3RJbWcud2lkdGggPSAnMjAnO1xuICAgICAgICAgIHRhc2tQcm9qZWN0SW1nLmhlaWdodCA9ICcyMCc7XG5cbiAgICAgICAgICB0YXNrUHJvamVjdExhYmVsLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0SW1nKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICB0YXNrUHJvamVjdFRleHQuaWQgPSAndGFzay1wcm9qZWN0LXRleHQnO1xuICAgICAgICAgIHRhc2tQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGdldEFjdGl2ZVByb2plY3QoKS5hY3RpdmVQcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgdGFza1Byb2plY3RMYWJlbC5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdFRleHQpO1xuXG4gICAgICAgICAgbGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RMYWJlbCk7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQnRucyA9ICgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmlnaHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcmlnaHRDb250ZW50LmlkID0gJ2Zvcm0tYnRuLWNvbnRlbnQtcmlnaHQtc2lkZSc7XG5cbiAgICAgICAgICBmb3JtQnRuQ29udGVudC5hcHBlbmRDaGlsZChyaWdodENvbnRlbnQpO1xuXG4gICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgXG4gICAgICAgIH0pKCk7XG5cbiAgICAgIH0pKCk7XG5cbiAgICAgIFxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBhZGRUYXNrQWN0aW9uQnV0dG9ucyA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBhZGRUYXNrTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1tZW51LWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgYWRkVGFza01lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLW1lbnUtY29udGVudCcpO1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaWQgPSAnYWRkLXRhc2stYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyJztcblxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudC5pZCA9ICdhZGQtdGFzay1hY3Rpb24tYnV0dG9ucy1jb250ZW50JztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnRuLmlkID0gJ2NhbmNlbC1idG4nO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgYWRkVGFza01lbnVDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgdmlld0xpc3Qudmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkLXRhc2stYnRuJztcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGFkZFRhc2soKSAhPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICBhZGRUYXNrTWVudUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICB2aWV3TGlzdC52aWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TGlzdC5nZXRBZGRUYXNrQ29udGVudCk7XG4gICAgICAgICAgY29uc3QgZ2V0Vmlld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1saXN0Jyk7XG4gICAgICAgICAgd2hpbGUgKGdldFZpZXdMaXN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdldFZpZXdMaXN0LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWV3TGlzdC50b2RvTGlzdEl0ZW1zLnJlbmRlclRvZG9MaXN0SXRlbXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuXG4gICAgICBhZGRUYXNrTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9KSgpO1xuICB9XG5cbiAgdmlld0xpc3QuZ2V0QWRkVGFza0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWRkVGFza01lbnUpO1xuXG4gIHJldHVybiB7dmlld0xpc3R9O1xuICAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmJveDsiLCJpbXBvcnQgcGx1c0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL3BsdXMucG5nJztcbmltcG9ydCB0cmFzaEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWdzL3RyYXNoLnBuZyc7XG5pbXBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0LCBsb2FkTG9jYWxTdG9yYWdlLCBwcm9qZWN0TWVudSB9IGZyb20gJy4uL3RvZG8nO1xuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCB9IGZyb20gJy4uL3RvZG8nO1xuXG5jb25zdCBzaWRlYmFyRGl2ID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJDb250YWluZXIuaWQgPSAnc2lkZWJhci1jb250YWluZXInO1xuXG4gIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJDb250ZW50LmlkID0gJ3NpZGViYXItY29udGVudCc7XG4gIFxuICBjb25zdCB0b3BNZW51ID0gKCgpID0+IHtcbiAgICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0b3BNZW51LmlkID0gJ3RvcC1tZW51JztcblxuICAgIGNvbnN0IGluYm94TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGluYm94TGkuaWQgPSAnZmlsdGVyLWluYm94JztcbiAgICBpbmJveExpLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXN0b25lLTIwMCcpO1xuICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCkuYWN0aXZlUHJvamVjdC50aXRsZSA9PT0gXCJpbmJveFwiKSB7XG4gICAgICBpbmJveExpLmNsYXNzTGlzdC5hZGQoJ3N0b25lLTIwMCcpO1xuICAgIH1cbiAgICBpbmJveExpLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzAnKTtcblxuICAgIGluYm94TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcblxuICAgIGNvbnN0IGluYm94SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveEltYWdlLmNsYXNzTGlzdC52YWx1ZSA9ICdpbmJveC1pbWFnZSc7XG5cbiAgICBpbmJveExpLmFwcGVuZENoaWxkKGluYm94SW1hZ2UpO1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIGluYm94TGkuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG5cbiAgICB0b3BNZW51LmFwcGVuZENoaWxkKGluYm94TGkpO1xuXG4gICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wTWVudSk7XG4gIH0pKCk7XG5cbiAgY29uc3QgYm90dG9tTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm90dG9tTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21NZW51Q29udGVudC5pZCA9ICdib3R0b20tbWVudS1jb250ZW50JztcblxuXG4gICAgY29uc3QgYm90dG9tTWVudUhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21NZW51SGVhZGVyQ29udGVudC5pZCA9ICdib3R0b20tbWVudS1oZWFkZXItY29udGVudCc7XG4gICAgYm90dG9tTWVudUhlYWRlckNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0TWVudSk7XG5cbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChib3R0b21NZW51SGVhZGVyQ29udGVudCk7XG5cbiAgICBjb25zdCBib3R0b21NZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJvdHRvbU1lbnVIZWFkZXIuY2xhc3NMaXN0LnZhbHVlID0gJ21lbnUtaGVhZGVyJztcbiAgICBib3R0b21NZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgIGJvdHRvbU1lbnVIZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbU1lbnVIZWFkZXIpO1xuXG4gICAgY29uc3QgYm90dG9tTWVudUhlYWRlclBsdXNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbU1lbnVIZWFkZXJQbHVzSW1hZ2UuaWQgPSAnYm90dG9tLW1lbnUtaGVhZGVyLXBsdXMnO1xuXG4gICAgYm90dG9tTWVudUhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tTWVudUhlYWRlclBsdXNJbWFnZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3QuaWQgPSAncHJvamVjdC1saXN0JztcbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9IChwcm9qZWN0TGlzdEVsZW1lbnQgPSBwcm9qZWN0TGlzdCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdExpc3RBcnJheSA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGZvciAobGV0IGk9MTtpPHByb2plY3RMaXN0QXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLnRpdGxlO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbVRleHQpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLnNyYyA9IHRyYXNoSW1hZ2U7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLndpZHRoID0gMjA7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1UcmFzaEltYWdlLmhlaWdodCA9IDIwO1xuICAgICAgcHJvamVjdExpc3RJdGVtVHJhc2hJbWFnZS5jbGFzc0xpc3QuYWRkKCd0cmFzaC1pbWFnZScpO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbVRyYXNoSW1hZ2UpO1xuICAgICAgcHJvamVjdExpc3RJdGVtVHJhc2hJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuICAgICAgXG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nLCAnaG92ZXItc3RvbmUtMjAwJyk7XG4gICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCkuaWQgPT09IGkpIHtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3N0b25lLTIwMCcpO1xuICAgICAgfVxuXG5cbiAgICAgIHByb2plY3RMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIFtpXSk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcbiAgICAgIFxuXG4gICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUHJvamVjdExpc3QoKTtcblxuICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbU1lbnVDb250ZW50KTtcblxuICAgIHJldHVybiB7cmVuZGVyUHJvamVjdExpc3R9O1xuICB9KSgpO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnQpO1xuXG4gIHJldHVybiB7c2lkZWJhckNvbnRhaW5lciwgYm90dG9tTWVudX07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXJEaXY7IiwiaW1wb3J0IGluYm94IGZyb20gXCIuL3BhZ2VzL2luYm94XCI7XG5pbXBvcnQgc2lkZWJhckRpdiBmcm9tIFwiLi9wYWdlcy9zaWRlYmFyXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCI7XG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tIFwiLi9hc3NldHMvaW1ncy9jbG9zZS5wbmdcIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICB0b2RvTGlzdDogW10sXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdC50b2RvTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBnZXRUb2RvTGlzdH07XG59XG5cbmNvbnN0IHN0b3JhZ2VGaXJzdExvYWQgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSByZXR1cm47XG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KCdpbmJveCcsICd0aGUgZGVmYXVsdCcsIHRydWUpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKGluYm94LmdldFByb2plY3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcm9qZWN0ID0gbG9hZExvY2FsU3RvcmFnZSgpWzBdLnRpdGxlLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSA0KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbm90ZXM6IFwiXCIsXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1RvZG87XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lLWlucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGxldCB0YXNrRHVlRGF0ZVZhbHVlID0gJyc7XG5cbiAgICBpZiAodGFza05hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJiB0YXNrRHVlRGF0ZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHRhc2tEdWVEYXRlLnZhbHVlLnNsaWNlKDAsIDQpO1xuICAgICAgICBjb25zdCBtb250aCA9IHRhc2tEdWVEYXRlLnZhbHVlLnNsaWNlKDUsIDcpIC0gMTtcbiAgICAgICAgY29uc3QgZGF5ID0gdGFza0R1ZURhdGUudmFsdWUuc2xpY2UoOCk7XG4gICAgICAgIHRhc2tEdWVEYXRlVmFsdWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3RbZ2V0QWN0aXZlUHJvamVjdCgpLmlkXTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGFjdGl2ZVByb2plY3QudGl0bGUsIHRhc2tEdWVEYXRlVmFsdWUpO1xuICAgIGFjdGl2ZVByb2plY3QudG9kb0xpc3QucHVzaChuZXdUb2RvKTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgcmVzZXRIVE1MKCk7XG59XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5saXN0SWQ7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZXhwYW5kZWRUb2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmRlZC10b2RvLWNvbnRlbnQnKTtcblxuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSAnY2hlY2tib3gtY29udGFpbmVyJykge1xuICAgICAgICBwcm9qZWN0TGlzdFtnZXRBY3RpdmVQcm9qZWN0KCkuaWRdLnRvZG9MaXN0LnNwbGljZShleHBhbmRlZFRvZG9Db250ZW50LnRvZG9MaXN0SWQsIDEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3RvZG8tbGlzdC1pdGVtJykge1xuICAgICAgICBwcm9qZWN0TGlzdFtnZXRBY3RpdmVQcm9qZWN0KCkuaWRdLnRvZG9MaXN0LnNwbGljZSh0YXNrSWQsIDEpO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHJlc2V0SFRNTCgpO1xufVxuXG5jb25zdCByZXNldEhUTUwgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHdoaWxlIChyb290Q29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJvb3RDb250ZW50LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKTtcbn1cblxuY29uc3QgZXhwYW5kVG9kbyA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NoZWNrYm94JykgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gbG9hZExvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0TGlzdFtnZXRBY3RpdmVQcm9qZWN0KCkuaWRdO1xuICAgIGNvbnN0IGxpc3RJZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBjb25zdCBzZWxlY3RlZFRvZG8gPSBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0W2xpc3RJZF07XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gJ2V4cGFuZGVkLXRvZG8tY29udGFpbmVyJztcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzb2xhdGVkLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pZCA9PT0gZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjbG9zZUV4cGFuZGVkVG9kbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gJ2V4cGFuZGVkLXRvZG8tY29udGVudCc7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpc29sYXRlZC1jb250ZW50Jyk7XG4gICAgY29udGVudC50b2RvTGlzdElkID0gbGlzdElkO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGNsb3NlID0gbmV3IEltYWdlKCk7XG4gICAgY2xvc2Uuc3JjID0gY2xvc2VJbWFnZTtcbiAgICBjbG9zZS53aWR0aCA9IDMwO1xuICAgIGNsb3NlLmhlaWdodCA9IDMwO1xuICAgIGNsb3NlLmlkID0gJ2Nsb3NlJztcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRXhwYW5kZWRUb2RvKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tib3hDb250YWluZXIuaWQgPSAnY2hlY2tib3gtY29udGFpbmVyJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveERpdi53aWR0aCA9IDI0O1xuICAgIGNoZWNrYm94RGl2LmhlaWdodCA9IDI0O1xuICAgIGNoZWNrYm94RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFzayk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hEaXYpO1xuXG4gICAgY29uc3QgdGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250ZW50LmlkID0gJ2V4cGFuZGVkLXRvZG8tdGl0bGUtY29udGVudCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9ICdleHBhbmRlZC10b2RvLXRpdGxlJztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NlbGVjdGVkVG9kby50aXRsZX1gO1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG9UaXRsZSk7XG4gICAgdGl0bGVDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAnZXhwYW5kZWQtdG9kby1kZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzZWxlY3RlZFRvZG8uZGVzY3JpcHRpb259YDtcbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvRGVzY3JpcHRpb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufVxuXG5jb25zdCBjbG9zZUV4cGFuZGVkVG9kbyA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJlbmRlcigpO1xufVxuXG5jb25zdCBhZGREdWVEYXRlSW5wdXQgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2R1ZS1kYXRlLWlucHV0JykgcmV0dXJuO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1idG4nKTtcbiAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBkdWVEYXRlVGV4dC5pZCA9ICdkdWUtZGF0ZS1pbnB1dCc7XG4gICAgZHVlRGF0ZVRleHQudHlwZSA9ICdkYXRlJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xufVxuXG5jb25zdCBlZGl0VG9kb1RpdGxlID0gKCkgPT4ge1xuICAgIC8qXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmRlZC10b2RvLXRpdGxlLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8tdGl0bGUnKTtcbiAgICBjb25zdCBwcmV2aW91c1RpdGxlVGV4dCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIGNvbnRlbnQucHJldlRpdGxlVGV4dCA9IHByZXZpb3VzVGl0bGVUZXh0O1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kZWQtdG9kby1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHByZXZpb3VzRGVzY3JpcHRpb25UZXh0ID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29udGVudC5wcmV2RGVzY1RleHQgPSBwcmV2aW91c0Rlc2NyaXB0aW9uVGV4dDtcblxuXG4gICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRDb250YWluZXIuaWQgPSAnZXhwYW5kZWQtdG9kby1lZGl0LWNvbnRhaW5lcic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcbiAgICBcblxuICAgIGNvbnN0IHRpdGxlRWRpdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVFZGl0Qm94LmlkID0gJ2V4cGFuZGVkLXRvZG8tdGl0bGUtZWRpdCc7XG4gICAgdGl0bGVFZGl0Qm94LnR5cGUgPSAndGV4dGFyZWEnO1xuICAgIHRpdGxlRWRpdEJveC5tYXhMZW5ndGggPSAnMzAnO1xuICAgIHRpdGxlRWRpdEJveC5taW5MZW5ndGggPSAnMSc7XG4gICAgdGl0bGVFZGl0Qm94LnZhbHVlID0gYCR7cHJldmlvdXNUaXRsZVRleHR9YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVFZGl0Qm94KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9ICd0aXRsZS1idXR0b24tY29udGVudCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgY29uc3QgdGl0bGVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aXRsZUNhbmNlbEJ0bi5pZCA9ICd0aXRsZS1jYW5jZWwtYnV0dG9uJztcbiAgICB0aXRsZUNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHRpdGxlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsVG9kb0VkaXQpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCB0aXRsZUFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRpdGxlQWRkQnRuLmlkID0gJ3RpdGxlLWFkZC1idXR0b24nO1xuICAgIHRpdGxlQWRkQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgdGl0bGVBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaW5pc2hUb2RvRWRpdCk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQWRkQnRuKTtcblxuXG4gICAgdGl0bGUucmVtb3ZlKCk7XG4gICAgKi9cbn1cblxuY29uc3QgZmluaXNoVG9kb0VkaXQgPSAoZSkgPT4ge1xuICAgIC8qXG4gICAgY29uc3QgdGl0bGVFZGl0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8tdGl0bGUtZWRpdCcpO1xuICAgIGlmICh0aXRsZUVkaXRCb3ggPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSB0aXRsZUVkaXRCb3gudmFsdWU7IFxuICAgIGlmIChuZXdUb2RvVGl0bGUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kZWQtdG9kby10aXRsZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0W2dldEFjdGl2ZVByb2plY3QoKS5pZF1cbiAgICBjb25zdCBsaXN0SWQgPSBwYXJlbnRDb250ZW50LnRvZG9MaXN0SWQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gYWN0aXZlUHJvamVjdC50b2RvTGlzdFtsaXN0SWRdO1xuXG5cbiAgICBzZWxlY3RlZFRvZG8udGl0bGUgPSBgJHtuZXdUb2RvVGl0bGV9YDtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgXG4gICAgdGl0bGVFZGl0Qm94LnJlbW92ZSgpO1xuXG4gICAgY29uc3QgdGl0bGVCdG5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWJ1dHRvbi1jb250ZW50Jyk7XG4gICAgdGl0bGVCdG5Db250ZW50LnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUaXRsZS5pZCA9ICdleHBhbmRlZC10b2RvLXRpdGxlJztcbiAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IGAke25ld1RvZG9UaXRsZX1gO1xuICAgIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG9UaXRsZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAqL1xufVxuXG5jb25zdCBjYW5jZWxUb2RvRWRpdCA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZUJ0bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtYnV0dG9uLWNvbnRlbnQnKTtcbiAgICB0aXRsZUJ0bkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgXG4gICAgY29uc3QgdGl0bGVFZGl0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkLXRvZG8tdGl0bGUtZWRpdCcpO1xuICAgIHRpdGxlRWRpdEJveC5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmRlZC10b2RvLXRpdGxlLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAnZXhwYW5kZWQtdG9kby10aXRsZSc7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQucHJldlRpdGxlVGV4dDtcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvVGl0bGUpO1xuICAgIHRpdGxlQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG59XG5cbmNvbnN0IGVkaXRUb2RvRGVzY3JpcHRpb24gPSAoZSkgPT4ge1xuXG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5saXN0SWQ7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBsb2FkTG9jYWxTdG9yYWdlKCk7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGxpc3RJZCwgMSk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RMaXN0KTtcblxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG59XG5cbmNvbnN0IHNlbGVjdFByb2plY3QgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidHJhc2gtaW1hZ2VcIikgcmV0dXJuO1xuICAgIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gbG9hZExvY2FsU3RvcmFnZSgpO1xuXG4gICAgaWYgKHByb2plY3RMaXN0W2xpc3RJZF0uc2VsZWN0ZWQgPT09IHRydWUpIHJldHVybjtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzdG9uZS0yMDAnKTtcblxuICAgIHByb2plY3RMaXN0W2dldEFjdGl2ZVByb2plY3QoKS5pZF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBwcm9qZWN0TGlzdFtsaXN0SWRdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJlbmRlcigpO1xufVxuXG5jb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gbG9hZExvY2FsU3RvcmFnZSgpO1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdElkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmJveElkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpPTA7aTxwcm9qZWN0TGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uc2VsZWN0ZWQgPT09IGZhbHNlKSBjb250aW51ZTtcbiAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdElkID0gaTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0SWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb2plY3RMaXN0W2luYm94SWRdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgICAgICAgIHJldHVybiBpbmJveElkO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gZ2V0QWN0aXZlUHJvamVjdElkKCk7XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3RbaWRdO1xuICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgcmV0dXJuIHthY3RpdmVQcm9qZWN0LCBpZH07XG59XG5cbmNvbnN0IHByb2plY3RNZW51ID0gKGUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gJ3Byb2plY3QtbWVudS1jb250YWluZXInO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXNvbGF0ZWQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGJvZHlDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnRlbnQuaWQgPSAncHJvamVjdC1tZW51LWNvbnRlbnQnO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXNvbGF0ZWQtY29udGVudCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9ICdwcm9qZWN0LW1lbnUtaGVhZGVyJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIHByb2plY3QnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSAncHJvamVjdC1tZW51LW5hbWUtY29udGVudCc7XG5cbiAgICAgICAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lSGVhZGVyLmlkID0gJ25hbWUtaGVhZGVyJztcbiAgICAgICAgbmFtZUhlYWRlci50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZS5pZCA9ICdwcm9qZWN0LW1lbnUtbmFtZS1pbnB1dCc7XG4gICAgICAgIG5hbWUudHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgICAgIG5hbWUubWF4TGVuZ3RoID0gJzMwMCc7XG4gICAgICAgIG5hbWUubWluTGVuZ3RoID0gJzEnO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB7Y29udGVudH07XG4gICAgfSkoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWUuY29udGVudCk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tZW51LW5hbWUtaW5wdXQnKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gbG9hZExvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdC5nZXRQcm9qZWN0KCkpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgd2hpbGUgKHByb2plY3RMaXN0RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhckRpdigpLmJvdHRvbU1lbnUucmVuZGVyUHJvamVjdExpc3QocHJvamVjdExpc3RFbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50LmlkID0gJ3Byb2plY3QtbWVudS1idXR0b24tY29udGVudCc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgYWRkQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgICAgICByZXR1cm4ge2NvbnRlbnR9O1xuICAgIH0pKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zLmNvbnRlbnQpO1xufVxuXG5cblxuXG5cblxuZXhwb3J0IHtcbiAgICBhZGRUYXNrLCBzdG9yYWdlRmlyc3RMb2FkLCBsb2FkTG9jYWxTdG9yYWdlLCByZW1vdmVUYXNrLCBwcm9qZWN0TWVudSwgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdCwgZXhwYW5kVG9kbywgYWRkRHVlRGF0ZUlucHV0XG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmJveC5jc3MnO1xuaW1wb3J0IHtmaXJzdExvYWR9IGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIjtcblxuZmlyc3RMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=