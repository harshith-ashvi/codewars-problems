// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!

// My Solution
function oddCount(n){
    return n % 2 === 0? Math.ceil(n / 2): Math.ceil(n / 2) - 1 
}

// Other's Solution
const oddCount = n => Math.floor(n/2) ;

function oddCount(n) {
    return Math.trunc(n / 2);
}