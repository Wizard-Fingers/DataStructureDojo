const intersect = require("./intersect");

describe("intersect", () => {
  test("returns common elements between two arrays", () => {
    expect(intersect([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([3, 4, 5]);
  });

  test("returns an empty array when there are no common elements", () => {
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test("returns an empty array when one array is empty", () => {
    expect(intersect([], [1, 2, 3])).toEqual([]);
    expect(intersect([1, 2, 3], [])).toEqual([]);
  });

  test("returns an empty array when both arrays are empty", () => {
    expect(intersect([], [])).toEqual([]);
  });

  test("returns common elements between arrays with duplicates", () => {
    expect(intersect([1, 2, 2, 3, 4, 4, 5], [2, 3, 3, 4, 5, 5, 6])).toEqual([
      2, 3, 4, 5,
    ]);
  });

  test("returns common elements between arrays with different types", () => {
    expect(intersect([1, "2", 3, true], ["2", 3, false, 5])).toEqual(["2", 3]);
  });
});
