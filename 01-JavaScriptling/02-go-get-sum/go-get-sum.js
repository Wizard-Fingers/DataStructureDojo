// go-get-sum.js

/**
 * Calculates the sum of two non-negative numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the numbers.
 * @throws {Error} If fewer than one or more than two arguments are provided.
 * @throws {Error} If any argument is not a number or is negative.
 */
function goGetSum(a, b) {
  // Check if there are fewer than one argument
  if (arguments.length < 1) {
    throw new Error("Function requires at least one argument");
  }

  // Check if there are more than two arguments
  if (arguments.length > 2) {
    throw new Error("Function accepts a maximum of two arguments");
  }

  // Check if the first argument is a number
  if (typeof a !== "number") {
    throw new Error("First argument must be a number");
  }

  // Check if the first argument is less than 0
  if (a < 0) {
    throw new Error("First argument must be a non-negative number");
  }

  // Check if the second argument is provided
  if (arguments.length === 2) {
    // Check if the second argument is a number
    if (typeof b !== "number") {
      throw new Error("Second argument must be a number");
    }

    // Check if the second argument is less than 0
    if (b < 0) {
      throw new Error("Second argument must be a non-negative number");
    }

    // Return the sum of the two numbers
    return a + b;
  }

  // Return the value of the first argument if the second argument is not provided
  return a;
}

// Export the goGetSum function
module.exports = goGetSum;
