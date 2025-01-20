---
layout: docs
title: Background
description: Convey meaning through `background-color`.
group: utilities
aliases:
  - "/docs/utilities/background/"
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Background color

Background utilities like `.bg-*` are generated from our `$ouds-backgrounds` Sass map and respond to color modes.

Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities **do not set `color`**, so depending on the cases you'll want to use an additional:
* `[data-bs-theme]` [color mode attribute]({{< docsref "/customize/color-modes#how-to-use" >}}) is the best option all the time and moreover when the element using a background utility contains complex sub-elements such as components that need to respond to color modes
* `.text-*` [color utilities]({{< docsref "/utilities/colors" >}}) when the background color and color couple are accessible together in light and dark mode, and there is no components inside
* `.text-bg-*` [color & background helper]({{< docsref "/helpers/color-background" >}}) from our background colors and if there is no components inside

{{< bootstrap-compatibility >}}

Here are the equivalent Bootstrap background that you shouldn't be using. Prefer using the classes above according to [our design system]({{< param ouds.web >}}).

<!-- TODO LM: Check whenever the mapping with Bootstrap is done -->
{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }}{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }}">.bg-{{ .name }}</div>
<div class="p-3 mb-2 bg-{{ .name }}-subtle text-{{ .name }}-emphasis">.bg-{{ .name }}-subtle</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
<div class="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
<div class="p-3 mb-2 bg-body text-body">.bg-body</div>
<div class="p-3 mb-2 bg-black text-white">.bg-black</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
{{< /example >}}

{{< /bootstrap-compatibility >}}

### `data-bs-theme` attribute

Here are the nominal cases you should be using, when there is no other theme interferences than the root one, using `data-bs-theme` attribute:

{{< callout info >}}
Please note that we use `[data-bs-theme]` attribute on a child element to avoid interfering with the parent theme. This is a workaround to avoid switching the colors between light and dark modes and keep having the good ones displayed.
{{< /callout >}}

{{< example >}}
<p class="bg-primary p-tall fw-bold">.bg-primary</p>
<p class="bg-secondary p-tall fw-bold">.bg-secondary</p>
<p class="bg-tertiary p-tall fw-bold">.bg-tertiary</p>
<p class="bg-emphasized p-tall fw-bold"><span data-bs-theme="dark">.bg-emphasized</span></p>
<p class="bg-brand-primary p-tall fw-bold"><span data-bs-theme="light">.bg-brand-primary</span></p>
<p class="bg-status-neutral-emphasized p-tall fw-bold"><span data-bs-theme="root-inverted">.bg-status-neutral-emphasized</span></p>
<p class="bg-status-neutral-muted p-tall fw-bold">.bg-status-neutral-muted</p>
<p class="bg-status-accent-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-accent-emphasized</span></p>
<p class="bg-status-accent-muted p-tall fw-bold">.bg-status-accent-muted</p>
<p class="bg-status-positive-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-positive-emphasized</span></p>
<p class="bg-status-positive-muted p-tall fw-bold">.bg-status-positive-muted</p>
<p class="bg-status-negative-emphasized p-tall fw-bold"><span data-bs-theme="root-inverted">.bg-status-negative-emphasized</span></p>
<p class="bg-status-negative-muted p-tall fw-bold">.bg-status-negative-muted</p>
<p class="bg-status-warning-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-warning-emphasized</span></p>
<p class="bg-status-warning-muted p-tall fw-bold">.bg-status-warning-muted</p>
<p class="bg-status-info-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-info-emphasized</span></p>
<p class="bg-status-info-muted p-tall fw-bold">.bg-status-info-muted</p>
<p class="bg-always-black p-tall fw-bold"><span data-bs-theme="dark">.bg-always-black</span></p>
<p class="bg-always-white p-tall fw-bold"><span data-bs-theme="light">.bg-always-white</span></p>
<p class="bg-transparent p-tall fw-bold">.bg-transparent</p>
{{< /example >}}

#### Inside a static theme

Here is a more complex example to understand how to use `[data-bs-theme]` in specific static contexts. In here you should only use the inverse static theme by replacing all `data-bs-theme="root-inverted"` by `data-bs-theme="light"`. So if you're in a dark theme context, use only `data-bs-theme="light"` when and if needed and respectively.

<details class="mb-tall px-short">
  <summary class="py-short">You're in a static <code>light</code> context</summary>

  {{< example class="p-none" >}}
  <div class="bg-brand-primary p-tall">
    <div data-bs-theme="light">
      <p class="bg-primary p-tall fw-bold">.bg-primary</p>
      <p class="bg-secondary p-tall fw-bold">.bg-secondary</p>
      <p class="bg-tertiary p-tall fw-bold">.bg-tertiary</p>
      <p class="bg-emphasized p-tall fw-bold"><span data-bs-theme="dark">.bg-emphasized</span></p>
      <p class="bg-brand-primary p-tall fw-bold">.bg-brand-primary</p>
      <p class="bg-status-neutral-emphasized p-tall fw-bold"><span data-bs-theme="dark">.bg-status-neutral-emphasized</span></p>
      <p class="bg-status-neutral-muted p-tall fw-bold">.bg-status-neutral-muted</p>
      <p class="bg-status-accent-emphasized p-tall fw-bold">.bg-status-accent-emphasized</p>
      <p class="bg-status-accent-muted p-tall fw-bold">.bg-status-accent-muted</p>
      <p class="bg-status-positive-emphasized p-tall fw-bold">.bg-status-positive-emphasized</p>
      <p class="bg-status-positive-muted p-tall fw-bold">.bg-status-positive-muted</p>
      <p class="bg-status-negative-emphasized p-tall fw-bold"><span data-bs-theme="dark">.bg-status-negative-emphasized</span></p>
      <p class="bg-status-negative-muted p-tall fw-bold">.bg-status-negative-muted</p>
      <p class="bg-status-warning-emphasized p-tall fw-bold">.bg-status-warning-emphasized</p>
      <p class="bg-status-warning-muted p-tall fw-bold">.bg-status-warning-muted</p>
      <p class="bg-status-info-emphasized p-tall fw-bold">.bg-status-info-emphasized</p>
      <p class="bg-status-info-muted p-tall fw-bold">.bg-status-info-muted</p>
      <p class="bg-always-black p-tall fw-bold"><span data-bs-theme="dark">.bg-always-black</span></p>
      <p class="bg-always-white p-tall fw-bold">.bg-always-white</p>
      <p class="bg-transparent p-tall fw-bold">.bg-transparent</p>
    </div>
  </div>
  {{< /example >}}

</details>

<details class="mb-tall px-short">
  <summary class="py-short">You're in a static <code>dark</code> context</summary>

  {{< example class="p-none" >}}
  <div class="bg-emphasized p-tall">
    <div data-bs-theme="dark">
      <p class="bg-primary p-tall fw-bold">.bg-primary</p>
      <p class="bg-secondary p-tall fw-bold">.bg-secondary</p>
      <p class="bg-tertiary p-tall fw-bold">.bg-tertiary</p>
      <p class="bg-emphasized p-tall fw-bold">.bg-emphasized</p>
      <p class="bg-brand-primary p-tall fw-bold"><span data-bs-theme="light">.bg-brand-primary</span></p>
      <p class="bg-status-neutral-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-neutral-emphasized</span></p>
      <p class="bg-status-neutral-muted p-tall fw-bold">.bg-status-neutral-muted</p>
      <p class="bg-status-accent-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-accent-emphasized</span></p>
      <p class="bg-status-accent-muted p-tall fw-bold">.bg-status-accent-muted</p>
      <p class="bg-status-positive-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-positive-emphasized</span></p>
      <p class="bg-status-positive-muted p-tall fw-bold">.bg-status-positive-muted</p>
      <p class="bg-status-negative-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-negative-emphasized</span></p>
      <p class="bg-status-negative-muted p-tall fw-bold">.bg-status-negative-muted</p>
      <p class="bg-status-warning-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-warning-emphasized</span></p>
      <p class="bg-status-warning-muted p-tall fw-bold">.bg-status-warning-muted</p>
      <p class="bg-status-info-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-info-emphasized</span></p>
      <p class="bg-status-info-muted p-tall fw-bold">.bg-status-info-muted</p>
      <p class="bg-always-black p-tall fw-bold">.bg-always-black</p>
      <p class="bg-always-white p-tall fw-bold"><span data-bs-theme="light">.bg-always-white</span></p>
      <p class="bg-transparent p-tall fw-bold">.bg-transparent</p>
    </div>
  </div>
  {{< /example >}}

</details>

#### Inside a dynamic theme

Here is a more complex example to understand how to use `[data-bs-theme]` in specific dynamic contexts. In here you should only replace `data-bs-theme="root-inverted"` by `data-bs-theme="root"` and respectively.

<details class="mb-tall px-short">
  <summary class="py-short">You're in a dynamic <code>root-inverted</code> context</summary>

  {{< example class="p-none" >}}
  <div class="bg-status-neutral-emphasized p-tall">
    <div data-bs-theme="root-inverted">
      <p class="bg-primary p-tall fw-bold">.bg-primary</p>
      <p class="bg-secondary p-tall fw-bold">.bg-secondary</p>
      <p class="bg-tertiary p-tall fw-bold">.bg-tertiary</p>
      <p class="bg-emphasized p-tall fw-bold"><span data-bs-theme="dark">.bg-emphasized</span></p>
      <p class="bg-brand-primary p-tall fw-bold"><span data-bs-theme="light">.bg-brand-primary</span></p>
      <p class="bg-status-neutral-emphasized p-tall fw-bold"><span data-bs-theme="root">.bg-status-neutral-emphasized</span></p>
      <p class="bg-status-neutral-muted p-tall fw-bold">.bg-status-neutral-muted</p>
      <p class="bg-status-accent-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-accent-emphasized</span></p>
      <p class="bg-status-accent-muted p-tall fw-bold">.bg-status-accent-muted</p>
      <p class="bg-status-positive-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-positive-emphasized</span></p>
      <p class="bg-status-positive-muted p-tall fw-bold">.bg-status-positive-muted</p>
      <p class="bg-status-negative-emphasized p-tall fw-bold"><span data-bs-theme="root">.bg-status-negative-emphasized</span></p>
      <p class="bg-status-negative-muted p-tall fw-bold">.bg-status-negative-muted</p>
      <p class="bg-status-warning-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-warning-emphasized</span></p>
      <p class="bg-status-warning-muted p-tall fw-bold">.bg-status-warning-muted</p>
      <p class="bg-status-info-emphasized p-tall fw-bold"><span data-bs-theme="light">.bg-status-info-emphasized</span></p>
      <p class="bg-status-info-muted p-tall fw-bold">.bg-status-info-muted</p>
      <p class="bg-always-black p-tall fw-bold"><span data-bs-theme="dark">.bg-always-black</span></p>
      <p class="bg-always-white p-tall fw-bold"><span data-bs-theme="light">.bg-always-white</span></p>
      <p class="bg-transparent p-tall fw-bold">.bg-transparent</p>
    </div>
  </div>
  {{< /example >}}

</details>

<!-- ## Background gradient -->

<!-- ## Opacity -->

## CSS

<!-- In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more. -->

### Sass tokens

#### Raw tokens

Colors raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-color" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Color semantic tokens as Sass variables. **Should not be used as-is**. Prefer use our [CSS semantic tokens](#css-semantic-tokens).

{{< scss-docs name="ouds-semantic-color" file="scss/tokens/_semantic.scss" >}}

### CSS semantic tokens

Color semantic tokens as CSS variables.

{{< scss-docs name="ouds-semantic-css-color" file="scss/tokens/_semantic-colors-custom-props.scss" >}}

The same happens for the dark mode by replacing `-light` by `-dark`.

<!-- TODO LM the rest of it -->

### Sass variables

<!-- Most `background-color` utilities are generated by our theme colors, reassigned from our generic color palette variables. -->

<!-- {{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-dark-variables" file="scss/_variables-dark.scss" >}} -->

<!-- OUDS mod: no background gradient -->

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

Variables for setting `background-color` in `.bg-*-subtle` utilities in light and dark mode:

{{< scss-docs name="theme-bg-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass maps

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-colors-dark-map" file="scss/_variables-dark.scss" >}}

Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB colors are generated from a separate Sass map:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-colors-rgb-dark" file="scss/_maps.scss" >}}

Background color opacities build on that with their own map that's consumed by the utilities API:

{{< scss-docs name="utilities-bg-colors" file="scss/_maps.scss" >}}

Color mode background colors are also available as a Sass map:

{{< scss-docs name="theme-bg-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-map" file="scss/_maps.scss" >}}

### Sass mixins

**No mixins are used to generate our background utilities**, but we do have some additional mixins for other situations where you'd like to create your own gradients.

{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

<!-- OUDS mod: no background gradient -->

### Sass utilities API

Background utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
