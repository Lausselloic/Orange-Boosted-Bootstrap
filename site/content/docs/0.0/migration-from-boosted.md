---
layout: docs
title: Migrating from Boosted
description: Track and review changes to the OUDS Web source files, documentation, and components to help you migrate from Boosted to OUDS Web.
group: migration
aliases:
  - "/migration-from-boosted/"
  - "/docs/migration-from-boosted/"
toc: true
---

This guide provides information on how to migrate from Boosted (latest release) to OUDS Web, with Bootstrap compatibility turned off. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

Let's start with the most obvious change you'll notice: the name. **Boosted is now OUDS Web.**

- The NPM package is now `@ouds/web`.
- The CSS and JS files have been renamed:
  - `boosted-grid.css` → `ouds-web-grid.css`
  - `boosted-grid.min.css` → `ouds-web-grid.min.css`
  - `boosted-reboot.css` → `ouds-web-reboot.css`
  - `boosted-reboot.min.css` → `ouds-web-reboot.min.css`
  - `boosted-utilities.css` → `ouds-web-utilities.css`
  - `boosted-utilities.min.css` → `ouds-web-utilities.min.css`
  - `boosted.css` → `ouds-web.css`
  - `boosted.min.css` → `ouds-web.min.css`
  - `boosted.bundle.js` → `ouds-web.bundle.js`
  - `boosted.bundle.min.js` → `ouds-web.bundle.min.js`
  - `boosted.esm.js` → `ouds-web.esm.js`
  - `boosted.esm.min.js` → `ouds-web.esm.min.js`
  - `boosted.js` → `ouds-web.js`
  - `boosted.min.js` → `ouds-web.min.js`

From now on, OUDS Web won't embed Bootstrap elements that are not part of Orange Unified Design System. However, you can still use our Bootstrap compatibility mode by using `ouds-web-bootstrap.css` and `ouds-web-bootstrap.min.css`.

## Fonts

OUDS Web doesn't use the Helvetica Neue font. Instead, it uses the system font stack. This means that the font will be slightly different depending on the operating system and browser being used.

Technically, it means that you can get rid of the following things:
- Helvetica Neue woff2 files: `fonts/HelvNeue55_W1G.woff2`, `fonts/HelvNeue75_W1G.woff2`, `fonts/HelveticaNeueW20-55Roman.woff2`, and `fonts/HelveticaNeueW20-75Bold.woff2`.
- `orange-helvetica.*.css` file (default, RTL, or minified version).
- If you were customizing your Sass compilation, you can remove the `@import "orange-helvetica";` line from your Sass files if it was there.

## Content styles

### Typography

- <span class="badge text-bg-status-positive-emphasized">New</span> Body fonts' sizes are now responsive and can change depending on the screen size. See [Typography]({{< docsref "/content/typography/" >}}) for more details.

- <span class="badge text-bg-status-positive-emphasized">New</span> A `max-width` has been added on all font references for readability reasons. If you want to get rid of the `max-width`, please use our `.mw-none` width utility.

- <span class="badge text-bg-status-positive-emphasized">New</span> Selected text is now styled with a specific text `color` and `background-color`, making it easier to spot and to read.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Display headings classes `.display-{1|2|3|4|5|6}` have been removed and replaced by `.display-{small|medium|large}`. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Abbreviation class `.initialism` has been removed.

- <span class="badge text-bg-status-warning-emphasized">Warning</span> Default spacing values now use `px`s instead of `em`s for fixed component spacing, to keep as much space as possible for meaningful content on zoom.

## Layout

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Responsive breakpoints have changed:
  - `2xs` and `3xl` have been added.
  - `xxl` has been renamed to `2xl`.
  - The breakpoints values have changed. Please refer to the [breakpoints' documentation]({{< docsref "/layout/breakpoints/" >}}).
  - The default container to use is now `.container-fluid` associated to `.container-max-width` instead of `.container-xxl`. Please refer to the [fluid containers' documentation]({{< docsref "/layout/containers/#fluid-containers" >}}).
  - Default gutter inside grid has been changed to have a fully responsive behavior. It should be a transparent change for you.
  - All gutter utilities have been changed. `.g{-breakpoint}-{value}`, `.gx{-breakpoint}-{value}` and `.gy{-breakpoint}-{value}` which value is inside `0|1|2|3|4|5`. Gutter utilities values now use `none|smash|shortest|shorter|short|medium|tall|taller|tallest|spacious|huge|jumbo`. Proportional equivalence between `0` → `none`, `1` → `shortest`, `2` → `shorter`, `3` → `medium`, `4` → `tall`, `5` → `spacious`.

All responsive classes, helpers, and utilities have been updated accordingly to match the new breakpoints.

- <span class="badge text-bg-status-info-emphasized">Info</span> `.container` and `.container-{breakpoint}` have been removed from the default build but you can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-info-emphasized">Info</span> `xxl` breakpoint and thus all related classes (like `.container-xxl`, `.col-xxl-*`) can still be available when `$enable-bootstrap-compatibility` is enabled.

## Components

### Close button

- <span class="badge text-bg-status-warning-emphasized">Warning</span> `.btn-close-white` class has been removed as it was deprecated in Boosted v5.3.3.

## Forms

### Checks & radios

- <span class="badge text-bg-status-warning-emphasized">Warning</span> `form-star-rating()` mixin has been removed as it was deprecated in Boosted v5.3.2.

## Helpers

### Icon

- <span class="badge text-bg-status-positive-emphasized">New</span> Icons' sizes helpers have been added to help choose the right icon size with a specific typography reference. If you need these helpers, and you are using a custom import stack for helpers, don't forget to add the needed file `helpers/_icon.scss`:
  - Responsive icons' sizes in headings:
    - `.h{size}-short-icon`, `.h{size}-medium-icon`, `.h{size}-tall-icon`, where `h` stands for heading and size is one of `s` for small, `m` for medium, `l` for large, or `xl` for x-large
    - `.b{size}-short-icon`, `.b{size}-medium-icon`, , `.h{size}-tall-icon`, where `b` stands for body and size is one of `m` for medium, or `l` for large
  - Responsive icons' sizes in regular texts: `.b{size}-short-icon`, `.b{size}-medium-icon`, `.b{size}-tall-icon`, where `b` stands for body and size is one of `s` for small, `m` for medium, or `l` for large
  - Fixed icons' sizes for decorative standalone icons: `.decorative-{size}-icon` where size is one of `shortest|shorter|short|medium|tall|taller|tallest`

### Position

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Responsive sticky helpers `.sticky-xxl-{top|bottom}` have been removed and replaced by their equivalent `.sticky-2xl-{top|bottom}`. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Responsive sticky helpers: `.sticky-xs-{top|bottom}`, `.sticky-2xl-{top|bottom}` and `.sticky-3xl-{top|bottom}`.

## Utilities

### Border

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Border operative utilities have been removed: `.border-0`, `.border-top-0`, `.border-bottom-0`, `.border-start-0`, and `.border-end-0`. Please check the new [border values]({{< docsref "/utilities/borders#border" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border operative utilities: `.border-none`, `.border-top-none`, `.border-bottom-none`, `.border-start-none`, and `.border-end-none`.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Border width utilities have been removed: `.border-0`, `.border-1`, `.border-2`, `.border-3`, `.border-4` and `.border-5`. Please check the new [border values]({{< docsref "/utilities/borders#width" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border width utilities: `.border-none`, `.border-thin`, `.border-medium`, `.border-thick`, and `.border-thicker`.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Border radius utilities with many sizes have been removed. Please check the new [border values]({{< docsref "/utilities/borders#radius" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`:
  - **0**: `.rounded-0`, `.rounded-top-0`, `.rounded-bottom-0`, `.rounded-start-0` and `.rounded-end-0`.
  - **1**: `.rounded-1`, `.rounded-top-1`, `.rounded-bottom-1`, `.rounded-start-1` and `.rounded-end-1`.
  - **2**: `.rounded-2`, `.rounded-top-2`, `.rounded-bottom-2`, `.rounded-start-2` and `.rounded-end-2`.
  - **3**: `.rounded-3`, `.rounded-top-3`, `.rounded-bottom-3`, `.rounded-start-3` and `.rounded-end-3`.
  - **4**: `.rounded-4`, `.rounded-top-4`, `.rounded-bottom-4`, `.rounded-start-4` and `.rounded-end-4`.
  - **5**: `.rounded-5`, `.rounded-top-5`, `.rounded-bottom-5`, `.rounded-start-5` and `.rounded-end-5`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border radius utilities with all sizes:
  - **None**: `.rounded-none`, `.rounded-top-none`, `.rounded-bottom-none`, `.rounded-start-none` and `.rounded-end-none`.
  - **Short**: `.rounded-short`, `.rounded-top-short`, `.rounded-bottom-short`, `.rounded-start-short` and `.rounded-end-short`.
  - **Medium**: `.rounded-medium`, `.rounded-top-medium`, `.rounded-bottom-medium`, `.rounded-start-medium` and `.rounded-end-medium`.
  - **Tall**: `.rounded-tall`, `.rounded-top-tall`, `.rounded-bottom-tall`, `.rounded-start-tall` and `.rounded-end-tall`.

- <span class="badge text-bg-status-positive-emphasized">New</span> Border style utilities: `.border-drag`.

### Display

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `.d-xxl-{value}` responsive display utility has been replaced by `.d-2xl-{value}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}). You can still have it using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> `.d-xs-{value}` and `.d-3xl-{value}` responsive display utilities have been added. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).

### Flex

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `xxl` responsive flex utilities have been replaced by `2xl` utilities: `.d-xxl-flex`, `.d-xxl-inline-flex`, `.flex-xxl-{row|column}`, `.flex-xxl-{row|column}-reverse`, `.justify-content-xxl-{start|end|center|between|around|evenly}`, `.align-items-xxl-{start|end|center|baseline|stretch}`, `.align-self-xxl-{start|end|center|baseline|stretch}`, `.flex-xxl-fill`, `.flex-xxl-{grow|shrink}-{0|1}`, `.flex-xxl-{nowrap|wrap|wrap-reverse}`, `.order-xxl-{number}`, `.order-xxl-{first|last}` and `.align-content-xxl-{start|end|center|between|around|stretch}` utilities have been replaced by `.d-2xl-flex`, `.d-2xl-inline-flex`, `.flex-2xl-{row|column}`, `.flex-2xl-{row|column}-reverse`, `.justify-content-2xl-{start|end|center|between|around|evenly}`, `.align-items-2xl-{start|end|center|baseline|stretch}`, `.align-self-2xl-{start|end|center|baseline|stretch}`, `.flex-2xl-fill`, `.flex-2xl-{grow|shrink}-{0|1}`, `.flex-2xl-{nowrap|wrap|wrap-reverse}`, `.order-2xl-{number}`, `.order-2xl-{first|last}` and `.align-content-2xl-{start|end|center|between|around|stretch}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}). You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> `xs` and `3xl` responsive flex utilities have been added: `.d-xs-flex`, `.d-xs-inline-flex`, `.flex-xs-{row|column}`, `.flex-xs-{row|column}-reverse`, `.justify-content-xs-{start|end|center|between|around|evenly}`, `.align-items-xs-{start|end|center|baseline|stretch}`, `.align-self-xs-{start|end|center|baseline|stretch}`, `.flex-xs-fill`, `.flex-xs-{grow|shrink}-{0|1}`, `.flex-xs-{nowrap|wrap|wrap-reverse}`, `.order-xs-{number}`, `.order-xs-{first|last}`, `.align-content-xs-{start|end|center|between|around|stretch}`, `.d-3xl-flex`, `.d-3xl-inline-flex`, `.flex-3xl-{row|column}`, `.flex-3xl-{row|column}-reverse`, `.justify-content-3xl-{start|end|center|between|around|evenly}`, `.align-items-3xl-{start|end|center|baseline|stretch}`, `.align-self-3xl-{start|end|center|baseline|stretch}`, `.flex-3xl-fill`, `.flex-3xl-{grow|shrink}-{0|1}`, `.flex-3xl-{nowrap|wrap|wrap-reverse}`, `.order-3xl-{number}`, `.order-3xl-{first|last}` and `.align-content-3xl-{start|end|center|between|around|stretch}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).

### Float

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `xxl` responsive float utilities have been replaced by `2xl` utilities: `.float-xxl-{start|end|none}` utilities have been replaced by `.float-2xl-{start|end|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}). You can still have it using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> `xs` and `3xl` responsive float utilities have been added:  `.float-xs-{start|end|none}` and  `.float-3xl-{start|end|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).

### Object fit

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `xxl` responsive object fit utilities have been replaced by `2xl` utilities: `.object-fit-xxl-{contain|cover|fill|scale|none}` utilities have been replaced by ``.object-fit-2xl-{contain|cover|fill|scale|none}``. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}). You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> `xs` and `3xl` responsive object fit utilities have been added:  `.object-fit-xs-{contain|cover|fill|scale|none}` and  `.object-fit-3xl-{contain|cover|fill|scale|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-status-info-emphasized">Info</span> `xxl` responsive object fit utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

### Opacity

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75` and `.opacity-100` have been removed from the default build. Please check the new [opacity values]({{< docsref "/utilities/opacity" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> Opacity utilities: `.opacity-invisible`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-strong` and `.opacity-opaque`.

### Shadow

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `.shadow`, `.shadow-sm` and `.shadow-lg` have been removed from the default build. Please check the new [shadows values]({{< docsref "/utilities/shadows" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-status-positive-emphasized">New</span> Shadows utilities:
`.shadow-none`, `.shadow-raised`, `.shadow-drag`, `.shadow-default`, `.shadow-emphasized`, `.shadow-sticky-default`, `.shadow-sticky-emphasized` and `.shadow-sticky-navigation-scrolled`.

### Sizing

- <span class="badge text-bg-status-positive-emphasized">New</span> Sizing utility `.mw-none` to set `max-width: none`. This utility is particularly useful now that a `max-width` has been added on all font references (for readability reasons), if you want to omit it in some special cases.

### Spacings

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> The following margin spacing utilities have been removed from the default build (`.m{position}-{breakpoint}-{negative}{value}`). Please check the new [spacing values]({{< docsref "/utilities/spacing" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`:
  - **0**: `.m-0`, `.mx-0`, `.my-0`, `.mt-0`, `.mb-0`, `.ms-0`, `.me-0`, `.m-sm-0`, etc...
  - **1**: `.m-1`, `.mx-1`, `.my-1`, `.mt-1`, `.mb-1`, `.ms-1`, `.me-1`, `.m-sm-1`, etc...
  - **2**: `.m-2`, `.mx-2`, `.my-2`, `.mt-2`, `.mb-2`, `.ms-2`, `.me-2`, `.m-sm-2`, etc...
  - **3**: `.m-3`, `.mx-3`, `.my-3`, `.mt-3`, `.mb-3`, `.ms-3`, `.me-3`, `.m-sm-3`, etc...
  - **4**: `.m-4`, `.mx-4`, `.my-4`, `.mt-4`, `.mb-4`, `.ms-4`, `.me-4`, `.m-sm-4`, etc...
  - **5**: `.m-5`, `.mx-5`, `.my-5`, `.mt-5`, `.mb-5`, `.ms-5`, `.me-5`, `.m-sm-5`, etc...
  - **Negative**: `.m-n1`, `.m-n2`, `.m-n3`, `.m-n4`, `.m-n5`, `.mx-n1`, etc...

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> The following padding spacing utilities have been removed from the default build (`.p{position}-{breakpoint}-{value}`). Please check the new [spacing values]({{< docsref "/utilities/spacing" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`:
  - **0**: `.p-0`, `.px-0`, `.py-0`, `.pt-0`, `.pb-0`, `.ps-0`, `.pe-0`, `.p-sm-0`, etc...
  - **1**: `.p-1`, `.px-1`, `.py-1`, `.pt-1`, `.pb-1`, `.ps-1`, `.pe-1`, `.p-sm-1`, etc...
  - **2**: `.p-2`, `.px-2`, `.py-2`, `.pt-2`, `.pb-2`, `.ps-2`, `.pe-2`, `.p-sm-2`, etc...
  - **3**: `.p-3`, `.px-3`, `.py-3`, `.pt-3`, `.pb-3`, `.ps-3`, `.pe-3`, `.p-sm-3`, etc...
  - **4**: `.p-4`, `.px-4`, `.py-4`, `.pt-4`, `.pb-4`, `.ps-4`, `.pe-4`, `.p-sm-4`, etc...
  - **5**: `.p-5`, `.px-5`, `.py-5`, `.pt-5`, `.pb-5`, `.ps-5`, `.pe-5`, `.p-sm-5`, etc...

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> The following gap spacing utilities have been removed from the default build (`.{row-|column-|}gap-{breakpoint}-{value}`). Please check the new [spacing values]({{< docsref "/utilities/spacing" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`:
  - **0**: `.gap-0`, `.row-gap-0`, `.column-gap-0`, `.gap-sm-0`, etc...
  - **1**: `.gap-1`, `.row-gap-1`, `.column-gap-1`, `.gap-sm-1`, etc...
  - **2**: `.gap-2`, `.row-gap-2`, `.column-gap-2`, `.gap-sm-2`, etc...
  - **3**: `.gap-3`, `.row-gap-3`, `.column-gap-3`, `.gap-sm-3`, etc...
  - **4**: `.gap-4`, `.row-gap-4`, `.column-gap-4`, `.gap-sm-4`, etc...
  - **5**: `.gap-5`, `.row-gap-5`, `.column-gap-5`, `.gap-sm-5`, etc...

- <span class="badge text-bg-status-positive-emphasized">New</span> fixed margin spacing utilities:
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
  - **Auto**: `.m-xs-auto`, `.mx-xs-auto`, `.my-xs-auto`, `.mt-xs-auto`, `.mb-xs-auto`, `.ms-xs-auto`, `.me-xs-auto`, `.m-2xl-auto`, etc...
  - **Negative**: `.m-nsmash`, `.m-nshortest`, `.m-nshorter`, `.m-nshort`, `.m-nmedium`, `.m-ntall`, `.m-ntaller`, `.m-ntallest`, `.m-nspacious`, `.m-nhuge`, `.m-njumbo`, `.mx-nsmash`, etc...

- <span class="badge text-bg-status-positive-emphasized">New</span> scaled margin spacing utilities:
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

- <span class="badge text-bg-status-positive-emphasized">New</span> fixed padding spacing utilities:
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

- <span class="badge text-bg-status-positive-emphasized">New</span> scaled padding spacing utilities:
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

- <span class="badge text-bg-status-positive-emphasized">New</span> fixed gap spacing utilities:
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

- <span class="badge text-bg-status-positive-emphasized">New</span> scaled gap spacing utilities:
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

- <span class="badge text-bg-status-warning-emphasized">Warning</span> You might be able to transfer your spacing utilities following one of the two proposed methods (while keeping almost the rendering and at least the same proportion between spacings):
  - Keep the previous behavior and getting one utility for another.
    1. **0**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)0` → `$1none`
    2. **1**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)1` → `$1shortest`
    3. **2**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)2` → `$1short`
    4. **3**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)3` → `$1tall`
    5. **4**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)4` → `$1tallest`
    6. **5**: `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)5` → `$1huge`
    7. **All numbers**: Search for `(([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?)\d` and you shouldn't have Bootstrap spacing utilities anymore
    <!-- Next technique is almost unusable in practice -->
  - Change all the utilities using more precise utilities
    1. **Mixing Bootstrap numbers**: Search for `([" \.][mp]|-?gap)[tblrsexy]?-[a-z]{0,3}-?n?\d`, when you match multiple on one line, consider using one of our [scaled spacing utilities]({{< docsref "/utilities/spacing#notation-for-scaled-values" >}}) (for example, `.mb-1.mb-md-2` → `.mb-scaled-shortest`).
    2. **Remaining standalone classes**: Follow the previous guide going through all the standalone classes.

### Text

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> `.text-xxl-{start|end|none}` responsive alignment text utility has been replaced by `.text-2xl-{start|end|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}). You can still have it using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-positive-emphasized">New</span> `.text-xs-{start|end|none}` and `.text-3xl-{start|end|none}` responsive alignment text utilities have been added. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Font size text utilities `.fs-{1|2|3|4|5|6}` have been removed and replaced by new ones. You can still have them using `$enable-bootstrap-compatibility`:
  - **Display headings**: `.fs-dl`, `.fs-dm`, `.fs-ds`
  - **Headings**: `.fs-hxl`, `.fs-hl`, `.fs-hm`, `.fs-hs`
  - **Body**: `.fs-bl`, `.fs-bm`, `.fs-bs`
  - **Code**: `.fs-cm`, `.fs-cs`

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Font weight text utilities `.fw-semibold` and `.fw-medium` have been removed.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Line height text utilities `.lh-1`, `.lh-sm`, `.lh-base`, and `.lh-lg` have been removed, since our font references already have defined `line-height`s. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Line length text utilities `.ll-sm` and `.ll-md` have been removed, since there is already a default `max-width`.

## Examples

- <span class="badge text-bg-status-positive-emphasized">New</span> New [Font example]({{< docsref "/examples/font" >}}).

- <span class="badge text-bg-status-positive-emphasized">New</span> New [Grid system example]({{< docsref "/examples/grid-system" >}}).

## CSS and Sass variables

- <span class="badge text-bg-status-positive-emphasized">New</span> `$enable-bootstrap-compatibility` option set to `false` by default. This option allows you to compile the Sass files with a Bootstrap compatibility mode.
  - For instance, without the Bootstrap compatibility mode, you won't have the opacity Bootstrap utilities such as `.opacity-0`, `.opacity-1`, `.opacity-50`, etc. You will only have the semantic OUDS Web utilities such as `.opacity-invisible`, `.opacity-weaker`, `.opacity-weak`, etc.

- <span class="badge text-bg-status-positive-emphasized">New</span> OUDS Web fully implements the design tokens. If you were using the Sass compilation, you must import the new Sass files before the variables.

  <details class="mb-tall">
  <summary>See the new import stack</summary>

  ```diff
  + @import "config";
    @import "functions";
  + @import "tokens/raw";
  + @import "tokens/semantic";
  + @import "tokens/semantic-colors-custom-props";
  + @import "tokens/composite";
  + @import "tokens/component";
    @import "variables";
    @import "variables-dark";
    // etc
  ```
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass variables:</summary>
    <ul>
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
      <li><code>$ouds-opacity-0</code></li>
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
      <li><code>$grid-gutter-widths</code></li>
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
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> Sass mixins:</summary>
    <ul>
      <li><code>get-font-size()</code></li>
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
      <li><code>opacity-ouds</code></li>
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
      <li><code>--bs-body-letter-spacing</code></li>
      <li><code>--bs-container-margin-x</code></li>
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
      <li><code>$blockquote-font-size</code></li>
      <li><code>$blockquote-footer-font-size</code></li>
      <li><code>$blockquote-line-height</code></li>
      <li><code>$blockquote-letter-spacing</code></li>
      <li><code>$boosted-prefix</code></li>
      <li><code>$boosted-variable-prefix</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$display1-size</code></li>
      <li><code>$display1-spacing</code></li>
      <li><code>$display2-size</code></li>
      <li><code>$display2-spacing</code></li>
      <li><code>$display3-size</code></li>
      <li><code>$display3-spacing</code></li>
      <li><code>$display4-size</code></li>
      <li><code>$display4-spacing</code></li>
      <li><code>$footer-nav-link-font-weight</code></li>
      <li><code>$font-size-xlg</code></li>
      <li><code>$form-star-focus-box-shadow</code></li>
      <li><code>$form-star-focus-color</code></li>
      <li><code>$form-star-focus-color-dark</code></li>
      <li><code>$form-star-focus-outline</code></li>
      <li><code>$form-star-focus-outline-dark</code></li>
      <li><code>$grid-gutter-breakpoint</code></li>
      <li><code>$h1-line-height</code></li>
      <li><code>$h1-spacing</code></li>
      <li><code>$h2-line-height</code></li>
      <li><code>$h2-spacing</code></li>
      <li><code>$h3-line-height</code></li>
      <li><code>$h3-spacing</code></li>
      <li><code>$h4-line-height</code></li>
      <li><code>$h4-spacing</code></li>
      <li><code>$h5-line-height</code></li>
      <li><code>$h5-spacing</code></li>
      <li><code>$h6-line-height</code></li>
      <li><code>$h6-spacing</code></li>
      <li><code>$initialism-font-size</code></li>
      <li><code>$lead-letter-spacing</code></li>
      <li><code>$lead-line-height</code></li>
      <li><code>$legend-font-size</code></li>
      <li><code>$line-length-sm</code></li>
      <li><code>$line-length-md</code></li>
      <li><code>$mid-spacing</code></li>
      <li><code>$orange-filter</code></li>
      <li><code>$outline-offset</code></li>
      <li><code>$outline-width</code></li>
      <li><code>$pre-line-height</code></li>
      <li><code>$step-item-padding-end</code></li>
      <li><code>$title-bar-border-color-dark</code></li>
      <li><code>$title-bar-font-size-md</code></li>
      <li><code>$title-bar-font-size-xl</code></li>
      <li><code>$title-bar-line-height-md</code></li>
      <li><code>$title-bar-line-height-xl</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped CSS variables:</summary>
    <ul>
      <li><code>--bs-btn-close-active-border-color</code></li>
      <li><code>--bs-btn-close-active-color</code></li>
      <li><code>--bs-btn-close-bg</code></li>
      <li><code>--bs-btn-close-border-color</code></li>
      <li><code>--bs-btn-close-color</code></li>
      <li><code>--bs-btn-close-disabled-color</code></li>
      <li><code>--bs-btn-close-hover-color</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-negative-emphasized">Breaking</span> CSS variables only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>--bs-border-radius</code></li>
      <li><code>--bs-border-radius-2xl</code></li>
      <li><code>--bs-border-radius-lg</code></li>
      <li><code>--bs-border-radius-pill</code></li>
      <li><code>--bs-border-radius-sm</code></li>
      <li><code>--bs-border-radius-xl</code></li>
      <li><code>--bs-border-radius-xxl</code></li>
      <li><code>--bs-box-shadow</code></li>
      <li><code>--bs-box-shadow-inset</code></li>
      <li><code>--bs-box-shadow-lg</code></li>
      <li><code>--bs-box-shadow-sm</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped Sass mixins:</summary>
    <ul>
      <li><code>make-container-fluid-margin()</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-negative-emphasized">Breaking</span> Keys in <code>$utilities</code> map only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>border</code></li>
      <li><code>border-bottom</code></li>
      <li><code>border-end</code></li>
      <li><code>border-opacity</code></li>
      <li><code>border-start</code></li>
      <li><code>border-top</code></li>
      <li><code>border-width</code></li>
      <li><code>column-gap</code></li>
      <li><code>font-size</code></li>
      <li><code>font-weight</code></li>
      <li><code>gap</code></li>
      <li><code>line-height</code></li>
      <li><code>margin-bottom</code></li>
      <li><code>margin-end</code></li>
      <li><code>margin</code></li>
      <li><code>margin-start</code></li>
      <li><code>margin-top</code></li>
      <li><code>margin-x</code></li>
      <li><code>margin-y</code></li>
      <li><code>negative-margin-bottom</code></li>
      <li><code>negative-margin-end</code></li>
      <li><code>negative-margin</code></li>
      <li><code>negative-margin-start</code></li>
      <li><code>negative-margin-top</code></li>
      <li><code>negative-margin-x</code></li>
      <li><code>negative-margin-y</code></li>
      <li><code>opacity</code></li>
      <li><code>padding-bottom</code></li>
      <li><code>padding-end</code></li>
      <li><code>padding</code></li>
      <li><code>padding-start</code></li>
      <li><code>padding-top</code></li>
      <li><code>padding-x</code></li>
      <li><code>padding-y</code></li>
      <li><code>rounded</code></li>
      <li><code>rounded-bottom</code></li>
      <li><code>rounded-end</code></li>
      <li><code>rounded-start</code></li>
      <li><code>rounded-top</code></li>
      <li><code>row-gap</code></li>
      <li><code>shadow</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>line-length</code></li>
    </ul>
  </details>

- <span class="badge text-bg-status-warning-emphasized">Warning</span> Signature of `make-row($gutter, $gutter-sm)` is now `make-row($gutter)`.

## Sass mixins

- <span class="badge text-bg-status-positive-emphasized">New</span> The mixin `get-font-size({font-size-ref})` has been added, where `font-size-ref` is one of: `"code-medium"`, `"label-small"`, `"label-medium"`, `"label-large"`, `"label-xlarge"`, `"body-small"`, `"body-medium"`, `"body-large"`, `"heading-small"`, `"heading-medium"`, `"heading-large"`, `"heading-xlarge"`, `"display-small"`, `"display-medium"`, `"display-large"`. If you have/need any `font-size` in one of your SCSS classes, please consider using this mixin instead. See [Typography Sass mixins]({{< docsref "/content/typography/#sass-mixins" >}}) for more details.
