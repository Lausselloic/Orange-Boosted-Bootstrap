---
layout: docs
title: Options
description: Quickly customize OUDS Web with built-in variables to easily toggle global CSS preferences for controlling style and behavior.
group: customize
aliases:
  - "/docs/customize/options/"
---

Customize OUDS Web with our built-in custom variables file and easily toggle global CSS preferences with new `$enable-*` Sass variables. Override a variable's value and recompile with `npm run test` as needed.

You can find and customize these variables for key global options in OUDS Web's `scss/_variables.scss` file.

{{< bs-table "table table-options" >}}
| Variable                          | Values                                | Description                                                                            |
| --------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------- |
| `$ouds-dimension-base`            | `4px` (default), or any value > 0     | Specifies the default spacer value to programmatically generate our [spacer utilities]({{< docsref "/utilities/spacing" >}}). |
| `$enable-dark-mode`               | `true` (default) or `false`           | Enables built-in [dark mode support]({{< docsref "/customize/color-modes#dark-mode" >}}) across the project and its components. |
| `$enable-bootstrap-compatibility` | `true` or `false` (default)           | Enforces Bootstrap compatibility. |
| `$enable-grid-classes`            | `true` (default) or `false`           | Enables the generation of CSS classes for the grid system (e.g. `.row`, `.col-md-1`, etc.). |
| `$enable-container-classes`       | `true` (default) or `false`           | Enables the generation of CSS classes for layout containers. |
| `$enable-negative-margins`        | `true` or `false` (default)           | Enables the generation of [negative margin utilities]({{< docsref "/utilities/spacing#negative-margin" >}}). |
| `$enable-deprecation-messages`    | `true` (default) or `false`           | Set to `false` to hide warnings when using any of the deprecated mixins and functions that are planned to be removed in Bootstrap `v6`. |
| `$enable-important-utilities`     | `true` (default) or `false`           | Enables the `!important` suffix in utility classes. |
<!--| `$enable-rounded`              | `true` or `false` (default)           | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows`              | `true` or `false` (default)           | Enables predefined decorative `box-shadow` styles on various components. Does not affect `box-shadow`s used for focus states. |
| `$enable-gradients`            | `true` or `false` (default)           | Enables predefined gradients via `background-image` styles on various components. |
| `$enable-transitions`          | `true` (default) or `false`           | Enables predefined `transition`s on various components. |
| `$enable-reduced-motion`       | `true` (default) or `false`           | Enables the [`prefers-reduced-motion` media query]({{< docsref "/getting-started/accessibility#reduced-motion" >}}), which suppresses certain animations/transitions based on the users' browser/operating system preferences. |
| `$enable-caret`                | `true` (default) or `false`           | Enables pseudo element caret on `.dropdown-toggle`. |
| `$enable-button-pointers`      | `true` (default) or `false`           | Add "hand" cursor to non-disabled button elements. |
| `$enable-rfs`                  | `true` or `false` (default)           | Globally enables [RFS]({{< docsref "/getting-started/rfs" >}}). |
| `$enable-validation-icons`     | `true` (default) or `false`           | Enables `background-image` icons within textual inputs and some custom forms for validation states. |
| `$enable-smooth-scroll`        | `true` (default) or `false`           | Applies `scroll-behavior: smooth` globally, except for users asking for reduced motion through [`prefers-reduced-motion` media query]({{< docsref "/getting-started/accessibility#reduced-motion" >}}) |
| `$enable-fixed-header`         | `true` (default) or `false`           | Set `scroll-padding-top` rule to root element, preventing focus from being hidden under a fixed header. |-->
{{< /bs-table >}}
