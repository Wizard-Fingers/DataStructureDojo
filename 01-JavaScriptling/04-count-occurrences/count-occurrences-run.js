const countOccurrences = require("./count-occurrences");

// Test case 1: Counting occurrences of a lowercase letter
const result1 = countOccurrences("hello", "l");
console.log("Number of occurrences of 'l' in 'hello':", result1);

// Test case 2: Counting occurrences of an uppercase letter
const result2 = countOccurrences("Hello, World!", "L");
console.log("Number of occurrences of 'L' in 'Hello, World!':", result2);

// Test case 3: Counting occurrences of a number
const result3 = countOccurrences("12345", "3");
console.log("Number of occurrences of '3' in '12345':", result3);

// Test case 4: Counting occurrences of a character that doesn't exist in the string
const result4 = countOccurrences("hello", "z");
console.log("Number of occurrences of 'z' in 'hello':", result4);

// Test case 5: Passing an empty string as input
const result5 = countOccurrences("", "a");
console.log("Number of occurrences of 'a' in an empty string:", result5);

// Test case 6: Passing an invalid input type for string
try {
  countOccurrences(12345, "3");
} catch (error) {
  console.log("Error:", error.message);
}

// Test case 7: Passing an invalid input type for character
try {
  countOccurrences("hello", 5);
} catch (error) {
  console.log("Error:", error.message);
}

// Test case 8: Passing a multi-character string for character
try {
  countOccurrences("hello", "lo");
} catch (error) {
  console.log("Error:", error.message);
}
