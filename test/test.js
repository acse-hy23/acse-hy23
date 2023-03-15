const QUnit = require("qunit");
const assert = QUnit.assert;
const Developer = require("../lib/developer.js");

QUnit.test("test example", function (assert) {
  assert.ok(1 !== 1, "one is equal to one");
});

QUnit.module("Developer", () => {
  QUnit.test("constructor", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    assert.ok(developer instanceof Developer, "should create a developer");
  });

  QUnit.test("getName", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    assert.equal(developer.getName(), "Nicole", "should get the name");
  });

  QUnit.test("setName", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    developer.setName("John");
    assert.equal(developer.getName(), "John", "should set the name");
  });

  QUnit.test("getLanguage", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    assert.equal(developer.getLanguage(), "nodejs", "should get the language");
  });

  QUnit.test("setLanguage", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    developer.setLanguage("javascript");
    assert.equal(
      developer.getLanguage(),
      "javascript",
      "should set the language"
    );
  });
});
