# picoassert

> Perhaps the smallest Javascript assertion module

`picoassert` is a 157-byte Javascript assertion module. It is based on 
[nanoassert](https://github.com/emilbayes/nanoassert).

## Usage

```js
var assert = require("picoassert")

assert.equal(a, b, `${a} == ${b}`);
assert.notEqual(a, b, `${a} != ${b}`);
assert.truthy(a, `!!${a} === true`);
```

## Why

The `nanoassert` repository `README` describes the author's complaint about the
excessive size of the [`assert`](https://www.npmjs.com/package/assert) module,
the standard assertion library. However, even the `nanoassert` library was
unnecessarily large, which led to the creation of `picoassert`.

## Install

```sh
npm install picoassert
```

## License

Please see the `LICENSE` file for license information.
