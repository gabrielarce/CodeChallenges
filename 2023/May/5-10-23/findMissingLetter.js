// 6 Kyu - Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// Test Cases

// const Test = require('@codewars/test-compat');

// describe("KataTests", function(){
//   it("exampleTests", function(){
//     Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//     Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//   });
//   it("randomTest", function(){
//     for(let r=0;r<30;r++)
//     {
//       let len = Math.floor(Math.random() * 7 + 3);
//       let missingIdx = Math.floor(Math.random() * (len - 2) + 1);
//       let start = Math.floor(Math.random() * (90-len-65) + 65);

//       if(Math.random() > 0.5)
//       {
//         start += 32;
//       }

//       let missing = String.fromCharCode(start + missingIdx);
//       let array = [];

//       for(let i=0;i<len;i++)
//       {
//         if(i != missingIdx)
//         {
//           array.push(String.fromCharCode(start + i));
//         }
//       }

//       console.log("Array: " + array.join(','));

//       Test.assertEquals(findMissingLetter(array), missing);
//     }
//   });
// });

function findMissingLetter(array) {
    // Convert the first and last characters of the array to their char codes
    let start = array[0].charCodeAt(0);
    let end = array[array.length - 1].charCodeAt(0);

    // Iterate through the array to find the missing letter
    for (let i = start; i <= end; i++) {
        // If the current character is not equal to the expected character,
        // return the missing character
        if (array[i - start] !== String.fromCharCode(i)) {
            return String.fromCharCode(i);
        }
    }
    // If no missing letter is found, return null or an appropriate value
    return null;
}