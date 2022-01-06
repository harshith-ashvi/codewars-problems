// Wilson primes

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// My Solution
function factorial(num) {
    let fact = 1
    for (let i = num; i > 1; i--){
      fact *= i
    }
    return fact
}
  
function amIWilson(p) {
    return (factorial(p-1) + 1) / (p * p) % 1 === 0
}

// Other's Solution
function amIWilson(p) {
    function fact(x) {
      return x <= 1 ? 1 : x * fact(x-1);
    }
    
    return (fact(p-1) + 1) / (p*p) % 1 === 0;
}