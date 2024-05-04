// create a function that takes a string and returns the number of vowels in that string.

function viciousVowels(string) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i))) {
      count += 1;
    }
  }
  return count;
}

module.exports = viciousVowels;
