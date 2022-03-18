// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

// My Solution
function binToDec(bin){
    return parseInt(bin, 2)
}

//Other's solution
const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);

function binToDec(bin){
    let arr = bin.split('').reverse();
     let num = 0;    
 
     for (let i = 0; i<arr.length; i++){
         if(arr[i]==='1' || arr[i]==='0'){
             num+=arr[i]*Math.pow(2,i);
         }else{
             throw 'Not bin num'
         }
     }
     return num;
}

function binToDec(bin){
    return bin.split("").reverse().map(function(a,b){return Number(a) * Math.pow(2,b)}).reduce(function(a,b){return a+b});
}