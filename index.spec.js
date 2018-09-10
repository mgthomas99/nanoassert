var test = require("tape");
var assert = require("./");

test("picoassert.equal()", function (t) {
  try {
    assert.equal(true, true);
    t.pass("Does not throw on equal values.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});

test("picoassert.notEqual()", function (t) {
  try {
    assert.notEqual(true, false);
    t.pass("Does not throw on unequal values.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});

test("picoassert()", function (t) {
  try {
    assert(true);
    t.pass("Does not throw on truthy value.");
  } catch (ex) {
    t.fail();
  }
  t.end();
});
