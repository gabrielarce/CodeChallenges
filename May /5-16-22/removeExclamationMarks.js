// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let removeExclamationMarks = (input) => {
    return input.replace(/!/g, "")
}

console.log(removeExclamationMarks("Me First!!"))
console.log(removeExclamationMarks("Me Next!!!!!!"))