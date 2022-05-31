"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const stopBtn = document.querySelector('button[data-action="stop"]');
const startBtn = document.querySelector('button[data-action="start"]');
const body = document.querySelector("body");

startBtn.addEventListener("click", changeBackgroundColor);
stopBtn.addEventListener("click", stopChangeColor);

let intervalID;

function changeBackgroundColor(e) {
  e.target.disabled = true;

  intervalID = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[randomIndex];
  }, 1000);
}
function stopChangeColor() {
  startBtn.disabled = false;
  clearInterval(intervalID);
}
