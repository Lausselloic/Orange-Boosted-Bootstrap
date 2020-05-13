/*!
  * Boosted v4.5.0 (https://boosted.orange.com)
  * Copyright 2014-2020 The Boosted Authors
  * Copyright 2014-2020 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap navbar.js v4.5.0 (https://boosted.orange.com)
  * Copyright 2011-2020 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Navbar = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Util = Util && Object.prototype.hasOwnProperty.call(Util, 'default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'navbar';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.navbar';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var BREAKPOINT = 768;
  var Default = {
    sticky: false,
    trigger: ''
  };
  var DefaultType = {
    sticky: 'boolean',
    trigger: 'string'
  };
  var SELECTOR_SUPRA_BAR = '.navbar.supra';
  var SELECTOR_MEGAMENU_PANEL = '.mega-menu.panel';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Navbar = /*#__PURE__*/function () {
    function Navbar(element, config) {
      var _this = this;

      this._element = element;
      this._supraBar = element.querySelector(SELECTOR_SUPRA_BAR);
      this._config = this._getConfig(config);
      this._initialHeight = $(this._element).outerHeight();
      this._initialSupraHeight = $(this._supraBar).outerHeight();

      this._addAria();

      if (this._config.sticky) {
        $(this._element).addClass('fixed-top');
        $(SELECTOR_MEGAMENU_PANEL).addClass('sticky');
        $(document.body).css('padding-top', this._initialHeight);
        $(window).on('scroll', function () {
          var Scroll = $(window).scrollTop();

          if (Scroll > 0) {
            $(_this._element).addClass('minimized');
          } else {
            $(_this._element).removeClass('minimized');
          }
        });
      }

      if (this._config.hideSupra) {
        $(window).on('scroll', function () {
          if ($(window).innerWidth() < BREAKPOINT) {
            return;
          }

          var Scroll = $(window).scrollTop();

          if (Scroll > 0) {
            $(SELECTOR_SUPRA_BAR).hide();
          } else {
            $(SELECTOR_SUPRA_BAR).show();
          }
        });
      }
    } // getters


    var _proto = Navbar.prototype;

    // private
    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addAria = function _addAria() {
      $(this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true);
    } // static
    ;

    Navbar._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $(this).data()), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Navbar(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Navbar, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Navbar;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Navbar._jQueryInterface;
  $.fn[NAME].Constructor = Navbar;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Navbar._jQueryInterface;
  };

  return Navbar;

})));
//# sourceMappingURL=navbar.js.map
