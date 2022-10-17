---
layout: docs
title: Close button
description: A generic close button for dismissing content like modals and alerts.
group: components
aliases:
  - "/docs/components/close-button/"
toc: true
---

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `mask-image`. **Be sure to include text for screen readers**, as we've done with `<span class="visually-hidden">`.

{{< example >}}
<button type="button" class="btn-close"><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Disabled state

Disabled close buttons change their `color`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="btn-close" disabled><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Dark variant

Add `.btn-close-white` to the `.btn-close` for a dark variant.

{{< example class="bg-dark" >}}
<button type="button" class="btn-close btn-close-white"><span class="visually-hidden">Close</span></button>
<button type="button" class="btn-close btn-close-white" disabled><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Without specific class

Close buttons can also be created without `.btn-close` to reduce the size of your CSS bundle.

{{< example >}}
<button type="button" class="btn btn-icon btn-no-outline">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>

<button type="button" class="btn btn-icon btn-no-outline" disabled>
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>
{{< /example >}}

## CSS

<!-- Boosted mod: CSS var -->
### Variables

{{< added-in "5.2.1" >}}

As part of Boosted’s evolving CSS variables approach, close buttons now use local CSS variables on `.btn-close` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="btn-close-css-vars" file="scss/_close.scss" >}}

Customization through CSS variables can be seen on the `.btn-close-white` modifier class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="btn-close-white-css-vars" file="scss/_close.scss" >}}

### Sass variables

Variables for all close buttons:

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}

Variables for the [dark close button](#dark-variant):

{{< scss-docs name="close-white-variables" file="scss/_variables.scss" >}}
<!-- End mod -->
