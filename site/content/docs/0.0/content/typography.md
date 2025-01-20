---
layout: docs
title: Typography
description: Documentation and examples for OUDS Web typography, including global settings, headings, body text, <!--lists, -->and more.
group: content
aliases:
  - "/docs/content/typography/"
toc: true
---

## Global settings

OUDS Web sets basic global display, typography<!--, and link styles-->. When more control is needed, check out the [textual utility classes]({{< docsref "/utilities/text" >}}).

- Use a [native font stack]({{< docsref "/content/reboot#native-font-stack" >}}) that selects the best `font-family` for each OS and device.
- For a more inclusive and accessible type scale, we use the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `:root` children.
- Use `max-width` on all font references for readability reasons. If you want to get rid of the `max-width`, please make sure to use our `.mw-none` [width utility]({{< docsref "/utilities/sizing" >}}).
<!-- - Set the global link color via `$link-color`. -->
- Use `$body-bg` to set a `background-color` on the `:root` children (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

{{< callout info >}}
If you need need to include a font reference inside a custom component, please refer to our [font mixin section](#sass-mixins).
{{< /callout >}}

## Headings

All HTML headings, `<h1>` through `<h6>`, are available. Each class sets `font-size` but also `line-height`, `letter-spacing`, `font-weight: bold`, and `max-width`. Here are the associated `font-size`s depending on the breakpoints. If you want to get rid of the `max-width`, please make sure to use our `.mw-none` [width utility]({{< docsref "/utilities/sizing" >}}).

{{< bs-table >}}
| Heading reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Heading xlarge (`<h1></h1>`) | `1.75rem` (28px) | `2.25rem` (36px) | `2.5rem` (40px) |
| Heading large (`<h2></h2>`) | `1.5rem` (24px) | `1.75rem` (28px) | `2rem` (32px) |
| Heading medium (`<h3></h3>`) | `1.25rem` (20px) | `1.5rem` (24px) | `1.75rem` (28px) |
| Heading small (`<h4></h4>`) | `1.125rem` (18px) | `1.25rem` (20px) | `1.5rem` (24px) |
| Body large (`<h5></h5>`) | `1rem` (16px) | `1.125rem` (18px) | `1.25rem` (20px) |
| Body medium (`<h6></h6>`) | `1rem` (16px) | `1rem` (16px) | `1.125rem` (18px) |
{{< /bs-table >}}

<details class="mb-medium">
  <summary>See more details about the heading classes</summary>

{{< bs-table >}}
| Heading reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Heading xlarge (`<h1></h1>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.25rem</b></li><li><code>line-height</code>: 1.2222</li><li><code>letter-spacing</code>: -.0225rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 65rem</li></ul> |
| Heading large (`<h2></h2>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2rem</b></li><li><code>line-height</code>: 1.25</li><li><code>letter-spacing</code>: -0.02rem</li><li><code>max-width</code>: 65rem</li></ul> |
| Heading medium (`<h3></h3>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.25rem</b></li><li><code>line-height</code>: 1.4</li><li><code>letter-spacing</code>: 0</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.75rem</b></li><li><code>line-height</code>: 1.2857</li><li><code>letter-spacing</code>: -0.0175rem</li><li><code>max-width</code>: 65rem</li></ul> |
| Heading small (`<h4></h4>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.25rem</b></li><li><code>line-height</code>: 1.4</li><li><code>letter-spacing</code>: 0</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.5rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: -0.0075rem</li><li><code>max-width</code>: 45rem</li></ul> |
| Body large (`<h5></h5>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.25rem</b></li><li><code>line-height</code>: 1.4</li><li><code>letter-spacing</code>: 0</li><li><code>max-width</code>: 45rem</li></ul> |
| Body medium (`<h6></h6>`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 45rem</li></ul> |
{{< /bs-table >}}

</details>

{{< example >}}
<h1>h1. OUDS Web heading</h1>
<h2>h2. OUDS Web heading</h2>
<h3>h3. OUDS Web heading</h3>
<h4>h4. OUDS Web heading</h4>
<h5>h5. OUDS Web heading</h5>
<h6>h6. OUDS Web heading</h6>
{{< /example >}}

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

{{< example >}}
<p class="h1">h1. OUDS Web heading</p>
<p class="h2">h2. OUDS Web heading</p>
<p class="h3">h3. OUDS Web heading</p>
<p class="h4">h4. OUDS Web heading</p>
<p class="h5">h5. OUDS Web heading</p>
<p class="h6">h6. OUDS Web heading</p>
{{< /example >}}

You can easily add an icon with your font reference using [our icon helper]({{< docsref "/helpers/icon" >}}).

<!-- OUDS mod: No customizing heading -->

## Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

We provide `.display-*` from `1` through `3`. Each class sets `font-size` but also `line-height`, `letter-spacing`, `font-weight: bold`, and `max-width`. If you want to get rid of the `max-width`, please make sure to use our `.mw-none` [width utility]({{< docsref "/utilities/sizing" >}}). Here are the associated `font-size`s depending on the breakpoints.

{{< bs-table >}}
| Display reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Display large (`.display-large`) | `2.5rem` (40px) | `4rem` (64px) | `4.5rem` (72px) |
| Display medium (`.display-medium`) | `2.25rem` (36px) | `3rem` (48px) | `3.5rem` (56px) |
| Display small (`.display-small`) | `2rem` (32px) | `2.5rem` (40px) | `3rem` (48px) |
{{< /bs-table >}}

<details class="mb-medium">
  <summary>See more details about the `.display` classes</summary>

{{< bs-table >}}
| Display reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Display large (`.display-large`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>4rem</b></li><li><code>line-height</code>: 1.125</li><li><code>letter-spacing</code>: -0.06rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>4.5rem</b></li><li><code>line-height</code>: 1.1111</li><li><code>letter-spacing</code>: -0.0675rem</li><li><code>max-width</code>: 65rem</li></ul> |
| Display medium (`.display-medium`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.25rem</b></li><li><code>line-height</code>: 1.2222</li><li><code>letter-spacing</code>: -0.0225rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3rem</b></li><li><code>line-height</code>: 1.1667</li><li><code>letter-spacing</code>: -0.0375rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3.5rem</b></li><li><code>line-height</code>: 1.1429</li><li><code>letter-spacing</code>: -0.04375rem</li><li><code>max-width</code>: 65rem</li></ul> |
| Display small (`.display-small`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2rem</b></li><li><code>line-height</code>: 1.25</li><li><code>letter-spacing</code>: -0.02rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>2.5rem</b></li><li><code>line-height</code>: 1.2</li><li><code>letter-spacing</code>: -0.025rem</li><li><code>max-width</code>: 55rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>3rem</b></li><li><code>line-height</code>: 1.1667</li><li><code>letter-spacing</code>: -0.0375rem</li><li><code>max-width</code>: 65rem</li></ul> |
{{< /bs-table >}}

</details>

<div class="bd-example">
  <div class="display-large pb-tall mb-tall border-bottom">Display large</div>
  <div class="display-medium pb-tall mb-tall border-bottom">Display medium</div>
  <div class="display-small">Display small</div>
</div>

```html
<h1 class="display-large">Display large</h1>
<h1 class="display-medium">Display medium</h1>
<h1 class="display-small">Display small</h1>
```

Display headings are configured via the `$display-font-sizes` Sass map and the variable `$display-font-weight`.

Display headings are customizable via three variables, `$display-font-family`, `$display-font-style` and `$display-line-height`.

{{< bootstrap-compatibility >}}

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

<div class="bd-example">
  <div class="display-1 pb-3 mb-3 border-bottom">Display 1</div>
  <div class="display-2 pb-3 mb-3 border-bottom">Display 2</div>
  <div class="display-3 pb-3 mb-3 border-bottom">Display 3</div>
  <div class="display-4 pb-3 mb-3 border-bottom">Display 4</div>
  <div class="display-5 pb-3 mb-3 border-bottom">Display 5</div>
  <div class="display-6">Display 6</div>
</div>

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

Display headings are configured via the `$display-font-sizes` Sass map and two variables, `$display-font-weight` and `$display-line-height`.

Display headings are customizable via two variables, `$display-font-family` and `$display-font-style`.

{{< /bootstrap-compatibility >}}

{{< scss-docs name="display-headings" file="scss/_variables.scss" >}}

## Regular texts

Since only [headings](#headings), [display headings](#display-headings) and `strong` text are meant to use **Bold** in main content, other contents should use `normal` font-weight. Each class sets `font-size` but also `line-height`, `letter-spacing`, and `max-width`. If you want to get rid of the `max-width`, please make sure to use our `.mw-none` [width utility]({{< docsref "/utilities/sizing" >}}). Here are the associated `font-size`s depending on the breakpoints. See our [Font utilities]({{< docsref "/utilities/text#font-size" >}}).

{{< callout info >}}
Body medium is set by default on `:root` children but we don't set the `max-width` property for usability reasons.
{{< /callout >}}

{{< bs-table >}}
| Regular text reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Body large (`.lead`) | `1rem` (16px) | `1rem` (16px) | `1.125rem` (18px) |
| Body medium (default `<p>`) | `.875rem` (14px) | `.875rem` (14px) | `1rem` (16px) |
| Body small (`.small`) | `.75rem` (12px) | `.75rem` (12px) | `.875rem` (14px) |
{{< /bs-table >}}

<details class="mb-medium">
  <summary>See more details about the regular text classes</summary>

{{< bs-table >}}
| Regular text reference | Values from `2xs` to `sm` | Values from `md` to `lg` | Values for `xl` and upper |
| --- | --- | --- | --- |
| Body large (`.lead`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1.125rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 45rem</li></ul> |
| Body medium (default) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>1rem</b></li><li><code>line-height</code>: 1.5</li><li><code>letter-spacing</code>: 0.0125rem</li><li><code>max-width</code>: 45rem</li></ul> |
| Body small (`.small`) | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.75rem</b></li><li><code>line-height</code>: 1.3333</li><li><code>letter-spacing</code>: 0.01125rem</li><li><code>max-width</code>: 40rem</li></ul> | <ul class="mb-none ps-medium"><li><code class="text-default">font-size</code>: <b>.875rem</b></li><li><code>line-height</code>: 1.4286</li><li><code>letter-spacing</code>: 0.010625rem</li><li><code>max-width</code>: 45rem</li></ul> |
{{< /bs-table >}}

</details>

You can easily add an icon with your font reference using [our icon helper]({{< docsref "/helpers/icon" >}}).

### Lead

Make a paragraph stand out by adding `.lead`. It uses [Regular text](#regular-texts) body large.

{{< example >}}
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
{{< /example >}}

### Small

Render a paragraph with a small `font-size` by adding `.small` or use `<small>`. It uses [Regular text](#regular-texts) body small.

{{< example >}}
<p>
  <small>This is a small paragraph.</small>
</p>
<p class="small">
  This is a small paragraph.
</p>
{{< /example >}}

## Inline text elements

Styling for common inline HTML5 elements.

{{< example >}}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as bold text too,</em> but would natively be italicized.</p>
{{< /example >}}

Beware that those tags should be used for semantic purpose:

- `<mark>` represents text which is marked or highlighted for reference or notation purposes.
- `<small>` represents side-comments and small print, like copyright and legal text. It uses [Regular text](#regular-texts) body small.
- `<s>` represents element that are no longer relevant or no longer accurate.
- `<u>` represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.

If you want to style your text, you should use the following classes instead:

- `.mark` will apply the same styles as `<mark>`.
- `.small` will apply the same styles as `<small>`.
- `.text-decoration-underline` will apply the same styles as `<u>`.
- `.text-decoration-line-through` will apply the same styles as `<s>`.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance, while `<i>` is mostly for voice, technical terms, etc.

## Text utilities

Change text alignment, transform, style, weight, line-height, decoration and color with our [text utilities]({{< docsref "/utilities/text" >}}) and [color utilities]({{< docsref "/utilities/colors" >}}).

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
{{< /example >}}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any HTML as the quote. It uses [Regular text](#regular-texts) body large.

{{< example >}}
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
{{< /example >}}

### Naming a source

The HTML spec requires that blockquote attribution be placed outside the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g., `<p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well. It uses [Regular text](#regular-texts) body small.

{{< example >}}
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

### Alignment

Use text utilities as needed to change the alignment of your blockquote.

{{< example >}}
<figure class="text-center">
  <blockquote class="blockquote">
    <p class="mx-auto">A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer mx-auto">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

{{< example >}}
<figure class="text-end">
  <blockquote class="blockquote">
    <p class="ms-auto">A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer ms-auto">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

<!-- ## Links

Links in content are black and underlined. They adapt to their context otherwise, mainly in navigation components like [Navs & tabs]({{< docsref "/components/navs-tabs" >}}) or [Navbar]({{< docsref "/components/navbar" >}}).

### With chevron

Use our [link chevron helper]({{< docsref "/helpers/icon-link#link-chevron" >}}) to bold your link and enhance them with a chevron. -->

<!-- ## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{{< example >}}
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{{< /example >}}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
{{< /example >}}

### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{{< example >}}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
{{< /example >}} -->

## CSS

### Variables

{{< scss-docs name="root-font-variables-ouds" file="scss/_root.scss" >}}

### Sass tokens

#### Raw tokens

Font raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-font" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Font semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-font" file="scss/tokens/_semantic.scss" >}}

#### Semantic tokens

Font semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-font" file="scss/tokens/_semantic.scss" >}}

### Sass maps

The typography utilities are declared through this map and generated using our utilities API. Please refer to [our text utility page]({{< docsref "/utilities/text" >}}) for more information.

{{< scss-docs name="ouds-maps-font" file="scss/_maps.scss" >}}

### Sass mixins

We provide a dedicated mixin for font reference. For instance, the mixin is `get-font-size($font-size-ref)`.

{{< scss-docs name="ouds-mixin-font" file="scss/mixins/_fonts.scss" >}}

Whenever you need a font reference inside a custom component or for whatever reason, please follow the same process as us, so you don't miss any information about a font reference.

{{< scss-docs name="ouds-font-implementation" file="scss/_reboot.scss" >}}
