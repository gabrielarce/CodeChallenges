// 7 Kyu 

// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
    //   split the string at each space
    //   reverse the order of that split string
    //   join that split string as a new string, and return it

    return str.split(" ").reverse().join(" ")
}