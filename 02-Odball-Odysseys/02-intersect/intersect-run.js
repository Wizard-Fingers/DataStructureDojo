const intersect = require("./intersect");

// Function to generate a random array of integers
function generateRandomArray(size, min, max) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

// Function to run the intersect function with various test cases
function runIntersectFunction() {
  // Test case 1: Normal arrays
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  console.log("Test Case 1:");
  console.log("Array 1:", arr1);
  console.log("Array 2:", arr2);
  console.log("Common elements:", intersect(arr1, arr2));
  console.log("---");

  // Test case 2: Arrays with duplicate elements
  const arr3 = [1, 2, 2, 3, 4, 4, 5];
  const arr4 = [2, 3, 3, 4, 5, 5, 6];
  console.log("Test Case 2:");
  console.log("Array 3:", arr3);
  console.log("Array 4:", arr4);
  console.log("Common elements:", intersect(arr3, arr4));
  console.log("---");

  // Test case 3: One empty array
  const arr5 = [];
  const arr6 = [1, 2, 3];
  console.log("Test Case 3:");
  console.log("Array 5:", arr5);
  console.log("Array 6:", arr6);
  console.log("Common elements:", intersect(arr5, arr6));
  console.log("---");

  // Test case 4: Both arrays empty
  const arr7 = [];
  const arr8 = [];
  console.log("Test Case 4:");
  console.log("Array 7:", arr7);
  console.log("Array 8:", arr8);
  console.log("Common elements:", intersect(arr7, arr8));
  console.log("---");

  // Test case 5: Large arrays with random integers
  const arr9 = generateRandomArray(1000, 1, 100);
  const arr10 = generateRandomArray(1000, 50, 150);
  console.log("Test Case 5:");
  console.log("Array 9 size:", arr9.length);
  console.log("Array 10 size:", arr10.length);
  console.log("Common elements:", intersect(arr9, arr10));
  console.log("---");
}

// Run the intersect function
runIntersectFunction();
