// No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}

function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) { 
    //check why we need to add n !== 0 it is because in one of the cases there is argument as 0 but it won't pass this condition so uou can try one more thing also
      n = n / 10
    }
    return n
}

function noBoringZeros(n) {
    if (n !== 0){
        while (n % 10 === 0) { 
            n = n / 10
        }
        return n
    } else {
        return n
    }
}

function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}