---
layout: docs
title: Typography
description: Documentation and examples for Boosted typography, including global settings, headings, body text, lists, and more.
group: content
aliases:
  - "/docs/content/typography/"
toc: true
---


| Design side                                           | Boosted side                                              |
| :---------------------------------------------------- | :-------------------------------------------------------- |
| Headline large - `ods.web.sys.font.headline.l`        | `.display-1`                                              |
| Headline medium - `ods.web.sys.font.headline.m`       | `.display-2`                                              |
| Headline small - `ods.web.sys.font.headline.s`        | `.display-3`                                              |
| Title large - `ods.web.sys.font.title.l`              | `h1` or `.h1`                                             |
| Title medium - `ods.web.sys.font.title.m`             | `h2` or `.h2`                                             |
| Title small - `ods.web.sys.font.title.s`              | `h3` or `.h3`                                             |
| Body large bold - `ods.web.sys.font.body.l.bold`      | `.body-lg.fw-bold` or `.lead.fw-bold`                     |
| Body large - `ods.web.sys.font.body.l`                | `.body-lg` or `.lead`                                     |
| Body medium bold - `ods.web.sys.font.body.m.bold`     | `.body-md.fw-bold`                                        |
| Body medium - `ods.web.sys.font.body.m`               | `.body-md`                                                |
| Body small bold - `ods.web.sys.font.body.s.bold`      | `.body-sm.fw-bold`                                        |
| Body small - `ods.web.sys.font.body.s`                | `.body-sm`                                                |
| Label large - `ods.web.sys.font.label.l`              | `label-lg.fw-bold`                                        |
| Label medium bold - `ods.web.sys.font.label.m.bold`   | `label-md.fw-bold` or `.lh-base.fw-bold`                  |
| Label medium - `ods.web.sys.font.label.m`             | `label-md` or `.lh-base`                                  |
| Label small bold - `ods.web.sys.font.label.s.bold`    | `label-sm.fw-bold` or `small.fw-bold` or `.small.fw-bold` |
| Label small - `ods.web.sys.font.label.s`              | `label-sm` or `small` or `.small`                         |


## Global settings

Boosted sets basic global display, typography, and link styles. Please refer to [**our brand**]({{< param ods.web >}}) to use it carefully. When more control is needed, check out the [textual utility classes]({{< docsref "/utilities/text" >}}).

- Use **Helvetica Neue**, with Helvetica and Arial as preferred fallback.
- Then a [native font stack]({{< docsref "/content/reboot#native-font-stack" >}}) that selects the best `font-family` for each OS and device.
- For a more inclusive and accessible type scale, we use the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `$font-family-base`, `$font-size-base`, `$line-height-base` and `$letter-spacing-base` attributes as our typographic base applied to the `<body>`.
- Set the global link color via `$link-color`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<!-- Boosted mod -->
{{< bs-table >}}
| Heading | Desktop Size | Tablet Size | Mobile Size | Line Height <small class="text-body-secondary">Desktop</small> | Letter Spacing <small class="text-body-secondary">Desktop</small> |
| --- | --- | --- | --- | --- | --- |
| `<h1></h1>` | Bold 2.125rem <small class="text-body-secondary">(34px)</small> | Bold 2.125rem <small class="text-body-secondary">(34px)</small> | Bold 1.5rem <small class="text-body-secondary">(24px)</small> | 1 <small class="text-body-secondary">(34px)</small> | -0.0625rem <small class="text-body-secondary">(-1px)</small> |
| `<h2></h2>` | Bold 1.875rem <small class="text-body-secondary">(30px)</small> | Bold 1.5rem <small class="text-body-secondary">(24px)</small> | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | 1.067 <small class="text-body-secondary">(32px)</small> | -0.05rem <small class="text-body-secondary">(-0.8px)</small> |
| `<h3></h3>` | Bold 1.5rem <small class="text-body-secondary">(24px)</small> | Bold 1.5rem <small class="text-body-secondary">(24px)</small> | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | 1.083 <small class="text-body-secondary">(26px)</small> | -0.03125rem <small class="text-body-secondary">(-0.5px)</small> |
| `<h4></h4>` | Bold 1.25rem <small class="text-body-secondary">(20px)</small> | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | Bold 1.125rem <small class="text-body-secondary">(16px)</small> | 1.1 <small class="text-body-secondary">(22px)</small> | -0.025rem <small class="text-body-secondary">(-0.4px)</small> |
| `<h5></h5>` | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | Bold 1rem <small class="text-body-secondary">(16px)</small> | 1.111 <small class="text-body-secondary">(20px)</small> | -0.0125rem <small class="text-body-secondary">(-0.2px)</small> |
| `<h6></h6>` | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | Bold 1.125rem <small class="text-body-secondary">(18px)</small> | Bold 1rem <small class="text-body-secondary">(16px)</small> | 1.111 <small class="text-body-secondary">(20px)</small> | -0.0125rem <small class="text-body-secondary">(-0.2px)</small> |
{{< /bs-table >}}
<!-- End mod -->

```html
<h1>h1. Boosted heading</h1>
<h2>h2. Boosted heading</h2>
<h3>h3. Boosted heading</h3>
<h4>h4. Boosted heading</h4>
<h5>h5. Boosted heading</h5>
<h6>h6. Boosted heading</h6>
```

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

{{< example >}}
<p class="display-1">display-1. Headline</p>
<p class="display-2">display-2. Headline</p>
<p class="display-3">display-3. Headline</p>
<p class="display-4">display-4. Headline</p>
<p class="display-5">display-5. Headline</p>
<p class="display-6">display-6. Headline</p>
<p class="h1 mb-0">h1. Boosted title</p>
<h1>h1. Boosted title</h1>
<p class="h2 mb-0">h2. Boosted title</p>
<h2>h2. Boosted title</h2>
<p class="h3 mb-0">h3. Boosted title</p>
<h3>h3. Boosted title</h3>
<p class="h4 mb-0">h4. Boosted title</p>
<h4>h4. Boosted title</h4>
<p class="h5 mb-0">h5. Boosted title</p>
<h5>h5. Boosted title</h5>
<p class="h6 mb-0">h6. Boosted title</p>
<h6>h6. Boosted title</h6>
<p class="body-lg fw-bold mb-0">.body-lg</p>
<p class="lead fw-bold">.body-lg (.lead)</p>
<p class="body-lg mb-0">.body-lg</p>
<p class="lead">.body-lg (.lead)</p>
<p class="body-md fw-bold">.body-md</p>
<p class="body-md">.body-md</p>
<p class="body-sm fw-bold">.body-sm</p>
<p class="body-sm">.body-sm</p>
<p class="label-lg fw-bold">.label-lg</p>
<p class="label-md fw-bold mb-0">.label-md</p>
<p class="lh-base fw-bold">.label-md (.lh-base)</p>
<p class="label-md mb-0">.label-md</p>
<p class="lh-base">.label-md (.lh-base)</p>
<p class="label-sm fw-bold mb-0">.label-sm</p>
<small class="fw-bold">.label-sm</small>
<p class="small fw-bold">.label-sm</p>
<p class="label-sm mb-0">.label-sm</p>
<small>.label-sm</small>
<p class="small">.label-sm</p>
{{< /example >}}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Boosted 3.

{{< example >}}
<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>
{{< /example >}}

## Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

<!-- Boosted mod -->
<table class="table">
  <thead>
    <tr>
    <th scope="col">Display size</th>
    <th scope="col">Desktop size</th>
    <th scope="col">Tablet size</th>
    <th scope="col">Mobile size</th>
    <th scope="col">
        Line height
        <small class="text-body-secondary">Desktop</small>
    </th>
    <th scope="col">
        Letter spacing
        <small class="text-body-secondary">Desktop</small>
    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Display 1</td>
      <td>Bold 3.75rem <small class="text-body-secondary">(60px)</small></td>
      <td>Bold 3.125rem <small class="text-body-secondary">(50px)</small></td>
      <td>Bold 1.875rem <small class="text-body-secondary">(30px)</small></td>
      <td>1 <small class="text-body-secondary">(60px)</small></td>
      <td>-0.125rem <small class="text-body-secondary">(-2px)</small></td>
    </tr>
    <tr>
      <td>Display 2</td>
      <td>Bold 3.125rem <small class="text-body-secondary">(50px)</small></td>
      <td>Bold 2.5rem <small class="text-body-secondary">(40px)</small></td>
      <td>Bold 1.5rem <small class="text-body-secondary">(24px)</small></td>
      <td>1 <small class="text-body-secondary">(50px)</small></td>
      <td>-0.1rem <small class="text-body-secondary">(-1.6px)</small></td>
    </tr>
    <tr>
      <td>Display 3</td>
      <td>Bold 2.5rem <small class="text-body-secondary">(40px)</small></td>
      <td>Bold 2.125rem <small class="text-body-secondary">(34px)</small></td>
      <td>Bold 1.5rem <small class="text-body-secondary">(24px)</small></td>
      <td>1 <small class="text-body-secondary">(40px)</small></td>
      <td>-0.0625rem <small class="text-body-secondary">(-1px)</small></td>
    </tr>
    <tr>
      <td>Display 4</td>
      <td>Bold 2.125rem <small class="text-body-secondary">(34px)</small></td>
      <td>Bold 1.5rem <small class="text-body-secondary">(24px)</small></td>
      <td>Bold 1.125rem <small class="text-body-secondary">(18px)</small></td>
      <td>1 <small class="text-body-secondary">(34px)</small></td>
      <td>-0.0625rem <small class="text-body-secondary">(-1px)</small></td>
    </tr>
  </tbody>
</table>
<!-- End mod -->

{{< example >}}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
{{< /example >}}

<!-- Boosted mod -->
Display headings are configured via two variables each — to set `font-size` and `letter-spacing` —  as well as a shared `$display-line-height`.
<!-- End mod -->

{{< scss-docs name="display-headings" file="scss/_variables.scss" >}}

<!-- Boosted mod -->
## Regular text

Since only [headings](#headings), [display headings](#display-headings) and `strong` text are meant to use **Bold** in main content, other contents should use regular font-weight.

<table class="table">
  <thead>
    <tr>
    <th scope="col">Font size</th>
    <th scope="col">Desktop size</th>
    <th scope="col">Tablet size</th>
    <th scope="col">Mobile size</th>
    <th scope="col">
        Line height
        <small class="text-body-secondary">Desktop</small>
    </th>
    <th scope="col">
        Letter spacing
        <small class="text-body-secondary">Desktop</small>
    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lead</td>
      <td>Regular 1.25rem <small class="text-body-secondary">(20px)</small></td>
      <td>Regular 1.125rem <small class="text-body-secondary">(18px)</small></td>
      <td>Regular 1rem <small class="text-body-secondary">(16px)</small></td>
      <td>1.5 <small class="text-body-secondary">(30px)</small></td>
      <td>-0.015625rem <small class="text-body-secondary">(-0.25px)</small></td>
    </tr>
    <tr>
      <td>Body copy</td>
      <td colspan="3">Regular 1rem <small class="text-body-secondary">(16px)</small></td>
      <td>1.5 <small class="text-body-secondary">(24px)</small></td>
      <td>-0.00625rem <small class="text-body-secondary">(-0.1px)</small></td>
    </tr>
    <tr>
      <td>Small</td>
      <td colspan="3">Regular .875rem <small class="text-body-secondary">(14px)</small></td>
      <td>1.143 <small class="text-body-secondary">(16px)</small></td>
      <td>-0.00625rem <small class="text-body-secondary">(-0.1px)</small></td>
    </tr>
  </tbody>
</table>
<!-- End mod -->

## Lead

Make a paragraph stand out by adding `.lead`.

{{< example >}}
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
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
- `<small>` represents side-comments and small print, like copyright and legal text.
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

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{< /example >}}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any HTML as the quote.

{{< example >}}
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
{{< /example >}}

### Naming a source

The HTML spec requires that blockquote attribution be placed outside the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g., `<p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well.

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
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

{{< example >}}
<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{< /example >}}

<!-- Boosted mod -->
## Links

Links in content are black and underlined. They adapt to their context otherwise, mainly in navigation components like [Navs & tabs]({{< docsref "/components/navs-tabs" >}}) or [Navbar]({{< docsref "/components/navbar" >}}).

### With chevron

Use our [link chevron helper]({{< docsref "/helpers/icon-link#link-chevron" >}}) to bold your link and enhance them with a chevron.
<!-- End mod -->

## Lists

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
{{< /example >}}

## Responsive font sizes

In Bootstrap 5, they enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the [RFS page]({{< docsref "/getting-started/rfs" >}}) to find out how this works.
**However in Boosted 5, RFS is disabled by default.**

## CSS

### Sass variables

<!-- Boosted mod: finer typography management -->
#### Headings

Headings have some dedicated variables for sizing and spacing.

{{< scss-docs name="headings-variables" file="scss/_variables.scss" >}}

#### Letter spacing

{{< scss-docs name="letter-spacing" file="scss/_variables.scss" >}}

#### Line height

{{< scss-docs name="line-height" file="scss/_variables.scss" >}}

#### Miscellaneous
<!-- End mod -->

Miscellaneous typography elements covered here and in [Reboot]({{< docsref "/content/reboot" >}}) also have dedicated variables.

{{< scss-docs name="type-variables" file="scss/_variables.scss" >}}

<!-- Boosted mod: not using RFS -->
