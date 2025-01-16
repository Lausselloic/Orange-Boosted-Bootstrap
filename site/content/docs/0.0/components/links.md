---
layout: docs
title: Links
description: Use OUDS Web's customer link styles for links as a key navigational element, enabling users to move between pages, sections, or external resources.
group: components
aliases:
  - "/docs/components/links/"
toc: true
---

## Base class

OUDS Web has a base `.link` class that sets up basic styles such as padding and content alignment. By default, `.link` controls have a transparent border and background color, but still defines basic focus, hover and active styles.

{{< example >}}
<a href="#" class="link">This is an example of a base link</a>
<a href="#" class="link link-sm">This is an example of a small base link</a>
<a href="#" class="link link-chevron">This is an example of a link with chevron</a>
<a href="#" class="link link-chevron back">This is an example of a link with chevron</a>
<a href="#" class="link icon-link">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of a link with icon
</a>
{{< /example >}}

The `.link` class is intended to be used in conjunction with our link variants used to display chevron or icon, or to serve as a basis for your own custom styles.

## Link chevron

Add `.link-chevron` to enhance your link with a chevron.

{{< example >}}
<a class="link-chevron" href="#">This is a sample link with chevron</a>
{{< /example >}}

## Icon link

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

Icon links assume [Bootstrap Icons](https://icons.getbootstrap.com) are being used, but you should use [Solaris icons]({{< docsref "/extend/icons" >}}) in an Orange project.

{{< callout >}}
When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our examples. For icons that convey meaning, provide an appropriate text alternative by adding `role="img"` and an appropriate `aria-label="..."` to the SVGs.
{{< /callout >}}

### Example

Take a regular `<a>` element, add `.icon-link`, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This helper should be used carefully because the rendering provided in the following examples does not respect the Orange Design System specifications. But still, this helper could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<a class="icon-link" href="#">
  <svg class="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
  Icon link
</a>
{{< /example >}}

{{< example >}}
<a class="icon-link" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
</details>

### Style on hover

Add `.icon-link-hover` to move the icon to the right on hover.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This helper should be used carefully because the rendering provided in the following examples does not respect the Orange Design System specifications. But still, this helper could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
</details>

## Customize

Modify the styling of an icon link with our link CSS variables, Sass variables, utilities, or custom styles.

### CSS variables

Modify the `--bs-link-*` and `--bs-icon-link-*` CSS variables as needed to change the default appearance.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This helper should be used carefully because the rendering provided in the following examples does not respect the Orange Design System specifications. But still, this helper could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

Customize the hover `transform` by overriding the `--bs-icon-link-transform` CSS variable:

{{< example >}}
<a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
  <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"></use></svg>
  Icon link
</a>
{{< /example >}}

Customize the color by overriding the `--bs-link-*` CSS variable:

{{< example >}}
<a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
</details>

### Sass variables

Customize the icon link Sass variables to modify all icon link styles across your Bootstrap-powered project.

{{< scss-docs name="icon-link-variables" file="scss/_variables.scss" >}}

### Sass utilities API

Modify icon links with any of [our link utilities]({{< docsref "/utilities/link/" >}}) for modifying underline color and offset.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This helper should be used carefully because the rendering provided in the following examples does not respect the Orange Design System specifications. But still, this helper could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
</details>
