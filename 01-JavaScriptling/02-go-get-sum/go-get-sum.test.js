import goGetSum from "./go-get-Sum/go-get-sum";

test("adds 1 + 2 to equal 3", () => {
  expect(goGetSum(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(goGetSum(5, 7)).toBe(12);
});

test("adds -3 + 8 to equal 5", () => {
  expect(goGetSum(-3, 8)).toBe(5);
});

test("adds 0 + 0 to equal 0", () => {
  expect(goGetSum(0, 0)).toBe(0);
});
