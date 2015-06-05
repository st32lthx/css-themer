# PostCSS Themer [![Build Status][ci-img]][ci]

[PostCSS] plugin themer reads through the css file and spits out theme files by swaping colors and fonts.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/aminmeyghani/css-themer.svg
[ci]:      https://travis-ci.org/aminmeyghani/css-themer

```css
.foo {
	color: amin;
}
```

```css
.foo {
  color: #000;
}
```

## Usage

```js
postcss([ require('postcss-themer') ])
```

See [PostCSS] docs for examples for your environment.
