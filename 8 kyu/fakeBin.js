// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return x.split("").map(function(ele){return (ele<5)? 0:1}).join("")
}

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

console.log(fakeBin('45385593107843568'))

