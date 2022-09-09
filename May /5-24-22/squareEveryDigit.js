// 7 Kyu
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9**2is 81 and 1**2 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
    let numArray = String(num).split("").map((num) => {
        return Number(num * num)
    })
    return Number(numArray.join(""));
}