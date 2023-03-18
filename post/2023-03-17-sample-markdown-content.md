---
title: "Sample markdown content"
date: 2023-03-17
thumbnail: "/uploads/sample-thumb-red-500.png"
excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi fugit obcaecati temporibus magnam voluptas dicta aliquam, quos ipsum blanditiis nobis vitae sunt veritatis corporis odit voluptatum dolorem dolore saepe."
# eleventyExcludeFromCollections: true
---
Sample markdown content

## Heading

# h1 Heading 😎
lorem ipsum content
## h2 Heading `*`
lorem ipsum content
### h3 Heading `*`
lorem ipsum content
#### h4 Heading `*`
lorem ipsum content
##### h5 Heading
lorem ipsum content
###### h6 Heading
lorem ipsum content


## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
  
  lkorem
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

<div class="no-prose flex">

![Minion](/uploads/sample-image-minion.png)

![Stormtroopocat](/uploads/sample-image-stormtroopocat.jpg "The Stormtroopocat")

</div>