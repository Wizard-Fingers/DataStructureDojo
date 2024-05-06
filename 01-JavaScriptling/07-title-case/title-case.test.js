const titleCase = require("./title-case");

// test case 1
test("title case a lowercase string", () => {
  const result = titleCase("hello world");
  expect(result).toBe("Hello World");
});

// test case 2
test("title case a string with mixed casing and punctuation", () => {
  const result = titleCase("hElLo wOrld!");
  expect(result).toBe("Hello World!");
});

// test case 3
test("title case an uppercase string", () => {
  const result = titleCase("HELLO WORLD");
  expect(result).toBe("Hello World");
});

// test case 4
test("title case a string with multiple spaces", () => {
  const result = titleCase(" hello world ");
  expect(result).toBe(" Hello World ");
});

// test case 5
test("title case an empty string", () => {
  const result = titleCase("");
  expect(result).toBe("");
});
