---
title: Versions
description: An appendix of hosted documentation for nearly every release of OUDS Web.
---

{{< list-versions.inline >}}
<div class="row">
  {{- range $release := sort (index $.Site.Data "docs-versions") "group" "desc" }}
  <div class="col-md-6 col-lg-4 col-xl mb-tallest">
    <h2>{{ $release.group }}</h2>
    <p>{{ $release.description }}</p>
    {{- $versions := sort $release.versions "" "desc" -}}
    {{- range $i, $version := $versions }}
      {{- $len := len $versions -}}
      {{ if (eq $i 0) }}<div class="list-group">{{ end }}
        <a class="list-group-item list-group-item-action py-short {{ if (eq $version $.Site.Params.docs_version) }} d-flex justify-content-between align-items-center{{ end }}" href="{{ urls.JoinPath $release.baseurl $version "/" }}">
          {{ $version }}
          {{ if (eq $version $.Site.Params.docs_version) -}}
          <span class="badge text-bg-brand-primary">Latest</span>
          {{- end }}
        </a>
      {{ if (eq (add $i 1) $len) }}</div>{{ end }}
    {{ end -}}
  </div>
  {{ end -}}
</div>
{{< /list-versions.inline >}}
