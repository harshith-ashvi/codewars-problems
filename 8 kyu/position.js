// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta

function position(letter){
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    return `Position of alphabet: ${alphabets.indexOf(letter) + 1}`
}

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}