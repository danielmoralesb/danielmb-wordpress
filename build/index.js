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
      className: `dmb-block dmb-block--hero ${blockClassName}`,
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
              children: "The hero title can have one or two lines, determining the amount of lines the title has, allows the settings to adjust properly."
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
                children: "Describes the title of the hero in one line, usually composed by one word or two with a maximum of 10 characters."
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
      class: "hero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "container",
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
      })
    });
  }
});
registerBlockType("intro-block/intro-block", {
  title: "Intro Block",
  description: "Block to create an introduction section with an image, title and description aligned to the center.",
  icon: "align-center",
  category: "layout",
  attributes: {
    introTitle: {
      type: "string"
    },
    introDescription: {
      type: "html"
    },
    imageUrlMobile: {
      type: "string"
    },
    imageUrlDesktop: {
      type: "string"
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      introTitle,
      introDescription,
      imageUrlMobile,
      imageUrlDesktop
    } = attributes;
    function updateIntroTitle(event) {
      setAttributes({
        introTitle: event.target.value
      });
    }
    const handleContentChange = introDescription => {
      setAttributes({
        introDescription: introDescription
      });
    };
    const handleImageSelectMobile = media => {
      setAttributes({
        imageUrlMobile: media.url
      });
    };
    const handleImageSelectDesktop = media => {
      setAttributes({
        imageUrlDesktop: media.url
      });
    };
    const [isClosed, setIsClosed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toggleDmbBlock = () => {
      setIsClosed(!isClosed);
    };
    const blockClassName = `${isClosed ? "is-closed" : ""}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `dmb-block dmb-block--intro ${blockClassName}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "dmb-block__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "Intro Component"
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
          className: "dmb-field dmb-field--has-btn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "introImage",
              children: "Intro Image Mobile"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "The image uploaded will be the the main point of attention on the intro block. The intro image mobile section will hold up an image in landscape mode up to 220px wide."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "In order to look appropiate it is recommended that the image uploaded has a ratio of 20:40 upto 200:100"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: !imageUrlMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
              onSelect: handleImageSelectMobile,
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
                src: imageUrlMobile,
                class: "dmb-selected-image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "dmb-selected-image-image__btn-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                  onSelect: handleImageSelectMobile,
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
                    imageUrlMobile: ""
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
          className: "dmb-field dmb-field--has-btn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "introImage",
              children: "Intro Image Desktop"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "The image uploaded will be the the main point of attention on the intro block. The intro image desktop section will hold up an image in landscape mode up to 800px wide."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "In order to look appropiate it is recommended that the image uploaded has a ratio of 200:70 upto 200:100"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: !imageUrlDesktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
              onSelect: handleImageSelectDesktop,
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
                src: imageUrlDesktop,
                class: "dmb-selected-image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "dmb-selected-image-image__btn-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                  onSelect: handleImageSelectDesktop,
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
                    imageUrlDesktop: ""
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
          className: "dmb-field",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "introTitle",
              children: "Intro Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "Describes the title of the intro block in one line, usually composed by one word or two with a maximum of 20 characters."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "introTitle",
              value: introTitle,
              onChange: updateIntroTitle,
              type: "text"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "introDescription",
              children: "Intro Description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "This section describes the introduction with around 340 characters."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichText, {
            id: "introDescription",
            value: introDescription,
            onChange: handleContentChange,
            placeholder: "Enter intro description...",
            rows: "5"
          })]
        })]
      })]
    });
  },
  save({
    attributes
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
      class: "home-intro",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
          class: "home-intro__header",
          children: [attributes.imageUrlMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: attributes.imageUrlMobile,
            class: "shi-mobile"
          }), attributes.imageUrlDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: attributes.imageUrlDesktop,
            class: "shi-desktop"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
            children: attributes.introTitle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichText.Content, {
          tagName: "p",
          value: attributes.introDescription
        })]
      })
    });
  }
});
registerBlockType("tiles-block/tiles-block", {
  title: "Tiles Block",
  description: "Block to create a section with multiple tiles that contain a title, a description and one or multiple images.",
  icon: "grid-view",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false
    },
    tilesTitle: {
      type: "string"
    },
    tiles: {
      type: "array",
      default: [],
      query: {
        images: {
          type: "array",
          default: [],
          query: {
            url: {
              type: "string",
              source: "attribute",
              selector: "img",
              attribute: "src"
            }
          }
        },
        title: {
          type: "string",
          source: "text"
        },
        title2: {
          type: "string",
          source: "text"
        },
        description: {
          type: "string",
          source: "text"
        }
      }
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.isChecked);
    const {
      tiles,
      tilesTitle
    } = attributes;
    const [hasTiles, setHasTiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    function updateTilesTitle(event) {
      setAttributes({
        tilesTitle: event.target.value
      });
    }
    const handleCheckboxChange = event => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({
        isChecked: checked
      });
    };

    // const handleTileChange = (newTile, index) => {
    //   const newTiles = tiles.map((tile, i) => {
    //     return i === index ? newTile : tile;
    //   });
    //   setAttributes({ tiles: newTiles });
    // };

    function handleImageSelect(media, index) {
      const newTiles = tiles.map((tile, i) => {
        return i === index ? {
          ...tile,
          images: [...tile.images, media.url]
        } : tile;
      });
      setAttributes({
        tiles: newTiles
      });
    }
    function updateImageSelect(media, index, imageIndex) {
      const newTiles = tiles.map((tile, i) => {
        return i === index ? {
          ...tile,
          images: tile.images.map((img, imgIndex) => imgIndex === imageIndex ? media.url : img)
        } : tile;
      });
      setAttributes({
        tiles: newTiles
      });
    }
    const addTile = () => {
      const newTiles = tiles.concat([{
        images: "",
        title: "",
        title2: "",
        description: ""
      }]);
      setAttributes({
        tiles: newTiles
      });
      setHasTiles(true);
    };

    // const addImage = (index) => {
    //   const newTiles = tiles.map((tile, i) => {
    //     return i === index
    //       ? { ...tile, images: tile.images.concat([""]) }
    //       : tile;
    //   });
    //   setAttributes({ tiles: newTiles });
    //   console.log("Tiles:", tiles);
    //   console.log("Index:", index);
    //   console.log("New Tiles:", newTiles);
    //   console.log("New Tiles Images:", newTiles[index].images);
    //   console.log("Images:", tiles[index].images);
    // };

    const addImage = index => {
      const newTiles = tiles.map((tile, i) => {
        return i === index ? {
          ...tile,
          images: [...tile.images, ""]
        } : tile;
      });
      setAttributes({
        tiles: newTiles
      });
    };
    const removeTile = index => {
      const newTiles = tiles.filter((tile, i) => i !== index);
      setAttributes({
        tiles: newTiles
      });
    };
    const initialState = {
      isClosed: false,
      isClosedSub: false
    };
    const reducer = (state, action) => {
      switch (action.type) {
        case "TOGGLE_DMB_BLOCK":
          return {
            ...state,
            isClosed: !state.isClosed
          };
        case "TOGGLE_SUB_BLOCK":
          return {
            ...state,
            isClosedSub: !state.isClosedSub
          };
        default:
          return state;
      }
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
    const toggleDmbBlock = () => {
      dispatch({
        type: "TOGGLE_DMB_BLOCK"
      });
    };
    const toggleSubBlock = () => {
      dispatch({
        type: "TOGGLE_SUB_BLOCK"
      });
    };
    const blockClassName = `${state.isClosed ? "is-closed" : ""}`;
    const subClassName = `${state.isClosedSub ? "is-sub-closed" : ""}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `dmb-block dmb-block--tiles ${blockClassName}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "dmb-block__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "Tiles Component"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: toggleDmbBlock,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            class: "sr-only",
            children: "Toggle Panel"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: hasTiles === true ? "dmb-block-fields dmb-block-fields--has-tiles" : "dmb-block-fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "dmb-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              for: "tilesTitle",
              children: "Component Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "Describes the title of the overall tiles component."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "dmb-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              id: "tilesTitle",
              value: tilesTitle,
              onChange: updateTilesTitle,
              type: "text"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dmb-field dmb-field--has-subfield-group",
          children: [tiles.map((tile, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: `dmb-subfield-group ${subClassName}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "dmb-subfield__header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "dmb-subfield__options",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
                  children: ["Tile ", index + 1]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                  onClick: () => removeTile(index),
                  className: "dmb-block-btn dmb-block-btn--remove",
                  children: "Remove Tile"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                onClick: toggleSubBlock,
                className: "dmb-block-btn dmb-block-btn--toggle",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  class: "sr-only",
                  children: "Toggle Sub Panel"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "dmb-subfield__fields",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "dmb-field",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  class: "dmb-label",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                    for: "tileTitleLines",
                    children: "Does the Title have multiple lines?"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "The title can have one or two lines, determining the amount of lines the title has, allows the settings to adjust properly."
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  class: "dmb-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                    id: "tileTitleLines",
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
                      for: "tileTitle",
                      children: "Title"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: "Describes the title of the tile in one line, usually composed by one word or two with a maximum of 10 characters."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    class: "dmb-input",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                      id: "tileTitle",
                      value: tile.title,
                      onChange: event => {
                        const newTitle = event.target.value;
                        setAttributes({
                          tiles: tiles.map((t, i) => i === index ? {
                            ...t,
                            title: newTitle
                          } : t)
                        });
                      },
                      type: "text"
                    })
                  })]
                }), attributes.isChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  class: "dmb-subfield",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    class: "dmb-label",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                      for: "tileTitle2",
                      children: "Title/Second Line"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: "Adds a second line to the title title. I can hold up one word or multiple words with a maximum of 10 characters."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    class: "dmb-input",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                      id: "tileTitle2",
                      value: tile.title2,
                      onChange: event => {
                        const newTitle2 = event.target.value;
                        setAttributes({
                          tiles: tiles.map((t, i) => i === index ? {
                            ...t,
                            title2: newTitle2
                          } : t)
                        });
                      },
                      type: "text"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                class: "dmb-field",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  class: "dmb-label",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                    for: "tileDescription",
                    children: "Tile Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "Describes the tile in around 56 characters. This section is usually composed by one or two lines."
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  class: "dmb-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichText, {
                    id: "tileDescription",
                    value: tile.description,
                    onChange: description => {
                      const newDescription = description;
                      setAttributes({
                        tiles: tiles.map((t, i) => i === index ? {
                          ...t,
                          description: newDescription
                        } : t)
                      });
                    },
                    placeholder: "Enter tile description...",
                    rows: "5"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                class: "dmb-field dmb-subfield--has-btn",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  class: "dmb-label",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                    for: "heroImage",
                    children: "Tile Images"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "The images uploaded will be displayed in grid mode. Each tile image section will wil be compressed a maximum of 138px wide."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "In order to look appropiate it is recommended that the images uploaded have the same coloring/style."
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  class: "dmb-input",
                  children: [tiles.map((tile, tileIndex) => tileIndex === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "dmb-selected-image-container",
                    children: Array.isArray(tile.images) && tile.images.map((image, imageIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      class: "dmb-selected-image-wrap",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        id: tileIndex,
                        src: image,
                        class: "dmb-selected-image"
                      }, imageIndex), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "dmb-selected-image-image__btn-wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                          onSelect: media => updateImageSelect(media, index, imageIndex),
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
                          onClick: () => {
                            const newTiles = tiles.map((tile, i) => {
                              return i === index ? {
                                ...tile,
                                images: tile.images.filter((img, imgIndex) => imgIndex !== imageIndex)
                              } : tile;
                            });
                            setAttributes({
                              tiles: newTiles
                            });
                          },
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                            class: "sr-only",
                            children: "Remove Image"
                          })
                        })]
                      })]
                    }))
                  }, tileIndex)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                    onSelect: media => handleImageSelect(media, index),
                    allowedTypes: ["image"],
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                      className: "dmb-block-btn",
                      onClick: open,
                      children: "Select Images"
                    })
                  })]
                })]
              })]
            })]
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "dmb-field__header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "dmb-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "addTile",
                children: "Tiles"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "Add a tile, which consist in a frame that holds a tiles, a description and one or multiple images inside of it."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "dmb-input",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                onClick: addTile,
                className: "dmb-block-btn dmb-block-btn--icon dmb-block-btn--icon-plus",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Add a Tile"
                })
              })
            })]
          })]
        })]
      })]
    });
  },
  save({
    attributes
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
      class: "skills-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: attributes.tilesTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "skills",
          children: attributes.tiles.map((tile, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "skills__box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "tiles__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  class: "block",
                  children: tile.title
                }), attributes.isChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  class: "block",
                  children: tile.title2
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: tile.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "skills__logos",
                children: Array.isArray(tile.images) && tile.images.map((image, imageIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  id: index,
                  src: image
                }, imageIndex))
              })]
            })
          }))
        })]
      })
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map