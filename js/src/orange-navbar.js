/**
 * --------------------------------------------------------------------------
 * Boosted orange-navbar.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { defineJQueryPlugin } from './util/index.js'

/**
 * Constants
 */

const NAME = 'orangenavbar'
const DATA_KEY = 'bs.orangenavbar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_SCROLL_DATA_API = `scroll${EVENT_KEY}${DATA_API_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const SELECTOR_STICKY_TOP = 'header.sticky-top'

/**
 * Class definition
 */

class OrangeNavbar extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Static
  static enableMinimizing(el) {
    // The minimized behavior works only if your header has .sticky-top (fixed-top will be sticky without minimizing)
    if (window.scrollY > 0) {
      el.classList.add('header-minimized')
    } else {
      el.classList.remove('header-minimized')
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = OrangeNavbar.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * Data API implementation
 */

let timer = null

EventHandler.on(window, EVENT_SCROLL_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      OrangeNavbar.enableMinimizing(el)
    }, 50)
  }
})

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
    OrangeNavbar.enableMinimizing(el)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(OrangeNavbar)

export default OrangeNavbar
