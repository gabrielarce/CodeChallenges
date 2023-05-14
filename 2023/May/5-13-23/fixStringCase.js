// 6 Kyu - Fix String Case
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
    //Loop through the string, if letter is uppercase, add +1 to uppercase variable
    //If letter is lowercase, add +1 to lowercase variable
    //If lowercase and uppercase variable are equal, return string to lower,
    //Else return string to whichever variable has higher count
    let lowerCaseCount = 0;
    let higherCaseCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) lowerCaseCount++;
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) higherCaseCount++;
    }

    if (lowerCaseCount === higherCaseCount || lowerCaseCount > higherCaseCount) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}

// const _ = require('lodash');

// describe("Basic tests", function(){
// Test.assertEquals(solve("code"),"code");
// Test.assertEquals(solve("CODe"),"CODE");
// Test.assertEquals(solve("COde"),"code");
// Test.assertEquals(solve("Code"),"code");
// });

// describe("Random tests", function(){
// let letters = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// for (let i = 0; i < 100; i++) {
//   let res = '';
//   for (let j = 0; j < 100; ++j){
//     let opt = _.random(0,1), lett = _.random(0,25);
//     res += letters[opt][lett]
//   }
//     let exp = kj346tr(res);
//     Test.assertEquals(solve(res),exp);
//  }

//   let r0 = _.random(15,25);
//   let x = letters[0].slice(0,r0) + letters[1].slice(0,r0);
//   let exp = kj346tr(x);
//   Test.assertEquals(solve(x),exp);
// })
// function kj346tr(s){
//     let a = 0, b = 0;
//     for (let i of s) i == i.toUpperCase() ? b++ : a++;
//     return a >= b ? s.toLowerCase() : s.toUpperCase();
// }