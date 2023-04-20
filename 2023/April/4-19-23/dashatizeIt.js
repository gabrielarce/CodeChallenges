// Dashatize it - 6 Kyu

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// This function takes an integer n as input and returns a string with dashes ("-")
// inserted between adjacent odd digits in the input integer.
function dashatize(n) {
    // Check if the input is an integer, return "NaN" if it's not.
    if (!Number.isInteger(n)) {
        return "NaN";
    }

    // Convert the input integer to a string and store it in str.
    let str = Math.abs(n).toString();

    // Initialize an empty string called result.
    let result = "";

    // Loop through each digit in str.
    for (let i = 0; i < str.length; i++) {
        // Convert the current digit to an integer and store it in currentDigit.
        let currentDigit = parseInt(str[i]);

        // If currentDigit is odd, and not the first odd digit, add a "-" to result.
        if (currentDigit % 2 === 1) {
            if (result !== "" && result.charAt(result.length - 1) !== "-") {
                result += "-";
            }
            // Add the currentDigit and another "-" to result.
            result += currentDigit;
            result += "-";
        } else {
            // Add the currentDigit to result.
            result += currentDigit;
        }
    }

    // Remove a leading "-" from result, if it exists.
    if (result.charAt(0) === "-") {
        result = result.substring(1);
    }

    // Remove a trailing "-" from result, if it exists.
    if (result.charAt(result.length - 1) === "-") {
        result = result.slice(0, -1);
    }

    // Return the modified string.
    return result;
}