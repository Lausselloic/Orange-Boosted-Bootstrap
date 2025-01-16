---
layout: docs
title: Orange navbar
description: Documentation and examples for Boosted's exclusive responsive navbars.
group: components
aliases:
  - "/docs/components/orange-navbar/"
toc: true
added:
  version: "5.2"
---

## How it works

Orange navbars are based on the [navbar]({{<docsref "/components/navbar">}}) component. They add some display management and introduce the Supra bar component.

An Orange navbar will always be at the top of any page.

### Structure

Orange navbar is basically a `<header>` that will contain your `<nav>` elements:
  - an optional [Supra bar](#supra-bar) above the Global header
  - a **mandatory** [Global header](#global-header)
  - an optional [Navigation under](#navigation-under) below the Global header

Use our spacing and flex utility classes for controlling spacing and alignment within navbars.

For more details, please refer to the [navbar supported content]({{<docsref "/components/navbar#supported-content">}}).

### Behavior

**Responsive behavior**: Orange navbars are designed to be responsive on all devices.

  `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` on `<nav>` will allow:
  - [Supra bar](#supra-bar) and [Navigation under](#navigation-under) bar to be displayed starting at the indicated breakpoint
  - [Global header](#global-header) to collapse its content behind the burger menu button. For more information, visit [Navbar/Responsive behaviors]({{<docsref "/components/navbar#responsive-behaviors">}})

**Behavior on scroll**: Add either `.fixed-top` or `.sticky-top` to the `<header>` to change its behavior on scroll. Please see our [dedicated part](#minimizing-behavior) to have more details.

## Example

{{< example class="p-0" show_markup=false >}}
  <header data-bs-theme="dark">
    {{< orange-supra mode="languages" aria_label="Supra navigation - Main example with languages" >}}
    {{< /orange-supra >}}
    {{< orange-global-headers id="global-header" mode="actions" navigation=true supra=true aria_label="Global navigation - Standard example with nav-under" >}}
    {{< /orange-global-headers >}}
  </header>
{{< /example >}}

For more examples, visit our [examples page]({{<docsref "/examples/navbars">}}).

## Supra bar

A Supra bar is a simple navigation bar used with `.supra` that can be displayed as a first part of an Orange navbar.
This component should be:
- visible only for the **larger screens** (`lg` to `xxl` breakpoints) using `.navbar-expand-*`.
- displayed inside the burger menu for **smaller screens**. There it has to be split in 2 parts.

Refer to the [Responsive behavior](#responsive-behavior) to have more details.

### Standard

{{< example class="p-0" >}}
{{< orange-supra theme_dark=true aria_label="Supra-navigation - Only left navbar example">}}
{{< /orange-supra >}}
{{< /example >}}

### With additional navbar
An additional navbar (with text or icon items) can be added on the right of the Supra bar.

{{< example class="p-0" >}}
{{< orange-supra mode="languages" theme_dark=true aria_label="Supra navigation - With an additional languages navbar example">}}
{{< /orange-supra >}}
{{< /example >}}

### Responsive behavior

<div class="bd-example p-0">
  <header data-bs-theme="dark">
    {{< orange-supra mode="languages" aria_label="Supra navigation - Responsive behavior example" >}}
    {{< /orange-supra >}}
    {{< orange-global-headers id="global-header-0" demo=true mode="actions" supra=true aria_label="Global navigation - Responsive behavior with a supra bar example" >}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <!-- Supra bar -->
  <nav class="navbar navbar-expand-lg supra" aria-label="Supra navigation - Responsive behavior example">
    <div class="container-xxl">
      <!-- Left navbar of the Supra bar -->
      <ul class="navbar-nav me-auto">
        ...
      </ul>
      <!-- Right navbar of the Supra bar -->
      <ul class="navbar-nav">
        ...
      </ul>
    </div>
  </nav>

  <!-- Global header -->
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Responsive behavior with a supra bar example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      ...

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      <div id="global-header-0.1" class="navbar-collapse collapse global-header-0">
        <!-- Left navbar of the Supra bar -->
        <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
        </ul>

        <!-- Right navbar of the Supra bar -->
        <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" lang="fr" hreflang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" lang="es" hreflang="es">ES</a></li>
        </ul>
      </div>

      <!-- Navbar with action icons -->
      ...
    </div>
  </nav>
</header>
```

## Global header

### Standard

<div class="bd-example p-0">
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-1" mode="actions" demo=true aria_label="Global navigation - Standard example">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Standard example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{<param docs_version>}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>

      <!-- Burger menu (visible on small screens) -->
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header-1" aria-controls="global-header-1.1 global-header-1.2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar with links -->
      <div id="global-header-1.1" class="navbar-collapse collapse global-header-1">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
        </ul>
      </div>

      <!-- Navbar with action icons -->
      <div id="global-header-1.2" class="navbar-collapse collapse d-sm-flex global-header-1">
        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                <use xlink:href="/docs/{{<param docs_version>}}/assets/img/boosted-sprite.svg#search" />
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                <use xlink:href="/docs/{{<param docs_version>}}/assets/img/boosted-sprite.svg#buy" />
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-relative align-self-start">
                <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/{{<param docs_version>}}/assets/img/navbar-contact.png" width="25" height="25" alt="" loading="lazy">
              <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### With custom logo

Even though you should use the Master or Small logo, you can still replace it by an other one depending on your needs.

{{< callout warning >}}
You should consider having a **responsive SVG logo**. In order to do so, you may set up a responsive rendering into your SVG, [as we do with the Master logo]({{< docsref "/about/brand#orange-logo" >}}).

If you do not intend to use your own SVG, you should explore the DOM solution and therefore do as if you had a [title on one or two lines]({{< ref "#global-header-with-title" >}}).
{{< /callout >}}

<div class="bd-example p-0">
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-2" mode="actions" responsive_logo=true labels_end=true demo=true aria_label="Global navigation - With custom logo example">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - With custom logo example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{<param docs_version>}}/assets/brand/OBS-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with action icons -->
      ...
    </div>
  </nav>
</header>
```

### With title

Next to the brand logo, you can add a title that can be displayed on one or two lines.

<div class="bd-example p-0">
  <!-- On one line -->
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-3" mode="actions" title=true demo=true aria_label="Global navigation - With one line title example">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - With one line title example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{<param docs_version>}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Title</h1>
      </div>

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with action icons -->
      ...
    </div>
  </nav>
</header>
```

<div class="bd-example p-0">
  <!-- On two lines -->
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-4" mode="actions" title=true title_2=true labels=true demo=true aria_label="Global navigation - With two lines title example">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - With two lines title example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{<param docs_version>}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="two-lined">
          Title Line 1
          <br>
          Title Line 2
        </h1>
      </div>

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with action icons -->
      ...
    </div>
  </nav>
</header>
```

### With search box

You can add a search input into your Global header.

<div class="bd-example p-0">
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-5" mode="search" demo=true aria_label="Global navigation - With search box example">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - With search box example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      ...

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with action icons -->
      <form class="d-none d-lg-flex col-3 navbar-item" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div id="global-header-5.2" class="navbar-collapse collapse d-sm-flex global-header-5">
        <ul class="navbar-nav flex-row">
          <li class="nav-item d-lg-none">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                <use xlink:href="/docs/{{<param docs_version>}}/assets/img/boosted-sprite.svg#search" />
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### With mode selector

You can add a mode selector control into your Global header.

{{< callout info >}}
In this section, the dropdown menu items are not functional because the JavaScript is linked to the documentation mode selector; the active state and the tick icon are not rendered correctly. But don't worry, it'll work perfectly in your project.

Don't forget to import the [corresponding color modes JavaScript]({{< docsref "/customize/color-modes#javascript" >}}) in your project.

To easily integrate it in your project, you can start from our [Navbar mode selector example]({{< docsref "/examples/navbar-mode-selector" >}}).
{{< /callout >}}

<div class="bd-example-snippet">
  <div class="bd-example p-0">
    <header data-bs-theme="dark">
      {{< orange-global-headers id="global-header-6" mode="theme" demo=true aria_label="Global navigation - With mode selector example">}}
      {{< /orange-global-headers >}}
    </header>
  </div>
</div>

```html
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check2" viewBox="0 0 1000 1000">
    <path d="M729.667 250 396.333 583.333l-125-125L188 541.667l125 125L396.333 750l83.334-83.333L813 333.333z"/>
  </symbol>
  <symbol id="ui-auto-mode" viewBox="0 0 1000 1000">
    <path d="M500 75C265.3 75 75 265.5 75 500.5S265.3 926 500 926s425-190.5 425-425.5S734.7 75 500 75m0 775V150c192.6.9 350 157.5 350 350.5S692.6 849.1 500 850"/>
  </symbol>
  <symbol id="ui-dark-mode" viewBox="0 0 1000 1000">
    <path d="M675 649.88c-179.493 0-325-145.57-325-325.141A324.478 324.478 0 0 1 465.721 76C247.03 93.463 75 276.537 75 499.815 75 734.638 265.279 925 500 925c223.181 0 406.175-172.106 423.63-390.891A324.222 324.222 0 0 1 675 649.88Z"/>
  </symbol>
  <symbol id="ui-light-mode" viewBox="0 0 1000 1000">
    <path d="M287.868 712.132a25.073 25.073 0 0 0-35.355 0l-53.033 53.033a25 25 0 0 0 35.355 35.355l53.033-53.033a25.073 25.073 0 0 0 0-35.355Zm424.264-424.264a25.073 25.073 0 0 0 35.355 0l53.033-53.033a25 25 0 0 0-35.355-35.355l-53.033 53.033a25.073 25.073 0 0 0 0 35.355Zm35.355 424.264a25.073 25.073 0 0 0-35.355 0 25.073 25.073 0 0 0 0 35.355l53.033 53.033a25 25 0 0 0 35.355-35.355ZM252.513 287.868a25.073 25.073 0 0 0 35.355 0 25.073 25.073 0 0 0 0-35.355l-53.033-53.033a25 25 0 0 0-35.355 35.355ZM200 500a25.073 25.073 0 0 0-25-25h-75a25 25 0 0 0 0 50h75a25.073 25.073 0 0 0 25-25Zm700-25h-75a25 25 0 0 0 0 50h75a25 25 0 0 0 0-50ZM500 800a25.073 25.073 0 0 0-25 25v75a25 25 0 0 0 50 0v-75a25.073 25.073 0 0 0-25-25Zm0-600a25.073 25.073 0 0 0 25-25v-75a25 25 0 0 0-50 0v75a25.073 25.073 0 0 0 25 25Zm0 50c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250Z"/>
  </symbol>
</svg>

<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - With mode selector example">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      ...

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with mode selector -->
      <div id="global-header-6.2" class="navbar-collapse d-lg-flex global-header-6 collapse show">
        <ul class="navbar-nav flex-row">
          <li class="nav-item dropdown">
            <button class="nav-link nav-icon dropdown-toggle" id="bd-theme" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle mode (auto)">
              <svg class="theme-icon-active" aria-hidden="true"><use href="#ui-auto-mode"></use></svg>
              <span class="d-lg-none ms-2" id="bd-theme-text">Toggle mode</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end mb-2" aria-labelledby="bd-theme-text">
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                  <svg class="me-2" aria-hidden="true"><use href="#ui-light-mode"></use></svg>
                  Light
                  <svg class="ms-auto d-none" aria-hidden="true"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                  <svg class="me-2" aria-hidden="true"><use href="#ui-dark-mode"></use></svg>
                  Dark
                  <svg class="ms-auto d-none" aria-hidden="true"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                  <svg class="me-2" aria-hidden="true"><use href="#ui-auto-mode"></use></svg>
                  Auto
                  <svg class="ms-auto d-none" aria-hidden="true"><use href="#check2"></use></svg>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### Minimizing behavior

When scrolling the page, for breakpoints from `md` to `xxl`, the Global header's height decreases when `.sticky-top` is used on `<header>`.

You can see a full example of the minimizing Orange navbar behavior in action [here]({{<docsref "/examples/navbar-sticky">}}).

The minimized global header will **always** use the small [Master logo]({{<docsref "/about/brand#orange-logo">}}).

{{< callout warning >}}
Be careful when using **`.fixed-top`**, the collapsed content should be escapable easily.
{{< /callout >}}

{{< callout info >}}
If you don't use the sticky top version you can optimize your JavaScript by not importing this component.
Refer to [Lean JavaScript]({{< docsref "/customize/optimize#lean-javascript" >}}) for more information.
{{< /callout >}}

## Navigation under

A Navigation under bar is a simple navigation bar, different than a Supra bar. It can be used as a last part of an Orange navbar whenever your header may have too many items to stand on one line.

It should be visible only for the larger screens (`lg` to `xxl` breakpoints) using `.navbar-expand-*`.

<div class="bd-example p-0">
  <header data-bs-theme="dark">
    {{< orange-global-headers id="global-header-7" mode="actions" title=true title_2=true labels=true navigation=true aria_label="Global navigation - Standard example with nav-under">}}
    {{< /orange-global-headers >}}
  </header>
</div>

```html
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Standard example with nav-under">
    <div class="container-xxl">

      <!-- Orange brand logo -->
      ...

      <!-- Burger menu (visible on small screens) -->
      ...

      <!-- Navbar with links -->
      ...

      <!-- Navbar with action icons -->
      ...
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Nav-under example">
    <div class="container-xxl">
      <div id="global-header-7.1" class="navbar-collapse collapse global-header-7">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, orange navbars now use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="navbar-css-vars" file="scss/_navbar.scss" >}}

For orange navbars, we added a responsive behavior on medium breakpoints and over.

{{< scss-docs name="orange-navbar-css-vars" file="scss/_navbar.scss" >}}

Supra bars just override some variables.

{{< scss-docs name="supra-navbar-css-vars" file="scss/_orange-navbar.scss" >}}

Minimized bars just override some variables.

{{< scss-docs name="minimized-navbar-css-vars" file="scss/_orange-navbar.scss" >}}

### Sass variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-navbar-variables" file="scss/_variables.scss" >}}
