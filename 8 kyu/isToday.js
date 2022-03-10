// Is the date today

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

// My solution
function isToday(date) {
    const inputDay = date.getDate()
    const today = new Date().getDate()
    const inputMonth = date.getMonth()
    const month = new Date().getMonth()
    const inputYear = date.getFullYear()
    const year = new Date().getFullYear()
    return inputDay === today && inputMonth === month && inputYear === year
}

// Other solution
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}

function isToday(date) {
    return new Date().toString().substr(0, 15) === date.toString().substr(0, 15);
}

const isToday = date => {
    let d = new Date();
    return ['getDate', 'getMonth', 'getFullYear'].every(v => date[v]() == d[v]());
}