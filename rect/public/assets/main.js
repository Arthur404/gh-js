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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(1);
var scripts = __webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

window.onload = function () {
    var rootCanvas = document.getElementById('root'),
        btn = document.getElementById('btn-click'),
        ctx = rootCanvas.getContext('2d');
        ctx.lineWidth = 1;

    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    btn.addEventListener('click', function () {
        var width1 = 1;
        var height1 = 1;
        var width2 = 1;
        var height2 = 1;
        var before = new Date().getTime(),
            now;
        ctx.restore();
        var xRandomFirst = maxRandom(1, 399),
            yRandomFirst = maxRandom(1, 399),
            xRandomSecond = maxRandom(1, 399),
            yRandomSecond = maxRandom(1, 399);

        function drawCircle() {

            if (width1 <= xRandomFirst[1]) {
                width1++;
            }
            if (height1 <= yRandomFirst[1]) {
                height1++;
            }
            if (width2 <= xRandomSecond[1]) {
                width2++;
            }
            if (height2 <= yRandomSecond[1]) {
                height2++;
            }

            var object1 = {x: xRandomFirst[0], y: yRandomFirst[0], width: width1, height: height1};
            var object2 = {x: xRandomSecond[0], y: yRandomSecond[0], width: width2, height: height2};
            now = new Date().getTime();
            ctx.clearRect(0, 0, 400, 400);
            ctx.strokeStyle = "green";
            ctx.strokeRect(object1.x, object1.y, object1.width, object1.height);
            ctx.strokeStyle = "blue";
            ctx.strokeRect(object2.x, object2.y, object2.width, object2.height);
            ctx.fillStyle = "red";
            requestAnimationFrame(drawCircle);
            inObject = intersection(object1,object2);
            ctx.beginPath();
            ctx.ellipse(inObject.x + inObject.width/2, inObject.y + inObject.height/2, inObject.width/2, inObject.height/2, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
        drawCircle();

    });

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    function maxRandom(min, max) {
        var aq = randomInteger(min, max);
        var bq = randomInteger(min, max);
        var res = [aq, bq];
        if ((aq + bq) >= max) {
            return maxRandom(min, max)
        } else {
            return res;
        }
    }
    
    function intersection(obj1,obj2) {
        var XColl=false;
        var YColl=false;
        var resObj = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };

        if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
        if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;

        if (XColl && YColl) {
            if (obj1.x > obj2.x){
                resObj.x = obj1.x;
                if (obj1.width <= obj2.width && (obj1.width + obj1.x) <= (obj2.width + obj2.x)) {
                    resObj.width = obj1.width;
                } else {
                    resObj.width = obj2.x + obj2.width - resObj.x;
                }
            } else {
                resObj.x = obj2.x;
                if (obj1.width >= obj2.width && (obj1.width + obj1.x) >= (obj2.width + obj2.x)) {
                    resObj.width = obj2.width;
                } else {
                    resObj.width = obj1.x + obj1.width - resObj.x;
                }
            }
            if (obj1.y > obj2.y){
                resObj.y = obj1.y;
                if (obj1.height <= obj2.height && (obj1.height + obj1.y) <= (obj2.height + obj2.y)) {
                    resObj.height = obj1.height;
                } else {
                    resObj.height = obj2.y + obj2.height - resObj.y;
                }
            } else {
                resObj.y = obj2.y;
                if (obj1.height >= obj2.height && (obj1.height + obj1.y) >= (obj2.height + obj2.y)) {
                    resObj.height = obj2.height;
                } else {
                    resObj.height = obj1.y + obj1.height - resObj.y;
                }
            }
            return resObj;
        }
        return false;
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map