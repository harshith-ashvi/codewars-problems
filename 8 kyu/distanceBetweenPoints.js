// Geometry Basics: Distance between points in 2D

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function distanceBetweenPoints(a, b) {
//     // your code here
//     return Math.sqrt(((a.x-b.x)**2)+((a.y-b.y)**2))
// }

// function distanceBetweenPoints(a, b) {
//     // your code here
//     return Math.sqrt(Math.pow(a.x-b.x, 2)+Math.pow(a.y-b.y, 2))
// }

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);  //Math.hypot gives the square root of sum of the square 
}

console.log(distanceBetweenPoints(new Point(1,6), new Point(4,2)))
