function squareDigits(num){
    //may the code be with you
    const num_str = String(num)
    let str = ""
    for (let i = 0; i < num_str.length; i++){
      str += num_str[i] ** 2 
    }
    return Number(str)
}   

// Alternate Way - 1
// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }

// Alternate Way - 2
// function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }

console.log(squareDigits(3212))

console.log(squareDigits(42))