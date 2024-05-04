const padawanPalindromeChecker = require("./padawan-palindrome-checker");

// Test case 1
test("returns true when the input is a palindrome", () => {
  expect(padawanPalindromeChecker("racecar")).toBe(true);
});

// Test case 2
test("returns true when the input is a palindrome", () => {
  expect(padawanPalindromeChecker("Horse")).toBe(false);
});

// Test case 3
test("returns true when the input is a palindrome", () => {
  expect(padawanPalindromeChecker("Otto")).toBe(false);
});

// Test case 4
test("returns true when the input is a palindrome", () => {
  expect(padawanPalindromeChecker("112211")).toBe(true);
});
