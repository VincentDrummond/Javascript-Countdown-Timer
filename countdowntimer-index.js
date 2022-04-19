
// MATHS
const DAYS_FACTOR = 24 * HOURS_FACTOR;  // 24H IN 1D
const HOURS_FACTOR = 60 * MINS_FACTOR;  // 60M IN 1H
const MINS_FACTOR = 60 * SECS_FACTOR;   // 60S IN 1M
const SECS_FACTOR = 1000;               // 1000 MS IN 1S

const FUTURE_DATE = Date.UTC(2022, 9, 1, 16);

function timeDiff() {

// DATES
const THIS_DATE = Date.now();

const TIME_ELAPSED = FUTURE_DATE - THIS_DATE;

// TIME DATA
const days = Math.floor((TIME_ELAPSED) / DAYS_FACTOR);
const hours = Math.floor((TIME_ELAPSED / HOURS_FACTOR) % 24);
const mins = Math.floor((TIME_ELAPSED / MINS_FACTOR) % 60);
const secs = Math.floor((TIME_ELAPSED / SECS_FACTOR) % 60);

// CHANGE HTML
document.getElementById("daysToGo").innerHTML = days;
document.getElementById("hoursToGo").innerHTML = hours;
document.getElementById("minsToGo").innerHTML = mins;
document.getElementById("secsToGo").innerHTML = secs;

    return {
        DAYS,
        HOURS,
        MINS,
        SECS,
    }
};

function countDown() {
    setInterval(timeDiff, 1000);
};

countDown();
