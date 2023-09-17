const capitalize = require("../src/capitalize");

// capitalize test

test("safal truns to Safal", () => {
  expect(capitalize("safal")).toBe("Safal");
});

test("leo turns to Leo", () => {
  expect(capitalize("leo")).toBe("Leo");
});

test("hello world turns to Hello world", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
