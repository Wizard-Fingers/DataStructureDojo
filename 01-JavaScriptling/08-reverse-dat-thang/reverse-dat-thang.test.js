const reverseDatThang = require("./reverse-dat-thang");

// test case 1
test("Reversing 'Hello Hannah and Otto nice to meet you.'", () => {
  const result = reverseDatThang("Hello Hannah and Otto nice to meet you.");
  expect(result).toBe(".uoy teem ot ecin ottO dna hannaH olleH");
});

// test case 2
test("Reversing 'Hello world!'", () => {
  const result = reverseDatThang("Hello world!");
  expect(result).toBe("!dlrow olleH");
});

// test case 3
test("Reversing 'hElLo wOrld!'", () => {
  const result = reverseDatThang("hElLo wOrld!");
  expect(result).toBe("!dlrOw oLlEh");
});

// test case 4
test("Reversing '12345'", () => {
  const result = reverseDatThang("12345");
  expect(result).toBe("54321");
});

// test case 5
test("Reversing 12345", () => {
  const result = reverseDatThang(12345);
  expect(result).toBe("54321");
});
