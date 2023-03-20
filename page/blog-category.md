---
pagination:
  data: collections.postCategories
  size: 1
  alias: category
  addAllPagesToCollections: true
layout: posts-categories.njk
permalink: "blog/kategori/{{ category | slugify }}/index.html"
eleventyExcludeFromCollections: true
eleventyComputed:
  title: "{{ category }}"
---
