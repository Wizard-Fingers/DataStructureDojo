// go-get-sum.js

// Define the function that takes two numbers and returns their sum
function goGetSum(a, b) {
  // Check if both arguments are numbers
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments must be numbers");
  }

  // Check if either argument is less than 0
  if (a < 0 || b < 0) {
    throw new Error("Arguments must be non-negative numbers");
  }

  // Return the sum of the two numbers
  return a + b;
}

// Export the goGetSum function
module.exports = goGetSum;
