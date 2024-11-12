---
layout: docs
title: Breakpoints
description: Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in OUDS Web.
group: layout
aliases:
  - "/layout/"
  - "/docs/layout/"
  - "/docs/0.0/layout/"
  - "/docs/layout/breakpoints/"
toc: true
---

## Core concepts

- **Breakpoints are the building blocks of responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

- **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use `min-width` in our media queries.

- **Mobile first, responsive design is the goal.** OUDS Web's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints

OUDS Web includes eight default breakpoints, sometimes referred to as _grid tiers_, for building responsively. These breakpoints can be customized if you're using our source Sass files.

{{< bs-table "table" >}}
| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| 2x-small | <em>None</em> |&lt;390px |
| X-small | `xs` | &ge;390px |
| Small | `sm` | &ge;480px |
| Medium | `md` | &ge;736px |
| Large | `lg` | &ge;1024px |
| X-large | `xl` | &ge;1320px |
| 2x-large | `2xl` | &ge;1640px |
| 3x-large | `3xl` | &ge;1880px |
{{< /bs-table >}}

{{< bootstrap-compatibility >}}

Includes support for xxl breakpoint, defined like 2xl.

{{< bs-table "table" >}}
| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| Extra extra large | `xxl` | &ge;1640px |
{{< /bs-table >}}

{{< /bootstrap-compatibility >}}

Breakpoints are representative of a subset of common device sizes and viewport dimensions—they don't specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.

These breakpoints are customizable via Sass—you'll find them in a Sass map in our `_variables.scss` stylesheet.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

For more information and examples on how to modify our Sass maps and variables, please refer to [the CSS section of the Grid documentation]({{< docsref "/layout/grid#css" >}}).

## Media queries

Since OUDS Web is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

### Min-width

OUDS Web primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

```scss
// Source mixins

// No media query necessary for 2xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }
@include media-breakpoint-up(3xl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `xs` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(xs) {
  .custom-class {
    display: block;
  }
}
```

These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:

```scss
// 2x-small devices (portrait phones, less than 390px)
// No media query for `2xs` since this is the default in OUDS Web

// X-small devices (portrait phones, 390px and up)
@media (min-width: 390px) { ... }

// Small devices (landscape phones, 480px and up)
@media (min-width: 480px) { ... }

// Medium devices (portrait tablets, 736px and up)
@media (min-width: 736px) { ... }

// Large devices (landscape tablets, 1024px and up)
@media (min-width: 1024px) { ... }

// X-large devices (desktops, 1320px and up)
@media (min-width: 1320px) { ... }

// 2x-large devices (large desktops, 1640px and up)
@media (min-width: 1640px) { ... }

// 3x-large devices (larger desktops, TV, 1880px and up)
@media (min-width: 1880px) { ... }
```

### Max-width

We occasionally use media queries that go in the other direction (the given screen size _or smaller_):

```scss
// No media query necessary for 2xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(2xl) { ... }
@include media-breakpoint-down(3xl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

These mixins take those declared breakpoints, subtract `.02px` from them, and use them as our `max-width` values. For example:

```scss
// `2xs` returns only a ruleset and no media query
// ... { ... }
// `xs` applies to 2x-small devices (portrait phones, less than 390px)
@media (max-width: 389.98px) { ... }

// `sm` applies to x-small devices (portrait phones, less than 480px)
@media (max-width: 479.98px) { ... }

// `md` applies to small devices (landscape phones, less than 736px)
@media (max-width: 735.98px) { ... }

// `lg` applies to medium devices (portrait tablets, less than 1024px)
@media (max-width: 1023.98px) { ... }

// `xl` applies to large devices (landscape tablets, less than 1320px)
@media (max-width: 1319.98px) { ... }

// `2xl` applies to x-large devices (desktops, less than 1640px)
@media (max-width: 1639.98px) { ... }

// `3xl` applies to 2x-large devices (large desktops, less than 1880px)
@media (max-width: 1879.98px) { ... }
```

{{< callout warning >}}
{{< partial "callouts/info-mediaqueries-breakpoints.md" >}}
{{< /callout >}}

### Single breakpoint

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

```scss
@include media-breakpoint-only(2xs) { ... }
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(2xl) { ... }
@include media-breakpoint-only(3xl) { ... }
```

For example the `@include media-breakpoint-only(md) { ... }` will result in:

```scss
// Example
// Apply styles starting from medium devices and up to large devices
@media (min-width: 736px) and (max-width: 1023.98px) { ... }
```

### Between breakpoints

Similarly, media queries may span multiple breakpoint widths:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

Which results in:

```scss
// Example
// Apply styles starting from medium devices and up to x-large devices
@media (min-width: 736px) and (max-width: 1319.98px) { ... }
```