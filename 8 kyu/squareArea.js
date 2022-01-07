// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// My Solution
function squareArea(A){
    const a = (4 * A) / (Math.PI * 2)
    return Number((a * a).toFixed(2))
}