---
layout: docs
title: Opacity
description: Control the opacity of elements.
group: utilities
aliases:
  - "/docs/utilities/opacity/"
toc: true
---

The `opacity` property sets the opacity level for an element. The opacity level describes the semantic transparency level, where `opaque` is not transparent at all, `emphasis` to `weaker` are various levels of transparency, and `transparent` is completely transparent.

Set the opacity of an element using `.opacity-{value}` utilities.

<div class="bd-example d-sm-flex">
  <div class="opacity-opaque p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-strong p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-medium p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-weak p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-weaker p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-invisible p-tall m-short bg-brand-primary fw-bold"></div>
</div>

```html
<div class="opacity-opaque">...</div>
<div class="opacity-strong">...</div>
<div class="opacity-medium">...</div>
<div class="opacity-weak">...</div>
<div class="opacity-weaker">...</div>
<div class="opacity-invisible">...</div>
```

{{< bootstrap-compatibility >}}
The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

<!--
  OUDS mod:
  - Removed .text-light and .rounded classes
  - Removed div text content to avoid a11y issue with semi-transparent text
-->
<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-75 p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-50 p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-25 p-tall m-short bg-brand-primary fw-bold"></div>
  <div class="opacity-0 p-tall m-short bg-brand-primary fw-bold"></div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>
```
{{< /bootstrap-compatibility >}}

## CSS

### Sass tokens

#### Raw tokens

Opacity raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-opacity" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Opacity semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-opacity" file="scss/tokens/_semantic.scss" >}}

### Sass maps

The opacity utilities are declared through this map and generated using our utilities API.

{{< scss-docs name="ouds-maps-opacities" file="scss/_maps.scss" >}}

### Sass utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-opacity-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}
