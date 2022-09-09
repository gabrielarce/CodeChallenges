// 6 Kyu
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function(iterable) {
    let answer = []
    if (Array.isArray(iterable) && typeof iterable[0] === "number") {
        iterable.toString().split(",").forEach((el, index) => {
            el != iterable[index + 1] ? answer.push(Number(el)) : false
        })
    } else if (Array.isArray(iterable)) {
        iterable.toString().split(",").forEach((el, index) => {
            el != iterable[index + 1] ? answer.push(el) : false
        })
    } else {
        iterable.split("").forEach((el, index) => {
            el != iterable[index + 1] ? answer.push(el) : false
        })
    }

    return answer
}