// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    return (array.length === 0)? 0:(array.reduce(((sum,x) => sum+x)/array.length)) //Check why it didn't work 
}

function find_average(array) {
    let total = 0
    for(let i=0; i<array.length; i++){
      total += array[i]
    }
    return (total/array.length)
}

function find_average(array) {
    return array.reduce((result, current) => result + current, 0) / array.length;
}

console.log(find_average([1,1,1]))
console.log(find_average([1,2,3]))
console.log(find_average([1,2,3,4]))