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

## Color

Change the border color using utilities. The color utilities are generated from our `$ouds-border-colors` Sass map.

{{< example class="bd-example-border-utils d-flex align-items-center flex-wrap" >}}
<span class="border border-brand-primary"></span>
<span class="border border-default"></span>
<span class="border border-emphasized"></span>
<div data-bs-theme="light" class="bg-brand-primary d-inline-flex m-shortest p-shorter"><span class="border border-on-brand-primary m-none bg-brand-primary"></span></div>
<div data-bs-theme="light" class="bg-always-white d-inline-flex m-shortest p-shorter"><span class="border border-always-black m-none bg-always-white"></span></div>
<div data-bs-theme="dark" class="bg-always-black d-inline-flex m-shortest p-shorter"><span class="border border-always-white m-none bg-always-black"></span></div>
<div data-bs-theme="dark" class="bg-always-black d-inline-flex m-shortest p-shorter"><span class="border border-always-on-black m-none bg-always-black"></span></div>
<div data-bs-theme="light" class="bg-always-white d-inline-flex m-shortest p-shorter"><span class="border border-always-on-white m-none bg-always-white"></span></div>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< callout info >}}
Border utilities like `.border-*` that generated from our original `$theme-colors` Sass map don't yet respond to color modes, however, any `.border-*-subtle` utility will. This will be resolved in v6.
{{< /callout >}}

{{< example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
<span class="border border-{{ .name }}-subtle"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-black"></span>
<span class="border border-white"></span>
{{< /example >}}

Or modify the default `border-color` of a component:

{{< example >}}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-brand-primary" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-emphasized">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-emphasized border-start-0 rounded-end">
  Changing border color and width
</div>
{{< /example >}}

{{< /bootstrap-compatibility >}}

<!--## Opacity-->

## Width

{{< example class="bd-example-border-utils" >}}
<span class="border border-none"></span>
<span class="border border-thin"></span>
<span class="border border-medium"></span>
<span class="border border-thick"></span>
<span class="border border-thicker"></span>
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

{{< callout info >}}
The `.rounded` class is mapped to the "default" border radius design token. In Orange brand, the value for this token is zero, explaining why the `.rounded` class does not apply any border radius here.
{{< /callout >}}

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

<!--## Dividers-->

## Drag and drop

Use the `.border-drag` utility to apply the border style for a drop zone.

{{< callout danger >}}
This utility must not be used in any other context than drag and drop.
{{< /callout >}}

{{< example class="bd-example-border-utils" >}}
<span class="border border-drag"></span>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="root-border-var-ouds" file="scss/_root.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="root-border-var" file="scss/_root.scss" >}}

{{< /bootstrap-compatibility >}}

### Sass tokens

#### Raw tokens

Border raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-border" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Border semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-border" file="scss/tokens/_semantic.scss" >}}

### Sass variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

<!-- TODO LM: Variables for setting `border-color` in `.border-{direction}-subtle` utilities in light and dark mode:

{{< scss-docs name="theme-border-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-variables" file="scss/_variables-dark.scss" >}}-->

### Sass maps

The border utilities are declared through this map and generated using our utilities API.

{{< scss-docs name="ouds-maps-borders" file="scss/_maps.scss" >}}

<!--Color mode adaptive border colors are also available as a Sass map:

{{< scss-docs name="theme-border-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-border-subtle-dark-map" file="scss/_maps.scss" >}}-->

### Sass mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Sass utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-border-ouds" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-borders-ouds" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}
