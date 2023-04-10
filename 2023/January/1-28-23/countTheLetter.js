// 6 Kyu - Count the letters 
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    //Object that will hold the letters and counts
    let hash = {}
        //Loop through the string, if letter present in hash, add 1, else init to 1
    for (const letter of string) {
        hash[letter] ? hash[letter]++ : hash[letter] = 1
    }
    return hash
}