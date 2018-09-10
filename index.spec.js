var test = require("tape");
var assert = require("./");

test("picoassert.eq()", function (t) {
  try {
    assert.eq(true, true);
    t.pass("Does not throw on equal values.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});

test("picoassert.neq()", function (t) {
  try {
    assert.neq(true, false);
    t.pass("Does not throw on unequal values.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});

test("picoassert()", function (t) {
  try {
    assert.is(true);
    t.pass("Does not throw on truthy value.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});
