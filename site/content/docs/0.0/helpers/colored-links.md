---
layout: docs
title: Colored links
description: Colored links with hover states
group: helpers
aliases:
  - "/docs/helpers/colored-links/"
toc: true
---

## Link colors

Colored links shouldn't be used in an OUDS Web context<!--, please prefer refer to [our links section]({{< docsref "/content/typography#links" >}}) instead-->.

{{< bootstrap-compatibility >}}
You can use the `.link-*` classes to colorize links. Unlike the [`.text-*` classes]({{< docsref "/utilities/colors" >}}), these classes have a `:hover` and `:focus` state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

{{< callout info >}}
**Heads up!** `.link-body-emphasis` is currently the only colored link that adapts to color modes. It's treated as a special case until Bootstrap v6 arrives and we can more thoroughly rebuild our theme colors for color modes. Until then, it's a unique, high-contrast link color with custom `:hover` and `:focus` styles. However, it still responds to the new link utilities.
{{< /callout >}}

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p><a href="#" class="link-{{ .name }}">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- ## Link utilities -->
