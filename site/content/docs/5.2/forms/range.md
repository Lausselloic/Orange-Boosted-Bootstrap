---
layout: docs
title: Range
description: Use our custom range inputs for consistent cross-browser styling and built-in customization.
group: forms
aliases:
  - "/docs/forms/range/"
toc: true
---

## Overview

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers.

{{< callout warning >}}
### Progressive enhancement

Only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress — so Edge, Chrome and Safari won’t show it, and [it's perfectly fine](https://alistapart.com/article/understandingprogressiveenhancement/).

However, if you really want to implement it, there's a way to do it with Javascript. Please see our [Javascript section](#via-javascript).
{{< /callout >}}

{{< example >}}
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
{{< /example >}}

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.

{{< example >}}
<label for="disabledRange" class="form-label is-disabled">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
{{< /example >}}

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{{< example >}}
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
{{< /example >}}

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

{{< example >}}
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
{{< /example >}}

## Via javascript

Range is not implemented with Javascript in Boosted. Here is a way to do so to have the same behavior on all browsers.

Build a range input with `min` and `max` attributes.

```html
<label for="jsRange" class="form-label">Example range</label>
<input type="range" class="form-range" id="jsRange" min="0" max="100">
```

The input backgrounds must be initialized in a different way.

```scss
.form-range::-webkit-slider-runnable-track {
  height: .375rem;
  background-image: linear-gradient(to right, #ff7900 0%, #ff7900 var(--value, 0%), #eee var(--value, 0%), #eee 100%);
}
```

Introduce event listeners on the input to make it dynamic.

```js
// Getting all the range inputs
const ranges = document.querySelectorAll('input[type=range]')

// Adding a listener to every input in order to have a dynamic progress
for (const range of ranges) {
  range.addEventListener('input', () => {
    const value = (range.value - range.min) / (range.max - range.min) * 100
    range.style.setProperty('--value', `${value}%`)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  for (const range of ranges) {
    const value = (range.value - range.min) / (range.max - range.min) * 100
    range.style.setProperty('--value', `${value}%`)
  }
})
```

## Sass

### Variables

{{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}}
