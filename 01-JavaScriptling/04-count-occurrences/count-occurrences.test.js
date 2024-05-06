const countOccurrences = require("./count-occurrences");

describe("countOccurrences", () => {
  // Test case 1
  test("counting occurrences of a lowercase letter", () => {
    const result = countOccurrences("hello", "l");
    expect(result).toBe(2);
  });

  // Test case 2
  test("counting occurrences of an uppercase letter", () => {
    const result = countOccurrences("Hello, World!", "L");
    expect(result).toBe(3);
  });

  // Test case 3
  test("counting occurrences of a number", () => {
    const result = countOccurrences("12345", "3");
    expect(result).toBe(1);
  });

  // Test case 4
  test("counting occurrences of a character that doesn't exist in the string", () => {
    const result = countOccurrences("hello", "z");
    expect(result).toBe(0);
  });

  // Test case 5
  test("passing an empty string as input", () => {
    const result = countOccurrences("", "a");
    expect(result).toBe(0);
  });

  // Test case 6
  test("passing an invalid input type for string", () => {
    expect(() => countOccurrences(12345, "3")).toThrow(
      "Input must be a string"
    );
  });

  // Test case 7
  test("passing an invalid input type for character", () => {
    expect(() => countOccurrences("hello", 5)).toThrow(
      "Character must be a single character string"
    );
  });

  // Test case 8
  test("passing a multi-character string for character", () => {
    expect(() => countOccurrences("hello", "lo")).toThrow(
      "Character must be a single character string"
    );
  });
});
