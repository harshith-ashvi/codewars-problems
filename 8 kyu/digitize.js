// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    n = String(n)
    const arr = []
    for(let i = 0; i < n.length; i++){
      arr.unshift(Number(n[i]))    
    }
    return arr 
}

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}