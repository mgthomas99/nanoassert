[github-repository-url]: https://github.com/mgthomas99/picoassert
[github-index-url]: https://github.com/mgthomas99/picoassert/blob/master/index.js
[github-size-shield-url]: https://img.shields.io/github/size/mgthomas99/picoassert/index.js.svg?style=flat-square
[npm-package-url]: https://www.npmjs.com/package/picoassert
[npm-downloads-shield-url]: https://img.shields.io/npm/dt/picoassert.svg?style=flat-square
[npm-version-shield-url]: https://img.shields.io/npm/v/picoassert.svg?style=flat-square

# picoassert

[![npm][npm-version-shield-url]][npm-url]
[![npm][npm-downloads-shield-url]][npm-url]
[![Github file size][github-size-shield-url]][github-index-url]

> Perhaps the smallest Javascript assertion module

`picoassert` is a 114-byte Javascript assertion module. It is based on
[nanoassert](https://github.com/emilbayes/nanoassert).

## Usage

```js
var assert = require("picoassert")

assert.eq(a, b, `${a} == ${b}`);   // Asserts `a` and `b` are equal.
assert.neq(a, b, `${a} != ${b}`);  // Asserts `a` and `b` are not equal.
assert.is(a, `(!!${a}) === true`); // Asserts `a` is truthy.
```

## Why

The `nanoassert` repository `README` describes the author's complaint about the
excessive size of the [`assert`](https://www.npmjs.com/package/assert) module,
the standard assertion library. However, even the `nanoassert` library was
unnecessarily large, which led to the creation of `picoassert`.

This library is also an open [golf](https://en.wikipedia.org/wiki/Code_golf)
challenge. Please feel free to submit pull requests if you're able to shorten
the code!

## Install

```sh
npm install picoassert
```

### Content Delivery Network (CDN)

The picoassert library can be imported via [unpkg](https://unpkg.com/) as shown
below:

```html
<script src="https://unpkg.com/picoassert/index.js"></script>
```

## License

Please see the `LICENSE` file for license information.
