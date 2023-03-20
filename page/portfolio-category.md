---
pagination:
  data: collections.portfolioCategories
  size: 1
  alias: category
  addAllPagesToCollections: true
layout: portfolios-categories.njk
permalink: "portofolio/kategori/{{ category | slugify }}/index.html"
eleventyExcludeFromCollections: true
eleventyComputed:
  title: "{{ category }}"
---
