// Type of sum

// Return the type of the sum of the two arguments

// My Solution
function typeOfSum(a, b) {
    return !(a + b) || Number(a + b)? 'number':'string'
}

//Other's Solution
const typeOfSum = (a, b) => typeof(a + b);