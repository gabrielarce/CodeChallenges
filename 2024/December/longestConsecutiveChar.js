// 6 Kyu - Longest Consecutive Character

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]

// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

// Happy coding! :)

function longestRepetition(s) {
    if (s.length === 0) return ['', 0]; // Handle empty string case

    let maxChar = ''; // Character with the longest repetition
    let maxLength = 0; // Length of the longest repetition
    let currentChar = s[0]; // Current character being tracked
    let currentLength = 1; // Current repetition length

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentLength++; // Increment repetition count
        } else {
            // Compare current repetition with max
            if (currentLength > maxLength) {
                maxChar = currentChar;
                maxLength = currentLength;
            }
            // Reset current tracking
            currentChar = s[i];
            currentLength = 1;
        }
    }

    // Final comparison for the last sequence in the string
    if (currentLength > maxLength) {
        maxChar = currentChar;
        maxLength = currentLength;
    }

    return [maxChar, maxLength];
}