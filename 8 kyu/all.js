// Enumerable Magic #1 - True for All?

// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

// Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all

function all( arr, fun ){
    let count = 0
    for(let i = 0; i < arr.length; i++){
      const bool = fun(arr[i])
      if(bool){
        count += 1
      }
    }
    return count === arr.length
}

function all( arr, fun ){
    return arr.every(fun)
}

var all = Function.prototype.call.bind(Array.prototype.every);

function all( arr, fun ){
    return arr.every(el=>fun(el)) 
}