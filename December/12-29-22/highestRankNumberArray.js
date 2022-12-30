// 6 Kyu - Highest Rank Number in an Array
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    };

    let highTally = Math.max(...Object.values(hash));
    let values = [];

    for (const prop in hash) {
        if (hash[prop] == highTally) {
            values.push(Number(prop))
        }
    }

    return Math.max(...values)
}