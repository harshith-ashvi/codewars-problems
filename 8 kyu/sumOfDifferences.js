// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
    if(arr.length <= 1){
        return 0
    } else {
        let sum = 0
        arr = arr.sort((a, b) => a-b)
        for(let i = 1; i < arr.length; i++){
            sum += arr[i-1] - arr[i]
        }
        return Math.abs(sum)
    }
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

console.log(sumOfDifferences([2, 1, 10]))