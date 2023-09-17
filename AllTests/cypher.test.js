let cypherFunc = require("../src/cypher");

test("any string with index 0 would return exact string", () => {
  expect(cypherFunc("abcde", 0)).toBe("abcde");
});

test("abcde with index 1 would return  bcdef", () => {
  expect(cypherFunc("abcde", 1)).toBe("bcdef");
});

test("AbcDe with 1 returns bcdef, handles upperCase", () => {
  expect(cypherFunc("AbcDe", 1)).toBe("bcdef");
});

test("abcde with index 1 would return  bcdef", () => {
  expect(cypherFunc("xyzabc", 10)).toBe("hijklm");
});

test("abcde with index 27 would return bcdef: index greater than 25 works", () => {
  expect(cypherFunc("abcde", 27)).toBe("bcdef");
});

test("abcde with index 62 would return klmno: index greater than 25 works", () => {
  expect(cypherFunc("abcde", 62)).toBe("klmno");
});

test("abcde with index 100 would return wxyza: index greater than 99 works", () => {
  expect(cypherFunc("abcde", 100)).toBe("wxyza");
});

test("abcde with negative index -1 would return zabcd", () => {
  expect(cypherFunc("abcde", -1)).toBe("zabcd");
});

test("abcde with negative index -10 would return qrstu", () => {
  expect(cypherFunc("abcde", -10)).toBe("qrstu");
});

test("abcde with 26 returns exact", () => {
  expect(cypherFunc("abcde", -26)).toBe("abcde");
});

test("abcde with index greater than 26 (30) returns wxyza", () => {
  expect(cypherFunc("abcde", -30)).toBe("wxyza");
});
