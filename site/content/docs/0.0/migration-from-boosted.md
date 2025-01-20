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

## Foundations

- <span class="badge text-bg-status-warning-emphasized">Warning</span> Orange color has been modified from `#f16e00` to `#f15e00`. It means that under certain circumstances, you might be able to use Orange and light gray items together.

- <span class="badge text-bg-status-positive-emphasized">New</span> We provide two brand new themes that are <code>root</code> and <code>root-inverted</code>. They are complementary to `light` and `dark`. See more on our [color modes page]({{< docsref "/customize/color-modes" >}})

- <span class="badge text-bg-status-warning-emphasized">Warning</span> The root selector have been tweaked for more flexibility on JS frameworks. Please don't hesitate to contact us if you find any issue with it.

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

### Form floating

- <span class="badge text-bg-status-positive-emphasized">New</span> Added the Form Floating documentation page.

## Forms

### Checks & radios

- <span class="badge text-bg-status-warning-emphasized">Warning</span> `form-star-rating()` mixin has been removed as it was deprecated in Boosted v5.3.2.

## Helpers

### Color background

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Most color-background color helpers have been removed or changed.

- <span class="badge text-bg-status-positive-emphasized">New</span> The new color-background color helpers are now available. Visit our [color-bg page]({{< docsref "/helpers/color-background" >}}) to see more.

- <details>
    <summary><span class="badge text-bg-status-info-emphasized">Info</span> Here are the modifications to apply in the exact same order to your websites. Please make sure to adapt the <code>[data-bs-theme]</code> to your context:</summary>

  1. `.text-bg-primary` → `.text-bg-brand-primary`
  2. `.text-bg-secondary` → `.text-bg-emphasized` or `.text-bg-neutral-emphasized`
  3. `.text-bg-success` → `.text-bg-status-positive-emphasized` or in some rare cases `.text-bg-status-positive-muted`
  4. `.text-bg-danger` → `.text-bg-status-negative-emphasized` or in some rare cases `.text-bg-status-negative-muted`
  5. `.text-bg-warning` → `.text-bg-status-warning-emphasized` or in some rare cases `.text-bg-status-warning-muted`
  6. `.text-bg-info` → `.text-bg-status-info-emphasized` or in some rare cases `.text-bg-status-info-muted`
  7. `.text-bg-light` → `.text-bg-secondary`
  8. `.text-bg-dark` → `.text-bg-emphasized`

  </details>

### Colored links

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> All colored links helpers have been removed.

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

### Background

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Most background color utilities have been removed or changed.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Background opacity utilities have been removed.

- <span class="badge text-bg-status-positive-emphasized">New</span> The new background color utilities are now available. Visit our [background page]({{< docsref "/utilities/background" >}}) to see more.

- <details>
    <summary><span class="badge text-bg-status-info-emphasized">Info</span> Here are the modifications to apply in the exact same order to your websites. Please make sure to adapt the <code>[data-bs-theme]</code> to your context:</summary>

  1. `.bg-transparent` stays the same
  2. `.bg-white` → `.bg-always-white`
  3. `.bg-black` → `.bg-always-black`
  4. `.bg-primary` → `.bg-brand-primary`
  5. `.bg-primary-subtle` (that shouldn't have been used) → `.bg-tertiary`
  6. `.bg-secondary` → `.bg-emphasized` or in some rare cases `.bg-status-neutral-emphasized`
  7. `.bg-secondary-subtle` (that shouldn't have been used) → `.bg-secondary`
  8. `.bg-success` → `.bg-status-positive-emphasized` or in some rare cases `.bg-status-positive-muted`
  9. `.bg-success-subtle` (that shouldn't have been used) → `.bg-status-positive-muted`
  10. `.bg-danger` → `.bg-status-negative-emphasized` or in some rare cases `.bg-status-negative-muted`
  11. `.bg-danger-subtle` (that shouldn't have been used) → `.bg-status-negative-muted`
  12. `.bg-info` → `.bg-status-info-emphasized` or in some rare cases `.bg-status-info-muted`
  13. `.bg-info-subtle` (that shouldn't have been used) → `.bg-status-positive-muted`
  14. `.bg-warning` → `.bg-status-warning-emphasized`, `.bg-status-accent-emphasized` or in some rare cases `.bg-status-warning-muted`, `.bg-status-accent-muted`
  15. `.bg-warning-subtle` (that shouldn't have been used) → `.bg-status-warning-muted` or `.bg-status-accent-muted` depending on your context
  16. `.bg-body` → `.bg-primary`
  17. `.bg-body-secondary` → `.bg-secondary`
  18. `.bg-body-tertiary` → `.bg-secondary`
  19. `.bg-light` → `.bg-secondary`
  20. `.bg-light-subtle` (that shouldn't have been used) → `.bg-secondary`
  21. `.bg-dark` → `.bg-emphasized` or `.bg-always-black` depending on your context
  22. `.bg-dark-subtle` (that shouldn't have been used) → `.bg-secondary`
  23. `.bg-supporting-*` → To remove or replace with the appropriate background

  </details>

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

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> All border color utilities have been removed or changed.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Border opacity utilities have been removed.

- <span class="badge text-bg-status-positive-emphasized">New</span> The new border color utilities are now available. Visit our [border page]({{< docsref "/utilities/borders#color" >}}) to see more.

- <details>
    <summary><span class="badge text-bg-status-info-emphasized">Info</span> Here are the modifications to apply in your websites:</summary>

  1. `.border-primary` → `.border-brand-primary`
  2. `.border-black` → `.border-always-black` or `.border-always-on-white` or `.border-on-brand-primary`
  3. `.border-white` → `.border-always-white` or `.border-always-on-black`
  4. All `.border-*-subtle` (that shouldn't have been used) → `.border-default`
  5. All the remaining `.border-*` → `.border-emphasized`

  </details>

### Colors

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Most text color utilities have been removed or changed.

- <span class="badge text-bg-status-negative-emphasized">Breaking</span> Text opacity utilities have been removed.

- <span class="badge text-bg-status-positive-emphasized">New</span> The new text color utilities are now available. Visit our [color page]({{< docsref "/utilities/colors" >}}) to see more.

- <details>
    <summary><span class="badge text-bg-status-info-emphasized">Info</span> Here are the modifications to apply in your websites:</summary>

  1. `.text-primary(-emphasis)` → `.text-brand-primary`
  2. `.text-secondary(-emphasis)` → `.text-muted`
  3. `.text-success(-emphasis)` (that shouldn't have been used on texts) → `.text-status-positive`
  4. `.text-danger(-emphasis)` (that shouldn't have been used on texts) → `.text-status-negative`
  5. `.text-warning(-emphasis)` (that shouldn't have been used on texts) → `.text-status-warning`
  6. `.text-info(-emphasis)` (that shouldn't have been used on texts) → `.text-status-info`
  7. `.text-light(-emphasis)` → `.text-disabled`
  8. `.text-dark(-emphasis)` → `.text-default` or see `.text-black` below
  9. `.text-body(-emphasis)` → `.text-default` or `.text-on-status-muted`
  10. `.text-body-secondary` → `.text-muted`
  11. `.text-body-tertiary` → `.text-muted`
  12. `.text-black` → `.text-always-black` or `.text-on-brand-primary` or `.text-on-status-emphasized` or `.text-on-status-emphasized-alt` or `.text-always-on-white`
  13. `.text-white` → `.text-always-white` or `.text-always-on-black`
  14. `.text-black-50` → `.text-muted`
  15. `.text-white-50` → `.text-muted`
  16. `.text-reset` stays the same

  </details>

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
    <!-- Next technique is almost unusable in practice -→
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

- <span class="badge text-bg-status-warning-emphasized">Warning</span> `scss/_color-palette.scss` doesn't exist anymore. If you were importing it in your project, please make sure to remove it.

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
      <li><code>$ouds-color-action-disabled-dark</code></li>
      <li><code>$ouds-color-action-disabled-light</code></li>
      <li><code>$ouds-color-action-enabled-dark</code></li>
      <li><code>$ouds-color-action-enabled-light</code></li>
      <li><code>$ouds-color-action-focus-dark</code></li>
      <li><code>$ouds-color-action-focus-light</code></li>
      <li><code>$ouds-color-action-highlighted-dark</code></li>
      <li><code>$ouds-color-action-highlighted-light</code></li>
      <li><code>$ouds-color-action-hover-dark</code></li>
      <li><code>$ouds-color-action-hover-light</code></li>
      <li><code>$ouds-color-action-loading-dark</code></li>
      <li><code>$ouds-color-action-loading-light</code></li>
      <li><code>$ouds-color-action-negative-enabled-dark</code></li>
      <li><code>$ouds-color-action-negative-enabled-light</code></li>
      <li><code>$ouds-color-action-negative-focus-dark</code></li>
      <li><code>$ouds-color-action-negative-focus-light</code></li>
      <li><code>$ouds-color-action-negative-hover-dark</code></li>
      <li><code>$ouds-color-action-negative-hover-light</code></li>
      <li><code>$ouds-color-action-negative-loading-dark</code></li>
      <li><code>$ouds-color-action-negative-loading-light</code></li>
      <li><code>$ouds-color-action-negative-pressed-dark</code></li>
      <li><code>$ouds-color-action-negative-pressed-light</code></li>
      <li><code>$ouds-color-action-pressed-dark</code></li>
      <li><code>$ouds-color-action-pressed-light</code></li>
      <li><code>$ouds-color-action-selected-dark</code></li>
      <li><code>$ouds-color-action-selected-light</code></li>
      <li><code>$ouds-color-action-support-enabled-dark</code></li>
      <li><code>$ouds-color-action-support-enabled-light</code></li>
      <li><code>$ouds-color-action-support-focus-dark</code></li>
      <li><code>$ouds-color-action-support-focus-light</code></li>
      <li><code>$ouds-color-action-support-hover-dark</code></li>
      <li><code>$ouds-color-action-support-hover-light</code></li>
      <li><code>$ouds-color-action-support-loading-dark</code></li>
      <li><code>$ouds-color-action-support-loading-light</code></li>
      <li><code>$ouds-color-action-support-pressed-dark</code></li>
      <li><code>$ouds-color-action-support-pressed-light</code></li>
      <li><code>$ouds-color-action-visited-dark</code></li>
      <li><code>$ouds-color-action-visited-light</code></li>
      <li><code>$ouds-color-always-black-dark</code></li>
      <li><code>$ouds-color-always-black-light</code></li>
      <li><code>$ouds-color-always-on-black-dark</code></li>
      <li><code>$ouds-color-always-on-black-light</code></li>
      <li><code>$ouds-color-always-on-white-dark</code></li>
      <li><code>$ouds-color-always-on-white-light</code></li>
      <li><code>$ouds-color-always-white-dark</code></li>
      <li><code>$ouds-color-always-white-light</code></li>
      <li><code>$ouds-color-bg-emphasized-dark</code></li>
      <li><code>$ouds-color-bg-emphasized-light</code></li>
      <li><code>$ouds-color-bg-primary-dark</code></li>
      <li><code>$ouds-color-bg-primary-light</code></li>
      <li><code>$ouds-color-bg-secondary-dark</code></li>
      <li><code>$ouds-color-bg-secondary-light</code></li>
      <li><code>$ouds-color-bg-tertiary-dark</code></li>
      <li><code>$ouds-color-bg-tertiary-light</code></li>
      <li><code>$ouds-color-border-brand-primary-dark</code></li>
      <li><code>$ouds-color-border-brand-primary-light</code></li>
      <li><code>$ouds-color-border-default-dark</code></li>
      <li><code>$ouds-color-border-default-light</code></li>
      <li><code>$ouds-color-border-emphasized-dark</code></li>
      <li><code>$ouds-color-border-emphasized-light</code></li>
      <li><code>$ouds-color-border-focus-dark</code></li>
      <li><code>$ouds-color-border-focus-inset-dark</code></li>
      <li><code>$ouds-color-border-focus-inset-light</code></li>
      <li><code>$ouds-color-border-focus-light</code></li>
      <li><code>$ouds-color-border-on-brand-primary-dark</code></li>
      <li><code>$ouds-color-border-on-brand-primary-light</code></li>
      <li><code>$ouds-color-content-brand-primary-dark</code></li>
      <li><code>$ouds-color-content-brand-primary-light</code></li>
      <li><code>$ouds-color-content-default-dark</code></li>
      <li><code>$ouds-color-content-default-light</code></li>
      <li><code>$ouds-color-content-disabled-dark</code></li>
      <li><code>$ouds-color-content-disabled-light</code></li>
      <li><code>$ouds-color-content-muted-dark</code></li>
      <li><code>$ouds-color-content-muted-light</code></li>
      <li><code>$ouds-color-content-on-action-disabled-dark</code></li>
      <li><code>$ouds-color-content-on-action-disabled-light</code></li>
      <li><code>$ouds-color-content-on-action-enabled-dark</code></li>
      <li><code>$ouds-color-content-on-action-enabled-light</code></li>
      <li><code>$ouds-color-content-on-action-focus-dark</code></li>
      <li><code>$ouds-color-content-on-action-focus-light</code></li>
      <li><code>$ouds-color-content-on-action-highlighted-dark</code></li>
      <li><code>$ouds-color-content-on-action-highlighted-light</code></li>
      <li><code>$ouds-color-content-on-action-hover-dark</code></li>
      <li><code>$ouds-color-content-on-action-hover-light</code></li>
      <li><code>$ouds-color-content-on-action-loading-dark</code></li>
      <li><code>$ouds-color-content-on-action-loading-light</code></li>
      <li><code>$ouds-color-content-on-action-pressed-dark</code></li>
      <li><code>$ouds-color-content-on-action-pressed-light</code></li>
      <li><code>$ouds-color-content-on-brand-primary-dark</code></li>
      <li><code>$ouds-color-content-on-brand-primary-light</code></li>
      <li><code>$ouds-color-content-on-overlay-emphasized-dark</code></li>
      <li><code>$ouds-color-content-on-overlay-emphasized-light</code></li>
      <li><code>$ouds-color-content-on-status-emphasized-alt-dark</code></li>
      <li><code>$ouds-color-content-on-status-emphasized-alt-light</code></li>
      <li><code>$ouds-color-content-on-status-emphasized-dark</code></li>
      <li><code>$ouds-color-content-on-status-emphasized-light</code></li>
      <li><code>$ouds-color-content-on-status-muted-dark</code></li>
      <li><code>$ouds-color-content-on-status-muted-light</code></li>
      <li><code>$ouds-color-content-status-info-dark</code></li>
      <li><code>$ouds-color-content-status-info-light</code></li>
      <li><code>$ouds-color-content-status-negative-dark</code></li>
      <li><code>$ouds-color-content-status-negative-light</code></li>
      <li><code>$ouds-color-content-status-positive-dark</code></li>
      <li><code>$ouds-color-content-status-positive-light</code></li>
      <li><code>$ouds-color-content-status-warning-dark</code></li>
      <li><code>$ouds-color-content-status-warning-light</code></li>
      <li><code>$ouds-color-decorative-accent-1-default-dark</code></li>
      <li><code>$ouds-color-decorative-accent-1-default-light</code></li>
      <li><code>$ouds-color-decorative-accent-1-emphasized-dark</code></li>
      <li><code>$ouds-color-decorative-accent-1-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-accent-1-muted-dark</code></li>
      <li><code>$ouds-color-decorative-accent-1-muted-light</code></li>
      <li><code>$ouds-color-decorative-accent-2-default-dark</code></li>
      <li><code>$ouds-color-decorative-accent-2-default-light</code></li>
      <li><code>$ouds-color-decorative-accent-2-emphasized-dark</code>0</li>
      <li><code>$ouds-color-decorative-accent-2-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-accent-2-muted-dark</code></li>
      <li><code>$ouds-color-decorative-accent-2-muted-light</code></li>
      <li><code>$ouds-color-decorative-accent-3-default-dark</code></li>
      <li><code>$ouds-color-decorative-accent-3-default-light</code></li>
      <li><code>$ouds-color-decorative-accent-3-emphasized-dark</code></li>
      <li><code>$ouds-color-decorative-accent-3-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-accent-3-muted-dark</code></li>
      <li><code>$ouds-color-decorative-accent-3-muted-light</code></li>
      <li><code>$ouds-color-decorative-accent-4-default-dark</code></li>
      <li><code>$ouds-color-decorative-accent-4-default-light</code></li>
      <li><code>$ouds-color-decorative-accent-4-emphasized-dark</code></li>
      <li><code>$ouds-color-decorative-accent-4-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-accent-4-muted-dark</code></li>
      <li><code>$ouds-color-decorative-accent-4-muted-light</code></li>
      <li><code>$ouds-color-decorative-accent-5-default-dark</code></li>
      <li><code>$ouds-color-decorative-accent-5-default-light</code></li>
      <li><code>$ouds-color-decorative-accent-5-emphasized-dark</code></li>
      <li><code>$ouds-color-decorative-accent-5-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-accent-5-muted-dark</code></li>
      <li><code>$ouds-color-decorative-accent-5-muted-light</code></li>
      <li><code>$ouds-color-decorative-amber-100</code></li>
      <li><code>$ouds-color-decorative-amber-200</code></li>
      <li><code>$ouds-color-decorative-amber-300</code></li>
      <li><code>$ouds-color-decorative-amber-400</code></li>
      <li><code>$ouds-color-decorative-amber-500</code></li>
      <li><code>$ouds-color-decorative-amber-600</code></li>
      <li><code>$ouds-color-decorative-amber-700</code></li>
      <li><code>$ouds-color-decorative-amber-800</code></li>
      <li><code>$ouds-color-decorative-amber-900</code></li>
      <li><code>$ouds-color-decorative-amethyst-100</code></li>
      <li><code>$ouds-color-decorative-amethyst-200</code></li>
      <li><code>$ouds-color-decorative-amethyst-300</code></li>
      <li><code>$ouds-color-decorative-amethyst-400</code></li>
      <li><code>$ouds-color-decorative-amethyst-500</code></li>
      <li><code>$ouds-color-decorative-amethyst-600</code></li>
      <li><code>$ouds-color-decorative-amethyst-700</code></li>
      <li><code>$ouds-color-decorative-amethyst-800</code></li>
      <li><code>$ouds-color-decorative-amethyst-900</code></li>
      <li><code>$ouds-color-decorative-brand-primary-light</code></li>
      <li><code>$ouds-color-decorative-brand-secondary-light</code></li>
      <li><code>$ouds-color-decorative-brand-tertiary-light</code></li>
      <li><code>$ouds-color-decorative-brand-primary-dark</code></li>
      <li><code>$ouds-color-decorative-brand-secondary-dark</code></li>
      <li><code>$ouds-color-decorative-brand-tertiary-dark</code></li>
      <li><code>$ouds-color-decorative-deep-peach-100</code></li>
      <li><code>$ouds-color-decorative-deep-peach-200</code></li>
      <li><code>$ouds-color-decorative-deep-peach-300</code></li>
      <li><code>$ouds-color-decorative-deep-peach-400</code></li>
      <li><code>$ouds-color-decorative-deep-peach-500</code></li>
      <li><code>$ouds-color-decorative-deep-peach-600</code></li>
      <li><code>$ouds-color-decorative-deep-peach-700</code></li>
      <li><code>$ouds-color-decorative-deep-peach-800</code></li>
      <li><code>$ouds-color-decorative-deep-peach-900</code></li>
      <li><code>$ouds-color-decorative-emerald-100</code></li>
      <li><code>$ouds-color-decorative-emerald-200</code></li>
      <li><code>$ouds-color-decorative-emerald-300</code></li>
      <li><code>$ouds-color-decorative-emerald-400</code></li>
      <li><code>$ouds-color-decorative-emerald-500</code></li>
      <li><code>$ouds-color-decorative-emerald-600</code></li>
      <li><code>$ouds-color-decorative-emerald-700</code></li>
      <li><code>$ouds-color-decorative-emerald-800</code></li>
      <li><code>$ouds-color-decorative-emerald-900</code></li>
      <li><code>$ouds-color-decorative-neutral-default-dark</code></li>
      <li><code>$ouds-color-decorative-neutral-default-light</code></li>
      <li><code>$ouds-color-decorative-neutral-emphasized-dark</code></li>
      <li><code>$ouds-color-decorative-neutral-emphasized-light</code></li>
      <li><code>$ouds-color-decorative-neutral-muted-dark</code></li>
      <li><code>$ouds-color-decorative-neutral-muted-light</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-100</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-200</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-300</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-400</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-500</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-600</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-700</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-800</code></li>
      <li><code>$ouds-color-decorative-shocking-pink-900</code></li>
      <li><code>$ouds-color-decorative-skin-tint-100-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-200-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-300-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-400-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-500-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-600-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-700-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-800-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-900-dark</code></li>
      <li><code>$ouds-color-decorative-skin-tint-100-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-200-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-300-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-400-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-500-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-600-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-700-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-800-light</code></li>
      <li><code>$ouds-color-decorative-skin-tint-900-light</code></li>
      <li><code>$ouds-color-decorative-sky-100</code></li>
      <li><code>$ouds-color-decorative-sky-200</code></li>
      <li><code>$ouds-color-decorative-sky-300</code></li>
      <li><code>$ouds-color-decorative-sky-400</code></li>
      <li><code>$ouds-color-decorative-sky-500</code></li>
      <li><code>$ouds-color-decorative-sky-600</code></li>
      <li><code>$ouds-color-decorative-sky-700</code></li>
      <li><code>$ouds-color-decorative-sky-800</code></li>
      <li><code>$ouds-color-decorative-sky-900</code></li>
      <li><code>$ouds-color-functional-black</code></li>
      <li><code>$ouds-color-functional-dark-gray-80</code></li>
      <li><code>$ouds-color-functional-dark-gray-160</code></li>
      <li><code>$ouds-color-functional-dark-gray-240</code></li>
      <li><code>$ouds-color-functional-dark-gray-320</code></li>
      <li><code>$ouds-color-functional-dark-gray-400</code></li>
      <li><code>$ouds-color-functional-dark-gray-480</code></li>
      <li><code>$ouds-color-functional-dark-gray-560</code></li>
      <li><code>$ouds-color-functional-dark-gray-640</code></li>
      <li><code>$ouds-color-functional-dark-gray-720</code></li>
      <li><code>$ouds-color-functional-dark-gray-800</code></li>
      <li><code>$ouds-color-functional-dark-gray-880</code></li>
      <li><code>$ouds-color-functional-dark-gray-960</code></li>
      <li><code>$ouds-color-functional-dodger-blue-100</code></li>
      <li><code>$ouds-color-functional-dodger-blue-200</code></li>
      <li><code>$ouds-color-functional-dodger-blue-300</code></li>
      <li><code>$ouds-color-functional-dodger-blue-400</code></li>
      <li><code>$ouds-color-functional-dodger-blue-500</code></li>
      <li><code>$ouds-color-functional-dodger-blue-600</code></li>
      <li><code>$ouds-color-functional-dodger-blue-700</code></li>
      <li><code>$ouds-color-functional-dodger-blue-800</code></li>
      <li><code>$ouds-color-functional-dodger-blue-900</code></li>
      <li><code>$ouds-color-functional-light-gray-80</code></li>
      <li><code>$ouds-color-functional-light-gray-160</code></li>
      <li><code>$ouds-color-functional-light-gray-240</code></li>
      <li><code>$ouds-color-functional-light-gray-320</code></li>
      <li><code>$ouds-color-functional-light-gray-400</code></li>
      <li><code>$ouds-color-functional-light-gray-480</code></li>
      <li><code>$ouds-color-functional-light-gray-560</code></li>
      <li><code>$ouds-color-functional-light-gray-640</code></li>
      <li><code>$ouds-color-functional-light-gray-720</code></li>
      <li><code>$ouds-color-functional-light-gray-800</code></li>
      <li><code>$ouds-color-functional-light-gray-880</code></li>
      <li><code>$ouds-color-functional-light-gray-960</code></li>
      <li><code>$ouds-color-functional-malachite-100</code></li>
      <li><code>$ouds-color-functional-malachite-200</code></li>
      <li><code>$ouds-color-functional-malachite-300</code></li>
      <li><code>$ouds-color-functional-malachite-400</code></li>
      <li><code>$ouds-color-functional-malachite-500</code></li>
      <li><code>$ouds-color-functional-malachite-600</code></li>
      <li><code>$ouds-color-functional-malachite-700</code></li>
      <li><code>$ouds-color-functional-malachite-800</code></li>
      <li><code>$ouds-color-functional-malachite-900</code></li>
      <li><code>$ouds-color-functional-scarlet-100</code></li>
      <li><code>$ouds-color-functional-scarlet-200</code></li>
      <li><code>$ouds-color-functional-scarlet-300</code></li>
      <li><code>$ouds-color-functional-scarlet-400</code></li>
      <li><code>$ouds-color-functional-scarlet-500</code></li>
      <li><code>$ouds-color-functional-scarlet-600</code></li>
      <li><code>$ouds-color-functional-scarlet-700</code></li>
      <li><code>$ouds-color-functional-scarlet-800</code></li>
      <li><code>$ouds-color-functional-scarlet-900</code></li>
      <li><code>$ouds-color-functional-sun-100</code></li>
      <li><code>$ouds-color-functional-sun-200</code></li>
      <li><code>$ouds-color-functional-sun-300</code></li>
      <li><code>$ouds-color-functional-sun-400</code></li>
      <li><code>$ouds-color-functional-sun-500</code></li>
      <li><code>$ouds-color-functional-sun-600</code></li>
      <li><code>$ouds-color-functional-sun-700</code></li>
      <li><code>$ouds-color-functional-sun-800</code></li>
      <li><code>$ouds-color-functional-sun-900</code></li>
      <li><code>$ouds-color-functional-white</code></li>
      <li><code>$ouds-color-opacity-black-0</code></li>
      <li><code>$ouds-color-opacity-black-40</code></li>
      <li><code>$ouds-color-opacity-black-80</code></li>
      <li><code>$ouds-color-opacity-black-120</code></li>
      <li><code>$ouds-color-opacity-black-160</code></li>
      <li><code>$ouds-color-opacity-black-200</code></li>
      <li><code>$ouds-color-opacity-black-240</code></li>
      <li><code>$ouds-color-opacity-black-280</code></li>
      <li><code>$ouds-color-opacity-black-320</code></li>
      <li><code>$ouds-color-opacity-black-360</code></li>
      <li><code>$ouds-color-opacity-black-400</code></li>
      <li><code>$ouds-color-opacity-black-440</code></li>
      <li><code>$ouds-color-opacity-black-480</code></li>
      <li><code>$ouds-color-opacity-black-520</code></li>
      <li><code>$ouds-color-opacity-black-560</code></li>
      <li><code>$ouds-color-opacity-black-600</code></li>
      <li><code>$ouds-color-opacity-black-640</code></li>
      <li><code>$ouds-color-opacity-black-680</code></li>
      <li><code>$ouds-color-opacity-black-720</code></li>
      <li><code>$ouds-color-opacity-black-760</code></li>
      <li><code>$ouds-color-opacity-black-800</code></li>
      <li><code>$ouds-color-opacity-black-840</code></li>
      <li><code>$ouds-color-opacity-black-880</code></li>
      <li><code>$ouds-color-opacity-black-920</code></li>
      <li><code>$ouds-color-opacity-black-960</code></li>
      <li><code>$ouds-color-opacity-dodger-blue</code></li>
      <li><code>$ouds-color-opacity-lower-dark</code></li>
      <li><code>$ouds-color-opacity-lower-light</code></li>
      <li><code>$ouds-color-opacity-lowest-dark</code></li>
      <li><code>$ouds-color-opacity-lowest-light</code></li>
      <li><code>$ouds-color-opacity-malachite</code></li>
      <li><code>$ouds-color-opacity-scarlet</code></li>
      <li><code>$ouds-color-opacity-sun</code></li>
      <li><code>$ouds-color-opacity-transparent-dark</code></li>
      <li><code>$ouds-color-opacity-transparent-light</code></li>
      <li><code>$ouds-color-opacity-white-0</code></li>
      <li><code>$ouds-color-opacity-white-40</code></li>
      <li><code>$ouds-color-opacity-white-80</code></li>
      <li><code>$ouds-color-opacity-white-120</code></li>
      <li><code>$ouds-color-opacity-white-160</code></li>
      <li><code>$ouds-color-opacity-white-200</code></li>
      <li><code>$ouds-color-opacity-white-240</code></li>
      <li><code>$ouds-color-opacity-white-280</code></li>
      <li><code>$ouds-color-opacity-white-320</code></li>
      <li><code>$ouds-color-opacity-white-360</code></li>
      <li><code>$ouds-color-opacity-white-400</code></li>
      <li><code>$ouds-color-opacity-white-440</code></li>
      <li><code>$ouds-color-opacity-white-480</code></li>
      <li><code>$ouds-color-opacity-white-520</code></li>
      <li><code>$ouds-color-opacity-white-560</code></li>
      <li><code>$ouds-color-opacity-white-600</code></li>
      <li><code>$ouds-color-opacity-white-640</code></li>
      <li><code>$ouds-color-opacity-white-680</code></li>
      <li><code>$ouds-color-opacity-white-720</code></li>
      <li><code>$ouds-color-opacity-white-760</code></li>
      <li><code>$ouds-color-opacity-white-800</code></li>
      <li><code>$ouds-color-opacity-white-840</code></li>
      <li><code>$ouds-color-opacity-white-880</code></li>
      <li><code>$ouds-color-opacity-white-920</code></li>
      <li><code>$ouds-color-opacity-white-960</code></li>
      <li><code>$ouds-color-orange-50</code></li>
      <li><code>$ouds-color-orange-100</code></li>
      <li><code>$ouds-color-orange-200</code></li>
      <li><code>$ouds-color-orange-300</code></li>
      <li><code>$ouds-color-orange-400</code></li>
      <li><code>$ouds-color-orange-500</code></li>
      <li><code>$ouds-color-orange-550</code></li>
      <li><code>$ouds-color-orange-600</code></li>
      <li><code>$ouds-color-orange-700</code></li>
      <li><code>$ouds-color-orange-800</code></li>
      <li><code>$ouds-color-orange-900</code></li>
      <li><code>$ouds-color-overlay-default-dark</code></li>
      <li><code>$ouds-color-overlay-default-light</code></li>
      <li><code>$ouds-color-overlay-drag-dark</code></li>
      <li><code>$ouds-color-overlay-drag-light</code></li>
      <li><code>$ouds-color-overlay-emphasized-dark</code></li>
      <li><code>$ouds-color-overlay-emphasized-light</code></li>
      <li><code>$ouds-color-overlay-modal-dark</code></li>
      <li><code>$ouds-color-overlay-modal-light</code></li>
      <li><code>$ouds-color-surface-brand-primary-dark</code></li>
      <li><code>$ouds-color-surface-brand-primary-light</code></li>
      <li><code>$ouds-color-surface-status-accent-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-accent-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-accent-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-accent-muted-light</code></li>
      <li><code>$ouds-color-surface-status-info-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-info-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-info-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-info-muted-light</code></li>
      <li><code>$ouds-color-surface-status-negative-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-negative-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-negative-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-negative-muted-light</code></li>
      <li><code>$ouds-color-surface-status-neutral-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-neutral-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-neutral-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-neutral-muted-light</code></li>
      <li><code>$ouds-color-surface-status-positive-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-positive-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-positive-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-positive-muted-light</code></li>
      <li><code>$ouds-color-surface-status-warning-emphasized-dark</code></li>
      <li><code>$ouds-color-surface-status-warning-emphasized-light</code></li>
      <li><code>$ouds-color-surface-status-warning-muted-dark</code></li>
      <li><code>$ouds-color-surface-status-warning-muted-light</code></li>
      <li><code>$ouds-color-warm-gray-100</code></li>
      <li><code>$ouds-color-warm-gray-200</code></li>
      <li><code>$ouds-color-warm-gray-300</code></li>
      <li><code>$ouds-color-warm-gray-400</code></li>
      <li><code>$ouds-color-warm-gray-500</code></li>
      <li><code>$ouds-color-warm-gray-600</code></li>
      <li><code>$ouds-color-warm-gray-700</code></li>
      <li><code>$ouds-color-warm-gray-800</code></li>
      <li><code>$ouds-color-warm-gray-900</code></li>
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
      <li><code>$ouds-font-size-code-medium</code></li>
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
      <li><code>$ouds-backgrounds</code></li>
      <li><code>$ouds-border-colors</code></li>
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
      <li><code>$ouds-text-colors</code></li>
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
      <li><code>border-color-ouds</code></li>
      <li><code>border-end-ouds</code></li>
      <li><code>border-ouds</code></li>
      <li><code>border-start-ouds</code></li>
      <li><code>border-style-ouds</code></li>
      <li><code>border-top-ouds</code></li>
      <li><code>border-width-ouds</code></li>
      <li><code>color-ouds</code></li>
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
    <summary><span class="badge text-bg-status-positive-emphasized">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-body-letter-spacing</code></li>
      <li><code>--bs-color-action-disabled</code></li>
      <li><code>--bs-color-action-enabled</code></li>
      <li><code>--bs-color-action-focus</code></li>
      <li><code>--bs-color-action-highlighted</code></li>
      <li><code>--bs-color-action-hover</code></li>
      <li><code>--bs-color-action-loading</code></li>
      <li><code>--bs-color-action-negative-enabled</code></li>
      <li><code>--bs-color-action-negative-focus</code></li>
      <li><code>--bs-color-action-negative-hover</code></li>
      <li><code>--bs-color-action-negative-loading</code></li>
      <li><code>--bs-color-action-negative-pressed</code></li>
      <li><code>--bs-color-action-pressed</code></li>
      <li><code>--bs-color-action-selected</code></li>
      <li><code>--bs-color-action-support-enabled</code></li>
      <li><code>--bs-color-action-support-focus</code></li>
      <li><code>--bs-color-action-support-hover</code></li>
      <li><code>--bs-color-action-support-loading</code></li>
      <li><code>--bs-color-action-support-pressed</code></li>
      <li><code>--bs-color-action-visited</code></li>
      <li><code>--bs-color-always-black</code></li>
      <li><code>--bs-color-always-on-black</code></li>
      <li><code>--bs-color-always-on-white</code></li>
      <li><code>--bs-color-always-white</code></li>
      <li><code>--bs-color-bg-emphasized</code></li>
      <li><code>--bs-color-bg-primary</code></li>
      <li><code>--bs-color-bg-secondary</code></li>
      <li><code>--bs-color-bg-tertiary</code></li>
      <li><code>--bs-color-border-brand-primary</code></li>
      <li><code>--bs-color-border-default</code></li>
      <li><code>--bs-color-border-emphasized</code></li>
      <li><code>--bs-color-border-focus</code></li>
      <li><code>--bs-color-border-focus-inset</code></li>
      <li><code>--bs-color-border-on-brand-primary</code></li>
      <li><code>--bs-color-content-brand-primary</code></li>
      <li><code>--bs-color-content-default</code></li>
      <li><code>--bs-color-content-disabled</code></li>
      <li><code>--bs-color-content-muted</code></li>
      <li><code>--bs-color-content-on-action-disabled</code></li>
      <li><code>--bs-color-content-on-action-enabled</code></li>
      <li><code>--bs-color-content-on-action-focus</code></li>
      <li><code>--bs-color-content-on-action-highlighted</code></li>
      <li><code>--bs-color-content-on-action-hover</code></li>
      <li><code>--bs-color-content-on-action-loading</code></li>
      <li><code>--bs-color-content-on-action-pressed</code></li>
      <li><code>--bs-color-content-on-brand-primary</code></li>
      <li><code>--bs-color-content-on-overlay-emphasized</code></li>
      <li><code>--bs-color-content-on-status-emphasized</code></li>
      <li><code>--bs-color-content-on-status-emphasized-alt</code></li>
      <li><code>--bs-color-content-on-status-muted</code></li>
      <li><code>--bs-color-content-status-info</code></li>
      <li><code>--bs-color-content-status-negative</code></li>
      <li><code>--bs-color-content-status-positive</code></li>
      <li><code>--bs-color-content-status-warning</code></li>
      <li><code>--bs-color-decorative-accent-1-default</code></li>
      <li><code>--bs-color-decorative-accent-1-emphasized</code></li>
      <li><code>--bs-color-decorative-accent-1-muted</code></li>
      <li><code>--bs-color-decorative-accent-2-default</code></li>
      <li><code>--bs-color-decorative-accent-2-emphasized</code></li>
      <li><code>--bs-color-decorative-accent-2-muted</code></li>
      <li><code>--bs-color-decorative-accent-3-default</code></li>
      <li><code>--bs-color-decorative-accent-3-emphasized</code></li>
      <li><code>--bs-color-decorative-accent-3-muted</code></li>
      <li><code>--bs-color-decorative-accent-4-default</code></li>
      <li><code>--bs-color-decorative-accent-4-emphasized</code></li>
      <li><code>--bs-color-decorative-accent-4-muted</code></li>
      <li><code>--bs-color-decorative-accent-5-default</code></li>
      <li><code>--bs-color-decorative-accent-5-emphasized</code></li>
      <li><code>--bs-color-decorative-accent-5-muted</code></li>
      <li><code>--bs-color-decorative-brand-primary</code></li>
      <li><code>--bs-color-decorative-brand-secondary</code></li>
      <li><code>--bs-color-decorative-brand-tertiary</code></li>
      <li><code>--bs-color-decorative-neutral-default</code></li>
      <li><code>--bs-color-decorative-neutral-emphasized</code></li>
      <li><code>--bs-color-decorative-neutral-muted</code></li>
      <li><code>--bs-color-decorative-skin-tint-100</code></li>
      <li><code>--bs-color-decorative-skin-tint-200</code></li>
      <li><code>--bs-color-decorative-skin-tint-300</code></li>
      <li><code>--bs-color-decorative-skin-tint-400</code></li>
      <li><code>--bs-color-decorative-skin-tint-500</code></li>
      <li><code>--bs-color-decorative-skin-tint-600</code></li>
      <li><code>--bs-color-decorative-skin-tint-700</code></li>
      <li><code>--bs-color-decorative-skin-tint-800</code></li>
      <li><code>--bs-color-decorative-skin-tint-900</code></li>
      <li><code>--bs-color-opacity-lower</code></li>
      <li><code>--bs-color-opacity-lowest</code></li>
      <li><code>--bs-color-opacity-transparent</code></li>
      <li><code>--bs-color-overlay-default</code></li>
      <li><code>--bs-color-overlay-drag</code></li>
      <li><code>--bs-color-overlay-emphasized</code></li>
      <li><code>--bs-color-overlay-modal</code></li>
      <li><code>--bs-color-surface-brand-primary</code></li>
      <li><code>--bs-color-surface-status-accent-emphasized</code></li>
      <li><code>--bs-color-surface-status-accent-muted</code></li>
      <li><code>--bs-color-surface-status-info-emphasized</code></li>
      <li><code>--bs-color-surface-status-info-muted</code></li>
      <li><code>--bs-color-surface-status-negative-emphasized</code></li>
      <li><code>--bs-color-surface-status-negative-muted</code></li>
      <li><code>--bs-color-surface-status-neutral-emphasized</code></li>
      <li><code>--bs-color-surface-status-neutral-muted</code></li>
      <li><code>--bs-color-surface-status-positive-emphasized</code></li>
      <li><code>--bs-color-surface-status-positive-muted</code></li>
      <li><code>--bs-color-surface-status-warning-emphasized</code></li>
      <li><code>--bs-color-surface-status-warning-muted</code></li>
      <li><code>--bs-container-margin-x</code></li>
      <li><code>--bs-elevation-color-default</code></li>
      <li><code>--bs-elevation-color-drag</code></li>
      <li><code>--bs-elevation-color-emphasized</code></li>
      <li><code>--bs-elevation-color-none</code></li>
      <li><code>--bs-elevation-color-raised</code></li>
      <li><code>--bs-elevation-color-sticky-default</code></li>
      <li><code>--bs-elevation-color-sticky-emphasized</code></li>
      <li><code>--bs-elevation-color-sticky-navigation-scrolled</code></li>
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
      <li><code>$border-color-subtle</code></li>
      <li><code>$border-color-subtle-dark</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$disabled-color</code></li>
      <li><code>$disabled-color-dark</code></li>
      <li><code>$display1-size</code></li>
      <li><code>$display1-spacing</code></li>
      <li><code>$display2-size</code></li>
      <li><code>$display2-spacing</code></li>
      <li><code>$display3-size</code></li>
      <li><code>$display3-spacing</code></li>
      <li><code>$display4-size</code></li>
      <li><code>$display4-spacing</code></li>
      <li><code>$focus-visible-inner-color</code></li>
      <li><code>$focus-visible-inner-color-dark</code></li>
      <li><code>$focus-visible-outer-color</code></li>
      <li><code>$focus-visible-outer-color-dark</code></li>
      <li><code>$footer-nav-link-font-weight</code></li>
      <li><code>$font-size-xlg</code></li>
      <li><code>$form-star-focus-box-shadow</code></li>
      <li><code>$form-star-focus-color</code></li>
      <li><code>$form-star-focus-color-dark</code></li>
      <li><code>$form-star-focus-outline</code></li>
      <li><code>$form-star-focus-outline-dark</code></li>
      <li><code>$functional-blue</code></li>
      <li><code>$functional-blue-dark</code></li>
      <li><code>$functional-green</code></li>
      <li><code>$functional-green-dark</code></li>
      <li><code>$functional-red</code></li>
      <li><code>$functional-red-dark</code></li>
      <li><code>$functional-yellow</code></li>
      <li><code>$functional-yellow-dark</code></li>
      <li><code>$gray-950</code></li>
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
      <li><code>$supporting-blue</code></li>
      <li><code>$supporting-green</code></li>
      <li><code>$supporting-orange</code></li>
      <li><code>$supporting-pink</code></li>
      <li><code>$supporting-purple</code></li>
      <li><code>$supporting-yellow</code></li>
      <li><code>$tertiary-active-bg</code></li>
      <li><code>$tertiary-active-bg-dark</code></li>
      <li><code>$title-bar-border-color-dark</code></li>
      <li><code>$title-bar-font-size-md</code></li>
      <li><code>$title-bar-font-size-xl</code></li>
      <li><code>$title-bar-line-height-md</code></li>
      <li><code>$title-bar-line-height-xl</code></li>
      <li><code>$variable-prefix</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped CSS variables:</summary>
    <ul>
      <li><code>--bs-border-color-subtle</code></li>
      <li><code>--bs-btn-close-active-border-color</code></li>
      <li><code>--bs-btn-close-active-color</code></li>
      <li><code>--bs-btn-close-bg</code></li>
      <li><code>--bs-btn-close-border-color</code></li>
      <li><code>--bs-btn-close-color</code></li>
      <li><code>--bs-btn-close-disabled-color</code></li>
      <li><code>--bs-btn-close-hover-color</code></li>
      <li><code>--bs-disabled-color</code></li>
      <li><code>--bs-focus-visible-inner-color</code></li>
      <li><code>--bs-focus-visible-outer-color</code></li>
      <li><code>--bs-gray-950</code></li>
      <li><code>--bs-tertiary-active-bg</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-negative-emphasized">Breaking</span> CSS variables only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>--bs-black</code></li>
      <li><code>--bs-black-rgb</code></li>
      <li><code>--bs-blue</code></li>
      <li><code>--bs-body-bg</code></li>
      <li><code>--bs-body-bg-rgb</code></li>
      <li><code>--bs-body-color</code></li>
      <li><code>--bs-body-color-rgb</code></li>
      <li><code>--bs-border-color-translucent</code></li>
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
      <li><code>--bs-code-color</code></li>
      <li><code>--bs-cyan</code></li>
      <li><code>--bs-danger</code></li>
      <li><code>--bs-danger-bg-subtle</code></li>
      <li><code>--bs-danger-border-subtle</code></li>
      <li><code>--bs-danger-rgb</code></li>
      <li><code>--bs-danger-text-emphasis</code></li>
      <li><code>--bs-dark</code></li>
      <li><code>--bs-dark-bg-subtle</code></li>
      <li><code>--bs-dark-border-subtle</code></li>
      <li><code>--bs-dark-rgb</code></li>
      <li><code>--bs-dark-text-emphasis</code></li>
      <li><code>--bs-emphasis-color</code></li>
      <li><code>--bs-emphasis-color-rgb</code></li>
      <li><code>--bs-gray</code></li>
      <li><code>--bs-gray-100</code></li>
      <li><code>--bs-gray-200</code></li>
      <li><code>--bs-gray-300</code></li>
      <li><code>--bs-gray-400</code></li>
      <li><code>--bs-gray-500</code></li>
      <li><code>--bs-gray-600</code></li>
      <li><code>--bs-gray-700</code></li>
      <li><code>--bs-gray-800</code></li>
      <li><code>--bs-gray-900</code></li>
      <li><code>--bs-gray-dark</code></li>
      <li><code>--bs-green</code></li>
      <li><code>--bs-highlight-bg</code></li>
      <li><code>--bs-highlight-color</code></li>
      <li><code>--bs-indigo</code></li>
      <li><code>--bs-info</code></li>
      <li><code>--bs-info-bg-subtle</code></li>
      <li><code>--bs-info-border-subtle</code></li>
      <li><code>--bs-info-rgb</code></li>
      <li><code>--bs-info-text-emphasis</code></li>
      <li><code>--bs-light</code></li>
      <li><code>--bs-light-bg-subtle</code></li>
      <li><code>--bs-light-border-subtle</code></li>
      <li><code>--bs-light-rgb</code></li>
      <li><code>--bs-light-text-emphasis</code></li>
      <li><code>--bs-orange</code></li>
      <li><code>--bs-pink</code></li>
      <li><code>--bs-primary</code></li>
      <li><code>--bs-primary-bg-subtle</code></li>
      <li><code>--bs-primary-border-subtle</code></li>
      <li><code>--bs-primary-rgb</code></li>
      <li><code>--bs-primary-text-emphasis</code></li>
      <li><code>--bs-purple</code></li>
      <li><code>--bs-red</code></li>
      <li><code>--bs-secondary</code></li>
      <li><code>--bs-secondary-bg</code></li>
      <li><code>--bs-secondary-bg-rgb</code></li>
      <li><code>--bs-secondary-bg-subtle</code></li>
      <li><code>--bs-secondary-border-subtle</code></li>
      <li><code>--bs-secondary-color</code></li>
      <li><code>--bs-secondary-color-rgb</code></li>
      <li><code>--bs-secondary-rgb</code></li>
      <li><code>--bs-secondary-text-emphasis</code></li>
      <li><code>--bs-success</code></li>
      <li><code>--bs-success-bg-subtle</code></li>
      <li><code>--bs-success-border-subtle</code></li>
      <li><code>--bs-success-rgb</code></li>
      <li><code>--bs-success-text-emphasis</code></li>
      <li><code>--bs-teal</code></li>
      <li><code>--bs-tertiary-bg</code></li>
      <li><code>--bs-tertiary-bg-rgb</code></li>
      <li><code>--bs-tertiary-color</code></li>
      <li><code>--bs-tertiary-color-rgb</code></li>
      <li><code>--bs-warning</code></li>
      <li><code>--bs-warning-bg-subtle</code></li>
      <li><code>--bs-warning-border-subtle</code></li>
      <li><code>--bs-warning-rgb</code></li>
      <li><code>--bs-warning-text-emphasis</code></li>
      <li><code>--bs-white</code></li>
      <li><code>--bs-white-rgb</code></li>
      <li><code>--bs-yellow</code></li>
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
      <li><code>background-color</code></li>
      <li><code>border</code></li>
      <li><code>border-bottom</code></li>
      <li><code>border-color</code></li>
      <li><code>border-end</code></li>
      <li><code>border-opacity</code></li>
      <li><code>border-start</code></li>
      <li><code>border-top</code></li>
      <li><code>border-width</code></li>
      <li><code>color</code></li>
      <li><code>column-gap</code></li>
      <li><code>font-size</code></li>
      <li><code>font-weight</code></li>
      <li><code>gap</code></li>
      <li><code>gradient</code></li>
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
      <li><code>subtle-background-color</code></li>
      <li><code>subtle-border-color</code></li>
      <li><code>text-color</code></li>
    </ul>
  </details>

- <details class="mb-short">
    <summary><span class="badge text-bg-status-warning-emphasized">Warning</span> Dropped keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>bg-opacity</code></li>
      <li><code>border-opacity</code></li>
      <li><code>line-length</code></li>
      <li><code>text-opacity</code></li>
    </ul>
  </details>

- <span class="badge text-bg-status-warning-emphasized">Warning</span> Signature of `make-row($gutter, $gutter-sm)` is now `make-row($gutter)`.

## Sass mixins

- <span class="badge text-bg-status-positive-emphasized">New</span> The mixin `get-font-size({font-size-ref})` has been added, where `font-size-ref` is one of: `"code-medium"`, `"label-small"`, `"label-medium"`, `"label-large"`, `"label-xlarge"`, `"body-small"`, `"body-medium"`, `"body-large"`, `"heading-small"`, `"heading-medium"`, `"heading-large"`, `"heading-xlarge"`, `"display-small"`, `"display-medium"`, `"display-large"`. If you have/need any `font-size` in one of your SCSS classes, please consider using this mixin instead. See [Typography Sass mixins]({{< docsref "/content/typography/#sass-mixins" >}}) for more details.

- <span class="badge text-bg-status-warning-emphasized">Warning</span> `color-mode({mode}, {root}, {inverted-mode})` mixin signature has changed. We now provide an `$inverted-mode` parameter that is set by default to `light` or `dark` depending on the `$mode`. It allows you to precise another mode to be the inverse of a certain mode.
