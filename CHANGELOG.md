
#### 1.4.0

> 114 Bytes.

- Default export is no longer callable; use the `is()` function instead.

`a=(module.exports={is(x,m="AssertionError"){if(!x)throw Error(m)},eq(x,y,m){a(x==y,m)},neq(x,y,m){a(x!=y,m)}}).is;`

#### 1.3.0

> 123 Bytes.

- Renamed functions to short but recognisable names.

`a=Object.assign(module.exports=(x,m="AssertionError")=>{if(!x)throw Error(m)},{eq(x,y,m){a(x==y,m)},neq(x,y,m){a(x!=y,m)}})`

I know I said I wouldn't change the function names, but I now decided on names
that are still easily recognisable.

#### 1.2.3

> 131 Bytes.

- Default `m` parameter value, rather than chacking in the function.

`a=Object.assign(module.exports=(x,m="AssertionError")=>{if(!x)throw Error(m)},{equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)}})`

#### 1.2.2

Minor project refactoring.

#### 1.2.1

> 132 Bytes.

- Assign directly to `module.exports`.

`a=Object.assign(module.exports=(x,m)=>{if(!x)throw Error(m||"AssertionError")},{equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)}})`

#### 1.2.0

> 134 Bytes.

- Default invocation will act as `truthy` function.

`a=(x,m)=>{if(!x)throw Error(m||"AssertionError")};module.exports=Object.assign(a,{equal(x,y,m){a(x==y,m)},notEqual(x,y,m){a(x!=y,m)}})`

Now, instead of using `picoassert.truthy(x)`, you use `picoassert(x)`. It will
yield the same result.

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
