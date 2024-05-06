const calculateThis = require("./calculate-this");

describe("calculateThis function", () => {
  // Test case 1
  test("adds 1 + 2 to equal 3", () => {
    expect(calculateThis(1, 2, "+")).toBe(3);
  });

  // Test case 2
  test("subtracts 5 - 7 to equal -2", () => {
    expect(calculateThis(5, 7, "-")).toBe(-2);
  });

  // Test case 3
  test("multiplies 3 * 4 to equal 12", () => {
    expect(calculateThis(3, 4, "*")).toBe(12);
  });

  // Test case 4
  test("divides 10 / 2 to equal 5", () => {
    expect(calculateThis(10, 2, "/")).toBe(5);
  });

  // Test case 5
  test("returns 'Invalid operator' when operator is not one of '+', '-', '*', or '/'", () => {
    expect(calculateThis(1, 2, "x")).toBe("Invalid operator");
  });

  // Test case 6
  test("returns 'Invalid input: a and b must be numbers' when a is not a number", () => {
    expect(calculateThis("5", 3, "+")).toBe(
      "Invalid input: a and b must be numbers"
    );
  });

  // Test case 7
  test("returns 'Invalid input: a and b must be numbers' when b is not a number", () => {
    expect(calculateThis(2, "3", "-")).toBe(
      "Invalid input: a and b must be numbers"
    );
  });

  // Test case 8
  test("returns 'Invalid input: operator must be a string' when operator is not a string", () => {
    expect(calculateThis(2, 3, 4)).toBe(
      "Invalid input: operator must be a string"
    );
  });

  // Test case 9
  test("returns 'Invalid operation: division by zero' when dividing by zero", () => {
    expect(calculateThis(10, 0, "/")).toBe(
      "Invalid operation: division by zero"
    );
  });

  // Test case 10
  test("handles floating-point numbers correctly", () => {
    expect(calculateThis(2.5, 1.5, "+")).toBeCloseTo(4);
    expect(calculateThis(3.7, 1.2, "-")).toBeCloseTo(2.5);
    expect(calculateThis(1.5, 2.5, "*")).toBeCloseTo(3.75);
    expect(calculateThis(7.5, 2.5, "/")).toBeCloseTo(3);
  });
});
