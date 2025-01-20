---
layout: docs
title: Accessibility
description: A brief overview of OUDS Web's features and limitations for the creation of accessible content.
group: getting-started
aliases:
  - "/docs/getting-started/accessibility/"
toc: true
---

OUDS Web provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## Overview and limitations

The overall accessibility of any project built with OUDS Web depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with OUDS Web that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG/) (A/AA/AAA), [Section 508](https://www.section508.gov/), and similar accessibility standards and requirements.

### Structural markup

OUDS Web's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of OUDS Web itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

OUDS Web's interactive components<!--—such as modal dialogs, dropdown menus, and custom tooltips—--> are designed to work for touch, mouse, and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because OUDS Web's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

Some combinations of colors that currently make up OUDS Web's default palette—used throughout the framework<!-- for things such as button variations, alert variations, form validation indicators—-->may lead to *insufficient* color contrast (below the recommended [WCAG 2.2 text color contrast ratio of 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) and the [WCAG 2.2 non-text color contrast ratio of 3:1](https://www.w3.org/TR/WCAG21/#non-text-contrast)), particularly when used against a light background.

OUDS Web **contrasts aren't locked, please make sure they meet [WCAG 2.2 accessibility standards for color contrast](https://www.w3.org/TR/WCAG21/#contrast-minimum)** when using [`.text-*`]({{< docsref "/utilities/colors" >}}) and [`.bg-*` utilities]({{< docsref "/utilities/background" >}}), by defining `color` and `background-color`.<!-- Please refer to [our theme colors]({{< docsref "/customize/color-palette" >}}) to have a full preview of OUDS Web color palette’s reached WCAG level.-->

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.visually-hidden` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

```html
<p>
  <svg width="8em" height="8em" class="text-status-negative" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#error-severe"/>
  </svg>
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

For visually hidden interactive controls, such as traditional "skip" links, use the `.visually-hidden-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users). **Watch out, `.visually-hidden-focusable` is a standalone class, and must not be used in combination with the `.visually-hidden` class.**

```html
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

### Reduced motion

OUDS Web includes support for the [`prefers-reduced-motion` media feature](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in OUDS Web<!-- (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels)--> will be disabled, and meaningful animations <!--(such as spinners) -->will be slowed down.

On browsers that support `prefers-reduced-motion`, and where the user has *not* explicitly signaled that they'd prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), OUDS Web enables smooth scrolling using the `scroll-behavior` property.

### Focus visibility

OUDS Web includes [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.

{{< scss-docs name="focus-visibility" file="scss/_reboot.scss" >}}

OUDS Web provides `focus-visible()` mixin to ensure a proper visible focus state:

{{< scss-docs name="focus-visible" file="scss/mixins/_focus.scss" >}}

This visible focus state is defined by an outer outline and an inner box shadow. Colors are switched in a dark context. Here are the basic variables that define this visible focus:

{{< scss-docs name="focus-visible-variables" file="scss/_variables.scss" >}}

<!--Each component then specifies its own visible focus style when needed, for example [carousels]({{< docsref "/components/carousel#with-indicators" >}}).

{{< scss-docs name="focus-visible-carousel" file="scss/_carousel.scss" >}}-->

<!--#### Under a fixed header

When using a fixed (or sticky) header, tabbing backward often hides focused element under the header. OUDS Web sets `scroll-padding-top` property for such case. This feature is configurable in two ways:

1. `$scroll-offset-top` variable defines the offset,
2. and [`$enable-fixed-header` allows to drop this rule]({{< docsref "/customize/options" >}}) if you don't use a fixed header.

{{< scss-docs name="scroll-offset" file="scss/_reboot.scss" >}}-->

### Minimum target size

OUDS Web provides `target-size()` mixin to ensure a minimum target size, adding a centered pseudo-element with a minimum size —defaulting to `44px` to pass [WCAG 2.1 "Target Size" Success Criterion (2.5.5)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)— alongside a few arguments to fit specific needs (e.g. different width and height, using `::after` instead of `::before`, etc.).

{{< scss-docs name="target-size" file="scss/mixins/_target-size.scss" >}}

### Maximum line length

When writing a paragraph, it is commonly admitted that a line should have 80 characters as a maximum. This phenomenon is carefully explained in the [C20 technique: Using relative measurements to set column widths](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C20).

<!--For more information, please [read text utilities]({{< docsref "/utilities/text#line-length" >}}).-->

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG/)
- [The A11Y Project](https://www.a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe testing tools](https://www.deque.com/axe/)
- [Orange accessibility guidelines](http://a11y-guidelines.orange.com/en/)
- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [`:focus-visible` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
