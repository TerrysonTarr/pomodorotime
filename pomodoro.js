// pomodoro.js

let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startbutton');
const pomodoroButton = document.getElementById('pomodorobutton');
const shortBreakButton = document.getElementById('shortbreakbutton');
const longBreakButton = document.getElementById('longbreakbutton');

function updateDisplay() {
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert('Time is up!');
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function setTimer(mins) {
    clearInterval(timer);
    isRunning = false;
    minutes = mins;
    seconds = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
pomodoroButton.addEventListener('click', () => setTimer(25));
shortBreakButton.addEventListener('click', () => setTimer(5));
longBreakButton.addEventListener('click', () => setTimer(15));

updateDisplay();