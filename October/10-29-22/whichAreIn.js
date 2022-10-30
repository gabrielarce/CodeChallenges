// 6 Kyu 
// Which Are In

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {
    let result = []
    for (let i = 0; i < array1.length; i++) {
        let j = 0
        while (j < array2.length) {
            if (array2[j].includes(array1[i])) {
                result.push(array1[i])
                break;
            }
            j++
        }
    }
    return result.sort()
}