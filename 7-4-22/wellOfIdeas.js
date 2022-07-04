// 8 Kyu
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
    const count = {}

    for (const element of x) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    if (!count.good) {
        return "Fail!"
    }
    if (count.good > 2) {
        return "I smell a series!"
    }
    return "Publish!"
}