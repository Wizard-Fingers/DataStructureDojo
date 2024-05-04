// create a function that counts how many times a letter occurs in a string and returns the count.
function countOccurrences(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}

module.exports = countOccurrences;
