// Hex to Decimal

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
    return hexString.includes("-")? parseInt("0x"+hexString.slice(1))*-1:parseInt("0x"+hexString)
}

function hexToDec(hexString){
    return  parseInt(hexString, 16);
}

