const QUnit = require("qunit");
const assert = QUnit.assert;
const Developer = require("../lib/developer.js");

QUnit.test("test example", function (assert) {
  assert.ok(1 === 1, "one is equal to one");
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

  QUnit.test("code - nodejs", (assert) => {
    const developer = new Developer("Nicole", "nodejs");
    assert.equal(
      developer.code(),
      'console.log("Hello, Nicole!")',
      "should return nodejs code"
    );
  });
  
  QUnit.test("code - java", (assert) => {
    const developer = new Developer("Nicole", "java");
    assert.equal(
      developer.code(),
      'System.out.println("Hello, Nicole!")',
      "should return java code"
    );
  });
  
  QUnit.test("code - python", (assert) => {
    const developer = new Developer("Nicole", "python");
    assert.equal(
      developer.code(),
      'print("Hello, Nicole!")',
      "should return python code"
    );
  });
  
  QUnit.test("code - unsupported language", (assert) => {
    const developer = new Developer("Nicole", "javascript");
    assert.throws(
      () => developer.code(),
      /Unsupported language: javascript/,
      "should throw an error for unsupported language"
    );
  });
  
});
