// 7 Kyu 
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = (arr) => {
    // loop through arr and append a string value to each element in array 
    return arr.map((item, index) => {
        return `${index+1}: ${item}`
    })
}