// 101 Dalmatians - squash the bugs, not the dogs!

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmations(number){
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    const respond = (number <= 10)? dogs[0]:(number <= 50)? dogs[1]:(number < 101)?  dogs[2]:dogs[3]
    return respond
}

console.log(howManyDalmations(26))
console.log(howManyDalmations(8))
console.log(howManyDalmations(14)) 
console.log(howManyDalmations(80))
console.log(howManyDalmations(100))
console.log(howManyDalmations(101))
