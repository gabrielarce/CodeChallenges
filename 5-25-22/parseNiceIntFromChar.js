// 8 Kyu

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

let getAge = (inputString) => {
    return parseInt(inputString)
}

console.log(getAge("4 years old"))
console.log(getAge(" I am 5 years old"))
console.log(getAge("11 years old"))
console.log(getAge("9 years old"))