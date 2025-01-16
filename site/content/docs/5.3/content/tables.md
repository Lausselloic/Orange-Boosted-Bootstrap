---
layout: docs
title: Tables
description: Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Boosted.
group: content
aliases:
  - "/docs/content/tables/"
toc: true
---

## Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, Boosted's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Boosted, meaning any nested tables can be styled independent from the parent.

Using the most basic table markup, here's how `.table`-based tables look in Boosted.

{{< design-callout-alert info >}}
In order to get the row height recommended by Orange Design System, please use the `.table-sm` class in addition to `.table`.
You can refer to the [small tables paragraph]({{< docsref "/content/tables#small-tables" >}}).
{{< /design-callout-alert >}}

{{< table class="table" simplified="false" caption="Boosted tables basic look" >}}

## Accessibility

To make a table accessible, you should respect these three main rules:

- If the table is an important one, add a `role="region"` attribute to help screen readers.
- add a `scope="col"` or `scope="row"` attribute to the tags when needed to make the content of table readable by screen readers.
- add a `<caption>` on each table. If the table doesn't have a caption or if the caption is not enough informative to describe the table, add an `aria-label` attribute to describe the table content. The `aria-label` should match the following pattern: `aria-label="Description of table data - Description of table metadata (e.g.: table with one level of column header)"`. The metadata is mandatory for complex tables.

See [more information about the tables structures](https://a11y-guidelines.orange.com/en/web/develop/textual-content/#structuring-data-tables).

## Variants

{{< callout warning >}}
Boosted doesn't provide any colored variant.

Darker tables are allowed contextually. Add `data-bs-theme="dark"` to the `.table` or any ancestor element to enable a component-specific color mode. [Learn more about our color modes]({{< docsref "/customize/color-modes" >}}).
{{< /callout >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.
{{< /design-callout-alert >}}

Use contextual classes to color tables, table rows or individual cells.

{{< callout info >}}
**Heads up!** Because of the more complicated CSS used to generate our table variants, they most likely won't see color mode adaptive styling until v6.
{{< /callout >}}

<div class="bd-example">
  <table class="table">
    <caption class="visually-hidden">Boosted table variants</caption>
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      {{< table.inline >}}
      {{- range (index $.Site.Data "theme-colors") }}
        <tr class="table-{{ .name }}">
          <th scope="row">{{ .name | title }}</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      {{- end -}}
      {{< /table.inline >}}
    </tbody>
  </table>
</div>

{{< highlight html >}}
<!-- On tables -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<table class="table-{{ .name }}">...</table>
{{- end -}}
{{< /table.inline >}}

<!-- On rows -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<tr class="table-{{ .name }}">...</tr>
{{- end -}}
{{< /table.inline >}}

<!-- On cells (`td` or `th`) -->
<tr>{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <td class="table-{{ .name }}">...</td>
{{- end -}}
{{< /table.inline >}}
</tr>
{{< /highlight >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}
</details>

## Accented tables

{{< design-callout-alert info >}}
It is possible to use striped rows **or** striped columns in your tables, but you **can't use both in a same table**.
{{< /design-callout-alert >}}

### Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{{< table class="table table-striped" caption="Boosted striped rows table" >}}

### Striped columns

Use .table-striped-columns to add zebra-striping to any table column.

{{< table class="table table-striped-columns" caption="Boosted striped columns table" >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.

If you want dark tables, please consider using [contextual dark mode]({{< docsref "/customize/color-modes/#contextual-dark-mode-vs-dark-variants" >}}).
{{< /design-callout-alert >}}

{{< table class="table table-dark table-striped" caption="Boosted dark striped rows table" >}}

{{< table class="table table-dark table-striped-columns" caption="Boosted dark striped columns table" >}}

{{< table class="table table-success table-striped" caption="Boosted success striped rows table" >}}

{{< table class="table table-success table-striped-columns" caption="Boosted success striped columns table" >}}
</details>

### Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{{< table class="table table-hover" caption="Boosted hoverable table" >}}

<details class="mb-3">
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.

If you want dark tables, please consider using [contextual dark mode]({{< docsref "/customize/color-modes/#contextual-dark-mode-vs-dark-variants" >}}).
{{< /design-callout-alert >}}

{{< table class="table table-dark table-hover" caption="Boosted hoverable dark table" >}}
</details>

These hoverable rows can also be combined with the striped rows variant:

{{< table class="table table-striped table-hover" caption="Boosted hoverable striped table" >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.

If you want dark tables, please consider using [contextual dark mode]({{< docsref "/customize/color-modes/#contextual-dark-mode-vs-dark-variants" >}}).
{{< /design-callout-alert >}}

{{< table class="table table-dark table-striped table-hover" caption="Boosted hoverable dark striped table" >}}
</details>

### Active tables

Highlight a table row or cell by adding a `.table-active` class.

<div class="bd-example">
  <table class="table">
    <caption class="visually-hidden">Boosted table with an active row and cell</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  ...
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.

If you want dark tables, please consider using [contextual dark mode]({{< docsref "/customize/color-modes/#contextual-dark-mode-vs-dark-variants" >}}).
{{< /design-callout-alert >}}

<div class="bd-example">
  <table class="table table-dark">
    <caption class="visually-hidden">Boosted dark table with an active row and cell</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-dark">
  ...
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```
</details>

## How do the variants and accented tables work?

For the accented tables ([striped rows](#striped-rows), [striped columns](#striped-columns), [hoverable rows](#hoverable-rows) and [active tables](#active-tables)), we used some techniques to make these effects work for all our [table variants](#variants):

- We start by setting the background of a table cell with the `--bs-table-bg` custom property. All table variants then set that custom property to colorize the table cells. This way, we don't get into trouble if semi-transparent colors are used as table backgrounds.
- Then we add an inset box shadow on the table cells with `box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));` to layer on top of any specified `background-color`. It uses custom cascade to override the `box-shadow`, regardless the CSS specificity. Because we use a huge spread and no blur, the color will be monotone. Since `--bs-table-accent-bg` is set to `transparent` by default, we don't have a default box shadow.
- When either `.table-striped`, `.table-striped-columns`, `.table-hover` or `.table-active` classes are added, either `--bs-table-bg-type` or `--bs-table-bg-state` (by default set to `initial`) are set to a semitransparent color (`--bs-table-striped-bg`, `--bs-table-active-bg` or `--bs-table-hover-bg`) to colorize the background and override default `--bs-table-accent-bg`.
- For each table variant, we generate a `--bs-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-dark` has a lighter accent color.
- Text and border colors are generated the same way, and their colors are inherited by default.

Behind the scenes it looks like this:

{{< scss-docs name="table-variant" file="scss/mixins/_table-variants.scss" >}}

<!-- Boosted mod : No table borders -->

## Small tables

Add `.table-sm` to make any `.table` more compact by cutting all cell `padding` in half.

{{< design-callout-alert info >}}
To display basic tables, Orange Design System recommends using these compact tables.
{{< /design-callout-alert >}}

{{< table class="table table-sm" caption="Boosted small table" >}}

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
These colored tables should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}) specifications as they are inherited from Bootstrap.

If you want dark tables, please consider using [contextual dark mode]({{< docsref "/customize/color-modes/#contextual-dark-mode-vs-dark-variants" >}}).
{{< /design-callout-alert >}}

{{< table class="table table-dark table-sm" caption="Boosted dark small table" >}}
</details>

## Table group dividers

Add a thicker border, darker between table groups—`<thead>`, `<tbody>`, and `<tfoot>`—with `.table-group-divider`. Customize the color by changing the `border-top-color` (which we don't currently provide a utility class for at this time).

{{< example >}}
<table class="table">
  <caption class="visually-hidden">Boosted group divided table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Vertical alignment

Table cells of `<thead>` are always vertical aligned to the bottom. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the top by default. Use the [vertical align]({{< docsref "/utilities/vertical-align" >}}) classes to re-align where needed.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <caption class="visually-hidden">Boosted vertical alignment changed table</caption>
      <thead>
        <tr>
          <th scope="col" class="w-25">Heading 1</th>
          <th scope="col" class="w-25">Heading 2</th>
          <th scope="col" class="w-25">Heading 3</th>
          <th scope="col" class="w-25">Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr class="align-bottom">
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table align-middle">
    ...
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications. It is not recommended for usability reasons.
{{< /design-callout-alert >}}

<div class="bd-example">
  <table class="table table-striped table-bordered">
    <caption class="visually-hidden">Boosted table with a nested table inside - table with one level of row and column header</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td colspan="4">
          <table class="table mb-0">
          <caption class="visually-hidden">Boosted nested table</caption>
            <thead>
              <tr>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">A</th>
                <td>First</td>
                <td>Last</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>First</td>
                <td>Last</td>
              </tr>
              <tr>
                <th scope="row">C</th>
                <td>First</td>
                <td>Last</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-striped table-bordered">
  ...
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
```
</details>

## How nesting works

To prevent _any_ styles from leaking to nested tables, we use the child combinator (`>`) selector in our CSS. Since we need to target all the `td`s and `th`s in the `thead`, `tbody`, and `tfoot`, our selector would look pretty long without it. As such, we use the rather odd looking `.table > :not(caption) > * > *` selector to target all `td`s and `th`s of the `.table`, but none of any potential nested tables.

Note that if you add `<tr>`s as direct children of a table, those `<tr>` will be wrapped in a `<tbody>` by default, thus making our selectors work as intended.

## Anatomy

<!-- Boosted mod : no table head or table foot -->

### Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

<div class="bd-example">
  <table class="table">
    <caption>List of users</caption>
    {{< partial "table-content" >}}
  </table>
</div>

```html
<table class="table table-sm">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

<!-- Boosted mod: default caption-side is top -->
You can also put the `<caption>` on the bottom of the table with `.caption-bottom`.

<div class="bd-example">
  <table class="table caption-bottom">
    <caption>List of users</caption>
    {{< partial "table-content" >}}
  </table>
</div>

```html
<table class="table caption-bottom">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl|-xxl}`.

{{< callout warning >}}
##### Vertical clipping/truncation

Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{{< /callout >}}

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <caption class="visually-hidden">Boosted responsive table</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl|-xxl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**

{{< tables.inline >}}
{{ range $.Site.Data.breakpoints }}
{{ if not (eq . "xs") }}
<div class="bd-example">
  <div class="table-responsive{{ .abbr }}">
    <table class="table">
    <caption class="visually-hidden">Boosted responsive table for {{ .abbr }} breakpoint and under</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}

{{< highlight html >}}
{{< tables.inline >}}
{{- range $.Site.Data.breakpoints -}}
{{- if not (eq . "xs") }}
<div class="table-responsive{{ .abbr }}">
  <table class="table">
    ...
  </table>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}
{{< /highlight >}}

## Rich content tables

### Row selection
Add a [`.form-check` div]({{< docsref "/forms/checks-radios#checks" >}}) within `<th>` and `<td>` to display checkboxes and use the `checked` attribute, and use `.has-checkbox` on the table to get correct spacing on the first column.

{{< callout info >}}
#### Selection feature

The selection behavior isn't implemented yet. This feature will be delivered with [#410]({{< param repo >}}/issues/410) as an example.
{{< /callout >}}

<div class="bd-example">
  <div class="table-responsive">
    <table class="table table-sm table-hover has-checkbox">
      <caption class="visually-hidden">Boosted table with a selection feature</caption>
      <thead>
        <tr>
          <th scope="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck">
              <label class="form-check-label" for="customCheck">
                <span class="visually-hidden">Select all</span>
              </label>
            </div>
          </th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck1">
              <label class="form-check-label" for="customCheck1">
                  <span class="visually-hidden">Select first row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck2">
              <label class="form-check-label" for="customCheck2">
                  <span class="visually-hidden">Select second row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr class="table-active">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck3" checked>
              <label class="form-check-label" for="customCheck3">
                  <span class="visually-hidden">Select third row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr class="table-active">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck4" checked>
              <label class="form-check-label" for="customCheck4">
                  <span class="visually-hidden">Select fourth row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck5">
              <label class="form-check-label" for="customCheck5">
                  <span class="visually-hidden">Select fifth row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck6">
              <label class="form-check-label" for="customCheck6">
                  <span class="visually-hidden">Select sixth row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck7">
              <label class="form-check-label" for="customCheck7">
                  <span class="visually-hidden">Select seventh row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck8">
              <label class="form-check-label" for="customCheck8">
                  <span class="visually-hidden">Select eighth row</span>
              </label>
            </div>
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table table-sm table-hover has-checkbox">
    ...
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="customCheck">
            <label class="form-check-label" for="customCheck">
              <span class="visually-hidden">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="customCheck1">
            <label class="form-check-label" for="customCheck1">
                <span class="visually-hidden">Select first row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>...</tr>
      <tr class="table-active">
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="customCheck3" checked>
            <label class="form-check-label" for="customCheck3">
                <span class="visually-hidden">Select third row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">...</tr>
      <tr>...</tr>
      <tr>...</tr>
      <tr>...</tr>
      <tr>...</tr>
    </tbody>
  </table>
</div>
```

### With icons or thumbnails

Use SVG or PNG to display icons or thumbnails in your compact table data cell elements (`40px` row height). It will automatically add negative margin to ensure vertical alignment (for icons or thumbnails smaller than `2.5rem`).

<div class="bd-example">
  <div class="table-responsive">
    <table class="table table-sm table-hover align-middle has-checkbox">
      <caption class="visually-hidden">Boosted table with icons in a row</caption>
      <thead>
        <tr>
          <th scope="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck9">
              <label class="form-check-label" for="customCheck9">
                <span class="visually-hidden">Select all</span>
              </label>
            </div>
          </th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck10">
              <label class="form-check-label" for="customCheck10">
                <span class="visually-hidden">Select first row</span>
              </label>
            </div>
          </td>
          <td>
            <img src="/docs/{{< param docs_version >}}/assets/img/thumbnail.png" alt="Thumbnail" width="30" height="30" class="me-2">
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck11">
              <label class="form-check-label" for="customCheck11">
                <span class="visually-hidden">Select second row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr class="table-active">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck12" checked>
              <label class="form-check-label" for="customCheck12">
                <span class="visually-hidden">Select third row</span>
              </label>
            </div>
          </td>
          <td>
            <img src="/docs/{{< param docs_version >}}/assets/img/thumbnail.png" alt="Thumbnail" width="30" height="30" class="me-2">
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr class="table-active">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck13" checked>
              <label class="form-check-label" for="customCheck13">
                <span class="visually-hidden">Select fourth row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck14">
              <label class="form-check-label" for="customCheck14">
                <span class="visually-hidden">Select fifth row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck15">
              <label class="form-check-label" for="customCheck15">
                <span class="visually-hidden">Select sixth row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck16">
              <label class="form-check-label" for="customCheck16">
                <span class="visually-hidden">Select seventh row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
        <tr>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="customCheck17">
              <label class="form-check-label" for="customCheck17">
                <span class="visually-hidden">Select eighth row</span>
              </label>
            </div>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
            </svg>
            <span class="visually-hidden">Document</span>
            Cell text
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table table-sm table-hover align-middle has-checkbox">
    ...
    <td>
      <img src="/docs/{{< param docs_version >}}/assets/img/thumbnail.png" alt="Thumbnail" width="30" height="30" class="me-2">
      Cell text
    </td>
    ...
    <td>
      <svg width="1.875rem" height="1.875rem" class="me-2" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#file-document"></use>
      </svg>
      <span class="visually-hidden">Document</span>
      Cell text
    </td>
    ...
  </table>
</div>
```

Use SVG or PNG to display icons or thumbnails in your table data cell elements (`50px` row height). It will automatically add negative margin to ensure vertical alignment (for icons or thumbnails smaller than `2.5rem`).

<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <caption class="visually-hidden">Boosted table with icons inside a row</caption>
      <thead>
        <tr>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
          <th scope="col">Column header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td></td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td></td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td></td>
          <td></td>
          <td>
           <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
        <tr>
          <th scope="row" class="fw-normal">Cell text</th>
          <td></td>
          <td></td>
          <td>
            <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
            </svg>
            <span class="visually-hidden">Yes</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table align-middle">
    ...
    <td>
      <svg width="1.875rem" height="1.875rem" aria-hidden="true" class="text-success">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
      </svg>
      <span class="visually-hidden">Yes</span>
    </td>
    ...
  </table>
</div>
```

## CSS

### Sass variables

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}

### Sass loops

{{< scss-docs name="table-loop" file="scss/_variables.scss" >}}

### Customizing

The factor variables (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) are used to determine the contrast in table variants.
<!-- Boosted mod: no table variant apart from dark and light -->
