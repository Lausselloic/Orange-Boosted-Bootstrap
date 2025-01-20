---
layout: docs
title: Display property
description: Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
group: utilities
aliases:
  - "/docs/utilities/display/"
toc: true
---

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all [breakpoints]({{< docsref "/layout/breakpoints" >}}), from `2xs` to `3xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `2xs`
- `.d-{breakpoint}-{value}` for `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.

Where *value* is one of:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `inline-grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

The display values can be altered by changing the `display` values defined in `$utilities` and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint *or larger*. For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, `2xl`, and `3xl` screens.

## Examples

{{< example >}}
<div class="d-inline p-short text-bg-brand-primary">d-inline</div>
<div class="d-inline p-short text-bg-always-black">d-inline</div>
{{< /example >}}

{{< example >}}
<span class="d-block p-short text-bg-brand-primary">d-block</span>
<span class="d-block p-short text-bg-always-black">d-block</span>
{{< /example >}}

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{xs,sm,md,lg,xl,2xl,3xl}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-xl-none .d-2xl-none` will hide the element for all screen sizes except on medium and large devices.

{{< bs-table >}}
| Screen size | Class |
| --- | --- |
| Hidden on all | `.d-none` |
| Visible on all | `.d-block` |
| Hidden only on 2xs | `.d-none .d-xs-block` |
| Hidden only on xs | `.d-xs-none .d-sm-block` |
| Hidden only on sm | `.d-sm-none .d-md-block` |
| Hidden only on md | `.d-md-none .d-lg-block` |
| Hidden only on lg | `.d-lg-none .d-xl-block` |
| Hidden only on xl | `.d-xl-none .d-2xl-block` |
| Hidden only on 2xl | `.d-2xl-none .d-3xl-block` |
| Hidden only on 3xl | `.d-3xl-none` |
| Visible only on 2xs | `.d-block .d-xs-none` |
| Visible only on xs | `.d-none .d-xs-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block .d-2xl-none` |
| Visible only on 2xl | `.d-none .d-2xl-block .d-3xl-none` |
| Visible only on 3xl | `.d-none .d-3xl-block` |
{{< /bs-table >}}

{{< example >}}
<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
{{< /example >}}

## Display in print

Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-inline-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

{{< example >}}
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
{{< /example >}}

## CSS

### Sass utilities API

Display utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-display" file="scss/_utilities.scss" >}}
