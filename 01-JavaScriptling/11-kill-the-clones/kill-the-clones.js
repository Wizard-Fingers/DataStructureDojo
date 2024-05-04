// create a function that takes an array of objects and returns an array with all the duplicates in that array removed.

function killTheClones(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

module.exports = killTheClones;
