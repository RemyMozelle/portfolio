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

/**
 * SCROLL MENU FIXED
 */
var navbar = document.querySelector('.navbar-default');
var navbarBrand = document.querySelector('.nav-brand');
var header = document.querySelector('header');

window.addEventListener('scroll', function (e) {

  if (window.scrollY >= 200) {
    navbar.classList.add('navbar-fixed-top');
    navbar.setAttribute('style', 'background-color: rgba(40, 44, 52, 1');
    navbarBrand.setAttribute('style', 'display: block');
  } else {
    navbar.classList.remove('navbar-fixed-top');
    navbar.setAttribute('style', '');
    navbarBrand.setAttribute('style', 'display: none');
  }
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

  if (window.scrollY >= 200) {
    //navbar.classList.add('navbar-fixed-top');
    navbar.setAttribute('style', 'background-color: rgba(40, 44, 52, 1');
    minimoi.setAttribute('style', 'hidden');
  } else {
    navbar.classList.remove('navbar-fixed-top');
    minimoi.setAttribute('style', 'visible');
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzE2ZDU2ODY2NDU0OGViNjlmZjEiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzP2ZkYzIiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzcy9wcm9ncmVzc0Jhci5jc3M/ZTFkZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL2Zvcm0uY3NzP2ZlNmUiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9zbW9vdGhfYW5jcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Njcm9sbE1lbnVGaXguanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjc3MiLCJhdHRyIiwiY2xpY2siLCJ0aGVfaWQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwibmF2YmFyIiwicXVlcnlTZWxlY3RvciIsIm5hdmJhckJyYW5kIiwiaGVhZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwibWluaW1vaSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSx1Qjs7Ozs7O0FDTEEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7O0FDQUFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQzNCRixJQUFFLHlCQUFGLEVBQTZCRyxHQUE3QixDQUFpQyxPQUFqQyxFQUNFLFlBQVc7QUFDUCxXQUFPSCxFQUFFLElBQUYsRUFBUUksSUFBUixDQUFhLGVBQWIsSUFBZ0MsR0FBdkM7QUFDSCxHQUhIO0FBS0QsQ0FORCxFOzs7Ozs7Ozs7QUNBQTs7O0FBR0FKLEVBQUUsY0FBRixFQUFrQkssS0FBbEIsQ0FBd0IsWUFBWTtBQUNsQyxNQUFJQyxTQUFTTixFQUFFLElBQUYsRUFBUUksSUFBUixDQUFhLE1BQWIsQ0FBYjs7QUFFQUosSUFBRSxZQUFGLEVBQWdCTyxPQUFoQixDQUF3QjtBQUN0QkMsZUFBV1IsRUFBRU0sTUFBRixFQUFVRyxNQUFWLEdBQW1CQztBQURSLEdBQXhCLEVBRUcsTUFGSDtBQUdBLFNBQU8sS0FBUDtBQUNELENBUEQ7O0FBU0E7OztBQUdBLElBQUlDLFNBQVNWLFNBQVNXLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7QUFDQSxJQUFJQyxjQUFjWixTQUFTVyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsSUFBSUUsU0FBU2IsU0FBU1csYUFBVCxDQUF1QixRQUF2QixDQUFiOztBQUVBRyxPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDQyxDQUFELEVBQU87O0FBRXZDLE1BQUlGLE9BQU9HLE9BQVAsSUFBa0IsR0FBdEIsRUFBMkI7QUFDekJQLFdBQU9RLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGtCQUFyQjtBQUNBVCxXQUFPVSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLHNDQUE3QjtBQUNBUixnQkFBWVEsWUFBWixDQUF5QixPQUF6QixFQUFrQyxnQkFBbEM7QUFDRCxHQUpELE1BS0s7QUFDSFYsV0FBT1EsU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0Isa0JBQXhCO0FBQ0FYLFdBQU9VLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsRUFBN0I7QUFDQVIsZ0JBQVlRLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsZUFBbEM7QUFDRDtBQUVGLENBYkQsRTs7Ozs7Ozs7O0FDbkJBOzs7QUFHQSxJQUFJVixTQUFTVixTQUFTVyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsSUFBSUMsY0FBY1osU0FBU1csYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQUlFLFNBQVNiLFNBQVNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLElBQUlXLFVBQVV0QixTQUFTVyxhQUFULENBQXVCLFVBQXZCLENBQWQ7O0FBRUFZLFFBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBUixPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDQyxDQUFELEVBQU87O0FBRXZDLE1BQUlGLE9BQU9HLE9BQVAsSUFBa0IsR0FBdEIsRUFBMkI7QUFDekI7QUFDQVAsV0FBT1UsWUFBUCxDQUFvQixPQUFwQixFQUE2QixzQ0FBN0I7QUFDQUUsWUFBUUYsWUFBUixDQUFxQixPQUFyQixFQUE4QixRQUE5QjtBQUNELEdBSkQsTUFLSztBQUNIVixXQUFPUSxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixrQkFBeEI7QUFDQUMsWUFBUUYsWUFBUixDQUFxQixPQUFyQixFQUE4QixTQUE5QjtBQUNEO0FBRUYsQ0FaRCxFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MTZkNTY4NjY0NTQ4ZWI2OWZmMSIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9wcm9ncmVzc0Jhci5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvZm9ybS5jc3MnO1xuaW1wb3J0ICcuL3Byb2dyZXNzQmFyJztcbmltcG9ydCAnLi9zbW9vdGhfYW5jcmUuanMnO1xuaW1wb3J0ICcuL3Njcm9sbE1lbnVGaXgnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jc3Mvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvY3NzL3Byb2dyZXNzQmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Nzcy9mb3JtLmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnLnByb2dyZXNzIC5wcm9ncmVzcy1iYXInKS5jc3MoXCJ3aWR0aFwiLFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiKSArIFwiJVwiO1xuICAgIH1cbiAgKVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3Byb2dyZXNzQmFyLmpzIiwiLyoqXG4gKiBTTU9PVEggQU5DUkVcbiAqL1xuJCgnYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGVfaWQgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICQodGhlX2lkKS5vZmZzZXQoKS50b3BcbiAgfSwgJ3Nsb3cnKTtcbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cbi8qKlxuICogU0NST0xMIE1FTlUgRklYRURcbiAqL1xubGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZGVmYXVsdCcpO1xubGV0IG5hdmJhckJyYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1icmFuZCcpO1xubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcblxuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjAwKSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1maXhlZC10b3AnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NCwgNTIsIDEnKTtcbiAgICBuYXZiYXJCcmFuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1maXhlZC10b3AnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICBuYXZiYXJCcmFuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgfVxuXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9zbW9vdGhfYW5jcmUuanMiLCIvKipcbiAqIFNDUk9MTCBNRU5VIEZJWEVEXG4gKi9cbmxldCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRlZmF1bHQnKTtcbmxldCBuYXZiYXJCcmFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYnJhbmQnKTtcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmxldCBtaW5pbW9pID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbmltb2knKTtcblxuY29uc29sZS5sb2cobWluaW1vaSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcblxuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjAwKSB7XG4gICAgLy9uYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWZpeGVkLXRvcCcpO1xuICAgIG5hdmJhci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDQ0LCA1MiwgMScpO1xuICAgIG1pbmltb2kuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoaWRkZW4nKTtcbiAgfVxuICBlbHNlIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWZpeGVkLXRvcCcpO1xuICAgIG1pbmltb2kuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmxlJyk7XG4gIH1cblxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvc2Nyb2xsTWVudUZpeC5qcyJdLCJzb3VyY2VSb290IjoiIn0=