[github-index-url]: https://github.com/mgthomas99/picoassert/blob/master/index.js
[github-license-url]: https://github.com/mgthomas99/picoassert/blob/master/LICENSE
[github-repository-url]: https://github.com/mgthomas99/picoassert
[github-license-shield-url]: https://img.shields.io/github/license/mgthomas99/picoassert.svg?style=flat-square
[github-size-shield-url]: https://img.shields.io/github/size/mgthomas99/picoassert/index.js.svg?style=flat-square
[npm-package-url]: https://www.npmjs.com/package/picoassert
[npm-downloads-shield-url]: https://img.shields.io/npm/dt/picoassert.svg?style=flat-square
[npm-version-shield-url]: https://img.shields.io/npm/v/picoassert.svg?style=flat-square

# picoassert

[![npm][npm-version-shield-url]][npm-package-url]
[![npm][npm-downloads-shield-url]][npm-package-url]
[![Github file size][github-size-shield-url]][github-index-url]
[![GitHub][github-license-shield-url]][github-license-url]

> Perhaps the smallest Javascript assertion module

`picoassert` is a 113-byte Javascript assertion module based on
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
<script type="application/javascript">var module={};</script>
<script src="https://unpkg.com/picoassert/index.js"></script>
<script type="application/javascript">
  var assert = module.exports;
  // Library is imported as `assert`!
</script>
```

Be aware that picoassert is a CommonJS module and therefore uses
`module.exports`; before importing the script, you will need to define `module`
or use a CommonJS-compatible module loader.

## License

Please see the `LICENSE` file for license information.
