// write a function that takes two arrays and returns the common elements in both arrays and returns the common elements in a new array.

function intersect(arr1, arr2) {
  // Check if both inputs are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Both arguments must be arrays");
  }

  // Check if either array is empty
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }

  // Convert arrays to sets for faster lookup
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Initialize an array to store the common elements
  const result = [];

  // Iterate over the smaller set for better performance
  if (set1.size < set2.size) {
    for (const element of set1) {
      if (set2.has(element)) {
        result.push(element);
      }
    }
  } else {
    for (const element of set2) {
      if (set1.has(element)) {
        result.push(element);
      }
    }
  }

  return result;
}

module.exports = intersect;
