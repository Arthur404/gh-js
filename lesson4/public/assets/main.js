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
    var form = document.querySelector('.task-1 form');

    form.addEventListener('submit', function (e) {
        var errors = [],
            numbers = document.querySelector('[name="numbers"]').value,
            letters = document.querySelector('[name="letters"]').value,
            agreement = document.querySelector('[name="agreement"]'),
            types = document.querySelectorAll('input[name="type"]'),
            type = 0;

        if (!/^\d+$/g.test(numbers)) {
            errors.push('Invalid numbers');
        }
        if (!/^[a-d]+$/.test(letters)) {
            errors.push('Invalid letters');
        }
        if (!agreement.checked) {
            errors.push('Agreement is unchecked');
        }
        for(var i = 0; i < types.length; i++) {
            if(types[i].checked === true) {
                type = types[i];
            }
        }
        if (!type.checked === true) {
            errors.push('Type is unchecked');
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });

    // Task 3
    function findUpperCase(str) {
        var regexp = /[a-z]*[A-Z]+[a-zA-Z]+/g;
        return str.match(regexp);
    }

    // Task 4
    var list = document.querySelectorAll('ul li'),
        input = document.querySelector('.task-4 input');

    input.addEventListener('keyup', function () {
        var valInp = this.value;
        var reg = valInp.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

        regexp = new RegExp(reg);
        Array.prototype.forEach.call(list, function (item) {
            if (regexp.test(item.textContent)) {
                if (valInp) {
                    item.innerHTML = item.textContent.replace(regexp, '<span class="highlight">'+item.textContent.match(regexp)+'</span>');
                } else {
                    item.innerHTML = item.textContent;
                }
                item.classList.remove('hidden');
            } else {
                item.innerHTML = item.textContent;
                item.classList.add('hidden');
            }
        })
    })
})();

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map