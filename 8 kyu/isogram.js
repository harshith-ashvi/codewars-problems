// An isogram is a word has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") //true
// isIsogram("aba") //false
// isIsogram("moOse") //false 


function isIsogram(str){
    let result = true
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(!(str.indexOf(str[i]) === str.lastIndexOf(str[i]))){
            result  = false
            break
        }
    }
    return result
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("harshith"))