// noobCode 01: SUPERSIZE ME.... or rather, this integer!

// Write a function that rearranges an integer into its largest possible value.

// Example (Input --> Output)

// 123456 --> 654321
// 105 --> 510
// 12 --> 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num){
    return Number(num.toString().split("").map(n => Number(n)).sort((a, b) => b - a).join(""))
}

function superSize(num){
    const sortedString = num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
    return parseInt(sortedString, 10)
}

const superSize = num => +(num+'').split('').sort((a,b)=>b-a).join('')