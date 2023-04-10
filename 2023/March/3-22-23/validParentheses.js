// 20. Valid Parentheses - Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

//

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create a stack to keep track of open parentheses
    const stack = [];

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is an open parentheses, push it onto the stack
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        // If the character is a closing parentheses, check if it matches the most recent open parentheses
        else if (char === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        } else if (char === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        } else if (char === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
        }
        // If the character is not a parentheses or does not match the most recent open parentheses, return false
        else {
            return false;
        }
    }

    // If the stack is empty, all parentheses were closed in the correct order
    return stack.length === 0;
};