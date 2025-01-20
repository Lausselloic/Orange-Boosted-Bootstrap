---
layout: docs
title: Color modes
description: OUDS Web supports color modes, or themes. Explore our default light color mode and the dark mode.
group: customize
aliases:
  - "/docs/customize/color-modes/"
toc: true
---

{{< callout >}}
**Try it yourself!** Download the source code and working demo for using Bootstrap with Stylelint, and the color modes from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/color-modes). You can also [open the example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html).
{{< /callout >}}

## Modes

Modes are a way to change the **color of the text and the components inside**. We provide 4 different modes that are `"light"`, `"dark"`, `"root"`, and `"root-inverted"`. The `"light"` and `"dark"` modes are static, while the `"root"` and `"root-inverted"` modes are dynamic.

{{< callout warning >}}
Be careful when using the `data-bs-theme` attribute on an element carrying one of our [`.bg-*` utilities]({{< docsref "/utilities/background" >}}), the `background-color` property will also be automatically changed to use the current defined color mode.
{{< /callout >}}

### Static color modes

By default, we provide two static themes/modes that are `"light"` and `"dark"`. These themes are named static because once you've set the theme on an element it won't ever change whatever the main theme is. The `"light"` theme will set the text color to black and set the light variant for every components inside, while the `"dark"` theme will set the text color to white and set the dark variant for every components inside.

{{< example >}}
<div class="bg-emphasized p-short">
  <div data-bs-theme="dark">
    <p>Text and components in here will always be in dark mode</p>
    <button class="btn btn-strong mb-short">Dark mode button</button>
    <div class="bg-status-accent-emphasized p-short">
      <div data-bs-theme="light">
        <p>Text and components in here will always be in light mode</p>
        <button class="btn btn-strong">Light mode button</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

#### `light` mode

Light mode is the default mode of the page, it allows you to write using black text color and light mode components. To get the light theme independently from the cascade, you can set via <span class="user-select-all">`data-bs-theme="light"`</span> on any element. Feel free to change the color mode of the page to see the effect on the inside background example above.

#### `dark` mode

Dark mode allows you to write using light gray text color and dark mode components. To get the dark theme independently from the cascade, you can set via <span class="user-select-all">`data-bs-theme="dark"`</span> on any element. Feel free to change the color mode of the page to see the effect on the outside background example above.

### Dynamic color modes

We have two more dynamic themes that are `"root"` and `"root-inverted"`. These themes are named dynamic because they depend on the main element mode, so by changing the main mode, you're changing all those dynamic calls as well. The `"root"` theme will reset the color mode to the main theme of your page, while the `"root-inverted"` theme will reset the color mode to the opposite theme of your page.

{{< callout info >}}
Note that these themes **aren't meant to be used on the root element**.
{{< /callout >}}

{{< example >}}
<div class="bg-status-neutral-emphasized p-short">
  <div data-bs-theme="root-inverted">
    <p>Text and components in here will always be inverted compared to the main mode</p>
    <button class="btn btn-strong mb-short">Inverted mode button</button>
    <div class="bg-status-neutral-emphasized p-short">
      <div data-bs-theme="root">
        <p>Text and components in here will always be reset to the main mode</p>
        <button class="btn btn-strong">Main mode button</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

#### `root-inverted` mode

Here is an example of a block that inverts the main theme when it's placed inside a dark block. To get the inverted main theme independently from the cascade, set via <span class="user-select-all">`data-bs-theme="root-inverted"`</span> on any element but the main one. Feel free to change the color mode of the page to see the effect.

#### `root` mode

Here is an example of a block that follows the main theme when it's placed inside a dark block. To get the main theme independently from the cascade, set via <span class="user-select-all">`data-bs-theme="root"`</span> on any element but the main one. Feel free to change the color mode of the page to see the effect.

<!-- TODO LM: Do we keep the example above or the example should be something that can happen ? Like a dropdown menu inside a header. -->

## How to use

You should apply a `[data-bs-theme]` attribute whenever **you need to change the text color** and the component variants inside.

Here is a recap table of when to use which contextual theme. Prefer to use `light` and `dark` themes as much as possible to avoid unexpected rendering. The theme to use strongly depends on the context of use and there is no manner to automate it unfortunately.

However, these 4 themes should be enough to deal with all of your use cases. If it's not the case, you are probably using them wrong. Since the implementation might be quite hard to understand, don't hesitate to contact us via our [GitHub discussions]({{< param repo >}}/discussions) with a reduced test case if you're having trouble implementing.

{{< callout info >}}
We usually use **2 different layers to set the `background-color` and the theme**. In some rare case you might want to set it on one element. <!-- TODO LM: Fill in the blank and explain -->
{{< /callout >}}

{{< bs-table >}}
| Wanted local text color <br>inside main light mode | Wanted local text color <br>inside main dark mode | Theme that should be used |
| --- | --- | --- |
| Black | Black | <span class="user-select-all">`"light"`</span> |
| White | White | <span class="user-select-all">`"dark"`</span> |
| White | Black | <span class="user-select-all">`"root-inverted"`</span> |
| Black | White | <span class="user-select-all">`"root"`</span> |
{{< /bs-table >}}

{{< callout warning >}}
`root` theme should be used only in very specific occasions, most of the time it will cascade from the main theme.
{{< /callout >}}

## Examples

Here are some examples of how to use the different `data-bs-theme` attribute on different use cases.

{{< example class="d-flex justify-content-between flex-wrap gap-shortest" >}}
<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Always light dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Always dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div data-bs-theme="root-inverted" class="dropdown">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButtonRootInverted" data-bs-toggle="dropdown" aria-expanded="false">
    Main inverted theme dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonRootInverted">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div data-bs-theme="root-inverted" class="dropdown">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButtonRoot" data-bs-toggle="dropdown" aria-expanded="false">
    Main inverted theme dropdown and main theme dropdown menu
  </button>
  <ul data-bs-theme="root" class="dropdown-menu" aria-labelledby="dropdownMenuButtonRoot">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{{< /example >}}

## How it works

- As shown above, color mode styles are controlled by the `data-bs-theme` attribute. This attribute can be applied to the `<html>` element (using `light` or `dark`), or to any other element or OUDS Web component. If applied to the `<html>` element, it will apply to everything. If applied to a component or element, it will be scoped to that specific component or element.

- `root` and `root-inverted` are some automated modes compared to the root mode.

- For each color mode you wish to support, you'll need to add new overrides for the shared global CSS variables. We do this already in our `_root.scss` stylesheet for dark mode, with light mode being the default values. In writing color mode specific styles, use the mixin:

  ```scss
  // Color mode variables in _root.scss
  @include color-mode(dark) {
    // CSS variable overrides here...
  }
  ```

- We use a custom `_variables-dark.scss` to power those shared global CSS variable overrides for dark mode. This file isn't required for your own custom color modes, but it's required for our dark mode for two reasons. First, it's better to have a single place to reset global colors. Second, some Sass variables had to be overridden for background images embedded in our CSS for accordions, form components, and more.

## Usage

### Enable dark mode

Enable the built in dark color mode across your entire project by adding the `data-bs-theme="dark"` attribute to the `<html>` element. This will apply the dark color mode to all components and elements, other than those with a specific `data-bs-theme` attribute applied. Building on the [quick start template]({{< docsref "/getting-started/introduction#quick-start" >}}):

```html
<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>OUDS Web demo</title>
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
  </body>
</html>
```

OUDS Web do ship with a built-in color mode picker, you can use the one from our own documentation<!-- if you like in our [Orange navbar section]({{< docsref "/components/orange-navbar#with-mode-selector" >}})-->. [Learn more in the JavaScript section.](#javascript)

### Building with Sass

Our dark mode option is available to use for all users of OUDS Web, but it's controlled via data attributes instead of media queries and does not automatically toggle your project's color mode. You can disable our dark mode entirely via Sass by changing `$enable-dark-mode` to `false`.

<!-- {{< callout warning >}}
Please be aware that some of OUDS Web's components always use the contextual dark mode to have the same rendering both in light and dark mode, such as our [Orange navbar]({{< docsref "/components/orange-navbar" >}}) and [Footer]({{< docsref "/components/footer" >}}). Please respect this constraint.

If you need to use them, you won't be able to disable the dark mode globally.
{{< /callout >}} -->

#### Change default behavior

We use a custom Sass mixin, `color-mode()`, to help you control _how_ color modes are applied. By default, we use a `data` attribute approach, allowing you to create more user-friendly experiences where your visitors can choose to have an automatic dark mode or control their preference (like in our own docs here). This is also an easy and scalable way to add different themes and more custom color modes beyond light and dark.

In case you want to use media queries and only make color modes automatic, you can change the mixin's default type via Sass variable. Consider the following snippet and its compiled CSS output.

```scss
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-color-content-on-status-muted);
    background-color: var(--bs-color-surface-status-info-muted);
  }
}
```

Outputs to:

```css
[data-bs-theme=dark] .element {
  color: var(--bs-color-content-on-status-muted);
  background-color: var(--bs-color-surface-status-info-muted);
}
```

And when setting to `media-query`:

```scss
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-color-content-on-status-muted);
    background-color: var(--bs-color-surface-status-info-muted);
  }
}
```

Outputs to:

```css
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-color-content-on-status-muted);
    background-color: var(--bs-color-surface-status-info-muted);
  }
}
```

#### Change the root selector

You can also change the root selector from where the theme variables are set. By default, it's set to `:root`, but you can change it to any other selector. This is useful if you want to apply the theme to another element, for instance in Angular where you can't access easily the `<html>` element.

```scss
$ouds-root-selector: "#app";

@include "@ouds/web";
```

Outputs to:

```css
#app,
[data-bs-theme="light"],
#app[data-bs-theme="light"] [data-bs-theme="root"],
#app[data-bs-theme="dark"] [data-bs-theme="root-inverted"] {
  /* Your light mode variables definition */
}

[data-bs-theme="dark"],
#app[data-bs-theme="dark"] [data-bs-theme="root"],
#app[data-bs-theme="light"] [data-bs-theme="root-inverted"] {
  /* Your dark mode variables definition */
}

/* Further OUDS Web CSS */
```

<!-- OUDS mod: moved in `custom-libraries.md` the title ## Custom color modes -->

## JavaScript

To allow visitors or users to toggle color modes, you'll need to create a toggle element to control the `data-bs-theme` attribute on the root element, `<html>`. We've built a toggler in our documentation that initially defers to a user's current system color mode, but provides an option to override that and pick a specific color mode.

<!-- {{< callout info >}}
Check out our [Orange navbar mode selector variant]({{< docsref "/components/orange-navbar#with-mode-selector" >}}) to add a color mode selector to your navbar.
{{< /callout >}} -->

Here's a look at the JavaScript that powers it. Feel free to inspect our own documentation navbar to see how it's implemented using HTML and CSS from our own components. It is suggested to include the JavaScript at the top of your page to reduce potential screen flickering during reloading of your site. Note that if you decide to use media queries for your color modes, your JavaScript may need to be modified or removed if you prefer an implicit control.

{{< example lang="js" show_preview="false" >}}
{{< js.inline >}}
{{- readFile (path.Join "site/static/docs" .Site.Params.docs_version "assets/js/color-modes.js") -}}
{{< /js.inline >}}
{{< /example >}}

<!-- ## Adding theme colors -->

## CSS

### Sass tokens

#### Raw tokens

Colors raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-color" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Color semantic tokens as Sass variables. **Should not be used as-is**. Prefer use our [CSS semantic tokens](#css-semantic-tokens).

{{< scss-docs name="ouds-semantic-color" file="scss/tokens/_semantic.scss" >}}

### Variables

We have our OUDS semantic CSS variables, which transform over light and dark modes. These are the variables you'll use in your own custom CSS to style components and elements.

{{< scss-docs name="ouds-all-semantic-css-color" file="scss/tokens/_semantic-colors-custom-props.scss" >}}

{{< bootstrap-compatibility false >}}

Dozens of root level CSS variables are repeated as overrides for dark mode. These are scoped to the color mode selector, which defaults to `data-bs-theme` but [can be configured](#building-with-sass) to use a `prefers-color-scheme` media query. Use these variables as a guideline for generating your own new color modes.

{{< scss-docs name="root-dark-mode-vars" file="scss/_root.scss" >}}

{{< /bootstrap-compatibility >}}

### Sass variables

{{< bootstrap-compatibility false >}}

CSS variables for our dark color mode are partially generated from dark mode specific Sass variables in `_variables-dark.scss`. This also includes some custom overrides for changing the colors of embedded SVGs used throughout our components.

{{< scss-docs name="sass-dark-mode-vars" file="scss/_variables-dark.scss" >}}

{{< /bootstrap-compatibility >}}

### Sass mixins

Styles for dark mode, and any custom color modes you create, can be scoped appropriately to the `data-bs-theme` attribute selector or media query with the customizable `color-mode()` mixin. See the [Sass usage section](#building-with-sass) for more details.

{{< scss-docs name="color-mode-mixin" file="scss/mixins/_color-mode.scss" >}}
