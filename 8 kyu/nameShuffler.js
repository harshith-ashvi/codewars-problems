// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    return `${str.split(" ")[1]} ${str.split(" ")[0]}` 
}

function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}
