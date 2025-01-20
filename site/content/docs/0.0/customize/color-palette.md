---
layout: docs
title: Color palette
description: OUDS Web's color palette is the summary of all the existing and useable colors.
group: customize
aliases:
  - "/docs/customize/color-palette/"
toc: true
---

## Palette

This section exposes all the existing colors inside the OUDS Web palette. These variables aren't meant to be used, it's only an exposure of the available colors. Be aware that none of the variables presented here depend on the theme.

<!-- Please make sure that none of the [color theme variables]({{< docsref "/customize/color-theme" >}}) fit your needs before picking one here. -->

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "OUDS colors" }}
  {{- range $subcategory := .subcategories }}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 gy-tall pb-tall">
    {{- range $color := .colors }}
      <figure class="mb-none" aria-label="{{ $color.name }}">
        <button class="btn border-none p-none color-copy ratio ratio-1x1" data-clipboard-text="{{ $color.variable }}" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard">
          <svg viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="xMidYMid meet" {{ if or (or (or (eq $color.hex "#141414") (eq $color.hex "#fff")) (eq $color.hex "#000")) (strings.Contains $color.hex "rgba") }} style="border: 1px solid var(--bs-color-border-emphasized)" {{ end }}>
          {{ if strings.Contains $color.hex "rgba" }}
            <rect fill="#fff" width="50" height="100"/>
            <rect fill="#141414" x="50" width="50" height="100"/>
          {{ end -}}
            <rect fill="{{ $color.hex }}" width="100" height="100"/>
          {{ if strings.Contains $color.hex "rgba" }}
            <svg class="decorative-xs-icon text-always-black" x="15" y="15" width="20" height="20" aria-hidden="true">
              <use xlink:href="#ui-light-mode"/>
            </svg>
            <svg class="decorative-xs-icon text-always-white" x="65" y="15" width="20" height="20" aria-hidden="true">
              <use xlink:href="#ui-dark-mode"/>
            </svg>
          {{ end -}}
          </svg>
          <span class="visually-hidden">Copy variable name {{ $color.variable }}</span>
        </button>
        <figcaption class="py-shortest">
          <code class="user-select-all">{{ $color.hex }}</code>
          <hr class="my-shortest border-top" style="border-color:{{ $color.hex }} !important">
          <var class="user-select-all">{{- $color.variable -}}</var>
        </figcaption>
      </figure>
    {{ end -}}
  </div>
  {{ end -}}
{{ end -}}
{{< /palette.inline >}}

## Bootstrap's palette

Bootstrap defines a color palette on its own. We worked on a mapping between Orange Unified Design System's colors and Bootstrap's ones in cases where users will use Bootstrap-based plugins or libraries so that, when used with Boosted CSS, provides an acceptable automatic rendering.

<details>
<summary>See Bootstrap palette</summary>
<br>
<h2>All colors</h2>

{{< callout danger >}}
Some of the colors below do not belong to the Orange Unified Design System specifications.

Please refer to our [color palette section](#palette) and to the [Color guidelines](https://unified-design-system.orange.com/472794e18/p/217ac6-color) on the Orange Unified Design System website.
{{< /callout >}}

{{< callout warning >}}
All OUDS Web colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, we don't create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a [theme palette](#palette).

Please note that in the OUDS Web colors, the indigo colors are the same as the purple ones.
{{< /callout >}}

Be sure to monitor contrast ratios as you customize colors. As shown below, we've added three contrast ratios to each of the main colors—one for the swatch's current colors, one for against white, and one for against black.

<div class="row font-monospace">
  {{< theme-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
    <div class="col-md-4 mb-tall">
      <div class="p-tall mb-short position-relative swatch-{{ $color.name }}">
        <strong class="d-block">${{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
      {{ range (seq 100 100 900) }}
      <div class="p-tall bd-{{ $color.name }}-{{ . }}">${{ $color.name }}-{{ . }}</div>
      {{ end }}
    </div>
    {{ end -}}
  {{ end -}}

  <div class="col-md-4 mb-tall">
    <div class="p-tall mb-short position-relative swatch-gray-500">
      <strong class="d-block">$gray-500</strong>
      #707070
    </div>
  {{- range $.Site.Data.grays }}
    <div class="p-tall bd-gray-{{ .name }}">$gray-{{ .name }}</div>
  {{ end -}}
  </div>
  {{< /theme-colors.inline >}}

  <div class="col-md-4 mb-tall">
    <div class="p-tall mb-short bd-black text-always-on-black">
      <strong class="d-block">$black</strong>
      #000
    </div>
    <div class="p-tall mb-short bd-white border">
      <strong class="d-block">$white</strong>
      #fff
    </div>
  </div>
</div>

<h3>Notes on Sass</h3>

Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We then map all the created variables to one of our raw color tokens that are coming from the design directly.

<h3>Example</h3>

Here's how you should use these in your Sass:

```scss
.alpha { color: var(--bs-color-action-visited); } // And not `$ouds-color-decorative-amethyst-600` or `$ouds-color-action-visited-light` directly
.beta {
  color: $ouds-color-decorative-sun-100; // Because we don't have any CSS variable but prefer avoid the decorative
  background-color: var(--bs-color-bg-primary); // No hex code, no Sass variable
}
```

[Color]({{< docsref "/utilities/colors" >}}) and [Background]({{< docsref "/utilities/background" >}}) utility classes are also available for setting `color` and `background-color`.
</details>

## CSS

OUDS Web sets an additional layer to use Orange Unified Design System's color tokens names—defined first and mapped to Bootstrap core variables.
OUDS Web core uses Bootstrap's naming for maintenance ease, but you're encouraged to use Orange semantic color tokens (using CSS variables is even better) when it comes to custom code.

### Sass tokens

#### Raw tokens

A first layer of color raw tokens Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-color" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Color semantic tokens as Sass variables. **Not to be used as-is**. Please use our [Color semantic tokens as CSS variables](#).

### Sass variables

<!-- TODO LM

Because OUDS Web relies on Bootstrap's specific tokens system, we need to map the OUDS Web's color tokens to the Bootstrap's ones.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}} -->

### Sass maps

<!-- TODO LM

OUDS Web's source Sass files include maps to help you quickly and easily loop over a list of colors and their hex values.

- `$colors` lists all our available base colors
- `$theme-colors` lists all [semantically named light theme colors]({{< docsref "/customize/color-theme" >}})
- `$theme-colors-dark` lists all [semantically named dark theme colors]({{< docsref "/customize/color-theme" >}})
- `$utilities-text` overrides `$theme-colors` specifically used to define `.text-*` utilities
- `$utilities-bg` overrides `$theme-colors` specifically used to define `.bg-*` utilities
- `$utilities-border` overrides `$theme-colors` specifically used to define `.border-*` utilities
- `$grays`, `$blues`, `$indigos`, `$purples`, `$pinks`, `$reds`, `$oranges`, `$yellows`, `$greens`, `$teals`, and `$cyans` list all tints and shades of our colors

Within `scss/_variables.scss` or `scss/_maps.scss`, you'll find OUDS Web's color variables and Sass maps. Here's an example of the `$colors` Sass map:

{{< scss-docs name="colors-map" file="scss/_variables.scss" >}}

Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map. -->

<!-- ## Generating utilities

OUDS Web doesn't include `color` and `background-color` utilities for every color variable, but you can generate these yourself with our [utility API]({{< docsref "/utilities/api" >}}) and our extended Sass maps.

1. To start, make sure you've imported our functions, variables, mixins, and utilities.
2. Use our `map-merge-multiple()` function to quickly merge multiple Sass maps together in a new map.
3. Merge this new combined map to extend any utility with a `{color}-{level}` class name.

Here's an example that generates text color utilities (e.g., `.text-purple-500`) using the above steps.

```scss
@import "@ouds/web/scss/functions";
@import "@ouds/web/scss/variables";
@import "@ouds/web/scss/variables-dark";
@import "@ouds/web/scss/maps";
@import "@ouds/web/scss/mixins";
@import "@ouds/web/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "@ouds/web/scss/utilities/api";
```

This will generate new `.text-{color}-{level}` utilities for every color and level. You can do the same for any other utility and property as well. -->
