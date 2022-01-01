// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let str = ""
    for(let i=0; i<s.length; i++){
      if(s[i] != "!")
        str += s[i]
    }
    return str;
}

// function removeExclamationMarks(s) {
//     return s.replace(/!/gi, '');
// }