// 6 Kyu - Camel Case Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  // Split the input string by spaces
  const words = this.split(' ');

  // Capitalize the first letter of each word and join them back together
  const camelCaseStr = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return camelCaseStr;
};
