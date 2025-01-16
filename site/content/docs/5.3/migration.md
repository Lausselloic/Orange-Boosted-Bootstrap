---
layout: docs
title: Migrating to v5
description: Track and review changes to the Boosted source files, documentation, and components to help you migrate from v4 to v5.
group: migration
aliases:
  - "/migration/"
  - "/docs/migration/"
toc: true
---

## v5.3.4

### Core

- **Colors**
  - <span class="badge text-bg-warning">Warning</span> The dark mode red color hexadecimal value has been updated from `#f66` to `#ff4d4d` after a change in the design specifications to enhance the contrast for a better accessibility. This modification should be transparent for you except if you were using an hardcoded hexadecimal value directly in your websites.
- **Accessibility**
  - <span class="badge text-bg-warning">Warning</span> SVGs have been updated to remove the `focusable="false"` attribute that was useful before only for Internet Explorer support. You may want to update your websites, even if you can keep them as is as it won't break anything.

### Components

- **Badge**
  - <span class="badge text-bg-warning">Warning</span> The unused `.overflow-visible` class has been removed from the positioned variant. Please reflect this modification into your websites.

- **Buttons**
  - <span class="badge text-bg-success">New</span> X social button.
  - <span class="badge text-bg-warning">Warning</span> The unused `.overflow-visible` class has been removed from the variants containing icons. Please reflect this modification into your websites.

- **Orange navbar**
  - <span class="badge text-bg-warning">Warning</span> The markup has been revised to utilize an empty `alt` attribute and eliminate the `role="img"`, as a placeholder image is displayed in the navbar in our documentation. You should customize the `alt` attribute for the avatar to align with the context of your website. For instance, it might be appropriate to use "Access to your account" in certain situations.
  - <span class="badge text-bg-warning">Warning</span> The unused `.overflow-visible` class has been removed from the search and shopping basket SVGs. Please reflect this modification into your websites.

### Examples

- **Form example**
  - <span class="badge text-bg-warning">Warning</span> The unused `.overflow-visible` class has been removed from the search and shopping basket SVGs in the Orange navbar. Please reflect this modification into your websites.

### Docs

- Certain variants of the components and renderings have been omitted from the documentation to help you clearly understand what is available for use, thereby simplifying the connection between [Orange Design System]({{< param ods.web >}}) and the Boosted documentation.

  Although these variants can still be found under the "See Bootstrap examples that are incompatible with Orange Design System" section, be aware that using them may violate the Orange Design System guidelines. It is advisable to avoid these variants whenever possible.

- We have checked all SVGs in the documentation to ensure that they are accessible and correctly interpreted by support technologies. Please also check your projects' SVGs, which should have either `aria-hidden="true"`, or `role="img"` with an accessible name (defined by `aria-label`, `aria-labelledby`, a `<title>`, or some visually hidden alternative text).

### CSS and Sass variables

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variable:</summary>
    <ul>
      <li><code>--bs-form-switch-unchecked-invalid-border-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$form-switch-unchecked-invalid-border-color</code></li>
      <li><code>$form-switch-unchecked-invalid-border-color-dark</code></li>
    </ul>
  </details>

## v5.3.3

<hr class="mb-4">

Boosted v5.3.3 has landed also including specific Boosted content as usual.

If you need more details about the changes, please refer to the [v5.3.3 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.3.3).

### Dark mode!

Bootstrap introduced the inner color modes mechanism in v5.3.0. **The dark mode was not yet available in the Orange Design System specifications at this time, but is now available since v5.3.3!**

Learn more by reading the new [color modes documentation]({{< docsref "/customize/color-modes" >}}).

This change has an impact on how you should use Boosted. Please read carefully the following notes.

From a general point of view, the dark mode is optional on Orange websites. However, a new concept has been introduced and replaces our dark variants for components. It is referred to as "contextual dark mode" and is based on the `data-bs-theme="dark"` attribute. It is used to switch a component or a container to dark mode, independently of the global color mode. It implies that all the `.{component}-dark` classes have been removed from Boosted and that `${component}-*-inverted` Sass variables have been deprecated.

Please note that `data-bs-theme` (default, light or dark) automatically sets the `color` and `background-color` CSS properties to `inherit` on the element it is applied to. This means that some of our components have been adapted to this new behavior by setting their default colors and background colors differently (some of them are not transparent). Please double-check that it doesn't break your design. And more generally, please check carefully that this new version doesn't break your design even if you didn't use the dark variants before.

The use of colors has been revamped to be more consistent and easier to use. During the process, some colors have been modified in light mode to be darker and ensure a better contrast: primary, success and info.

All our helpers and utilities have also been adapted to the new color modes mechanism and automatically switch their colors and background colors depending on the current color mode.
As a result, you should for instance now rather use `.text-bg-{color}` classes instead of `.bg-{color}` classes when possible for automatic contrast.

Retrieve our color palette in the [new color palette documentation]({{< docsref "/customize/color-palette" >}}).

Retrieve our color theme in the [new color theme documentation]({{< docsref "/customize/color-theme" >}}) that gathers the useful CSS variables switching between light and dark mode.

### Components

- **Accordion**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the accordion (`.accordion-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Alerts**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the alerts have been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Badge**
  - <span class="badge text-bg-warning">Warning</span> It has been fixed in several places in the documentation that badge background and text colors should be handled by using `.text-bg-{color}` classes and not only `.bg-{color}` classes. Please reflect these modifications into your websites.

- **Back to top**
  - <span class="badge text-bg-danger">Breaking</span> Its markup has been changed where `.btn-secondary` has been replaced by `.btn-outline-secondary`. Please reflect this modification into your websites.

- **Breadcrumb**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the breadcrumb (`.breadcrumb-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Buttons**
  - <span class="badge text-bg-danger">Breaking</span> The rendering of the secondary button has changed:
    - if you were using the secondary button as an outline button and want to keep the same rendering, please use the new `.btn-outline-secondary` class instead of `.btn-secondary`. All the secondary buttons in the documentation, components and examples have been updated to use this new class. Please reflect this modification into your websites.
    - if you were using a black button with `.btn-info` or `.btn-dark`, please now use `.btn-secondary` instead.
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the buttons (`.btn-inverse`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Button group**
  - <span class="badge text-bg-danger">Breaking</span> The variants using secondary buttons have changed their markup by replacing `.btn-secondary` by `.btn-outline-secondary`. Please reflect this modification into your websites.
  - <span class="badge text-bg-danger">Breaking</span> Checkbox and radio button groups have changed their markup by replacing `.btn-primary` by `.btn-toggle`. Please reflect this modification into your websites.

- **Close button**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the close button (`.btn-close-white`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Dropdown**
  - <span class="badge text-bg-success">New</span> Rendering has been updated based on the new design specifications for the hover and actives states of dropdown menu items.
  - <span class="badge text-bg-danger">Breaking</span> Dropdown markup has changed by replacing `.btn-secondary` by `.btn-dropdown` class. Please reflect this modification into your websites.
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the dropdown (`.dropdown-menu-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.
  - <span class="badge text-bg-danger">Breaking</span> The variants using secondary buttons have changed their markup by replacing `.btn-secondary` by `.btn-outline-secondary`. Please reflect this modification into your websites.

- **Footer**
  - <span class="badge text-bg-danger">Breaking</span> Footer has changed its markup:
    - `.navbar-dark.bg-dark` classes have been replaced by using the `.navbar` class and the contextual dark mode with `data-bs-theme="dark"` on the `<footer>`.
    - `.accordion-dark` class has been removed.
    - if an input was present in your footer, there is no need anymore to add background, color and border utilities to it.
    - if a button was present in your footer, remove its `.btn-inverse` class. If it was a secondary button, transform it into an outline secondary.

    All examples using a Footer have of course been updated to use this new markup. Make sure to incorporate these changes into your websites.

- **List group**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the list group (`.list-group-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.
  - <span class="badge text-bg-success">New</span> The list group variants using contextual classes are now branded correctly. Please check that it doesn't break your design.
  - <span class="badge text-bg-success">New</span> List group with badges has been added to Orange Design System specifications and can now be used in your websites.
  - <span class="badge text-bg-warning">Warning</span> List group font weight is now bold by default. Please check that it doesn't break your design.

- **Local navigation**
  - <span class="badge text-bg-success">New</span> Rendering has been updated based on the new design specifications for the hover state of navigation items.
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the local navigation (`.local-nav-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Modal**
  - <span class="badge text-bg-danger">Breaking</span> The variants using secondary buttons have changed their markup by replacing `.btn-secondary` by `.btn-outline-secondary`. Please reflect this modification into your websites.

- **Navbar**
  - <span class="badge text-bg-success">New</span> A new automatic rendering has been added to the navbar's dropdowns containing texts or SVG icons.
  - <span class="badge text-bg-warning">Warning</span> Navbars are not supposed to be used as is in an Orange website. Anyway, all the variants are not dark by default but white.

- **Offcanvas**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the offcanvas has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Orange navbar**
  - <span class="badge text-bg-success">New</span> A new Orange navbar with mode selector variant is now available.

  - <span class="badge text-bg-danger">Breaking</span> Orange navbars have changed their markup (including supra bars):
    - `.navbar-dark.bg-dark` classes have been replaced by using the contextual dark mode with `data-bs-theme="dark"` on the `<header>`.
    - if an input was present in your navbar, there is no need anymore to add background, color and border utilities to it.
    - if a notification badge was present in your navbar, the notification text doesn't need `.text-white` anymore. It'll be automatically set to white in dark mode and black in light mode.

    All examples using an Orange navbar have of course been updated to use this new markup. Make sure to incorporate these changes into your websites.

- **Pagination**
  - <span class="badge text-bg-success">New</span> Rendering has been updated based on the new design specifications for the hover state of page items.
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the pagination (`.pagination-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Progress**
  - <span class="badge text-bg-warning">Warning</span> Thanks to the automatic contrast mechanism, some progress bars variants with texts have been modified to avoid using text utilities that are set automatically. However the default progress bar and the warning ones still need a `.text-dark`. Please reflect these modifications into your websites.

- **Stepped Process**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the stepped process (`.stepped-process-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Tags**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the tags (`.tag-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- **Title bar**
  - <span class="badge text-bg-danger">Breaking</span> The variants with background colors have been modified to apply the right `data-bs-theme` attribute. And the `.bg-dark`, `.bg-black`, and `.bg-white` classes have been removed since they don't make sense anymore. Please reflect these modifications into your websites.

- **Toasts**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the toast has been modified by using the contextual dark mode with `data-bs-theme="dark"`. Please reflect this modification into your websites.

### Contents

- <span class="badge text-bg-warning">Warning</span> The `.lead` class has been updated to reflect the new letter-spacing value for desktop breakpoint, and the line-height values for tablet and mobile breakpoints. Please check that it doesn't break your design.

- <span class="badge text-bg-danger">Breaking</span> Table dark variant has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

- <span class="badge text-bg-warning">Warning</span> Striped table background color has changed to adapt to the new color modes mechanism.

### Forms

- **Checks & Radios**
  - <span class="badge text-bg-danger">Breaking</span> Toggle buttons have changed their markup by removing any `.btn-primary` or `.btn-secondary`, and by adding the new `.btn-toggle` class. Please reflect this modification into your websites.

- **Input group**
  - <span class="badge text-bg-danger">Breaking</span> The variants using secondary buttons have changed their markup by replacing `.btn-secondary` by `.btn-outline-secondary`. Please reflect this modification into your websites.

- **Quantity Selector**
  - <span class="badge text-bg-success">New</span> Rendering has been updated to ensure a proper visible focus state.
  - <span class="badge text-bg-danger">Breaking</span> The markup has been changed:
    - `.input-group` class has been removed
    - `.btn-secondary` class has been replaced by `.btn-outline-secondary`

    Make sure to incorporate these changes into your websites.

- **Star rating**
  - <span class="badge text-bg-danger">Breaking</span> The dark variant of the star rating (`.star-rating-dark`) has been replaced by using the contextual dark mode with `data-bs-theme="dark"`.

### Utilities

- <span class="badge text-bg-success">New</span> Orange supporting background (`.bg-supporting-orange`) has been added.

### Examples

All the examples have a mode selector on the bottom right corner to switch between light and dark mode to help you check the rendering. These mode selectors are not part of the examples themselves and shouldn't be included in your websites. Please note that these mode selectors are not rendered in the examples that already contain a mode selector in their navbars.

- <span class="badge text-bg-warning">Warning</span> Cards and Cards RTL examples have been simplified to remove the dark variants that can be achieved with a contextual dark mode.

- <span class="badge text-bg-warning">Warning</span> Download page example has been slightly modified to use the new markup of Orange navbar, and footer, but also to change its usage of text and background utilities to work with the new color modes mechanism. The navbar now includes a mode selector. Please reflect these modifications if you have a similar rendering in your websites.

- <span class="badge text-bg-warning">Warning</span> Form example has been slightly modified to use the new markup of Orange navbar, title bar and footer. The navbar now includes a mode selector. Please reflect these modifications if you have a similar rendering in your websites.

- <span class="badge text-bg-success">New</span> A navbar mode selector has been added to the examples to render a single navbar with a mode selector to switch between light and dark mode.

- <span class="badge text-bg-warning">Warning</span> Masonry example has been slightly modified to change its usage of text and background utilities to work with the new color modes mechanism. Please reflect these modifications if you have a similar rendering in your websites.

- <span class="badge text-bg-warning">Warning</span> Title bars example has been slightly modified to drop a `.bg-body` and use `data-bs-theme="light"` in combination with `.bg-supporting-blue` and `.bg-supporting-pink`. Make sure to incorporate these changes into your websites.

### CSS and Sass variables

- <span class="badge text-bg-success">New</span> A new `scss/_color-palette.scss` file has been added to provide Sass variables representing the color palette. It is automatically imported in `scss/_variables.scss` which uses these variables instead of hex values.

- <span class="badge text-bg-success">New</span> A new `button-outline-variant()` mixin has been added.

- <span class="badge text-bg-danger">Breaking</span> The `button-variant()` mixin has removed its last argument.

- <span class="badge text-bg-danger">Breaking</span> `$accessible-orange` and `$brand-orange` Sass variables have been removed. Please refer to the [new color theme documentation]({{< docsref "/customize/color-theme" >}}) and the [new color palette documentation]({{< docsref "/customize/color-palette" >}}) for more details about the new color modes mechanism.

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-back-to-top-link-bg</code></li>
      <li><code>--bs-border-color-subtle</code></li>
      <li><code>--bs-breadcrumb-divider-filter</code></li>
      <li><code>--bs-disabled-color</code></li>
      <li><code>--bs-form-check-filter</code></li>
      <li><code>--bs-form-check-input-disabled-color</code></li>
      <li><code>--bs-form-color-disabled-filter</code></li>
      <li><code>--bs-form-select-disabled-indicator</code></li>
      <li><code>--bs-form-select-indicator</code></li>
      <li><code>--bs-form-switch-square-bg</code></li>
      <li><code>--bs-footer-color</code></li>
      <li><code>--bs-gray-950</code></li>
      <li><code>--bs-list-group-font-weight</code></li>
      <li><code>--bs-list-group-item-icon-margin-x</code></li>
      <li><code>--bs-list-group-item-icon-size</code></li>
      <li><code>--bs-navbar-bg</code></li>
      <li><code>--bs-navbar-toggler-icon-color</code></li>
      <li><code>--bs-navbar-toggler-icon-hover-color</code></li>
      <li><code>--bs-stepped-process-bg</code></li>
      <li><code>--bs-sticker-color</code></li>
      <li><code>--bs-tab-content-border-color</code></li>
      <li><code>--bs-table-active-bg-factor</code></li>
      <li><code>--bs-table-hover-bg-factor</code></li>
      <li><code>--bs-table-striped-bg-factor</code></li>
      <li><code>--bs-tag-bg</code></li>
      <li><code>--bs-tag-color</code></li>
      <li><code>--bs-tertiary-active-bg</code></li>
      <li><code>--bs-title-bar-bg</code></li>
      <li><code>--bs-title-bar-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$back-to-top-bg</code></li>
      <li><code>$back-to-top-title-color</code></li>
      <li><code>$border-color-subtle</code></li>
      <li><code>$border-color-subtle-dark</code></li>
      <li><code>$breadcrumb-divider-filter</code></li>
      <li><code>$breadcrumb-divider-filter-dark</code></li>
      <li><code>$btn-default-active-bg</code></li>
      <li><code>$btn-default-active-border</code></li>
      <li><code>$btn-default-active-color</code></li>
      <li><code>$btn-default-disabled-bg</code></li>
      <li><code>$btn-default-disabled-border</code></li>
      <li><code>$btn-default-disabled-color</code></li>
      <li><code>$btn-default-hover-bg</code></li>
      <li><code>$btn-default-hover-border</code></li>
      <li><code>$btn-default-hover-color</code></li>
      <li><code>$btn-hover-color</code></li>
      <li><code>$btn-outline-default-active-bg</code></li>
      <li><code>$btn-outline-default-active-border</code></li>
      <li><code>$btn-outline-default-active-color</code></li>
      <li><code>$btn-outline-default-disabled-bg</code></li>
      <li><code>$btn-outline-default-disabled-border</code></li>
      <li><code>$btn-outline-default-disabled-color</code></li>
      <li><code>$btn-outline-default-hover-bg</code></li>
      <li><code>$btn-outline-default-hover-border</code></li>
      <li><code>$btn-outline-default-hover-color</code></li>
      <li><code>$carousel-caption-bg</code></li>
      <li><code>$carousel-control-icon-color</code></li>
      <li><code>$danger-dark</code></li>
      <li><code>$danger-icon-dark</code></li>
      <li><code>$dark-dark</code></li>
      <li><code>$disabled-color</code></li>
      <li><code>$disabled-color-dark</code></li>
      <li><code>$focus-ring-color-dark</code></li>
      <li><code>$focus-visible-inner-color-dark</code></li>
      <li><code>$focus-visible-outer-color-dark</code></li>
      <li><code>$footer-color</code></li>
      <li><code>$form-check-filter</code></li>
      <li><code>$form-check-filter-dark</code></li>
      <li><code>$form-check-input-disabled-color-dark</code></li>
      <li><code>$form-check-input-disabled-filter</code></li>
      <li><code>$form-color-border-color</code></li>
      <li><code>$form-color-disabled-bg-color</code></li>
      <li><code>$form-color-disabled-filter</code></li>
      <li><code>$form-color-disabled-filter-dark</code></li>
      <li><code>$form-color-hover-bg-color</code></li>
      <li><code>$form-feedback-color</code></li>
      <li><code>$form-helper-bg</code></li>
      <li><code>$form-helper-color</code></li>
      <li><code>$form-helper-icon</code></li>
      <li><code>$form-label-required-color</code></li>
      <li><code>$form-select-disabled-indicator-dark</code></li>
      <li><code>$form-select-indicator-dark</code></li>
      <li><code>$form-star-rating-disabled-color</code></li>
      <li><code>$form-switch-bg</code></li>
      <li><code>$form-switch-border-color</code></li>
      <li><code>$form-switch-checked-bg</code></li>
      <li><code>$form-switch-checked-border-color</code></li>
      <li><code>$form-switch-checked-filter</code></li>
      <li><code>$form-switch-checked-focus-inner</code></li>
      <li><code>$form-switch-checked-focus-outer</code></li>
      <li><code>$form-switch-checked-square-bg</code></li>
      <li><code>$form-switch-filter</code></li>
      <li><code>$form-switch-focus-visible-inner</code></li>
      <li><code>$form-switch-focus-visible-outer</code></li>
      <li><code>$form-switch-square-bg</code></li>
      <li><code>$form-switch-square-bg-dark</code></li>
      <li><code>$functional-blue-dark</code></li>
      <li><code>$functional-green-dark</code></li>
      <li><code>$functional-red-dark</code></li>
      <li><code>$functional-yellow-dark</code></li>
      <li><code>$info-dark</code></li>
      <li><code>$list-group-divider-size</code></li>
      <li><code>$list-group-font-weight</code></li>
      <li><code>$list-group-icons</code></li>
      <li><code>$list-group-item-icon-margin-x</code></li>
      <li><code>$list-group-item-icon-size</code></li>
      <li><code>$list-group-numbered-item-margin-end</code></li>
      <li><code>$nav-tabs-link-hover-bg</code></li>
      <li><code>$nav-tabs-link-hover-color</code></li>
      <li><code>$navbar-light-bg</code></li>
      <li><code>$navbar-light-icon-color</code></li>
      <li><code>$navbar-light-icon-hover-color</code></li>
      <li><code>$ods-black-900</code></li>
      <li><code>$ods-blue-100</code></li>
      <li><code>$ods-blue-200</code></li>
      <li><code>$ods-blue-300</code></li>
      <li><code>$ods-blue-400</code></li>
      <li><code>$ods-blue-500</code></li>
      <li><code>$ods-blue-600</code></li>
      <li><code>$ods-fire-100</code></li>
      <li><code>$ods-fire-200</code></li>
      <li><code>$ods-forest-100</code></li>
      <li><code>$ods-forest-200</code></li>
      <li><code>$ods-gray-200</code></li>
      <li><code>$ods-gray-300</code></li>
      <li><code>$ods-gray-400</code></li>
      <li><code>$ods-gray-500</code></li>
      <li><code>$ods-gray-600</code></li>
      <li><code>$ods-gray-700</code></li>
      <li><code>$ods-gray-800</code></li>
      <li><code>$ods-gray-900</code></li>
      <li><code>$ods-green-100</code></li>
      <li><code>$ods-green-200</code></li>
      <li><code>$ods-green-300</code></li>
      <li><code>$ods-green-400</code></li>
      <li><code>$ods-green-500</code></li>
      <li><code>$ods-green-600</code></li>
      <li><code>$ods-orange-100</code></li>
      <li><code>$ods-orange-200</code></li>
      <li><code>$ods-pink-100</code></li>
      <li><code>$ods-pink-200</code></li>
      <li><code>$ods-pink-300</code></li>
      <li><code>$ods-pink-400</code></li>
      <li><code>$ods-pink-500</code></li>
      <li><code>$ods-pink-600</code></li>
      <li><code>$ods-purple-200</code></li>
      <li><code>$ods-purple-300</code></li>
      <li><code>$ods-purple-400</code></li>
      <li><code>$ods-purple-500</code></li>
      <li><code>$ods-purple-600</code></li>
      <li><code>$ods-sun-100</code></li>
      <li><code>$ods-sun-200</code></li>
      <li><code>$ods-water-100</code></li>
      <li><code>$ods-water-200</code></li>
      <li><code>$ods-white-100</code></li>
      <li><code>$ods-yellow-200</code></li>
      <li><code>$ods-yellow-300</code></li>
      <li><code>$ods-yellow-400</code></li>
      <li><code>$ods-yellow-500</code></li>
      <li><code>$ods-yellow-600</code></li>
      <li><code>$light-dark</code></li>
      <li><code>$primary-dark</code></li>
      <li><code>$quantity-selector-btn-bg</code></li>
      <li><code>$quantity-selector-btn-border</code></li>
      <li><code>$quantity-selector-disabled-bg</code></li>
      <li><code>$quantity-selector-disabled-color</code></li>
      <li><code>$secondary-dark</code></li>
      <li><code>$spinner-color</code></li>
      <li><code>$stepped-process-bg</code></li>
      <li><code>$sticker-background-color</code></li>
      <li><code>$sticker-color</code></li>
      <li><code>$sticker-font-weight</code></li>
      <li><code>$success-dark</code></li>
      <li><code>$success-icon-dark</code></li>
      <li><code>$supporting-orange</code></li>
      <li><code>$table-active-bg-factor-dark</code></li>
      <li><code>$table-bg-scale</code></li>
      <li><code>$table-hover-bg-factor-dark</code></li>
      <li><code>$table-striped-bg-factor-dark</code></li>
      <li><code>$tag-bg</code></li>
      <li><code>$tag-color</code></li>
      <li><code>$tertiary-active-bg</code></li>
      <li><code>$tertiary-active-bg-dark</code></li>
      <li><code>$title-bar-color</code></li>
      <li><code>$title-bar-bg</code></li>
      <li><code>$warning-dark</code></li>
      <li><code>$warning-icon-filled</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$svg-as-custom-props-dark</code></li>
      <li><code>$theme-colors-dark</code></li>
      <li><code>$theme-colors-rgb-dark</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated CSS variables:</summary>
    <ul>
      <li><code>--bs-back-to-top-link-icon-margin-left</code></li>
      <li><code>--bs-pagination-focus-bg</code></li>
      <li><code>--bs-pagination-focus-box-shadow</code></li>
      <li><code>--bs-pagination-focus-color</code></li>
      <li><code>--bs-primary-text-rgb</code></li>
      <li><code>--bs-table-striped-hover-bg</code></li>
      <li><code>--bs-table-striped-hover-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated Sass variables:</summary>
    <ul>
      <li><code>$accessible-orange</code></li>
      <li><code>$accordion-dark-bg</code></li>
      <li><code>$accordion-dark-border-color</code></li>
      <li><code>$accordion-dark-button-active-color</code></li>
      <li><code>$accordion-dark-button-bg</code></li>
      <li><code>$accordion-dark-button-color</code></li>
      <li><code>$accordion-dark-button-hover-bg</code></li>
      <li><code>$accordion-dark-color</code></li>
      <li><code>$background-colors</code></li>
      <li><code>$brand-orange</code></li>
      <li><code>$breadcrumb-dark-color</code></li>
      <li><code>$breadcrumb-dark-bg</code></li>
      <li><code>$breadcrumb-dark-divider-color</code></li>
      <li><code>$breadcrumb-dark-active-color</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$code-color-inverted</code></li>
      <li><code>$dropdown-dark-bg</code></li>
      <li><code>$dropdown-dark-box-shadow</code></li>
      <li><code>$dropdown-dark-border-color</code></li>
      <li><code>$dropdown-dark-divider-bg</code></li>
      <li><code>$dropdown-dark-color</code></li>
      <li><code>$dropdown-dark-header-color</code></li>
      <li><code>$dropdown-dark-link-active-bg</code></li>
      <li><code>$dropdown-dark-link-active-color</code></li>
      <li><code>$dropdown-dark-link-disabled-color</code></li>
      <li><code>$dropdown-dark-link-hover-bg</code></li>
      <li><code>$dropdown-dark-link-hover-color</code></li>
      <li><code>$dropdown-dark-link-color</code></li>
      <li><code>$focus-visible-inner-color-inverted</code></li>
      <li><code>$focus-visible-outer-color-inverted</code></li>
      <li><code>$form-star-rating-dark-checked-color</code></li>
      <li><code>$form-star-rating-dark-hover-color</code></li>
      <li><code>$form-star-rating-dark-unchecked-color</code></li>
      <li><code>$kbd-bg-inverted</code></li>
      <li><code>$kbd-color-inverted</code></li>
      <li><code>$link-color-inverted</code></li>
      <li><code>$link-hover-color-inverted</code></li>
      <li><code>$list-group-dark-active-bg</code></li>
      <li><code>$list-group-dark-active-border-color</code></li>
      <li><code>$list-group-dark-active-color</code></li>
      <li><code>$list-group-dark-action-active-bg</code></li>
      <li><code>$list-group-dark-action-active-color</code></li>
      <li><code>$list-group-dark-action-color</code></li>
      <li><code>$list-group-dark-action-hover-color</code></li>
      <li><code>$list-group-dark-bg</code></li>
      <li><code>$list-group-dark-border-color</code></li>
      <li><code>$list-group-dark-color</code></li>
      <li><code>$list-group-dark-disabled-bg</code></li>
      <li><code>$list-group-dark-disabled-color</code></li>
      <li><code>$list-group-dark-hover-bg</code></li>
      <li><code>$local-nav-dark-active-bg</code></li>
      <li><code>$local-nav-dark-active-color</code></li>
      <li><code>$local-nav-dark-bg</code></li>
      <li><code>$local-nav-dark-border-color</code></li>
      <li><code>$local-nav-dark-color</code></li>
      <li><code>$local-nav-dark-hover-bg</code></li>
      <li><code>$local-nav-dark-hover-color</code></li>
      <li><code>$mark-bg-inverted</code></li>
      <li><code>$mark-color-inverted</code></li>
      <li><code>$navbar-dark-active-color</code></li>
      <li><code>$navbar-dark-border-color</code></li>
      <li><code>$navbar-dark-brand-color</code></li>
      <li><code>$navbar-dark-brand-hover-color</code></li>
      <li><code>$navbar-dark-color</code></li>
      <li><code>$navbar-dark-disabled-color</code></li>
      <li><code>$navbar-dark-hover-color</code></li>
      <li><code>$navbar-dark-toggler-border-color</code></li>
      <li><code>$orange-filter</code></li>
      <li><code>$pagination-dark-active-bg</code></li>
      <li><code>$pagination-dark-active-border-color</code></li>
      <li><code>$pagination-dark-active-color</code></li>
      <li><code>$pagination-dark-active-item-bg</code></li>
      <li><code>$pagination-dark-active-item-border-color</code></li>
      <li><code>$pagination-dark-active-item-color</code></li>
      <li><code>$pagination-dark-bg</code></li>
      <li><code>$pagination-dark-border-color</code></li>
      <li><code>$pagination-dark-color</code></li>
      <li><code>$pagination-dark-disabled-bg</code></li>
      <li><code>$pagination-dark-disabled-border-color</code></li>
      <li><code>$pagination-dark-disabled-color</code></li>
      <li><code>$pagination-dark-focus-bg</code></li>
      <li><code>$pagination-dark-focus-color</code></li>
      <li><code>$pagination-dark-hover-bg</code></li>
      <li><code>$pagination-dark-hover-border-color</code></li>
      <li><code>$pagination-dark-hover-color</code></li>
      <li><code>$pagination-focus-bg</code></li>
      <li><code>$pagination-focus-box-shadow</code></li>
      <li><code>$pagination-focus-color</code></li>
      <li><code>$pagination-focus-outline</code></li>
      <li><code>$pre-color-inverted</code></li>
      <li><code>$step-item-dark-active-bg</code></li>
      <li><code>$step-item-dark-bg</code></li>
      <li><code>$step-item-dark-drop-shadow</code></li>
      <li><code>$step-item-dark-next-bg</code></li>
      <li><code>$step-link-dark-active-color</code></li>
      <li><code>$step-link-dark-color</code></li>
      <li><code>$step-link-dark-next-color</code></li>
      <li><code>$table-caption-color-inverted</code></li>
      <li><code>$table-striped-hover-bg</code></li>
      <li><code>$table-striped-hover-bg-factor</code></li>
      <li><code>$table-striped-hover-color</code></li>
      <li><code>$tag-active-color-dark</code></li>
      <li><code>$tag-active-decoration-color-dark</code></li>
      <li><code>$tag-border-color-dark</code></li>
      <li><code>$tag-disabled-color-dark</code></li>
      <li><code>$title-bar-border-color-dark</code></li>
    </ul>
  </details>

### Docs

- <span class="badge text-bg-danger">Removed</span> Customize > Color page has been removed.

- <span class="badge text-bg-success">New</span> [Customize > Color palette]({{< docsref "/customize/color-palette" >}}) page has been added.

- <span class="badge text-bg-success">New</span> [Customize > Color theme]({{< docsref "/customize/color-theme" >}}) page has been added.

- <span class="badge text-bg-warning">Warning</span> [Extend > Icons]({{< docsref "/extend/icons" >}}) page has been refactored to reflect our recommendation to use Solaris icons in Orange projects.

- <span class="badge text-bg-warning">Warning</span> If you were using our `#check2` icon, please note that its content has been changed.

## v5.3.2

<hr class="mb-4">

Boosted v5.3.2 has landed also including specific Boosted content as usual.

If you need more details about the changes, please refer to the [v5.3.2 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.3.2).

### Color modes!

- **New colors available.** We introduced the following variables based on brand introduction.
  - `$gray-950`: `#141414`, a darker gray. Use as body background (dark): `.bg-body`.

### Components

- **Accordion**
  - <span class="badge text-bg-warning">Warning</span> Accordion rendering has been improved for better accessibility. Although it is transparent for basic usage, you might want to check the rendering of your custom components if they are composed of an accordion.

- **Local navigation**
  - <span class="badge text-bg-success">New</span> Added Local Navigation as a new component.

- **Orange navbar**
  - <span class="badge text-bg-warning">Warning</span> The minimizing behavior with `.header-minimized` is applied to the `<header>` instead of one of its children directly.

### Forms

- <span class="badge text-bg-success">New</span> In order to improve accessibility for people suffering from any form of color blindness, we added a visual cue to form elements on error when focused so information does not rely exclusively on color anymore. Although is has no direct impact, you might want to apply this same modification within your custom form controls if you have any.
- <span class="badge text-bg-success">New</span> Labels related to mandatory form fields have been improved for better accessibility. A `<span class="visually-hidden"> (required)</span>` element has been added to ensure correct restitution by assistive technologies like screen readers. Please reflect these modifications into your websites.

- <span class="badge text-bg-success">New</span> Star rating now has a `readonly` state.

- <span class="badge text-bg-warning">Warning</span> Star rating has been slightly changed for accessibility purpose; a visually hidden `span` matching the title attribute was added and color contrast of inactive stars has been updated. Please reflect this modification into your websites.

  ```diff
  -    <label for="excellent" title="Excellent"></label>
  +    <label for="excellent" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  ```
- <span class="badge text-bg-warning">Deprecated</span> The `form-star-rating()` mixin is now deprecated. We now use a `mask-image` CSS property to display the stars in this form element.

### CSS and Sass variables

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-accordion-btn-hover-bg</code></li>
      <li><code>--bs-local-nav-active-bg</code></li>
      <li><code>--bs-local-nav-active-color</code></li>
      <li><code>--bs-local-nav-active-marker-width</code></li>
      <li><code>--bs-local-nav-bg</code></li>
      <li><code>--bs-local-nav-border-color</code></li>
      <li><code>--bs-local-nav-border-width</code></li>
      <li><code>--bs-local-nav-color</code></li>
      <li><code>--bs-local-nav-hover-bg</code></li>
      <li><code>--bs-local-nav-hover-color</code></li>
      <li><code>--bs-local-nav-padding-y</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$accordion-button-hover-bg</code></li>
      <li><code>$accordion-dark-button-hover-bg</code></li>
      <li><code>$footer-accordion-active-color</code></li>
      <li><code>$footer-accordion-btn-hover-bg</code></li>
      <li><code>$form-star-rating-checked-color</code></li>
      <li><code>$form-star-rating-checked-icon</code></li>
      <li><code>$form-star-rating-dark-checked-color</code></li>
      <li><code>$form-star-rating-dark-hover-color</code></li>
      <li><code>$form-star-rating-dark-unchecked-color</code></li>
      <li><code>$form-star-rating-hover-color</code></li>
      <li><code>$form-star-rating-sm-checked-icon</code></li>
      <li><code>$form-star-rating-sm-unchecked-icon</code></li>
      <li><code>$form-star-rating-unchecked-color</code></li>
      <li><code>$form-star-rating-unchecked-icon</code></li>
      <li><code>$local-nav-active-bg</code></li>
      <li><code>$local-nav-active-color</code></li>
      <li><code>$local-nav-active-marker-width</code></li>
      <li><code>$local-nav-bg</code></li>
      <li><code>$local-nav-border-color</code></li>
      <li><code>$local-nav-border-width</code></li>
      <li><code>$local-nav-color</code></li>
      <li><code>$local-nav-dark-bg</code></li>
      <li><code>$local-nav-dark-color</code></li>
      <li><code>$local-nav-dark-hover-bg</code></li>
      <li><code>$local-nav-dark-hover-color</code></li>
      <li><code>$local-nav-dark-active-bg</code></li>
      <li><code>$local-nav-dark-active-color</code></li>
      <li><code>$local-nav-dark-border-color</code></li>
      <li><code>$local-nav-hover-bg</code></li>
      <li><code>$local-nav-hover-color</code></li>
      <li><code>$local-nav-padding-y</code></li>
      <li><code>$mark-bg-dark</code></li>
      <li><code>$mark-color-dark</code></li>
    </ul>
  </details>

## v5.3.1

<hr class="mb-4">

Boosted v5.3.1 has landed also including specific Boosted content as usual.

If you need more details about the changes, please refer to the [v5.3.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.3.1).

### Components

- **Nav and tabs**
  - <span class="badge text-bg-success">New</span> Added support for JavaScript Tabs' <kbd>Home</kbd> and <kbd>End</kbd> keys.

- **Spinner**
  - <span class="badge text-bg-warning">Warning</span> For better accessibility, [the example showing a strong loading text associated to a spinner]({{< docsref "/components/spinners#flex" >}}) has been modified to move the `role="status"` at the right place. Please apply this modification in your websites.

  ```diff
  <button class="btn btn-primary" type="button">
  -  <span class="spinner-border me-2" role="status" aria-hidden="true"></span>
  -  Loading...
  +  <span class="spinner-border me-2" aria-hidden="true"></span>
  +  <span role="status">Loading...</span>
  </button>
  ```

### Forms

- <span class="badge text-bg-warning">Warning</span> Form text examples have been modified to add some precisions about accessibility. Please apply this modification in your websites if needed.

### CSS and Sass variables

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$vr-border-width</code></li>
    </ul>
  </details>

### Docs

- Added missing `aria-disabled="true"` for links having only a `.disabled` class in cards, dropdowns, list groups, navbars, nav and tabs, and placeholders. Please apply this modification in your websites.

## v5.3.0

<hr class="mb-4">

Boosted v5.3.0 has landed also including specific Boosted content as usual.

If you need more details about the changes, please refer to the [v5.3.0 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.3.0).

### Color modes!

Learn more by reading the new [color modes documentation]({{< docsref "/customize/color-modes" >}}).

{{< callout danger >}}
Color mode mechanism coming from Bootstrap is available from Boosted v5.3.0. However, the dark mode was not yet available in the Orange Design System specifications at this time. **Please use at least Boosted v5.3.3 to have the dark mode available.**
{{< /callout >}}

- **Global support for light (default) and dark color modes.** Set color mode globally on the `:root` element, on groups of elements and components with a wrapper class, or directly on components, with `data-bs-theme="light|dark"`. Also included is a new `color-mode()` mixin that can output a ruleset with the `data-bs-theme` selector or a media query, depending on your preference.

- **New extended color system.** We've added new theme colors (but not in `$theme-colors`) for a more nuanced, system-wide color palette with new secondary, tertiary, and emphasis colors for `color` and `background-color`. These new colors are available as Sass variables, CSS variables, and utilities.

- We've also expanded our theme color Sass variables, CSS variables, and utilities to include text emphasis, subtle background colors, and subtle border colors. These are available as Sass variables, CSS variables, and utilities.

- Adds new `_variables-dark.scss` stylesheet to house dark-mode specific overrides. This stylesheet should be imported immediately after the existing `_variables.scss` file in your import stack.

  ```diff
  diff --git a/scss/boosted.scss b/scss/boosted.scss
  index 8f8296def..449d70487 100644
  --- a/scss/boosted.scss
  +++ b/scss/boosted.scss
  @@ -6,6 +6,7 @@
   // Configuration
   @import "functions";
   @import "variables";
  +@import "variables-dark";
   @import "maps";
   @import "mixins";
   @import "utilities";
  ```

### Components

- **Accordion**
  - <span class="badge text-bg-warning">Warning</span> For accessibility reasons, having a `aria-labelledby` on the collapse element in accordions is not necessary. Please reflect these modifications into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <h2 class="accordion-header" id="heading">...</h2>
      - <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="heading">
      + <h2 class="accordion-header">...</h2>
      + <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion">
      ```
    </details>

- **Alert**
  - Alert variants are now styled via CSS variables.
  - <span class="badge text-bg-warning">Deprecated</span> The `alert-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/alerts#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons of alerts. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.

- **Buttons**
  - <span class="badge text-bg-success">New</span> Outlined button `.btn-outline-secondary` is now provided. It is basically `.btn-secondary` with default transparent background.
  - <span class="badge text-bg-success">New</span> TikTok social button.

- **Cards**
  - Cards now have a `color` set on them to improve rendering across color modes.

- **Carousel**
  - The examples in our docs are now explicitly initialized and mostly don't use anymore `data-bs-ride`. Depending on how carousels are used in your project, it might need some updates.
  - <span class="badge text-bg-danger">Breaking</span> The pause/play button is now included within the carousel for a better rendering but still respecting accessibility guidelines; it is now placed on the left-hand side of the indicators. The HTML markup has changed, please use this new version on your websites.

- **Close button**
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.
  - <span class="badge text-bg-success">New</span> Added an eco-design variant.

- **Footer**
  - <span class="badge text-bg-warning">Warning</span> For accessibility reasons, having a `aria-labelledby` on the collapse element in the accordions used in footer is not necessary and can be removed. Be careful to not remove the corresponding `id` if used for other purposes. Please reflect these modifications into your websites.
  - <span class="badge text-bg-success">New</span> An active link selector has been added for accessibility purpose. It might be a useful modification to propagate into your websites if you have this same kind of footer navigation.
  - <span class="badge text-bg-warning">Warning</span> Coverage checker icon has been changed from `ic_Signal` to `ic_Mobile_Network_Coverage`. Please download the right [Solaris icon]({{< docsref "/extend/icons" >}}) and update your websites.

- **List group**
  - List group item variants are now styled via CSS variables.

  - <span class="badge text-bg-warning">Deprecated</span> The `list-group-item-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/list-group#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.

- **Modal**
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons of modals. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.

- **Navbar**
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons of offcanvas navbars. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.

- **Navs and tabs**
  - <span class="badge text-bg-danger">Breaking</span> Based on Bootstrap, we've replaced "Tabs light" variant by "Underline" variant. It means that `.nav-tabs-light` is deprecated and doesn't exist anymore and so that the following modification must be done in your websites:

    ```diff
    - <ul class="nav nav-tabs nav-tabs-light">
    + <ul class="nav nav-underline">
    ```

    It also means that the "Nested tabs" variant has been slightly modified to use this new class rather than `.nav-tabs` combined to `.nav-tabs-light`.

- **Offcanvas**
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons of offcanvases. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.

- **Progress bars**
  - The markup for [progress bars]({{< docsref "/components/progress" >}}) has been updated in v5.3.0. Due to the placement of `role` and various `aria-` attributes on the inner `.progress-bar` element, **some screen readers were not announcing zero value progress bars**. Now, `role="progressbar"` and the relevant `aria-*` attributes are on the outer `.progress` element, leaving the `.progress-bar` purely for the visual presentation of the bar and optional label.

    While we recommend adopting the new markup for improved compatibility with all screen readers, note that the legacy progress bar structure will continue to work as before.

    ```html
    <!-- Previous markup -->
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <!-- New markup -->
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: 25%"></div>
    </div>
    ```

    We've also introduced a new `.progress-stacked` class to more logically wrap [multiple progress bars]({{< docsref "/components/progress#multiple-bars" >}}) into a single stacked progress bar.

    ```html
    <!-- Previous markup -->
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <!-- New markup -->
    <div class="progress-stacked">
      <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
        <div class="progress-bar"></div>
      </div>
      <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
        <div class="progress-bar bg-success"></div>
      </div>
      <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
        <div class="progress-bar bg-info"></div>
      </div>
    </div>
    ```
  - <span class="badge text-bg-danger">Breaking</span> Since we restored all Bootstrap [text color utilities]({{< docsref "/utilities/colors" >}}), you now have to use `.text-white` on `red` progress bar, to have white font and ensure contrast.

- **Popovers**
  - <span class="badge text-bg-warning">Warning</span> The paddings have been increased so from now popovers and tooltips will no longer have the same rendering. It can have an impact on the existing design, please check this modification in your websites.

- **Spinners**
  - <span class="badge text-bg-danger">Breaking</span> Since we restored all Bootstrap [text color utilities]({{< docsref "/utilities/colors" >}}), you now have to use `.text-white` to have a white spinner on a dark background.

- **Stickers**
  - <span class="badge text-bg-danger">Breaking</span> Due to the changes in headings font size values, we updated our stickers to use specific non-responsive typography classes which are not introduced in the framework. Please read the updated documentation and check out our stickers examples to adapt your websites.

- **Toasts**
  - <span class="badge text-bg-success">New</span> A tooltip was added on close buttons of toasts. Please add this tooltip in your websites, by adding the attributes `data-bs-toggle`, `data-bs-placement` and `data-bs-title`.

### Contents

- **Typography**
  - We no longer set a color for `$headings-color-dark` or `--bs-heading-color` for dark mode. To avoid several problems of headings within components appearing the wrong color, we've set the Sass variable to `null` and added a `null` check like we use on the default light mode.
  - <span class="badge text-bg-danger">Breaking</span> Some headings font size values have been changed to be compliant with the design guidelines. Please check it has no impact on your websites.
    - `<h3>` values are now `24px` for tablet breakpoint and `18px` for mobile breakpoint.
    - `<h5>` value is now `18px` for tablet breakpoint.
    - `<h6>` value is now `18px` for desktop and tablet breakpoints.

### Forms

- `.form-control` is now styled with CSS variables to support color modes. This includes the addition of two new root CSS variables for the default and disabled form control backgrounds.

- `.form-check` and `.form-switch` components are now built with CSS variables for setting the `background-image`. The usage here differs from other components in that the various focus, active, etc states for each component aren't set on the base class. Instead, the states override one variable (e.g., `--bs-form-switch-bg`).

- <span class="badge text-bg-warning">Warning</span> Form text examples have been modified to add some precisions about accessibility. Please apply this modification in your websites if needed.

- Form validation `border-color` and text `color` states now respond to dark mode, thanks to new Sass and CSS variables.

- <span class="badge text-bg-success">New</span> Our range documentation now provides an example which displays the current selected value for better usability, but with some extra JavaScript code.

### Helpers and utilities

- <span class="badge text-bg-success">New</span> `.border-{color}-subtle`.

- <span class="badge text-bg-success">New</span> `.text-black`, `.text-body-secondary`, and `.text-body-tertiary`.

- <span class="badge text-bg-success">New</span> Added new `.link-body-emphasis` helper alongside our [colored links]({{< docsref "/helpers/colored-links" >}}). This creates a colored link using our color mode responsive emphasis color.

- <span class="badge text-bg-success">New</span> `.text-{color}-emphasis`.

- <span class="badge text-bg-success">New</span> `.bg-body-secondary` and `.bg-body-tertiary`.

- <span class="badge text-bg-success">New</span> `.bg-{color}-subtle`.

- <span class="badge text-bg-success">New</span> `.fw-medium` is added to the `font-weight` utilities.

- <span class="badge text-bg-success">New</span> border dividers utilities:
  - `.rounded-{top|end|bottom|start}-{0|5}`
  - `.rounded-{top|end|bottom|start}-circle`
  - `.rounded-{top|end|bottom|start}-pill`.
  - <span class="badge text-bg-warning">Warning</span> We had some HTML markups in our docs that contained some `.rounded-*` classes (coming from Bootstrap) that weren't doing anything. But now, they would add probably unwanted rounded corners. So please double-check that it won't add any regressions in your websites.

- <span class="badge text-bg-success">New</span> overflow utilities: `.overflow-{x|y}-{auto|hidden|visible|scroll}`.

- <span class="badge text-bg-success">New</span> object fit utilities: `.object-fit-{value}` and `.object-fit-{breakpoint}-{value}`. _The object-fit property is used to specify how an `<img>` or `<video>` should be resized to fit its container, giving us a responsive alternative to using `background-image` for a resizable fill/fit image._

- <span class="badge text-bg-success">New</span> Added new [`.z-*` utilities]({{< docsref "/utilities/z-index" >}}) for `z-index`.

- <span class="badge text-bg-success">New</span> gap utilities: `.row-gap-{index}` and `.column-gap-{index}` to set horizontal or vertical space between children items in the specified container.

- <span class="badge text-bg-warning">Deprecated</span> `.text-muted` will be replaced by `.text-body-secondary` in v6.

  With the addition of the expanded theme colors and variables, the `.text-muted` variables and utility have been deprecated with v5.3.0. Its default value has also been reassigned to the new `--bs-secondary-color` CSS variable to better support color modes. It will be removed in v6.0.0.

- [Box shadow utilities]({{< docsref "/utilities/shadows" >}}) (and Sass variables) have been updated for dark mode. They now use `--bs-body-color-rgb` to generate the `rgba()` color values, allowing them to easily adapt to color modes based on the specified foreground color.

- <span class="badge text-bg-success">New</span> Added new focus ring helper for removing the default `outline` and setting a custom `box-shadow` focus ring associated to `.focus-ring` and `.focus-ring-{color}` classes.

- <span class="badge text-bg-success">New</span> Added new link utilities for link color opacity, underline offset, underline color, and underline opacity associated to `.link-opacity-*`, `.link-opacity-*-hover`, `.link-offset-*`, `.link-underline-*` and `.link-underline-opacity-*`. [Explore the new links utilities.]({{< docsref "/utilities/link" >}})

- <span class="badge text-bg-success">New</span> Added new `.icon-link` helper associated to `.icon-link` and `.link-hover` to quickly place and align icons alongside a textual link. Icon links support our new link utilities, too.

- <span class="badge text-bg-warning">Warning</span> For advanced Sass users, `.link-chevron` is no more defined within `scss/_type.scss` but in `scss/helpers/_chevron-link.scss`. Depending on your needs, it may be imported either from `scss/helpers/_chevron-links.scss` directly or from `scss/helpers/_icon-link.scss` for the complete icon link bundle.

- <span class="badge text-bg-success">New</span> Added new `.border-black` utility to match our `.text-black` and `.bg-black` utilities.

- CSS variable based `border-width` utilities have been reverted to set their property directly (as was done prior to v5.2.0). This avoids inheritance issues across nested elements, including tables.

- <span class="badge text-bg-warning">Deprecated</span> Deprecated the `.text-muted` utility and `$text-muted` Sass variable. It's been replaced by `.text-body-secondary` and `$body-secondary-color`.

- <span class="badge text-bg-success">New</span> Added new `.d-inline-grid` [display utility]({{< docsref "/utilities/display" >}}).

- <span class="badge text-bg-warning">Warning</span> We slightly changed the values for `.lh-sm`, `.lh-base` and `.lh-lg` to provide some more usable values. Please check that it doesn't break your design. Otherwise, it could still be reverted by setting the value directly in `_utilities.scss`.

- <span class="badge text-bg-danger">Breaking</span> We restored all Bootstrap [text color utilities]({{< docsref "/utilities/colors" >}}) and removed automatic corresponding backgrounds. Please note that you must now check for sufficient contrast yourself when using text color utilities. Guidance on this has been added in [Orange's color utilities]({{< docsref "/utilities/colors#colors" >}}).

### Examples

- **Cards/Cards RTL**
  - <span class="badge text-bg-warning">Warning</span> Semantics have been changed for the row containing icons and the actions footer containing secondary buttons in order to be more accessible. Please reflect these modifications into your websites.

- **Form page**
  - <span class="badge text-bg-warning">Warning</span> JavaScript has been updated to force the `data-focus-visible-added` attribute on the focused element on first error.

- <span class="badge text-bg-success">New</span> A download app page is now available.

### CSS and Sass variables

- Adds additional variables for alerts, `.btn-close`, and `.offcanvas`.

- The `--bs-heading-color` variable is back with an update and dark mode support. First, we now check for a `null` value on the associated Sass variable, `$headings-color`, before trying to output the CSS variable, so by default it's not present in our compiled CSS. Second, we use the CSS variable with a fallback value, `inherit`, allowing the original behavior to persist, but also allowing for overrides.

- Converts links to use CSS variables for styling `color`, but not `text-decoration`. Colors are now set with `--bs-link-color-rgb` and `--bs-link-opacity` as `rgba()` color, allowing you to customize the translucency with ease. The `a:hover` pseudo-class now overrides `--bs-link-color-rgb` instead of explicitly setting the `color` property.

- `--bs-border-width` is now being used in more components for greater control over default global styling.

- Adds new root CSS variables for our `box-shadow`s, including `--bs-box-shadow`, `--bs-box-shadow-sm`, `--bs-box-shadow-lg`, and `--bs-box-shadow-inset`.

- Restores CSS variables for breakpoints, though we don't use them in our media queries as they're not supported. However, these can be useful in JS-specific contexts.

- Per the color modes update, we've added new utilities for new Sass CSS variables `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps) with the express goal of making it easier to customize across multiple colors modes like light and dark.

- `@mixin caret()` has a new interface including a new optional parameters.

- <details class="mb-2">
  <summary><span class="badge text-bg-danger">Breaking</span> Deprecated <code>$boosted-prefix</code> in favor of <code>$prefix</code>. Please check and replace all occurrences of <code>$boosted-prefix</code> or <code>--o-</code> and replace them respectively by <code>$prefix</code> or <code>--bs-</code> in your code.</summary>

    ```diff
    - $boosted-prefix // or `--o-`
    + $prefix // or `--bs-`
    ```
  </details>

- <details class="mb-2">
  <summary><span class="badge text-bg-danger">Breaking</span> Because of the dark mode we've renamed our dark variant Sass variables; <code>$*-dark</code> in <code>$*-inverted</code></summary>
    <ul>
      <li><code>$code-color-dark</code> → <code>$code-color-inverted</code></li>
      <li><code>$focus-visible-inner-color-dark</code> → <code>$focus-visible-inner-color-inverted</code></li>
      <li><code>$focus-visible-outer-color-dark</code> → <code>$focus-visible-outer-color-inverted</code></li>
      <li><code>$kbd-bg-dark</code> → <code>$kbd-bg-inverted</code></li>
      <li><code>$kbd-color-dark</code> → <code>$kbd-color-inverted</code></li>
      <li><code>$link-color-dark</code> → <code>$link-color-inverted</code></li>
      <li><code>$link-hover-color-dark</code> → <code>$link-hover-color-inverted</code></li>
      <li><code>$mark-bg-dark</code> → <code>$mark-bg-inverted</code></li>
      <li><code>$mark-color-dark</code> → <code>$mark-color-inverted</code></li>
      <li><code>$pre-color-dark</code> → <code>$pre-color-inverted</code></li>
      <li><code>$table-caption-color-dark</code> → <code>$table-caption-color-inverted</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated CSS variables:</summary>
    <ul>
      <li><code>--bs-border-radius-2xl</code></li>
      <li><code>--bs-navbar-nav-icon-padding-x</code> → <code>--bs-navbar-nav-icon-margin-x</code></li>
      <li><code>--bs-navbar-nav-icon-padding-y</code> → <code>--bs-navbar-nav-icon-margin-y</code></li>
      <li><code>--bs-navbar-nav-link-padding-x</code> → <code>--bs-navbar-nav-link-margin-x</code></li>
      <li><code>--bs-navbar-nav-link-padding-y</code> → <code>--bs-navbar-nav-link-margin-y</code></li>
      <li><code>--bs-navbar-toggler-padding-x</code> → <code>--bs-navbar-toggler-margin-x</code></li>
      <li><code>--bs-navbar-toggler-padding-y</code> → <code>--bs-navbar-toggler-margin-y</code></li>
      <li><code>--bs-offcanvas-transition-duration</code></li>
      <li><code>--o-caption-color</code></li>
      <li><code>--o-carousel-interval</code></li>
      <li><code>--o-check-icon</code></li>
      <li><code>--o-chevron-icon</code></li>
      <li><code>--o-close-icon</code></li>
      <li><code>--o-control-bg</code></li>
      <li><code>--o-error-icon</code></li>
      <li><code>--o-icon-spacing</code></li>
      <li><code>--o-kbd-bg</code></li>
      <li><code>--o-kbd-color</code></li>
      <li><code>--o-network-color</code></li>
      <li><code>--o-network-logo</code></li>
      <li><code>--o-pre-color</code></li>
      <li><code>--o-success-icon</code></li>
      <li><code>--o-switch-gradient</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated Sass variables:</summary>
    <ul>
      <li><code>$boosted-prefix</code></li>
      <li><code>$border-radius-2xl</code></li>
      <li><code>$code-color-dark</code></li>
      <li><code>$focus-visible-inner-color-dark</code></li>
      <li><code>$focus-visible-outer-color-dark</code></li>
      <li><code>$kbd-bg-dark</code></li>
      <li><code>$kbd-color-dark</code></li>
      <li><code>$link-color-dark</code></li>
      <li><code>$link-hover-color-dark</code></li>
      <li><code>$mark-bg-dark</code></li>
      <li><code>$mark-color-dark</code></li>
      <li><code>$navbar-minimized-nav-icon-padding-y</code> → <code>$navbar-minimized-nav-icon-margin-y</code></li>
      <li><code>$navbar-minimized-toggler-padding-y</code> → <code>$navbar-minimized-toggler-margin-y</code></li>
      <li><code>$navbar-nav-icon-padding-x</code> → <code>$navbar-nav-icon-margin-x</code></li>
      <li><code>$navbar-nav-icon-padding-x-xs</code> → <code>$navbar-nav-icon-margin-x-xs</code></li>
      <li><code>$navbar-nav-icon-padding-y</code> → <code>$navbar-nav-icon-margin-y</code></li>
      <li><code>$navbar-nav-icon-padding-y-xs</code> → <code>$navbar-nav-icon-margin-y-xs</code></li>
      <li><code>$navbar-nav-link-padding-x</code> → <code>$navbar-nav-link-margin-x</code></li>
      <li><code>$navbar-nav-link-padding-x-xs</code> → <code>$navbar-nav-link-margin-x-xs</code></li>
      <li><code>$navbar-nav-link-padding-y</code> → <code>$navbar-nav-link-margin-y</code></li>
      <li><code>$navbar-supra-icon-padding-x</code> → <code>$navbar-supra-icon-margin-x</code></li>
      <li><code>$navbar-supra-icon-padding-y</code> → <code>$navbar-supra-icon-margin-y</code></li>
      <li><code>$navbar-supra-link-padding-x</code> → <code>$navbar-supra-link-margin-x</code></li>
      <li><code>$navbar-supra-link-padding-y</code> → <code>$navbar-supra-link-margin-y</code></li>
      <li><code>$navbar-toggler-padding-x</code> → <code>$navbar-toggler-margin-x</code></li>
      <li><code>$navbar-toggler-padding-y</code> → <code>$navbar-toggler-margin-y</code></li>
      <li><code>$popover-header-padding-y</code></li>
      <li><code>$pre-color-dark</code></li>
      <li><code>$table-caption-color-dark</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-body-bg-rgb</code></li>
      <li><code>--bs-border-radius-xxl</code></li>
      <li><code>--bs-box-shadow-inset</code></li>
      <li><code>--bs-box-shadow-lg</code></li>
      <li><code>--bs-box-shadow-sm</code></li>
      <li><code>--bs-box-shadow</code></li>
      <li><code>--bs-breakpoint-lg</code></li>
      <li><code>--bs-breakpoint-md</code></li>
      <li><code>--bs-breakpoint-sm</code></li>
      <li><code>--bs-breakpoint-xl</code></li>
      <li><code>--bs-breakpoint-xs</code></li>
      <li><code>--bs-breakpoint-xxl</code></li>
      <li><code>--bs-caption-color</code></li>
      <li><code>--bs-card-subtitle-color</code></li>
      <li><code>--bs-card-title-color</code></li>
      <li><code>--bs-carousel-interval</code></li>
      <li><code>--bs-check-icon</code></li>
      <li><code>--bs-chevron-icon</code></li>
      <li><code>--bs-close-icon</code></li>
      <li><code>--bs-control-bg</code></li>
      <li><code>--bs-danger-bg-subtle</code></li>
      <li><code>--bs-danger-border-subtle</code></li>
      <li><code>--bs-danger-text-emphasis</code></li>
      <li><code>--bs-dark-bg-subtle</code></li>
      <li><code>--bs-dark-border-subtle</code></li>
      <li><code>--bs-dark-text-emphasis</code></li>
      <li><code>--bs-emphasis-color-rgb</code></li>
      <li><code>--bs-emphasis-color</code></li>
      <li><code>--bs-emphasis-color</code></li>
      <li><code>--bs-error-icon</code></li>
      <li><code>--bs-focus-ring-box-shadow</code></li>
      <li><code>--bs-focus-ring-color</code></li>
      <li><code>--bs-focus-ring-opacity</code></li>
      <li><code>--bs-focus-ring-width</code></li>
      <li><code>--bs-form-check-bg</code></li>
      <li><code>--bs-form-control-bg</code></li>
      <li><code>--bs-form-control-disabled-bg</code></li>
      <li><code>--bs-form-invalid-border-color</code></li>
      <li><code>--bs-form-invalid-color</code></li>
      <li><code>--bs-form-select-bg-img</code></li>
      <li><code>--bs-form-switch-bg</code></li>
      <li><code>--bs-form-valid-border-color</code></li>
      <li><code>--bs-form-valid-color</code></li>
      <li><code>--bs-heading-color</code></li>
      <li><code>--bs-icon-spacing</code></li>
      <li><code>--bs-info-bg-subtle</code></li>
      <li><code>--bs-info-border-subtle</code></li>
      <li><code>--bs-info-text-emphasis</code></li>
      <li><code>--bs-kbd-bg</code></li>
      <li><code>--bs-kbd-color</code></li>
      <li><code>--bs-light-bg-subtle</code></li>
      <li><code>--bs-light-border-subtle</code></li>
      <li><code>--bs-light-text-emphasis</code></li>
      <li><code>--bs-link-color-rgb</code></li>
      <li><code>--bs-link-decoration</code></li>
      <li><code>--bs-link-hover-color-rgb</code></li>
      <li><code>--bs-link-hover-decoration</code></li>
      <li><code>--bs-modal-footer-margin-top</code></li>
      <li><code>--bs-nav-underline-border-color</code></li>
      <li><code>--bs-nav-underline-border-radius</code></li>
      <li><code>--bs-nav-underline-border-width</code></li>
      <li><code>--bs-nav-underline-gap</code></li>
      <li><code>--bs-nav-underline-link-active-bg</code></li>
      <li><code>--bs-nav-underline-link-active-border-color</code></li>
      <li><code>--bs-nav-underline-link-active-color</code></li>
      <li><code>--bs-nav-underline-link-border-width</code></li>
      <li><code>--bs-nav-underline-link-hover-border-color</code></li>
      <li><code>--bs-nav-underline-link-hover-bg</code></li>
      <li><code>--bs-nav-underline-link-hover-color</code></li>
      <li><code>--bs-nav-underline-link-padding-x</code></li>
      <li><code>--bs-navbar-nav-icon-margin-x</code></li>
      <li><code>--bs-navbar-nav-icon-margin-y</code></li>
      <li><code>--bs-navbar-nav-link-margin-x</code></li>
      <li><code>--bs-navbar-nav-link-margin-y</code></li>
      <li><code>--bs-navbar-toggler-margin-x</code></li>
      <li><code>--bs-navbar-toggler-margin-y</code></li>
      <li><code>--bs-network-color</code></li>
      <li><code>--bs-network-logo</code></li>
      <li><code>--bs-offcanvas-transition</code></li>
      <li><code>--bs-popover-body-padding-bottom</code></li>
      <li><code>--bs-popover-body-padding-top</code></li>
      <li><code>--bs-popover-header-line-height</code></li>
      <li><code>--bs-popover-header-padding-bottom</code></li>
      <li><code>--bs-popover-header-padding-top</code></li>
      <li><code>--bs-popover-line-height</code></li>
      <li><code>--bs-pre-color</code></li>
      <li><code>--bs-primary-bg-subtle</code></li>
      <li><code>--bs-primary-border-subtle</code></li>
      <li><code>--bs-primary-text-emphasis</code></li>
      <li><code>--bs-secondary-bg-rgb</code></li>
      <li><code>--bs-secondary-bg-subtle</code></li>
      <li><code>--bs-secondary-bg</code></li>
      <li><code>--bs-secondary-border-subtle</code></li>
      <li><code>--bs-secondary-color-rgb</code></li>
      <li><code>--bs-secondary-color</code></li>
      <li><code>--bs-secondary-text-emphasis</code></li>
      <li><code>--bs-success-bg-subtle</code></li>
      <li><code>--bs-success-border-subtle</code></li>
      <li><code>--bs-success-icon</code></li>
      <li><code>--bs-success-text-emphasis</code></li>
      <li><code>--bs-switch-gradient</code></li>
      <li><code>--bs-table-bg-state</code></li>
      <li><code>--bs-table-bg-type</code></li>
      <li><code>--bs-table-color-state</code></li>
      <li><code>--bs-table-color-type</code></li>
      <li><code>--bs-tertiary-bg-rgb</code></li>
      <li><code>--bs-tertiary-bg</code></li>
      <li><code>--bs-tertiary-color-rgb</code></li>
      <li><code>--bs-tertiary-color</code></li>
      <li><code>--bs-tooltip-arrow-border</code></li>
      <li><code>--bs-tooltip-border-color</code></li>
      <li><code>--bs-tooltip-border-width</code></li>
      <li><code>--bs-tooltip-line-height</code></li>
      <li><code>--bs-warning-bg-subtle</code></li>
      <li><code>--bs-warning-border-subtle</code></li>
      <li><code>--bs-warning-text-emphasis</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$body-bg-dark</code></li>
      <li><code>$body-color-dark</code></li>
      <li><code>$body-emphasis-color-dark</code></li>
      <li><code>$body-emphasis-color</code></li>
      <li><code>$body-secondary-bg-dark</code></li>
      <li><code>$body-secondary-bg</code></li>
      <li><code>$body-secondary-color-dark</code></li>
      <li><code>$body-secondary-color</code></li>
      <li><code>$body-tertiary-bg-dark</code></li>
      <li><code>$body-tertiary-bg</code></li>
      <li><code>$body-tertiary-color-dark</code></li>
      <li><code>$body-tertiary-color</code></li>
      <li><code>$border-color-dark</code></li>
      <li><code>$border-color-translucent-dark</code></li>
      <li><code>$border-radius-xxl</code></li>
      <li><code>$btn-color</code></li>
      <li><code>$card-subtitle-color</code></li>
      <li><code>$card-title-color</code></li>
      <li><code>$carousel-control-pause-button-size</code></li>
      <li><code>$carousel-control-pause-indicators-spacing</code></li>
      <li><code>$carousel-indicators-margin-bottom</code></li>
      <li><code>$code-color-dark</code></li>
      <li><code>$code-color-inverted</code></li>
      <li><code>$color-mode-type</code></li>
      <li><code>$danger-bg-subtle-dark</code></li>
      <li><code>$danger-bg-subtle</code></li>
      <li><code>$danger-border-subtle-dark</code></li>
      <li><code>$danger-border-subtle</code></li>
      <li><code>$danger-text-emphasis-dark</code></li>
      <li><code>$danger-text-emphasis</code></li>
      <li><code>$dark-bg-subtle-dark</code></li>
      <li><code>$dark-bg-subtle</code></li>
      <li><code>$dark-border-subtle-dark</code></li>
      <li><code>$dark-border-subtle</code></li>
      <li><code>$dark-text-emphasis-dark</code></li>
      <li><code>$dark-text-emphasis</code></li>
      <li><code>$enable-dark-mode</code></li>
      <li><code>$focus-ring-box-shadow</code></li>
      <li><code>$focus-ring-color</code></li>
      <li><code>$focus-ring-opacity</code></li>
      <li><code>$focus-ring-width</code></li>
      <li><code>$focus-visible-inner-color-inverted</code></li>
      <li><code>$focus-visible-outer-color-inverted</code></li>
      <li><code>$font-weight-medium</code></li>
      <li><code>$form-color-disabled-background-swatch</code></li>
      <li><code>$form-color-disabled-border-color</code></li>
      <li><code>$form-invalid-border-color</code></li>
      <li><code>$form-invalid-border-color-dark</code></li>
      <li><code>$form-invalid-color</code></li>
      <li><code>$form-invalid-color-dark</code></li>
      <li><code>$form-range-thumb-hover-bg</code></li>
      <li><code>$form-text-line-height</code></li>
      <li><code>$form-valid-border-color</code></li>
      <li><code>$form-valid-border-color-dark</code></li>
      <li><code>$form-valid-color</code></li>
      <li><code>$form-valid-color-dark</code></li>
      <li><code>$headings-color-dark</code></li>
      <li><code>$icon-link-gap</code></li>
      <li><code>$icon-link-underline-offset</code></li>
      <li><code>$icon-link-icon-size</code></li>
      <li><code>$icon-link-icon-transition</code></li>
      <li><code>$icon-link-icon-transform</code></li>
      <li><code>$info-bg-subtle-dark</code></li>
      <li><code>$info-bg-subtle</code></li>
      <li><code>$info-border-subtle-dark</code></li>
      <li><code>$info-border-subtle</code></li>
      <li><code>$info-text-emphasis-dark</code></li>
      <li><code>$info-text-emphasis</code></li>
      <li><code>$kbd-bg-inverted</code></li>
      <li><code>$kbd-color-inverted</code></li>
      <li><code>$light-bg-subtle-dark</code></li>
      <li><code>$light-bg-subtle</code></li>
      <li><code>$light-border-subtle-dark</code></li>
      <li><code>$light-border-subtle</code></li>
      <li><code>$light-text-emphasis-dark</code></li>
      <li><code>$light-text-emphasis</code></li>
      <li><code>$link-color-dark</code></li>
      <li><code>$link-color-inverted</code></li>
      <li><code>$link-hover-color-dark</code></li>
      <li><code>$link-hover-color-inverted</code></li>
      <li><code>$list-group-hover-bg</code></li>
      <li><code>$mark-bg-inverted</code></li>
      <li><code>$mark-color-inverted</code></li>
      <li><code>$nav-underline-border-color</code></li>
      <li><code>$nav-underline-border-radius</code></li>
      <li><code>$nav-underline-border-width</code></li>
      <li><code>$nav-underline-gap</code></li>
      <li><code>$nav-underline-gap-lg</code></li>
      <li><code>$nav-underline-link-active-bg</code></li>
      <li><code>$nav-underline-link-active-border-color</code></li>
      <li><code>$nav-underline-link-active-color</code></li>
      <li><code>$nav-underline-link-border-width</code></li>
      <li><code>$nav-underline-link-hover-color</code></li>
      <li><code>$nav-underline-link-padding-x</code></li>
      <li><code>$navbar-minimized-nav-icon-margin-y</code></li>
      <li><code>$navbar-minimized-toggler-margin-y</code></li>
      <li><code>$navbar-nav-icon-margin-x</code></li>
      <li><code>$navbar-nav-icon-margin-x-xs</code></li>
      <li><code>$navbar-nav-icon-margin-y</code></li>
      <li><code>$navbar-nav-icon-margin-y-xs</code></li>
      <li><code>$navbar-nav-link-margin-x</code></li>
      <li><code>$navbar-nav-link-margin-x-xs</code></li>
      <li><code>$navbar-nav-link-margin-y</code></li>
      <li><code>$navbar-supra-icon-margin-x</code></li>
      <li><code>$navbar-supra-icon-margin-y</code></li>
      <li><code>$navbar-supra-link-margin-x</code></li>
      <li><code>$navbar-supra-link-margin-y</code></li>
      <li><code>$navbar-toggler-margin-x</code></li>
      <li><code>$navbar-toggler-margin-y</code></li>
      <li><code>$modal-footer-margin-top</code></li>
      <li><code>$modal-footer-margin-top-sm</code></li>
      <li><code>$modal-scrollable-footer-margin-top</code></li>
      <li><code>$popover-body-padding-bottom</code></li>
      <li><code>$popover-body-padding-top</code></li>
      <li><code>$popover-header-line-height</code></li>
      <li><code>$popover-header-padding-bottom</code></li>
      <li><code>$popover-header-padding-top</code></li>
      <li><code>$popover-line-height</code></li>
      <li><code>$popover-padding-y</code></li>
      <li><code>$pre-color-inverted</code></li>
      <li><code>$primary-bg-subtle-dark</code></li>
      <li><code>$primary-bg-subtle</code></li>
      <li><code>$primary-border-subtle-dark</code></li>
      <li><code>$primary-border-subtle</code></li>
      <li><code>$primary-text-emphasis-dark</code></li>
      <li><code>$primary-text-emphasis</code></li>
      <li><code>$secondary-bg-subtle-dark</code></li>
      <li><code>$secondary-bg-subtle</code></li>
      <li><code>$secondary-border-subtle-dark</code></li>
      <li><code>$secondary-border-subtle</code></li>
      <li><code>$secondary-text-emphasis-dark</code></li>
      <li><code>$secondary-text-emphasis</code></li>
      <li><code>$success-bg-subtle-dark</code></li>
      <li><code>$success-bg-subtle</code></li>
      <li><code>$success-border-subtle-dark</code></li>
      <li><code>$success-border-subtle</code></li>
      <li><code>$success-text-emphasis-dark</code></li>
      <li><code>$success-text-emphasis</code></li>
      <li><code>$table-caption-color-inverted</code></li>
      <li><code>$table-cell-icon-margin-bottom</code></li>
      <li><code>$table-cell-icon-margin-top</code></li>
      <li><code>$tooltip-border-color</code></li>
      <li><code>$tooltip-border-width</code></li>
      <li><code>$tooltip-line-height</code></li>
      <li><code>$utilities-links-underline</code></li>
      <li><code>$warning-bg-subtle-dark</code></li>
      <li><code>$warning-bg-subtle</code></li>
      <li><code>$warning-border-subtle-dark</code></li>
      <li><code>$warning-border-subtle</code></li>
      <li><code>$warning-text-emphasis-dark</code></li>
      <li><code>$warning-text-emphasis</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$theme-colors-bg-subtle</code></li>
      <li><code>$theme-colors-border-subtle</code></li>
      <li><code>$theme-colors-text</code></li>
    </ul>
  </details>

### Docs

- Improved included JavaScript for live Toast demo.

- Added `twbs/examples` repo contents to the top of the Examples page.

### Tooling

- Bootstrap replaced instances of bootstrap-npm-starter project with the newer and more complete [twbs/examples repo](https://github.com/twbs/examples).

## v5.2.3

<hr class="mb-4">

Boosted v5.2.3 has landed with a handful of urgent bug fixes from Bootstrap and with specific Boosted content.

If you need more details about the changes, please refer to the [v5.2.3 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.3).

### Accessibility

- **Focus visible**
  - <span class="badge text-bg-warning">Warning</span> We completely refactored our focus visible management.

  A `focus-visible()` mixin is provided to ensure a proper visible focus state. This visible focus state is defined by an outer outline and an inner box shadow. On light background, the outer outline is black and the inner box shadow is white. The latter will be invisible most of the time but is here to ensure a security on light background but that aren't white. On dark background, these colors are inverted.

  We also removed the `:focus` style of our components that was mirroring the `:hover` state, as well as the transition animation.

  Even if the generic case will be transparent for your project, please check this new behavior in your websites.

### Components

- **Card**
  - <span class="badge text-bg-warning">Warning</span> We now apply font styles on our `.card-title` and `.card-subtitle`, so you can use any `<h*>` following your semantic structure inside a card. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <h4 class="card-title">Title</h4>
      + <h3 class="card-title">Title</h3>
      ```
    </details>

  - <span class="badge text-bg-warning">Warning</span> We now apply `.fw-bold` on some `.card-text` when there is an image in the card to follow the design guidelines. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <p class="card-text">Description</p>
      + <p class="card-text fw-bold">Description</p>
      ```
    </details>

- **Dropdowns**
  - <span class="badge text-bg-warning">Warning</span> Dropdown menus y offset has slightly changed from 2px to 0. Please reflect this modification into your websites by changing each `data-bs-offset` or by adding them if needed and set it to 0.
  ```diff
  - <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,y">
  + <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,0">
  ```

- **Footer**
  - <span class="badge text-bg-warning">Warning</span> Each footer accordion now uses an `aria-labelledby` attribute to be consistent with our accordion component. Please reflect these modifications into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion">
      + <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="heading">
      ```
    </details>

- **Navs & Tabs**
  - <span class="badge text-bg-danger">Breaking</span> Nested tabs variant changed its markup to ensure a greater accessibility and consistency over the documentation. Please reflect these modifications into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      - Ensure that the root element of the tablist is a `<ul>`.
      - Ensure that the `role="tablist"` is set on `<ul>`.
      - Ensure that the `role="tablist"` has an `aria-owns` set too with all the ids it owns.
      - Ensure that the `role="presentation"` is set on each `<li>` inside a `role="tablist"`.
      - Ensure that the `role="tabpanel"` is set on each child of `.tab-content`.
      - Ensure that the `disabled` links only miss the `[href]` attribute.
    </details>

- **Stepped Process**
  - Current step has been slightly changed for accessibility purpose; the link to this step has been converted to plain text. Please reflect this modification into your websites.
  ```diff
  -        <a class="stepped-process-link" href="#" title="2. Review" aria-current="step">Review</a>
  +        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
  ```

### Contents

- **Tables**
  - <span class="badge text-bg-warning">Warning</span> Every table now has a caption with `.visually-hidden` on it. Please reflect this modification into your websites.

  - <span class="badge text-bg-success">New</span> Tables now fully support striped rows and columns.

### Forms

- <span class="badge text-bg-success">New</span> Form helpers icon buttons will help you to provide extra help information with the `.form-helper` utility class.

- <span class="badge text-bg-success">New</span> Small size form controls are now available. Small inputs are defined by their `.form-control-sm`, small selects by their `.form-select-sm`. They can be associated with `.col-form-label-sm` to correctly follow their size if needed. `.input-group-sm` can also be used depending on the context.

### Examples

- **Cards and Cards RTL**
  - <span class="badge text-bg-warning">Warning</span> We now use correctly `<button>` instead of `<a>`. We now apply font style on our `.card-title` so these examples have been modified to follow the right semantic header hierarchy. Furthermore, we dropped unnecessary `.card-footer` and notice that size of icons has slightly changed. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>Example</summary>

      ```diff
        <div class="card">
          <img src="..." alt="..."/>
          <div class="card-body">
      -     <h4 class="card-title">Title</h4>
      +     <h3 class="card-title">Title</h3>
      -     <h6 class="card-text">Caption</h6>
      +     <p class="card-text fw-bold mb-4">Caption</p>
      -   </div>
      -   <div class="card-footer pt-2">
      -     <a class="btn btn-secondary" aria-label="Button description" title="Button description">Button</a>
      +     <button class="btn btn-secondary" aria-label="Button description" title="Button description">Button</button>
          </div>
        </div>
      ```
    </details>

- **Pages**
  - <span class="badge text-bg-success">New</span> A new section called 'Pages' has been added where you will find complete and reusable pages that can be found in the Design Guidelines.
  - <span class="badge text-bg-success">New</span> A form page example is now available.

### CSS and Sass variables

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated CSS variables:</summary>
    <ul>
      <li><code>--bs-accordion-body-padding-x</code></li>
      <li><code>--bs-accordion-body-padding-y</code></li>
      <li><code>--bs-card-spacer-y</code></li>
      <li><code>--bs-dropdown-toggle-bg</code></li>
      <li><code>--bs-dropdown-toggle-border-color</code></li>
      <li><code>--bs-dropdown-toggle-color</code></li>
      <li><code>--bs-dropdown-toggle-hover-border-color</code></li>
      <li><code>--bs-dropdown-toggle-padding-x</code></li>
      <li><code>--bs-tag-outline-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-accordion-body-padding-bottom</code></li>
      <li><code>--bs-accordion-body-padding-end</code></li>
      <li><code>--bs-accordion-body-padding-start</code></li>
      <li><code>--bs-accordion-body-padding-top</code></li>
      <li><code>--bs-card-spacer-bottom</code></li>
      <li><code>--bs-card-spacer-top</code></li>
      <li><code>--bs-dropdown-line-height</code></li>
      <li><code>--bs-focus-visible-inner-color</code></li>
      <li><code>--bs-focus-visible-outer-color</code></li>
      <li><code>--bs-table-accent-bg</code></li>
      <li><code>--bs-table-striped-bg</code></li>
      <li><code>--bs-table-striped-color</code></li>
      <li><code>--bs-table-striped-hover-bg</code></li>
      <li><code>--bs-table-striped-hover-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> Deprecated Sass variables:</summary>
    <ul>
      <li><code>$accordion-body-padding-x</code></li>
      <li><code>$accordion-body-padding-y</code></li>
      <li><code>$btn-close-focus-shadow</code></li>
      <li><code>$card-spacer-y</code></li>
      <li><code>$form-star-focus-box-shadow</code></li>
      <li><code>$form-star-focus-color</code></li>
      <li><code>$form-star-focus-color-dark</code></li>
      <li><code>$form-star-focus-outline</code></li>
      <li><code>$form-star-focus-outline-dark</code></li>
      <li><code>$outline-offset</code></li>
      <li><code>$outline-width</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$accordion-body-padding-bottom</code></li>
      <li><code>$accordion-body-padding-end</code></li>
      <li><code>$accordion-body-padding-start</code></li>
      <li><code>$accordion-body-padding-top</code></li>
      <li><code>$card-spacer-bottom</code></li>
      <li><code>$card-spacer-top</code></li>
      <li><code>$focus-visible-inner-color</code></li>
      <li><code>$focus-visible-inner-color-dark</code></li>
      <li><code>$focus-visible-inner-width</code></li>
      <li><code>$focus-visible-outer-color</code></li>
      <li><code>$focus-visible-outer-color-dark</code></li>
      <li><code>$focus-visible-outer-offset</code></li>
      <li><code>$focus-visible-outer-width</code></li>
      <li><code>$focus-visible-zindex</code></li>
      <li><code>$form-helper-label-margin-bottom</code></li>
      <li><code>$form-helper-size</code></li>
      <li><code>$form-select-border-radius-sm</code></li>
      <li><code>$form-select-font-size-sm</code></li>
      <li><code>$form-select-padding-x-sm</code></li>
      <li><code>$form-select-padding-y-sm</code></li>
      <li><code>$helper-icon</code></li>
      <li><code>$input-border-radius-sm</code></li>
      <li><code>$input-font-size-sm</code></li>
      <li><code>$step-link-active-outline</code></li>
      <li><code>$table-accent-bg</code></li>
      <li><code>$table-striped-bg</code></li>
      <li><code>$table-striped-bg-factor</code></li>
      <li><code>$table-striped-color</code></li>
      <li><code>$table-striped-columns-order</code></li>
      <li><code>$table-striped-hover-bg</code></li>
      <li><code>$table-striped-hover-bg-factor</code></li>
      <li><code>$table-striped-hover-color</code></li>
      <li><code>$table-striped-order</code></li>
      <li><code>$table-variant-active-bg-factor</code></li>
      <li><code>$table-variant-hover-bg-factor</code></li>
      <li><code>$table-variant-striped-hover-bg</code></li>
      <li><code>$table-variant-striped-hover-bg-factor</code></li>
    </ul>
  </details>

## v5.2.2

<hr class="mb-4">

Boosted v5.2.2 has landed with new bug fixes and documentation updates including a new RTL section in our examples.

If you need more details about the changes, please refer to the [v5.2.2 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.2).

### Components

- **Modals**
  - <span class="badge text-bg-warning">Warning</span> Modals markups have changed to show that a modal dialog represents its own separate document/context, so most of the `.modal-title`s are now `<h1>`s associated with a `.h*`. Please reflect this modification into your websites by choosing the right header level.

- **Orange navbar**
  - Languages selection's `aria-label`s have been slightly changed in some supra bars examples for accessibility purpose; visible name must be included in the accessible name. It might be a useful modification to propagate into your websites if you have this same kind of languages selection.
  ```diff
  -        <li class="nav-item"><a class="nav-link active" href="#" aria-label="English version">EN</a></li>
  +        <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version">EN</a></li>
  ```

### Forms

- <span class="badge text-bg-warning">Warning</span> All forms examples have been modified to add a `.mt-2` to all submit buttons in order to always have 30px between the last form control and the button. Please reflect this modification into your websites.

### Contents

- **Tables**
  - <span class="badge text-bg-warning">Warning</span> Reintroduction of `.has-checkbox` from v4 to correct spacing of first column when having row selection.

### Examples

- <span class="badge text-bg-success">New</span> There is a new RTL section in the examples.

- **RTL**
  - <span class="badge text-bg-success">New</span> Cards RTL example is now available.

### CSS and Sass variables

- `@mixin button-size()` has a new interface including a new optional parameter for button letter spacing.

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-btn-letter-spacing</code></li>
      <li><code>--bs-primary-text-rgb</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$btn-letter-spacing</code></li>
      <li><code>$btn-letter-spacing-lg</code></li>
      <li><code>$btn-letter-spacing-sm</code></li>
      <li><code>$form-feedback-line-height</code></li>
    </ul>
  </details>

## v5.2.1

<hr class="mb-4">

Boosted v5.2.1 is here with fixes from our latest minor release, v5.2. These changes include bug fixes, documentation updates, and some dependency updates, but also a new Tags component and a lot of new dark variants for our components.

If you need more details about the changes, please refer to the [v5.2.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.1).

### Components

- **Back to top**
  - <span class="badge text-bg-danger">Breaking</span> Back to top 'Label inside' variant was removed because not compliant with Orange Design System.

- **Breadcrumb**
  - <span class="badge text-bg-success">New</span> Breadcrumb now has a dark variant.

- **Footer**
  - <span class="badge text-bg-warning">Warning</span> All footers examples have been modified to use the "Terms and conditions" wording instead of "Terms & Conditions". Please reflect this modification into your websites.

- **List group**
  - <span class="badge text-bg-success">New</span> List group now has a dark variant.

- **Pagination**
  - <span class="badge text-bg-success">New</span> Pagination now has a dark variant.

- **Scrollspy**
  - <span class="badge text-bg-success">New</span> Scrollspy has a new `data-bs-threshold` data attribute.

- **Stepped process**
  - <span class="badge text-bg-success">New</span> Stepped process now has a dark variant.

- **Tags**
  - <span class="badge text-bg-success">New</span> Tags are now a component.

- **Toasts**
  - <span class="badge text-bg-warning">Warning</span> Changed the markup for Toasts with a custom content (toast message and close button). Please reflect this modification into your websites.
    <details class="mt-2">
      <summary>More info</summary>
      {{< markdown >}}
```diff
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
-   <div class="toast-body">
+   <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
-   <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
+   <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
  </div>
</div>
```
      {{< /markdown >}}
    </details>

### Contents

- <span class="badge text-bg-warning">Warning</span> Changed the rendering of `<mark>` (and so `.mark`). Depending on your usage it may worth checking the impact in your websites.

- <span class="badge text-bg-warning">Warning</span> Tooltips examples applied on SVGs have been updated to use `focusable="false"` and `aria-hidden="true"` because SVGs do not carry any specific information so they should not be readable by screen readers. Please reflect this modification in your websites. By the way please check all the SVGs in your websites in order to apply this same modification if needed.
  <details class="mb-3">
    <summary>More info</summary>
    {{< markdown >}}
```diff
<a href="#" class="d-inline-block" data-bs-toggle="tooltip" data-bs-title="Default tooltip" aria-label="Default tooltip">
- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
+ <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" aria-hidden="true">
    <rect width="100%" height="100%" fill="#563d7c"/>
    <circle cx="50" cy="50" r="30" fill="#007bff"/>
  </svg>
</a>
```
    {{< /markdown >}}
  </details>

- The close icon SVG rendering has changed in modals, offcanvases and close buttons. Although is has no direct impact, you might want to apply this same modification within your websites.

### Helpers and utilities

- <span class="badge text-bg-success">New</span> `.img-thumbnail` is now officially supported.

### CSS and Sass variables

- <span class="badge text-bg-danger">Breaking</span> `--bs-pagination-margin-start` and `--bs-pagination-focus-outline` are now deprecated.

- <span class="badge text-bg-warning">Warning</span> `$accordion-color` was announced a deprecated in v5.2.0 but is finally not removed.

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-alert-btn-close-offset</code></li>
      <li><code>--bs-alert-dismissible-padding-right</code></li>
      <li><code>--bs-alert-heading-font-weight</code></li>
      <li><code>--bs-alert-icon-margin-y</code></li>
      <li><code>--bs-alert-icon-size</code></li>
      <li><code>--bs-alert-line-height</code></li>
      <li><code>--bs-alert-link-font-weight</code></li>
      <li><code>--bs-alert-logo-size</code></li>
      <li><code>--bs-breadcrumb-color</code></li>
      <li><code>--bs-btn-close-active-border-color</code></li>
      <li><code>--bs-btn-close-active-color</code></li>
      <li><code>--bs-btn-close-bg</code></li>
      <li><code>--bs-btn-close-border-color</code></li>
      <li><code>--bs-btn-close-border-width</code></li>
      <li><code>--bs-btn-close-color</code></li>
      <li><code>--bs-btn-close-disabled-color</code></li>
      <li><code>--bs-btn-close-hover-color</code></li>
      <li><code>--bs-btn-close-padding</code></li>
      <li><code>--bs-btn-hover-border-color</code></li>
      <li><code>--bs-dropdown-zindex</code></li>
      <li><code>--bs-highlight-color</code></li>
      <li><code>--bs-pagination-active-item-color</code></li>
      <li><code>--bs-pagination-padding-end</code></li>
      <li><code>--bs-tab-content-border-width</code></li>
      <li><code>--bs-tab-content-padding-x</code></li>
      <li><code>--bs-tab-content-padding-y</code></li>
      <li><code>--bs-nav-tabs-link-border-width</code></li>
      <li><code>--bs-nav-tabs-link-hover-bg</code></li>
      <li><code>--bs-nav-tabs-link-hover-color</code></li>
      <li><code>--bs-nav-tabs-link-padding-x</code></li>
      <li><code>--bs-navbar-font-weight</code></li>
      <li><code>--bs-navbar-toggler-icon-filter</code></li>
      <li><code>--bs-stepped-process-link-next-color</code></li>
      <li><code>--bs-toast-zindex</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$alert-heading-font-weight</code></li>
      <li><code>$alert-icon-size-sm</code></li>
      <li><code>$breadcrumb-color</code></li>
      <li><code>$breadcrumb-dark-active-color</code></li>
      <li><code>$breadcrumb-dark-bg</code></li>
      <li><code>$breadcrumb-dark-color</code></li>
      <li><code>$breadcrumb-dark-divider-color</code></li>
      <li><code>$btn-close-active-border-color</code></li>
      <li><code>$btn-close-active-color</code></li>
      <li><code>$btn-close-border-color</code></li>
      <li><code>$btn-close-border-width</code></li>
      <li><code>$btn-close-disabled-color</code></li>
      <li><code>$btn-close-hover-color</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$list-group-dark-action-active-bg</code></li>
      <li><code>$list-group-dark-action-active-color</code></li>
      <li><code>$list-group-dark-action-color</code></li>
      <li><code>$list-group-dark-action-hover-color</code></li>
      <li><code>$list-group-dark-active-bg</code></li>
      <li><code>$list-group-dark-active-border-color</code></li>
      <li><code>$list-group-dark-active-color</code></li>
      <li><code>$list-group-dark-bg</code></li>
      <li><code>$list-group-dark-border-color</code></li>
      <li><code>$list-group-dark-color</code></li>
      <li><code>$list-group-dark-disabled-bg</code></li>
      <li><code>$list-group-dark-disabled-color</code></li>
      <li><code>$mark-bg-dark</code></li>
      <li><code>$mark-color</code></li>
      <li><code>$mark-color-dark</code></li>
      <li><code>$navbar-dark-border-color</code></li>
      <li><code>$navbar-font-weight</code></li>
      <li><code>$pagination-active-item-color</code></li>
      <li><code>$pagination-dark-active-bg</code></li>
      <li><code>$pagination-dark-active-border-color</code></li>
      <li><code>$pagination-dark-active-color</code></li>
      <li><code>$pagination-dark-active-item-bg</code></li>
      <li><code>$pagination-dark-active-item-border-color</code></li>
      <li><code>$pagination-dark-active-item-color</code></li>
      <li><code>$pagination-dark-bg</code></li>
      <li><code>$pagination-dark-border-color</code></li>
      <li><code>$pagination-dark-color</code></li>
      <li><code>$pagination-dark-disabled-bg</code></li>
      <li><code>$pagination-dark-disabled-border-color</code></li>
      <li><code>$pagination-dark-disabled-color</code></li>
      <li><code>$pagination-dark-focus-bg</code></li>
      <li><code>$pagination-dark-focus-color</code></li>
      <li><code>$pagination-dark-hover-bg</code></li>
      <li><code>$pagination-dark-hover-border-color</code></li>
      <li><code>$pagination-dark-hover-color</code></li>
      <li><code>$step-item-dark-active-bg</code></li>
      <li><code>$step-item-dark-bg</code></li>
      <li><code>$step-item-dark-drop-shadow</code></li>
      <li><code>$step-item-dark-next-bg</code></li>
      <li><code>$step-link-dark-active-color</code></li>
      <li><code>$step-link-dark-color</code></li>
      <li><code>$step-link-dark-next-color</code></li>
      <li><code>$step-link-next-color</code></li>
    </ul>
  </details>

- Dark text variants handling is now explained in [Customize > CSS variables > Dark text rule](https://boosted.orange.com/docs/5.2/customize/css-variables#dark-text-rule).

## v5.2.0

<hr class="mb-4">

### Refreshed design

Boosted v5.2.0 features a subtle design update for a handful of components and properties across the project, **most notably through refined `border-radius` values on buttons and form controls**. Our documentation also has been updated with a new homepage and a simpler docs layout that no longer collapses sections of the sidebar.

### More CSS variables

**We've updated all our components to use CSS variables.** While Sass still underpins everything, each component has been updated to include CSS variables on the component base classes (e.g., `.btn`), allowing for more real-time customization of Bootstrap. In subsequent releases, we'll continue to expand our use of CSS variables into our layout, forms, helpers, and utilities. Read more about CSS variables in each component on their respective documentation pages.

Our CSS variable usage will be somewhat incomplete until Boosted 6. While we'd love to fully implement these across the board, they do run the risk of causing breaking changes. For example, setting `$alert-border-width: var(--bs-border-width)` in our source code breaks potential Sass in your own code if you were doing `$alert-border-width * 2` for some reason.

As such, wherever possible, we will continue to push towards more CSS variables, but please recognize our implementation may be slightly limited in v5.

### New `_maps.scss`

**Boosted v5.2.0 introduced a new Sass file with `_maps.scss`.** It pulls out several Sass maps from `_variables.scss` to fix an issue where updates to an original map were not applied to secondary maps that extend them. For example, updates to `$theme-colors` were not being applied to other theme maps that relied on `$theme-colors`, breaking key customization workflows. In short, Sass has a limitation where once a default variable or map has been _used_, it cannot be updated. _There's a similar shortcoming with CSS variables when they're used to compose other CSS variables._

This is why variable customizations in Boosted have to come after `@import "functions"`, but before `@import "variables"` and the rest of our import stack. The same applies to Sass maps—you must override the defaults before they get used. The following maps have been moved to the new `_maps.scss`:

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

Your custom Boosted CSS builds should now look something like this with a separate maps import.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### New utilities

- Expanded [`font-weight` utilities]({{< docsref "/utilities/text#font-weight-and-italics" >}}) to include `.fw-semibold` for semibold fonts.
- Expanded [`border-radius` utilities]({{< docsref "/utilities/borders#sizes" >}}) to include two new sizes, `.rounded-4` and `.rounded-5`, for more options.

### Additional changes

- **Introduced new `$enable-container-classes` option. —** Now when opting into the experimental CSS Grid layout, `.container-*` classes will still be compiled, unless this option is set to `false`. Containers also now keep their gutter values.

- **Offcanvas component now has [responsive variations]({{< docsref "/components/offcanvas#responsive" >}}).** The original `.offcanvas` class remains unchanged—it hides content across all viewports. To make it responsive, change that `.offcanvas` class to any `.offcanvas-{sm|md|lg|xl|xxl}` class.

- **Thicker table dividers are now opt-in. —** We've removed the thicker and more difficult to override border between table groups and moved it to an optional class you can apply, `.table-group-divider`. [See the table docs for an example.]({{< docsref "/content/tables#table-group-dividers" >}})

- **[Scrollspy has been rewritten](https://github.com/twbs/bootstrap/pull/33421) to use the Intersection Observer API**, which means you no longer need relative parent wrappers, deprecates `offset` config, and more. Look for your Scrollspy implementations to be more accurate and consistent in their nav highlighting.

- **Popovers and tooltips now use CSS variables.** Some CSS variables have been updated from their Sass counterparts to reduce the number of variables. As a result, three variables have been deprecated in this release: `$popover-arrow-color`, `$popover-arrow-outer-color`, and `$tooltip-arrow-color`.

- **Added new `.text-bg-{color}` helpers.** Instead of setting individual `.text-*` and `.bg-*` utilities, you can now use [the `.text-bg-*` helpers]({{< docsref "helpers/color-background" >}}) to set a `background-color` with contrasting foreground `color`.

- Added `.form-check-reverse` modifier to flip the order of labels and associated checkboxes/radios.

- Added [striped columns]({{< docsref "/content/tables#striped-columns" >}}) support to tables via the new `.table-striped-columns` class.

- <span class="badge text-bg-danger">Breaking</span> Changed `data-o-label` to `data-bs-label` in Back to top component.

- <span class="badge text-bg-danger">Breaking</span> Re-introduced footer component by tweaking a bit the classes: replaced `.o-footer-*` by `.footer-*`.

For a complete list of changes, [see the v5.2.0 project on GitHub](https://github.com/twbs/bootstrap/projects/32).

## v5.1.0

<hr class="mb-4">

- <span class="badge text-bg-danger">Breaking</span> Changed the behavior of `.bg-success`, `.bg-danger`, `.bg-warning` and `.bg-info`. You may prefer to use `.bg-supporting-green`, `.bg-supporting-pink`, `.bg-supporting-yellow` and `.bg-supporting-blue` instead (apart from badges). `$supporting-colors` is replaced by `$background-colors`.

- **Added experimental support for [CSS Grid layout]({{< docsref "/layout/css-grid" >}}). —** This is a work in progress, and is not yet ready for production use, but you can opt into the new feature via Sass. To enable it, disable the default grid, by setting `$enable-grid-classes: false` and enable the CSS Grid by setting `$enable-cssgrid: true`.

- **Updated navbars to support offcanvas. —** Add [offcanvas drawers in any navbar]({{< docsref "/components/navbar#offcanvas" >}}) with the responsive `.navbar-expand-*` classes and some offcanvas markup.

- **Added new [placeholder component]({{< docsref "/components/placeholders/" >}}). —** Our newest component, a way to provide temporary blocks in lieu of real content to help indicate that something is still loading in your site or app.

- **Collapse plugin now supports [horizontal collapsing]({{< docsref "/components/collapse#horizontal" >}}). —** Add `.collapse-horizontal` to your `.collapse` to collapse the `width` instead of the `height`. Avoid browser repainting by setting a `min-height` or `height`.

- **Added new stack and vertical rule helpers. —** Quickly apply multiple flexbox properties to quickly create custom layouts with [stacks]({{< docsref "/helpers/stacks/" >}}). Choose from horizontal (`.hstack`) and vertical (`.vstack`) stacks. Add vertical dividers similar to `<hr>` elements with the [new `.vr` helpers]({{< docsref "/helpers/vertical-rule/" >}}).

- **Added new global `:root` CSS variables. —** Added several new CSS variables to the `:root` level for controlling `<body>` styles. More are in the works, including across our utilities and components, but for now read up [CSS variables in the Customize section]({{< docsref "/customize/css-variables/" >}}).

- **Overhauled color and background utilities to use CSS variables, and added new [text opacity]({{< docsref "/utilities/text#opacity" >}}) and [background opacity]({{< docsref "/utilities/background#opacity" >}}) utilities. —** `.text-*` and `.bg-*` utilities are now built with CSS variables and `rgba()` color values, allowing you to easily customize any utility with new opacity utilities.

- **Added new snippet examples based to show how to customize our components. —** Pull ready to use customized components and other common design patterns with our new [Snippets examples]({{< docsref "/examples#snippets" >}}).

- **Removed unused positioning styles from popovers and tooltips** as these are handled solely by Popper. `$tooltip-margin` has been deprecated and set to `null` in the process.

Want more information? [Read the v5.1.0 blog post.](https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/)

## v5.0.0

<hr class="mb-4">

{{< callout info >}}
**Hey there!** Changes to our first major release of Boosted 5, v5.0.0, are documented below. They don't reflect the additional changes shown above.
{{< /callout >}}

### Dependencies

- Dropped jQuery.
- Upgraded from Popper v1.x to Popper v2.x.
- Replaced Libsass with Dart Sass as our Sass compiler given Libsass was deprecated.
- Migrated from Jekyll to Hugo for building our documentation

### Browser support

- Dropped Internet Explorer 10 and 11
- Dropped Microsoft Edge < 16 (Legacy Edge)
- Dropped Firefox < 60
- Dropped Safari < 12
- Dropped iOS Safari < 12
- Dropped Chrome < 60

<hr class="my-5">

### Documentation changes

- Redesigned homepage, docs layout, and footer.
- Added [new Parcel guide](/docs/{{< param docs_version >}}/getting-started/parcel/).
- Added [new Customize section](/docs/{{< param docs_version >}}/customize/overview/), replacing [v4's Theming page](https://boosted.orange.com/docs/4.6/getting-started/theming/), with new details on Sass, global configuration options, color schemes, CSS variables, and more.
- Reorganized all form documentation into [new Forms section](/docs/{{< param docs_version >}}/forms/overview/), breaking apart the content into more focused pages.
- Similarly, updated [the Layout section](/docs/{{< param docs_version >}}/layout/breakpoints/), to flesh out grid content more clearly.
- Renamed "Navs" component page to "Navs & Tabs".
- Renamed "Checks" page to "Checks & radios".
- Redesigned the navbar and added a new subnav to make it easier to get around our sites and docs versions.
- Added new keyboard shortcut for the search field: <kbd><kbd>Ctrl</kbd> + <kbd>/</kbd></kbd>.

### Sass

- We've ditched the default Sass map merges to make it easier to remove redundant values. Keep in mind you now have to define all values in the Sass maps like `$theme-colors`. Check out how to deal with [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}).

- <span class="badge text-bg-danger">Breaking</span> Renamed `$orange-2` to `$accessible-orange`.

- <span class="badge text-bg-danger">Breaking</span> Removed `$container-fluid-margin-widths`. Please use `$container-fluid-margin` instead.

- <span class="badge text-bg-danger">Breaking</span> Renamed `color-yiq()` function and related variables to `color-contrast()` as it's no longer related to YIQ color space. [See #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold` is renamed to `$min-contrast-ratio`.
  - `$yiq-text-dark` and `$yiq-text-light` are respectively renamed to `$color-contrast-dark` and `$color-contrast-light`.

- <span class="badge text-bg-danger">Breaking</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge text-bg-danger">Breaking</span> Removed print styles and `$enable-print-styles` variable. Print display classes are still around. [See #28339](https://github.com/twbs/bootstrap/pull/28339).


- <span class="badge text-bg-danger">Breaking</span> Dropped `color()`, `theme-color()`, and `gray()` functions in favor of variables. [See #29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge text-bg-danger">Breaking</span> Renamed `theme-color-level()` function to `color-level()` and now accepts any color you want instead of only `$theme-color` colors. [See #29083](https://github.com/twbs/bootstrap/pull/29083) **Watch out:** `color-level()` was later on dropped in `v5.0.0-alpha3`.

- <span class="badge text-bg-danger">Breaking</span> Renamed `$enable-prefers-reduced-motion-media-query` and `$enable-pointer-cursor-for-buttons` to `$enable-reduced-motion` and `$enable-button-pointers` for brevity.


- <span class="badge text-bg-danger">Breaking</span> Removed the `bg-gradient-variant()` mixin. Use the `.bg-gradient` class to add gradients to elements instead of the generated `.bg-gradient-*` classes.

- <span class="badge text-bg-danger">Breaking</span> **Removed previously deprecated mixins:**
  - `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (also dropped the associated utility class, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge text-bg-danger">Breaking</span> Renamed `scale-color()` function to `shift-color()` to avoid collision with Sass's own color scaling function.

- `box-shadow` mixins now allow `null` values and drop `none` from multiple arguments. [See #30394](https://github.com/twbs/bootstrap/pull/30394).

- The `border-radius()` mixin now has a default value.

### Color system

- The color system which worked with `color-level()` and `$theme-color-interval` was removed in favor of a new color system. All `lighten()` and `darken()` functions in our codebase are replaced by `tint-color()` and `shade-color()`. These functions will mix the color with either white or black instead of changing its lightness by a fixed amount. The `shift-color()` will either tint or shade a color depending on whether its weight parameter is positive or negative. [See #30622](https://github.com/twbs/bootstrap/pull/30622) for more details.

- Added new tints and shades for every color, providing nine separate colors for each base color, as new Sass variables.

- Improved color contrast. Bumped color contrast ratio from 3:1 to 4.5:1 and updated blue, green, cyan, and pink colors to ensure WCAG 2.2 AA contrast. Also changed our color contrast color from `$gray-900` to `$black`.

- To support our color system, we've added new custom `tint-color()` and `shade-color()` functions to mix our colors appropriately.

### Grid updates

- **New breakpoint!** Added new `xxl` breakpoint for `1400px` and up. No changes to all other breakpoints.

- **Improved gutters.** Gutters are now set in rems, and are narrower than v4 (`1.5rem`, or about `24px`, down from `30px`). This aligns our grid system's gutters with our spacing utilities.
  - Added new [gutter class](/docs/{{< param docs_version >}}/layout/gutters/) (`.g-*`, `.gx-*`, and `.gy-*`) to control horizontal/vertical gutters, horizontal gutters, and vertical gutters.
  - <span class="badge text-bg-danger">Breaking</span> Renamed `.no-gutters` to `.g-0` to match new gutter utilities.

- Columns no longer have `position: relative` applied, so you may have to add `.position-relative` to some elements to restore that behavior.

- <span class="badge text-bg-danger">Breaking</span> Dropped several `.order-*` classes that often went unused. We now only provide `.order-0` to `.order-5` out of the box.

- <span class="badge text-bg-danger">Breaking</span> Dropped the `.media` component as it can be easily replicated with utilities. [See #28265](https://github.com/twbs/bootstrap/pull/28265) and the [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}}).

- <span class="badge text-bg-danger">Breaking</span> `boosted-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way, our grid styles can be used in more places without interference.

- `$enable-grid-classes` no longer disables the generation of container classes anymore. [See #29146.](https://github.com/twbs/bootstrap/pull/29146)

- Updated the `make-col` mixin to default to equal columns without a specified size.

### Content, Reboot, etc

- <span class="badge text-bg-danger">Breaking</span> Orange Helvetica CSS file names changed from `orangeHelvetica.*.css` to `orange-helvetica.*.css`.

- **[RFS]({{< docsref "/getting-started/rfs" >}}) is now enabled by default.** Headings using the `font-size()` mixin will automatically adjust their `font-size` to scale with the viewport. _This feature was previously opt-in with v4._

- <span class="badge text-bg-danger">Breaking</span> Overhauled our display typography to replace our `$display-*` variables and with a `$display-font-sizes` Sass map. Also removed the individual `$display-*-weight` variables for a single `$display-font-weight` and adjusted `font-size`s.

- Added two new `.display-*` heading sizes, `.display-5` and `.display-6`.

- **Links are underlined by default** (not just on hover), unless they're part of specific components.

- <span class="badge text-bg-danger">Breaking</span> `.o-link-arrow` is renamed to `.link-chevron`. `.o-link-arrow.back` has been dropped.

- **Redesigned tables** to refresh their styles and rebuild them with CSS variables for more control over styling.

- <span class="badge text-bg-danger">Breaking</span> Nested tables do not inherit styles anymore.

- <span class="badge text-bg-danger">Breaking</span> `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).

- <span class="badge text-bg-danger">Breaking</span> The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (color name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.

- Split table cell padding variables into `-y` and `-x`.

- <span class="badge text-bg-danger">Breaking</span> Dropped `.pre-scrollable` class. [See #29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge text-bg-danger">Breaking</span> `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead. [See #29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge text-bg-danger">Breaking</span> Dropped `.text-justify` class. [See #29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge text-bg-danger">Breaking</span> ~~`<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).~~

- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.

- Added `$enable-smooth-scroll`, which applies `scroll-behavior: smooth` globally—except for users asking for reduced motion through `prefers-reduced-motion` media query. [See #31877](https://github.com/twbs/bootstrap/pull/31877)

### RTL

- Horizontal direction specific variables, utilities, and mixins have all been renamed to use logical properties like those found in flexbox layouts—e.g., `start` and `end` in lieu of `left` and `right`.

### Forms

<!-- Boosted mod: no floating labels -->

- <span class="badge text-bg-danger">Breaking</span> **Consolidated native and custom form elements.** Checkboxes, radios, selects, and other inputs that had native and custom classes in v4 have been consolidated. Now nearly all our form elements are entirely custom, most without the need for custom HTML.
  - `.custom-control.custom-checkbox` is now `.form-check`.
  - `.custom-control.custom-radio` is now `.form-check`.
  - `.custom-control.custom-switch` is now `.form-check.form-switch`.
  - `.custom-select` is now `.form-select`.
  - `.custom-file` and `.form-control-file` have been replaced by custom styles on top of `.form-control`.
  - `.custom-range` is now `.form-range`.
  - Dropped native `.form-control-file` and `.form-control-range`.

- <span class="badge text-bg-danger">Breaking</span> Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

- The longstanding [Missing border radius on input group with validation feedback bug](https://github.com/twbs/bootstrap/issues/25110) is finally fixed by adding an additional `.has-validation` class to input groups with validation.

- <span class="badge text-bg-danger">Breaking</span> **Dropped form-specific layout classes for our grid system.** Use our grid and utilities instead of `.form-group`, `.form-row`, or `.form-inline`.

- <span class="badge text-bg-danger">Breaking</span> Form labels now require `.form-label`.

- <span class="badge text-bg-danger">Breaking</span> `.form-text` no longer sets `display`, allowing you to create inline or block help text as you wish just by changing the HTML element.

- Form controls no longer used fixed `height` when possible, instead deferring to `min-height` to improve customization and compatibility with other components.

- Validation icons are no longer applied to `<select>`s with `multiple`.

- Rearranged source Sass files under `scss/forms/`, including input group styles.

<hr class="my-5">

### Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable. [See #30564](https://github.com/twbs/bootstrap/pull/30564).

#### Accordion

- Added [new accordion component]({{< docsref "/components/accordion" >}}).

#### Alerts

- Alerts now have [examples with icons]({{< docsref "/components/alerts#icons" >}}).

- Removed custom styles for `<hr>`s in each alert since they already use `currentColor`.

#### Back to top

- <span class="badge text-bg-danger">Breaking</span> Dropped `.o-scroll-up`, use the `.back-to-top` class instead. Please check our [Back to top page]({{< docsref "/components/back-to-top" >}}) to use it properly. Back to top component doesn't use JavaScript anymore.

#### Badges

- <span class="badge text-bg-danger">Breaking</span> Dropped all `.badge-*` color classes for background utilities (e.g., use `.bg-primary` instead of `.badge-primary`).

- <span class="badge text-bg-danger">Breaking</span> Dropped `.badge-pill`—use the `.rounded-pill` utility instead.

- <span class="badge text-bg-danger">Breaking</span> Removed hover and focus styles for `<a>` and `<button>` elements.

- Increased default padding for badges from `.25em`/`.5em` to `.35em`/`.65em`.

#### Breadcrumbs

- Simplified the default appearance of breadcrumbs by removing `padding`, `background-color`, and `border-radius`.

- Added new CSS custom property `--bs-breadcrumb-divider` for easy customization without needing to recompile CSS.

#### Buttons

- <span class="badge text-bg-danger">Breaking</span> **[Toggle buttons](/docs/{{< param docs_version >}}/forms/checks-radios/#toggle-buttons), with checkboxes or radios, no longer require JavaScript and have new markup.** We no longer require a wrapping element, add `.btn-check` to the `<input>`, and pair it with any `.btn` classes on the `<label>`. [See #30650](https://github.com/twbs/bootstrap/pull/30650). _The docs for this has moved from our Buttons page to the new Forms section._

- <span class="badge text-bg-danger">Breaking</span> **Dropped `.btn-block` for utilities.** Instead of using `.btn-block` on the `.btn`, wrap your buttons with `.d-grid` and a `.gap-*` utility to space them as needed. Switch to responsive classes for even more control over them. [Read the docs for some examples.](/docs/{{< param docs_version >}}/components/buttons/#block-buttons)

- <span class="badge text-bg-danger">Breaking</span> Social buttons now need an extra `.btn-icon`.

- Updated our `button-variant()` and `button-outline-variant()` mixins to support additional parameters.

- Updated buttons to ensure increased contrast on hover and active states.

- Disabled buttons now have `pointer-events: none;`.

#### Card

- <span class="badge text-bg-danger">Breaking</span> Dropped `.card-deck` in favor of our grid. Wrap your cards in column classes and add a parent `.row-cols-*` container to recreate card decks (but with more control over responsive alignment).

- [#31035](https://github.com/twbs/bootstrap/pull/31035): Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

- <span class="badge text-bg-danger">Breaking</span> Replaced the `.card` based accordion with a [new Accordion component]({{< docsref "/components/accordion" >}}).

#### Carousel

- Added new [`.carousel-dark` variant]({{< docsref "/components/carousel#dark-variant" >}}) for dark text, controls, and indicators (great for lighter backgrounds).

- Replaced chevron icons for carousel controls with new SVGs from [Solaris]({{< docsref "/extend/icons" >}}).

#### Close button

- <span class="badge text-bg-danger">Breaking</span> Renamed `.close` to `.btn-close` for a less generic name.

- Close buttons now use a `background-image` (embedded SVG) instead of a `&times;` in the HTML, allowing for easier customization without the need to touch your markup.

- Added new `.btn-close-white` variant that uses `filter: invert(1)` to enable higher contrast dismiss icons against darker backgrounds.

#### Collapse

- Removed scroll anchoring for accordions.

#### Dropdowns

- Added new `.dropdown-menu-dark` variant and associated variables for on-demand dark dropdowns.

- Added new variable for `$dropdown-padding-x`.

- Darkened the dropdown divider for improved contrast.

- <span class="badge text-bg-danger">Breaking</span> All the events for the dropdown are now triggered on the dropdown toggle button and then bubbled up to the parent element.

- Dropdown menus now have a `data-bs-popper="static"` attribute set when the positioning of the dropdown is static, or dropdown is in the navbar. This is added by our JavaScript and helps us use custom position styles without interfering with Popper's positioning.

- <span class="badge text-bg-danger">Breaking</span> Dropped `flip` option for dropdown plugin in favor of native Popper configuration. You can now disable the flipping behavior by passing an empty array for [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) option in [flip](https://popper.js.org/docs/v2/modifiers/flip/) modifier.

- Dropdown menus can now be clickable with a new `autoClose` option to handle the [auto close behavior]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). You can use this option to accept the click inside or outside the dropdown menu to make it interactive.

- Dropdowns now support `.dropdown-item`s wrapped in `<li>`s.

#### Footer

- <span class="badge text-bg-danger">Breaking</span> Footers' HTML structure changed a lot as it works now with sub-components. They don't require `.o-footer-*` classes anymore, they need [`.footer-*` classes]({{< docsref "/components/footer" >}}).

#### Jumbotron

- <span class="badge text-bg-danger">Breaking</span> Dropped the jumbotron component as it can be replicated with utilities.

#### List group

- Added new [`.list-group-numbered` modifier]({{< docsref "/components/list-group#numbered" >}}) to list groups.

#### Navs and tabs

- Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

#### Navbars

- <span class="badge text-bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).
- <span class="badge text-bg-danger">Breaking</span> The `.active` class can no longer be applied to `.nav-item`s, it must be applied directly on `.nav-link`s.

#### Offcanvas

- Added the new [offcanvas component]({{< docsref "/components/offcanvas" >}}).

#### Orange navbar

- <span class="badge text-bg-danger">Breaking</span> Supra bars now require a `.bg-dark` class.

- Removed the `.global` class for the instantiation of global headers. You just need to declare your navbar with default `.navbar-*` classes.

- Changed the handling of the minimizing on scroll behavior. Initialize it on your `<header>` element by adding the `.sticky-top` class.

- Classes to handle titles in the bars have been added: use `.title` for a title on a single line, or `.two-lined` for, as its name suggests, a title on two lines.

#### Pagination

- <span class="badge text-bg-danger">Breaking</span> Dropped `.has-label` support.

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

- Added `transition`s to pagination links.

#### Popovers

- <span class="badge text-bg-danger">Breaking</span> Renamed `.arrow` to `.popover-arrow` in our default popover template.

- Renamed `whiteList` option to `allowList`.

#### Spinners

- Spinners now honor `prefers-reduced-motion: reduce` by slowing down animations. [See #31882](https://github.com/twbs/bootstrap/pull/31882).

- Improved spinner vertical alignment.

#### Stepped process

- <span class="badge text-bg-danger">Breaking</span> Dropped `.o-stepbar`, use `.stepped-process` instead. All other classes using `.stepbar-*` should be replaced by `.stepped-process-*`.

- <span class="badge text-bg-danger">Breaking</span> Renamed respectively `$o-stepbar-margin-r` and `$o-stepbar-arrow-width` to `$step-item-margin-end` and `$step-item-arrow-width`.

- <span class="badge text-bg-danger">Breaking</span> Dropped `$o-stepbar-height` and lots of new variables were added.

#### Toasts

- Toasts can now be [positioned]({{< docsref "/components/toasts#placement" >}}) in a `.toast-container` with the help of [positioning utilities]({{< docsref "/utilities/position" >}}).

- Changed default toast duration to 5 seconds.

- Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.

#### Tooltips

- <span class="badge text-bg-danger">Breaking</span> Renamed `.arrow` to `.tooltip-arrow` in our default tooltip template.

- <span class="badge text-bg-danger">Breaking</span> The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of popper elements.

- <span class="badge text-bg-danger">Breaking</span> Renamed `whiteList` option to `allowList`.

### Utilities

- <span class="badge text-bg-danger">Breaking</span> Renamed several utilities to use logical property names instead of directional names with the addition of RTL support:
  - Renamed `.float-left` and `.float-right` to `.float-start` and `.float-end`.
  - Renamed `.border-left` and `.border-right` to `.border-start` and `.border-end`.
  - Renamed `.rounded-left` and `.rounded-right` to `.rounded-start` and `.rounded-end`.
  - Renamed `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`.
  - Renamed `.pl-*` and `.pr-*` to `.ps-*` and `.pe-*`.
  - Renamed `.text-*-left` and `.text-*-right` to `.text-*-start` and `.text-*-end`.

- <span class="badge text-bg-danger">Breaking</span> Disabled negative margins by default.

- Added new `.bg-body` class for quickly setting the `<body>`'s background to additional elements.

- Added new [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) for `top`, `right`, `bottom`, and `left`. Values include `0`, `50%`, and `100%` for each property.

- Added new `.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

- Added new [`border-width` utilities]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge text-bg-danger">Breaking</span> Renamed `.text-monospace` to `.font-monospace`.

- <span class="badge text-bg-danger">Breaking</span> Dropped `.rounded`, `.rounded-top`, `.rounded-right`, `.rounded-bottom`, `.rounded-left`, `.rounded-0`, `.rounded-sm` and `.rounded-lg` to reduce bundle size since we shouldn't use those classes in Boosted.

- <span class="badge text-bg-danger">Breaking</span> Removed `.text-hide` as it's an antiquated method for hiding text that shouldn't be used anymore.

- Added `.fs-*` utilities for `font-size` utilities (with RFS enabled). These use the same scale as HTML's default headings (1-6, large to small), and can be modified via Sass map.

- <span class="badge text-bg-danger">Breaking</span> Renamed `.font-weight-*` utilities as `.fw-*` for brevity and consistency.

- <span class="badge text-bg-danger">Breaking</span> Renamed `.font-italic` utility to `.fst-italic` for brevity and consistency with new `.fst-normal` utility.

- Added `.d-grid` to display utilities and new `gap` utilities (`.gap`) for CSS Grid and flexbox layouts.

- <span class="badge text-bg-danger">Breaking</span> Removed `.rounded-sm` and `rounded-lg`, and introduced a new scale of classes, `.rounded-0` to `.rounded-3`. [See #31687](https://github.com/twbs/bootstrap/pull/31687).

- Added new `line-height` utilities: `.lh-1`, `.lh-sm`, `.lh-base` and `.lh-lg`. See [here]({{< docsref "/utilities/text#line-height" >}}).

- Moved the `.d-none` utility in our CSS to give it more weight over other display utilities.

- Extended the `.visually-hidden-focusable` helper to also work on containers, using `:focus-within`.

### Helpers

- <span class="badge text-bg-danger">Breaking</span> **Responsive embed helpers have been renamed to [ratio helpers]({{< docsref "/helpers/ratio" >}})** with new class names and improved behaviors, as well as a helpful CSS variable.
  - Classes have been renamed to change `by` to `x` in the aspect ratio. For example, `.ratio-16by9` is now `.ratio-16x9`.
  - We've dropped the `.embed-responsive-item` and element group selector in favor of a simpler `.ratio > *` selector. No more class is needed, and the ratio helper now works with any HTML element.
  - The `$embed-responsive-aspect-ratios` Sass map has been renamed to `$aspect-ratios` and its values have been simplified to include the class name and the percentage as the `key: value` pair.
  - CSS variables are now generated and included for each value in the Sass map. Modify the `--bs-aspect-ratio` variable on the `.ratio` to create any [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge text-bg-danger">Breaking</span> **"Screen reader" classes are now ["visually hidden" classes]({{< docsref "/helpers/visually-hidden" >}}).**
  - Changed the Sass file from `scss/helpers/_screenreaders.scss` to `scss/helpers/_visually-hidden.scss`
  - Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`
  - Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

- `boosted-utilities.css` now also includes our helpers. Helpers don't need to be imported in custom builds anymore.

### JavaScript

- **Dropped jQuery dependency** and rewrote plugins to be in regular JavaScript.

- <span class="badge text-bg-danger">Breaking</span> Data attributes for all JavaScript plugins are now namespaced to help distinguish Boosted functionality from third parties and your own code. For example, we use `data-bs-toggle` instead of `data-toggle`.

- **All plugins can now accept a CSS selector as the first argument.** You can either pass a DOM element or any valid CSS selector to create a new instance of the plugin:

  ```js
  const modal = new boosted.Modal('#myModal')
  const dropdown = new boosted.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig` can be passed as a function that accepts the Boosted's default Popper config as an argument, so that you can merge this default configuration in your way. **Applies to dropdowns, popovers, and tooltips.**


- The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of Popper elements. **Applies to dropdowns, popovers, and tooltips.**

- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.
