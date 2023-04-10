// 7 Kyu - Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non - string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x) {
  let stringInt = 0;
  let nonStringInt = 0;

  x.forEach((el) => {
    typeof el == "string" ? (stringInt += Number(el)) : (nonStringInt += el);
  });

  return nonStringInt - stringInt;
}
