(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toFixed"] = factory();
	else
		root["toFixed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * @author: alanzhang
 * @overview: 使用定点表示法来格式化一个数,支持截取或者四舍五入
 *
 */

/**
 * 使用定点表示法来格式化一个数
 * @param  {String|Number}  num     [必选，数字或者表示数字的字符串,范围为[0,20],超过范围则报错]
 * @param  {Number}  digits  [必选，小数点后数字的个数]
 * @param  {Boolean} isRound [可选，格式化时是否四舍五入，默认为false，即进行四舍五入,为false时直接截取，不满足位数的往后补0]
 * @return {String}          [结果]
 */
function pFixed(num, digits, isRound) {
    // 是否为正数
    var isPositive = (+num >= 0);
    num += '';

    isRound = Boolean(isRound);
    // 去掉正负号，统一按照正数来处理，最后再加上符号
    num = num.replace(/^(?:-|\+)/gi, '');

    // 小数点过大
    /* istanbul ignore next */
    if (digits > 20 || digits < 0) {
        throw new RangeError('toFixed() digits argument must be between 0 and 20');
    }

    // 如果是简写如.11则整数位补0，变成0.11
    /* istanbul ignore next */
    if (/^\./gi.test(num)) {
        num = '0' + num;
    }

    // 非数字
    /* istanbul ignore next */
    if (!/^\d+\.?\d*$/gi.test(num)) {
        throw new Error('toFixed() num argument must be a valid num');
    }

    var numParts = num.split('.');
    var result = '';
    var floatPart = '';

    // 在str后面加n个0
    var _paddingZero = function (str, n) {
        for (var i = 0; i < n; i++) {
            str += '0';
        }
        return str;
    };

    // 在str后面加0，直至str的长度达到n
    // 如果超过了n，则直接截取前n个字符串
    var _paddingZeroTo = function (str, n) {
        if (str.length >= n) {
            return str.substr(0, n);
        } else {
            return _paddingZero(str, n - str.length);
        }
    };

    // 直接就是整数
    if (numParts.length < 2) {
        result = numParts[0] + '.' + _paddingZero('', digits);
        // 为浮点数
    } else {
        // 如果为截取
        if (isRound === false) {
            result = numParts[0] + '.' + _paddingZeroTo(numParts[1], digits);
            // 如果为四舍五入
        } else {
            // 放大10的N次方倍
            var enlarge = numParts[0] + _paddingZeroTo(numParts[1], digits) + '.' + numParts[1].substr(digits);
            // 取整
            enlarge = Math.round(enlarge) + '';
            // 缩小10的N次方
            while(enlarge.length <= digits){
                enlarge = '0' + enlarge;
            }
            result = enlarge.substr(0, enlarge.length - digits) + '.' + enlarge.substr(enlarge.length - digits);
        }
    }

    // 如果最后一位为.,则去除
    result = result.replace(/\.$/gi, '').replace(/^\./gi, '0.');

    // 加上符号位
    result = isPositive ? result : '-' + result;
    return result;
}

module.exports = pFixed;


/***/ })
/******/ ]);
});