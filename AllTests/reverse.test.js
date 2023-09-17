const reverse = require("../src/reverse");

// reverse test

test('1234 return "not a number"', () => {
  expect(reverse(1234)).toBe("Not A Number");
});

test('"1234" return 4321', () => {
  expect(reverse("1234")).toBe("4321");
});

test("'hello world' return 'dlrow olleh'", () => {
  expect(reverse("hello world")).toBe("dlrow olleh");
});

test(" 'safal' returns 'lafas' ", () => {
  expect(reverse("safal")).toBe("lafas");
});
