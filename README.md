# picoassert

> Perhaps the smallest Javascript assertion module

`picoassert` is a 123-byte Javascript assertion module. It is based on 
[nanoassert](https://github.com/emilbayes/nanoassert).

## Usage

```js
var assert = require("picoassert")

assert.eq(a, b, `${a} == ${b}`);   // Asserts `a` and `b` are equal.
assert.neq(a, b, `${a} != ${b}`);  // Asserts `a` and `b` are not equal.
assert(a, `(!!${a}) === true`);    // Asserts `a` is truthy.
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

## License

Please see the `LICENSE` file for license information.
