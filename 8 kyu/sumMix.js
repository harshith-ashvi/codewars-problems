// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let total = 0
    x.forEach(function(ele){return total += Number(ele)})
    return total
}

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
}