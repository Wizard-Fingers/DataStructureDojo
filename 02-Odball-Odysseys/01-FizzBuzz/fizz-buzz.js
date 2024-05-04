// create a FizzBuzz function that takes a number as an argument and returns an array of numbers from 1 to the number in the argument. If the number is divisible by 3, the number in the array should be replaced with "Fizz". If the number is divisible by 5, the number in the array should be replaced with "Buzz". If the number is divisible by 3 and 5, the number in the array should be replaced with "FizzBuzz".

function fizzBuzz(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

module.exports = fizzBuzz;
