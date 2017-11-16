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

;(function () {
    // Task 1
    function arrFilter(obj) {
        return this.filter(function (item) {
            return repeat(item, obj);
        });

        function repeat(selfArr, selfObj) {
            return Object.keys(selfObj).reduce(function (curr, next) {
                if (typeof selfObj[next] === 'object') {
                    if (selfObj[next].constructor.name === 'RegExp') {
                        return curr && (selfObj[next].test(selfArr[next]));
                    } else {
                        return repeat(selfArr[next], selfObj[next])
                    }
                } else {
                    return curr && (selfObj[next] === selfArr[next]);
                }
            }, true)
        }
    }

    (function () {
        Array.prototype.filterWhere = arrFilter;

        var users = [
            {id: 1, name: 'Max', photo: {url: 'ava1.jpg', size: {width: 100, height: 50}}},
            {id: 2, name: 'Bob', photo: {url: 'avatar.png', size: {width: 800, height: 640}}},
            {id: 3, name: 'Nick', photo: {url: 'img.jpg', size: {width: 440, height: 320}}}
        ];

        var usersWithBigPhoto = users.filterWhere({photo: {size: {height: /\d{3}/}}});
        console.log(usersWithBigPhoto);
        delete Array.prototype.filterWhere;
    })();

    // Task 2
    (function () {
        function SuperArray() {
            this.filterWhere = arrFilter;
        }

        SuperArray.prototype = Array.prototype;

        var users = new SuperArray();
        users.push({id: 1, name: 'Max', age: 18}, {id: 2, name: 'Bob', age: 20}, {id: 3, name: 'Nick', age: 18});
        console.log(users.filterWhere({age: 18}));
        console.log([].filterWhere);
    })();

    // Task 3
    (function () {
        Function.prototype.extend = function (obj) {
            var func = this.prototype;

            if (arguments.length > 0) {
                for (var key in obj) {
                    func[key] = obj[key];
                }
            }
            return function () {
                return func;
            }
        };

        var SuperArray = Array.extend({
            filterWhere: arrFilter
        });
        var users = new SuperArray();
        console.log(users.push);
    })();
})();

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map