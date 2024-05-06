const killTheClones = require("./kill-the-clones");

// Test case 1
test("returns an array with no duplicates", () => {
  expect(killTheClones([1, 1, 2, 2, 3, 3, 4, 4])).toStrictEqual([1, 2, 3, 4]);
});

// Test case 2
test("returns an array with no duplicates", () => {
  expect(killTheClones([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});

// Test case 3
test("returns an array with no duplicates", () => {
  expect(killTheClones([1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual([1]);
});

// Test case 4
test("returns an array with no duplicates", () => {
  expect(killTheClones(["Hello", "Hello", "Hello", "Hello"])).toStrictEqual([
    "Hello",
  ]);
});

// Test case 5
test("returns an array with no duplicates", () => {
  expect(killTheClones(["Hello", "World", "Hello", "World"])).toStrictEqual([
    "Hello",
    "World",
  ]);
});
