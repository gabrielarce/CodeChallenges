// 8 Kyu
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

let doubleChar = (str) => {
    let value = ""
    for (let i = 0; i < str.length; i++) {
        value += str[i].repeat(2)
    }
    return value
}

console.log(doubleChar("Hello World"))