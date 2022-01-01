// What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    const result = []
    for(let i = a; i <= b; i++){
      result.push(i)
    }
    return result
}

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

function between(a, b) {
    return Array(b - a + 1).fill(1).map((_, i) => a + i)
}