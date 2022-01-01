// Is it a palindrome?

// Write function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.split("").reverse().join("")
}

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("Bob"))
console.log(isPalindrome("abBa"))
console.log(isPalindrome("Madam"))