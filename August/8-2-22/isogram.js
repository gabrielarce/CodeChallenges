// 7 Kyu

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) => {

    //Split the string into array, lowercase each character, and sort the letters
    let arr = str.toLowerCase().split("").sort();
    //Create a counter for counting duplicate occurance of letter
    let counter = 0;
    //Loop through array
    for (i = 0; i < arr.length; i++) {
        //If the array includes index character in the rest of the array, increase counter
        if (arr.slice(i + 1).includes(arr[i])) {
            counter++
        }
    }
    // If counter is equal to 0, return true, otherwise return false
    return counter === 0
}