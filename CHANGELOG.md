
#### 1.1.2

> 137 Bytes.

- Converted primary assertion function to a lambda (arrow) function.

`a=(x,m)=>{if(!x)throw Error(m||"AssertionError")};module.exports={equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)},truthy(t,m){a(t,m)}}`

#### 1.1.1

> 142 Bytes.

- Removed unnecessary boolean conversion.

`function a(x,m){if(!x)throw Error(m||"AssertionError")}module.exports={equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)},truthy(t,m){a(t,m)}}`

#### 1.1.0

> 144 Bytes.

- Removed redundant `assert` API function.

`function a(x,m){if(!x)throw Error(m||"AssertionError")}module.exports={equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)},truthy(t,m){a(!!t,m)}}`


#### 1.0.1

> 153 Bytes.

- Removed `new` keyword when instantiating a new `Error`; apparently
  `throw Error()` and `throw new Error()` are the same.

`function a(x,m){if(!x)throw Error(m||"AssertionError")}module.exports={equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)},truthy(t,m){a(!!t,m)},assert:a}`

One way the library could certainly be shrinked in size, is by renaming the API
functions to something shorter (for example, rename `notEqual()` to `neq()`, or
just `n()`). However, I want to stay away from doing this as it would impair the
readability of any tests that use the library (compare `assert.notEqual(a, b)`
with `assert.n(a, b)`, for example).

#### 1.0.0

> 157 Bytes.

`function a(x,m){if(!x)throw new Error(m||"AssertionError")}module.exports={equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)},truthy(t,m){a(!!t,m)},assert:a}`
