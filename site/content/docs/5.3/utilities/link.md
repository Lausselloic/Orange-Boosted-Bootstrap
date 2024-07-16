---
layout: docs
title: Link
description: Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.
group: utilities
aliases:
  - "/docs/utilities/link/"
toc: true
added:
  version: "5.3"
---

## Link opacity

Change the alpha opacity of the link `rgba()` color value with utilities. Please be aware that changes to a color's opacity can lead to links with [*insufficient* contrast]({{< docsref "getting-started/accessibility#color-contrast" >}}).

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>
{{< /example >}}

You can even change the opacity level on hover.

{{< example >}}
<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
{{< /example >}}
</details>

## Link underlines

### Underline color

Change the underline's color independent of the link text color.

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
{{< link-underline-colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-underline-{{ .name }}">{{ .name | title }} underline</a></p>
{{- end -}}
{{< /link-underline-colors.inline >}}
{{< /example >}}
</details>

### Underline offset

Change the underline's distance from your text. Offset is set in `em` units to automatically scale with the element's current `font-size`.

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>
{{< /example >}}
</details>

### Underline opacity

Change the underline's opacity. Requires adding `.link-underline` to first set an `rgba()` color we use to then modify the alpha opacity.

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
{{< /example >}}
</details>

### Hover variants

Just like the `.link-opacity-*-hover` utilities, `.link-offset` and `.link-underline-opacity` utilities include `:hover` variants by default. Mix and match to create unique link styles.

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

{{< example >}}
<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>
{{< /example >}}
</details>

## Colored links

[Colored link helpers]({{< docsref "/helpers/colored-links/" >}}) have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Link utilities should be used carefully because the rendering provided in the following examples does not exist in the Orange Design System specifications and do not always meet accessibility standards. But still, these utilities could help in some cases to build specific ues cases or other reusable components.
{{< /design-callout-alert >}}

<!--Boosted mod: use `contrast_color` as background to ensure a good contrast-->
{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }}{{ with .contrast_color }} bg-{{ . }}{{ end }} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
{{< /example >}}
<!--End mod-->

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}
</details>

## CSS

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass utilities API

Link utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-links" file="scss/_utilities.scss" >}}