// Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(args) {
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

function swapValues() {
    return arguments[0].reverse();
}

console.log(swapValues([1, 2]))