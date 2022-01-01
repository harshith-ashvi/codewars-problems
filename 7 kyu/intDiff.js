// Integer Difference

// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

const intDiff = (arr, n) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
      const newArr = arr.slice(i + 1)
      for(let j = 0; j < newArr.length; j++){
        if (Math.abs(arr[i] - newArr[j]) === n ){
          count += 1
        }
      }
    }
    return count
}

const intDiff = function(arr, n){
    let [ out, k ] = [ [], 0 ]
    for ( const i of arr ){
      out = out.concat( arr.slice(++k).filter(el => Math.abs(el - i) === n ))
    }
    return out.length;
}

const intDiff = (arr, n) => 
  arr.reduce((pre, val, idx) => pre + arr.slice(++idx).filter(v => Math.abs(v - val) === n).length, 0);