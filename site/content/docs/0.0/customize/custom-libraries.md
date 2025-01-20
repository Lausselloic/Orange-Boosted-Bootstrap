---
layout: docs
title: Custom libraries
description: Learn how to customize your library for your country/B-brand following the guide.
group: customize
aliases:
  - "/docs/customize/custom-libraries/"
toc: true
---

{{< callout danger >}}
**This content is not intended for standalone projects.** It is specifically for those looking to customize the entire library to fit a completely different design or brand.
{{< /callout >}}

## Tokens architecture

OUDS Web is built on the basis of design tokens that capture all the design decisions utilized within our design system. They ensure the consistency of components between them and facilitate the configuration of the library.

### Raw tokens

The [`scss/tokens/_raw.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/tokens/_raw.scss) file consolidates all basic tokens. While these tokens don't carry semantic meaning and aren't meant to be used directly in projects, they form the foundation of the Orange Unified Design System. Their primary purpose is to be utilized by semantic tokens, and occasionally, by component tokens.

### Semantic tokens

The [`scss/tokens/_semantic.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/tokens/_semantic.scss) file contains all the semantic tokens. Unlike raw tokens, these are intended to be used directly in projects (Be careful of the color ones, and prefer using [our color custom properties](#semantic-colors-custom-properties-tokens)). They are built on raw tokens, assigning them semantic meaning through media queries or specific contexts. Most of these tokens are ready to be applied either in utilities or directly within components. The names of these tokens are not intended to be modified for a custom library, only the link between a token and its value defined by a raw token.

Some semantic tokens are grouped into maps to simplify their transformation into helpers or utilities via the utilities API. These maps are defined in the [`scss/_maps.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/_maps.scss) file.

### Semantic colors custom properties tokens

The [`scss/tokens/_semantic-colors-custom-props.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/tokens/_semantic-colors-custom-props.scss) file contains all the usable semantic color tokens. Unlike basic semantic color tokens, these are intended to be used directly in projects. They are built on semantic tokens, assigning them mode theming through media queries or specific contexts. Most of these tokens are ready to be applied either in utilities or directly within components. The names of these tokens are not intended to be modified for a custom library, only the link between a semantic token and its value defined by a raw token can.

Some semantic color tokens are grouped into maps to simplify their transformation into helpers or utilities via the utilities API. These maps are defined in the [`scss/_maps.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/_maps.scss) file.

### Composite tokens

The [`scss/tokens/_composite.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/tokens/_composite.scss) file contains all the composite tokens. Unlike raw tokens, these are intended to be used directly in projects. They are built (manually until now) on top of semantic tokens, they usually are an aggregation of several semantic tokens. These tokens are ready to be applied either in utilities or directly within components. The names of these tokens are not intended to be modified for a custom library, only the link between a token and its value defined by a raw or a semantic token.

Some composite tokens are grouped into maps to simplify their transformation into helpers or utilities via the utilities API. These maps are defined in the [`scss/_maps.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/_maps.scss) file.

### Component tokens

The [`scss/tokens/_component.scss`]({{< param repo >}}/blob/v{{< param current_version >}}-ouds-web/scss/tokens/_component.scss) file is dedicated to component tokens. These tokens could be used in projects, but exclusively within components, often relying on semantic tokens, though they may occasionally reference raw tokens. Essentially, they map the semantic tokens to components.

## Customization

### Modifying the tokens

#### Having a designer

If you have a designer (which is highly recommended when creating a new brand), implementing changes should be straightforward. You'll need to replace our token files with those provided by your designer, manually substituting and remapping tokens to match your brand’s specifications.

For a practical example of how this process works and what your customized library should look like after the changes, refer to [our example on Stackblitz](https://stackblitz.com/edit/github-j5teen).

#### Having no designer

In the absence of a designer, it’s advisable to reach out to the [OUDS Web core team]({{< docsref "/about/team" >}}) for support.

### Building and deploying documentation

You are responsible for building and deploying your documentation. You can start with our existing documentation, modifying or removing sections as needed to fit your new design. Alternatively, you may choose to build your documentation from scratch using any preferred framework.

<!-- ### Custom color modes

While the primary use case for [color modes]({{< docsref "/customize/color-modes" >}}) is light and dark mode, custom color modes are also possible. Create your own `data-bs-theme` selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed. We opted to create a separate `_variables-dark.scss` stylesheet to house Boosted's dark mode specific Sass variables, but that's not required for you.

For example, you can create a "blue theme" with the selector `data-bs-theme="blue"`. In your custom Sass or CSS file, add the new selector and override any global or component CSS variables as needed. If you're using Sass, you can also use Sass's functions within your CSS variable overrides.

{< scss-docs name="custom-color-mode" file="site/assets/scss/_content.scss" >}}

<div class="bd-example bg-body" data-bs-theme="blue">
  <div class="h4">Example blue theme</div>
  <p>Some paragraph text to show how the blue theme might look with written copy.</p>

  <hr class="my-4">

  <div class="dropdown">
    <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButtonCustom" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCustom">
      <li><a class="dropdown-item active" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="bg-body" data-bs-theme="blue">
  ...
</div>
``` -->
