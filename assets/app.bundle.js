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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  $('.progress .progress-bar').css("width", function () {
    return $(this).attr("aria-valuenow") + "%";
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * SMOOTH ANCRE
 */
$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top
  }, 'slow');
  return false;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * SCROLL MENU FIXED
 */
var navbar = document.querySelector('.navbar-default');
var navbarBrand = document.querySelector('.nav-brand');
var header = document.querySelector('header');
var minimoi = document.querySelector('#minimoi');

console.log(minimoi);
window.addEventListener('scroll', function (e) {

  var hauteur = 0;
  if (window.scrollY <= hauteur) {
    hauteur++;
  }if (window.scrollY <= hauteur) {
    hauteur++;
  }
  if (window.scrollY <= hauteur) {
    hauteur++;
  }

  console.log(hauteur);

  if (window.scrollY >= 100) {
    navbar.classList.add('navbar-fixed-top');
    navbar.setAttribute('style', 'background-color: rgba(40, 44, 52, 1');
    minimoi.setAttribute('style', 'visibility: visible');
  } else {
    navbar.classList.remove('navbar-fixed-top');
    minimoi.setAttribute('style', 'visibility: hidden');
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTEzY2I4OTBmYjZkZDFjNjRhNTEiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzP2ZkYzIiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzcy9wcm9ncmVzc0Jhci5jc3M/ZTFkZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL2Zvcm0uY3NzP2ZlNmUiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9zbW9vdGhfYW5jcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Njcm9sbE1lbnVGaXguanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjc3MiLCJhdHRyIiwiY2xpY2siLCJ0aGVfaWQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwibmF2YmFyIiwicXVlcnlTZWxlY3RvciIsIm5hdmJhckJyYW5kIiwiaGVhZGVyIiwibWluaW1vaSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhdXRldXIiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsdUI7Ozs7OztBQ0xBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7Ozs7OztBQ0FBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUMzQkYsSUFBRSx5QkFBRixFQUE2QkcsR0FBN0IsQ0FBaUMsT0FBakMsRUFDRSxZQUFXO0FBQ1AsV0FBT0gsRUFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxlQUFiLElBQWdDLEdBQXZDO0FBQ0gsR0FISDtBQUtELENBTkQsRTs7Ozs7Ozs7O0FDQUE7OztBQUdBSixFQUFFLGNBQUYsRUFBa0JLLEtBQWxCLENBQXdCLFlBQVk7QUFDbEMsTUFBSUMsU0FBU04sRUFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxNQUFiLENBQWI7O0FBRUFKLElBQUUsWUFBRixFQUFnQk8sT0FBaEIsQ0FBd0I7QUFDdEJDLGVBQVdSLEVBQUVNLE1BQUYsRUFBVUcsTUFBVixHQUFtQkM7QUFEUixHQUF4QixFQUVHLE1BRkg7QUFHQSxTQUFPLEtBQVA7QUFDRCxDQVBELEU7Ozs7Ozs7OztBQ0hBOzs7QUFHQSxJQUFJQyxTQUFTVixTQUFTVyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsSUFBSUMsY0FBY1osU0FBU1csYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQUlFLFNBQVNiLFNBQVNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLElBQUlHLFVBQVVkLFNBQVNXLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFFQUksUUFBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0FHLE9BQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQUNDLENBQUQsRUFBTzs7QUFFdkMsTUFBSUMsVUFBVSxDQUFkO0FBQ0EsTUFBR0gsT0FBT0ksT0FBUCxJQUFrQkQsT0FBckIsRUFBOEI7QUFDNUJBO0FBQ0QsT0FBR0gsT0FBT0ksT0FBUCxJQUFrQkQsT0FBckIsRUFBOEI7QUFDN0JBO0FBQ0Q7QUFDRCxNQUFHSCxPQUFPSSxPQUFQLElBQWtCRCxPQUFyQixFQUE4QjtBQUM1QkE7QUFDRDs7QUFFREwsVUFBUUMsR0FBUixDQUFZSSxPQUFaOztBQUVBLE1BQUlILE9BQU9JLE9BQVAsSUFBa0IsR0FBdEIsRUFBMkI7QUFDekJYLFdBQU9ZLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGtCQUFyQjtBQUNBYixXQUFPYyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLHNDQUE3QjtBQUNBVixZQUFRVSxZQUFSLENBQXFCLE9BQXJCLEVBQThCLHFCQUE5QjtBQUNELEdBSkQsTUFLSztBQUNIZCxXQUFPWSxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixrQkFBeEI7QUFDQVgsWUFBUVUsWUFBUixDQUFxQixPQUFyQixFQUE4QixvQkFBOUI7QUFDRDtBQUVGLENBeEJELEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDExM2NiODkwZmI2ZGQxYzY0YTUxIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vY3NzL3Byb2dyZXNzQmFyLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9mb3JtLmNzcyc7XG5pbXBvcnQgJy4vcHJvZ3Jlc3NCYXInO1xuaW1wb3J0ICcuL3Ntb290aF9hbmNyZS5qcyc7XG5pbXBvcnQgJy4vc2Nyb2xsTWVudUZpeCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jc3Mvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvY3NzL3Byb2dyZXNzQmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Nzcy9mb3JtLmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnLnByb2dyZXNzIC5wcm9ncmVzcy1iYXInKS5jc3MoXCJ3aWR0aFwiLFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiKSArIFwiJVwiO1xuICAgIH1cbiAgKVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3Byb2dyZXNzQmFyLmpzIiwiLyoqXG4gKiBTTU9PVEggQU5DUkVcbiAqL1xuJCgnYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGVfaWQgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICQodGhlX2lkKS5vZmZzZXQoKS50b3BcbiAgfSwgJ3Nsb3cnKTtcbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3Ntb290aF9hbmNyZS5qcyIsIi8qKlxuICogU0NST0xMIE1FTlUgRklYRURcbiAqL1xubGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZGVmYXVsdCcpO1xubGV0IG5hdmJhckJyYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1icmFuZCcpO1xubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xubGV0IG1pbmltb2kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluaW1vaScpO1xuXG5jb25zb2xlLmxvZyhtaW5pbW9pKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICBcbiAgbGV0IGhhdXRldXIgPSAwXG4gIGlmKHdpbmRvdy5zY3JvbGxZIDw9IGhhdXRldXIpIHtcbiAgICBoYXV0ZXVyICsrXG4gIH1pZih3aW5kb3cuc2Nyb2xsWSA8PSBoYXV0ZXVyKSB7XG4gICAgaGF1dGV1ciArK1xuICB9XG4gIGlmKHdpbmRvdy5zY3JvbGxZIDw9IGhhdXRldXIpIHtcbiAgICBoYXV0ZXVyICsrXG4gIH1cblxuICBjb25zb2xlLmxvZyhoYXV0ZXVyKTtcblxuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTAwKSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1maXhlZC10b3AnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NCwgNTIsIDEnKTtcbiAgICBtaW5pbW9pLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogdmlzaWJsZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItZml4ZWQtdG9wJyk7XG4gICAgbWluaW1vaS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IGhpZGRlbicpO1xuICB9XG5cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3Njcm9sbE1lbnVGaXguanMiXSwic291cmNlUm9vdCI6IiJ9