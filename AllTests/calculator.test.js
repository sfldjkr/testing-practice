const calculator = require("../src/calculator");

// Addition test
test("1 + 1 gets 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

// minus test
test("1 - 1 gets false", () => {
  expect(calculator.minus(1, 1)).toBeFalsy();
});

test("10 - 5 gets 5", () => {
  expect(calculator.minus(10, 5)).toBe(5);
});

// divide test
test("10 / 2 gets 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("5 / 2 gets 2.5", () => {
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
});

// multiply test
test("10 x 2 gets 20", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("1 x 1 gets 1", () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});
