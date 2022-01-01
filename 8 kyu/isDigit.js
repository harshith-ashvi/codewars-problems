// Is it a number?

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// function isDigit(s) {
//     return (Number(s.trim()) || Number(s.trim()) === 0)? true:false
// } Does not work

// function isDigit(s) {
//     return isNaN(Number(s.trim()))? false:true
// } Does not work

function isDigit(s) {
    return parseFloat(s) === Number(s)
}

function isDigit(s) {
    return s==parseFloat(s);
}



console.log(isDigit("3"))
console.log(isDigit("  3  "))
console.log(isDigit("-3.23"))
console.log(isDigit("-234.4"))

console.log(isDigit("3-4"))
console.log(isDigit("  3   5"))
console.log(isDigit("3 5"))
console.log(isDigit("zero"))
console.log(isDigit("s235"))