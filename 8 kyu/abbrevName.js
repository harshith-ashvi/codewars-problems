// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){
    // code away
  let abb = `${name[0].toUpperCase()}.`
  for(let i = 1; i<name.length; i++){
    if(name[i-1] === " "){
      abb+= name[i].toUpperCase() + `.`
    }
  }
  return abb.slice(0, abb.length-1)
}

function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

console.log(abbrevName("harshith ashvi"))