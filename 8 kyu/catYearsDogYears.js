// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html


var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    const catYears = [15, 9, 4]
    const dogYears = [15, 9, 5]
    if(humanYears === 0){
      return [0, 0, 0]
    }else if(humanYears === 1){
      return [1,catYears[0], dogYears[0]]
    }else if(humanYears === 2){
      return [2, catYears[0]+catYears[1], dogYears[0]+dogYears[1]]
    }else{
      return[humanYears, catYears[0]+catYears[1]+((humanYears-2)*catYears[2]), dogYears[0]+dogYears[1]+((humanYears-2)*dogYears[2]) ]
    }    
  }

// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

console.log(humanYearsCatYearsDogYears(2))

console.log(humanYearsCatYearsDogYears(3))

console.log(humanYearsCatYearsDogYears(1))