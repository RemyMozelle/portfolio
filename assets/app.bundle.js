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

  if (window.scrollY >= 600) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE3ZDVjNmNiNmE3YjE4OGQ3NzEiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzP2ZkYzIiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzcy9wcm9ncmVzc0Jhci5jc3M/ZTFkZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL2Zvcm0uY3NzP2ZlNmUiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9zbW9vdGhfYW5jcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Njcm9sbE1lbnVGaXguanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjc3MiLCJhdHRyIiwiY2xpY2siLCJ0aGVfaWQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwibmF2YmFyIiwicXVlcnlTZWxlY3RvciIsIm5hdmJhckJyYW5kIiwiaGVhZGVyIiwibWluaW1vaSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGF1dGV1ciIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsdUI7Ozs7OztBQ0xBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7Ozs7OztBQ0FBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUMzQkYsSUFBRSx5QkFBRixFQUE2QkcsR0FBN0IsQ0FBaUMsT0FBakMsRUFDRSxZQUFXO0FBQ1AsV0FBT0gsRUFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxlQUFiLElBQWdDLEdBQXZDO0FBQ0gsR0FISDtBQUtELENBTkQsRTs7Ozs7Ozs7O0FDQUE7OztBQUdBSixFQUFFLGNBQUYsRUFBa0JLLEtBQWxCLENBQXdCLFlBQVk7QUFDbEMsTUFBSUMsU0FBU04sRUFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxNQUFiLENBQWI7O0FBRUFKLElBQUUsWUFBRixFQUFnQk8sT0FBaEIsQ0FBd0I7QUFDdEJDLGVBQVdSLEVBQUVNLE1BQUYsRUFBVUcsTUFBVixHQUFtQkM7QUFEUixHQUF4QixFQUVHLE1BRkg7QUFHQSxTQUFPLEtBQVA7QUFDRCxDQVBELEU7Ozs7Ozs7OztBQ0hBOzs7QUFHQSxJQUFJQyxTQUFTVixTQUFTVyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsSUFBSUMsY0FBY1osU0FBU1csYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQUlFLFNBQVNiLFNBQVNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLElBQUlHLFVBQVVkLFNBQVNXLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFFQUksT0FBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFPOztBQUV2QyxNQUFJQyxVQUFVLENBQWQ7QUFDQSxNQUFHSCxPQUFPSSxPQUFQLElBQWtCRCxPQUFyQixFQUE4QjtBQUM1QkE7QUFDRCxPQUFHSCxPQUFPSSxPQUFQLElBQWtCRCxPQUFyQixFQUE4QjtBQUM3QkE7QUFDRDtBQUNELE1BQUdILE9BQU9JLE9BQVAsSUFBa0JELE9BQXJCLEVBQThCO0FBQzVCQTtBQUNEOztBQUVERSxVQUFRQyxHQUFSLENBQVlILE9BQVo7O0FBRUEsTUFBSUgsT0FBT0ksT0FBUCxJQUFrQixHQUF0QixFQUEyQjtBQUN6QlQsV0FBT1ksU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsa0JBQXJCO0FBQ0FiLFdBQU9jLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsc0NBQTdCO0FBQ0FWLFlBQVFVLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIscUJBQTlCO0FBQ0QsR0FKRCxNQUtLO0FBQ0hkLFdBQU9ZLFNBQVAsQ0FBaUJHLE1BQWpCLENBQXdCLGtCQUF4QjtBQUNBWCxZQUFRVSxZQUFSLENBQXFCLE9BQXJCLEVBQThCLG9CQUE5QjtBQUNEO0FBRUYsQ0F4QkQsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTE3ZDVjNmNiNmE3YjE4OGQ3NzEiLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvcHJvZ3Jlc3NCYXIuY3NzJztcbmltcG9ydCAnLi4vY3NzL2Zvcm0uY3NzJztcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XG5pbXBvcnQgJy4vc21vb3RoX2FuY3JlLmpzJztcbmltcG9ydCAnLi9zY3JvbGxNZW51Rml4JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Nzcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jc3MvcHJvZ3Jlc3NCYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvY3NzL2Zvcm0uY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmNzcyhcIndpZHRoXCIsXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIpICsgXCIlXCI7XG4gICAgfVxuICApXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvcHJvZ3Jlc3NCYXIuanMiLCIvKipcbiAqIFNNT09USCBBTkNSRVxuICovXG4kKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoZV9pZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG5cbiAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgIHNjcm9sbFRvcDogJCh0aGVfaWQpLm9mZnNldCgpLnRvcFxuICB9LCAnc2xvdycpO1xuICByZXR1cm4gZmFsc2U7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvc21vb3RoX2FuY3JlLmpzIiwiLyoqXG4gKiBTQ1JPTEwgTUVOVSBGSVhFRFxuICovXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kZWZhdWx0Jyk7XG5sZXQgbmF2YmFyQnJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJyYW5kJyk7XG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5sZXQgbWluaW1vaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW5pbW9pJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICBcbiAgbGV0IGhhdXRldXIgPSAwXG4gIGlmKHdpbmRvdy5zY3JvbGxZIDw9IGhhdXRldXIpIHtcbiAgICBoYXV0ZXVyICsrXG4gIH1pZih3aW5kb3cuc2Nyb2xsWSA8PSBoYXV0ZXVyKSB7XG4gICAgaGF1dGV1ciArK1xuICB9XG4gIGlmKHdpbmRvdy5zY3JvbGxZIDw9IGhhdXRldXIpIHtcbiAgICBoYXV0ZXVyICsrXG4gIH1cblxuICBjb25zb2xlLmxvZyhoYXV0ZXVyKTtcblxuICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAwKSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1maXhlZC10b3AnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NCwgNTIsIDEnKTtcbiAgICBtaW5pbW9pLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogdmlzaWJsZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItZml4ZWQtdG9wJyk7XG4gICAgbWluaW1vaS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IGhpZGRlbicpO1xuICB9XG5cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3Njcm9sbE1lbnVGaXguanMiXSwic291cmNlUm9vdCI6IiJ9
