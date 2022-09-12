//  7 Kyu 
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const smallEnough = (arr, limit) => {
    return arr.filter((item) => item <= limit).length === arr.length
        // Not my code, but better solution I found
        // return Math.max(...a) <= limit
}