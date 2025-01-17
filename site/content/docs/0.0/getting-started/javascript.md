---
layout: docs
title: JavaScript
description: Bring OUDS Web to life with our optional JavaScript plugins. Learn about each plugin, our data and programmatic API options, and more.
group: getting-started
aliases:
  - "/docs/getting-started/javascript/"
toc: true
---

## Individual or compiled

Plugins can be included individually (using OUDS Web's individual `js/dist/*.js`), or all at once using `ouds-web.js` or the minified `ouds-web.min.js` (don't include both).

If you use a bundler (Webpack, Parcel, Vite...), you can use `/js/dist/*.js` files which are UMD ready.

## Usage with JavaScript frameworks

While the OUDS Web CSS can be used with any framework, **the OUDS Web JavaScript is not fully compatible with JavaScript frameworks like React, Vue, and Angular** which assume full knowledge of the DOM. Both OUDS Web and the framework may attempt to mutate the same DOM element, resulting in bugs like dropdowns that are stuck in the "open" position.

A better alternative for those using this type of frameworks is to use a framework-specific package **instead of** the OUDS Web JavaScript. Here are some of the most popular options:

- React: [React Bootstrap](https://react-bootstrap.github.io/)
  {{< callout >}}
  **Try it yourself!** Download the source code and working demo for using Bootstrap with React, Next.js, and React Bootstrap from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/react-nextjs). You can also [open the example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx).
  {{< /callout >}}
- Vue 3: [BootstrapVueNext](https://bootstrap-vue-next.github.io/bootstrap-vue-next/) (Bootstrap 5, currently in alpha)
- Angular: [ng-bootstrap](https://ng-bootstrap.github.io/)

## Using OUDS Web as a module

{{< callout >}}
**Try it yourself!** Download the source code and working demo for using Bootstrap as an ES module from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/sass-js-esm). You can also [open the example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html).
{{< /callout >}}

{{< callout warning >}}
**To set up a functional OUDS Web demo based on the Bootstrap templates**, follow these steps to replace all `bootstrap` references:
* Change `bootstrap` to `ouds-web` in `scss/style.scss`.
* Replace `bootstrap` with `@ouds/web` in `package.json`, and within `import` statements in `index.html` for the CDN URL.
* Update JavaScript objects from `bootstrap` to `oudsWeb`.
{{< /callout >}}

We provide a version of OUDS Web built as `ESM` (`ouds-web.esm.js` and `ouds-web.esm.min.js`) which allows you to use OUDS Web as a module in the browser, if your [targeted browsers support it](https://caniuse.com/es6-module).

<!-- eslint-skip -->
```html
<script type="module">
  import { Toast } from 'ouds-web.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

Compared to JS bundlers, using ESM in the browser requires you to use the full path and filename instead of the module name. [Read more about JS modules in the browser.](https://v8.dev/features/modules#specifiers) That's why we use `'ouds-web.esm.min.js'` instead of `'ouds-web'` above. However, this is further complicated by our Popper dependency, which imports Popper into our JavaScript like so:

<!-- eslint-skip -->
```js
import * as Popper from "@popperjs/core"
```

If you try this as-is, you'll see an error in the console like the following:

```text
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```

To fix this, you can use an `importmap` to resolve the arbitrary module names to complete paths. If your [targeted browsers](https://caniuse.com/?search=importmap) do not support `importmap`, you'll need to use the [es-module-shims](https://github.com/guybedford/es-module-shims) project. Here's how it works for OUDS Web and Popper:

<!-- eslint-skip -->
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
    <title>Hello, modularity!</title>
  </head>
  <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn btn-primary btn-lg" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Custom popover</button>

    <script async src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js" crossorigin="anonymous"></script>
    <script type="importmap">
    {
      "imports": {
        "@popperjs/core": "{{< param "cdn.popper_esm" >}}",
        "@ouds/web": "https://cdn.jsdelivr.net/npm/@ouds/web@{{< param "current_version" >}}/dist/js/ouds-web.esm.min.js"
      }
    }
    </script>
    <script type="module">
      import * as oudsWeb from '@ouds/web'

      new oudsWeb.Popover(document.getElementById('popoverButton'))
    </script>
  </body>
</html>
```

## Dependencies

Some plugins and CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs.

Our dropdowns, popovers, and tooltips also depend on [Popper](https://popper.js.org/docs/v2/).

## Data attributes

Nearly all OUDS Web plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button.)

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

## Selectors

We use the native `querySelector` and `querySelectorAll` methods to query DOM elements for performance reasons, so you must use [valid selectors](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier). If you use special selectors like `collapse:Example`, be sure to escape them.

## Events

OUDS Web provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts. Returning false from an event handler will also automatically call `preventDefault()`.

```js
const myModal = document.querySelector('#myModal')

myModal.addEventListener('show.bs.modal', event => {
  return event.preventDefault() // stops modal from being shown
})
```

## Programmatic API

All constructors accept an optional options object or nothing (which initiates a plugin with its default behavior):

```js
const myModalEl = document.querySelector('#myModal')
const modal = new oudsWeb.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new oudsWeb.Modal(myModalEl, configObject) // initialized with no keyboard
```

If you'd like to get a particular plugin instance, each plugin exposes a `getInstance` method. For example, to retrieve an instance directly from an element:

```js
oudsWeb.Popover.getInstance(myPopoverEl)
```

This method will return `null` if an instance is not initiated over the requested element.

Alternatively, `getOrCreateInstance` can be used to get the instance associated with a DOM element, or create a new one in case it wasn't initialized.

```js
oudsWeb.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

In case an instance wasn't initialized, it may accept and use an optional configuration object as second argument.

### CSS selectors in constructors

In addition to the `getInstance` and `getOrCreateInstance` methods, all plugin constructors can accept a DOM element or a valid [CSS selector](#selectors) as the first argument. Plugin elements are found with the `querySelector` method since our plugins only support a single element.

```js
const modal = new oudsWeb.Modal('#myModal')
const dropdown = new oudsWeb.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = oudsWeb.Offcanvas.getInstance('#myOffcanvas')
const alert = oudsWeb.Alert.getOrCreateInstance('#myAlert')
```

### Asynchronous functions and transitions

All programmatic API methods are **asynchronous** and return to the caller once the transition is started, but **before it ends**. In order to execute an action once the transition is complete, you can listen to the corresponding event.

```js
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Action to execute once the collapsible area is expanded
})
```

In addition, a method call on a **transitioning component will be ignored**.

```js
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = oudsWeb.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

#### `dispose` method

While it may seem correct to use the `dispose` method immediately after `hide()`, it will lead to incorrect results. Here's an example of the problem use:

```js
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})
```

### Default settings

You can change the default settings for a plugin by modifying the plugin's `Constructor.Default` object:

```js
// changes default for the modal plugin's `keyboard` option to false
oudsWeb.Modal.Default.keyboard = false
```

## Methods and properties

Every OUDS Web plugin exposes the following methods and static properties.

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
{{< /bs-table >}}

{{< bs-table "table" >}}
| Static property | Description |
| --- | --- |
| `NAME` | Returns the plugin name. (Example: `oudsWeb.Tooltip.NAME`) |
| `VERSION` | The version of each of OUDS Web's plugins can be accessed via the `VERSION` property of the plugin's constructor (Example: `oudsWeb.Tooltip.VERSION`) |
{{< /bs-table >}}

## Sanitizer

Tooltips and Popovers use our built-in sanitizer to sanitize options which accept HTML.

The default `allowList` value is the following:

{{< js-docs name="allow-list" file="js/src/util/sanitizer.js" >}}

If you want to add new values to this default `allowList` you can do the following:

```js
const myDefaultAllowList = oudsWeb.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

If you want to bypass our sanitizer because you prefer to use a dedicated library, for example [DOMPurify](https://www.npmjs.com/package/dompurify), you should do the following:

```js
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new oudsWeb.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
```

## Optionally using jQuery

**You don't need jQuery in OUDS Web**, but it's still possible to use our components with jQuery. If OUDS Web detects `jQuery` in the `window` object, it'll add all of our components in jQuery's plugin system. This allows you to do the following:

```js
// to enable tooltips with the default configuration
$('[data-bs-toggle="tooltip"]').tooltip()

// to initialize tooltips with given configuration
$('[data-bs-toggle="tooltip"]').tooltip({
  boundary: 'clippingParents',
  customClass: 'myClass'
})

// to trigger the `show` method
$('#myTooltip').tooltip('show')
```

The same goes for our other components.

### No conflict

Sometimes it is necessary to use OUDS Web plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call `.noConflict` on the plugin you wish to revert the value of.

```js
const oudsWebButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.oudsWebBtn = oudsWebButton // give $().oudsWebBtn the OUDS Web functionality
```

OUDS Web does not officially support third-party JavaScript libraries like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own.

### jQuery events

OUDS Web will detect jQuery if `jQuery` is present in the `window` object and there is no `data-bs-no-jquery` attribute set on `<body>`. If jQuery is found, OUDS Web will emit events thanks to jQuery's event system. So if you want to listen to OUDS Web's events, you'll have to use the jQuery methods (`.on`, `.one`) instead of `addEventListener`.

```js
$('#myTab a').on('shown.bs.tab', () => {
  // do something...
})
```

## Disabled JavaScript

OUDS Web's plugins have no special fallback when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.
