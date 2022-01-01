// Twice as old

// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let dadTrueAge = dadYearsOld - sonYearsOld //Dad Age when son was born
    let twiceAge
    for(let sonTrueAge = 0; sonTrueAge < dadTrueAge; sonTrueAge++) //Son age when he was born
      if (dadTrueAge === 2*sonTrueAge){
        twiceAge = dadTrueAge
        break
      } else{
        ++dadTrueAge
      }
    return Math.abs(twiceAge - dadYearsOld)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7))
console.log(twiceAsOld(55, 30))
console.log(twiceAsOld(42, 21))