// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s){
    while(s.endsWith("!")){
      s = s.slice(0, s.length - 1)
    }
    return s
}

const remove = s => s.replace(/!+$/, '');

function remove(s){
    return s.replace(/!+$/, '');
}

function remove(s) {
    return s.replace(/!*$/,'')
}

function remove(s){
    for (var i = 0; s.endsWith("!"); i++) {
      s.endsWith("!") ? s = s.slice(0 , -1) : s;
    } 
    return s;
}

console.log(remove("Hi!!!"))