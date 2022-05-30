/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --base-color: #D1D8FA;\n    --complimentary-color: #E3D6F5;\n    --highlight-color: #0A8AA9;\n}\n\nhtml, body, #content{\n    width: 100%;\n    min-height: 100%;\n    margin: 0;\n}\n\n#content{\n    display: grid;\n    min-height: 100vh;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 15vh 1fr;\n    gap: 2px;\n    grid-template-areas: \n    \"aside header\"\n    \"aside main\";\n}\n\naside{\n    display: grid;\n    grid-area: aside;\n    grid-template-rows: 10vh 5vh calc(8vh * 3);\n    background: linear-gradient(180deg, #E3D6F5, #D1D8FA);\n    grid-auto-flow: row;\n    min-width: 300px;\n    min-height: 100%;\n}\naside #logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: xx-large;\n    font-weight: bold;\n    color: #0A8AA9;\n    border-bottom: dashed 4px white;\n    gap: 10px;\n    background-color: #adb7e6;\n}\n\naside #logo img{\n    border-radius: 50%;\n    height: 80%;\n    aspect-ratio: 1;\n}\n\naside ul{\n    grid-row: 3/4 ;\n    list-style: none;\n    padding: 0;\n    display: grid;\n    grid-template-rows: repeat(3, 4vh);\n    gap: 3vh;\n    padding-left: 10px;\n\n}\n\naside li{\n    font-size: large;\n    font-weight: bold;\n    cursor: pointer;\n    color: #0A8AA9;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 10px;\n    /* border: 1px solid white; */\n}\n\naside li:hover{\n    background-color: #b384f3;\n    color: white;\n}\naside li img{\n    height: 90%;\n    /* background-color: white; */\n}\n\n#archives{\n    display: none;\n}\n\n/* HEADER DOM */\n\n#content>header{\n    grid-area: header;\n    background-color: #D1D8FA;\n    display: grid;\n    grid-template-columns: 40%;\n    justify-content: end;\n}\n\n#content>header div{\n    display: flex;\n    font-size: x-large;\n    font-weight: bold;\n    justify-content: flex-end;\n    margin-right: 15px;\n    align-items: center;\n    gap: 10px;\n}\n\n/* #content>header input{\n    background-color: #E3D6F5;\n    border: solid white 2px;\n    aspect-ratio: 10;\n    border-radius: 30px;\n    min-height: 40px;\n    max-width: 30vw;\n    margin-left: 7%;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    display: none;\n} */\n\n#content>header input{\n    background-color: #D1D8FA;\n    border: none;\n    display: none;\n}\n\n#content>header img{\n    aspect-ratio: 1;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    border: white solid 2px;\n}\n\n/* MAIN DOM */\n\nmain{\n    grid-area: main;\n    background-color: purple;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n\n}\n\nmain>header{\n    height: 6vh;\n    display: flex;\n}\nmain>header input{\n    width: 100%;\n    background-color: #E3D6F5;\n    border: none;\n    font-size: x-large;\n    padding-left: 40px;\n    cursor:default;\n}\n\nmain>#workspace{\n    box-sizing: border-box;\n    height: 100%;\n    background-color: white;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 50px;\n    padding-left: 10px;\n    padding-bottom: 20px;\n    padding-top: 20px;\n\n}\n\nmain #open_project{\n    min-height: 100%;\n    height: fit-content;\n    width: 70%;\n    background-color: #D1D8FA90;\n    border: solid white 3px;\n    border-radius: 20px;\n    box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.3);\n    display: grid;\n    grid-template-rows: repeat(2, 50px);\n    align-items: center;\n    grid-auto-rows: 50px;\n}\n\nmain #open_project .single_toDo{\n    display: grid;\n    height: 100%;\n    align-items: center;\n    grid-template-columns: 40% 20% 17% 17%;\n    gap: 2%;\n    font-weight: bold;\n    padding: 0 3%;\n    border-bottom: dashed white 2px;\n}\nmain #open_project #toDo_title{\n    font-weight: bolder;\n    font-size: x-large;\n}\n\n.edit_toDo{\n    background-color: #E3D6F5;\n    border-radius: 20px;\n    border-color: #0A8AA9;\n    cursor: pointer;\n    /* height: 60%; */\n    /* max-height: 100%; */\n    /* aspect-ratio: 1; */\n}\n.open_todo{\n    cursor: pointer;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.buttonsdiv{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nmain #addToDo{\n    flex-grow: 0;\n    align-self: flex-end;\n    background-color: #E3D6F5;\n    aspect-ratio: 1;\n    width: 10%;\n    border-radius: 50%;\n    font-weight: bolder;\n    font-size: xx-large;\n    color: white;\n    cursor: pointer;\n    border-color: #0A8AA9;\n}\nmain #addToDo:hover{\n    background-color: #b384f3;\n}\n\n#newToDoModal, #editToDoModal, #newprojectmodal{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: #20a8ca;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 2px 2px 1px 1px gray;\n    display: grid;\n    grid-template-rows: repeat(5, 20%);\n    justify-items: end;\n    gap: 10px;\n    font-weight: bold;\n}\n#newToDoModal input, #newToDoModal textarea, #editToDoModal input, #editToDoModal textarea{\n    width: 80%;\n}\n#newToDoModal button, #editToDoModal button, .projectbuttonsdiv button{\n    background-color: #E3D6F5;\n    color: black;\n    font-weight: bold;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n#editToDoModal #deletetodo, .projectbuttonsdiv .deleteprojectbutton{\n    border-color: red;\n}\n\n#newToDoModal li , #editToDoModal li{\n    width: 80%;\n    list-style: none;\n    padding: none;\n}\n\n/* all projects */\n\n#allprojects_content{\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 20%);\n    grid-template-rows: repeat(4, calc((85vh - 20px) / 4));\n    gap: 25px;\n    padding: 20px;\n}\n\n.projectcard{\n    aspect-ratio: 1;\n    border-radius: 20px;\n    background-color: #D1D8FA;\n    opacity: 0.8;\n    background-image:  linear-gradient(135deg, #08c9d3 25%, transparent 25%), linear-gradient(225deg, #08c9d3 25%, transparent 25%), linear-gradient(45deg, #08c9d3 25%, transparent 25%), linear-gradient(315deg, #08c9d3 25%, #D1D8FA 25%);\n    background-position:  34px 0, 34px 0, 0 0, 0 0;\n    background-size: 68px 68px;\n    background-repeat: repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.projectcard .project_name{\n    text-align: center;\n    font-size: xx-large;\n    font-weight: bolder;\n}\n.projectbuttonsdiv{\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectbuttonsdiv button{\n    background-color: #E3D6F5;\n    color: black;\n    font-weight: bold;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\nmain #addProject{\n    align-self: center;\n    justify-self: center;\n    background-color: #E3D6F5;\n    aspect-ratio: 1;\n    width: 60%;\n    border-radius: 50%;\n    font-weight: bolder;\n    font-size: xx-large;\n    color: white;\n    cursor: pointer;\n    border-color: #0A8AA9;\n}\nmain #addProject:hover{\n    background-color: #b384f3;\n}\n\n#newprojectmodal li{\n    list-style: none;\n}\n#newprojectmodal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n#newprojectmodal button{\n    background-color: #E3D6F5;\n    color: black;\n    aspect-ratio: 2;\n    font-weight: bold;\n    border-radius: 20px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n#newprojectmodal #cancelnewproject{\n    border-color: gray;\n}\n\n/* profile content */\n\n#profilecontent{\n    width: 100%;\n    height: 100%;\n    background-color: #d1d8fa;\nopacity: 1;\nbackground-image: radial-gradient(#0A8AA9 2px, #d1d8fa 2px);\nbackground-size: 40px 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n\n}\n\n#profileform{\n    box-sizing: border-box;\n    padding: 20px;\n    width: 80%;\n    height: fit-content;\n    background-color: #E3D6F5;\n    border-radius: 20px;\n    border: 3px solid #0A8AA9;\n    display: grid;\n    grid-template-rows: repeat(4, 20%);\n    gap: 20px;\n    list-style: none;\n    font-size: x-large;\n    font-weight: bold;\n}\n#profileform li:nth-child(1), #profileform li:nth-child(2){\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px 20px;\n    border: 1px solid black;\n    border-radius: 10px;\n    gap: 20px;\n}\n\n#profileform li:nth-child(3), #profileform li:nth-child(4){\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px 20px;\n}\n\n#profileform button{\n    font-size: inherit;\n    background-color: #adb7e6;\n    color: black;\n    font-weight: bold;\n    border-radius: 20px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n\n#profileform #resetimage:hover{\n    background-color: #0A8AA9;\n    border-color: #0A8AA9;\n    color: white;\n}\n\n#profileform #deleteprofile{\n    background-color: lightcoral;\n    border-color: red;\n}\n\n#profileform #deleteprofile:hover{\n    background-color: red;\n    border-color: red;\n    color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --base-color: #D1D8FA;\n    --complimentary-color: #E3D6F5;\n    --highlight-color: #0A8AA9;\n}\n\nhtml, body, #content{\n    width: 100%;\n    min-height: 100%;\n    margin: 0;\n}\n\n#content{\n    display: grid;\n    min-height: 100vh;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 15vh 1fr;\n    gap: 2px;\n    grid-template-areas: \n    \"aside header\"\n    \"aside main\";\n}\n\naside{\n    display: grid;\n    grid-area: aside;\n    grid-template-rows: 10vh 5vh calc(8vh * 3);\n    background: linear-gradient(180deg, #E3D6F5, #D1D8FA);\n    grid-auto-flow: row;\n    min-width: 300px;\n    min-height: 100%;\n}\naside #logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: xx-large;\n    font-weight: bold;\n    color: #0A8AA9;\n    border-bottom: dashed 4px white;\n    gap: 10px;\n    background-color: #adb7e6;\n}\n\naside #logo img{\n    border-radius: 50%;\n    height: 80%;\n    aspect-ratio: 1;\n}\n\naside ul{\n    grid-row: 3/4 ;\n    list-style: none;\n    padding: 0;\n    display: grid;\n    grid-template-rows: repeat(3, 4vh);\n    gap: 3vh;\n    padding-left: 10px;\n\n}\n\naside li{\n    font-size: large;\n    font-weight: bold;\n    cursor: pointer;\n    color: #0A8AA9;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 10px;\n    /* border: 1px solid white; */\n}\n\naside li:hover{\n    background-color: #b384f3;\n    color: white;\n}\naside li img{\n    height: 90%;\n    /* background-color: white; */\n}\n\n#archives{\n    display: none;\n}\n\n/* HEADER DOM */\n\n#content>header{\n    grid-area: header;\n    background-color: #D1D8FA;\n    display: grid;\n    grid-template-columns: 40%;\n    justify-content: end;\n}\n\n#content>header div{\n    display: flex;\n    font-size: x-large;\n    font-weight: bold;\n    justify-content: flex-end;\n    margin-right: 15px;\n    align-items: center;\n    gap: 10px;\n}\n\n/* #content>header input{\n    background-color: #E3D6F5;\n    border: solid white 2px;\n    aspect-ratio: 10;\n    border-radius: 30px;\n    min-height: 40px;\n    max-width: 30vw;\n    margin-left: 7%;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    display: none;\n} */\n\n#content>header input{\n    background-color: #D1D8FA;\n    border: none;\n    display: none;\n}\n\n#content>header img{\n    aspect-ratio: 1;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    border: white solid 2px;\n}\n\n/* MAIN DOM */\n\nmain{\n    grid-area: main;\n    background-color: purple;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n\n}\n\nmain>header{\n    height: 6vh;\n    display: flex;\n}\nmain>header input{\n    width: 100%;\n    background-color: #E3D6F5;\n    border: none;\n    font-size: x-large;\n    padding-left: 40px;\n    cursor:default;\n}\n\nmain>#workspace{\n    box-sizing: border-box;\n    height: 100%;\n    background-color: white;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 50px;\n    padding-left: 10px;\n    padding-bottom: 20px;\n    padding-top: 20px;\n\n}\n\nmain #open_project{\n    min-height: 100%;\n    height: fit-content;\n    width: 70%;\n    background-color: #D1D8FA90;\n    border: solid white 3px;\n    border-radius: 20px;\n    box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.3);\n    display: grid;\n    grid-template-rows: repeat(2, 50px);\n    align-items: center;\n    grid-auto-rows: 50px;\n}\n\nmain #open_project .single_toDo{\n    display: grid;\n    height: 100%;\n    align-items: center;\n    grid-template-columns: 40% 20% 17% 17%;\n    gap: 2%;\n    font-weight: bold;\n    padding: 0 3%;\n    border-bottom: dashed white 2px;\n}\nmain #open_project #toDo_title{\n    font-weight: bolder;\n    font-size: x-large;\n}\n\n.edit_toDo{\n    background-color: #E3D6F5;\n    border-radius: 20px;\n    border-color: #0A8AA9;\n    cursor: pointer;\n    /* height: 60%; */\n    /* max-height: 100%; */\n    /* aspect-ratio: 1; */\n}\n.open_todo{\n    cursor: pointer;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.buttonsdiv{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nmain #addToDo{\n    flex-grow: 0;\n    align-self: flex-end;\n    background-color: #E3D6F5;\n    aspect-ratio: 1;\n    width: 10%;\n    border-radius: 50%;\n    font-weight: bolder;\n    font-size: xx-large;\n    color: white;\n    cursor: pointer;\n    border-color: #0A8AA9;\n}\nmain #addToDo:hover{\n    background-color: #b384f3;\n}\n\n#newToDoModal, #editToDoModal, #newprojectmodal{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: #20a8ca;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 2px 2px 1px 1px gray;\n    display: grid;\n    grid-template-rows: repeat(5, 20%);\n    justify-items: end;\n    gap: 10px;\n    font-weight: bold;\n}\n#newToDoModal input, #newToDoModal textarea, #editToDoModal input, #editToDoModal textarea{\n    width: 80%;\n}\n#newToDoModal button, #editToDoModal button, .projectbuttonsdiv button{\n    background-color: #E3D6F5;\n    color: black;\n    font-weight: bold;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n#editToDoModal #deletetodo, .projectbuttonsdiv .deleteprojectbutton{\n    border-color: red;\n}\n\n#newToDoModal li , #editToDoModal li{\n    width: 80%;\n    list-style: none;\n    padding: none;\n}\n\n/* all projects */\n\n#allprojects_content{\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 20%);\n    grid-template-rows: repeat(4, calc((85vh - 20px) / 4));\n    gap: 25px;\n    padding: 20px;\n}\n\n.projectcard{\n    aspect-ratio: 1;\n    border-radius: 20px;\n    background-color: #D1D8FA;\n    opacity: 0.8;\n    background-image:  linear-gradient(135deg, #08c9d3 25%, transparent 25%), linear-gradient(225deg, #08c9d3 25%, transparent 25%), linear-gradient(45deg, #08c9d3 25%, transparent 25%), linear-gradient(315deg, #08c9d3 25%, #D1D8FA 25%);\n    background-position:  34px 0, 34px 0, 0 0, 0 0;\n    background-size: 68px 68px;\n    background-repeat: repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.projectcard .project_name{\n    text-align: center;\n    font-size: xx-large;\n    font-weight: bolder;\n}\n.projectbuttonsdiv{\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectbuttonsdiv button{\n    background-color: #E3D6F5;\n    color: black;\n    font-weight: bold;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\nmain #addProject{\n    align-self: center;\n    justify-self: center;\n    background-color: #E3D6F5;\n    aspect-ratio: 1;\n    width: 60%;\n    border-radius: 50%;\n    font-weight: bolder;\n    font-size: xx-large;\n    color: white;\n    cursor: pointer;\n    border-color: #0A8AA9;\n}\nmain #addProject:hover{\n    background-color: #b384f3;\n}\n\n#newprojectmodal li{\n    list-style: none;\n}\n#newprojectmodal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n#newprojectmodal button{\n    background-color: #E3D6F5;\n    color: black;\n    aspect-ratio: 2;\n    font-weight: bold;\n    border-radius: 20px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n#newprojectmodal #cancelnewproject{\n    border-color: gray;\n}\n\n/* profile content */\n\n#profilecontent{\n    width: 100%;\n    height: 100%;\n    background-color: #d1d8fa;\nopacity: 1;\nbackground-image: radial-gradient(#0A8AA9 2px, #d1d8fa 2px);\nbackground-size: 40px 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n\n}\n\n#profileform{\n    box-sizing: border-box;\n    padding: 20px;\n    width: 80%;\n    height: fit-content;\n    background-color: #E3D6F5;\n    border-radius: 20px;\n    border: 3px solid #0A8AA9;\n    display: grid;\n    grid-template-rows: repeat(4, 20%);\n    gap: 20px;\n    list-style: none;\n    font-size: x-large;\n    font-weight: bold;\n}\n#profileform li:nth-child(1), #profileform li:nth-child(2){\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px 20px;\n    border: 1px solid black;\n    border-radius: 10px;\n    gap: 20px;\n}\n\n#profileform li:nth-child(3), #profileform li:nth-child(4){\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px 20px;\n}\n\n#profileform button{\n    font-size: inherit;\n    background-color: #adb7e6;\n    color: black;\n    font-weight: bold;\n    border-radius: 20px;\n    padding: 5px 10px;\n    border: 2px outset #0A8AA9;\n    cursor: pointer;\n}\n\n#profileform #resetimage:hover{\n    background-color: #0A8AA9;\n    border-color: #0A8AA9;\n    color: white;\n}\n\n#profileform #deleteprofile{\n    background-color: lightcoral;\n    border-color: red;\n}\n\n#profileform #deleteprofile:hover{\n    background-color: red;\n    border-color: red;\n    color: white;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/allprojects.js":
/*!****************************!*\
  !*** ./src/allprojects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultpage.js */ "./src/defaultpage.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjectsmain);


let currentProjectExport;

function deleteprojectaddeventlistener(){
    let alldeletebuttons = document.getElementsByClassName('deleteprojectbutton');
    Array.from(alldeletebuttons).forEach((button)=>{
        button.addEventListener('click', ()=>{
            // console.log(button.parentElement.parentElement.id);
            _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(button.parentElement.parentElement.id, 1);
            localStorage.setItem('allProjects', JSON.stringify(_defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.allProjects));
            mapProjects();
        })
    })
}
function openprojectaddeventlistener(){
    let openprojectbuttons = document.getElementsByClassName('openprojectbutton');
    Array.from(openprojectbuttons).forEach((button)=>{
        button.addEventListener('click', ()=>{
            currentProjectExport= _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[button.parentElement.parentElement.id];
            // localStorage.setItem('currentProjectExport', JSON.stringify(currentProjectExport));
            (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.removeCurrentMain)();
            (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.displayMain)(currentProjectExport);
        })
    })
}
function mapProjects(){
    //delete old projects
    let content = document.getElementById('allprojects_content');
    for(let i=content.children.length; i>0;i--){
        content.children[i-1].remove();
    }
    //post new projects from allprojectsarray
    for(let project of _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.allProjects){

        let card = document.createElement('div');
        card.setAttribute('id', _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.indexOf(project));
        card.setAttribute("class","projectcard");

        let namediv = document.createElement('div');
        namediv.setAttribute("class", "project_name");
        namediv.textContent= project.name;

        let buttonsdiv = document.createElement('div');
        buttonsdiv.setAttribute("class", "projectbuttonsdiv");
        let openbutton = document.createElement('button');
        let deletebutton = document.createElement('button');
        openbutton.setAttribute('type', 'button');
        deletebutton.setAttribute('type', 'button');
        openbutton.setAttribute('class', 'openprojectbutton');
        deletebutton.setAttribute('class', 'deleteprojectbutton');
        openbutton.textContent="Open Project";
        deletebutton.textContent="Delete Project";
        buttonsdiv.appendChild(deletebutton);
        buttonsdiv.appendChild(openbutton);

        card.appendChild(namediv);
        card.appendChild(buttonsdiv);
        content.appendChild(card);
    }
    displayButton(); //add display button at end
    deleteprojectaddeventlistener();
    openprojectaddeventlistener();
}

///////////STARTT HERE
function displayProjectsmain(){
    let main = document.querySelector('main');
    let content = document.createElement('div');
    content.setAttribute('id', 'allprojects_content');
    main.appendChild(content);

    mapProjects();
}


function addProjectDisplay(){
    let popupmodal= document.getElementById('newprojectmodal');
    if(popupmodal!==undefined&&popupmodal!==null){
        popupmodal.remove();
    }
    else{
    let content = document.getElementById('allprojects_content');
    let modal = document.createElement('div');
    modal.setAttribute('id', 'newprojectmodal');
    let namelist = document.createElement('li');
    let name = document.createElement('input');
    let label = document.createElement('label');
    let buttonsdiv= document.createElement('div');
    let savebutton = document.createElement('button');
    let cancelbutton = document.createElement('button');
    buttonsdiv.setAttribute('class', 'buttonsdiv');
    savebutton.setAttribute('id', 'savenewproject');
    savebutton.textContent="Save";
    cancelbutton.setAttribute('id', 'cancelnewproject');
    cancelbutton.textContent="Cancel";
    namelist.setAttribute('id', 'newprojectnameitem')
    name.setAttribute("id", "newprojectname");
    label.setAttribute('for', 'newprojectname');
    label.textContent="New Project Name: ";
    namelist.appendChild(label);
    namelist.appendChild(name);
    modal.appendChild(namelist);
    buttonsdiv.appendChild(cancelbutton);
    buttonsdiv.appendChild(savebutton);
    modal.appendChild(buttonsdiv);
    content.appendChild(modal);
    newprojectmodaladdeventlistener(modal.lastChild)
    }
}
function displayButton(){
    let content = document.getElementById('allprojects_content');
    let addProject = document.createElement('button');
    addProject.setAttribute('id', 'addProject');
    addProject.innerHTML="&#xFF0B;";
    content.appendChild(addProject);
    addProjectListener();
}
function addProjectListener(){
    let button = document.getElementById('addProject');
    button.addEventListener('click', ()=>{
        addProjectDisplay();
    })
}
///funcitonality



function newprojectmodaladdeventlistener(div){
    let modal= document.getElementById('newprojectmodal');
    let newprojectname = document.getElementById('newprojectname');
    div.addEventListener('click', (e)=>{
        if(e.target.id=="cancelnewproject"){
            modal.remove();
        }
        else if(e.target.id=="savenewproject"){
            if(newprojectname.value.length>=1){
                new _defaultpage_js__WEBPACK_IMPORTED_MODULE_0__.projectCreator(newprojectname.value);
                modal.remove();
                mapProjects();

            }
            else{
                newprojectname.style.borderColor="red";
            }
        }
    })
}


/////

/***/ }),

/***/ "./src/defaultpage.js":
/*!****************************!*\
  !*** ./src/defaultpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "newFormlistElement": () => (/* binding */ newFormlistElement),
/* harmony export */   "practiceProject": () => (/* binding */ practiceProject),
/* harmony export */   "projectCreator": () => (/* binding */ projectCreator)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMain);


/////////////////////


function projectCreator(name) {
    this.name=name;
    this.todoArray=[];
    this.createToDo= function(title, description, dueDate, priority, completion=false) {
        this.todoArray.push({title, description,dueDate,priority, completion});
        // console.log(this.todoArray);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    };
    this.editToDo = function(index, title, description, dueDate, priority, completion) {
        this.todoArray.splice(index, 1, {title, description,dueDate,priority, completion});
        // console.log(this.todoArray);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
    this.deleteToDo = function(index){
        this.todoArray.splice(index, 1);
        // console.log(this.todoArray);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
    allProjects.push(this);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};
let practiceProject;
let allProjects;

function checkAllProjects(){
if(localStorage.getItem('allProjects')!==null){
    allProjects= JSON.parse(localStorage.getItem('allProjects'));
    for(let object of allProjects){
        object.createToDo= function(title, description, dueDate, priority, completion=false) {
            this.todoArray.push({title, description,dueDate,priority, completion});
            // console.log(this.todoArray);
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        };
        object.editToDo = function(index, title, description, dueDate, priority, completion) {
            this.todoArray.splice(index, 1, {title, description,dueDate,priority, completion});
            // console.log(this.todoArray);
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        }
        object.deleteToDo = function(index){
            this.todoArray.splice(index, 1);
            // console.log(this.todoArray);
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        } 
    }
}
else{
    allProjects= [];
    practiceProject = new projectCreator('Default Project');
}
}
checkAllProjects();
// standardProjects= allProjects;
let currentProject;

//function that checks for saving new todo
function saveNewToDo(){
    let savenewtodo= document.getElementById('savenewtodo');
    savenewtodo.addEventListener('click', ()=>{
        let task = document.getElementById('newname').value;
        let description = document.getElementById('newdescription').value;
        let duedate = document.getElementById('newduedate').value;
        let priority = document.getElementById('newpriority').value;
        if(task!==""){
            currentProject.createToDo(task, description, duedate, priority);
            maptodos();
            displayEditModal();
            editTaskCompletion();
            let modal = document.getElementById('newToDoModal');
            modal.remove();
        }
        else{
            document.getElementById('newname').style.border="solid 2px red";
        }

    })
}
function saveOldToDo(elementid){
    let saveoldtodo= document.getElementById('saveoldtodo');
    saveoldtodo.addEventListener('click', ()=>{
        let task = document.getElementById('newname').value;
        let description = document.getElementById('newdescription').value;
        let duedate = document.getElementById('newduedate').value;
        let priority = document.getElementById('newpriority').value;
        if(task!==""){
            currentProject.editToDo(elementid, task, description, duedate,priority, currentProject.todoArray[elementid].completion);
            maptodos();
            displayEditModal();
            editTaskCompletion();
            let modal = document.getElementById('editToDoModal');
            modal.remove();
        }
        else{
            document.getElementById('newname').style.border="solid 2px red";
        }

    })
}
function deleteToDo(elementid){
    let deletetodo= document.getElementById('deletetodo');
    deletetodo.addEventListener('click', ()=>{
        currentProject.deleteToDo(elementid);
        maptodos();
        displayEditModal();
        editTaskCompletion();
        let modal = document.getElementById('editToDoModal');
        modal.remove();
    })
}

/////////////////



function displayMain(currentProjectExport=undefined){
    checkAllProjects();
    if(currentProjectExport!==undefined){
        currentProject=currentProjectExport;
    }
    else{
        currentProject = practiceProject;
    }
    let main = document.querySelector('main');

    main.appendChild(displayHeader());
    main.appendChild(mainContent());
    maptodos();
    displayEditModal();
    editTaskCompletion();
    //newtodomodal
    let addtodobutton = document.getElementById('addToDo');
    addtodobutton.addEventListener('click', ()=>{
        let modal = document.getElementById('newToDoModal');
        if (modal=== null){
            main.appendChild(newToDoModal());
            saveNewToDo();
        }
        else{
            modal.remove();
        }
        
    })
}

function displayEditModal(){
    // edittodomodal
    let edittodobutton = document.getElementsByClassName('open_todo');
    Array.from(edittodobutton).forEach((r)=>{
        r.addEventListener('click', (e)=>{
            let main = document.querySelector('main');
            let modal = document.getElementById('editToDoModal');
            if (modal=== null){
                main.appendChild(editToDoModal(e.target.parentElement.id)); //id of todo is equal to index of todo in projectarray
                saveOldToDo(e.target.parentElement.id); //e.id
                deleteToDo(e.target.parentElement.id);
            }  
        })
    })
}

function editTaskCompletion(){
    // edittodomodal
    let taskcheckboxes = document.getElementsByClassName('check_todo');
    Array.from(taskcheckboxes).forEach((r)=>{
        r.addEventListener('click', (e)=>{
            if(e.target.checked){
                let index = e.target.parentElement.id;
                let array = currentProject.todoArray[index];
                // console.log(currentProject);
                // console.log(array);
                currentProject.editToDo(index, array.title, array.description, array.dueDate, array.priority, true);
                // console.log(currentProject);
            }
            else{
                // console.log('uncheck!');
                let index = e.target.parentElement.id;
                let array = currentProject.todoArray[index];
                currentProject.editToDo(index, array.title, array.description, array.dueDate, array.priority, false);
                // console.log(array);
            }
        })
    })
}

function displayHeader(){
    let header = document.createElement('header');
    header.setAttribute('id', 'main_header');
    let headertitle = document.createElement('input');
    headertitle.setAttribute('type', 'text');
    headertitle.setAttribute('value', currentProject.name);
    header.appendChild(headertitle);
    headertitle.addEventListener('change', (e)=>{
        currentProject.name = e.target.value;
    })
    return header;
}

function mainContent(){
    let content = document.createElement('div');
    content.setAttribute('id', 'workspace')
    content.appendChild(displayProject());
    content.appendChild(displayButton());

    return content;
}

function displayProject(){

    let projectHolder = document.createElement('div');
    projectHolder.setAttribute('id', 'open_project');

    //create TODO TITLES
    let toDo = document.createElement('div');
        toDo.setAttribute('id', 'toDo_title');
        toDo.setAttribute('class', 'single_toDo');
        let title = document.createElement('div');
        let dueDate = document.createElement('div');
        let priority = document.createElement('div');
        let finished = document.createElement('div');

        title.textContent= 'Task';
        dueDate.textContent= 'Due Date';
        priority.textContent= 'Priority';
        finished.textContent='Status';

        toDo.appendChild(title);
        toDo.appendChild(dueDate);
        toDo.appendChild(priority);
        toDo.appendChild(finished);
        projectHolder.appendChild(toDo);
        
    return projectHolder;
}

//DISPLAY TODOS ON SCREEN
function maptodos(){
    let projectHolder = document.getElementById('open_project');
    if(currentProject.todoArray.length<1){
        Array.from(projectHolder.children).forEach((e)=>{
            if(e.id !="toDo_title"){e.remove()};
        });
    }
    currentProject.todoArray.map((e)=>{
    //remove old todos
    Array.from(projectHolder.children).forEach((e)=>{
        if(e.id !="toDo_title"){e.remove()};
    });
    //could add in a .filter() here so the project todos are first ordered by due date and only then mapped
    //create new todos
    for(e of currentProject.todoArray){
    let toDo = document.createElement('div');
    toDo.setAttribute('id', currentProject.todoArray.indexOf(e));
    toDo.setAttribute('class', 'single_toDo');
    let title = document.createElement('div');
    let dueDate = document.createElement('div');
    let priority = document.createElement('div');
    let taskbox = document.createElement('input');
    taskbox.setAttribute('type', 'checkbox');
    taskbox.setAttribute("class", "check_todo");
    taskbox.setAttribute('value', 'finished');
    title.setAttribute('class', 'open_todo');
    priority.setAttribute('class', 'todo_priority');

    title.textContent= e.title;
    dueDate.textContent= e.dueDate;
    priority.textContent= e.priority;
    taskbox.checked = e.completion;

    toDo.appendChild(title);
    toDo.appendChild(dueDate);
    toDo.appendChild(priority);
    toDo.appendChild(taskbox);
    projectHolder.appendChild(toDo);
    
    }    
    })
}

function displayButton(){
    let addToDo = document.createElement('button');
    addToDo.setAttribute('id', 'addToDo');
    addToDo.innerHTML="&#xFF0B;";
    return addToDo;
}

function toDoModal(idmodal, idbutton, textbutton, taskvalue=undefined, descriptvalue=undefined, duevalue=undefined, priorityvalue=undefined){
    let newform = document.createElement('div');
    newform.setAttribute('id', idmodal);

    
    let newName= newFormlistElement('text','newname','Task: ', taskvalue);
    let newDescription= newFormlistElement('textarea','newdescription','Description: ', descriptvalue, 3);
    let newdueDate= newFormlistElement('date','newduedate','Duedate: ', duevalue);
    let newpriority= newFormlistElement('select','newpriority','Priority: ', priorityvalue);
    
    let buttonsdiv = document.createElement('div');
    buttonsdiv.setAttribute('class', 'buttonsdiv');
    let savenewtodo= document.createElement('button');
    savenewtodo.setAttribute('id', idbutton);
    savenewtodo.textContent=textbutton;
    if(taskvalue!==undefined){
        let newDelete= document.createElement('button');
        newDelete.setAttribute('id', 'deletetodo');
        newDelete.textContent="Delete";

        buttonsdiv.appendChild(newDelete);
    }
    buttonsdiv.appendChild(savenewtodo);

    newform.appendChild(newName);
    newform.appendChild(newDescription);
    newform.appendChild(newdueDate);
    newform.appendChild(newpriority);
    // newform.appendChild(savenewtodo);
    newform.appendChild(buttonsdiv);

    return newform;
}


function newToDoModal(){
    let newform = toDoModal('newToDoModal','savenewtodo', 'Add')
    return newform; //to displaymain
}
function editToDoModal(todoObjectindex){
    let todoObject= currentProject.todoArray[todoObjectindex];
    // console.log(currentProject);
    let task = todoObject.title;
    let description = todoObject.description;
    let due= todoObject.dueDate;
    let priority= todoObject.priority;
    let editform = toDoModal('editToDoModal', 'saveoldtodo', 'Save', task, description, due, priority);
    return editform;// to displaymain
}


function newFormlistElement(type,id,label, value, rows=undefined){
    let newElement = document.createElement('li');
    let newinput;
    if(rows!== undefined){
        newinput = document.createElement('textarea');
        newinput.setAttribute('rows', rows);
    }
    else if(type=="select"){
        newinput = document.createElement('select');
    }
    else{
    newinput = document.createElement('input');
    newinput.setAttribute('type', type);
    };

    if(value===undefined){
        newinput.value = "";
    }
    else{
        newinput.value= value;
    }
    if(type=="select"){
        let newoption = document.createElement('option');
        let newoption2 = document.createElement('option');
        let newoption3 = document.createElement('option');
        newoption.value="low";
        newoption2.value="medium";
        newoption3.value="high";
        newoption.textContent="Low";
        newoption2.textContent="Medium";
        newoption3.textContent="High";
        newinput.appendChild(newoption);
        newinput.appendChild(newoption2);
        newinput.appendChild(newoption3);
    }

    let newlabel = document.createElement('label');
    newinput.setAttribute('id', id);
    newlabel.setAttribute('for', id);
    newlabel.textContent=label;

    newElement.appendChild(newlabel);
    newElement.appendChild(newinput);

    return newElement;
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMain": () => (/* reexport safe */ _defaultpage__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "newprofilepic": () => (/* binding */ newprofilepic),
/* harmony export */   "newuser": () => (/* binding */ newuser),
/* harmony export */   "removeCurrentMain": () => (/* binding */ removeCurrentMain),
/* harmony export */   "resetaccount": () => (/* binding */ resetaccount),
/* harmony export */   "user": () => (/* binding */ user)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_ToDue_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ToDue_Logo.svg */ "./src/images/ToDue_Logo.svg");
/* harmony import */ var _images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg */ "./src/images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg");
/* harmony import */ var _images_profile1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/profile1.svg */ "./src/images/profile1.svg");
/* harmony import */ var _images_projects_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/projects.svg */ "./src/images/projects.svg");
/* harmony import */ var _images_archive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/archive.svg */ "./src/images/archive.svg");
/* harmony import */ var _defaultpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultpage */ "./src/defaultpage.js");
/* harmony import */ var _allprojects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allprojects */ "./src/allprojects.js");
/* harmony import */ var _profilepage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profilepage */ "./src/profilepage.js");







// import {practiceProject} from './defaultpage';







// DOM MANIPULATION
let user={name: "User"};
let standarprofilepic = {pic:_images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__};
let entireaccount = {projects: _defaultpage__WEBPACK_IMPORTED_MODULE_6__.allProjects};

if(localStorage.getItem('newuser')!==null){
    user.name= JSON.parse(localStorage.getItem('newuser'));
}
if(localStorage.getItem('standardprofilepic')!==null){
    standarprofilepic.pic= JSON.parse(localStorage.getItem('standardprofilepic'));
}

function displayPage(){
    let page = document.getElementById('content');
    //add sidebar
    page.appendChild(sideBar());
    page.appendChild(displayHeader());
    page.appendChild(displayContent());
}

function sideBar(){
    //creating parent elements
    let sidebar = document.createElement('aside');
    let logodiv = document.createElement('div');
    let sideMenu = document.createElement('ul');

    let logotext = document.createElement('p');
    logotext.textContent= "ToDue";
    logodiv.setAttribute('id', 'logo');
    let logoimage = new Image();
    logoimage.setAttribute('src', _images_ToDue_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);

    logodiv.appendChild(logotext);
    logodiv.appendChild(logoimage);
    //creating options
    let allProjects = createOptions('All Projects', _images_projects_svg__WEBPACK_IMPORTED_MODULE_4__);
    let profile = createOptions('Profile', _images_profile1_svg__WEBPACK_IMPORTED_MODULE_3__);
    let archived = createOptions('Archived', _images_archive_svg__WEBPACK_IMPORTED_MODULE_5__);
    allProjects.setAttribute('id', 'allprojects');
    profile.setAttribute('id', 'profile');
    archived.setAttribute('id', 'archives');
    //adding li to ul
    sideMenu.appendChild(allProjects);
    sideMenu.appendChild(profile);
    sideMenu.appendChild(archived);
    //adding child elements to sidebar
    sidebar.appendChild(logodiv);
    sidebar.appendChild(sideMenu);
    return sidebar;

}

function createOptions(name, source, idname=undefined){
    let option = document.createElement('li');
    let optionpic = document.createElement('img');
    optionpic.setAttribute('src', source);
    option.appendChild(optionpic);
    if(idname!== undefined){
        option.setAttribute('id', idname);
    }
    let optiontext = document.createElement('p');
    optiontext.textContent=name;
    option.appendChild(optiontext);
    return option;
}

function displayHeader(){
    let header = document.createElement('header');
    let searchbar = document.createElement('input');
    searchbar.setAttribute('type', 'search');

    let profile = document.createElement('div');
    let profileimg= document.createElement('img');

    profileimg.setAttribute('src', standarprofilepic.pic);
    profileimg.setAttribute('id', 'profileimg');
    let profiletext = document.createElement('p');
    
    let userspan= document.createElement('span');
    userspan.setAttribute('id', 'usernamespan');
    userspan.textContent=user.name;
    profiletext.textContent=`Welcome, `;
    profiletext.append(userspan);

    profile.appendChild(profiletext);
    profile.appendChild(profileimg);
    

    header.appendChild(searchbar);
    header.appendChild(profile);

    return header;
}

function displayContent(){
    let content = document.createElement('main');
    return content;
}

function removeCurrentMain(){
    let main= document.querySelector('main');
    for(let child of Array.from(main.children)){
        child.remove();
    }
}


displayPage();

if(_defaultpage__WEBPACK_IMPORTED_MODULE_6__.allProjects===[]){
    // console.log('displaying main of default');
    // displayMain();
}
else{
    (0,_allprojects__WEBPACK_IMPORTED_MODULE_7__["default"])();
}

//move to display all projects
let allprojects = document.getElementById('allprojects');
allprojects.addEventListener('click', ()=>{
    removeCurrentMain();
    (0,_allprojects__WEBPACK_IMPORTED_MODULE_7__["default"])();
})
//move to display
let profile = document.getElementById('profile');
profile.addEventListener('click', ()=>{
    removeCurrentMain();
    (0,_profilepage__WEBPACK_IMPORTED_MODULE_8__["default"])();
})

// console.table("All projects:");
// console.log(allProjects);

//CHANGE USERNAME
let newuser = new Proxy(user, {
    set: (target, key, value)=>{
        let header= document.querySelector('header');
        user.name = value;
        localStorage.setItem('newuser', JSON.stringify(user.name));
        header.replaceWith(displayHeader());
        return true;
    }
});

//CHANGE PROFILEPIC
let newprofilepic = new Proxy(standarprofilepic, {
    set: (target, key, value)=>{
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        standarprofilepic.pic = value;
        localStorage.setItem('standardprofilepic', JSON.stringify(standarprofilepic.pic));
        header.replaceWith(displayHeader());
        return true;
    }
});

// DELETE ACCOUNT
let resetaccount = new Proxy(entireaccount, {
    set: (target, key, value)=>{
        let main = document.querySelector('main');
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        standarprofilepic.pic = _images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;
        user.name = "User";
        entireaccount.projects = [];
        // console.log(entireaccount);
        resetaccount= entireaccount;
        localStorage.clear();
        header.replaceWith(displayHeader());
        removeCurrentMain();
        (0,_defaultpage__WEBPACK_IMPORTED_MODULE_6__["default"])();
        return true;
    }
});


/***/ }),

/***/ "./src/profilepage.js":
/*!****************************!*\
  !*** ./src/profilepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultpage */ "./src/defaultpage.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg */ "./src/images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileMain);





function profileMain(){
    let main = document.querySelector('main');
    let content = document.createElement('div');
    content.setAttribute('id', 'profilecontent');
    main.appendChild(content);
    displayProfile();
}

function displayProfile(){
    //display content of profile
    let contentbig = document.getElementById('profilecontent');
    let content = document.createElement('div');
    content.setAttribute('id', 'profileform');
    let name = (0,_defaultpage__WEBPACK_IMPORTED_MODULE_0__.newFormlistElement)('text', 'username', 'What Should I call you?', _main__WEBPACK_IMPORTED_MODULE_1__.user.name);
    let picture = document.createElement('li');

    let picreset= document.createElement('li');
    let profreset= document.createElement('li');

    let picturelabel= document.createElement('label');
    let pictureinput = document.createElement('input');

    let picturereset = document.createElement('button');
    let profilereset= document.createElement('button');

    picturereset.setAttribute('type', 'button');
    picturereset.setAttribute('id', 'resetimage');
    profilereset.setAttribute('type', 'button');
    profilereset.setAttribute('id', 'deleteprofile');

    pictureinput.setAttribute('id', 'userimage');
    pictureinput.setAttribute('type', 'file');
    picturelabel.setAttribute('for', 'userimage');

    picturereset.textContent="Reset Picture";
    profilereset.textContent="Delete Profile";
    

    picturelabel.textContent="Choose your own profile picture: ";
    pictureinput.setAttribute('accept', 'image/*');
    picture.appendChild(picturelabel);
    picture.appendChild(pictureinput);
    picreset.appendChild(picturereset);
    profreset.appendChild(profilereset);

    content.appendChild(name);
    content.appendChild(picture);
    content.appendChild(picreset);
    content.appendChild(profreset);
    contentbig.appendChild(content);
    changelistener();
}


function changelistener(){
    let profile = document.getElementById('profileform');
    let resetimage = document.getElementById('resetimage');
    let deleteprofile = document.getElementById('deleteprofile');
    profile.addEventListener('change', (e)=>{
        if(e.target.id=="username"){
            document.body.style.cursor="progress";
            setTimeout(() => {
                _main__WEBPACK_IMPORTED_MODULE_1__.newuser.name=e.target.value;
                document.body.style.cursor="default";
            }, 2000);
        }
        else if(e.target.id=="userimage"){
            onFileSelected(e);
        }
    });
    resetimage.addEventListener('click',()=>{
        _main__WEBPACK_IMPORTED_MODULE_1__.newprofilepic.pic = _images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;    
        // console.log('newprofilepic.pic');
        // console.log(newprofilepic.pic);
    });
    deleteprofile.addEventListener('click',()=>{
        _main__WEBPACK_IMPORTED_MODULE_1__.resetaccount.projects = "";
        // document.getElementById('username').value = "";
    })
}

function onFileSelected(event){
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.onload= function(event){
        _main__WEBPACK_IMPORTED_MODULE_1__.newprofilepic.pic= event.target.result;
    }
    reader.readAsDataURL(selectedFile);
}

/***/ }),

/***/ "./src/images/ToDue_Logo.svg":
/*!***********************************!*\
  !*** ./src/images/ToDue_Logo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ToDue_Logo..svg";

/***/ }),

/***/ "./src/images/archive.svg":
/*!********************************!*\
  !*** ./src/images/archive.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/archive..svg";

/***/ }),

/***/ "./src/images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cathryn-lavery-fMD_Cru6OTk-unsplash..jpg";

/***/ }),

/***/ "./src/images/profile1.svg":
/*!*********************************!*\
  !*** ./src/images/profile1.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/profile1..svg";

/***/ }),

/***/ "./src/images/projects.svg":
/*!*********************************!*\
  !*** ./src/images/projects.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/projects..svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCLHdCQUF3QixtQkFBbUIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGdCQUFnQixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUUsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMS10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9zcmMvYWxscHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL3NyYy9kZWZhdWx0cGFnZS5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL3NyYy9wcm9maWxlcGFnZS5qcyIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1iYXNlLWNvbG9yOiAjRDFEOEZBO1xcbiAgICAtLWNvbXBsaW1lbnRhcnktY29sb3I6ICNFM0Q2RjU7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5cXG5odG1sLCBib2R5LCAjY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCAxZnI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImFzaWRlIGhlYWRlclxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG5hc2lkZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDV2aCBjYWxjKDh2aCAqIDMpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRTNENkY1LCAjRDFEOEZBKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuYXNpZGUgI2xvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMEE4QUE5O1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgNHB4IHdoaXRlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI3ZTY7XFxufVxcblxcbmFzaWRlICNsb2dvIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG5hc2lkZSB1bHtcXG4gICAgZ3JpZC1yb3c6IDMvNCA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDR2aCk7XFxuICAgIGdhcDogM3ZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFxufVxcblxcbmFzaWRlIGxpe1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzBBOEFBOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuXFxuYXNpZGUgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMzg0ZjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuYXNpZGUgbGkgaW1ne1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxufVxcblxcbiNhcmNoaXZlc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSEVBREVSIERPTSAqL1xcblxcbiNjb250ZW50PmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMUQ4RkE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuI2NvbnRlbnQ+aGVhZGVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qICNjb250ZW50PmhlYWRlciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbiNjb250ZW50PmhlYWRlciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudD5oZWFkZXIgaW1ne1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcXG59XFxuXFxuLyogTUFJTiBET00gKi9cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxubWFpbj5oZWFkZXJ7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluPmhlYWRlciBpbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIGN1cnNvcjpkZWZhdWx0O1xcbn1cXG5cXG5tYWluPiN3b3Jrc3BhY2V7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxufVxcblxcbm1haW4gI29wZW5fcHJvamVjdHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTkwO1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwcHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcXG59XFxuXFxubWFpbiAjb3Blbl9wcm9qZWN0IC5zaW5nbGVfdG9Eb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAyMCUgMTclIDE3JTtcXG4gICAgZ2FwOiAyJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgMyU7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCB3aGl0ZSAycHg7XFxufVxcbm1haW4gI29wZW5fcHJvamVjdCAjdG9Eb190aXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZWRpdF90b0Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogaGVpZ2h0OiA2MCU7ICovXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMTsgKi9cXG59XFxuLm9wZW5fdG9kb3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmJ1dHRvbnNkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm1haW4gI2FkZFRvRG97XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5tYWluICNhZGRUb0RvOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4NGYzO1xcbn1cXG5cXG4jbmV3VG9Eb01vZGFsLCAjZWRpdFRvRG9Nb2RhbCwgI25ld3Byb2plY3Rtb2RhbHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhOGNhO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggZ3JheTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjAlKTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbmV3VG9Eb01vZGFsIGlucHV0LCAjbmV3VG9Eb01vZGFsIHRleHRhcmVhLCAjZWRpdFRvRG9Nb2RhbCBpbnB1dCwgI2VkaXRUb0RvTW9kYWwgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbiNuZXdUb0RvTW9kYWwgYnV0dG9uLCAjZWRpdFRvRG9Nb2RhbCBidXR0b24sIC5wcm9qZWN0YnV0dG9uc2RpdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZWRpdFRvRG9Nb2RhbCAjZGVsZXRldG9kbywgLnByb2plY3RidXR0b25zZGl2IC5kZWxldGVwcm9qZWN0YnV0dG9ue1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI25ld1RvRG9Nb2RhbCBsaSAsICNlZGl0VG9Eb01vZGFsIGxpe1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiBub25lO1xcbn1cXG5cXG4vKiBhbGwgcHJvamVjdHMgKi9cXG5cXG4jYWxscHJvamVjdHNfY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDIwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGNhbGMoKDg1dmggLSAyMHB4KSAvIDQpKTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdGNhcmR7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMwOGM5ZDMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwOGM5ZDMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDhjOWQzIDI1JSwgI0QxRDhGQSAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMzRweCAwLCAzNHB4IDAsIDAgMCwgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY4cHggNjhweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5wcm9qZWN0Y2FyZCAucHJvamVjdF9uYW1le1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5wcm9qZWN0YnV0dG9uc2RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wcm9qZWN0YnV0dG9uc2RpdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5tYWluICNhZGRQcm9qZWN0e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG59XFxubWFpbiAjYWRkUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzODRmMztcXG59XFxuXFxuI25ld3Byb2plY3Rtb2RhbCBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNuZXdwcm9qZWN0bW9kYWwgI2NhbmNlbG5ld3Byb2plY3R7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXG59XFxuXFxuLyogcHJvZmlsZSBjb250ZW50ICovXFxuXFxuI3Byb2ZpbGVjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkOGZhO1xcbm9wYWNpdHk6IDE7XFxuYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMwQThBQTkgMnB4LCAjZDFkOGZhIDJweCk7XFxuYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4jcHJvZmlsZWZvcm17XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwQThBQTk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDIwJSk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgxKSwgI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgyKXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgzKSwgI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCg0KXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiN2U2O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNyZXNldGltYWdlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEE4QUE5O1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNkZWxldGVwcm9maWxle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNkZWxldGVwcm9maWxlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUjs7Z0JBRVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxxREFBcUQ7SUFDckQsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0FB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Q0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1iYXNlLWNvbG9yOiAjRDFEOEZBO1xcbiAgICAtLWNvbXBsaW1lbnRhcnktY29sb3I6ICNFM0Q2RjU7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5cXG5odG1sLCBib2R5LCAjY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCAxZnI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImFzaWRlIGhlYWRlclxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG5hc2lkZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDV2aCBjYWxjKDh2aCAqIDMpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRTNENkY1LCAjRDFEOEZBKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuYXNpZGUgI2xvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMEE4QUE5O1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgNHB4IHdoaXRlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI3ZTY7XFxufVxcblxcbmFzaWRlICNsb2dvIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG5hc2lkZSB1bHtcXG4gICAgZ3JpZC1yb3c6IDMvNCA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDR2aCk7XFxuICAgIGdhcDogM3ZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFxufVxcblxcbmFzaWRlIGxpe1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzBBOEFBOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuXFxuYXNpZGUgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMzg0ZjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuYXNpZGUgbGkgaW1ne1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxufVxcblxcbiNhcmNoaXZlc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSEVBREVSIERPTSAqL1xcblxcbiNjb250ZW50PmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMUQ4RkE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuI2NvbnRlbnQ+aGVhZGVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qICNjb250ZW50PmhlYWRlciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbiNjb250ZW50PmhlYWRlciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudD5oZWFkZXIgaW1ne1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcXG59XFxuXFxuLyogTUFJTiBET00gKi9cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxubWFpbj5oZWFkZXJ7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluPmhlYWRlciBpbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIGN1cnNvcjpkZWZhdWx0O1xcbn1cXG5cXG5tYWluPiN3b3Jrc3BhY2V7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxufVxcblxcbm1haW4gI29wZW5fcHJvamVjdHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTkwO1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwcHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcXG59XFxuXFxubWFpbiAjb3Blbl9wcm9qZWN0IC5zaW5nbGVfdG9Eb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAyMCUgMTclIDE3JTtcXG4gICAgZ2FwOiAyJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgMyU7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCB3aGl0ZSAycHg7XFxufVxcbm1haW4gI29wZW5fcHJvamVjdCAjdG9Eb190aXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZWRpdF90b0Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogaGVpZ2h0OiA2MCU7ICovXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMTsgKi9cXG59XFxuLm9wZW5fdG9kb3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmJ1dHRvbnNkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm1haW4gI2FkZFRvRG97XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5tYWluICNhZGRUb0RvOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4NGYzO1xcbn1cXG5cXG4jbmV3VG9Eb01vZGFsLCAjZWRpdFRvRG9Nb2RhbCwgI25ld3Byb2plY3Rtb2RhbHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhOGNhO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggZ3JheTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjAlKTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbmV3VG9Eb01vZGFsIGlucHV0LCAjbmV3VG9Eb01vZGFsIHRleHRhcmVhLCAjZWRpdFRvRG9Nb2RhbCBpbnB1dCwgI2VkaXRUb0RvTW9kYWwgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbiNuZXdUb0RvTW9kYWwgYnV0dG9uLCAjZWRpdFRvRG9Nb2RhbCBidXR0b24sIC5wcm9qZWN0YnV0dG9uc2RpdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZWRpdFRvRG9Nb2RhbCAjZGVsZXRldG9kbywgLnByb2plY3RidXR0b25zZGl2IC5kZWxldGVwcm9qZWN0YnV0dG9ue1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI25ld1RvRG9Nb2RhbCBsaSAsICNlZGl0VG9Eb01vZGFsIGxpe1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiBub25lO1xcbn1cXG5cXG4vKiBhbGwgcHJvamVjdHMgKi9cXG5cXG4jYWxscHJvamVjdHNfY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDIwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGNhbGMoKDg1dmggLSAyMHB4KSAvIDQpKTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdGNhcmR7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMwOGM5ZDMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwOGM5ZDMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDhjOWQzIDI1JSwgI0QxRDhGQSAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMzRweCAwLCAzNHB4IDAsIDAgMCwgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY4cHggNjhweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5wcm9qZWN0Y2FyZCAucHJvamVjdF9uYW1le1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5wcm9qZWN0YnV0dG9uc2RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wcm9qZWN0YnV0dG9uc2RpdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5tYWluICNhZGRQcm9qZWN0e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG59XFxubWFpbiAjYWRkUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzODRmMztcXG59XFxuXFxuI25ld3Byb2plY3Rtb2RhbCBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNuZXdwcm9qZWN0bW9kYWwgI2NhbmNlbG5ld3Byb2plY3R7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXG59XFxuXFxuLyogcHJvZmlsZSBjb250ZW50ICovXFxuXFxuI3Byb2ZpbGVjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkOGZhO1xcbm9wYWNpdHk6IDE7XFxuYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMwQThBQTkgMnB4LCAjZDFkOGZhIDJweCk7XFxuYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4jcHJvZmlsZWZvcm17XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwQThBQTk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDIwJSk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgxKSwgI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgyKXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCgzKSwgI3Byb2ZpbGVmb3JtIGxpOm50aC1jaGlsZCg0KXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiN2U2O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNyZXNldGltYWdlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEE4QUE5O1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNkZWxldGVwcm9maWxle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3Byb2ZpbGVmb3JtICNkZWxldGVwcm9maWxlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgLHByb2plY3RDcmVhdG9yfSBmcm9tIFwiLi9kZWZhdWx0cGFnZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3RzbWFpbjtcbmltcG9ydCB7IGRpc3BsYXlNYWluLCByZW1vdmVDdXJyZW50TWFpbiB9IGZyb20gXCIuL21haW4uanNcIjtcblxubGV0IGN1cnJlbnRQcm9qZWN0RXhwb3J0O1xuXG5mdW5jdGlvbiBkZWxldGVwcm9qZWN0YWRkZXZlbnRsaXN0ZW5lcigpe1xuICAgIGxldCBhbGxkZWxldGVidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlcHJvamVjdGJ1dHRvbicpO1xuICAgIEFycmF5LmZyb20oYWxsZGVsZXRlYnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKT0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCwgMSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgICAgICAgICAgbWFwUHJvamVjdHMoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuZnVuY3Rpb24gb3BlbnByb2plY3RhZGRldmVudGxpc3RlbmVyKCl7XG4gICAgbGV0IG9wZW5wcm9qZWN0YnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wZW5wcm9qZWN0YnV0dG9uJyk7XG4gICAgQXJyYXkuZnJvbShvcGVucHJvamVjdGJ1dHRvbnMpLmZvckVhY2goKGJ1dHRvbik9PntcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0RXhwb3J0PSBhbGxQcm9qZWN0c1tidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXTtcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdEV4cG9ydCcsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0RXhwb3J0KSk7XG4gICAgICAgICAgICByZW1vdmVDdXJyZW50TWFpbigpO1xuICAgICAgICAgICAgZGlzcGxheU1haW4oY3VycmVudFByb2plY3RFeHBvcnQpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5mdW5jdGlvbiBtYXBQcm9qZWN0cygpe1xuICAgIC8vZGVsZXRlIG9sZCBwcm9qZWN0c1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbHByb2plY3RzX2NvbnRlbnQnKTtcbiAgICBmb3IobGV0IGk9Y29udGVudC5jaGlsZHJlbi5sZW5ndGg7IGk+MDtpLS0pe1xuICAgICAgICBjb250ZW50LmNoaWxkcmVuW2ktMV0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vcG9zdCBuZXcgcHJvamVjdHMgZnJvbSBhbGxwcm9qZWN0c2FycmF5XG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKXtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBhbGxQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvamVjdGNhcmRcIik7XG5cbiAgICAgICAgbGV0IG5hbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZWRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RfbmFtZVwiKTtcbiAgICAgICAgbmFtZWRpdi50ZXh0Q29udGVudD0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGxldCBidXR0b25zZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnNkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0YnV0dG9uc2RpdlwiKTtcbiAgICAgICAgbGV0IG9wZW5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGRlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBvcGVuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgb3BlbmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29wZW5wcm9qZWN0YnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZXByb2plY3RidXR0b24nKTtcbiAgICAgICAgb3BlbmJ1dHRvbi50ZXh0Q29udGVudD1cIk9wZW4gUHJvamVjdFwiO1xuICAgICAgICBkZWxldGVidXR0b24udGV4dENvbnRlbnQ9XCJEZWxldGUgUHJvamVjdFwiO1xuICAgICAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbnNkaXYuYXBwZW5kQ2hpbGQob3BlbmJ1dHRvbik7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChuYW1lZGl2KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zZGl2KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG4gICAgZGlzcGxheUJ1dHRvbigpOyAvL2FkZCBkaXNwbGF5IGJ1dHRvbiBhdCBlbmRcbiAgICBkZWxldGVwcm9qZWN0YWRkZXZlbnRsaXN0ZW5lcigpO1xuICAgIG9wZW5wcm9qZWN0YWRkZXZlbnRsaXN0ZW5lcigpO1xufVxuXG4vLy8vLy8vLy8vL1NUQVJUVCBIRVJFXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNtYWluKCl7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxscHJvamVjdHNfY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBtYXBQcm9qZWN0cygpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3REaXNwbGF5KCl7XG4gICAgbGV0IHBvcHVwbW9kYWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdwcm9qZWN0bW9kYWwnKTtcbiAgICBpZihwb3B1cG1vZGFsIT09dW5kZWZpbmVkJiZwb3B1cG1vZGFsIT09bnVsbCl7XG4gICAgICAgIHBvcHVwbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxscHJvamVjdHNfY29udGVudCcpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3cHJvamVjdG1vZGFsJyk7XG4gICAgbGV0IG5hbWVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgYnV0dG9uc2Rpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHNhdmVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgY2FuY2VsYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uc2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbnNkaXYnKTtcbiAgICBzYXZlYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZW5ld3Byb2plY3QnKTtcbiAgICBzYXZlYnV0dG9uLnRleHRDb250ZW50PVwiU2F2ZVwiO1xuICAgIGNhbmNlbGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbG5ld3Byb2plY3QnKTtcbiAgICBjYW5jZWxidXR0b24udGV4dENvbnRlbnQ9XCJDYW5jZWxcIjtcbiAgICBuYW1lbGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3RuYW1laXRlbScpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld3Byb2plY3RuYW1lXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld3Byb2plY3RuYW1lJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQ9XCJOZXcgUHJvamVjdCBOYW1lOiBcIjtcbiAgICBuYW1lbGlzdC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgbmFtZWxpc3QuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobmFtZWxpc3QpO1xuICAgIGJ1dHRvbnNkaXYuYXBwZW5kQ2hpbGQoY2FuY2VsYnV0dG9uKTtcbiAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKHNhdmVidXR0b24pO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnNkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG5ld3Byb2plY3Rtb2RhbGFkZGV2ZW50bGlzdGVuZXIobW9kYWwubGFzdENoaWxkKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlCdXR0b24oKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxwcm9qZWN0c19jb250ZW50Jyk7XG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MPVwiJiN4RkYwQjtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICAgIGFkZFByb2plY3RMaXN0ZW5lcigpO1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RlbmVyKCl7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgYWRkUHJvamVjdERpc3BsYXkoKTtcbiAgICB9KVxufVxuLy8vZnVuY2l0b25hbGl0eVxuXG5cblxuZnVuY3Rpb24gbmV3cHJvamVjdG1vZGFsYWRkZXZlbnRsaXN0ZW5lcihkaXYpe1xuICAgIGxldCBtb2RhbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Byb2plY3Rtb2RhbCcpO1xuICAgIGxldCBuZXdwcm9qZWN0bmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdwcm9qZWN0bmFtZScpO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBpZihlLnRhcmdldC5pZD09XCJjYW5jZWxuZXdwcm9qZWN0XCIpe1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihlLnRhcmdldC5pZD09XCJzYXZlbmV3cHJvamVjdFwiKXtcbiAgICAgICAgICAgIGlmKG5ld3Byb2plY3RuYW1lLnZhbHVlLmxlbmd0aD49MSl7XG4gICAgICAgICAgICAgICAgbmV3IHByb2plY3RDcmVhdG9yKG5ld3Byb2plY3RuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBtYXBQcm9qZWN0cygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5ld3Byb2plY3RuYW1lLnN0eWxlLmJvcmRlckNvbG9yPVwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vLy8vIiwiZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1haW47XG5leHBvcnQge3ByYWN0aWNlUHJvamVjdCwgcHJvamVjdENyZWF0b3IsIG5ld0Zvcm1saXN0RWxlbWVudCwgYWxsUHJvamVjdHN9O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lPW5hbWU7XG4gICAgdGhpcy50b2RvQXJyYXk9W107XG4gICAgdGhpcy5jcmVhdGVUb0RvPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uPWZhbHNlKSB7XG4gICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2goe3RpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBjb21wbGV0aW9ufSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9kb0FycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICB9O1xuICAgIHRoaXMuZWRpdFRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbikge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5zcGxpY2UoaW5kZXgsIDEsIHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgY29tcGxldGlvbn0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9BcnJheSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgfVxuICAgIHRoaXMuZGVsZXRlVG9EbyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIH1cbiAgICBhbGxQcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59O1xubGV0IHByYWN0aWNlUHJvamVjdDtcbmxldCBhbGxQcm9qZWN0cztcblxuZnVuY3Rpb24gY2hlY2tBbGxQcm9qZWN0cygpe1xuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykhPT1udWxsKXtcbiAgICBhbGxQcm9qZWN0cz0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XG4gICAgZm9yKGxldCBvYmplY3Qgb2YgYWxsUHJvamVjdHMpe1xuICAgICAgICBvYmplY3QuY3JlYXRlVG9Ebz0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbj1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksIGNvbXBsZXRpb259KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9kb0FycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgICAgIH07XG4gICAgICAgIG9iamVjdC5lZGl0VG9EbyA9IGZ1bmN0aW9uKGluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5zcGxpY2UoaW5kZXgsIDEsIHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgY29tcGxldGlvbn0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3QuZGVsZXRlVG9EbyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9BcnJheSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgICAgICB9IFxuICAgIH1cbn1cbmVsc2V7XG4gICAgYWxsUHJvamVjdHM9IFtdO1xuICAgIHByYWN0aWNlUHJvamVjdCA9IG5ldyBwcm9qZWN0Q3JlYXRvcignRGVmYXVsdCBQcm9qZWN0Jyk7XG59XG59XG5jaGVja0FsbFByb2plY3RzKCk7XG4vLyBzdGFuZGFyZFByb2plY3RzPSBhbGxQcm9qZWN0cztcbmxldCBjdXJyZW50UHJvamVjdDtcblxuLy9mdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3Igc2F2aW5nIG5ldyB0b2RvXG5mdW5jdGlvbiBzYXZlTmV3VG9Ebygpe1xuICAgIGxldCBzYXZlbmV3dG9kbz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVuZXd0b2RvJyk7XG4gICAgc2F2ZW5ld3RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXduYW1lJykudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdkdWVkYXRlJykudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBpZih0YXNrIT09XCJcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5jcmVhdGVUb0RvKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBtYXB0b2RvcygpO1xuICAgICAgICAgICAgZGlzcGxheUVkaXRNb2RhbCgpO1xuICAgICAgICAgICAgZWRpdFRhc2tDb21wbGV0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VG9Eb01vZGFsJyk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld25hbWUnKS5zdHlsZS5ib3JkZXI9XCJzb2xpZCAycHggcmVkXCI7XG4gICAgICAgIH1cblxuICAgIH0pXG59XG5mdW5jdGlvbiBzYXZlT2xkVG9EbyhlbGVtZW50aWQpe1xuICAgIGxldCBzYXZlb2xkdG9kbz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVvbGR0b2RvJyk7XG4gICAgc2F2ZW9sZHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXduYW1lJykudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdkdWVkYXRlJykudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBpZih0YXNrIT09XCJcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5lZGl0VG9EbyhlbGVtZW50aWQsIHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVkYXRlLHByaW9yaXR5LCBjdXJyZW50UHJvamVjdC50b2RvQXJyYXlbZWxlbWVudGlkXS5jb21wbGV0aW9uKTtcbiAgICAgICAgICAgIG1hcHRvZG9zKCk7XG4gICAgICAgICAgICBkaXNwbGF5RWRpdE1vZGFsKCk7XG4gICAgICAgICAgICBlZGl0VGFza0NvbXBsZXRpb24oKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9Eb01vZGFsJyk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld25hbWUnKS5zdHlsZS5ib3JkZXI9XCJzb2xpZCAycHggcmVkXCI7XG4gICAgICAgIH1cblxuICAgIH0pXG59XG5mdW5jdGlvbiBkZWxldGVUb0RvKGVsZW1lbnRpZCl7XG4gICAgbGV0IGRlbGV0ZXRvZG89IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGV0b2RvJyk7XG4gICAgZGVsZXRldG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmRlbGV0ZVRvRG8oZWxlbWVudGlkKTtcbiAgICAgICAgbWFwdG9kb3MoKTtcbiAgICAgICAgZGlzcGxheUVkaXRNb2RhbCgpO1xuICAgICAgICBlZGl0VGFza0NvbXBsZXRpb24oKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb0RvTW9kYWwnKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNYWluKGN1cnJlbnRQcm9qZWN0RXhwb3J0PXVuZGVmaW5lZCl7XG4gICAgY2hlY2tBbGxQcm9qZWN0cygpO1xuICAgIGlmKGN1cnJlbnRQcm9qZWN0RXhwb3J0IT09dW5kZWZpbmVkKXtcbiAgICAgICAgY3VycmVudFByb2plY3Q9Y3VycmVudFByb2plY3RFeHBvcnQ7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJhY3RpY2VQcm9qZWN0O1xuICAgIH1cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUhlYWRlcigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIG1hcHRvZG9zKCk7XG4gICAgZGlzcGxheUVkaXRNb2RhbCgpO1xuICAgIGVkaXRUYXNrQ29tcGxldGlvbigpO1xuICAgIC8vbmV3dG9kb21vZGFsXG4gICAgbGV0IGFkZHRvZG9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9EbycpO1xuICAgIGFkZHRvZG9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VG9Eb01vZGFsJyk7XG4gICAgICAgIGlmIChtb2RhbD09PSBudWxsKXtcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VG9Eb01vZGFsKCkpO1xuICAgICAgICAgICAgc2F2ZU5ld1RvRG8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpe1xuICAgIC8vIGVkaXR0b2RvbW9kYWxcbiAgICBsZXQgZWRpdHRvZG9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcGVuX3RvZG8nKTtcbiAgICBBcnJheS5mcm9tKGVkaXR0b2RvYnV0dG9uKS5mb3JFYWNoKChyKT0+e1xuICAgICAgICByLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9Eb01vZGFsJyk7XG4gICAgICAgICAgICBpZiAobW9kYWw9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlZGl0VG9Eb01vZGFsKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpKTsgLy9pZCBvZiB0b2RvIGlzIGVxdWFsIHRvIGluZGV4IG9mIHRvZG8gaW4gcHJvamVjdGFycmF5XG4gICAgICAgICAgICAgICAgc2F2ZU9sZFRvRG8oZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7IC8vZS5pZFxuICAgICAgICAgICAgICAgIGRlbGV0ZVRvRG8oZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0VGFza0NvbXBsZXRpb24oKXtcbiAgICAvLyBlZGl0dG9kb21vZGFsXG4gICAgbGV0IHRhc2tjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tfdG9kbycpO1xuICAgIEFycmF5LmZyb20odGFza2NoZWNrYm94ZXMpLmZvckVhY2goKHIpPT57XG4gICAgICAgIHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gY3VycmVudFByb2plY3QudG9kb0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmVkaXRUb0RvKGluZGV4LCBhcnJheS50aXRsZSwgYXJyYXkuZGVzY3JpcHRpb24sIGFycmF5LmR1ZURhdGUsIGFycmF5LnByaW9yaXR5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoZWNrIScpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gY3VycmVudFByb2plY3QudG9kb0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5lZGl0VG9EbyhpbmRleCwgYXJyYXkudGl0bGUsIGFycmF5LmRlc2NyaXB0aW9uLCBhcnJheS5kdWVEYXRlLCBhcnJheS5wcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCl7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5faGVhZGVyJyk7XG4gICAgbGV0IGhlYWRlcnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoZWFkZXJ0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGhlYWRlcnRpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVydGl0bGUpO1xuICAgIGhlYWRlcnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKT0+e1xuICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWluQ29udGVudCgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dvcmtzcGFjZScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKXtcblxuICAgIGxldCBwcm9qZWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wZW5fcHJvamVjdCcpO1xuXG4gICAgLy9jcmVhdGUgVE9ETyBUSVRMRVNcbiAgICBsZXQgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb190aXRsZScpO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2luZ2xlX3RvRG8nKTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudD0gJ1Rhc2snO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50PSAnRHVlIERhdGUnO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudD0gJ1ByaW9yaXR5JztcbiAgICAgICAgZmluaXNoZWQudGV4dENvbnRlbnQ9J1N0YXR1cyc7XG5cbiAgICAgICAgdG9Eby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGZpbmlzaGVkKTtcbiAgICAgICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHByb2plY3RIb2xkZXI7XG59XG5cbi8vRElTUExBWSBUT0RPUyBPTiBTQ1JFRU5cbmZ1bmN0aW9uIG1hcHRvZG9zKCl7XG4gICAgbGV0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbl9wcm9qZWN0Jyk7XG4gICAgaWYoY3VycmVudFByb2plY3QudG9kb0FycmF5Lmxlbmd0aDwxKXtcbiAgICAgICAgQXJyYXkuZnJvbShwcm9qZWN0SG9sZGVyLmNoaWxkcmVuKS5mb3JFYWNoKChlKT0+e1xuICAgICAgICAgICAgaWYoZS5pZCAhPVwidG9Eb190aXRsZVwiKXtlLnJlbW92ZSgpfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9BcnJheS5tYXAoKGUpPT57XG4gICAgLy9yZW1vdmUgb2xkIHRvZG9zXG4gICAgQXJyYXkuZnJvbShwcm9qZWN0SG9sZGVyLmNoaWxkcmVuKS5mb3JFYWNoKChlKT0+e1xuICAgICAgICBpZihlLmlkICE9XCJ0b0RvX3RpdGxlXCIpe2UucmVtb3ZlKCl9O1xuICAgIH0pO1xuICAgIC8vY291bGQgYWRkIGluIGEgLmZpbHRlcigpIGhlcmUgc28gdGhlIHByb2plY3QgdG9kb3MgYXJlIGZpcnN0IG9yZGVyZWQgYnkgZHVlIGRhdGUgYW5kIG9ubHkgdGhlbiBtYXBwZWRcbiAgICAvL2NyZWF0ZSBuZXcgdG9kb3NcbiAgICBmb3IoZSBvZiBjdXJyZW50UHJvamVjdC50b2RvQXJyYXkpe1xuICAgIGxldCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eby5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudFByb2plY3QudG9kb0FycmF5LmluZGV4T2YoZSkpO1xuICAgIHRvRG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaW5nbGVfdG9EbycpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRhc2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgdGFza2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNoZWNrX3RvZG9cIik7XG4gICAgdGFza2JveC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZpbmlzaGVkJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcGVuX3RvZG8nKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG9fcHJpb3JpdHknKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50PSBlLnRpdGxlO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9IGUuZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudD0gZS5wcmlvcml0eTtcbiAgICB0YXNrYm94LmNoZWNrZWQgPSBlLmNvbXBsZXRpb247XG5cbiAgICB0b0RvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0b0RvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRvRG8uYXBwZW5kQ2hpbGQodGFza2JveCk7XG4gICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgICBcbiAgICB9ICAgIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCdXR0b24oKXtcbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvRG8uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb0RvJyk7XG4gICAgYWRkVG9Eby5pbm5lckhUTUw9XCImI3hGRjBCO1wiO1xuICAgIHJldHVybiBhZGRUb0RvO1xufVxuXG5mdW5jdGlvbiB0b0RvTW9kYWwoaWRtb2RhbCwgaWRidXR0b24sIHRleHRidXR0b24sIHRhc2t2YWx1ZT11bmRlZmluZWQsIGRlc2NyaXB0dmFsdWU9dW5kZWZpbmVkLCBkdWV2YWx1ZT11bmRlZmluZWQsIHByaW9yaXR5dmFsdWU9dW5kZWZpbmVkKXtcbiAgICBsZXQgbmV3Zm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld2Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGlkbW9kYWwpO1xuXG4gICAgXG4gICAgbGV0IG5ld05hbWU9IG5ld0Zvcm1saXN0RWxlbWVudCgndGV4dCcsJ25ld25hbWUnLCdUYXNrOiAnLCB0YXNrdmFsdWUpO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbj0gbmV3Rm9ybWxpc3RFbGVtZW50KCd0ZXh0YXJlYScsJ25ld2Rlc2NyaXB0aW9uJywnRGVzY3JpcHRpb246ICcsIGRlc2NyaXB0dmFsdWUsIDMpO1xuICAgIGxldCBuZXdkdWVEYXRlPSBuZXdGb3JtbGlzdEVsZW1lbnQoJ2RhdGUnLCduZXdkdWVkYXRlJywnRHVlZGF0ZTogJywgZHVldmFsdWUpO1xuICAgIGxldCBuZXdwcmlvcml0eT0gbmV3Rm9ybWxpc3RFbGVtZW50KCdzZWxlY3QnLCduZXdwcmlvcml0eScsJ1ByaW9yaXR5OiAnLCBwcmlvcml0eXZhbHVlKTtcbiAgICBcbiAgICBsZXQgYnV0dG9uc2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b25zZGl2Jyk7XG4gICAgbGV0IHNhdmVuZXd0b2RvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlbmV3dG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRidXR0b24pO1xuICAgIHNhdmVuZXd0b2RvLnRleHRDb250ZW50PXRleHRidXR0b247XG4gICAgaWYodGFza3ZhbHVlIT09dW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IG5ld0RlbGV0ZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZXRvZG8nKTtcbiAgICAgICAgbmV3RGVsZXRlLnRleHRDb250ZW50PVwiRGVsZXRlXCI7XG5cbiAgICAgICAgYnV0dG9uc2Rpdi5hcHBlbmRDaGlsZChuZXdEZWxldGUpO1xuICAgIH1cbiAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKHNhdmVuZXd0b2RvKTtcblxuICAgIG5ld2Zvcm0uYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgbmV3Zm9ybS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgbmV3Zm9ybS5hcHBlbmRDaGlsZChuZXdkdWVEYXRlKTtcbiAgICBuZXdmb3JtLmFwcGVuZENoaWxkKG5ld3ByaW9yaXR5KTtcbiAgICAvLyBuZXdmb3JtLmFwcGVuZENoaWxkKHNhdmVuZXd0b2RvKTtcbiAgICBuZXdmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNkaXYpO1xuXG4gICAgcmV0dXJuIG5ld2Zvcm07XG59XG5cblxuZnVuY3Rpb24gbmV3VG9Eb01vZGFsKCl7XG4gICAgbGV0IG5ld2Zvcm0gPSB0b0RvTW9kYWwoJ25ld1RvRG9Nb2RhbCcsJ3NhdmVuZXd0b2RvJywgJ0FkZCcpXG4gICAgcmV0dXJuIG5ld2Zvcm07IC8vdG8gZGlzcGxheW1haW5cbn1cbmZ1bmN0aW9uIGVkaXRUb0RvTW9kYWwodG9kb09iamVjdGluZGV4KXtcbiAgICBsZXQgdG9kb09iamVjdD0gY3VycmVudFByb2plY3QudG9kb0FycmF5W3RvZG9PYmplY3RpbmRleF07XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIGxldCB0YXNrID0gdG9kb09iamVjdC50aXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvT2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIGxldCBkdWU9IHRvZG9PYmplY3QuZHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHk9IHRvZG9PYmplY3QucHJpb3JpdHk7XG4gICAgbGV0IGVkaXRmb3JtID0gdG9Eb01vZGFsKCdlZGl0VG9Eb01vZGFsJywgJ3NhdmVvbGR0b2RvJywgJ1NhdmUnLCB0YXNrLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIGVkaXRmb3JtOy8vIHRvIGRpc3BsYXltYWluXG59XG5cblxuZnVuY3Rpb24gbmV3Rm9ybWxpc3RFbGVtZW50KHR5cGUsaWQsbGFiZWwsIHZhbHVlLCByb3dzPXVuZGVmaW5lZCl7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBuZXdpbnB1dDtcbiAgICBpZihyb3dzIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIG5ld2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgbmV3aW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgcm93cyk7XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZT09XCJzZWxlY3RcIil7XG4gICAgICAgIG5ld2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgbmV3aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIH07XG5cbiAgICBpZih2YWx1ZT09PXVuZGVmaW5lZCl7XG4gICAgICAgIG5ld2lucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbmV3aW5wdXQudmFsdWU9IHZhbHVlO1xuICAgIH1cbiAgICBpZih0eXBlPT1cInNlbGVjdFwiKXtcbiAgICAgICAgbGV0IG5ld29wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsZXQgbmV3b3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsZXQgbmV3b3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBuZXdvcHRpb24udmFsdWU9XCJsb3dcIjtcbiAgICAgICAgbmV3b3B0aW9uMi52YWx1ZT1cIm1lZGl1bVwiO1xuICAgICAgICBuZXdvcHRpb24zLnZhbHVlPVwiaGlnaFwiO1xuICAgICAgICBuZXdvcHRpb24udGV4dENvbnRlbnQ9XCJMb3dcIjtcbiAgICAgICAgbmV3b3B0aW9uMi50ZXh0Q29udGVudD1cIk1lZGl1bVwiO1xuICAgICAgICBuZXdvcHRpb24zLnRleHRDb250ZW50PVwiSGlnaFwiO1xuICAgICAgICBuZXdpbnB1dC5hcHBlbmRDaGlsZChuZXdvcHRpb24pO1xuICAgICAgICBuZXdpbnB1dC5hcHBlbmRDaGlsZChuZXdvcHRpb24yKTtcbiAgICAgICAgbmV3aW5wdXQuYXBwZW5kQ2hpbGQobmV3b3B0aW9uMyk7XG4gICAgfVxuXG4gICAgbGV0IG5ld2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIG5ld2xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIG5ld2xhYmVsLnRleHRDb250ZW50PWxhYmVsO1xuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdsYWJlbCk7XG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdpbnB1dCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nb3BpYyBmcm9tICcuL2ltYWdlcy9Ub0R1ZV9Mb2dvLnN2Zyc7XG5pbXBvcnQgdXNlcnBpYyBmcm9tICcuL2ltYWdlcy9jYXRocnluLWxhdmVyeS1mTURfQ3J1Nk9Uay11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IHByb2ZpbGVwaWMgZnJvbSAnLi9pbWFnZXMvcHJvZmlsZTEuc3ZnJztcbmltcG9ydCBwcm9qZWN0c3BpYyBmcm9tICcuL2ltYWdlcy9wcm9qZWN0cy5zdmcnO1xuaW1wb3J0IGFyY2hpdmVzcGljIGZyb20gJy4vaW1hZ2VzL2FyY2hpdmUuc3ZnJztcbmltcG9ydCBkaXNwbGF5TWFpbiBmcm9tIFwiLi9kZWZhdWx0cGFnZVwiO1xuLy8gaW1wb3J0IHtwcmFjdGljZVByb2plY3R9IGZyb20gJy4vZGVmYXVsdHBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0c21haW4gZnJvbSAnLi9hbGxwcm9qZWN0cyc7XG5leHBvcnQge3JlbW92ZUN1cnJlbnRNYWluLCBkaXNwbGF5TWFpbn07XG5pbXBvcnQgcHJvZmlsZU1haW4gZnJvbSAnLi9wcm9maWxlcGFnZSc7XG5leHBvcnQge3VzZXIsIG5ld3VzZXIsIG5ld3Byb2ZpbGVwaWN9O1xuaW1wb3J0IHthbGxQcm9qZWN0c30gZnJvbSAnLi9kZWZhdWx0cGFnZSc7XG5leHBvcnQge3Jlc2V0YWNjb3VudH07XG5cbi8vIERPTSBNQU5JUFVMQVRJT05cbmxldCB1c2VyPXtuYW1lOiBcIlVzZXJcIn07XG5sZXQgc3RhbmRhcnByb2ZpbGVwaWMgPSB7cGljOnVzZXJwaWN9O1xubGV0IGVudGlyZWFjY291bnQgPSB7cHJvamVjdHM6IGFsbFByb2plY3RzfTtcblxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld3VzZXInKSE9PW51bGwpe1xuICAgIHVzZXIubmFtZT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmV3dXNlcicpKTtcbn1cbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFuZGFyZHByb2ZpbGVwaWMnKSE9PW51bGwpe1xuICAgIHN0YW5kYXJwcm9maWxlcGljLnBpYz0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhbmRhcmRwcm9maWxlcGljJykpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpe1xuICAgIGxldCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAvL2FkZCBzaWRlYmFyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChzaWRlQmFyKCkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZGlzcGxheUhlYWRlcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50KCkpO1xufVxuXG5mdW5jdGlvbiBzaWRlQmFyKCl7XG4gICAgLy9jcmVhdGluZyBwYXJlbnQgZWxlbWVudHNcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgbGV0IGxvZ29kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgc2lkZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgbGV0IGxvZ290ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvZ290ZXh0LnRleHRDb250ZW50PSBcIlRvRHVlXCI7XG4gICAgbG9nb2Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgICBsZXQgbG9nb2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb2ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgbG9nb3BpYyk7XG5cbiAgICBsb2dvZGl2LmFwcGVuZENoaWxkKGxvZ290ZXh0KTtcbiAgICBsb2dvZGl2LmFwcGVuZENoaWxkKGxvZ29pbWFnZSk7XG4gICAgLy9jcmVhdGluZyBvcHRpb25zXG4gICAgbGV0IGFsbFByb2plY3RzID0gY3JlYXRlT3B0aW9ucygnQWxsIFByb2plY3RzJywgcHJvamVjdHNwaWMpO1xuICAgIGxldCBwcm9maWxlID0gY3JlYXRlT3B0aW9ucygnUHJvZmlsZScsIHByb2ZpbGVwaWMpO1xuICAgIGxldCBhcmNoaXZlZCA9IGNyZWF0ZU9wdGlvbnMoJ0FyY2hpdmVkJywgYXJjaGl2ZXNwaWMpO1xuICAgIGFsbFByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxscHJvamVjdHMnKTtcbiAgICBwcm9maWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZScpO1xuICAgIGFyY2hpdmVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXJjaGl2ZXMnKTtcbiAgICAvL2FkZGluZyBsaSB0byB1bFxuICAgIHNpZGVNZW51LmFwcGVuZENoaWxkKGFsbFByb2plY3RzKTtcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChhcmNoaXZlZCk7XG4gICAgLy9hZGRpbmcgY2hpbGQgZWxlbWVudHMgdG8gc2lkZWJhclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobG9nb2Rpdik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlTWVudSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhuYW1lLCBzb3VyY2UsIGlkbmFtZT11bmRlZmluZWQpe1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBvcHRpb25waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcHRpb25waWMuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25waWMpO1xuICAgIGlmKGlkbmFtZSE9PSB1bmRlZmluZWQpe1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGlkbmFtZSk7XG4gICAgfVxuICAgIGxldCBvcHRpb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9wdGlvbnRleHQudGV4dENvbnRlbnQ9bmFtZTtcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9udGV4dCk7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpe1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuXG4gICAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvZmlsZWltZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwcm9maWxlaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3RhbmRhcnByb2ZpbGVwaWMucGljKTtcbiAgICBwcm9maWxlaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZWltZycpO1xuICAgIGxldCBwcm9maWxldGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICBsZXQgdXNlcnNwYW49IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB1c2Vyc3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJuYW1lc3BhbicpO1xuICAgIHVzZXJzcGFuLnRleHRDb250ZW50PXVzZXIubmFtZTtcbiAgICBwcm9maWxldGV4dC50ZXh0Q29udGVudD1gV2VsY29tZSwgYDtcbiAgICBwcm9maWxldGV4dC5hcHBlbmQodXNlcnNwYW4pO1xuXG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxldGV4dCk7XG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlaW1nKTtcbiAgICBcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hiYXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRNYWluKCl7XG4gICAgbGV0IG1haW49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBmb3IobGV0IGNoaWxkIG9mIEFycmF5LmZyb20obWFpbi5jaGlsZHJlbikpe1xuICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuZGlzcGxheVBhZ2UoKTtcblxuaWYoYWxsUHJvamVjdHM9PT1bXSl7XG4gICAgLy8gY29uc29sZS5sb2coJ2Rpc3BsYXlpbmcgbWFpbiBvZiBkZWZhdWx0Jyk7XG4gICAgLy8gZGlzcGxheU1haW4oKTtcbn1cbmVsc2V7XG4gICAgZGlzcGxheVByb2plY3RzbWFpbigpO1xufVxuXG4vL21vdmUgdG8gZGlzcGxheSBhbGwgcHJvamVjdHNcbmxldCBhbGxwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxwcm9qZWN0cycpO1xuYWxscHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHJlbW92ZUN1cnJlbnRNYWluKCk7XG4gICAgZGlzcGxheVByb2plY3RzbWFpbigpO1xufSlcbi8vbW92ZSB0byBkaXNwbGF5XG5sZXQgcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XG5wcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDdXJyZW50TWFpbigpO1xuICAgIHByb2ZpbGVNYWluKCk7XG59KVxuXG4vLyBjb25zb2xlLnRhYmxlKFwiQWxsIHByb2plY3RzOlwiKTtcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuLy9DSEFOR0UgVVNFUk5BTUVcbmxldCBuZXd1c2VyID0gbmV3IFByb3h5KHVzZXIsIHtcbiAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpPT57XG4gICAgICAgIGxldCBoZWFkZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICB1c2VyLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25ld3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyLm5hbWUpKTtcbiAgICAgICAgaGVhZGVyLnJlcGxhY2VXaXRoKGRpc3BsYXlIZWFkZXIoKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0pO1xuXG4vL0NIQU5HRSBQUk9GSUxFUElDXG5sZXQgbmV3cHJvZmlsZXBpYyA9IG5ldyBQcm94eShzdGFuZGFycHJvZmlsZXBpYywge1xuICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSk9PntcbiAgICAgICAgbGV0IGhlYWRlcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7IC8vaGVhZGVyLnJlcGxhY2V3aXRoIHdhc250IHdvcmtpbmcgd2hlbiBoZWFkZXIgd2FzIG91dHNpZGUgb2Ygc2V0LiBkb250IGZvcmdldCB0byByZWxvYWQgZWxlbWVudC9ub2RlIGV2ZXJ5IHRpbWUgaXQgY2hhbmdlc1xuICAgICAgICBzdGFuZGFycHJvZmlsZXBpYy5waWMgPSB2YWx1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YW5kYXJkcHJvZmlsZXBpYycsIEpTT04uc3RyaW5naWZ5KHN0YW5kYXJwcm9maWxlcGljLnBpYykpO1xuICAgICAgICBoZWFkZXIucmVwbGFjZVdpdGgoZGlzcGxheUhlYWRlcigpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSk7XG5cbi8vIERFTEVURSBBQ0NPVU5UXG5sZXQgcmVzZXRhY2NvdW50ID0gbmV3IFByb3h5KGVudGlyZWFjY291bnQsIHtcbiAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpPT57XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgaGVhZGVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTsgLy9oZWFkZXIucmVwbGFjZXdpdGggd2FzbnQgd29ya2luZyB3aGVuIGhlYWRlciB3YXMgb3V0c2lkZSBvZiBzZXQuIGRvbnQgZm9yZ2V0IHRvIHJlbG9hZCBlbGVtZW50L25vZGUgZXZlcnkgdGltZSBpdCBjaGFuZ2VzXG4gICAgICAgIHN0YW5kYXJwcm9maWxlcGljLnBpYyA9IHVzZXJwaWM7XG4gICAgICAgIHVzZXIubmFtZSA9IFwiVXNlclwiO1xuICAgICAgICBlbnRpcmVhY2NvdW50LnByb2plY3RzID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVudGlyZWFjY291bnQpO1xuICAgICAgICByZXNldGFjY291bnQ9IGVudGlyZWFjY291bnQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBoZWFkZXIucmVwbGFjZVdpdGgoZGlzcGxheUhlYWRlcigpKTtcbiAgICAgICAgcmVtb3ZlQ3VycmVudE1haW4oKTtcbiAgICAgICAgZGlzcGxheU1haW4oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBwcm9maWxlTWFpbjtcbmltcG9ydCB7IG5ld0Zvcm1saXN0RWxlbWVudCwgc3RhbmRhcmRQcm9qZWN0cyB9IGZyb20gXCIuL2RlZmF1bHRwYWdlXCI7XG5pbXBvcnQgeyB1c2VyLCBuZXd1c2VyICwgbmV3cHJvZmlsZXBpYywgcmVzZXRhY2NvdW50fSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgdXNlcnBpYyBmcm9tICcuL2ltYWdlcy9jYXRocnluLWxhdmVyeS1mTURfQ3J1Nk9Uay11bnNwbGFzaC5qcGcnO1xuXG5cbmZ1bmN0aW9uIHByb2ZpbGVNYWluKCl7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZWNvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRpc3BsYXlQcm9maWxlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9maWxlKCl7XG4gICAgLy9kaXNwbGF5IGNvbnRlbnQgb2YgcHJvZmlsZVxuICAgIGxldCBjb250ZW50YmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGVjb250ZW50Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZWZvcm0nKTtcbiAgICBsZXQgbmFtZSA9IG5ld0Zvcm1saXN0RWxlbWVudCgndGV4dCcsICd1c2VybmFtZScsICdXaGF0IFNob3VsZCBJIGNhbGwgeW91PycsIHVzZXIubmFtZSk7XG4gICAgbGV0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGV0IHBpY3Jlc2V0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBwcm9mcmVzZXQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBsZXQgcGljdHVyZWxhYmVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBwaWN0dXJlaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgbGV0IHBpY3R1cmVyZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBwcm9maWxlcmVzZXQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgcGljdHVyZXJlc2V0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBwaWN0dXJlcmVzZXQuc2V0QXR0cmlidXRlKCdpZCcsICdyZXNldGltYWdlJyk7XG4gICAgcHJvZmlsZXJlc2V0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBwcm9maWxlcmVzZXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVwcm9maWxlJyk7XG5cbiAgICBwaWN0dXJlaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyaW1hZ2UnKTtcbiAgICBwaWN0dXJlaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcbiAgICBwaWN0dXJlbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlcmltYWdlJyk7XG5cbiAgICBwaWN0dXJlcmVzZXQudGV4dENvbnRlbnQ9XCJSZXNldCBQaWN0dXJlXCI7XG4gICAgcHJvZmlsZXJlc2V0LnRleHRDb250ZW50PVwiRGVsZXRlIFByb2ZpbGVcIjtcbiAgICBcblxuICAgIHBpY3R1cmVsYWJlbC50ZXh0Q29udGVudD1cIkNob29zZSB5b3VyIG93biBwcm9maWxlIHBpY3R1cmU6IFwiO1xuICAgIHBpY3R1cmVpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XG4gICAgcGljdHVyZS5hcHBlbmRDaGlsZChwaWN0dXJlbGFiZWwpO1xuICAgIHBpY3R1cmUuYXBwZW5kQ2hpbGQocGljdHVyZWlucHV0KTtcbiAgICBwaWNyZXNldC5hcHBlbmRDaGlsZChwaWN0dXJlcmVzZXQpO1xuICAgIHByb2ZyZXNldC5hcHBlbmRDaGlsZChwcm9maWxlcmVzZXQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGljcmVzZXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvZnJlc2V0KTtcbiAgICBjb250ZW50YmlnLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNoYW5nZWxpc3RlbmVyKCk7XG59XG5cblxuZnVuY3Rpb24gY2hhbmdlbGlzdGVuZXIoKXtcbiAgICBsZXQgcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlZm9ybScpO1xuICAgIGxldCByZXNldGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0aW1hZ2UnKTtcbiAgICBsZXQgZGVsZXRlcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVwcm9maWxlJyk7XG4gICAgcHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuaWQ9PVwidXNlcm5hbWVcIil7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvcj1cInByb2dyZXNzXCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXd1c2VyLm5hbWU9ZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3I9XCJkZWZhdWx0XCI7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmlkPT1cInVzZXJpbWFnZVwiKXtcbiAgICAgICAgICAgIG9uRmlsZVNlbGVjdGVkKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmVzZXRpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbmV3cHJvZmlsZXBpYy5waWMgPSB1c2VycGljOyAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25ld3Byb2ZpbGVwaWMucGljJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld3Byb2ZpbGVwaWMucGljKTtcbiAgICB9KTtcbiAgICBkZWxldGVwcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICByZXNldGFjY291bnQucHJvamVjdHMgPSBcIlwiO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKS52YWx1ZSA9IFwiXCI7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb25GaWxlU2VsZWN0ZWQoZXZlbnQpe1xuICAgIGxldCBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZD0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBuZXdwcm9maWxlcGljLnBpYz0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==