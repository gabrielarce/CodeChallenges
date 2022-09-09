// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

//Calculate BMI

function bmi(weight, height) {
    let bmi = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

console.log(`${bmi(150, 1.80)}, should equal "Obese"`)

// Calculate average

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length > 0) {
        return (array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)) / array.length
    } else {
        return 0
    }
}

// Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m
}