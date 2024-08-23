---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
aliases:
  - "/docs/utilities/borders/"
toc: true
---

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

Add borders to custom elements:

{{< example class="bd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### Subtractive

Or remove borders:

{{< example class="bd-example-border-utils" >}}
<span class="border border-none"></span>
<span class="border border-top-none"></span>
<span class="border border-end-none"></span>
<span class="border border-bottom-none"></span>
<span class="border border-start-none"></span>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< example class="bd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
{{< /example >}}

{{< /bootstrap-compatibility >}}

<!-- ## Color

{{< callout info >}}
Border utilities like `.border-*` that generated from our original `$theme-colors` Sass map don't yet respond to color modes, however, any `.border-*-subtle` utility will. This will be resolved in v6.
{{< /callout >}}

Change the border color using utilities built on our theme colors.

{{< example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-black"></span>
<span class="border border-white"></span>
{{< /example >}}

{{< callout info >}}
For each `.border-*` there is a matching `.border-*-subtle` utility. In Boosted, they have exactly the same value so we decided not to display them in the example above so that you don't hesitate on which class to use.

Here is a list of these extra classes:
{{< border-subtle.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
- `.border-{{ .name }}-subtle`
{{- end -}}
{{< /border-subtle.inline >}}
{{< /callout >}}

Or modify the default `border-color` of a component:

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These border color variants are just **examples illustrating the use of this color utility**. They should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0">
  Changing border color and width
</div>
{{< /example >}}
</details>-->

## Opacity

{{< callout danger >}}
Within **OUDS Web context**, you **should not** be using any opacity effect on borders inside your interfaces.<!-- If you need to make a border disappear, please make sure to use the [`.border-transparent` utility](#color).-->
{{< /callout >}}

<!--OUDS Web `border-{color}` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.border-success` utility.

```css
.border-success {
  -bs-border-opacity: 1;
  border-color: rgba(var(-bs-success-rgb), var(-bs-border-opacity)) !important;
}
```

We use an RGB version of our `-bs-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `-bs-border-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.border-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.border-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.-->

<!--### Example

To change that opacity, override `-bs-border-opacity` via custom styles or inline styles.

{{< example >}}
<div class="border border-success p-2">This is default success border</div>
{{< /example >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These border color variants **with opacity** should not be used because they do not respect the Orange Design System specifications.
{{< /design-callout-alert >}}

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="-bs-border-opacity: .5;">This is 50% opacity success border</div>
{{< /example >}}

Or, choose from any of the `.border-opacity` utilities:

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
{{< /example >}}
</details>-->

## Width

{{< example class="bd-example-border-utils" >}}
<span class="border border-default"></span>
<span class="border border-none"></span>
<span class="border border-thin"></span>
<span class="border border-thick"></span>
<span class="border border-thicker"></span>
<span class="border border-thickest"></span>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< example class="bd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
{{< /example >}}

{{< /bootstrap-compatibility >}}

## Radius

Add classes to an element to easily round its corners.

{{< example >}}
{{< placeholder width="75" height="75" class="rounded-tall" title="Example rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-top-tall" title="Example top rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-end-tall" title="Example right rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-tall" title="Example bottom rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-start-tall" title="Example left rounded image" color="#999" >}}
{{< /example >}}

### Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes are `none`, `short`, `medium`, `tall`, `circle` and `pill`, and can be configured by modifying the utilities API.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example default rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-none" title="Example non-rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-short" title="Example short rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-medium" title="Example medium rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-tall" title="Example tall rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" color="#999" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" color="#999" >}}
{{< /example >}}

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-short" title="Example small rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-start-medium" title="Example default left rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-tall rounded-top-none" title="Example extra large bottom rounded image" color="#999" >}}
{{< /example >}}

{{< bootstrap-compatibility >}}

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `5`, and can be configured by modifying the utilities API.

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-4" title="Example larger rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-5" title="Example extra large rounded image" color="#999" >}}
{{< /example >}}

{{< example class="bd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-1" title="Example small rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-start-2" title="Example default left rounded image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" color="#999" >}}
{{< placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="Example extra large bottom rounded image" color="#999" >}}
{{< /example >}}

{{< /bootstrap-compatibility >}}

<!--## Dividers

{{< example >}}
<div class="border-top border-light my-3"></div>
<div class="border-top border-light border-1 my-3"></div>
<div class="border-top border-dark my-3"></div>
<div class="border-top border-dark border-1 my-3"></div>
<div class="border-top my-3"></div>
<hr class="text-light">
<hr class="text-body-secondary">
<hr>
{{< /example >}}-->

## Drag and drop

Use the `.border-drag` utility to apply the border style for a drop zone.

{{< callout danger >}}
This utility must not be used in any other context than drag and drop.
{{< /callout >}}

{{< example class="bd-example-border-utils" >}}
<span class="border border-drag"></span>
{{< /example >}}

## CSS

<!--### Variables

{{< bootstrap-compatibility false >}}

{ {< scss-docs name="root-border-var" file="scss/_root.scss" >}}

{{< /bootstrap-compatibility >}}-->

### Sass tokens

#### Raw tokens

Border raw tokens<!-- generated via StyleDictionary--> as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-border" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Border semantic tokens as Sass maps and variables. Border utilities are declared via Sass maps and then generated with our utilities API.

{{< scss-docs name="ouds-sem-border" file="scss/tokens/_semantic.scss" >}}

### Sass variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

<!--Variables for setting `border-color` in `.border-{direction}-subtle` utilities in light and dark mode:

{{< scss-docs name="theme-border-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass maps

Color mode adaptive border colors are also available as a Sass map:

{{< scss-docs name="theme-border-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-map" file="scss/_maps.scss" >}}-->

### Sass mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Sass utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-borders-ouds" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}