// 6 Kyu 

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    // create function that spins the order of words
    function spin(word) {
        let newWord = ""
        for (let i = word.length - 1; i >= 0; i--) { newWord += word[i] }
        return newWord
    }
    //   split the string into an array of individual words
    //   map through array and perform the spin() function if letters are > 5
    //   return the joined array into a string
    return string.split(" ").map(el => {
        return el.length >= 5 ? spin(el) : el
    }).join(" ")
}