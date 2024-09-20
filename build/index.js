/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  MediaUpload
} = wp.blockEditor;
const {
  Button
} = wp.components;
registerBlockType("hero-block/hero-block", {
  title: "Hero Block",
  description: "Block to create a hero section with a title on the left side and an image on the right side. A description and social platforms on the bottom.",
  icon: "superhero",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false
    },
    heroTitle: {
      type: "string"
    },
    heroTitle2: {
      type: "string"
    },
    heroContent: {
      type: "html"
    },
    imageUrl: {
      type: "string"
    },
    linkedinUrl: {
      type: "string"
    },
    codepenUrl: {
      type: "string"
    },
    githubUrl: {
      type: "string"
    },
    dribbbleUrl: {
      type: "string"
    },
    resumeUrl: {
      type: "string"
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.isChecked);
    const {
      heroTitle,
      heroTitle2,
      heroContent,
      imageUrl,
      linkedinUrl,
      codepenUrl,
      githubUrl,
      dribbbleUrl,
      resumeUrl
    } = attributes;
    const handleCheckboxChange = event => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({
        isChecked: checked
      });
    };
    function updateHeroTitle(event) {
      setAttributes({
        heroTitle: event.target.value
      });
    }
    function updateHeroTitle2(event) {
      setAttributes({
        heroTitle2: event.target.value
      });
    }
    const handleContentChange = heroContent => {
      setAttributes({
        heroContent: heroContent
      });
    };
    const handleImageSelect = media => {
      setAttributes({
        imageUrl: media.url
      });
    };
    const handleLinkedinUrl = event => {
      setAttributes({
        linkedinUrl: event.target.value
      });
    };
    const handleCodepenUrl = event => {
      setAttributes({
        codepenUrl: event.target.value
      });
    };
    const handleGithubUrl = event => {
      setAttributes({
        githubUrl: event.target.value
      });
    };
    const handleDribbbleUrl = event => {
      setAttributes({
        dribbbleUrl: event.target.value
      });
    };
    const handleResumeUrl = event => {
      setAttributes({
        resumeUrl: event.target.value
      });
    };
    const [isClosed, setIsClosed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toggleDmbBlock = () => {
      setIsClosed(!isClosed);
    };
    const blockClassName = `${isClosed ? "is-closed" : ""}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `dmb-block ${blockClassName}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "dmb-block__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "Hero Component"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: toggleDmbBlock,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            class: "sr-only",
            children: "Toggle Panel"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "dmb-block-fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "heroTitleLines",
              children: "Does the Hero Title have multiple lines?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "The hero block title can have one or two lines, determining the amount of lines the title has, allows the settings to adjust properly."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "heroTitleLines",
              type: "checkbox",
              checked: isChecked,
              onChange: handleCheckboxChange
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field dmb-field--has-subfield",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-subfield",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "dmb-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                for: "heroTitle",
                children: "Hero Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "Describes the title of the hero block in one line, usually composed by one word or two with a maximum of 10 characters."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "dmb-input",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                id: "heroTitle",
                value: heroTitle,
                onChange: updateHeroTitle,
                type: "text"
              })
            })]
          }), attributes.isChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-subfield",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "dmb-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                for: "heroTitle2",
                children: "Hero Title/Second Line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "Adds a second line to the hero title. I can hold up one word or multiple words with a maximum of 10 characters."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "dmb-input",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                id: "heroTitle2",
                value: heroTitle2,
                onChange: updateHeroTitle2,
                type: "text"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "heroDescription",
              children: "Hero Description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "This section describes in an small amount of words or upto 56 characters what the hero is about."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichText, {
            id: "heroDescription",
            value: heroContent,
            onChange: handleContentChange,
            placeholder: "Enter hero content...",
            rows: "5"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field dmb-field--has-btn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "heroImage",
              children: "Hero Image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "The image uploaded will be the the main point of attention on the hero block. The hero image section will hold up an image up to 744px wide."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "In order to look appropiate it is recommended that the image uploaded has a ratio of 4:3 upto 4:4"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: !imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
              onSelect: handleImageSelect,
              allowedTypes: ["image"],
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                className: "dmb-block-btn",
                onClick: open,
                children: "Select Image"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "dmb-selected-image-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                src: imageUrl,
                class: "dmb-selected-image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "dmb-selected-image-image__btn-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                  onSelect: handleImageSelect,
                  allowedTypes: ["image"],
                  render: ({
                    open
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                    className: "dmb-block-btn dmb-block-btn--select",
                    onClick: open,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      class: "sr-only",
                      children: "Select Image"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                  className: "dmb-block-btn dmb-block-btn--remove",
                  onClick: () => setAttributes({
                    imageUrl: ""
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    class: "sr-only",
                    children: "Remove Image"
                  })
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          class: "dmb-field dmb-field--has-multiple-inputs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
              class: "label-style",
              children: "Social Media"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "This section displays the social media links that you would like to include on the hero block."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "linkedinUrl",
              value: linkedinUrl,
              onChange: handleLinkedinUrl,
              type: "url",
              pattern: "https://.*",
              placeholder: "LinkedIn"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "codepenUrl",
              value: codepenUrl,
              onChange: handleCodepenUrl,
              type: "url",
              pattern: "https://.*",
              placeholder: "Codepen"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "githubUrl",
              value: githubUrl,
              onChange: handleGithubUrl,
              type: "url",
              pattern: "https://.*",
              placeholder: "GitHub"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "dribbbleUrl",
              value: dribbbleUrl,
              onChange: handleDribbbleUrl,
              type: "url",
              pattern: "https://.*",
              placeholder: "Dribbble"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "resumeURL",
              value: resumeUrl,
              onChange: handleResumeUrl,
              type: "text",
              placeholder: "Resume"
            })]
          })]
        })]
      })]
    });
  },
  save({
    attributes
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
      class: "hero",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "hero__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          class: "hero__inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "hero__text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "block--xs",
                children: attributes.heroTitle
              }), attributes.isChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "block--xs",
                children: attributes.heroTitle2
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "hero__image",
            children: attributes.imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: attributes.imageUrl,
              class: "hero-home"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichText.Content, {
          tagName: "p",
          value: attributes.heroContent
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
        class: "hero__nav-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          class: "hero__nav",
          children: [attributes.linkedinUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            class: "hero__item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: attributes.linkedinUrl,
              class: "hero__link hero__link--linkedin",
              title: "linkedin",
              target: "_blank",
              rel: "noreferrer noopener",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "sr-only",
                children: "linkedin"
              })
            })
          }), attributes.codepenUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            class: "hero__item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: attributes.codepenUrl,
              class: "hero__link hero__link--codepen",
              title: "codepen",
              target: "_blank",
              rel: "noreferrer noopener",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "sr-only",
                children: "codepen"
              })
            })
          }), attributes.githubUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            class: "hero__item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: attributes.githubUrl,
              class: "hero__link hero__link--github",
              title: "github",
              target: "_blank",
              rel: "noreferrer noopener",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "sr-only",
                children: "github"
              })
            })
          }), attributes.dribbbleUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            class: "hero__item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: attributes.dribbbleUrl,
              class: "hero__link hero__link--dribbble",
              title: "dribbble",
              target: "_blank",
              rel: "noreferrer noopener",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "sr-only",
                children: "dribbble"
              })
            })
          }), attributes.resumeUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            class: "hero__item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: attributes.resumeUrl,
              class: "btn btn--primary btn--icon btn--icon--resume",
              title: "Resume",
              target: "_blank",
              rel: "noreferrer noopener",
              children: "Resume"
            })
          })]
        })
      })]
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map