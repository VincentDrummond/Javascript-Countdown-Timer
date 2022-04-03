
// MATHS
const DAYS_MATH =   1000 * 60 * 60 * 24
                //  1000ms * 60s * 60m *25h = 86400000 ms in 24 hours
const HOURS_MATH = 60 * 60000
const MINS_MATH = 60000
const SECS_MATH = 1000

// DATES
const THIS_DATE = Date.now();
const FUTURE_DATE = Date.UTC(2022, 9, 1, 16);
const TIME_ELAPSED = FUTURE_DATE - THIS_DATE;

// VARIABLE DATA
const DAYS = Math.floor((TIME_ELAPSED) / DAYS_MATH);
const HOURS = Math.floor((TIME_ELAPSED / HOURS_MATH) % 24);
const MINS = Math.floor((TIME_ELAPSED / MINS_MATH) % 60);
const SECS = Math.floor((TIME_ELAPSED / SECS_MATH) % 60);

function timeDiff() {
    return {
        DAYS,
        HOURS,
        MINS,
        SECS,
    }
};

function countDown() {
    setInterval(timeDiff(), [1000]);
};



// CHANGE HTML
document.getElementById("daysToGo").innerHTML = DAYS;
document.getElementById("hoursToGo").innerHTML = HOURS;
document.getElementById("minsToGo").innerHTML = MINS;
document.getElementById("secsToGo").innerHTML = SECS;
