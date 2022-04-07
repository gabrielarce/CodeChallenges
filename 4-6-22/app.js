// Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of 
// powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's 
// gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

function hero(bullets, dragons) {

    if (dragons * 2 <= bullets) {
        return true
    } else {
        return false
    }
}

console.log(hero(10, 5))
console.log(hero(4, 5));
console.log(hero(100, 41));

// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x) {
    let answer = ""

    for (i = 0; i < x.length; i++) {
        if (Number(x.charAt(i)) < 5) {
            answer += "0"
        } else {
            answer += "1"
        }
    }

    return answer
}

console.log(`Fakebin function answer ${fakeBin('45385593107843568')} should be equal to '01011110001100111' `)