---
layout: docs
title: Color and background
description: Set a background color with contrasting foreground color.
group: helpers
aliases:
  - "/docs/helpers/color-background/"
toc: true
---

## Overview

Color and background helpers combine the power of our [`.text-*` utilities]({{< docsref "/utilities/colors" >}}) and [`.bg-*` utilities]({{< docsref "/utilities/background" >}}) in one class. We determine a contrasting `color` for a particular `background-color`. However, it doesn't change mode at all.

{{< callout info >}}
Please consider using our [color modes]({{< docsref "/customize/color-modes" >}}) directly as explained in our [background utilities]({{< docsref "/utilities/background" >}}) to set nested components in the right mode directly as well.
{{< /callout >}}

{{< example >}}
<p class="text-bg-primary p-tall fw-bold">.text-bg-primary</p>
<p class="text-bg-secondary p-tall fw-bold">.text-bg-secondary</p>
<p class="text-bg-tertiary p-tall fw-bold">.text-bg-tertiary</p>
<p class="text-bg-emphasized p-tall fw-bold">.text-bg-emphasized</p>
<p class="text-bg-brand-primary p-tall fw-bold">.text-bg-brand-primary</p>
<p class="text-bg-status-neutral-emphasized p-tall fw-bold">.text-bg-status-neutral-emphasized</p>
<p class="text-bg-status-neutral-muted p-tall fw-bold">.text-bg-status-neutral-muted</p>
<p class="text-bg-status-accent-emphasized p-tall fw-bold">.text-bg-status-accent-emphasized</p>
<p class="text-bg-status-accent-muted p-tall fw-bold">.text-bg-status-accent-muted</p>
<p class="text-bg-status-positive-emphasized p-tall fw-bold">.text-bg-status-positive-emphasized</p>
<p class="text-bg-status-positive-muted p-tall fw-bold">.text-bg-status-positive-muted</p>
<p class="text-bg-status-negative-emphasized p-tall fw-bold">.text-bg-status-negative-emphasized</p>
<p class="text-bg-status-negative-muted p-tall fw-bold">.text-bg-status-negative-muted</p>
<p class="text-bg-status-warning-emphasized p-tall fw-bold">.text-bg-status-warning-emphasized</p>
<p class="text-bg-status-warning-muted p-tall fw-bold">.text-bg-status-warning-muted</p>
<p class="text-bg-status-info-emphasized p-tall fw-bold">.text-bg-status-info-emphasized</p>
<p class="text-bg-status-info-muted p-tall fw-bold">.text-bg-status-info-muted</p>
<p class="text-bg-always-black p-tall fw-bold">.text-bg-always-black</p>
<p class="text-bg-always-white p-tall fw-bold">.text-bg-always-white</p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

{{< bootstrap-compatibility >}}
<!-- TODO LM: Check Bootstrap compatibility -->
Color and background helpers combine the power of our [`.text-*` utilities]({{< docsref "/utilities/colors" >}}) and [`.bg-*` utilities]({{< docsref "/utilities/background" >}}) in one class. Using our Sass `color-contrast()` function, we automatically determine a contrasting `color` for a particular `background-color`.

{{< callout warning >}}
**Heads up!** There's currently no support for a CSS-native `color-contrast` function, so we use our own via Sass. This means that customizing our theme colors via CSS variables may cause color contrast issues with these utilities.
{{< /callout >}}

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="text-bg-{{ .name }} p-3">{{ .name | title }} with contrasting color</div>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- ## With components -->
