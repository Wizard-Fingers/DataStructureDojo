const findMaxNum = require("./find-max-num");

// Test case 1
test("returns the largest number in the array", () => {
  expect(findMaxNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});

// Test case 2
test("returns the largest number in the array", () => {
  expect(findMaxNum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
});

// Test case 3
test("returns the largest number in the array", () => {
  expect(findMaxNum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000])).toBe(
    1000
  );
});

// Test case 4
test("returns the largest number in the array", () => {
  expect(findMaxNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});
