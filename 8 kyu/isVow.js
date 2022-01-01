// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Test Cases describe("Basic tests",() =>{
//     Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//     Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
// });

function isVow(a){
    const vowel = {
      97: "a",
      101: "e",
      105: "i",
      111: "o",
      117: "u"
    }
    const result = []
    a.forEach(function(ele){
      if(vowel.hasOwnProperty(ele)){
        result.push(vowel[ele])
      } else {
        result.push(ele)
      }
    })
    return result
}


function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
}

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)