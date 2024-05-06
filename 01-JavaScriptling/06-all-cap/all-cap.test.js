const allCap = require("./all-cap");

// test case 1
test("converting a string to all caps", () => {
  const result = allCap("hello");
  expect(result).toBe("HELLO");
});

// test case 2
test("converting a string to all caps", () => {
  const result = allCap("hello world");
  expect(result).toBe("HELLO WORLD");
});

// test case 3
test("converting a string to all caps", () => {
  const result = allCap("hElLo wOrld!");
  expect(result).toBe("HELLO WORLD!");
});

// test case 4
test("converting a string to all caps", () => {
  const result = allCap("12345");
  expect(result).toBe("12345");
});
