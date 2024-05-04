// write a function that makes every first letter uppercase and every letter in that word lowercase

function titleCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = titleCase;
