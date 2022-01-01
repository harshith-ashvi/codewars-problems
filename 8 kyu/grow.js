// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let multiply = 1
    x.forEach(n => multiply = multiply*n)
    return multiply
}

const grow=x=> x.reduce((a,b) => a*b);