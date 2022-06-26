// 6 Kyu

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (A) => {

    const count = {};

    //Add key value pair to count object. Map each unique element as the key, and count as the value
    for (const element of A) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    //Loop through count object and return the value that appears odd amount of times
    for (let element in count) {
        console.log(count[element])
        if (count[element] % 2 != 0) {
            return Number(element)
        }
    }

}