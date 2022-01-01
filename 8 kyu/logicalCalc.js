// Logical calculator

// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

function logicalCalc(array, op){
    //your code here
    let result
    if (op === "AND"){
        return result = array.every(function(ele){return ele})
    } else if(op === "OR"){
        return result = array.some(function(ele){return ele})
    } else{
        return result = array.reduce((x,y,z) => x!==y)
    } 
}

let ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b) =>  a || b,
    'XOR': (a, b) => a !== b
}
  
  
function logicalCalc(array, op){
    return array.reduce(ops[op]);
}

console.log(logicalCalc([true, true, false, false], "AND"))

console.log(logicalCalc([true, true, false, false], "OR"))

console.log(logicalCalc([true, true, false, false], "XOR"))