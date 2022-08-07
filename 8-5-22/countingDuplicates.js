// 6 Kyu 

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {

    // Turn string into an array
    let arr = text.toLowerCase().split("")

    // Create an object that will hold count of each unique value
    const count = {};

    // Create array that will count the number of duplicates
    let duplicates = 0;

    // Loop through the string array; for first occurence of letter create an object key = to that letter and add a value of 1.  If it has occured already, add +1
    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    // Loop through object, and if a key:value pair is greater than 1, Add +1 to the duplicates variable
    for (const el in count) {
        if (count[el] > 1) {
            duplicates++
        }
    }

    return duplicates
}