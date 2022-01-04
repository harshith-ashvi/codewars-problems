// Vowel remover

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Don't worry about uppercase vowels.

// My Solution
function shortcut(string){
    const vowels = [ "a", "e", "i", "o", "u" ]
    return string.split("").filter(letter => !vowels.includes(letter)).join("")
}

//Others's Solution
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}