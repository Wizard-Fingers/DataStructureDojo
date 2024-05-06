const goGetSum = require("./go-get-sum");

// Describe the test suite for the goGetSum function
describe("goGetSum function", () => {
  // Test case 1: Test if goGetSum adds two positive numbers correctly
  test("adds 1 + 2 to equal 3", () => {
    expect(goGetSum(1, 2)).toBe(3);
  });

  // Test case 2: Test if goGetSum returns the correct result for one argument
  test("returns the value of a single argument", () => {
    expect(goGetSum(5)).toBe(5);
  });

  // Test case 3: Test if goGetSum throws an error for no arguments
  test("throws an error for no arguments", () => {
    expect(() => goGetSum()).toThrow("Function requires at least one argument");
  });

  // Test case 4: Test if goGetSum throws an error for more than two arguments
  test("throws an error for more than two arguments", () => {
    expect(() => goGetSum(1, 2, 3)).toThrow(
      "Function accepts a maximum of two arguments"
    );
  });

  // Test case 5: Test if goGetSum throws an error for non-number arguments
  test("throws an error for non-number arguments", () => {
    expect(() => goGetSum("1", 2)).toThrow("First argument must be a number");
    expect(() => goGetSum(1, "2")).toThrow("Second argument must be a number");
  });

  // Test case 6: Test if goGetSum throws an error for negative numbers
  test("throws an error for negative numbers", () => {
    expect(() => goGetSum(-1, 2)).toThrow(
      "First argument must be a non-negative number"
    );
    expect(() => goGetSum(1, -2)).toThrow(
      "Second argument must be a non-negative number"
    );
  });
});
