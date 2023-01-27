/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/aboutSlider.js":
/*!**************************************!*\
  !*** ./src/assets/js/aboutSlider.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst aboutSlider = () => {\n  // about slider\n  const aboutSliderContainer = document.querySelector('.about-slider-container');\n  const aboutSliderWrapper = document.querySelector('.about-slider-wrapper');\n  const aboutSwiperPagination = aboutSliderContainer.querySelector('.swiper-pagination');\n  const aboutItems = document.querySelectorAll('.about__item');\n\n  document.addEventListener('DOMContentLoaded', async () => {\n    const aboutSwiperPaginationBullet = aboutSliderContainer.querySelectorAll(\n      '.swiper-pagination-bullet',\n    );\n\n    aboutItems.forEach((aboutItem, i) => {\n      aboutItem.addEventListener('click', () => {\n        aboutSwiperPaginationBullet[i].click();\n\n        // add active class\n        aboutItems.forEach((item) => {\n          item.classList.remove('about__item--active');\n        });\n        aboutItem.classList.add('about__item--active');\n      });\n    });\n  });\n\n  new Swiper(aboutSliderContainer, {\n    loop: true,\n    pagination: {\n      el: aboutSwiperPagination,\n      clickable: true,\n    },\n    allowTouchMove: false,\n    effect: 'fade',\n    fadeEffect: {\n      crossFade: true,\n    },\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aboutSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/aboutSlider.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teamSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamSlider */ \"./src/assets/js/teamSlider.js\");\n/* harmony import */ var _mentionsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentionsSlider */ \"./src/assets/js/mentionsSlider.js\");\n/* harmony import */ var _blogSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogSlider */ \"./src/assets/js/blogSlider.js\");\n/* harmony import */ var _aboutSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutSlider */ \"./src/assets/js/aboutSlider.js\");\n/* harmony import */ var _faqSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqSlider */ \"./src/assets/js/faqSlider.js\");\n/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./burgerMenu */ \"./src/assets/js/burgerMenu.js\");\n/* harmony import */ var _rocketAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rocketAnimation */ \"./src/assets/js/rocketAnimation.js\");\n/* harmony import */ var _featuresAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featuresAnimation */ \"./src/assets/js/featuresAnimation.js\");\n/* harmony import */ var _preloaderAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preloaderAnimation */ \"./src/assets/js/preloaderAnimation.js\");\n/* harmony import */ var _fixedHeaderAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fixedHeaderAnimation */ \"./src/assets/js/fixedHeaderAnimation.js\");\n/* harmony import */ var _setActiveNavItemAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setActiveNavItemAnimation */ \"./src/assets/js/setActiveNavItemAnimation.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_teamSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_mentionsSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_blogSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_aboutSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_faqSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_burgerMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_preloaderAnimation__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\nwindow.addEventListener('scroll', () => {\n  (0,_rocketAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  (0,_featuresAnimation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  (0,_fixedHeaderAnimation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  (0,_setActiveNavItemAnimation__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/blogSlider.js":
/*!*************************************!*\
  !*** ./src/assets/js/blogSlider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst blogSlider = () => {\n  const blogSliderContainer = document.querySelector('.blog-slider-container');\n  const blogSliderWrapper = document.querySelector('.blog-slider-wrapper');\n  const blogSwiperButtonTeamNext = blogSliderContainer.querySelector('.swiper-button-next');\n  const blogSwiperButtonTeamPrev = blogSliderContainer.querySelector('.swiper-button-prev');\n  const blogSliderButtonTeamNext = blogSliderContainer.querySelector('.slider-button-next');\n  const blogSliderButtonTeamPrev = blogSliderContainer.querySelector('.slider-button-prev');\n\n  new Swiper(blogSliderContainer, {\n    navigation: {\n      nextEl: blogSwiperButtonTeamNext,\n      prevEl: blogSwiperButtonTeamPrev,\n    },\n    loop: true,\n  });\n\n  blogSliderButtonTeamNext.addEventListener('click', () => {\n    blogSwiperButtonTeamNext.click();\n  });\n\n  blogSliderButtonTeamPrev.addEventListener('click', () => {\n    blogSwiperButtonTeamPrev.click();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/blogSlider.js?");

/***/ }),

/***/ "./src/assets/js/burgerMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/burgerMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst burgerMenu = () => {\n  // burger menu\n  const burger = document.querySelector('.burger');\n  const closeBurger = document.querySelector('.close-burger');\n  const burgerMenu = document.querySelector('.burger-menu');\n  const headerNavItems = document.querySelectorAll('.header__nav-item');\n\n  const openBurgerMenu = () => {\n    burgerMenu.classList.add('burger-menu--active');\n    document.body.classList.add('overflow-h');\n  };\n\n  const closeBurgerMenu = () => {\n    burgerMenu.classList.remove('burger-menu--active');\n    document.body.classList.remove('overflow-h');\n  };\n\n  burger.addEventListener('click', openBurgerMenu);\n  closeBurger.addEventListener('click', closeBurgerMenu);\n  headerNavItems.forEach((headerNavItem) => {\n    headerNavItem.addEventListener('click', () => {\n      closeBurgerMenu();\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerMenu);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burgerMenu.js?");

/***/ }),

/***/ "./src/assets/js/faqSlider.js":
/*!************************************!*\
  !*** ./src/assets/js/faqSlider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst faqSlider = () => {\n  // faq\n  const faqItems = document.querySelectorAll('.faq__item');\n  const faqColumnVisibles = document.querySelectorAll('.faq__column-visible');\n  const faqColumnHides = document.querySelectorAll('.faq__column-hide');\n  const faqColumnArrow = document.querySelectorAll('.faq__column-arrow');\n\n  const faqColumnHideTransitionOpacity = 500; // 0.5\n\n  faqColumnVisibles.forEach((el, i) => {\n    el.addEventListener('click', (e) => {\n      if (el.classList.contains('faq__column-visible--active')) {\n        faqItems[i].classList.remove('faq__item--active');\n        faqColumnHides[i].classList.remove('faq__column-hide--active');\n\n        setTimeout(() => {\n          el.classList.remove('faq__column-visible--active');\n          faqColumnArrow[i].classList.remove('faq__column-arrow--active');\n        }, faqColumnHideTransitionOpacity);\n      } else {\n        faqItems[i].classList.add('faq__item--active');\n        el.classList.add('faq__column-visible--active');\n        faqColumnArrow[i].classList.add('faq__column-arrow--active');\n        faqColumnHides[i].classList.add('faq__column-hide--active');\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (faqSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/faqSlider.js?");

/***/ }),

/***/ "./src/assets/js/featuresAnimation.js":
/*!********************************************!*\
  !*** ./src/assets/js/featuresAnimation.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst oneScroll = 100;\n\nconst featuresColumnCenter = document.querySelector('.features__column-center');\n\nconst featuresColumnCenterImages = [...featuresColumnCenter.getElementsByTagName('img')];\nfeaturesColumnCenterImages[0].style.opacity = '1';\nfeaturesColumnCenterImages[1].style.opacity = '0';\n\nconst featuresColumnCenterRectTop = featuresColumnCenter.getBoundingClientRect().top;\nconst featuresColumnCenterHeight = featuresColumnCenter.offsetHeight;\nconst wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';\nconst featuresImages = ['./assets/images/phone1.png', './assets/images/phone2.png'];\n\nconst featuresAnimation = () => {\n  const bottomPositionOfFeaturesColumnCenter =\n    featuresColumnCenterHeight + featuresColumnCenterRectTop - window.scrollY - window.innerHeight;\n\n  // if we scroll to bottom of features column center\n  if (bottomPositionOfFeaturesColumnCenter + oneScroll < 0) {\n    featuresColumnCenterImages[0].style.opacity = '0';\n    featuresColumnCenterImages[1].style.opacity = '1';\n  } else {\n    featuresColumnCenterImages[0].style.opacity = '1';\n    featuresColumnCenterImages[1].style.opacity = '0';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (featuresAnimation);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/featuresAnimation.js?");

/***/ }),

/***/ "./src/assets/js/fixedHeaderAnimation.js":
/*!***********************************************!*\
  !*** ./src/assets/js/fixedHeaderAnimation.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst header = document.querySelector('.header');\r\n\r\nconst fixedHeaderAnimation = () => {\r\n  if (window.scrollY >= 100) {\r\n    header.classList.add('header--active');\r\n  } else {\r\n    header.classList.remove('header--active');\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fixedHeaderAnimation);\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/fixedHeaderAnimation.js?");

/***/ }),

/***/ "./src/assets/js/mentionsSlider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/mentionsSlider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mentionsSlider = () => {\n  // mentions slider\n  const mentionsSliderContainer = document.querySelector('.mentions__slider-container');\n  const mentionsSliderWrapper = document.querySelector('.mentions__slider-wrapper');\n  const mentionsSwiperButtonTeamNext = mentionsSliderContainer.querySelector('.swiper-button-next');\n  const mentionsSwiperButtonTeamPrev = mentionsSliderContainer.querySelector('.swiper-button-prev');\n  const mentionsSliderButtonTeamNext = mentionsSliderContainer.querySelector('.slider-button-next');\n  const mentionsSliderButtonTeamPrev = mentionsSliderContainer.querySelector('.slider-button-prev');\n\n  new Swiper(mentionsSliderContainer, {\n    navigation: {\n      nextEl: mentionsSwiperButtonTeamNext,\n      prevEl: mentionsSwiperButtonTeamPrev,\n    },\n    loop: true,\n  });\n\n  mentionsSliderButtonTeamNext.addEventListener('click', () => {\n    mentionsSwiperButtonTeamNext.click();\n  });\n\n  mentionsSliderButtonTeamPrev.addEventListener('click', () => {\n    mentionsSwiperButtonTeamPrev.click();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mentionsSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mentionsSlider.js?");

/***/ }),

/***/ "./src/assets/js/preloaderAnimation.js":
/*!*********************************************!*\
  !*** ./src/assets/js/preloaderAnimation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst preloaderAnimation = () => {\n  const preloader = document.querySelector('.preloader');\n  const preloaderProgressLine = document.querySelector('.preloader__progress-line');\n\n  let widthOfPreloaderProgressLine = 10;\n  const transitionOfPreloader = 1000; // 1s\n  let isLoadedPage = false;\n\n  preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\n\n  function hidePreloader() {\n    preloader.classList.add('preloader--hide');\n    document.body.classList.remove('overflow-h');\n\n    // after transition\n    setTimeout(() => {\n      preloader.style.zIndex = '-1';\n    }, transitionOfPreloader);\n  }\n\n  const interval = setInterval(() => {\n    if (widthOfPreloaderProgressLine <= 99) {\n      // set width of preloader (10%, 11%, 12% ...)\n      preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\n      widthOfPreloaderProgressLine += 1;\n    } else {\n      // if preloader width > 99\n      if (isLoadedPage) {\n        // if the page loaded before the preloader reaches 100%\n        preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\n        hidePreloader();\n        clearInterval(interval);\n      }\n    }\n  }, 25);\n\n  window.addEventListener('load', () => {\n    isLoadedPage = true;\n\n    if (widthOfPreloaderProgressLine > 99) {\n      // if the page loaded after the preloader reaches 100%\n      preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\n      hidePreloader();\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (preloaderAnimation);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/preloaderAnimation.js?");

/***/ }),

/***/ "./src/assets/js/rocketAnimation.js":
/*!******************************************!*\
  !*** ./src/assets/js/rocketAnimation.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst introImgWrapper = document.querySelector('.intro__img-wrapper');\n\nconst moveRocket = () => {\n  introImgWrapper.style.transform = `translate(${-window.scrollY / 2}px,${-window.scrollY / 2}px)`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveRocket);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/rocketAnimation.js?");

/***/ }),

/***/ "./src/assets/js/setActiveNavItemAnimation.js":
/*!****************************************************!*\
  !*** ./src/assets/js/setActiveNavItemAnimation.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst sections = document.querySelectorAll('.section');\r\nconst header = document.querySelector('.header');\r\nconst headerNavItems = document.querySelector('.header').querySelectorAll('.header__nav-item');\r\nconst burgerNavItems = document.querySelector('.burger-menu').querySelectorAll('.header__nav-item');\r\n\r\nconst headerHeight = header.clientHeight;\r\nlet scrolledSectionIndexes = [];\r\nlet scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;\r\n\r\nconst setActiveNavItemAnimation = () => {\r\n  sections.forEach((section, i) => {\r\n    // if scrolled element and element includes in scrolledSectionIndexes\r\n    if (\r\n      section.getBoundingClientRect().top - headerHeight < 0 &&\r\n      !scrolledSectionIndexes.includes(i)\r\n    ) {\r\n      scrolledSectionIndexes.push(i);\r\n      scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;\r\n      // set active navigation item\r\n      headerNavItems[scrolledSectionIndexesLastIndex - 1]?.classList.remove(\r\n        'header__nav-item--active',\r\n      );\r\n      headerNavItems[scrolledSectionIndexesLastIndex]?.classList.add('header__nav-item--active');\r\n    }\r\n\r\n    // if scrolled to top and we scrolled element we need to delete index at scrolledSectionIndexes\r\n    if (\r\n      section.getBoundingClientRect().top - headerHeight > 0 &&\r\n      scrolledSectionIndexes.includes(i)\r\n    ) {\r\n      scrolledSectionIndexes.pop();\r\n      scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;\r\n      // set active navigation item\r\n      headerNavItems[scrolledSectionIndexesLastIndex + 1]?.classList.remove(\r\n        'header__nav-item--active',\r\n      );\r\n      headerNavItems[scrolledSectionIndexesLastIndex]?.classList.add('header__nav-item--active');\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (setActiveNavItemAnimation);\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/setActiveNavItemAnimation.js?");

/***/ }),

/***/ "./src/assets/js/teamSlider.js":
/*!*************************************!*\
  !*** ./src/assets/js/teamSlider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst teamSlider = () => {\n  const teamSliderContainer = document.querySelector('.team-slider-container');\n  const teamSliderWrapper = document.querySelector('.team-slider-wrapper');\n  const teamSwiperButtonTeamNext = teamSliderContainer.querySelector('.swiper-button-next');\n  const teamSwiperButtonTeamPrev = teamSliderContainer.querySelector('.swiper-button-prev');\n  const teamSliderButtonTeamNext = teamSliderContainer.querySelector('.slider-button-next');\n  const teamSliderButtonTeamPrev = teamSliderContainer.querySelector('.slider-button-prev');\n\n  // activate team slider for team section on display width < 1024\n  if (window.innerWidth <= 1024) {\n    new Swiper(teamSliderContainer, {\n      navigation: {\n        nextEl: teamSwiperButtonTeamNext,\n        prevEl: teamSwiperButtonTeamPrev,\n      },\n      loop: true,\n    });\n\n    teamSliderButtonTeamNext.addEventListener('click', () => {\n      teamSwiperButtonTeamNext.click();\n    });\n\n    teamSliderButtonTeamPrev.addEventListener('click', () => {\n      teamSwiperButtonTeamPrev.click();\n    });\n\n    teamSliderWrapper.classList.remove('team__row');\n    teamSliderWrapper.classList.remove('d-g');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (teamSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/teamSlider.js?");

/***/ }),

/***/ "./src/assets/js/teamslider.js":
/*!*************************************!*\
  !*** ./src/assets/js/teamslider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst teamSlider = () => {\n  const teamSliderContainer = document.querySelector('.team-slider-container');\n  const teamSliderWrapper = document.querySelector('.team-slider-wrapper');\n  const teamSwiperButtonTeamNext = teamSliderContainer.querySelector('.swiper-button-next');\n  const teamSwiperButtonTeamPrev = teamSliderContainer.querySelector('.swiper-button-prev');\n  const teamSliderButtonTeamNext = teamSliderContainer.querySelector('.slider-button-next');\n  const teamSliderButtonTeamPrev = teamSliderContainer.querySelector('.slider-button-prev');\n\n  // activate team slider for team section on display width < 1024\n  if (window.innerWidth <= 1024) {\n    new Swiper(teamSliderContainer, {\n      navigation: {\n        nextEl: teamSwiperButtonTeamNext,\n        prevEl: teamSwiperButtonTeamPrev,\n      },\n      loop: true,\n    });\n\n    teamSliderButtonTeamNext.addEventListener('click', () => {\n      teamSwiperButtonTeamNext.click();\n    });\n\n    teamSliderButtonTeamPrev.addEventListener('click', () => {\n      teamSwiperButtonTeamPrev.click();\n    });\n\n    teamSliderWrapper.classList.remove('team__row');\n    teamSliderWrapper.classList.remove('d-g');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (teamSlider);\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/teamslider.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/assets/js/aboutSlider.js");
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/blogSlider.js");
/******/ 	__webpack_require__("./src/assets/js/burgerMenu.js");
/******/ 	__webpack_require__("./src/assets/js/faqSlider.js");
/******/ 	__webpack_require__("./src/assets/js/featuresAnimation.js");
/******/ 	__webpack_require__("./src/assets/js/fixedHeaderAnimation.js");
/******/ 	__webpack_require__("./src/assets/js/mentionsSlider.js");
/******/ 	__webpack_require__("./src/assets/js/preloaderAnimation.js");
/******/ 	__webpack_require__("./src/assets/js/rocketAnimation.js");
/******/ 	__webpack_require__("./src/assets/js/setActiveNavItemAnimation.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/teamslider.js");
/******/ 	
/******/ })()
;