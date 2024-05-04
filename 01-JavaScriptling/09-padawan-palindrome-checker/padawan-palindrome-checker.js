// create a function that checks if a word is a palindrome and if so returns a boolean value of true, otherwise false.

function padawanPalindromeChecker(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

module.exports = padawanPalindromeChecker;
