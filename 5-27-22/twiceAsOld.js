// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

let twiceAsOld = (dadYearsOld, sonYearsOld) => {
    if ((sonYearsOld * 2) > dadYearsOld) {
        return (sonYearsOld * 2) - dadYearsOld
    }
    return dadYearsOld - (sonYearsOld * 2)
}