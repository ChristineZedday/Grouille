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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./wysiwyg */ "./resources/js/wysiwyg.js");

var button = document.getElementById("connectmembre");
var modal = document.getElementById("membre");
var close = document.getElementById("close");
var burger = document.getElementById("burger");
var menudiv = document.getElementById("hiddenheader");

if (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });
}

close.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  function toggleMenu() {
    if (menudiv.style.display == "block") {
      menudiv.style.display = "none";
    } else {
      menudiv.style.display = "block";
    }
  }

  burger.addEventListener("click", function (e) {
    toggleMenu();
  });
}; // ====================================FAVORIS=========================================

/***/ }),

/***/ "./resources/js/wysiwyg.js":
/*!*********************************!*\
  !*** ./resources/js/wysiwyg.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* YSeditor ================================================================== */
function YSeditor(selector) {
  var editors = document.querySelectorAll(selector);

  if (editors) {
    this.editors = [];

    for (var i = 0; i < editors.length; i++) {
      var editor = new YSeditorObject(editors[i]);
      this.editors.push(editor);
    }
  }
}

;
YSeditor.prototype = {
  addColor: function addColor(colors) {
    for (var i = 0; i < this.editors.length; i++) {
      this.editors[i].addColor(colors);
    }
  },
  addFont: function addFont(name) {
    for (var i = 0; i < this.editors.length; i++) {
      this.editors[i].doc.style.fontFamily = name;
    }
  }
};

function YSeditorObject(editor) {
  var t = this;
  window.settingsLogo = false;
  window.imageSettings = false;
  t.container = editor;
  t.seeHTML = false;
  var textarea = editor.querySelector('textarea');

  if (textarea) {
    textarea.style.display = 'none';
    textarea.style.fontFamily = 'monotype';
    t.textarea = textarea;
  }

  t.basicColors();
  var iframe = document.createElement('div');
  iframe.style.minHeight = '300px';
  iframe.style.width = '100%';
  iframe.style.overflow = 'hidden';
  iframe.style.fontFamily = 'sans-serif';
  iframe.contentEditable = true;
  iframe.innerHTML = t.textarea.value;
  document.execCommand('defaultParagraphSeparator', false, 'p');
  t.toolBar();
  t.doc = iframe;
  editor.appendChild(iframe);
  t.observe();
  window.addEventListener('scroll', function () {
    if (imageSettings && settingsLogo) {
      var rect = imageSettings.getBoundingClientRect();
      settingsLogo.innerHTML = "\u2699";
      settingsLogo.style.fontSize = '40px';
      settingsLogo.style.fontWeight = '800';
      settingsLogo.style.pointerEvents = 'none';
      settingsLogo.style.position = 'fixed';
      settingsLogo.style.top = rect.top + (rect.bottom - rect.top) / 2 - 20 + 'px';
      settingsLogo.style.left = rect.left + (rect.right - rect.left) / 2 - 20 + 'px';
    }
  });
}

;
YSeditorObject.prototype = {
  basicColors: function basicColors() {
    this.colors = ['#232323', '#f3f3f3', '#2393b1', '#dfad2f', '#f44336', '#8bc34a'];
  },
  saveSelection: function saveSelection() {
    if (window.getSelection) {
      var sel = window.getSelection();

      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }

    return null;
  },
  restoreSelection: function restoreSelection() {
    var range = this.textAreaSelection;

    if (range) {
      if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.selection && range.select) {
        range.select();
      }
    }
  },
  observe: function observe() {
    var _this = this;

    var t = this;
    t.doc.addEventListener('keyup', function () {
      t.saveToTextarea();
    });
    t.doc.addEventListener('drop', function (e) {
      if (document.caretRangeFromPoint) {
        // Chrome
        t.textAreaSelection = document.caretRangeFromPoint(e.clientX, e.clientY);
      } else if (e.rangeParent) {
        // Firefox
        t.textAreaSelection = document.createRange();
        range.setStart(e.rangeParent, e.rangeOffset);
      }

      var text = e.dataTransfer.getData('text');
      var srcFrame = document.querySelector('[name="aide"]');
      var alt = '';

      if (srcFrame) {
        var img = srcFrame.contentDocument.querySelector('[src="' + text.replace(window.location.protocol + '//' + window.location.host + '/', '../') + '"]');
        alt = img.alt;
      }

      var data = e.dataTransfer.getData('URL');

      if (data && data != '') {
        if (data.match(/media([0-9]+)_s./i)) {
          e.preventDefault();
          var rwr = data.replace('_s.', '_p.');

          _this.image(rwr, alt);
        } else if (data.match(/([0-9]+).pdf/i)) {
          var id = data.match(/([0-9]+).pdf/i);
        }
      }
    });
  },
  toolBar: function toolBar() {
    var toolBar = document.createElement('nav');
    toolBar.id = "toolBarEditor";
    this.container.insertBefore(toolBar, this.textarea);
    this.options(toolBar);
  },
  options: function options(node) {
    var t = this;
    var opts = ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'bold', 'italic', 'underline', 'strikethrough', 'insertUnorderedList', 'textList', 'paint', 'link', 'seeMore', 'code'];

    for (var i = 0; i < opts.length; i++) {
      if (opts[i] == 'textList') {
        var choices = [['format du texte', ''], ['paragraphe', 'p'], ['Titre 1', 'h2'], ['Titre 2', 'h3'], ['Titre 3', 'h4'], ['citation', 'blockquote']];
        var select = document.createElement('select');

        for (var nb = 0; nb < choices.length; nb++) {
          var choice = document.createElement('option');
          choice.value = choices[nb][1];
          choice.append(document.createTextNode(choices[nb][0]));
          select.appendChild(choice);
        }

        select.addEventListener('mousedown', function (e) {
          t.textAreaSelection = t.saveSelection();
        });
        select.addEventListener('change', function (e) {
          if (this.value != '') {
            t.execCmdWithVal('formatBlock', this.value);
          }

          this.value = '';
        });
        select.value = '';
        node.appendChild(select);
      } else {
        var span = document.createElement('span');
        span.className = 'icon-' + opts[i] + ' btnEditor';
        span.setAttribute('data-action', opts[i]);
        span.addEventListener('mousedown', function (e) {
          e.preventDefault();
          t.textAreaSelection = t.saveSelection();
          var attr = this.getAttribute('data-action');

          if (this.seeHTML && attr != 'code') {
            return;
          }

          switch (attr) {
            case 'paint':
              t.chooseColor();
              break;

            case 'link':
              t.createLink();
              break;

            case 'code':
              t.switchToHtml();
              break;

            case 'seeMore':
              t.insertSeeMore();
              break;

            default:
              t.execCmd(attr);
          }
        });
        node.appendChild(span);
        span = null;
      }
    }
  },
  execCmd: function execCmd(cmd) {
    this.restoreSelection();
    document.execCommand(cmd, false, null);
    this.saveToTextarea();
  },
  execCmdWithVal: function execCmdWithVal(cmd, val) {
    this.restoreSelection();

    if (cmd == 'formatBlock') {
      if (this.textAreaSelection.commonAncestorContainer.nodeName == 'UL' || this.textAreaSelection.commonAncestorContainer.parentNode.nodeName == 'LI' || this.textAreaSelection.commonAncestorContainer.parentNode.nodeName == 'UL') {
        document.execCommand('insertUnorderedList', false, null);
      } else if (val == 'h4' || val == 'h2' || val == 'h3') {
        // var text = t.textAreaSelection.toString()
        var parentNode = this.textAreaSelection.commonAncestorContainer.parentNode;

        if (parentNode.nodeName != 'DIV') {
          var toDeleteNode = parentNode;
        }
      }
    }

    document.execCommand(cmd, false, val);
    parentNode.innerHTML = parentNode.innerHTML.replace('<' + parentNode.nodeName.toLowerCase + '>', '');
    parentNode.innerHTML = parentNode.innerHTML.replace('</' + parentNode.nodeName.toLowerCase + '>', '');
    this.saveToTextarea();
  },
  saveToTextarea: function saveToTextarea() {
    var value = this.doc.innerHTML;
    value = value.split('<b>').join('<strong>');
    value = value.split('</b>').join('</strong>');
    value = value.split('<i>').join('<em>');
    value = value.split('</i>').join('</em>');
    value = value.split('><').join('>\n<');
    this.textarea.value = value;
  },
  insertSeeMore: function insertSeeMore() {
    this.restoreSelection();
    var hr = '<hr class="resumeBis">';
    this.execCmdWithVal('insertHTML', hr);

    if (this.doc.innerHTML.match('<hr class="resume">') != null) {
      this.doc.innerHTML = this.doc.innerHTML.replace('<hr class="resume">', '');
    }

    this.doc.innerHTML = this.doc.innerHTML.replace('<hr class="resumeBis">', '<hr class="resume">');
    this.saveToTextarea();
  },
  switchToHtml: function switchToHtml() {
    var d = this.doc;
    var t = this.textarea;
    var c = this.container;

    if (this.seeHTML) {
      t.style.display = 'none';
      d.innerHTML = t.value;
      d.style.display = 'block';
      c.className = c.className.replace(' codeView', '');
      this.seeHTML = false;
    } else {
      var style = window.getComputedStyle(d, null);
      t.style.width = style.width;
      t.style.height = style.height;
      t.style.display = 'block';
      d.style.display = 'none';
      c.className += ' codeView';
      this.seeHTML = true;
    }
  },
  createLink: function createLink() {
    var t = this;
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', function (e) {
      if (e.target == this) {
        this.remove();
      }
    });
    var titl = document.createElement('p');
    var titlVal = document.createTextNode('Selectionnez une couleur :');
    var linkCreator = document.createElement('div');
    linkCreator.className = 'editorPopup';
    var form = document.createElement('div');
    form.className = 'linkOptionsEditor';
    /* TEXTE DU LIEN */

    var text = document.createElement('input');
    text.type = 'text';
    text.value = t.textAreaSelection.toString();
    text.placeholder = 'texte du lien';
    /* URL DU LIEN */

    var url = document.createElement('input');
    url.type = 'text';
    url.placeholder = 'URL du lien';
    /* TYPE DE LIEN */

    var type = document.createElement('select');
    var opts = [['url', ''], ['téléphone', 'tel:'], ['mail', 'mailto:']];

    for (var nb = 0; nb < opts.length; nb++) {
      var option = document.createElement('option');
      option.value = opts[nb][1];
      option.innerHTML = opts[nb][0];
      type.appendChild(option);
    }
    /* TARGET BLANK */


    var blank = document.createElement('input');
    blank.type = 'checkbox';
    blank.id = 'targetBlankEditor';
    var blankLabel = document.createElement('label');
    blankLabel.innerHTML = 'Ouvrir sur une nouvelle page.';
    blankLabel.htmlFor = 'targetBlankEditor';
    /* VALIDER */

    var button = document.createElement('span');
    button.className = 'validLink';
    button.innerHTML = 'Valider';
    button.addEventListener('click', function () {
      var textLien = text.value;
      var urlLien = url.value;
      var typeLien = type.value;
      var isBlank = blank.checked ? 'target="_blank"' : '';
      var a = '<a rel="noreferrer" href="' + typeLien + urlLien + '" ' + isBlank + '>' + String(textLien) + '</a>';
      t.execCmdWithVal('insertHTML', a);
      this.parentElement.parentElement.remove();
    });
    linkCreator.appendChild(text);
    linkCreator.appendChild(url);
    linkCreator.appendChild(type);
    linkCreator.appendChild(blank);
    linkCreator.appendChild(blankLabel);
    linkCreator.appendChild(button);
    overlay.appendChild(linkCreator);
    document.body.appendChild(overlay);
  },
  chooseColor: function chooseColor() {
    var t = this;
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', function (e) {
      if (e.target == this) {
        this.remove();
      }
    });
    var titl = document.createElement('p');
    var titlVal = document.createTextNode('Selectionnez une couleur :');
    var colors = document.createElement('div');
    colors.className = 'editorPopup';
    titl.appendChild(titlVal);
    colors.appendChild(titl);

    for (var i = 0; i < t.colors.length; i++) {
      var c = t.colors[i];
      var selector = document.createElement('span');
      selector.setAttribute('data-color', c);
      selector.style.backgroundColor = c;
      selector.className = 'colorPickerElement';
      selector.addEventListener('mousedown', function (e) {
        e.preventDefault();
        t.saveSelection();
        t.execCmdWithVal('foreColor', this.getAttribute('data-color'));
        overlay.remove();
      });
      colors.appendChild(selector);
    }

    overlay.appendChild(colors);
    var customizer = document.createElement('div');
    customizer.className = 'customColor';
    var customizerInput = document.createElement('input');
    customizerInput.type = 'text';
    customizerInput.value = '000000';
    customizerInput.addEventListener('keyup', function () {
      this.value.replace(/#/gi, '');

      if (this.value.length >= 3 && this.value.length <= 6) {
        this.nextElementSibling.style.backgroundColor = '#' + this.value;
        this.nextElementSibling.setAttribute('data-color', '#' + this.value);
      }
    });
    var customizerPreview = document.createElement('span');
    customizerPreview.className = 'colorPickerElement';
    customizerPreview.setAttribute('data-color', '#000000');
    customizerPreview.style.backgroundColor = '#000000';
    customizerPreview.addEventListener('click', function (e) {
      t.execCmdWithVal('foreColor', this.getAttribute('data-color'));
      overlay.remove();
    });
    customizer.appendChild(customizerInput);
    customizer.appendChild(customizerPreview);
    colors.appendChild(customizer);
    document.body.appendChild(overlay);
  },
  addColor: function addColor(colors) {
    this.colors = this.colors.concat(colors);
  }
};
document.addEventListener('DOMContentLoaded', function () {
  var editors = new YSeditor('.YSeditor');
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Christine\A projets\grouille_laravel\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\Christine\A projets\grouille_laravel\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });