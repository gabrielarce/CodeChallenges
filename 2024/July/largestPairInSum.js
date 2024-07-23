// 6 Kyu - Largest Pair in Sum
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  // Create an variable that holds a sorted copy (descending) of the numbers array
  let descending = numbers.sort((a, b) => b - a);

  // Return the sum of the first 2 elements of the array
  return descending[0] + descending[1];
}
