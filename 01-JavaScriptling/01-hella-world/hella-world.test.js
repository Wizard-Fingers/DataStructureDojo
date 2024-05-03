const hellaWorld = require("./hella-world");

test("Returning 'hella world!' as a string", () => {
  const result = hellaWorld();
  expect(result).toBe("hella world!");
});
