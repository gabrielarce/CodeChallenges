// 7 Kyu
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

"use strict";

function flattenAndSort(array) {
    let arr2 = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            arr2.push(array[i][j])
        }
    }
    return arr2.sort((a, b) => {
        return a - b
    })
}