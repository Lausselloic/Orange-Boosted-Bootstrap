---
layout: docs
title: Icon
description: Quickly see the right icon sizes with a specific typography reference.
group: helpers
aliases:
  - "/docs/helpers/icon/"
toc: true
---

## Approach

The icon classes are done to be used upon `<img>`, `<svg>` or even icon font wherever the icon is. Please make sure to either the rules described in this page or follow the design.

Every icon class presented in here has the common following code:

{{< scss-docs name="ouds-font-icon-common" file="scss/helpers/_icon.scss" >}}

## Headings

Here are the rules to follow for headings. These icons' sizes are responsive.

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.hxl-lg-icon` | `3.25rem` (52px) | `4rem` (64px) | `4rem` (64px) |
| `.hxl-md-icon` | `3rem` (48px) | `3.5rem` (56px) | `3.75rem` (60px) |
| `.hxl-sm-icon` | `2.75rem` (44px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-lg-icon` | `3rem` (48px) | `3.25rem` (52px) | `3.5rem` (56px) |
| `.hl-md-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hl-sm-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-lg-icon` | `2.75rem` (44px) | `3rem` (48px) | `3.25rem` (52px) |
| `.hm-md-icon` | `2.5rem` (40px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hm-sm-icon` | `2rem` (32px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-lg-icon` | `2.75rem` (44px) | `2.75rem` (44px) | `3rem` (48px) |
| `.hs-md-icon` | `2.5rem` (40px) | `2.5rem` (40px) | `2.75rem` (44px) |
| `.hs-sm-icon` | `2rem` (32px) | `2rem` (32px) | `2.5rem` (40px) |
| `.bl-lg-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-md-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-sm-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-lg-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-md-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-sm-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
{{< /bs-table >}}

</details>

{{< example >}}
<!-- h1 uses heading-xlarge font reference like all related classes as `.h1`, `.fs-hxl`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="hxl-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon</h1>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hxl-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with medium icon</h1>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hxl-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with small icon</h1>
</div>

<hr>

<!-- h2 uses heading-large font reference like all related classes as `.h2`, `.fs-hl`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="hl-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with large icon</h2>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hl-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with medium icon</h2>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hl-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h2 class="mb-none">H2 with small icon</h2>
</div>

<hr>

<!-- h3 uses heading-medium font reference like all related classes as `.h3`, `.fs-hm`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="hm-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with large icon</h3>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hm-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with medium icon</h3>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hm-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h3 class="mb-none">H3 with small icon</h3>
</div>

<hr>

<!-- h4 uses heading-small font reference like all related classes as `.h4`, `.fs-hs`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="hs-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with large icon</h4>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hs-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with medium icon</h4>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="hs-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h4 class="mb-none">H4 with small icon</h4>
</div>

<hr>

<!-- h5 uses body-large font reference like all related classes as `.h5`, `.fs-bl`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with large icon</h5>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with medium icon</h5>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h5 class="mb-none">H5 with small icon</h5>
</div>

<hr>

<!-- h6 uses body-medium font reference like all related classes as `.h6`, `.fs-bm`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with lg icon</h6>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with medium icon</h6>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h6 class="mb-none">H6 with small icon</h6>
</div>
{{< /example >}}

## Display headings

You should not use any icon with our `.display-*` font sizes, because we prefer to keep the place for the text.

## Regular texts

Here are the rules to follow for regular texts. These icons' sizes are responsive.

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| `.bl-lg-icon` | `1.75rem` (28px) | `1.75rem` (28px) | `2.75rem` (44px) |
| `.bl-md-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `2.5rem` (40px) |
| `.bl-sm-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `2rem` (32px) |
| `.bm-lg-icon` | `1.5rem` (24px) | `1.5rem` (24px) | `1.75rem` (28px) |
| `.bm-md-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bm-sm-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-lg-icon` | `1.25rem` (20px) | `1.25rem` (20px) | `1.5rem` (24px) |
| `.bs-md-icon` | `1rem` (16px) | `1rem` (16px) | `1.25rem` (20px) |
| `.bs-sm-icon` | `.75rem` (12px) | `.75rem` (12px) | `1rem` (16px) |
{{< /bs-table >}}

</details>

{{< example >}}
<!-- .lead uses body-large font reference like all related classes as `.lead`, `.fs-bl`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bl-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="lead mb-none">
    Lead paragraph with small icon
  </p>
</div>

<hr>

<!-- default paragraph uses body-medium font reference like all related classes as `.fs-bm`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bm-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default paragraph with small icon
  </p>
</div>

<hr>

<!-- .small paragraph uses body-small font reference like all related classes as `.small`, `.fs-bs`, etc... -->
<div class="d-flex align-items-center mb-medium">
  <svg class="bs-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with large icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bs-md-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with medium icon
  </p>
</div>
<div class="d-flex align-items-center mb-medium">
  <svg class="bs-sm-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="small mb-none">
    Small paragraph with small icon
  </p>
</div>
{{< /example >}}

## Decorative

Here are the rules to follow for decorative icons. Be careful using these icons' sizes because they are not responsive. <!-- Check out for more information about accessibility in [our documentation]({{< docsref "/extend/icons" >}}). -->

<details class="mb-medium">
  <summary>See the <strong>sizes</strong> associated to classes</summary>

{{< bs-table >}}
| Icon class | Value |
| --- | --- |
| `.decorative-2xs-icon` | `1rem` (16px) |
| `.decorative-xs-icon` | `1.5rem` (24px) |
| `.decorative-sm-icon` | `2rem` (32px) |
| `.decorative-md-icon` | `2.5rem` (40px) |
| `.decorative-lg-icon` | `3rem` (48px) |
| `.decorative-xl-icon` | `3.5rem` (56px) |
| `.decorative-2xl-icon` | `4.5rem` (72px) |
{{< /bs-table >}}

</details>

<div class="bd-example">
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-2xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">2x-small decorative icon</p>
      <p class="mb-none">coreGlobalDimension200 (<code>1rem</code> or <code>16px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">X-small decorative icon</p>
      <p class="mb-none">coreGlobalDimension300 (<code>1.5rem</code> or <code>24px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-sm-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Small decorative icon</p>
      <p class="mb-none">coreGlobalDimension400 (<code>2rem</code> or <code>32px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-md-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Medium decorative icon</p>
      <p class="mb-none">coreGlobalDimension500 (<code>2.5rem</code> or <code>40px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-lg-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">Large decorative icon</p>
      <p class="mb-none">coreGlobalDimension600 (<code>3rem</code> or <code>48px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">X-large decorative icon</p>
      <p class="mb-none">coreGlobalDimension700 (<code>3.5rem</code> or <code>56px</code> at zoom 100%)</p>
    </div>
  </div>
  <div class="d-flex mb-medium">
    <div class="bg-emphasized d-inline-flex align-items-center justify-content-center me-medium flex-shrink-0" style="width: 6.25rem; height: 6.25rem;">
      <svg class="decorative-2xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
      </svg>
    </div>
    <div>
      <p class="lead mb-shortest fw-bold">2x-large decorative icon</p>
      <p class="mb-none">coreGlobalDimension900 (<code>4.5rem</code> or <code>72px</code> at zoom 100%)</p>
    </div>
  </div>
</div>

```html
<svg class="decorative-2xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-xs-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-sm-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-md-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-lg-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
<svg class="decorative-2xl-icon text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"></svg>
```

## Multiple lines

Sometimes you need a different structure to handle larger titles, or paragraphs that wrap over several lines. Here are some examples to handle these use cases. We've set arbitrary spacings, but align them with your design.

### Centered on text block

This is the default behavior of our DOM.

{{< example >}}
<div class="d-flex align-items-center">
  <svg class="hxl-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <svg class="bm-lg-icon me-scaled-short text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with large icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

### Above text block

You can also have the icon above the text block.

{{< example >}}
<div>
  <svg class="hxl-lg-icon mb-scaled-shorter text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <h1 class="mb-none">H1 with large icon and a very long title to see how it behaves while being wrapped</h1>
</div>
{{< /example >}}

{{< example >}}
<div>
  <svg class="bm-lg-icon mb-scaled-shortest text-status-info" width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#vector"/>
  </svg>
  <p class="mb-none">
    Default long paragraph with large icon. It stands here in order for you to see how the icon should behave when it's placed next to a long paragraph. Whenever the paragraph stands on multiple lines please prefer using a block element and not an inline element so there will no strange behaviors.
  </p>
</div>
{{< /example >}}

## `<img>` and font icon

SVG Sprite is the preferred choice for flexibility, performance and accessibility, and this is why all our examples use this method but there are other ways to display icons. They should all behave the same due to our CSS. If you are experimenting any trouble, feel free to search or fill in a new [Github discussion](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions) or contact [our team]({{< docsref "/about/team" >}}). <!-- Check out for more information in [our documentation]({{< docsref "/extend/icons" >}}). -->

{{< example >}}
<div class="d-flex align-items-center mb-medium">
  <img class="hxl-lg-icon me-short" alt="" src="/docs/{{< param docs_version >}}/assets/img/vite.svg">
  <h1 class="mb-none">H1 with large icon</h1>
</div>
<div class="d-flex align-items-center mb-medium">
  <span class="hxl-lg-icon me-short si si-settings" aria-hidden="true"></span>
  <h1 class="mb-none">H1 with large icon</h1>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="root-size-scaled-var-ouds" file="scss/_root.scss" >}}

### Sass tokens

#### Raw tokens

Dimension raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-dimension" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Size semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-size" file="scss/tokens/_semantic.scss" >}}
