// write a function that makes every first letter uppercase and every letter in that word lowercase

function titleCase(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
module.exports = titleCase;
