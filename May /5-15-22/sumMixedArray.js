// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
    return x.reduce((acc, curr) => acc + Number(curr), 0)
}

console.log(sumMix([9, 3, '7', '3']) + " should equal 22")
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) + " should equal 42")