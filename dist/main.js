/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ (() => {

eval("var config = {\r\n    type: Phaser.WEBGL,\r\n    width: 700,\r\n    height: 550,\r\n    backgroundColor: 0x9b2271, //0x6E2663\r\n    scene: [Scene1, Scene2, Scene3],\r\n    pixelArt: true,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            gravity: { y: 300 },\r\n            debug: false\r\n        }\r\n    },\r\n    autoCenter: true,\r\n    scale:{\r\n        mode: Phaser.Scale.NONE,\r\n        parent: \"game\",\r\n        width: 720,\r\n        height: 550,\r\n    }\r\n}\r\n\r\n\r\nwindow.onload = function(){\r\n\r\nvar game = new Phaser.Game(config);\r\n\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://biker-vroom/./src/Game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Game.js"]();
/******/ 	
/******/ })()
;