// go-get-sum-run.js

// Import the goGetSum function from the go-get-sum.js file
const goGetSum = require("./go-get-sum");

// Test case 1: Valid input with two numbers
try {
  const result1 = goGetSum(1, 2);
  console.log("Test case 1 (valid input with two numbers):", result1);
} catch (error) {
  console.error("Test case 1 (valid input with two numbers):", error.message);
}

// Test case 2: Valid input with one number
try {
  const result2 = goGetSum(5);
  console.log("Test case 2 (valid input with one number):", result2);
} catch (error) {
  console.error("Test case 2 (valid input with one number):", error.message);
}

// Test case 3: Invalid input with no arguments
try {
  const result3 = goGetSum();
  console.log("Test case 3 (invalid input with no arguments):", result3);
} catch (error) {
  console.error(
    "Test case 3 (invalid input with no arguments):",
    error.message
  );
}

// Test case 4: Invalid input with more than two arguments
try {
  const result4 = goGetSum(1, 2, 3);
  console.log(
    "Test case 4 (invalid input with more than two arguments):",
    result4
  );
} catch (error) {
  console.error(
    "Test case 4 (invalid input with more than two arguments):",
    error.message
  );
}

// Test case 5: Invalid input with non-number arguments
try {
  const result5 = goGetSum("1", 2);
  console.log(
    "Test case 5 (invalid input with non-number arguments):",
    result5
  );
} catch (error) {
  console.error(
    "Test case 5 (invalid input with non-number arguments):",
    error.message
  );
}

// Test case 6: Invalid input with negative numbers
try {
  const result6 = goGetSum(-1, 2);
  console.log("Test case 6 (invalid input with negative numbers):", result6);
} catch (error) {
  console.error(
    "Test case 6 (invalid input with negative numbers):",
    error.message
  );
}
