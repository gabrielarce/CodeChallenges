// 5 Kyyu - Not Very Secure

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore

function alphanumeric(string) {
  //   if paramter is an empty string, return false
  if (string.length < 1) return false;
  //   create a referrence string variable of allowed characters
  const allowedCharacters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   loop through input parameter
  for (let i = 0; i < string.length; i++) {
    //   if character is not one of the allowed characters, then return false
    if (!allowedCharacters.includes(string[i])) return false;
  }
  //   if you get to this point, then you have passed all the validation requirements
  return true;
}
