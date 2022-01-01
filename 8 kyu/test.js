// const num = [1, 5, 7, 3]

// const score = [1, 45, 15, 100, 20, 12]

// // console.log(score.sort())
// // console.log(score.sort((a, b) => a - b))


// // const new_num = num.sort((a, b) => a - b)


// // console.log(new_num)

// score.sort(function(a, b){
//     console.log(a, b)
//     return a-b
// })

// console.log(score.sort((a, b) => a - b))

///////////////////////////////////////////////////////////////////////////////////////////////////

// function getAverage(marks){
//     console.log(marks.reduce((sum, x) => sum + x))
//     // return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }

// marks = [1, 2, 3, 4, 5]

// marks.reduce(function(sum, x){
//     console.log(sum, x)
//     console.log(sum + x)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////

// const str = "harshi"

// const n = 4

// console.log(str.repeat(4))

/////////////////////////////////////////////////////////////////////////////////////////////////

// function empty(str){
//     return (str.trim().length === 0)
// }

// console.log(empty("    "))

/////////////////////////////////////////////////////////////////////////////////////////////////

// let numbers = [0, 10 , 2, 13, 1, 22, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log(numbers)

/////////////////////////////////////////////////////////////////////////////////////////////////

// function getFrequency(arr){
//     const result = {}
//     // arr.forEach(function(ele){
//     //     if(!result.hasOwnProperty(ele)){
//     //         result[ele] = 1
//     //     } else {
//     //         result[ele] += 1
//     //     }
//     // })
//     arr.forEach(ele => (!result.hasOwnProperty(ele))? result[ele] = 1:result[ele] += 1)
//     return result
// }

// console.log(getFrequency([1, 2, 2, 3, 4, 1]))

// console.log(getFrequency(["d", "d", "c", "t", "t", "d"]))

//////////////////////////////////////////////////////////////////////

// function firstRepeat(str){
//     let repeat = "-1"
//     for(let i = 0; i < str.length; i++){
//         let temp = str[i]
//         for(let j = i + 1; j < str.length; j++){
//             if (temp === str[j]){
//                 repeat = temp
//                 break
//             }
//         }
//     }
//     return repeat
// }

// function firstRepeat(str){
//     let repeat = "-1"
//     for(let i = 0; i < str.length; i++){
//         const temp = str.slice(i+1)
//         if (temp.includes(str[i])){
//             repeat = str[i]
//             break
//         }
//     }
//     return repeat
// }

// console.log(firstRepeat("legolas"))
// console.log(firstRepeat("Gandloaf"))
// console.log(firstRepeat("Harshith"))
// console.log(firstRepeat("Balrog"))

//////////////////////////////////////////////////////////

// function palindrome(str){
//     return str === str.split("").reverse().join("")
// }

// console.log(palindrome("madam"))
// console.log(palindrome("javascript"))


// ///////////////////////////////////////////
// function threeOddNumbers(a){
//     let result = false
//     let sum
//     for (let i = 0; i < a.length - 2; i++){
//         sum = a[i] + a[i + 1] + a[i + 2]
//         if (sum % 2 !== 0) {
//             result = true
//             break
//         }
//     }
//     return result
// }

// // console.log(threeOddNumbers([1,2,3,4,5]))

// // console.log(threeOddNumbers([0,-2,4,1,9,12,4,1,0]))

// // console.log(threeOddNumbers([5,2,1]))

// console.log(threeOddNumbers([1,2,3,3,2]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function highestScoringWord(a) {
//     a = a.split(" ")
//     let word = a[0]
//     let highest = 0
//     let score
//     const alphabet = "$abcdefghijklmnopqrstuvwxyz"
//     for (let i = 0; i < a.length; i++){
//         score = 0
//         for (let j = 0; j < a[i].length; j++) {
//             score += alphabet.indexOf(a[i][j])
//         }
//         console.log(score)
//         if (score > highest) {
//             highest = score
//             word = a[i]
//         }
//     }
//     return word
// }

// console.log(highestScoringWord("a b c d e f"))

// function isAlt(a) {
//     let result = true
//     const even = [], odd = []
//     const vowels = "aeiou"
//     for (let i = 0; i < a.length; i++){
//         if (i % 2 === 0) {
//             even.push(a[i])
//         } else {
//             odd.push(a[i])
//         }
//     }
//     even_letter = even.split("").every(ele => vowels.includes(ele))
//     odd_letter = odd.split("").every(ele => (!vowels.includes(ele)))
//     console.log(even_letter, odd_letter)
//     return even_letter === odd_letter
// }

// console.log(isAlt("amazon"))
// // console.log(isAlt("apple"))
// // console.log(isAlt("banana"))

////////////////////////////////////////////////////////////////////////////////////////

// function rankings(a){
//     const rank = a.slice(0)
//     rank.sort((a,b) => b-a)
//     const result = a.map(ele => rank.indexOf(ele)+1)
//     return result
// }

// console.log(rankings([10, 5, 20]))
// console.log(rankings([6, 8, 1, 12, 4, 3, 9]))
// console.log(rankings([100]))
// console.log(rankings([4, 2, 3, 1]))


//////////////////////////////////////////////////////////////////

// function findGreaterNumbers(a){
//     let count = 1
//     for (let i = 0; i < a.length - 1; i++){
//         if (a[i+1] > a[i]) {
//             console.log(a[i+1], a[i])
//             count += 1
//         }
//     }
//     return count === 1? 0:count
// }

// console.log(findGreaterNumbers([6,1,2,7]))

/////////////////////////////////////////////////////////////////////////

//matrix multiplication

function getMatrixProduct(a,b){
    if (a.length === 0 || b.length === 0 || a[0].length !== b.length) {
        return -1
    } else {
        const result = []
        for (let i = 0; i < a.length; i++) {
            result[i] = []
            for (let j = 0; j < b[0].length; j++) {
                let sum = 0
                for (let k = 0; k < a[0].length; k++) {
                    sum += a[i][k] * b[k][j]
                }
                result[i][j] = sum
            }
        }
        return result
    }
}

const a = [[1, 2], [3, 4], [5, 6]], b = [[5, 6, 5], [7, 8, 7]]

// console.log(getMatrixProduct(a, b))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function permutation(a){
//     const result = []
//     for (let i = 0; i < a.length; i++) {
//         const currentChar = a[i]
//         const remainingChars = a.slice(0, i) + a.slice(i + 1)
//         for (let perm of permutation(remainingChars)) {
//             console.log(perm)
//             const permutedStr = currentChar + perm
//             result.push(permutedStr)
//         }
//     }
//     return result
// }

// console.log(permutation("xyz"))

// function permutation(a){
//     const result = []
//     for (let i = 0; i < a.length; i++) {
//         const currentChar = a[i]
//         const remainingChars = a.slice(0, i) + a.slice(i + 1)
//         const remainingCharsPermuted = permutation(remainingChars)
//         console.log(remainingCharsPermuted)
//         for (let j = 0; j < remainingCharsPermuted.length; j++) {
//             const permutedStr = currentChar + remainingCharsPermuted[j]
//             result.push(permutedStr)
//         }
//     }
//     return result
// }

// console.log(permutation("xyz"))

const findPermutations = (string) => {
    if (string.length < 2 ){
      return string
    }
  
    const permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      const char = string[i]
  
      const remainingChars = string.slice(0, i) + string.slice(i + 1)
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
}

console.log(findPermutations("xyz"))


////////////////////////
// function permutation(a) {
//     const result = []

//     if (a.length === 0) {
//         return ""
//     } else if (a.length === 1) {
//         return a
//     }

//     for (let i = 0; i < a.length; i++) {
//         const currentChar = a[i]
//         const remainingChars = a.slice(0, i) + a.slice(i + i)
//         const remainingCharsPermuted = permutation(remainingChars)

//         for (let j = 0; j < remainingCharsPermuted.length; j++) {
//             const permutedArray = currentChar + remainingCharsPermuted
//             result.push(permutedArray)
//         }
//     }
//     console.log(result)
//     return result
// }

// console.log(permutation("xyz"))