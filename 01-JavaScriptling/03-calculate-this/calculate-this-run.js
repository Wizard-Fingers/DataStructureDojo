// calculate-this-run.js

const calculateThis = require("./calculate-this");

// Test case 1: Addition
const result1 = calculateThis(5, 3, "+");
console.log("5 + 3 =", result1);

// Test case 2: Subtraction
const result2 = calculateThis(10, 7, "-");
console.log("10 - 7 =", result2);

// Test case 3: Multiplication
const result3 = calculateThis(4, 6, "*");
console.log("4 * 6 =", result3);

// Test case 4: Division
const result4 = calculateThis(15, 3, "/");
console.log("15 / 3 =", result4);

// Test case 5: Division by zero
const result5 = calculateThis(10, 0, "/");
console.log("10 / 0 =", result5);

// Test case 6: Invalid operator
const result6 = calculateThis(2, 3, "%");
console.log("2 % 3 =", result6);

// Test case 7: Non-number input
const result7 = calculateThis("5", 3, "+");
console.log('"5" + 3 =', result7);

// Test case 8: Non-string operator
const result8 = calculateThis(2, 3, 4);
console.log("2 4 3 =", result8);
