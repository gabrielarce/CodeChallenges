// 8 Kyu
// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) => {
    let reversed = x.split("").reverse().join("")
    return x.toLowerCase() === reversed.toLowerCase() ? true : false
}