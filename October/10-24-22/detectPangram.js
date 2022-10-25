// 6 kyu 
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let letterObj = {}

    for (let letter of string) {
        let lower = letter.toLowerCase()
        if (alphabet.includes(lower)) {
            if (letterObj.hasOwnProperty(lower)) {
                letterObj[lower] += 1
            } else {
                letterObj[lower] = 1
            }
        }
    }
    return Object.keys(letterObj).length == 26
}