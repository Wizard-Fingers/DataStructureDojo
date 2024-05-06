// Import your intersect function
const intersect = require("./intersect");

// Test Suite
describe("intersect", () => {
  // Test Case 1: Returns common elements between two arrays
  test("returns common elements between two arrays", () => {
    expect(intersect([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([3, 4, 5]);
  });

  // Test Case 2: Returns an empty array when there are no common elements
  test("returns an empty array when there are no common elements", () => {
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  // Test Case 3: Returns an empty array when one array is empty
  test("returns an empty array when one array is empty", () => {
    expect(intersect([], [1, 2, 3])).toEqual([]);
    expect(intersect([1, 2, 3], [])).toEqual([]);
  });

  // Test Case 4: Returns an empty array when both arrays are empty
  test("returns an empty array when both arrays are empty", () => {
    expect(intersect([], [])).toEqual([]);
  });

  // Test Case 5: Returns common elements between arrays with duplicates
  test("returns common elements between arrays with duplicates", () => {
    expect(intersect([1, 2, 2, 3, 4, 4, 5], [2, 3, 3, 4, 5, 5, 6])).toEqual([
      2, 3, 4, 5,
    ]);
  });

  // Test Case 6: Returns common elements between arrays with different types
  test("returns common elements between arrays with different types", () => {
    expect(intersect([1, "2", 3, true], ["2", 3, false, 5])).toEqual(["2", 3]);
  });

  // Test Case 7: Returns an empty array when one array is a subset of the other
  test("returns an empty array when one array is a subset of the other", () => {
    expect(intersect([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
    expect(intersect([1, 2, 3, 4, 5], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  // Test Case 8: Returns common elements when arrays have the same elements
  test("returns common elements when arrays have the same elements", () => {
    expect(intersect([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  // Test Case 9: Performance test for large arrays
  test("performance test for large arrays", () => {
    const arr1 = Array.from({ length: 100000 }, (_, i) => i); // Array of 100,000 elements
    const arr2 = Array.from({ length: 100000 }, (_, i) => i + 99900); // Array of 100,000 elements starting from 99900
    expect(intersect(arr1, arr2)).toEqual(
      Array.from({ length: 100 }, (_, i) => i + 99900)
    ); // Expecting elements from 99900 to 99999
  });

  // Test Case 10: Error handling for non-array inputs
  test("throws an error for non-array inputs", () => {
    expect(() => intersect("not an array", [1, 2, 3])).toThrow(TypeError);
    expect(() => intersect([1, 2, 3], "not an array")).toThrow(TypeError);
  });

  // Test Case 11: Test case where set1 is smaller than set2
  test("test case where set1 is smaller than set2", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4, 5, 6];
    expect(intersect(arr1, arr2)).toEqual([1, 2, 3]);
  });

  // Test Case 12: Test case where set2 is smaller than set1
  test("test case where set2 is smaller than set1", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 2, 3];
    expect(intersect(arr1, arr2)).toEqual([1, 2, 3]);
  });
  // Test Case 13: Test case where arr1 is empty and arr2 is not empty
  test("test case where arr1 is empty and arr2 is not empty", () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    expect(intersect(arr1, arr2)).toEqual([]);
  });

  // Test Case 14: Test case where arr1 is not empty and arr2 is empty
  test("test case where arr1 is not empty and arr2 is empty", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(intersect(arr1, arr2)).toEqual([]);
  });

  // Test Case 15: Test case where set1 and set2 have the same size
  test("test case where set1 and set2 have the same size", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    expect(intersect(arr1, arr2)).toEqual([2, 3]);
  });

  // Test Case 16: Test case where set1 is larger than set2
  test("test case where set1 is larger than set2", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 3];
    expect(intersect(arr1, arr2)).toEqual([2, 3]);
  });
});
