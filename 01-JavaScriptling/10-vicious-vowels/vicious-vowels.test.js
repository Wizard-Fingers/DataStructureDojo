const viciousVowels = require("./vicious-vowels.js");

// test case 1
test("Returning the number of vowels in a string", () => {
  const result = viciousVowels("Laugh it up, fuzzball!");
  expect(result).toBe(6);
});

// test case 2
test("Returning the number of vowels in a string", () => {
  const result = viciousVowels("I am your father.");
  expect(result).toBe(5);
});

// test case 3
test("Returning the number of vowels in a string", () => {
  const result = viciousVowels("I find your lack of faith disturbing.");
  expect(result).toBe(11);
});

// test case 4
test("Returning the number of vowels in a string", () => {
  const result = viciousVowels("The force will be with you, always.");
  expect(result).toBe(10);
});

// test case 5 set to fail
test("Returning the number of vowels in a string", () => {
  const result = viciousVowels("The force will be with you, always.");
  expect(result).toBe(10);
});
