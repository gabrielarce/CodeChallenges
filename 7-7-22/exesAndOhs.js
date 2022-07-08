// 7 Kyu 

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
    let x, o
    x = o = 0

    let stringSplit = str.split("")

    stringSplit.forEach(string => {
        (string.toLowerCase() === "x") ? x++ :
        (string.toLowerCase() === "o") ? o++ : false
    })

    return x === o
}