// 7 Kyu 

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
    // push the two integers into an array, and sort that array
    let arr = [a, b].sort((a, b) => a - b);
    // Find the low and high values of the sorted array
    let min = arr[0];
    let max = arr[1];
    // Declare sum variable
    let sum = 0;
    //Use a for loop to add each value of from Min to Max into the sum variable
    for (i = min; i <= max; i++) {
        sum += i
    };

    return a === b ? a : sum
}