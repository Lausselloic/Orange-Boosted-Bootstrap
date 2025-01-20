---
layout: docs
title: Migrating to recent versions
description: Track and review changes to the OUDS Web source files, documentation, and components to help you migrate from previous versions.
group: migration
aliases:
  - "/migration/"
  - "/docs/migration/"
toc: true
---

## v0.0.4

### Content styles

#### Default styles

- <span class="badge text-bg-status-positive-emphasized">New</span> Default styles have be added to HTML elements:
  - Default guidelines that guide our choices like spacing units, text `max-width`, or avoiding `margin-top`
  - `box-sizing: border-box` set on every element
  - Default font parameters using native font stack
  - Default `background-color`

#### Typography

- <span class="badge text-bg-status-positive-emphasized">New</span> All typography global settings have been set for:
  - Headings
  - Display headings
  - Regular texts
  - Inline text elements (`<mark>`, `<del>`, `<s>`, `<ins>`, `<u>`, `<small>`, `<strong>`, `<em>`, `<abbr>`, `<hr>`, `<var>`, `<kbd>`, `<samp>`, `<address>`)
  - Code parts (inline, blocks)
  - Abbreviations (`<abbr>`)
  - Blockquotes
  - Summaries (`<summary>`)
  - Hidden elements

### Layout

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive flexbox grid system is now available with eight default responsive tiers defined at breakpoints `2xs`, `xs`, `sm`, `md`, `xl`, `2xl`, and `3xl`.
  - Container class: `.container-fluid`
  - Limiting class: `.container-max-width`
  - Row system with `.row`
  - Column system with classes: `.col-{number}`, `.col-{breakpoint}-{number}`,  and `.offset-{breakpoint}-{number}`
  - Row columns classes: `.row-cols-{number}`

<span class="badge text-bg-status-positive-emphasized">New</span> Responsive CSS grid classes: `.g-col-{breakpoint}-{number}`.

### Helpers

#### Icon

- <span class="badge text-bg-status-positive-emphasized">New</span> Icons' sizes utilities are now available to help choose the right icon size with a specific typography reference:
  - Responsive icons' sizes in headings:
    - `.h{size}-short-icon`, `.h{size}-medium-icon`, `.h{size}-tall-icon`, where `h` stands for heading and size is one of `s` for small, `m` for medium, `l` for large, or `xl` for x-large
    - `.b{size}-short-icon`, `.b{size}-medium-icon`, , `.h{size}-tall-icon`, where `b` stands for body and size is one of `m` for medium, or `l` for large
  - Responsive icons' sizes in regular texts: `.b{size}-short-icon`, `.b{size}-medium-icon`, `.b{size}-tall-icon`, where `b` stands for body and  size is one of `s` for small, `m` for medium, or `l` for large
  - Fixed icons' sizes for decorative standalone icons: `.decorative-{size}-icon` where size is one of `shortest|shorter|short|medium|tall|taller|tallest`

#### Position

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive sticky helpers: `.sticky-{value}`, and `.sticky-{breakpoint}-{value}` where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`, and `value` is in `top|bottom`.

### Utilities

#### API

- <span class="badge text-bg-status-positive-emphasized">New</span> The `responsive` option is now available in the API to indicate if responsive classes should be generated.

#### Border

- <span class="badge text-bg-status-positive-emphasized">New</span> Border operative utilities: `.border`, `.border-none`, `.border-top`, `.border-top-none`, `.border-bottom`, `.border-bottom-none`, `.border-start`, `.border-start-none`, `.border-end` and `.border-end-none`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border width utilities: `.border-none`, `.border-thin`, `.border-medium`, `.border-thick`, and `.border-thicker`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border radius utilities with all sizes:
  - **Default**: `.rounded`, `.rounded-top`, `.rounded-bottom`, `.rounded-start` and `.rounded-end`.
  - **None**: `.rounded-none`, `.rounded-top-none`, `.rounded-bottom-none`, `.rounded-start-none` and `.rounded-end-none`.
  - **Short**: `.rounded-short`, `.rounded-top-short`, `.rounded-bottom-short`, `.rounded-start-short` and `.rounded-end-short`.
  - **Medium**: `.rounded-medium`, `.rounded-top-medium`, `.rounded-bottom-medium`, `.rounded-start-medium` and `.rounded-end-medium`.
  - **Tall**: `.rounded-tall`, `.rounded-top-tall`, `.rounded-bottom-tall`, `.rounded-start-tall` and `.rounded-end-tall`.
  - **Circle**: `.rounded-circle`, `.rounded-top-circle`, `.rounded-bottom-circle`, `.rounded-start-circle` and `.rounded-end-circle`.
  - **Pill**: `.rounded-pill`, `.rounded-top-pill`, `.rounded-bottom-pill`, `.rounded-start-pill` and `.rounded-end-pill`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border style utilities: `.border-drag`.

#### Display

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive display utilities: `.d-{value}`, `.d-{breakpoint}-{value}` where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`, and `value` is in `none|inline|inline-block|block|grid|inline-grid|table|table-cell|table-row|flex|inline-flex`.

#### Flex

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive flex utilities without `breakpoint` for `2xs`, and where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`:
  `.d-{breakpoint}-flex`, `.d-{breakpoint}-inline-flex`, `.flex-{breakpoint}-{row|column}`, `.flex-{breakpoint}-{row|column}-reverse`, `.justify-content-{breakpoint}-{start|end|center|between|around|evenly}`, `.align-items-{breakpoint}-{start|end|center|baseline|stretch}`, `.align-self-{breakpoint}-{start|end|center|baseline|stretch}`, `.flex-{breakpoint}-fill`, `.flex-{breakpoint}-{grow|shrink}-{0|1}`, `.flex-{breakpoint}-{nowrap|wrap|wrap-reverse}`, `.order-{breakpoint}-{number}`, `.order-{breakpoint}-{first|last}` and `.align-content-{breakpoint}-{start|end|center|between|around|stretch}`.

#### Float

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive float utilities: `.float-{start|end|none}`, `.float-{breakpoint}-{start|end|none}` where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`.

#### Object fit

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive object fit utilities: `.object-fit-{contain|cover|fill|scale|none}`, `.object-fit-{breakpoint}-{contain|cover|fill|scale|none}` where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`.

#### Opacity

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Opacity utilities: `.opacity-emphasis` has been renamed to `.opacity-strong` and `.opacity-transparent` has been renamed `.opacity-invisible`.

#### Shadow

- <span class="badge text-bg-status-positive-emphasized">New</span> Shadows utilities:
  `.shadow-none`, `.shadow-raised`, `.shadow-drag`, `.shadow-default`, `.shadow-emphasized`, `.shadow-sticky-default`, `.shadow-sticky-emphasized` and `.shadow-sticky-navigation-scrolled`.

#### Sizing

- <span class="badge text-bg-status-positive-emphasized">New</span> Sizing utility `.mw-none` to set `max-width: none`. This utility is particularly useful to reset the `max-width` of our font references in some special cases.

#### Spacings

- <span class="badge text-bg-status-positive-emphasized">New</span> Fixed margin spacing utilities:
  - **None**: `.m-none`, `.mx-none`, `.my-none`, `.mt-none`, `.mb-none`, `.ms-none`, `.me-none`, `.m-xs-none`, etc...
  - **Smash**: `.m-smash`, `.mx-smash`, `.my-smash`, `.mt-smash`, `.mb-smash`, `.ms-smash`, `.me-smash`, `.m-xs-smash`, etc...
  - **Shortest**: `.m-shortest`, `.mx-shortest`, `.my-shortest`, `.mt-shortest`, `.mb-shortest`, `.ms-shortest`, `.me-shortest`, `.m-xs-shortest`, etc...
  - **Shorter**: `.m-shorter`, `.mx-shorter`, `.my-shorter`, `.mt-shorter`, `.mb-shorter`, `.ms-shorter`, `.me-shorter`, `.m-xs-shorter`, etc...
  - **Short**: `.m-short`, `.mx-short`, `.my-short`, `.mt-short`, `.mb-short`, `.ms-short`, `.me-short`, `.m-xs-short`, etc...
  - **Medium**: `.m-medium`, `.mx-medium`, `.my-medium`, `.mt-medium`, `.mb-medium`, `.ms-medium`, `.me-medium`, `.m-xs-medium`, etc...
  - **Tall**: `.m-tall`, `.mx-tall`, `.my-tall`, `.mt-tall`, `.mb-tall`, `.ms-tall`, `.me-tall`, `.m-xs-tall`, etc...
  - **Taller**: `.m-taller`, `.mx-taller`, `.my-taller`, `.mt-taller`, `.mb-taller`, `.ms-taller`, `.me-taller`, `.m-xs-taller`, etc...
  - **Tallest**: `.m-tallest`, `.mx-tallest`, `.my-tallest`, `.mt-tallest`, `.mb-tallest`, `.ms-tallest`, `.me-tallest`, `.m-xs-tallest`, etc...
  - **Spacious**: `.m-spacious`, `.mx-spacious`, `.my-spacious`, `.mt-spacious`, `.mb-spacious`, `.ms-spacious`, `.me-spacious`, `.m-xs-spacious`, etc...
  - **Huge**: `.m-huge`, `.mx-huge`, `.my-huge`, `.mt-huge`, `.mb-huge`, `.ms-huge`, `.me-huge`, `.m-xs-huge`, etc...
  - **Jumbo**: `.m-jumbo`, `.mx-jumbo`, `.my-jumbo`, `.mt-jumbo`, `.mb-jumbo`, `.ms-jumbo`, `.me-jumbo`, `.m-xs-jumbo`, etc...
  - **Auto**: `.m-auto`, `.mx-auto`, `.my-auto`, `.mt-auto`, `.mb-auto`, `.ms-auto`, `.me-auto`, `.m-xs-auto`, etc...

- <span class="badge text-bg-status-positive-emphasized">New</span> Scaled margin spacing utilities:
  - **None**: `.m-scaled-none`, `.mx-scaled-none`, `.my-scaled-none`, `.mt-scaled-none`, `.mb-scaled-none`, `.ms-scaled-none`, `.me-scaled-none`,
  - **Smash**: `.m-scaled-smash`, `.mx-scaled-smash`, `.my-scaled-smash`, `.mt-scaled-smash`, `.mb-scaled-smash`, `.ms-scaled-smash`, `.me-scaled-smash`,
  - **Shortest**: `.m-scaled-shortest`, `.mx-scaled-shortest`, `.my-scaled-shortest`, `.mt-scaled-shortest`, `.mb-scaled-shortest`, `.ms-scaled-shortest`, `.me-scaled-shortest`,
  - **Shorter**: `.m-scaled-shorter`, `.mx-scaled-shorter`, `.my-scaled-shorter`, `.mt-scaled-shorter`, `.mb-scaled-shorter`, `.ms-scaled-shorter`, `.me-scaled-shorter`,
  - **Short**: `.m-scaled-short`, `.mx-scaled-short`, `.my-scaled-short`, `.mt-scaled-short`, `.mb-scaled-short`, `.ms-scaled-short`, `.me-scaled-short`,
  - **Medium**: `.m-scaled-medium`, `.mx-scaled-medium`, `.my-scaled-medium`, `.mt-scaled-medium`, `.mb-scaled-medium`, `.ms-scaled-medium`, `.me-scaled-medium`,
  - **Tall**: `.m-scaled-tall`, `.mx-scaled-tall`, `.my-scaled-tall`, `.mt-scaled-tall`, `.mb-scaled-tall`, `.ms-scaled-tall`, `.me-scaled-tall`,
  - **Taller**: `.m-scaled-taller`, `.mx-scaled-taller`, `.my-scaled-taller`, `.mt-scaled-taller`, `.mb-scaled-taller`, `.ms-scaled-taller`, `.me-scaled-taller`,
  - **Tallest**: `.m-scaled-tallest`, `.mx-scaled-tallest`, `.my-scaled-tallest`, `.mt-scaled-tallest`, `.mb-scaled-tallest`, `.ms-scaled-tallest`, `.me-scaled-tallest`,
  - **Spacious**: `.m-scaled-spacious`, `.mx-scaled-spacious`, `.my-scaled-spacious`, `.mt-scaled-spacious`, `.mb-scaled-spacious`, `.ms-scaled-spacious`, `.me-scaled-spacious`

- <span class="badge text-bg-status-positive-emphasized">New</span> Fixed padding spacing utilities:
  - **None**: `.p-none`, `.px-none`, `.py-none`, `.pt-none`, `.pb-none`, `.ps-none`, `.pe-none`, `.p-xs-none`, etc...
  - **Smash**: `.p-smash`, `.px-smash`, `.py-smash`, `.pt-smash`, `.pb-smash`, `.ps-smash`, `.pe-smash`, `.p-xs-smash`, etc...
  - **Shortest**: `.p-shortest`, `.px-shortest`, `.py-shortest`, `.pt-shortest`, `.pb-shortest`, `.ps-shortest`, `.pe-shortest`, `.p-xs-shortest`, etc...
  - **Shorter**: `.p-shorter`, `.px-shorter`, `.py-shorter`, `.pt-shorter`, `.pb-shorter`, `.ps-shorter`, `.pe-shorter`, `.p-xs-shorter`, etc...
  - **Short**: `.p-short`, `.px-short`, `.py-short`, `.pt-short`, `.pb-short`, `.ps-short`, `.pe-short`, `.p-xs-short`, etc...
  - **Medium**: `.p-medium`, `.px-medium`, `.py-medium`, `.pt-medium`, `.pb-medium`, `.ps-medium`, `.pe-medium`, `.p-xs-medium`, etc...
  - **Tall**: `.p-tall`, `.px-tall`, `.py-tall`, `.pt-tall`, `.pb-tall`, `.ps-tall`, `.pe-tall`, `.p-xs-tall`, etc...
  - **Taller**: `.p-taller`, `.px-taller`, `.py-taller`, `.pt-taller`, `.pb-taller`, `.ps-taller`, `.pe-taller`, `.p-xs-taller`, etc...
  - **Tallest**: `.p-tallest`, `.px-tallest`, `.py-tallest`, `.pt-tallest`, `.pb-tallest`, `.ps-tallest`, `.pe-tallest`, `.p-xs-tallest`, etc...
  - **Spacious**: `.p-spacious`, `.px-spacious`, `.py-spacious`, `.pt-spacious`, `.pb-spacious`, `.ps-spacious`, `.pe-spacious`, `.p-xs-spacious`, etc...
  - **Huge**: `.p-huge`, `.px-huge`, `.py-huge`, `.pt-huge`, `.pb-huge`, `.ps-huge`, `.pe-huge`, `.p-xs-huge`, etc...
  - **Jumbo**: `.p-jumbo`, `.px-jumbo`, `.py-jumbo`, `.pt-jumbo`, `.pb-jumbo`, `.ps-jumbo`, `.pe-jumbo`, `.p-xs-jumbo`, etc...

- <span class="badge text-bg-status-positive-emphasized">New</span> Scaled padding spacing utilities:
  - **None**: `.p-scaled-none`, `.px-scaled-none`, `.py-scaled-none`, `.pt-scaled-none`, `.pb-scaled-none`, `.ps-scaled-none`, `.pe-scaled-none`,
  - **Smash**: `.p-scaled-smash`, `.px-scaled-smash`, `.py-scaled-smash`, `.pt-scaled-smash`, `.pb-scaled-smash`, `.ps-scaled-smash`, `.pe-scaled-smash`,
  - **Shortest**: `.p-scaled-shortest`, `.px-scaled-shortest`, `.py-scaled-shortest`, `.pt-scaled-shortest`, `.pb-scaled-shortest`, `.ps-scaled-shortest`, `.pe-scaled-shortest`,
  - **Shorter**: `.p-scaled-shorter`, `.px-scaled-shorter`, `.py-scaled-shorter`, `.pt-scaled-shorter`, `.pb-scaled-shorter`, `.ps-scaled-shorter`, `.pe-scaled-shorter`,
  - **Short**: `.p-scaled-short`, `.px-scaled-short`, `.py-scaled-short`, `.pt-scaled-short`, `.pb-scaled-short`, `.ps-scaled-short`, `.pe-scaled-short`,
  - **Medium**: `.p-scaled-medium`, `.px-scaled-medium`, `.py-scaled-medium`, `.pt-scaled-medium`, `.pb-scaled-medium`, `.ps-scaled-medium`, `.pe-scaled-medium`,
  - **Tall**: `.p-scaled-tall`, `.px-scaled-tall`, `.py-scaled-tall`, `.pt-scaled-tall`, `.pb-scaled-tall`, `.ps-scaled-tall`, `.pe-scaled-tall`,
  - **Taller**: `.p-scaled-taller`, `.px-scaled-taller`, `.py-scaled-taller`, `.pt-scaled-taller`, `.pb-scaled-taller`, `.ps-scaled-taller`, `.pe-scaled-taller`,
  - **Tallest**: `.p-scaled-tallest`, `.px-scaled-tallest`, `.py-scaled-tallest`, `.pt-scaled-tallest`, `.pb-scaled-tallest`, `.ps-scaled-tallest`, `.pe-scaled-tallest`,
  - **Spacious**: `.p-scaled-spacious`, `.px-scaled-spacious`, `.py-scaled-spacious`, `.pt-scaled-spacious`, `.pb-scaled-spacious`, `.ps-scaled-spacious`, `.pe-scaled-spacious`

- <span class="badge text-bg-status-positive-emphasized">New</span> Fixed gap spacing utilities:
  - **None**: `.gap-none`, `.row-gap-none`, `.column-gap-none`, `.gap-xs-none`, etc...
  - **Smash**: `.gap-smash`, `.row-gap-smash`, `.column-gap-smash`, `.gap-xs-smash`, etc...
  - **Shortest**: `.gap-shortest`, `.row-gap-shortest`, `.column-gap-shortest`, `.gap-xs-shortest`, etc...
  - **Shorter**: `.gap-shorter`, `.row-gap-shorter`, `.column-gap-shorter`, `.gap-xs-shorter`, etc...
  - **Short**: `.gap-short`, `.row-gap-short`, `.column-gap-short`, `.gap-xs-short`, etc...
  - **Medium**: `.gap-medium`, `.row-gap-medium`, `.column-gap-medium`, `.gap-xs-medium`, etc...
  - **Tall**: `.gap-tall`, `.row-gap-tall`, `.column-gap-tall`, `.gap-xs-tall`, etc...
  - **Taller**: `.gap-taller`, `.row-gap-taller`, `.column-gap-taller`, `.gap-xs-taller`, etc...
  - **Tallest**: `.gap-tallest`, `.row-gap-tallest`, `.column-gap-tallest`, `.gap-xs-tallest`, etc...
  - **Spacious**: `.gap-spacious`, `.row-gap-spacious`, `.column-gap-spacious`, `.gap-xs-spacious`, etc...
  - **Huge**: `.gap-huge`, `.row-gap-huge`, `.column-gap-huge`, `.gap-xs-huge`, etc...
  - **Jumbo**: `.gap-jumbo`, `.row-gap-jumbo`, `.column-gap-jumbo`, `.gap-xs-jumbo`, etc...

- <span class="badge text-bg-status-positive-emphasized">New</span> Scaled gap spacing utilities:
  - **None**: `.gap-scaled-none`, `.row-gap-scaled-none`, `.column-gap-scaled-none`
  - **Smash**: `.gap-scaled-smash`, `.row-gap-scaled-smash`, `.column-gap-scaled-smash`
  - **Shortest**: `.gap-scaled-shortest`, `.row-gap-scaled-shortest`, `.column-gap-scaled-shortest`
  - **Shorter**: `.gap-scaled-shorter`, `.row-gap-scaled-shorter`, `.column-gap-scaled-shorter`
  - **Short**: `.gap-scaled-short`, `.row-gap-scaled-short`, `.column-gap-scaled-short`
  - **Medium**: `.gap-scaled-medium`, `.row-gap-scaled-medium`, `.column-gap-scaled-medium`
  - **Tall**: `.gap-scaled-tall`, `.row-gap-scaled-tall`, `.column-gap-scaled-tall`
  - **Taller**: `.gap-scaled-taller`, `.row-gap-scaled-taller`, `.column-gap-scaled-taller`
  - **Tallest**: `.gap-scaled-tallest`, `.row-gap-scaled-tallest`, `.column-gap-scaled-tallest`
  - **Spacious**: `.gap-scaled-spacious`, `.row-gap-scaled-spacious`, `.column-gap-scaled-spacious`

#### Text

- <span class="badge text-bg-status-positive-emphasized">New</span> Alignment text utilities: `.text-start`, `.text-center`, `.text-end`, and responsive versions like `.text-{breakpoint}-{start|center|end}` where `breakpoint` is in `xs|sm|md|lg|xl|2xl|3xl`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Wrapping and overflow text utilities: `.text-wrap` and `.text-nowrap`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Word break text utility: `.text-break`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Text transform text utilities: `.text-lowercase`, `.text-uppercase`, and `.text-capitalize`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Font size text utilities:
  - **Display headings**: `.fs-dl`, `.fs-dm`, `.fs-ds`
  - **Headings**: `.fs-hxl`, `.fs-hl`, `.fs-hm`, `.fs-hs`
  - **Body**: `.fs-bl`, `.fs-bm`, `.fs-bs`
  - **Code**: `.fs-cm`, `.fs-cs`

- <span class="badge text-bg-status-positive-emphasized">New</span> Font weight text utilities: `.fw-normal` and `.fw-bold`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Text decoration utilities: `.text-decoration-underline`, `.text-decoration-line-through`, and `.text-decoration-none`.

### Examples

- <span class="badge text-bg-status-positive-emphasized">New</span> New [Font example]({{< docsref "/examples/font" >}}).

- <span class="badge text-bg-status-positive-emphasized">New</span> New [Grid example]({{< docsref "/examples/grid" >}}).

- <span class="badge text-bg-status-positive-emphasized">New</span> New [Grid system example]({{< docsref "/examples/grid-system" >}}).

### CSS and Sass variables

- <span class="badge text-bg-status-positive-emphasized">New</span> A new file containing composite tokens has been added. If you were using the Sass compilation, you must import the new Sass file between the semantic and component files.

  <details class="mb-tall">
    <summary>See the new import stack</summary>

    ```diff
    + @import "config";
      @import "functions";
      @import "tokens/raw";
      @import "tokens/semantic";
    + @import "tokens/semantic-colors-custom-props";
    + @import "tokens/composite";
      @import "tokens/component";
    ```
  </details>

- <span class="badge text-bg-status-positive-emphasized">New</span> `$enable-container-classes` to enable or disable the generation of CSS classes for the grid system (e.g. `.row`, `.col-md-1`, etc.).

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass variables:</summary>
    <ul>
      <li><code>$enable-container-classes</code></li>
      <li><code>$grid-columns</code></li>
      <li><code>$grid-gutter-width</code></li>
      <li><code>$grid-row-columns</code></li>
      <li><code>$ouds-border-base</code></li>
      <li><code>$ouds-border-radius-0</code></li>
      <li><code>$ouds-border-radius-75</code></li>
      <li><code>$ouds-border-radius-150</code></li>
      <li><code>$ouds-border-radius-300</code></li>
      <li><code>$ouds-border-radius-9999</code></li>
      <li><code>$ouds-border-radius-default</code></li>
      <li><code>$ouds-border-radius-medium</code></li>
      <li><code>$ouds-border-radius-none</code></li>
      <li><code>$ouds-border-radius-pill</code></li>
      <li><code>$ouds-border-radius-short</code></li>
      <li><code>$ouds-border-radius-tall</code></li>
      <li><code>$ouds-border-style-dashed</code></li>
      <li><code>$ouds-border-style-default</code></li>
      <li><code>$ouds-border-style-drag</code></li>
      <li><code>$ouds-border-style-solid</code></li>
      <li><code>$ouds-border-width-0</code></li>
      <li><code>$ouds-border-width-25</code></li>
      <li><code>$ouds-border-width-50</code></li>
      <li><code>$ouds-border-width-75</code></li>
      <li><code>$ouds-border-width-100</code></li>
      <li><code>$ouds-border-width-125</code></li>
      <li><code>$ouds-border-width-default</code></li>
      <li><code>$ouds-border-width-medium</code></li>
      <li><code>$ouds-border-width-none</code></li>
      <li><code>$ouds-border-width-thick</code></li>
      <li><code>$ouds-border-width-thicker</code></li>
      <li><code>$ouds-border-width-thin</code></li>
      <li><code>$ouds-dimension-0</code></li>
      <li><code>$ouds-dimension-100</code></li>
      <li><code>$ouds-dimension-1000</code></li>
      <li><code>$ouds-dimension-1200</code></li>
      <li><code>$ouds-dimension-1400</code></li>
      <li><code>$ouds-dimension-150</code></li>
      <li><code>$ouds-dimension-1600</code></li>
      <li><code>$ouds-dimension-1800</code></li>
      <li><code>$ouds-dimension-200</code></li>
      <li><code>$ouds-dimension-25</code></li>
      <li><code>$ouds-dimension-250</code></li>
      <li><code>$ouds-dimension-300</code></li>
      <li><code>$ouds-dimension-350</code></li>
      <li><code>$ouds-dimension-400</code></li>
      <li><code>$ouds-dimension-450</code></li>
      <li><code>$ouds-dimension-50</code></li>
      <li><code>$ouds-dimension-500</code></li>
      <li><code>$ouds-dimension-550</code></li>
      <li><code>$ouds-dimension-600</code></li>
      <li><code>$ouds-dimension-650</code></li>
      <li><code>$ouds-dimension-700</code></li>
      <li><code>$ouds-dimension-75</code></li>
      <li><code>$ouds-dimension-750</code></li>
      <li><code>$ouds-dimension-800</code></li>
      <li><code>$ouds-dimension-900</code></li>
      <li><code>$ouds-dimension-base</code></li>
      <li><code>$ouds-elevation-blur-0</code></li>
      <li><code>$ouds-elevation-blur-200</code></li>
      <li><code>$ouds-elevation-blur-300</code></li>
      <li><code>$ouds-elevation-blur-400</code></li>
      <li><code>$ouds-elevation-blur-600</code></li>
      <li><code>$ouds-elevation-blur-default</code></li>
      <li><code>$ouds-elevation-blur-drag</code></li>
      <li><code>$ouds-elevation-blur-emphasized</code></li>
      <li><code>$ouds-elevation-blur-none</code></li>
      <li><code>$ouds-elevation-blur-raised</code></li>
      <li><code>$ouds-elevation-blur-sticky-default</code></li>
      <li><code>$ouds-elevation-blur-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-blur-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-color-default-dark</code></li>
      <li><code>$ouds-elevation-color-default-light</code></li>
      <li><code>$ouds-elevation-color-drag-dark</code></li>
      <li><code>$ouds-elevation-color-drag-light</code></li>
      <li><code>$ouds-elevation-color-emphasized-dark</code></li>
      <li><code>$ouds-elevation-color-emphasized-light</code></li>
      <li><code>$ouds-elevation-color-none-dark</code></li>
      <li><code>$ouds-elevation-color-none-light</code></li>
      <li><code>$ouds-elevation-color-raised-dark</code></li>
      <li><code>$ouds-elevation-color-raised-light</code></li>
      <li><code>$ouds-elevation-color-sticky-default-dark</code></li>
      <li><code>$ouds-elevation-color-sticky-default-light</code></li>
      <li><code>$ouds-elevation-color-sticky-emphasized-dark</code></li>
      <li><code>$ouds-elevation-color-sticky-emphasized-light</code></li>
      <li><code>$ouds-elevation-color-sticky-navigation-scrolled-light</code></li>
      <li><code>$ouds-elevation-color-sticky-navigation-scrolled-dark</code></li>
      <li><code>$ouds-elevation-default</code></li>
      <li><code>$ouds-elevation-drag</code></li>
      <li><code>$ouds-elevation-emphasized</code></li>
      <li><code>$ouds-elevation-focus</code></li>
      <li><code>$ouds-elevation-none</code></li>
      <li><code>$ouds-elevation-raised</code></li>
      <li><code>$ouds-elevation-spread-0</code></li>
      <li><code>$ouds-elevation-spread-300</code></li>
      <li><code>$ouds-elevation-spread-drag</code></li>
      <li><code>$ouds-elevation-spread-n100</code></li>
      <li><code>$ouds-elevation-spread-n300</code></li>
      <li><code>$ouds-elevation-spread-none</code></li>
      <li><code>$ouds-elevation-spread-default</code></li>
      <li><code>$ouds-elevation-spread-emphasized</code></li>
      <li><code>$ouds-elevation-spread-raised</code></li>
      <li><code>$ouds-elevation-spread-sticky-default</code></li>
      <li><code>$ouds-elevation-spread-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-spread-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-sticky-default</code></li>
      <li><code>$ouds-elevation-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-x-0</code></li>
      <li><code>$ouds-elevation-x-drag</code></li>
      <li><code>$ouds-elevation-x-none</code></li>
      <li><code>$ouds-elevation-x-default</code></li>
      <li><code>$ouds-elevation-x-emphasized</code></li>
      <li><code>$ouds-elevation-x-raised</code></li>
      <li><code>$ouds-elevation-x-sticky-default</code></li>
      <li><code>$ouds-elevation-x-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-x-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-y-0</code></li>
      <li><code>$ouds-elevation-y-100</code></li>
      <li><code>$ouds-elevation-y-200</code></li>
      <li><code>$ouds-elevation-y-300</code></li>
      <li><code>$ouds-elevation-y-500</code></li>
      <li><code>$ouds-elevation-y-drag</code></li>
      <li><code>$ouds-elevation-y-none</code></li>
      <li><code>$ouds-elevation-y-default</code></li>
      <li><code>$ouds-elevation-y-emphasized</code></li>
      <li><code>$ouds-elevation-y-raised</code></li>
      <li><code>$ouds-elevation-y-sticky-default</code></li>
      <li><code>$ouds-elevation-y-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-y-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-font-family</code></li>
      <li><code>$ouds-font-family-brand-default</code></li>
      <li><code>$ouds-font-family-monospace-stack</code></li>
      <li><code>$ouds-font-family-sans-serif-stack</code></li>
      <li><code>$ouds-font-letter-spacing-150</code></li>
      <li><code>$ouds-font-letter-spacing-200</code></li>
      <li><code>$ouds-font-letter-spacing-250</code></li>
      <li><code>$ouds-font-letter-spacing-300</code></li>
      <li><code>$ouds-font-letter-spacing-350</code></li>
      <li><code>$ouds-font-letter-spacing-450</code></li>
      <li><code>$ouds-font-letter-spacing-550</code></li>
      <li><code>$ouds-font-letter-spacing-650</code></li>
      <li><code>$ouds-font-letter-spacing-750</code></li>
      <li><code>$ouds-font-letter-spacing-850</code></li>
      <li><code>$ouds-font-letter-spacing-1050</code></li>
      <li><code>$ouds-font-letter-spacing-1250</code></li>
      <li><code>$ouds-font-letter-spacing-1450</code></li>
      <li><code>$ouds-font-letter-spacing-1850</code></li>
      <li><code>$ouds-font-letter-spacing-body-large-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-body-large-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-body-large-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-body-medium-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-body-medium-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-body-medium-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-body-small-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-body-small-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-body-small-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-code-medium:</code></li>
      <li><code>$ouds-font-letter-spacing-display-large-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-display-large-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-display-large-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-display-medium-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-display-medium-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-display-medium-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-display-small-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-display-small-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-display-small-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-heading-large-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-heading-large-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-heading-large-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-heading-medium-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-heading-medium-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-heading-medium-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-heading-small-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-heading-small-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-heading-small-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-heading-xlarge-desktop</code></li>
      <li><code>$ouds-font-letter-spacing-heading-xlarge-mobile</code></li>
      <li><code>$ouds-font-letter-spacing-heading-xlarge-tablet</code></li>
      <li><code>$ouds-font-letter-spacing-label-large</code></li>
      <li><code>$ouds-font-letter-spacing-label-medium</code></li>
      <li><code>$ouds-font-letter-spacing-label-small</code></li>
      <li><code>$ouds-font-letter-spacing-label-xlarge</code></li>
      <li><code>$ouds-font-line-height-250</code></li>
      <li><code>$ouds-font-line-height-350</code></li>
      <li><code>$ouds-font-line-height-450</code></li>
      <li><code>$ouds-font-line-height-550</code></li>
      <li><code>$ouds-font-line-height-650</code></li>
      <li><code>$ouds-font-line-height-750</code></li>
      <li><code>$ouds-font-line-height-850</code></li>
      <li><code>$ouds-font-line-height-950</code></li>
      <li><code>$ouds-font-line-height-1050</code></li>
      <li><code>$ouds-font-line-height-1250</code></li>
      <li><code>$ouds-font-line-height-1450</code></li>
      <li><code>$ouds-font-line-height-1850</code></li>
      <li><code>$ouds-font-line-height-2050</code></li>
      <li><code>$ouds-font-line-height-body-large-desktop</code></li>
      <li><code>$ouds-font-line-height-body-large-mobile</code></li>
      <li><code>$ouds-font-line-height-body-large-tablet</code></li>
      <li><code>$ouds-font-line-height-body-medium-desktop</code></li>
      <li><code>$ouds-font-line-height-body-medium-mobile</code></li>
      <li><code>$ouds-font-line-height-body-medium-tablet</code></li>
      <li><code>$ouds-font-line-height-body-small-desktop</code></li>
      <li><code>$ouds-font-line-height-body-small-mobile</code></li>
      <li><code>$ouds-font-line-height-body-small-tablet</code></li>
      <li><code>$ouds-font-line-height-code-medium</code></li>
      <li><code>$ouds-font-line-height-display-large-desktop</code></li>
      <li><code>$ouds-font-line-height-display-large-mobile</code></li>
      <li><code>$ouds-font-line-height-display-large-tablet</code></li>
      <li><code>$ouds-font-line-height-display-medium-desktop</code></li>
      <li><code>$ouds-font-line-height-display-medium-mobile</code></li>
      <li><code>$ouds-font-line-height-display-medium-tablet</code></li>
      <li><code>$ouds-font-line-height-display-small-desktop</code></li>
      <li><code>$ouds-font-line-height-display-small-mobile</code></li>
      <li><code>$ouds-font-line-height-display-small-tablet</code></li>
      <li><code>$ouds-font-line-height-heading-large-desktop</code></li>
      <li><code>$ouds-font-line-height-heading-large-mobile</code></li>
      <li><code>$ouds-font-line-height-heading-large-tablet</code></li>
      <li><code>$ouds-font-line-height-heading-medium-desktop</code></li>
      <li><code>$ouds-font-line-height-heading-medium-mobile</code></li>
      <li><code>$ouds-font-line-height-heading-medium-tablet</code></li>
      <li><code>$ouds-font-line-height-heading-small-desktop</code></li>
      <li><code>$ouds-font-line-height-heading-small-mobile</code></li>
      <li><code>$ouds-font-line-height-heading-small-tablet</code></li>
      <li><code>$ouds-font-line-height-heading-xlarge-desktop</code></li>
      <li><code>$ouds-font-line-height-heading-xlarge-mobile</code></li>
      <li><code>$ouds-font-line-height-heading-xlarge-tablet</code></li>
      <li><code>$ouds-font-line-height-label-large</code></li>
      <li><code>$ouds-font-line-height-label-medium</code></li>
      <li><code>$ouds-font-line-height-label-small</code></li>
      <li><code>$ouds-font-line-height-label-xlarge</code></li>
      <li><code>$ouds-font-size-150</code></li>
      <li><code>$ouds-font-size-200</code></li>
      <li><code>$ouds-font-size-250</code></li>
      <li><code>$ouds-font-size-300</code></li>
      <li><code>$ouds-font-size-350</code></li>
      <li><code>$ouds-font-size-450</code></li>
      <li><code>$ouds-font-size-550</code></li>
      <li><code>$ouds-font-size-650</code></li>
      <li><code>$ouds-font-size-750</code></li>
      <li><code>$ouds-font-size-850</code></li>
      <li><code>$ouds-font-size-1050</code></li>
      <li><code>$ouds-font-size-1250</code></li>
      <li><code>$ouds-font-size-1450</code></li>
      <li><code>$ouds-font-size-1850</code></li>
      <li><code>$ouds-font-size-body-large-desktop</code></li>
      <li><code>$ouds-font-size-body-large-mobile</code></li>
      <li><code>$ouds-font-size-body-large-tablet</code></li>
      <li><code>$ouds-font-size-body-medium-desktop</code></li>
      <li><code>$ouds-font-size-body-medium-mobile</code></li>
      <li><code>$ouds-font-size-body-medium-tablet</code></li>
      <li><code>$ouds-font-size-body-small-desktop</code></li>
      <li><code>$ouds-font-size-body-small-mobile</code></li>
      <li><code>$ouds-font-size-body-small-tablet</code></li>
      <li><code>$ouds-font-size-code-medium: $oud</code></li>
      <li><code>$ouds-font-size-display-large-desktop</code></li>
      <li><code>$ouds-font-size-display-large-mobile</code></li>
      <li><code>$ouds-font-size-display-large-tablet</code></li>
      <li><code>$ouds-font-size-display-medium-desktop</code></li>
      <li><code>$ouds-font-size-display-medium-mobile</code></li>
      <li><code>$ouds-font-size-display-medium-tablet</code></li>
      <li><code>$ouds-font-size-display-small-desktop</code></li>
      <li><code>$ouds-font-size-display-small-mobile</code></li>
      <li><code>$ouds-font-size-display-small-tablet</code></li>
      <li><code>$ouds-font-size-heading-large-desktop</code></li>
      <li><code>$ouds-font-size-heading-large-mobile</code></li>
      <li><code>$ouds-font-size-heading-large-tablet</code></li>
      <li><code>$ouds-font-size-heading-medium-desktop</code></li>
      <li><code>$ouds-font-size-heading-medium-mobile</code></li>
      <li><code>$ouds-font-size-heading-medium-tablet</code></li>
      <li><code>$ouds-font-size-heading-small-desktop</code></li>
      <li><code>$ouds-font-size-heading-small-mobile</code></li>
      <li><code>$ouds-font-size-heading-small-tablet</code></li>
      <li><code>$ouds-font-size-heading-xlarge-desktop</code></li>
      <li><code>$ouds-font-size-heading-xlarge-mobile</code></li>
      <li><code>$ouds-font-size-heading-xlarge-tablet</code></li>
      <li><code>$ouds-font-size-label-large</code></li>
      <li><code>$ouds-font-size-label-medium</code></li>
      <li><code>$ouds-font-size-label-small</code></li>
      <li><code>$ouds-font-size-label-xlarge</code></li>
      <li><code>$ouds-font-weight-400</code></li>
      <li><code>$ouds-font-weight-700</code></li>
      <li><code>$ouds-font-weight-code</code></li>
      <li><code>$ouds-font-weight-default</code></li>
      <li><code>$ouds-font-weight-strong</code></li>
      <li><code>$ouds-font-weight-body-default</code></li>
      <li><code>$ouds-font-weight-body-strong</code></li>
      <li><code>$ouds-font-weight-display</code></li>
      <li><code>$ouds-font-weight-heading</code></li>
      <li><code>$ouds-font-weight-label-default</code></li>
      <li><code>$ouds-font-weight-label-strong</code></li>
      <li><code>$ouds-grid-2xl-column-gap</code></li>
      <li><code>$ouds-grid-2xl-margin</code></li>
      <li><code>$ouds-grid-2xl-min-width</code></li>
      <li><code>$ouds-grid-2xs-column-gap</code></li>
      <li><code>$ouds-grid-2xs-margin</code></li>
      <li><code>$ouds-grid-3xl-column-gap</code></li>
      <li><code>$ouds-grid-3xl-margin</code></li>
      <li><code>$ouds-grid-3xl-min-width</code></li>
      <li><code>$ouds-grid-column-gap-100</code></li>
      <li><code>$ouds-grid-column-gap-200</code></li>
      <li><code>$ouds-grid-column-gap-400</code></li>
      <li><code>$ouds-grid-column-gap-600</code></li>
      <li><code>$ouds-grid-column-gap-800</code></li>
      <li><code>$ouds-grid-lg-column-gap</code></li>
      <li><code>$ouds-grid-lg-margin</code></li>
      <li><code>$ouds-grid-lg-min-width</code></li>
      <li><code>$ouds-grid-margin-100</code></li>
      <li><code>$ouds-grid-margin-1100</code></li>
      <li><code>$ouds-grid-margin-1700</code></li>
      <li><code>$ouds-grid-margin-2500</code></li>
      <li><code>$ouds-grid-margin-300</code></li>
      <li><code>$ouds-grid-margin-400</code></li>
      <li><code>$ouds-grid-margin-500</code></li>
      <li><code>$ouds-grid-margin-700</code></li>
      <li><code>$ouds-grid-md-column-gap</code></li>
      <li><code>$ouds-grid-md-margin</code></li>
      <li><code>$ouds-grid-md-min-width</code></li>
      <li><code>$ouds-grid-min-width-200</code></li>
      <li><code>$ouds-grid-min-width-300</code></li>
      <li><code>$ouds-grid-min-width-400</code></li>
      <li><code>$ouds-grid-min-width-500</code></li>
      <li><code>$ouds-grid-min-width-600</code></li>
      <li><code>$ouds-grid-min-width-700</code></li>
      <li><code>$ouds-grid-min-width-800</code></li>
      <li><code>$ouds-grid-sm-column-gap</code></li>
      <li><code>$ouds-grid-sm-margin</code></li>
      <li><code>$ouds-grid-sm-min-width</code></li>
      <li><code>$ouds-grid-xl-column-gap</code></li>
      <li><code>$ouds-grid-xl-margin</code></li>
      <li><code>$ouds-grid-xl-min-width</code></li>
      <li><code>$ouds-grid-xs-column-gap</code></li>
      <li><code>$ouds-grid-xs-margin</code></li>
      <li><code>$ouds-grid-xs-min-width</code></li>
      <li><code>$ouds-opacity-40</code></li>
      <li><code>$ouds-opacity-160</code></li>
      <li><code>$ouds-opacity-320</code></li>
      <li><code>$ouds-opacity-640</code></li>
      <li><code>$ouds-opacity-1000</code></li>
      <li><code>$ouds-opacity-invisible</code></li>
      <li><code>$ouds-opacity-medium</code></li>
      <li><code>$ouds-opacity-opaque</code></li>
      <li><code>$ouds-opacity-strong</code></li>
      <li><code>$ouds-opacity-weak</code></li>
      <li><code>$ouds-opacity-weaker</code></li>
      <li><code>$ouds-size-icon-decorative-2xl</code></li>
      <li><code>$ouds-size-icon-decorative-2xs</code></li>
      <li><code>$ouds-size-icon-decorative-lg</code></li>
      <li><code>$ouds-size-icon-decorative-md</code></li>
      <li><code>$ouds-size-icon-decorative-sm</code></li>
      <li><code>$ouds-size-icon-decorative-xl</code></li>
      <li><code>$ouds-size-icon-decorative-xs</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-large-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-medium-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-body-small-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-large-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-medium-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-small-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-lg-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-lg-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-lg-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-md-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-md-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-md-tablet</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-sm-desktop</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-sm-mobile</code></li>
      <li><code>$ouds-size-icon-with-heading-xlarge-size-sm-tablet</code></li>
      <li><code>$ouds-size-icon-with-label-large-size-lg</code></li>
      <li><code>$ouds-size-icon-with-label-large-size-md</code></li>
      <li><code>$ouds-size-icon-with-label-large-size-sm</code></li>
      <li><code>$ouds-size-icon-with-label-large-size-xl</code></li>
      <li><code>$ouds-size-icon-with-label-large-size-xs</code></li>
      <li><code>$ouds-size-icon-with-label-medium-size-lg</code></li>
      <li><code>$ouds-size-icon-with-label-medium-size-md</code></li>
      <li><code>$ouds-size-icon-with-label-medium-size-sm</code></li>
      <li><code>$ouds-size-icon-with-label-medium-size-xs</code></li>
      <li><code>$ouds-size-icon-with-label-small-size-lg</code></li>
      <li><code>$ouds-size-icon-with-label-small-size-md</code></li>
      <li><code>$ouds-size-icon-with-label-small-size-sm</code></li>
      <li><code>$ouds-size-icon-with-label-small-size-xs</code></li>
      <li><code>$ouds-size-icon-with-label-xlarge-size-lg</code></li>
      <li><code>$ouds-size-icon-with-label-xlarge-size-md</code></li>
      <li><code>$ouds-size-icon-with-label-xlarge-size-sm</code></li>
      <li><code>$ouds-size-max-width-grid</code></li>
      <li><code>$ouds-size-max-width-type-body-large-desktop</code></li>
      <li><code>$ouds-size-max-width-type-body-large-mobile</code></li>
      <li><code>$ouds-size-max-width-type-body-large-tablet</code></li>
      <li><code>$ouds-size-max-width-type-body-medium-desktop</code></li>
      <li><code>$ouds-size-max-width-type-body-medium-mobile</code></li>
      <li><code>$ouds-size-max-width-type-body-medium-tablet</code></li>
      <li><code>$ouds-size-max-width-type-body-small-desktop</code></li>
      <li><code>$ouds-size-max-width-type-body-small-mobile</code></li>
      <li><code>$ouds-size-max-width-type-body-small-tablet</code></li>
      <li><code>$ouds-size-max-width-type-display-large-desktop</code></li>
      <li><code>$ouds-size-max-width-type-display-large-mobile</code></li>
      <li><code>$ouds-size-max-width-type-display-large-tablet</code></li>
      <li><code>$ouds-size-max-width-type-display-medium-desktop</code></li>
      <li><code>$ouds-size-max-width-type-display-medium-mobile</code></li>
      <li><code>$ouds-size-max-width-type-display-medium-tablet</code></li>
      <li><code>$ouds-size-max-width-type-display-small-desktop</code></li>
      <li><code>$ouds-size-max-width-type-display-small-mobile</code></li>
      <li><code>$ouds-size-max-width-type-display-small-tablet</code></li>
      <li><code>$ouds-size-max-width-type-heading-large-desktop</code></li>
      <li><code>$ouds-size-max-width-type-heading-large-mobile</code></li>
      <li><code>$ouds-size-max-width-type-heading-large-tablet</code></li>
      <li><code>$ouds-size-max-width-type-heading-medium-desktop</code></li>
      <li><code>$ouds-size-max-width-type-heading-medium-mobile</code></li>
      <li><code>$ouds-size-max-width-type-heading-medium-tablet</code></li>
      <li><code>$ouds-size-max-width-type-heading-small-desktop</code></li>
      <li><code>$ouds-size-max-width-type-heading-small-mobile</code></li>
      <li><code>$ouds-size-max-width-type-heading-small-tablet</code></li>
      <li><code>$ouds-size-max-width-type-heading-xlarge-desktop</code></li>
      <li><code>$ouds-size-max-width-type-heading-xlarge-mobile</code></li>
      <li><code>$ouds-size-max-width-type-heading-xlarge-tablet</code></li>
      <li><code>$ouds-space-fixed-huge</code></li>
      <li><code>$ouds-space-fixed-jumbo</code></li>
      <li><code>$ouds-space-fixed-medium</code></li>
      <li><code>$ouds-space-fixed-none</code></li>
      <li><code>$ouds-space-fixed-short</code></li>
      <li><code>$ouds-space-fixed-shorter</code></li>
      <li><code>$ouds-space-fixed-shortest</code></li>
      <li><code>$ouds-space-fixed-smash</code></li>
      <li><code>$ouds-space-fixed-spacious</code></li>
      <li><code>$ouds-space-fixed-tall</code></li>
      <li><code>$ouds-space-fixed-taller</code></li>
      <li><code>$ouds-space-fixed-tallest</code></li>
      <li><code>$ouds-space-scaled-medium-desktop</code></li>
      <li><code>$ouds-space-scaled-medium-mobile</code></li>
      <li><code>$ouds-space-scaled-medium-tablet</code></li>
      <li><code>$ouds-space-scaled-none-desktop</code></li>
      <li><code>$ouds-space-scaled-none-mobile</code></li>
      <li><code>$ouds-space-scaled-none-tablet</code></li>
      <li><code>$ouds-space-scaled-short-desktop</code></li>
      <li><code>$ouds-space-scaled-short-mobile</code></li>
      <li><code>$ouds-space-scaled-short-tablet</code></li>
      <li><code>$ouds-space-scaled-shorter-desktop</code></li>
      <li><code>$ouds-space-scaled-shorter-mobile</code></li>
      <li><code>$ouds-space-scaled-shorter-tablet</code></li>
      <li><code>$ouds-space-scaled-shortest-desktop</code></li>
      <li><code>$ouds-space-scaled-shortest-mobile</code></li>
      <li><code>$ouds-space-scaled-shortest-tablet</code></li>
      <li><code>$ouds-space-scaled-smash-desktop</code></li>
      <li><code>$ouds-space-scaled-smash-mobile</code></li>
      <li><code>$ouds-space-scaled-smash-tablet</code></li>
      <li><code>$ouds-space-scaled-spacious-desktop</code></li>
      <li><code>$ouds-space-scaled-spacious-mobile</code></li>
      <li><code>$ouds-space-scaled-spacious-tablet</code></li>
      <li><code>$ouds-space-scaled-tall-desktop</code></li>
      <li><code>$ouds-space-scaled-tall-mobile</code></li>
      <li><code>$ouds-space-scaled-tall-tablet</code></li>
      <li><code>$ouds-space-scaled-taller-desktop</code></li>
      <li><code>$ouds-space-scaled-taller-mobile</code></li>
      <li><code>$ouds-space-scaled-taller-tablet</code></li>
      <li><code>$ouds-space-scaled-tallest-desktop</code></li>
      <li><code>$ouds-space-scaled-tallest-mobile</code></li>
      <li><code>$ouds-space-scaled-tallest-tablet</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass maps:</summary>
    <ul>
      <li><code>$container-fluid-margin</code></li>
      <li><code>$container-max-widths</code></li>
      <li><code>$grid-breakpoints</code></li>
      <li><code>$grid-gutter-widths</code></li>
      <li><code>$gutters</code></li>
      <li><code>$ouds-border-radiuses</code></li>
      <li><code>$ouds-border-styles</code></li>
      <li><code>$ouds-border-widths</code></li>
      <li><code>$ouds-dimension-negative-space-fixed</code></li>
      <li><code>$ouds-dimension-negative-space-scaled</code></li>
      <li><code>$ouds-dimension-space-fixed</code></li>
      <li><code>$ouds-dimension-space-scaled</code></li>
      <li><code>$ouds-elevations</code></li>
      <li><code>$ouds-font-sizes</code></li>
      <li><code>$ouds-font-weights</code></li>
      <li><code>$ouds-icon-sizes</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass mixins:</summary>
    <ul>
      <li><code>breakpoint-infix()</code></li>
      <li><code>breakpoint-min()</code></li>
      <li><code>breakpoint-max()</code></li>
      <li><code>breakpoint-next()</code></li>
      <li><code>get-font-size()</code></li>
      <li><code>make-container()</code></li>
      <li><code>make-col()</code></li>
      <li><code>make-col-offset()</code></li>
      <li><code>make-col-ready()</code></li>
      <li><code>make-row()</code></li>
      <li><code>media-breakpoint-between()</code></li>
      <li><code>media-breakpoint-down()</code></li>
      <li><code>media-breakpoint-only()</code></li>
      <li><code>media-breakpoint-up()</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>border-bottom-ouds</code></li>
      <li><code>border-end-ouds</code></li>
      <li><code>border-ouds</code></li>
      <li><code>border-start-ouds</code></li>
      <li><code>border-style-ouds</code></li>
      <li><code>border-top-ouds</code></li>
      <li><code>border-width-ouds</code></li>
      <li><code>column-gap-ouds</code></li>
      <li><code>column-gap-scaled-ouds</code></li>
      <li><code>font-size-ouds</code></li>
      <li><code>font-weight-ouds</code></li>
      <li><code>gap-ouds</code></li>
      <li><code>gap-scaled-ouds</code></li>
      <li><code>margin-bottom-ouds</code></li>
      <li><code>margin-bottom-scaled-ouds</code></li>
      <li><code>margin-end-ouds</code></li>
      <li><code>margin-end-scaled-ouds</code></li>
      <li><code>margin-ouds</code></li>
      <li><code>margin-scaled-ouds</code></li>
      <li><code>margin-start-ouds</code></li>
      <li><code>margin-start-scaled-ouds</code></li>
      <li><code>margin-top-ouds</code></li>
      <li><code>margin-top-scaled-ouds</code></li>
      <li><code>margin-x-ouds</code></li>
      <li><code>margin-x-scaled-ouds</code></li>
      <li><code>margin-y-ouds</code></li>
      <li><code>margin-y-scaled-ouds</code></li>
      <li><code>negative-margin-bottom-ouds</code></li>
      <li><code>negative-margin-bottom-scaled-ouds</code></li>
      <li><code>negative-margin-end-ouds</code></li>
      <li><code>negative-margin-end-scaled-ouds</code></li>
      <li><code>negative-margin-ouds</code></li>
      <li><code>negative-margin-scaled-ouds</code></li>
      <li><code>negative-margin-start-ouds</code></li>
      <li><code>negative-margin-start-scaled-ouds</code></li>
      <li><code>negative-margin-top-ouds</code></li>
      <li><code>negative-margin-top-scaled-ouds</code></li>
      <li><code>negative-margin-x-ouds</code></li>
      <li><code>negative-margin-x-scaled-ouds</code></li>
      <li><code>negative-margin-y-ouds</code></li>
      <li><code>negative-margin-y-scaled-ouds</code></li>
      <li><code>padding-bottom-ouds</code></li>
      <li><code>padding-bottom-scaled-ouds</code></li>
      <li><code>padding-end-ouds</code></li>
      <li><code>padding-end-scaled-ouds</code></li>
      <li><code>padding-ouds</code></li>
      <li><code>padding-scaled-ouds</code></li>
      <li><code>padding-start-ouds</code></li>
      <li><code>padding-start-scaled-ouds</code></li>
      <li><code>padding-top-ouds</code></li>
      <li><code>padding-top-scaled-ouds</code></li>
      <li><code>padding-x-ouds</code></li>
      <li><code>padding-x-scaled-ouds</code></li>
      <li><code>padding-y-ouds</code></li>
      <li><code>padding-y-scaled-ouds</code></li>
      <li><code>rounded-bottom-ouds</code></li>
      <li><code>rounded-end-ouds</code></li>
      <li><code>rounded-ouds</code></li>
      <li><code>rounded-start-ouds</code></li>
      <li><code>rounded-top-ouds</code></li>
      <li><code>row-gap-ouds</code></li>
      <li><code>row-gap-scaled-ouds</code></li>
      <li><code>shadow-ouds</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> CSS variable:</summary>
    <ul>
      <li><code>--bs-container-margin-x</code></li>
      <li><code>--bs-body-letter-spacing</code></li>
      <li><code>--bs-font-size-display-large</code></li>
      <li><code>--bs-font-size-display-medium</code></li>
      <li><code>--bs-font-size-display-small</code></li>
      <li><code>--bs-font-size-heading-xlarge</code></li>
      <li><code>--bs-font-size-heading-large</code></li>
      <li><code>--bs-font-size-heading-medium</code></li>
      <li><code>--bs-font-size-heading-small</code></li>
      <li><code>--bs-font-size-body-large</code></li>
      <li><code>--bs-font-size-body-medium</code></li>
      <li><code>--bs-font-size-body-small</code></li>
      <li><code>--bs-font-size-label-xlarge</code></li>
      <li><code>--bs-font-size-label-large</code></li>
      <li><code>--bs-font-size-label-medium</code></li>
      <li><code>--bs-font-size-label-small</code></li>
      <li><code>--bs-font-size-code-medium</code></li>
      <li><code>--bs-font-line-height-display-large</code></li>
      <li><code>--bs-font-line-height-display-medium</code></li>
      <li><code>--bs-font-line-height-display-small</code></li>
      <li><code>--bs-font-line-height-heading-xlarge</code></li>
      <li><code>--bs-font-line-height-heading-large</code></li>
      <li><code>--bs-font-line-height-heading-medium</code></li>
      <li><code>--bs-font-line-height-heading-small</code></li>
      <li><code>--bs-font-line-height-body-large</code></li>
      <li><code>--bs-font-line-height-body-medium</code></li>
      <li><code>--bs-font-line-height-body-small</code></li>
      <li><code>--bs-font-line-height-label-xlarge</code></li>
      <li><code>--bs-font-line-height-label-large</code></li>
      <li><code>--bs-font-line-height-label-medium</code></li>
      <li><code>--bs-font-line-height-label-small</code></li>
      <li><code>--bs-font-line-height-code-medium</code></li>
      <li><code>--bs-font-letter-spacing-display-large</code></li>
      <li><code>--bs-font-letter-spacing-display-medium</code></li>
      <li><code>--bs-font-letter-spacing-display-small</code></li>
      <li><code>--bs-font-letter-spacing-heading-xlarge</code></li>
      <li><code>--bs-font-letter-spacing-heading-large</code></li>
      <li><code>--bs-font-letter-spacing-heading-medium</code></li>
      <li><code>--bs-font-letter-spacing-heading-small</code></li>
      <li><code>--bs-font-letter-spacing-body-large</code></li>
      <li><code>--bs-font-letter-spacing-body-medium</code></li>
      <li><code>--bs-font-letter-spacing-body-small</code></li>
      <li><code>--bs-font-letter-spacing-label-xlarge</code></li>
      <li><code>--bs-font-letter-spacing-label-large</code></li>
      <li><code>--bs-font-letter-spacing-label-medium</code></li>
      <li><code>--bs-font-letter-spacing-label-small</code></li>
      <li><code>--bs-font-letter-spacing-code-medium</code></li>
      <li><code>--bs-font-max-width-display-large</code></li>
      <li><code>--bs-font-max-width-display-medium</code></li>
      <li><code>--bs-font-max-width-display-small</code></li>
      <li><code>--bs-font-max-width-heading-xlarge</code></li>
      <li><code>--bs-font-max-width-heading-large</code></li>
      <li><code>--bs-font-max-width-heading-medium</code></li>
      <li><code>--bs-font-max-width-heading-small</code></li>
      <li><code>--bs-font-max-width-body-large</code></li>
      <li><code>--bs-font-max-width-body-medium</code></li>
      <li><code>--bs-font-max-width-body-small</code></li>
      <li><code>--bs-icon-lg-with-body-large</code></li>
      <li><code>--bs-icon-lg-with-body-medium</code></li>
      <li><code>--bs-icon-lg-with-body-small</code></li>
      <li><code>--bs-icon-lg-with-heading-large</code></li>
      <li><code>--bs-icon-lg-with-heading-medium</code></li>
      <li><code>--bs-icon-lg-with-heading-small</code></li>
      <li><code>--bs-icon-lg-with-heading-xlarge</code></li>
      <li><code>--bs-icon-md-with-body-large</code></li>
      <li><code>--bs-icon-md-with-body-medium</code></li>
      <li><code>--bs-icon-md-with-body-small</code></li>
      <li><code>--bs-icon-md-with-heading-large</code></li>
      <li><code>--bs-icon-md-with-heading-medium</code></li>
      <li><code>--bs-icon-md-with-heading-small</code></li>
      <li><code>--bs-icon-md-with-heading-xlarge</code></li>
      <li><code>--bs-icon-sm-with-body-large</code></li>
      <li><code>--bs-icon-sm-with-body-medium</code></li>
      <li><code>--bs-icon-sm-with-body-small</code></li>
      <li><code>--bs-icon-sm-with-heading-large</code></li>
      <li><code>--bs-icon-sm-with-heading-medium</code></li>
      <li><code>--bs-icon-sm-with-heading-small</code></li>
      <li><code>--bs-icon-sm-with-heading-xlarge</code></li>
      <li><code>--bs-space-scaled-medium</code></li>
      <li><code>--bs-space-scaled-none</code></li>
      <li><code>--bs-space-scaled-short</code></li>
      <li><code>--bs-space-scaled-shorter</code></li>
      <li><code>--bs-space-scaled-shortest</code></li>
      <li><code>--bs-space-scaled-smash</code></li>
      <li><code>--bs-space-scaled-spacious</code></li>
      <li><code>--bs-space-scaled-tall</code></li>
      <li><code>--bs-space-scaled-taller</code></li>
      <li><code>--bs-space-scaled-tallest</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped Sass variables:</summary>
    <ul>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-900</code></li>
    </ul>
  </details>

### Sass mixins

- <span class="badge text-bg-status-positive-emphasized">New</span> The mixin `get-font-size({font-size-ref})` has been added, where `font-size-ref` is one of: `"code-medium"`, `"label-small"`, `"label-medium"`, `"label-large"`, `"label-xlarge"`, `"body-small"`, `"body-medium"`, `"body-large"`, `"heading-small"`, `"heading-medium"`, `"heading-large"`, `"heading-xlarge"`, `"display-small"`, `"display-medium"`, `"display-large"`. If you have/need any `font-size` in one of your SCSS classes, please consider using this mixin instead. See [Typography Sass mixins]({{< docsref "/content/typography/#sass-mixins" >}}) for more details.


## v0.0.3

### Pre-compiled versions

From now on, by default, OUDS Web won't embed Bootstrap elements (like helpers, utilities, variables, components variants, etc.) that do not comply with Orange Unified Design System. However, you can still use our Bootstrap compatibility mode by using `ouds-web-bootstrap.css` and `ouds-web-bootstrap.min.css`. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

### Utilities

#### Opacity

- <span class="badge text-bg-status-positive-emphasized">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-emphasis` and `.opacity-opaque`.

### CSS and Sass variables

- <span class="badge text-bg-status-positive-emphasized">New</span> `$enable-bootstrap-compatibility` option set to `false` by default. This option allows you to compile the Sass files with a Bootstrap compatibility mode.
  - For instance, without the Bootstrap compatibility mode, you won't have the opacity Bootstrap utilities such as `.opacity-0`, `.opacity-1`, `.opacity-50`, etc. You will only have the OUDS Web utilities such as `.opacity-invisible`, `.opacity-weaker`, `.opacity-weak`, etc. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

- <span class="badge text-bg-status-positive-emphasized">New</span> OUDS Web fully implements the design tokens. If you were using the Sass compilation, you must import the new Sass files before the variables.

  <details class="mb-tall">
  <summary>See the new import stack</summary>

  ```diff
    @import "functions";
  + @import "tokens/raw";
  + @import "tokens/semantic";
  + @import "tokens/component";
    @import "variables";
    @import "variables-dark";
    // etc
  ```
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass variables:</summary>
    <ul>
      <li><code>$ouds-opacity-0</code></li>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-900</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass maps:</summary>
    <ul>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>opacity-ouds</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-negative-emphasized">Breaking</span> Keys in <code>$utilities</code> map only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>opacity</code></li>
    </ul>
  </details>

## v0.0.1

<hr class="mb-tall">

OUDS Web v0.0.1 has landed, and is based and compatible with Bootstrap v5.3.3.

If you need more details about the changes, please refer to the [v0.0.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v0.0.1-ouds-web).

## v0.0.0

<hr class="mb-tall">

OUDS Web v0.0.0 has landed, and is based and compatible with Bootstrap v5.3.3.
