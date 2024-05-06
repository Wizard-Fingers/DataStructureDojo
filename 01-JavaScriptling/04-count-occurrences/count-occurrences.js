function countOccurrences(string, character) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  if (typeof character !== "string" || character.length !== 1) {
    throw new Error("Character must be a single character string");
  }

  const lowercaseString = string.toLowerCase();
  const lowercaseCharacter = character.toLowerCase();

  let count = 0;

  for (let i = 0; i < lowercaseString.length; i++) {
    if (lowercaseString.charAt(i) === lowercaseCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countOccurrences;
