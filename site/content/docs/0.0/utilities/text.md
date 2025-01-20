---
layout: docs
title: Text
description: Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
group: utilities
aliases:
  - "/docs/utilities/text/"
toc: true
---

## Text alignment

Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{{< callout info >}}
We recommend to avoid using center and end alignment but in very specific cases. However, please note that you may use `.ms-{breakpoint}-auto` (respectively `.mx-{breakpoint}-auto`) in addition of `.text-{breakpoint}-end` (respectively `.text-{breakpoint}-center`) in these cases.
{{< /callout >}}

{{< example >}}
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center mx-auto">Center aligned text on all viewport sizes.</p>
<p class="text-end ms-auto">End aligned text on all viewport sizes.</p>

<p class="text-xs-end ms-xs-auto">End aligned text on viewports sized XS (x-small) or wider.</p>
<p class="text-sm-end ms-sm-auto">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end ms-md-auto">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end ms-lg-auto">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end ms-xl-auto">End aligned text on viewports sized XL (x-large) or wider.</p>
<p class="text-2xl-end ms-2xl-auto">End aligned text on viewports sized 2XL (2x-large) or wider.</p>
<p class="text-3xl-end ms-3xl-auto">End aligned text on viewports sized 3XL (3x-large) or wider.</p>
{{< /example >}}

{{< callout info >}}
Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.
{{< /callout >}}

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

{{< example >}}
<div class="badge text-bg-brand-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{{< /example >}}

Prevent text from wrapping with a `.text-nowrap` class.

{{< example >}}
<div class="text-nowrap bg-secondary border" style="width: 8rem;">
  This text should overflow the parent.
</div>
{{< /example >}}

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

{{< example >}}
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{{< /example >}}

{{< callout warning >}}
Note that [breaking words isn't possible in Arabic](https://rtlstyling.com/posts/rtl-styling#3.-line-break), which is the most used RTL language. Therefore `.text-break` is removed from our RTL compiled CSS.
{{< /callout >}}

## Text transform

Transform text in components with our text capitalization classes: `text-lowercase`, `text-uppercase` or `text-capitalize`.

{{< example >}}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{{< /example >}}

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font size

Quickly change the `font-size` of text. Sizing for these utilities matches our predefined typography placeholders. Don't forget to add one of our [`font-weight`](#font-weight) utility when needed.

These classes change the `font-size` but also the `line-height`, the `letter-spacing` and the `max-width`. If you want to get rid of the `max-width`, please make sure to use our `.mw-none` [width utility]({{< docsref "/utilities/sizing" >}}).

<details class="mb-medium">
  <summary>See the <code>font-size</code> associated to classes</summary>

{{< bs-table >}}
| Font reference | Values for `xl` and upper | Values from `md` to `lg` | Values from `2xs` to `sm` |
| --- | --- | --- | --- |
| Display large (`.fs-dl`) | `4.5rem` (72px) | `4rem` (64px) | `2.5rem` (40px) |
| Display medium (`.fs-dm`) | `3.5rem` (56px) | `3rem` (48px) | `2.25rem` (36px) |
| Display small (`.fs-ds`) | `3rem` (48px) | `2.5rem` (40px) | `2rem` (32px) |
| Heading xlarge (`.fs-hxl`) | `2.5rem` (40px) | `2.25rem` (36px) | `1.75rem` (28px) |
| Heading large (`.fs-hl`) | `2rem` (32px) | `1.75rem` (28px) | `1.5rem` (24px) |
| Heading medium (`.fs-hm`) | `1.75rem` (28px) | `1.5rem` (24px) | `1.25rem` (20px) |
| Heading small (`.fs-hs`) | `1.5rem` (24px) | `1.25rem` (20px) | `1.125rem` (18px) |
| Body large (`.fs-bl`) | `1.125rem` (18px) | `1rem` (16px) | `1rem` (16px) |
| Body medium (`.fs-bm`) | `1rem` (16px) | `.875rem` (14px) | `.875rem` (14px) |
| Body small (`.fs-bs`) | `.875rem` (14px) | `.75rem` (12px) | `.75rem` (12px) |
| Code medium (`.fs-cm`) | `.875rem` (14px) | `.875rem` (14px) | `.875rem` (14px) |
| Code small (`.fs-cs`) | `.75rem` (12px) | `.75rem` (12px) | `.75rem` (12px) |
{{< /bs-table >}}

</details>

<details class="mb-medium">
  <summary>See more details about the <code>font-size</code> classes</summary>

{{< bs-table >}}
| Font reference | Values for `xl` and upper | Values from `md` to `lg` | Values from `2xs` to `sm` |
| --- | --- | --- | --- |
| Display large (`.fs-dl`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>4.5rem</b></li><li><code>line-height</code>: 1.1111</li><li><code>letter-spacing</code>: -0.0675rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>4rem</b></li><li><code>line-height</code>: 1.125</li><li><code>letter-spacing</code>: -0.06rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 55rem</li></ul> |
| Display medium (`.fs-dm`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3.5rem</b></li><li><code>line-height</code>: 1.1429</li><li><code>letter-spacing</code>: -0.04375rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3rem</b></li><li><code>line-height</code>: 1.1667</li><li><code>letter-spacing</code>: -0.0375rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.25rem</b></li><li><code>line-height</code>: 1.2222</li><li><code>letter-spacing</code>: -0.0225rem</li><li><code>max-width</code>: 55rem</li></ul> |
| Display small (`.fs-ds`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3rem</b></li><li><code>line-height</code>: 1.1667</li><li><code>letter-spacing</code>: -0.0375rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2rem</b></li><li><code>line-height</code>: 1.25</li><li><code>letter-spacing</code>: -0.02rem</li><li><code>max-width</code>: 55rem</li></ul> |
| Heading xlarge (`.fs-hxl`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.25rem</b></li><li><code>line-height</code>: 1.2222</li><li><code>letter-spacing</code>: -.0225rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 55rem</li></ul> |
| Heading large (`.fs-hl`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2rem</b></li><li><code>line-height</code>: 1.25</li><li><code>letter-spacing</code>: -0.02rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 55rem</li></ul> |
| Heading medium (`.fs-hm`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 65rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.25rem</b></li><li><code>line-height</code>: 1.4</li><li><code>letter-spacing</code>: 0</li><li><code>max-width</code>: 55rem</li></ul> |
| Heading small (`.fs-hs`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 45rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.25rem</b></li><li><code>line-height</code>: 1.4</li><li><code>letter-spacing</code>: 0</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> |
| Body large (`.fs-bl`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 45rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> |
| Body medium (`.fs-bm`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 45rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 40rem</li></ul> |
| Body small (`.fs-bs`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 45rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> |
| Code medium (`.fs-cm`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li></ul> |
| Code small (`.fs-cs`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>0.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li></ul> |
{{< /bs-table >}}

</details>

{{< example >}}
<p class="fs-dl">.fs-dl text</p>
<p class="fs-dm">.fs-dm text</p>
<p class="fs-ds">.fs-ds text</p>
<p class="fs-hxl">.fs-hxl text</p>
<p class="fs-hl">.fs-hl text</p>
<p class="fs-hm">.fs-hm text</p>
<p class="fs-hs">.fs-hs text</p>
<p class="fs-bl">.fs-bl text</p>
<p class="fs-bm">.fs-bm text</p>
<p class="fs-bs">.fs-bs text</p>
<p class="fs-cm font-monospace">.fs-cm.font-monospace text</p>
<p class="fs-cs font-monospace">.fs-cs.font-monospace text</p>
{{< /example >}}

Customize your available `font-size`s by modifying the `$ouds-font-sizes` Sass map.

You can easily add an icon with your font reference using [our icon helper]({{< docsref "/helpers/icon" >}}).

{{< bootstrap-compatibility >}}

Quickly change the `font-size` of text. While our heading classes (e.g., `.h1`–`.h6`) apply `font-size`, `font-weight`, and `line-height`, these utilities _only_ apply `font-size`. Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.

{{< example class="lh-1" >}}
<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
{{< /example >}}

Customize your available `font-size`s by modifying the `$font-sizes` Sass map.

{{< /bootstrap-compatibility >}}

## Font weight

Quickly change the `font-weight` of text with these utilities. `font-weight` utilities are abbreviated as `.fw-*`.

{{< example >}}
<p class="fw-bold">Bold text.</p>
<p class="fw-normal">Normal weight text.</p>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< example >}}
<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
{{< /example >}}

{{< /bootstrap-compatibility >}}

## Line height

Change the line height with `.lh-*` utilities. You need to enable Bootstrap compatibility to use these utilities since most of our font embed a proper line-height.

{{< bootstrap-compatibility >}}

{{< example >}}
<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
{{< /example >}}

{{< /bootstrap-compatibility >}}

## Monospace

Change a selection to our monospace font stack with `.font-monospace`.

{{< example >}}
<p class="font-monospace">This is in monospace</p>
{{< /example >}}

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

{{< example >}}
<p class="text-muted">
  Secondary body text with a <a href="#" class="text-reset">reset link</a>.
</p>
{{< /example >}}

## Text decoration

Decorate text in components with text decoration classes.

{{< example >}}
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="root-font-variables-ouds" file="scss/_root.scss" >}}

### Sass tokens

#### Raw tokens

Font raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-font" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Font semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-font" file="scss/tokens/_semantic.scss" >}}

#### Composite tokens

Font composite tokens are defined as Sass variables.

{{< scss-docs name="ouds-composite-font" file="scss/tokens/_composite.scss" >}}

### Sass variables

Default type and font related Sass variables:

{{< scss-docs name="font-variables" file="scss/_variables.scss" >}}

### Sass maps

Font-size utilities are generated from these maps, in combination with our utilities API.

{{< scss-docs name="ouds-maps-font" file="scss/_maps.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="font-sizes" file="scss/_variables.scss" >}}

<!--{{< scss-docs name="theme-text-map" file="scss/_maps.scss" >}}-->

{{< /bootstrap-compatibility >}}

### Sass mixins

We provide a dedicated mixin for font reference called `get-font-size($font-size-reference)`.

{{< scss-docs name="ouds-mixin-font" file="scss/mixins/_fonts.scss" >}}

Whenever you need a font reference inside a custom component or for whatever reason, please follow the same process as us, so you don't miss any information about a font reference.

{{< scss-docs name="ouds-font-implementation" file="scss/_reboot.scss" >}}


### Sass utilities API

Font and text utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-text-ouds" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-text" file="scss/_utilities.scss" >}}
