// All Inclusive?

// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

function containAllRots(strng, arr) {
    console.log(strng, arr)
    if( strng.length === 0){
      return true
    } else {
      const strArr = [strng]
      for(let i = 1; i < strng.length; i++){
        strArr.push(strng.slice(i) + strng.substr(0, i))
      }
      const count = arr.filter(ele => strArr.includes(ele))
      console.log(strArr, count)
      return count.length === strArr.length
    }
}


function containAllRots(str, arr) {
    for (let i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
      }
    }
    return true
}

function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}

function containAllRots(strng, arr) {
    function rotate(s) {
       return s.substring(1) + s[0];  
    }
    for(var i = 0, l = strng.length; i < l; ++i) {
        if (arr.indexOf(strng) === -1) {
            return false;
        }
        strng = rotate(strng);
    }
    return true;
}