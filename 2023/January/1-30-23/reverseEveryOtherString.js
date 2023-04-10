// 6 Kyu - Reverse Every Other String 
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
    if (str.trim().length === 0) return ""
    return str.split(" ").map((el, i) => {
        return i % 2 != 0 ? el.split("").reverse().join("") : el
    }).join(" ")
}