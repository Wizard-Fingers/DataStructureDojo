// create a function that takes two arguments as numbers and an operator as a string and performs the operation and returns a result the valid operators must be + - * and / only.

function calculateThis(a, b, operator) {
  // Check if a and b are numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input: a and b must be numbers";
  }

  // Check if operator is a valid string
  if (typeof operator !== "string") {
    return "Invalid input: operator must be a string";
  }

  // Perform the operation based on the operator
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Invalid operation: division by zero";
      }
      return a / b;
    default:
      return "Invalid operator";
  }
}

module.exports = calculateThis;
