---
layout: docs
title: Pagination
description: Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
group: components
aliases:
  - "/docs/components/pagination/"
toc: true
---

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{{< /example >}}

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

{{< example >}}
<nav aria-label="Page navigation example with icons">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
  </ul>
</nav>
{{< /example >}}

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Alignment

Change the alignment of pagination components with [flexbox utilities]({{< docsref "/utilities/flex" >}}). For example, with `.justify-content-center`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

Or with `.justify-content-end`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

<!-- Boosted mod -->
## Responsive behavior

By default, every item is visible. Here is an example with our basic responsive behavior.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">5</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">8</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
  </ul>
</nav>
{{< /example >}}

You may use `.page-ellipsis` to build your own custom pagination. It places `...` right after the number it's applied on.

{{< example class="px-0 px-sm-3" >}}
<nav aria-label="Page navigation example with ellipsis">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
    <li class="page-item page-ellipsis"><a class="page-link" href="#">1</a></li>
    <li class="page-item page-ellipsis active" aria-current="page">
      <span class="page-link">5</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
  </ul>
</nav>
{{< /example >}}

{{< callout warning >}}
**Heads up—our smart responsive pagination is opt-out as of v5.3.0!**

It means that it is disabled by default in order to have a lighter CSS bundle. We included it here in our documentation's CSS for this specific use case just as a demonstration of the rendering.

<details class="border-top border-bottom border-1 border-light">
<summary class="fw-bold p-2 mb-0">
{{< markdown >}}
Enable the responsive pagination by setting `$enable-responsive-pagination: true;`
{{< /markdown >}}
</summary>
{{< markdown >}}

```scss
// Required
@import "../node_modules/boosted/scss/functions";

// Activate responsive pagination
$enable-responsive-pagination: true;

// Required
@import "../node_modules/boosted/scss/variables";
@import "../node_modules/boosted/scss/mixins";
@import "../node_modules/boosted/scss/grid";

// Optional Boosted components here
@import "../node_modules/boosted/scss/pagination";
```
Then, recompile your Sass.
{{< /markdown >}}
</details>
{{< /callout >}}

The following example uses our smart responsive pagination. To avoid pagination wrapping or overflowing, we limit the number of displayed pagination items depending on the breakpoints by displaying automatically some ellipsis.

Given that container queries lack adequate support, we offer an alternative solution that relies on page breakpoints. Nonetheless, our solution remains flexible and can be tailored to specific requirements using our [Sass mixin](#usage).

{{< example class="bd-example-responsive-pagination px-0 px-sm-3" >}}
<nav aria-label="Smart responsive page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link"><span class="d-sm-none">Page</span>&nbsp;5&nbsp;<span class="d-sm-none">of 10</span></span>
    </li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">8</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
  </ul>
</nav>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.3" >}}

{{< callout-deprecated-dark-variants "pagination" >}}
<!-- End mod -->

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, pagination now uses local CSS variables on `.pagination` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="pagination-css-vars" file="scss/_pagination.scss" >}}

### Sass variables

{{< scss-docs name="pagination-variables" file="scss/_variables.scss" >}}

### Sass mixins

{{< scss-docs name="pagination-mixin" file="scss/mixins/_pagination.scss" >}}

<!-- Boosted mod: responsive behavior -->
The mixin is used to display a specified number of items, with the option to display a smaller version of the pagination if there are more items than the specified number. Under 7, it will display the smallest version.

The `$pagination-max-items` parameter is used to specify the maximum number of items to be displayed, and defaults to 12 if not specified. The mixin needs to be applied on top of `.page-item` element.

Overall, the mixin is a useful tool for controlling the display of items on a webpage and improving user experience by avoiding overwhelming them with too much content at once.

See below how to use it for a proper [usage](#usage).

{{< scss-docs name="pagination-max-items-mixin" file="scss/mixins/_pagination.scss" >}}

#### Usage

Here's an example of how you can use our responsive mixin to specify breakpoint `pagination-max-items` numbers for specific elements. This is the default behavior for our page-specific elements.

Be sure to use unrelated media queries, otherwise there might be issues with some overlapping rules due to half-hardcoded Sass rules.

{{< scss-docs name="pagination-mixin-use" file="site/assets/scss/_component-examples.scss" >}}

<!-- Will maybe need a specific example page -->
