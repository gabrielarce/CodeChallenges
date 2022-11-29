// 6 Kyu - String Array Duplicates 

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
    function singles(word) {
        let result = ""
        for (let i = 0; i < word.length; i++) {
            if (word[i] != word[i - 1]) {
                result = result + word[i]
            }
        }
        return result
    }
    return s.map(el => singles(el))
};