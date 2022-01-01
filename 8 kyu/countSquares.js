// Count the number of cubes with paint on

// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

const countSquares = function(cuts){
    if (cuts === 0){
      return 1
    } else {
      const allCubes = ((cuts + 1) ** 2) * (cuts + 1)
      const innerCubes = ((cuts - 1) ** 2) * (cuts - 1)
      return allCubes - innerCubes
    }
}

const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;

let countSquares = c => c ? 6 * c * c + 2 : 1;

const countSquares = n => n ? 6*n*n+2 : 1