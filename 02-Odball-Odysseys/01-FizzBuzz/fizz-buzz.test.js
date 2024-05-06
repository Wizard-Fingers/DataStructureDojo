const fizzBuzz = require("./fizz-buzz.js");

// test case 1
test("returns an array of numbers from 1 to 15", () => {
  expect(fizzBuzz(15)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});

// test case 2
test("returns an array of numbers from 1 to 20", () => {
  expect(fizzBuzz(20)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
  ]);
});

// test case 3
test("returns an array of numbers from 1 to 30", () => {
  expect(fizzBuzz(30)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
    "Fizz",
    22,
    23,
    "Fizz",
    "Buzz",
    26,
    "Fizz",
    28,
    29,
    "FizzBuzz",
  ]);
});
