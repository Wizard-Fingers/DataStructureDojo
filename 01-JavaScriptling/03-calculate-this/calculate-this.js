// create a function that takes two arguments as numbers and an operator as a string and performs the operation and returns a result.

function calculateThis(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid operator";
  }
}

module.exports = calculateThis;
