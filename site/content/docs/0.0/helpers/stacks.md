---
layout: docs
title: Stacks
description: Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
group: helpers
aliases:
  - "/docs/helpers/stacks/"
toc: true
---

Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in OUDS Web. All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

{{< callout warning >}}
**Heads up!** Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues. [Read more](https://caniuse.com/flexbox-gap).
{{< /callout >}}

## Vertical

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

{{< example class="bd-example-flex" >}}
<div class="vstack gap-tall">
  <div class="p-short">First item</div>
  <div class="p-short">Second item</div>
  <div class="p-short">Third item</div>
</div>
{{< /example >}}

## Horizontal

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

{{< example class="bd-example-flex" >}}
<div class="hstack gap-tall">
  <div class="p-short">First item</div>
  <div class="p-short">Second item</div>
  <div class="p-short">Third item</div>
</div>
{{< /example >}}

Using horizontal margin utilities like `.ms-auto` as spacers:

{{< example class="bd-example-flex" >}}
<div class="hstack gap-tall">
  <div class="p-short">First item</div>
  <div class="p-short ms-auto">Second item</div>
  <div class="p-short">Third item</div>
</div>
{{< /example >}}

<!--And with [vertical rules]({{< docsref "/helpers/vertical-rule" >}}):

{{< example class="bd-example-flex" >}}
<div class="hstack gap-tall">
  <div class="p-short">First item</div>
  <div class="p-short ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-short">Third item</div>
</div>
{{< /example >}}-->

<!--## Examples

Use `.vstack` to stack buttons and other elements:

{{< example >}}
<div class="vstack gap-short col-md-5 mx-auto">
  <button type="button" class="btn btn-strong">Save changes</button>
  <button type="button" class="btn btn-default">Cancel</button>
</div>
{{< /example >}}

Create an inline form with `.hstack`:

<details>
<summary>See Bootstrap examples that are incompatible with Orange Unified Design System.</summary>
<br>
{{< design-callout-alert >}}
This variant with an **horizontal layout** (i.e. labels not above the input fields) should not be used because it does not respect the Orange Unified Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="hstack gap-tall">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-strong">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-default">Reset</button>
</div>
{{< /example >}}
</details>-->

## CSS

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}
