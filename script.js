"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    // No number entered
    document.querySelector(`.message`).textContent = `There is No number 😐`;
  } else if (guess === randomNumber) {
    // win the game
    document.querySelector(`.message`).textContent = `Correct number 🏆`;
    document.querySelector(`.number`).textContent = randomNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    // Lost the game
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess < randomNumber ? `Too low 📉` : `Too high 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game 💀`;
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
});
