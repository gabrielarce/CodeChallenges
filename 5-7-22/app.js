// Count the Monkeys 
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to 
// just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that
// number, but excluding zero.

// For example:

// monkeyCount(10)  --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1)  --> [1]

function monkeyCount(n) {
    let arrayOfMonkeys = []

    for (i = 1; i <= n; i++) {
        arrayOfMonkeys.push(i)
    }

    return arrayOfMonkeys
}

//Function 3 - multiplying two numbers
//Implement a function which multiplies two numbers.


let multiply = (x, y) => x * y;

// Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and
//  try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent 
// the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d >= 3) {
        return (d * 40) - 20;
    } else {
        return d * 40;
    }
}