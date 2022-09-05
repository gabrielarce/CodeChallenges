// 7 Kyu 
// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {

    function reverseWord(word) {
        return word.split("").reverse().join("");
    }
    return str.split(/(\s+)/)
        .map(el => reverseWord(el))
        .join("")
}