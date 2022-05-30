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
            (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.displayMain)(button.parentElement.parentElement.id);
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
        // console.log(this);
        // console.log(allProjects);
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
    for(let object=0; object< allProjects.length; object++){
        // console.log(allProjects);
        allProjects[object].createToDo= function(title, description, dueDate, priority, completion=false) {
            allProjects[object].todoArray.push({title, description,dueDate,priority, completion});
            // console.log(allProjects);
            // console.log(allProjects[object]);
            // console.log(currentProject);
            currentProject= allProjects[object]; //i dont know how else to fix the currentproject only loads value when changing to the page
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        };
        allProjects[object].editToDo = function(index, title, description, dueDate, priority, completion) {
            allProjects[object].todoArray.splice(index, 1, {title, description,dueDate,priority, completion});
            // console.log(this.todoArray);
            currentProject= allProjects[object];
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        }
        allProjects[object].deleteToDo = function(index){
            allProjects[object].todoArray.splice(index, 1);
            // console.log(this.todoArray);
            currentProject= allProjects[object];
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
        // console.log(currentProjectExport);
        // console.log(allProjects);
        currentProject=allProjects[currentProjectExport];
    }
    else{
        currentProject = practiceProject;
    }
    // console.log('current project');
    // console.log(currentProject);
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
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader),
/* harmony export */   "displayMain": () => (/* reexport safe */ _defaultpage__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "newprofilepic": () => (/* binding */ newprofilepic),
/* harmony export */   "newuser": () => (/* binding */ newuser),
/* harmony export */   "removeCurrentMain": () => (/* binding */ removeCurrentMain),
/* harmony export */   "resetaccount": () => (/* binding */ resetaccount),
/* harmony export */   "standarprofilepic": () => (/* binding */ standarprofilepic),
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
//ISNT IN USE
let resetaccount = new Proxy(entireaccount, {
    get: (obj, prop)=>{
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
        // resetaccount.projects = "new";
        let main = document.querySelector('main');
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        _main__WEBPACK_IMPORTED_MODULE_1__.standarprofilepic.pic = _images_cathryn_lavery_fMD_Cru6OTk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;
        _main__WEBPACK_IMPORTED_MODULE_1__.user.name = "User";
        // entireaccount.projects = [];
        // console.log(entireaccount);
        // resetaccount= entireaccount;
        localStorage.clear();
        header.replaceWith((0,_main__WEBPACK_IMPORTED_MODULE_1__.displayHeader)());
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.removeCurrentMain)();
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.displayMain)();
        // console.log(resetaccount.projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCLHdCQUF3QixtQkFBbUIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGdCQUFnQixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFB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LGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0RBQWdEO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzExLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTEtdG9kby8uL3NyYy9hbGxwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vc3JjL2RlZmF1bHRwYWdlLmpzIiwid2VicGFjazovLzExLXRvZG8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8xMS10b2RvLy4vc3JjL3Byb2ZpbGVwYWdlLmpzIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMTEtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLzExLXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8xMS10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWJhc2UtY29sb3I6ICNEMUQ4RkE7XFxuICAgIC0tY29tcGxpbWVudGFyeS1jb2xvcjogI0UzRDZGNTtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6ICMwQThBQTk7XFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiYXNpZGUgaGVhZGVyXFxcIlxcbiAgICBcXFwiYXNpZGUgbWFpblxcXCI7XFxufVxcblxcbmFzaWRle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNXZoIGNhbGMoOHZoICogMyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFM0Q2RjUsICNEMUQ4RkEpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5hc2lkZSAjbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMwQThBQTk7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCA0cHggd2hpdGU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjdlNjtcXG59XFxuXFxuYXNpZGUgI2xvZ28gaW1ne1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbmFzaWRlIHVse1xcbiAgICBncmlkLXJvdzogMy80IDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNHZoKTtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG5cXG59XFxuXFxuYXNpZGUgbGl7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMEE4QUE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG5hc2lkZSBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzODRmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5hc2lkZSBsaSBpbWd7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuI2FyY2hpdmVze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIRUFERVIgRE9NICovXFxuXFxuI2NvbnRlbnQ+aGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4jY29udGVudD5oZWFkZXIgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogI2NvbnRlbnQ+aGVhZGVyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogNyU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuI2NvbnRlbnQ+aGVhZGVyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50PmhlYWRlciBpbWd7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbn1cXG5cXG4vKiBNQUlOIERPTSAqL1xcblxcbm1haW57XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG5tYWluPmhlYWRlcntcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbm1haW4+aGVhZGVyIGlucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgY3Vyc29yOmRlZmF1bHQ7XFxufVxcblxcbm1haW4+I3dvcmtzcGFjZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG59XFxuXFxubWFpbiAjb3Blbl9wcm9qZWN0e1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBOTA7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbn1cXG5cXG5tYWluICNvcGVuX3Byb2plY3QgLnNpbmdsZV90b0Rve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDIwJSAxNyUgMTclO1xcbiAgICBnYXA6IDIlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMCAzJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIHdoaXRlIDJweDtcXG59XFxubWFpbiAjb3Blbl9wcm9qZWN0ICN0b0RvX3RpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5lZGl0X3RvRG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBoZWlnaHQ6IDYwJTsgKi9cXG4gICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxOyAqL1xcbn1cXG4ub3Blbl90b2Rve1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uYnV0dG9uc2RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubWFpbiAjYWRkVG9Eb3tcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxufVxcbm1haW4gI2FkZFRvRG86aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMzg0ZjM7XFxufVxcblxcbiNuZXdUb0RvTW9kYWwsICNlZGl0VG9Eb01vZGFsLCAjbmV3cHJvamVjdG1vZGFse1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGE4Y2E7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyMCUpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNuZXdUb0RvTW9kYWwgaW5wdXQsICNuZXdUb0RvTW9kYWwgdGV4dGFyZWEsICNlZGl0VG9Eb01vZGFsIGlucHV0LCAjZWRpdFRvRG9Nb2RhbCB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuI25ld1RvRG9Nb2RhbCBidXR0b24sICNlZGl0VG9Eb01vZGFsIGJ1dHRvbiwgLnByb2plY3RidXR0b25zZGl2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNlZGl0VG9Eb01vZGFsICNkZWxldGV0b2RvLCAucHJvamVjdGJ1dHRvbnNkaXYgLmRlbGV0ZXByb2plY3RidXR0b257XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbmV3VG9Eb01vZGFsIGxpICwgI2VkaXRUb0RvTW9kYWwgbGl7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxufVxcblxcbi8qIGFsbCBwcm9qZWN0cyAqL1xcblxcbiNhbGxwcm9qZWN0c19jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgY2FsYygoODV2aCAtIDIwcHgpIC8gNCkpO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0Y2FyZHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDhjOWQzIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwOGM5ZDMgMjUlLCAjRDFEOEZBIDI1JSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICAzNHB4IDAsIDM0cHggMCwgMCAwLCAwIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjhweCA2OHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3RjYXJkIC5wcm9qZWN0X25hbWV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLnByb2plY3RidXR0b25zZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3RidXR0b25zZGl2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm1haW4gI2FkZFByb2plY3R7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5tYWluICNhZGRQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4NGYzO1xcbn1cXG5cXG4jbmV3cHJvamVjdG1vZGFsIGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jbmV3cHJvamVjdG1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3cHJvamVjdG1vZGFsIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBhc3BlY3QtcmF0aW86IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCAjY2FuY2VsbmV3cHJvamVjdHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBwcm9maWxlIGNvbnRlbnQgKi9cXG5cXG4jcHJvZmlsZWNvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ4ZmE7XFxub3BhY2l0eTogMTtcXG5iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzBBOEFBOSAycHgsICNkMWQ4ZmEgMnB4KTtcXG5iYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcblxcbiNwcm9maWxlZm9ybXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzBBOEFBOTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjAlKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDEpLCAjcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDIpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDMpLCAjcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDQpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gYnV0dG9ue1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI3ZTY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI3Jlc2V0aW1hZ2U6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQThBQTk7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI2RlbGV0ZXByb2ZpbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI2RlbGV0ZXByb2ZpbGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSOztnQkFFWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLHFEQUFxRDtJQUNyRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FB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QUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IsVUFBVTtBQUNWLDJEQUEyRDtBQUMzRCwwQkFBMEI7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWJhc2UtY29sb3I6ICNEMUQ4RkE7XFxuICAgIC0tY29tcGxpbWVudGFyeS1jb2xvcjogI0UzRDZGNTtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6ICMwQThBQTk7XFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiYXNpZGUgaGVhZGVyXFxcIlxcbiAgICBcXFwiYXNpZGUgbWFpblxcXCI7XFxufVxcblxcbmFzaWRle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNXZoIGNhbGMoOHZoICogMyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFM0Q2RjUsICNEMUQ4RkEpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5hc2lkZSAjbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMwQThBQTk7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCA0cHggd2hpdGU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjdlNjtcXG59XFxuXFxuYXNpZGUgI2xvZ28gaW1ne1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbmFzaWRlIHVse1xcbiAgICBncmlkLXJvdzogMy80IDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNHZoKTtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG5cXG59XFxuXFxuYXNpZGUgbGl7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMEE4QUE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG5hc2lkZSBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzODRmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5hc2lkZSBsaSBpbWd7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuI2FyY2hpdmVze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIRUFERVIgRE9NICovXFxuXFxuI2NvbnRlbnQ+aGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxRDhGQTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4jY29udGVudD5oZWFkZXIgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogI2NvbnRlbnQ+aGVhZGVyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENkY1O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogNyU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuI2NvbnRlbnQ+aGVhZGVyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50PmhlYWRlciBpbWd7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbn1cXG5cXG4vKiBNQUlOIERPTSAqL1xcblxcbm1haW57XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG5tYWluPmhlYWRlcntcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbm1haW4+aGVhZGVyIGlucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgY3Vyc29yOmRlZmF1bHQ7XFxufVxcblxcbm1haW4+I3dvcmtzcGFjZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG59XFxuXFxubWFpbiAjb3Blbl9wcm9qZWN0e1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBOTA7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbn1cXG5cXG5tYWluICNvcGVuX3Byb2plY3QgLnNpbmdsZV90b0Rve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDIwJSAxNyUgMTclO1xcbiAgICBnYXA6IDIlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMCAzJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIHdoaXRlIDJweDtcXG59XFxubWFpbiAjb3Blbl9wcm9qZWN0ICN0b0RvX3RpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5lZGl0X3RvRG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBoZWlnaHQ6IDYwJTsgKi9cXG4gICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxOyAqL1xcbn1cXG4ub3Blbl90b2Rve1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uYnV0dG9uc2RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubWFpbiAjYWRkVG9Eb3tcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6ICMwQThBQTk7XFxufVxcbm1haW4gI2FkZFRvRG86aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMzg0ZjM7XFxufVxcblxcbiNuZXdUb0RvTW9kYWwsICNlZGl0VG9Eb01vZGFsLCAjbmV3cHJvamVjdG1vZGFse1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGE4Y2E7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCBncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyMCUpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNuZXdUb0RvTW9kYWwgaW5wdXQsICNuZXdUb0RvTW9kYWwgdGV4dGFyZWEsICNlZGl0VG9Eb01vZGFsIGlucHV0LCAjZWRpdFRvRG9Nb2RhbCB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuI25ld1RvRG9Nb2RhbCBidXR0b24sICNlZGl0VG9Eb01vZGFsIGJ1dHRvbiwgLnByb2plY3RidXR0b25zZGl2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNlZGl0VG9Eb01vZGFsICNkZWxldGV0b2RvLCAucHJvamVjdGJ1dHRvbnNkaXYgLmRlbGV0ZXByb2plY3RidXR0b257XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbmV3VG9Eb01vZGFsIGxpICwgI2VkaXRUb0RvTW9kYWwgbGl7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxufVxcblxcbi8qIGFsbCBwcm9qZWN0cyAqL1xcblxcbiNhbGxwcm9qZWN0c19jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgY2FsYygoODV2aCAtIDIwcHgpIC8gNCkpO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0Y2FyZHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFEOEZBO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDhjOWQzIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA4YzlkMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwOGM5ZDMgMjUlLCAjRDFEOEZBIDI1JSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICAzNHB4IDAsIDM0cHggMCwgMCAwLCAwIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjhweCA2OHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3RjYXJkIC5wcm9qZWN0X25hbWV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLnByb2plY3RidXR0b25zZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3RidXR0b25zZGl2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCAjMEE4QUE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm1haW4gI2FkZFByb2plY3R7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2RjU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMEE4QUE5O1xcbn1cXG5tYWluICNhZGRQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4NGYzO1xcbn1cXG5cXG4jbmV3cHJvamVjdG1vZGFsIGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jbmV3cHJvamVjdG1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3cHJvamVjdG1vZGFsIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBhc3BlY3QtcmF0aW86IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0ICMwQThBQTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI25ld3Byb2plY3Rtb2RhbCAjY2FuY2VsbmV3cHJvamVjdHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBwcm9maWxlIGNvbnRlbnQgKi9cXG5cXG4jcHJvZmlsZWNvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ4ZmE7XFxub3BhY2l0eTogMTtcXG5iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzBBOEFBOSAycHgsICNkMWQ4ZmEgMnB4KTtcXG5iYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcblxcbiNwcm9maWxlZm9ybXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDZGNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzBBOEFBOTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjAlKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDEpLCAjcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDIpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDMpLCAjcHJvZmlsZWZvcm0gbGk6bnRoLWNoaWxkKDQpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gYnV0dG9ue1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI3ZTY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgIzBBOEFBOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI3Jlc2V0aW1hZ2U6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQThBQTk7XFxuICAgIGJvcmRlci1jb2xvcjogIzBBOEFBOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI2RlbGV0ZXByb2ZpbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jcHJvZmlsZWZvcm0gI2RlbGV0ZXByb2ZpbGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyAscHJvamVjdENyZWF0b3J9IGZyb20gXCIuL2RlZmF1bHRwYWdlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UHJvamVjdHNtYWluO1xuaW1wb3J0IHsgZGlzcGxheU1haW4sIHJlbW92ZUN1cnJlbnRNYWluIH0gZnJvbSBcIi4vbWFpbi5qc1wiO1xuXG5sZXQgY3VycmVudFByb2plY3RFeHBvcnQ7XG5cbmZ1bmN0aW9uIGRlbGV0ZXByb2plY3RhZGRldmVudGxpc3RlbmVyKCl7XG4gICAgbGV0IGFsbGRlbGV0ZWJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVwcm9qZWN0YnV0dG9uJyk7XG4gICAgQXJyYXkuZnJvbShhbGxkZWxldGVidXR0b25zKS5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZShidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgICAgICAgICBtYXBQcm9qZWN0cygpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5mdW5jdGlvbiBvcGVucHJvamVjdGFkZGV2ZW50bGlzdGVuZXIoKXtcbiAgICBsZXQgb3BlbnByb2plY3RidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3BlbnByb2plY3RidXR0b24nKTtcbiAgICBBcnJheS5mcm9tKG9wZW5wcm9qZWN0YnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKT0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RFeHBvcnQ9IGFsbFByb2plY3RzW2J1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRdO1xuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0RXhwb3J0JywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RFeHBvcnQpKTtcbiAgICAgICAgICAgIHJlbW92ZUN1cnJlbnRNYWluKCk7XG4gICAgICAgICAgICBkaXNwbGF5TWFpbihidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuZnVuY3Rpb24gbWFwUHJvamVjdHMoKXtcbiAgICAvL2RlbGV0ZSBvbGQgcHJvamVjdHNcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxwcm9qZWN0c19jb250ZW50Jyk7XG4gICAgZm9yKGxldCBpPWNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpPjA7aS0tKXtcbiAgICAgICAgY29udGVudC5jaGlsZHJlbltpLTFdLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvL3Bvc3QgbmV3IHByb2plY3RzIGZyb20gYWxscHJvamVjdHNhcnJheVxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cyl7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYWxsUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2plY3RjYXJkXCIpO1xuXG4gICAgICAgIGxldCBuYW1lZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0X25hbWVcIik7XG4gICAgICAgIG5hbWVkaXYudGV4dENvbnRlbnQ9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsZXQgYnV0dG9uc2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdGJ1dHRvbnNkaXZcIik7XG4gICAgICAgIGxldCBvcGVuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgb3BlbmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIG9wZW5idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcGVucHJvamVjdGJ1dHRvbicpO1xuICAgICAgICBkZWxldGVidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVwcm9qZWN0YnV0dG9uJyk7XG4gICAgICAgIG9wZW5idXR0b24udGV4dENvbnRlbnQ9XCJPcGVuIFByb2plY3RcIjtcbiAgICAgICAgZGVsZXRlYnV0dG9uLnRleHRDb250ZW50PVwiRGVsZXRlIFByb2plY3RcIjtcbiAgICAgICAgYnV0dG9uc2Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKG9wZW5idXR0b24pO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZWRpdik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc2Rpdik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuICAgIGRpc3BsYXlCdXR0b24oKTsgLy9hZGQgZGlzcGxheSBidXR0b24gYXQgZW5kXG4gICAgZGVsZXRlcHJvamVjdGFkZGV2ZW50bGlzdGVuZXIoKTtcbiAgICBvcGVucHJvamVjdGFkZGV2ZW50bGlzdGVuZXIoKTtcbn1cblxuLy8vLy8vLy8vLy9TVEFSVFQgSEVSRVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzbWFpbigpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbHByb2plY3RzX2NvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgbWFwUHJvamVjdHMoKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RGlzcGxheSgpe1xuICAgIGxldCBwb3B1cG1vZGFsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cHJvamVjdG1vZGFsJyk7XG4gICAgaWYocG9wdXBtb2RhbCE9PXVuZGVmaW5lZCYmcG9wdXBtb2RhbCE9PW51bGwpe1xuICAgICAgICBwb3B1cG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbHByb2plY3RzX2NvbnRlbnQnKTtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3Rtb2RhbCcpO1xuICAgIGxldCBuYW1lbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGJ1dHRvbnNkaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzYXZlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGNhbmNlbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnNkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b25zZGl2Jyk7XG4gICAgc2F2ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhdmVuZXdwcm9qZWN0Jyk7XG4gICAgc2F2ZWJ1dHRvbi50ZXh0Q29udGVudD1cIlNhdmVcIjtcbiAgICBjYW5jZWxidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWxuZXdwcm9qZWN0Jyk7XG4gICAgY2FuY2VsYnV0dG9uLnRleHRDb250ZW50PVwiQ2FuY2VsXCI7XG4gICAgbmFtZWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICduZXdwcm9qZWN0bmFtZWl0ZW0nKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdwcm9qZWN0bmFtZVwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXdwcm9qZWN0bmFtZScpO1xuICAgIGxhYmVsLnRleHRDb250ZW50PVwiTmV3IFByb2plY3QgTmFtZTogXCI7XG4gICAgbmFtZWxpc3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIG5hbWVsaXN0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG5hbWVsaXN0KTtcbiAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKGNhbmNlbGJ1dHRvbik7XG4gICAgYnV0dG9uc2Rpdi5hcHBlbmRDaGlsZChzYXZlYnV0dG9uKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b25zZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBuZXdwcm9qZWN0bW9kYWxhZGRldmVudGxpc3RlbmVyKG1vZGFsLmxhc3RDaGlsZClcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwbGF5QnV0dG9uKCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxscHJvamVjdHNfY29udGVudCcpO1xuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LmlubmVySFRNTD1cIiYjeEZGMEI7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0TGlzdGVuZXIoKTtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcigpe1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGFkZFByb2plY3REaXNwbGF5KCk7XG4gICAgfSlcbn1cbi8vL2Z1bmNpdG9uYWxpdHlcblxuXG5cbmZ1bmN0aW9uIG5ld3Byb2plY3Rtb2RhbGFkZGV2ZW50bGlzdGVuZXIoZGl2KXtcbiAgICBsZXQgbW9kYWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdwcm9qZWN0bW9kYWwnKTtcbiAgICBsZXQgbmV3cHJvamVjdG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cHJvamVjdG5hbWUnKTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuaWQ9PVwiY2FuY2VsbmV3cHJvamVjdFwiKXtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQuaWQ9PVwic2F2ZW5ld3Byb2plY3RcIil7XG4gICAgICAgICAgICBpZihuZXdwcm9qZWN0bmFtZS52YWx1ZS5sZW5ndGg+PTEpe1xuICAgICAgICAgICAgICAgIG5ldyBwcm9qZWN0Q3JlYXRvcihuZXdwcm9qZWN0bmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbWFwUHJvamVjdHMoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuZXdwcm9qZWN0bmFtZS5zdHlsZS5ib3JkZXJDb2xvcj1cInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLy8vLyIsImV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNYWluO1xuZXhwb3J0IHtwcmFjdGljZVByb2plY3QsIHByb2plY3RDcmVhdG9yLCBuZXdGb3JtbGlzdEVsZW1lbnQsIGFsbFByb2plY3RzfTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gcHJvamVjdENyZWF0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZT1uYW1lO1xuICAgIHRoaXMudG9kb0FycmF5PVtdO1xuICAgIHRoaXMuY3JlYXRlVG9Ebz0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbj1mYWxzZSkge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgY29tcGxldGlvbn0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9BcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgfTtcbiAgICB0aGlzLmVkaXRUb0RvID0gZnVuY3Rpb24oaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRpb24pIHtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkuc3BsaWNlKGluZGV4LCAxLCB7dGl0bGUsIGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksIGNvbXBsZXRpb259KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIH1cbiAgICB0aGlzLmRlbGV0ZVRvRG8gPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9kb0FycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICB9XG4gICAgYWxsUHJvamVjdHMucHVzaCh0aGlzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufTtcbmxldCBwcmFjdGljZVByb2plY3Q7XG5sZXQgYWxsUHJvamVjdHM7XG5cbmZ1bmN0aW9uIGNoZWNrQWxsUHJvamVjdHMoKXtcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpIT09bnVsbCl7XG4gICAgYWxsUHJvamVjdHM9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykpO1xuICAgIGZvcihsZXQgb2JqZWN0PTA7IG9iamVjdDwgYWxsUHJvamVjdHMubGVuZ3RoOyBvYmplY3QrKyl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgYWxsUHJvamVjdHNbb2JqZWN0XS5jcmVhdGVUb0RvPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uPWZhbHNlKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tvYmplY3RdLnRvZG9BcnJheS5wdXNoKHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgY29tcGxldGlvbn0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsUHJvamVjdHNbb2JqZWN0XSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdD0gYWxsUHJvamVjdHNbb2JqZWN0XTsgLy9pIGRvbnQga25vdyBob3cgZWxzZSB0byBmaXggdGhlIGN1cnJlbnRwcm9qZWN0IG9ubHkgbG9hZHMgdmFsdWUgd2hlbiBjaGFuZ2luZyB0byB0aGUgcGFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWxsUHJvamVjdHNbb2JqZWN0XS5lZGl0VG9EbyA9IGZ1bmN0aW9uKGluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tvYmplY3RdLnRvZG9BcnJheS5zcGxpY2UoaW5kZXgsIDEsIHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgY29tcGxldGlvbn0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3Q9IGFsbFByb2plY3RzW29iamVjdF07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgICAgICB9XG4gICAgICAgIGFsbFByb2plY3RzW29iamVjdF0uZGVsZXRlVG9EbyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgIGFsbFByb2plY3RzW29iamVjdF0udG9kb0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9BcnJheSk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdD0gYWxsUHJvamVjdHNbb2JqZWN0XTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgICAgIH0gXG4gICAgfVxufVxuZWxzZXtcbiAgICBhbGxQcm9qZWN0cz0gW107XG4gICAgcHJhY3RpY2VQcm9qZWN0ID0gbmV3IHByb2plY3RDcmVhdG9yKCdEZWZhdWx0IFByb2plY3QnKTtcbn1cbn1cbmNoZWNrQWxsUHJvamVjdHMoKTtcbi8vIHN0YW5kYXJkUHJvamVjdHM9IGFsbFByb2plY3RzO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4vL2Z1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBzYXZpbmcgbmV3IHRvZG9cbmZ1bmN0aW9uIHNhdmVOZXdUb0RvKCl7XG4gICAgbGV0IHNhdmVuZXd0b2RvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZW5ld3RvZG8nKTtcbiAgICBzYXZlbmV3dG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld25hbWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2R1ZWRhdGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGlmKHRhc2shPT1cIlwiKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmNyZWF0ZVRvRG8odGFzaywgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIG1hcHRvZG9zKCk7XG4gICAgICAgICAgICBkaXNwbGF5RWRpdE1vZGFsKCk7XG4gICAgICAgICAgICBlZGl0VGFza0NvbXBsZXRpb24oKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb0RvTW9kYWwnKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bmFtZScpLnN0eWxlLmJvcmRlcj1cInNvbGlkIDJweCByZWRcIjtcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbmZ1bmN0aW9uIHNhdmVPbGRUb0RvKGVsZW1lbnRpZCl7XG4gICAgbGV0IHNhdmVvbGR0b2RvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZW9sZHRvZG8nKTtcbiAgICBzYXZlb2xkdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld25hbWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2R1ZWRhdGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGlmKHRhc2shPT1cIlwiKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmVkaXRUb0RvKGVsZW1lbnRpZCwgdGFzaywgZGVzY3JpcHRpb24sIGR1ZWRhdGUscHJpb3JpdHksIGN1cnJlbnRQcm9qZWN0LnRvZG9BcnJheVtlbGVtZW50aWRdLmNvbXBsZXRpb24pO1xuICAgICAgICAgICAgbWFwdG9kb3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlFZGl0TW9kYWwoKTtcbiAgICAgICAgICAgIGVkaXRUYXNrQ29tcGxldGlvbigpO1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb0RvTW9kYWwnKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bmFtZScpLnN0eWxlLmJvcmRlcj1cInNvbGlkIDJweCByZWRcIjtcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oZWxlbWVudGlkKXtcbiAgICBsZXQgZGVsZXRldG9kbz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZXRvZG8nKTtcbiAgICBkZWxldGV0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgY3VycmVudFByb2plY3QuZGVsZXRlVG9EbyhlbGVtZW50aWQpO1xuICAgICAgICBtYXB0b2RvcygpO1xuICAgICAgICBkaXNwbGF5RWRpdE1vZGFsKCk7XG4gICAgICAgIGVkaXRUYXNrQ29tcGxldGlvbigpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvRG9Nb2RhbCcpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuZnVuY3Rpb24gZGlzcGxheU1haW4oY3VycmVudFByb2plY3RFeHBvcnQ9dW5kZWZpbmVkKXtcbiAgICBjaGVja0FsbFByb2plY3RzKCk7XG4gICAgaWYoY3VycmVudFByb2plY3RFeHBvcnQhPT11bmRlZmluZWQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdEV4cG9ydCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgY3VycmVudFByb2plY3Q9YWxsUHJvamVjdHNbY3VycmVudFByb2plY3RFeHBvcnRdO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByYWN0aWNlUHJvamVjdDtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgcHJvamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUhlYWRlcigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIG1hcHRvZG9zKCk7XG4gICAgZGlzcGxheUVkaXRNb2RhbCgpO1xuICAgIGVkaXRUYXNrQ29tcGxldGlvbigpO1xuICAgIC8vbmV3dG9kb21vZGFsXG4gICAgbGV0IGFkZHRvZG9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9EbycpO1xuICAgIGFkZHRvZG9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VG9Eb01vZGFsJyk7XG4gICAgICAgIGlmIChtb2RhbD09PSBudWxsKXtcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VG9Eb01vZGFsKCkpO1xuICAgICAgICAgICAgc2F2ZU5ld1RvRG8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpe1xuICAgIC8vIGVkaXR0b2RvbW9kYWxcbiAgICBsZXQgZWRpdHRvZG9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcGVuX3RvZG8nKTtcbiAgICBBcnJheS5mcm9tKGVkaXR0b2RvYnV0dG9uKS5mb3JFYWNoKChyKT0+e1xuICAgICAgICByLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9Eb01vZGFsJyk7XG4gICAgICAgICAgICBpZiAobW9kYWw9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlZGl0VG9Eb01vZGFsKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpKTsgLy9pZCBvZiB0b2RvIGlzIGVxdWFsIHRvIGluZGV4IG9mIHRvZG8gaW4gcHJvamVjdGFycmF5XG4gICAgICAgICAgICAgICAgc2F2ZU9sZFRvRG8oZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7IC8vZS5pZFxuICAgICAgICAgICAgICAgIGRlbGV0ZVRvRG8oZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0VGFza0NvbXBsZXRpb24oKXtcbiAgICAvLyBlZGl0dG9kb21vZGFsXG4gICAgbGV0IHRhc2tjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tfdG9kbycpO1xuICAgIEFycmF5LmZyb20odGFza2NoZWNrYm94ZXMpLmZvckVhY2goKHIpPT57XG4gICAgICAgIHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gY3VycmVudFByb2plY3QudG9kb0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmVkaXRUb0RvKGluZGV4LCBhcnJheS50aXRsZSwgYXJyYXkuZGVzY3JpcHRpb24sIGFycmF5LmR1ZURhdGUsIGFycmF5LnByaW9yaXR5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoZWNrIScpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gY3VycmVudFByb2plY3QudG9kb0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5lZGl0VG9EbyhpbmRleCwgYXJyYXkudGl0bGUsIGFycmF5LmRlc2NyaXB0aW9uLCBhcnJheS5kdWVEYXRlLCBhcnJheS5wcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCl7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5faGVhZGVyJyk7XG4gICAgbGV0IGhlYWRlcnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoZWFkZXJ0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGhlYWRlcnRpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVydGl0bGUpO1xuICAgIGhlYWRlcnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKT0+e1xuICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWluQ29udGVudCgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dvcmtzcGFjZScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKXtcblxuICAgIGxldCBwcm9qZWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wZW5fcHJvamVjdCcpO1xuXG4gICAgLy9jcmVhdGUgVE9ETyBUSVRMRVNcbiAgICBsZXQgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb190aXRsZScpO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2luZ2xlX3RvRG8nKTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudD0gJ1Rhc2snO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50PSAnRHVlIERhdGUnO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudD0gJ1ByaW9yaXR5JztcbiAgICAgICAgZmluaXNoZWQudGV4dENvbnRlbnQ9J1N0YXR1cyc7XG5cbiAgICAgICAgdG9Eby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGZpbmlzaGVkKTtcbiAgICAgICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHByb2plY3RIb2xkZXI7XG59XG5cbi8vRElTUExBWSBUT0RPUyBPTiBTQ1JFRU5cbmZ1bmN0aW9uIG1hcHRvZG9zKCl7XG4gICAgbGV0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbl9wcm9qZWN0Jyk7XG4gICAgaWYoY3VycmVudFByb2plY3QudG9kb0FycmF5Lmxlbmd0aDwxKXtcbiAgICAgICAgQXJyYXkuZnJvbShwcm9qZWN0SG9sZGVyLmNoaWxkcmVuKS5mb3JFYWNoKChlKT0+e1xuICAgICAgICAgICAgaWYoZS5pZCAhPVwidG9Eb190aXRsZVwiKXtlLnJlbW92ZSgpfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9BcnJheS5tYXAoKGUpPT57XG4gICAgLy9yZW1vdmUgb2xkIHRvZG9zXG4gICAgQXJyYXkuZnJvbShwcm9qZWN0SG9sZGVyLmNoaWxkcmVuKS5mb3JFYWNoKChlKT0+e1xuICAgICAgICBpZihlLmlkICE9XCJ0b0RvX3RpdGxlXCIpe2UucmVtb3ZlKCl9O1xuICAgIH0pO1xuICAgIC8vY291bGQgYWRkIGluIGEgLmZpbHRlcigpIGhlcmUgc28gdGhlIHByb2plY3QgdG9kb3MgYXJlIGZpcnN0IG9yZGVyZWQgYnkgZHVlIGRhdGUgYW5kIG9ubHkgdGhlbiBtYXBwZWRcbiAgICAvL2NyZWF0ZSBuZXcgdG9kb3NcbiAgICBmb3IoZSBvZiBjdXJyZW50UHJvamVjdC50b2RvQXJyYXkpe1xuICAgIGxldCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eby5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudFByb2plY3QudG9kb0FycmF5LmluZGV4T2YoZSkpO1xuICAgIHRvRG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaW5nbGVfdG9EbycpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRhc2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgdGFza2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNoZWNrX3RvZG9cIik7XG4gICAgdGFza2JveC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZpbmlzaGVkJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcGVuX3RvZG8nKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG9fcHJpb3JpdHknKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50PSBlLnRpdGxlO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9IGUuZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudD0gZS5wcmlvcml0eTtcbiAgICB0YXNrYm94LmNoZWNrZWQgPSBlLmNvbXBsZXRpb247XG5cbiAgICB0b0RvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0b0RvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRvRG8uYXBwZW5kQ2hpbGQodGFza2JveCk7XG4gICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgICBcbiAgICB9ICAgIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCdXR0b24oKXtcbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvRG8uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb0RvJyk7XG4gICAgYWRkVG9Eby5pbm5lckhUTUw9XCImI3hGRjBCO1wiO1xuICAgIHJldHVybiBhZGRUb0RvO1xufVxuXG5mdW5jdGlvbiB0b0RvTW9kYWwoaWRtb2RhbCwgaWRidXR0b24sIHRleHRidXR0b24sIHRhc2t2YWx1ZT11bmRlZmluZWQsIGRlc2NyaXB0dmFsdWU9dW5kZWZpbmVkLCBkdWV2YWx1ZT11bmRlZmluZWQsIHByaW9yaXR5dmFsdWU9dW5kZWZpbmVkKXtcbiAgICBsZXQgbmV3Zm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld2Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGlkbW9kYWwpO1xuXG4gICAgXG4gICAgbGV0IG5ld05hbWU9IG5ld0Zvcm1saXN0RWxlbWVudCgndGV4dCcsJ25ld25hbWUnLCdUYXNrOiAnLCB0YXNrdmFsdWUpO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbj0gbmV3Rm9ybWxpc3RFbGVtZW50KCd0ZXh0YXJlYScsJ25ld2Rlc2NyaXB0aW9uJywnRGVzY3JpcHRpb246ICcsIGRlc2NyaXB0dmFsdWUsIDMpO1xuICAgIGxldCBuZXdkdWVEYXRlPSBuZXdGb3JtbGlzdEVsZW1lbnQoJ2RhdGUnLCduZXdkdWVkYXRlJywnRHVlZGF0ZTogJywgZHVldmFsdWUpO1xuICAgIGxldCBuZXdwcmlvcml0eT0gbmV3Rm9ybWxpc3RFbGVtZW50KCdzZWxlY3QnLCduZXdwcmlvcml0eScsJ1ByaW9yaXR5OiAnLCBwcmlvcml0eXZhbHVlKTtcbiAgICBcbiAgICBsZXQgYnV0dG9uc2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b25zZGl2Jyk7XG4gICAgbGV0IHNhdmVuZXd0b2RvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlbmV3dG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRidXR0b24pO1xuICAgIHNhdmVuZXd0b2RvLnRleHRDb250ZW50PXRleHRidXR0b247XG4gICAgaWYodGFza3ZhbHVlIT09dW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IG5ld0RlbGV0ZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZXRvZG8nKTtcbiAgICAgICAgbmV3RGVsZXRlLnRleHRDb250ZW50PVwiRGVsZXRlXCI7XG5cbiAgICAgICAgYnV0dG9uc2Rpdi5hcHBlbmRDaGlsZChuZXdEZWxldGUpO1xuICAgIH1cbiAgICBidXR0b25zZGl2LmFwcGVuZENoaWxkKHNhdmVuZXd0b2RvKTtcblxuICAgIG5ld2Zvcm0uYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgbmV3Zm9ybS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgbmV3Zm9ybS5hcHBlbmRDaGlsZChuZXdkdWVEYXRlKTtcbiAgICBuZXdmb3JtLmFwcGVuZENoaWxkKG5ld3ByaW9yaXR5KTtcbiAgICAvLyBuZXdmb3JtLmFwcGVuZENoaWxkKHNhdmVuZXd0b2RvKTtcbiAgICBuZXdmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNkaXYpO1xuXG4gICAgcmV0dXJuIG5ld2Zvcm07XG59XG5cblxuZnVuY3Rpb24gbmV3VG9Eb01vZGFsKCl7XG4gICAgbGV0IG5ld2Zvcm0gPSB0b0RvTW9kYWwoJ25ld1RvRG9Nb2RhbCcsJ3NhdmVuZXd0b2RvJywgJ0FkZCcpXG4gICAgcmV0dXJuIG5ld2Zvcm07IC8vdG8gZGlzcGxheW1haW5cbn1cbmZ1bmN0aW9uIGVkaXRUb0RvTW9kYWwodG9kb09iamVjdGluZGV4KXtcbiAgICBsZXQgdG9kb09iamVjdD0gY3VycmVudFByb2plY3QudG9kb0FycmF5W3RvZG9PYmplY3RpbmRleF07XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIGxldCB0YXNrID0gdG9kb09iamVjdC50aXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvT2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIGxldCBkdWU9IHRvZG9PYmplY3QuZHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHk9IHRvZG9PYmplY3QucHJpb3JpdHk7XG4gICAgbGV0IGVkaXRmb3JtID0gdG9Eb01vZGFsKCdlZGl0VG9Eb01vZGFsJywgJ3NhdmVvbGR0b2RvJywgJ1NhdmUnLCB0YXNrLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIGVkaXRmb3JtOy8vIHRvIGRpc3BsYXltYWluXG59XG5cblxuZnVuY3Rpb24gbmV3Rm9ybWxpc3RFbGVtZW50KHR5cGUsaWQsbGFiZWwsIHZhbHVlLCByb3dzPXVuZGVmaW5lZCl7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBuZXdpbnB1dDtcbiAgICBpZihyb3dzIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIG5ld2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgbmV3aW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgcm93cyk7XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZT09XCJzZWxlY3RcIil7XG4gICAgICAgIG5ld2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgbmV3aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIH07XG5cbiAgICBpZih2YWx1ZT09PXVuZGVmaW5lZCl7XG4gICAgICAgIG5ld2lucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbmV3aW5wdXQudmFsdWU9IHZhbHVlO1xuICAgIH1cbiAgICBpZih0eXBlPT1cInNlbGVjdFwiKXtcbiAgICAgICAgbGV0IG5ld29wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsZXQgbmV3b3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsZXQgbmV3b3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBuZXdvcHRpb24udmFsdWU9XCJsb3dcIjtcbiAgICAgICAgbmV3b3B0aW9uMi52YWx1ZT1cIm1lZGl1bVwiO1xuICAgICAgICBuZXdvcHRpb24zLnZhbHVlPVwiaGlnaFwiO1xuICAgICAgICBuZXdvcHRpb24udGV4dENvbnRlbnQ9XCJMb3dcIjtcbiAgICAgICAgbmV3b3B0aW9uMi50ZXh0Q29udGVudD1cIk1lZGl1bVwiO1xuICAgICAgICBuZXdvcHRpb24zLnRleHRDb250ZW50PVwiSGlnaFwiO1xuICAgICAgICBuZXdpbnB1dC5hcHBlbmRDaGlsZChuZXdvcHRpb24pO1xuICAgICAgICBuZXdpbnB1dC5hcHBlbmRDaGlsZChuZXdvcHRpb24yKTtcbiAgICAgICAgbmV3aW5wdXQuYXBwZW5kQ2hpbGQobmV3b3B0aW9uMyk7XG4gICAgfVxuXG4gICAgbGV0IG5ld2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIG5ld2xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIG5ld2xhYmVsLnRleHRDb250ZW50PWxhYmVsO1xuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdsYWJlbCk7XG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdpbnB1dCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nb3BpYyBmcm9tICcuL2ltYWdlcy9Ub0R1ZV9Mb2dvLnN2Zyc7XG5pbXBvcnQgdXNlcnBpYyBmcm9tICcuL2ltYWdlcy9jYXRocnluLWxhdmVyeS1mTURfQ3J1Nk9Uay11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IHByb2ZpbGVwaWMgZnJvbSAnLi9pbWFnZXMvcHJvZmlsZTEuc3ZnJztcbmltcG9ydCBwcm9qZWN0c3BpYyBmcm9tICcuL2ltYWdlcy9wcm9qZWN0cy5zdmcnO1xuaW1wb3J0IGFyY2hpdmVzcGljIGZyb20gJy4vaW1hZ2VzL2FyY2hpdmUuc3ZnJztcbmltcG9ydCBkaXNwbGF5TWFpbiBmcm9tIFwiLi9kZWZhdWx0cGFnZVwiO1xuLy8gaW1wb3J0IHtwcmFjdGljZVByb2plY3R9IGZyb20gJy4vZGVmYXVsdHBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0c21haW4gZnJvbSAnLi9hbGxwcm9qZWN0cyc7XG5leHBvcnQge3JlbW92ZUN1cnJlbnRNYWluLCBkaXNwbGF5TWFpbn07XG5pbXBvcnQgcHJvZmlsZU1haW4gZnJvbSAnLi9wcm9maWxlcGFnZSc7XG5leHBvcnQge3VzZXIsIG5ld3VzZXIsIG5ld3Byb2ZpbGVwaWN9O1xuaW1wb3J0IHthbGxQcm9qZWN0c30gZnJvbSAnLi9kZWZhdWx0cGFnZSc7XG5leHBvcnQge3Jlc2V0YWNjb3VudCwgc3RhbmRhcnByb2ZpbGVwaWMsIGRpc3BsYXlIZWFkZXJ9O1xuXG4vLyBET00gTUFOSVBVTEFUSU9OXG5sZXQgdXNlcj17bmFtZTogXCJVc2VyXCJ9O1xubGV0IHN0YW5kYXJwcm9maWxlcGljID0ge3BpYzp1c2VycGljfTtcbmxldCBlbnRpcmVhY2NvdW50ID0ge3Byb2plY3RzOiBhbGxQcm9qZWN0c307XG5cbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduZXd1c2VyJykhPT1udWxsKXtcbiAgICB1c2VyLm5hbWU9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld3VzZXInKSk7XG59XG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhbmRhcmRwcm9maWxlcGljJykhPT1udWxsKXtcbiAgICBzdGFuZGFycHJvZmlsZXBpYy5waWM9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YW5kYXJkcHJvZmlsZXBpYycpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhZ2UoKXtcbiAgICBsZXQgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgLy9hZGQgc2lkZWJhclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoc2lkZUJhcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudCgpKTtcbn1cblxuZnVuY3Rpb24gc2lkZUJhcigpe1xuICAgIC8vY3JlYXRpbmcgcGFyZW50IGVsZW1lbnRzXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIGxldCBsb2dvZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHNpZGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBsb2dvdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2dvdGV4dC50ZXh0Q29udGVudD0gXCJUb0R1ZVwiO1xuICAgIGxvZ29kaXYuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gICAgbGV0IGxvZ29pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29pbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxvZ29waWMpO1xuXG4gICAgbG9nb2Rpdi5hcHBlbmRDaGlsZChsb2dvdGV4dCk7XG4gICAgbG9nb2Rpdi5hcHBlbmRDaGlsZChsb2dvaW1hZ2UpO1xuICAgIC8vY3JlYXRpbmcgb3B0aW9uc1xuICAgIGxldCBhbGxQcm9qZWN0cyA9IGNyZWF0ZU9wdGlvbnMoJ0FsbCBQcm9qZWN0cycsIHByb2plY3RzcGljKTtcbiAgICBsZXQgcHJvZmlsZSA9IGNyZWF0ZU9wdGlvbnMoJ1Byb2ZpbGUnLCBwcm9maWxlcGljKTtcbiAgICBsZXQgYXJjaGl2ZWQgPSBjcmVhdGVPcHRpb25zKCdBcmNoaXZlZCcsIGFyY2hpdmVzcGljKTtcbiAgICBhbGxQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbHByb2plY3RzJyk7XG4gICAgcHJvZmlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGUnKTtcbiAgICBhcmNoaXZlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FyY2hpdmVzJyk7XG4gICAgLy9hZGRpbmcgbGkgdG8gdWxcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChhbGxQcm9qZWN0cyk7XG4gICAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG4gICAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQoYXJjaGl2ZWQpO1xuICAgIC8vYWRkaW5nIGNoaWxkIGVsZW1lbnRzIHRvIHNpZGViYXJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ29kaXYpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZU1lbnUpO1xuICAgIHJldHVybiBzaWRlYmFyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMobmFtZSwgc291cmNlLCBpZG5hbWU9dW5kZWZpbmVkKXtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgb3B0aW9ucGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3B0aW9ucGljLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9ucGljKTtcbiAgICBpZihpZG5hbWUhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZG5hbWUpO1xuICAgIH1cbiAgICBsZXQgb3B0aW9udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvcHRpb250ZXh0LnRleHRDb250ZW50PW5hbWU7XG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbnRleHQpO1xuICAgIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoKXtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoYmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcblxuICAgIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2ZpbGVpbWc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcHJvZmlsZWltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YW5kYXJwcm9maWxlcGljLnBpYyk7XG4gICAgcHJvZmlsZWltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGVpbWcnKTtcbiAgICBsZXQgcHJvZmlsZXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgbGV0IHVzZXJzcGFuPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdXNlcnNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybmFtZXNwYW4nKTtcbiAgICB1c2Vyc3Bhbi50ZXh0Q29udGVudD11c2VyLm5hbWU7XG4gICAgcHJvZmlsZXRleHQudGV4dENvbnRlbnQ9YFdlbGNvbWUsIGA7XG4gICAgcHJvZmlsZXRleHQuYXBwZW5kKHVzZXJzcGFuKTtcblxuICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZXRleHQpO1xuICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZWltZyk7XG4gICAgXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoYmFyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudCgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50TWFpbigpe1xuICAgIGxldCBtYWluPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgZm9yKGxldCBjaGlsZCBvZiBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pKXtcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbmRpc3BsYXlQYWdlKCk7XG5cbmlmKGFsbFByb2plY3RzPT09W10pe1xuICAgIC8vIGNvbnNvbGUubG9nKCdkaXNwbGF5aW5nIG1haW4gb2YgZGVmYXVsdCcpO1xuICAgIC8vIGRpc3BsYXlNYWluKCk7XG59XG5lbHNle1xuICAgIGRpc3BsYXlQcm9qZWN0c21haW4oKTtcbn1cblxuLy9tb3ZlIHRvIGRpc3BsYXkgYWxsIHByb2plY3RzXG5sZXQgYWxscHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxscHJvamVjdHMnKTtcbmFsbHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDdXJyZW50TWFpbigpO1xuICAgIGRpc3BsYXlQcm9qZWN0c21haW4oKTtcbn0pXG4vL21vdmUgdG8gZGlzcGxheVxubGV0IHByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xucHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcmVtb3ZlQ3VycmVudE1haW4oKTtcbiAgICBwcm9maWxlTWFpbigpO1xufSlcblxuLy8gY29uc29sZS50YWJsZShcIkFsbCBwcm9qZWN0czpcIik7XG4vLyBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG5cbi8vQ0hBTkdFIFVTRVJOQU1FXG5sZXQgbmV3dXNlciA9IG5ldyBQcm94eSh1c2VyLCB7XG4gICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKT0+e1xuICAgICAgICBsZXQgaGVhZGVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAgICAgdXNlci5uYW1lID0gdmFsdWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlci5uYW1lKSk7XG4gICAgICAgIGhlYWRlci5yZXBsYWNlV2l0aChkaXNwbGF5SGVhZGVyKCkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59KTtcblxuLy9DSEFOR0UgUFJPRklMRVBJQ1xubGV0IG5ld3Byb2ZpbGVwaWMgPSBuZXcgUHJveHkoc3RhbmRhcnByb2ZpbGVwaWMsIHtcbiAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpPT57XG4gICAgICAgIGxldCBoZWFkZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpOyAvL2hlYWRlci5yZXBsYWNld2l0aCB3YXNudCB3b3JraW5nIHdoZW4gaGVhZGVyIHdhcyBvdXRzaWRlIG9mIHNldC4gZG9udCBmb3JnZXQgdG8gcmVsb2FkIGVsZW1lbnQvbm9kZSBldmVyeSB0aW1lIGl0IGNoYW5nZXNcbiAgICAgICAgc3RhbmRhcnByb2ZpbGVwaWMucGljID0gdmFsdWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGFuZGFyZHByb2ZpbGVwaWMnLCBKU09OLnN0cmluZ2lmeShzdGFuZGFycHJvZmlsZXBpYy5waWMpKTtcbiAgICAgICAgaGVhZGVyLnJlcGxhY2VXaXRoKGRpc3BsYXlIZWFkZXIoKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0pO1xuXG4vLyBERUxFVEUgQUNDT1VOVFxuLy9JU05UIElOIFVTRVxubGV0IHJlc2V0YWNjb3VudCA9IG5ldyBQcm94eShlbnRpcmVhY2NvdW50LCB7XG4gICAgZ2V0OiAob2JqLCBwcm9wKT0+e1xuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbGV0IGhlYWRlcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7IC8vaGVhZGVyLnJlcGxhY2V3aXRoIHdhc250IHdvcmtpbmcgd2hlbiBoZWFkZXIgd2FzIG91dHNpZGUgb2Ygc2V0LiBkb250IGZvcmdldCB0byByZWxvYWQgZWxlbWVudC9ub2RlIGV2ZXJ5IHRpbWUgaXQgY2hhbmdlc1xuICAgICAgICBzdGFuZGFycHJvZmlsZXBpYy5waWMgPSB1c2VycGljO1xuICAgICAgICB1c2VyLm5hbWUgPSBcIlVzZXJcIjtcbiAgICAgICAgZW50aXJlYWNjb3VudC5wcm9qZWN0cyA9IFtdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbnRpcmVhY2NvdW50KTtcbiAgICAgICAgcmVzZXRhY2NvdW50PSBlbnRpcmVhY2NvdW50O1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgaGVhZGVyLnJlcGxhY2VXaXRoKGRpc3BsYXlIZWFkZXIoKSk7XG4gICAgICAgIHJlbW92ZUN1cnJlbnRNYWluKCk7XG4gICAgICAgIGRpc3BsYXlNYWluKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgcHJvZmlsZU1haW47XG5pbXBvcnQgeyBuZXdGb3JtbGlzdEVsZW1lbnQsIHN0YW5kYXJkUHJvamVjdHMgfSBmcm9tIFwiLi9kZWZhdWx0cGFnZVwiO1xuaW1wb3J0IHsgdXNlciwgbmV3dXNlciAsIG5ld3Byb2ZpbGVwaWMsIHJlc2V0YWNjb3VudCwgc3RhbmRhcnByb2ZpbGVwaWMsIGRpc3BsYXlIZWFkZXIsIGRpc3BsYXlNYWluLCByZW1vdmVDdXJyZW50TWFpbn0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHVzZXJwaWMgZnJvbSAnLi9pbWFnZXMvY2F0aHJ5bi1sYXZlcnktZk1EX0NydTZPVGstdW5zcGxhc2guanBnJztcblxuXG5mdW5jdGlvbiBwcm9maWxlTWFpbigpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGVjb250ZW50Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkaXNwbGF5UHJvZmlsZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvZmlsZSgpe1xuICAgIC8vZGlzcGxheSBjb250ZW50IG9mIHByb2ZpbGVcbiAgICBsZXQgY29udGVudGJpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlY29udGVudCcpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGVmb3JtJyk7XG4gICAgbGV0IG5hbWUgPSBuZXdGb3JtbGlzdEVsZW1lbnQoJ3RleHQnLCAndXNlcm5hbWUnLCAnV2hhdCBTaG91bGQgSSBjYWxsIHlvdT8nLCB1c2VyLm5hbWUpO1xuICAgIGxldCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxldCBwaWNyZXNldD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgcHJvZnJlc2V0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGV0IHBpY3R1cmVsYWJlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgcGljdHVyZWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGxldCBwaWN0dXJlcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgcHJvZmlsZXJlc2V0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHBpY3R1cmVyZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgcGljdHVyZXJlc2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzZXRpbWFnZScpO1xuICAgIHByb2ZpbGVyZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgcHJvZmlsZXJlc2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlcHJvZmlsZScpO1xuXG4gICAgcGljdHVyZWlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlcmltYWdlJyk7XG4gICAgcGljdHVyZWlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgcGljdHVyZWxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJpbWFnZScpO1xuXG4gICAgcGljdHVyZXJlc2V0LnRleHRDb250ZW50PVwiUmVzZXQgUGljdHVyZVwiO1xuICAgIHByb2ZpbGVyZXNldC50ZXh0Q29udGVudD1cIkRlbGV0ZSBQcm9maWxlXCI7XG4gICAgXG5cbiAgICBwaWN0dXJlbGFiZWwudGV4dENvbnRlbnQ9XCJDaG9vc2UgeW91ciBvd24gcHJvZmlsZSBwaWN0dXJlOiBcIjtcbiAgICBwaWN0dXJlaW5wdXQuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnaW1hZ2UvKicpO1xuICAgIHBpY3R1cmUuYXBwZW5kQ2hpbGQocGljdHVyZWxhYmVsKTtcbiAgICBwaWN0dXJlLmFwcGVuZENoaWxkKHBpY3R1cmVpbnB1dCk7XG4gICAgcGljcmVzZXQuYXBwZW5kQ2hpbGQocGljdHVyZXJlc2V0KTtcbiAgICBwcm9mcmVzZXQuYXBwZW5kQ2hpbGQocHJvZmlsZXJlc2V0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBpY3Jlc2V0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2ZyZXNldCk7XG4gICAgY29udGVudGJpZy5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjaGFuZ2VsaXN0ZW5lcigpO1xufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZWxpc3RlbmVyKCl7XG4gICAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZWZvcm0nKTtcbiAgICBsZXQgcmVzZXRpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldGltYWdlJyk7XG4gICAgbGV0IGRlbGV0ZXByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlcHJvZmlsZScpO1xuICAgIHByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT57XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkPT1cInVzZXJuYW1lXCIpe1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3I9XCJwcm9ncmVzc1wiO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3dXNlci5uYW1lPWUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yPVwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihlLnRhcmdldC5pZD09XCJ1c2VyaW1hZ2VcIil7XG4gICAgICAgICAgICBvbkZpbGVTZWxlY3RlZChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlc2V0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG5ld3Byb2ZpbGVwaWMucGljID0gdXNlcnBpYzsgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXdwcm9maWxlcGljLnBpYycpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdwcm9maWxlcGljLnBpYyk7XG4gICAgfSk7XG4gICAgZGVsZXRlcHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgLy8gcmVzZXRhY2NvdW50LnByb2plY3RzID0gXCJuZXdcIjtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBoZWFkZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpOyAvL2hlYWRlci5yZXBsYWNld2l0aCB3YXNudCB3b3JraW5nIHdoZW4gaGVhZGVyIHdhcyBvdXRzaWRlIG9mIHNldC4gZG9udCBmb3JnZXQgdG8gcmVsb2FkIGVsZW1lbnQvbm9kZSBldmVyeSB0aW1lIGl0IGNoYW5nZXNcbiAgICAgICAgc3RhbmRhcnByb2ZpbGVwaWMucGljID0gdXNlcnBpYztcbiAgICAgICAgdXNlci5uYW1lID0gXCJVc2VyXCI7XG4gICAgICAgIC8vIGVudGlyZWFjY291bnQucHJvamVjdHMgPSBbXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZW50aXJlYWNjb3VudCk7XG4gICAgICAgIC8vIHJlc2V0YWNjb3VudD0gZW50aXJlYWNjb3VudDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGhlYWRlci5yZXBsYWNlV2l0aChkaXNwbGF5SGVhZGVyKCkpO1xuICAgICAgICByZW1vdmVDdXJyZW50TWFpbigpO1xuICAgICAgICBkaXNwbGF5TWFpbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNldGFjY291bnQucHJvamVjdHMpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKS52YWx1ZSA9IFwiXCI7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb25GaWxlU2VsZWN0ZWQoZXZlbnQpe1xuICAgIGxldCBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZD0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBuZXdwcm9maWxlcGljLnBpYz0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==