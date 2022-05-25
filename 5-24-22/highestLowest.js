// 7 kyu
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = (numbers) => {
    //First, turn the string of numbers into an array of number type
    let arr = numbers.split(" ").map(x => {
            return Number(x)
        })
        //Then, find the min and max value from the array and put them into their own variables
    let min = Math.min(...arr)
    let max = Math.max(...arr)
        //return a string of those two variables
    return `${max} ${min}`
}