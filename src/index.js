import './index.css';
'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const inputGuess = document.querySelector('.guess')
const buttonCheck = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const scoreDefault = document.querySelector('.score');
const highscoreDefaut = document.querySelector('.highscore');
const body = document.querySelector('.body');

let score = 20;
let highscore = 0;
let numberCorrect = Math.trunc(Math.random() * 20) + 1;

function scoreChanging() {
    score--;
    scoreDefault.textContent = score;
};

function styleChangingWin() {
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

};

function styleChangingReset() {
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
};

function displayMessage(text) {
    message.textContent = text;
};

function displayNumbder(num) {
    number.textContent = num;
}

function guessingNumber() {
    const guess = Number(inputGuess.value);
    if (!guess) {
        displayMessage('🛑 No Number!');
    } else if (guess === numberCorrect) {
        displayMessage('🎉 Correct Number!');
        displayNumbder(numberCorrect);
        styleChangingWin();
        if (score > highscore) {
            highscore = score;
            highscoreDefaut.textContent = highscore;
        }
    } else if (guess !== numberCorrect) {
        if (score > 1) {
            displayMessage(guess > numberCorrect ? '↗️ To high!' : '↘️ To low!');
            scoreChanging()
        } else {
            displayMessage('💔 You lost the game!');
            scoreDefault.textContent = 0;
            buttonCheck.disabled = true;
        }
    }
};

function resetGameHandler() {
    styleChangingReset();
    displayMessage('Start guessing...');
    displayNumbder('?');
    score = 20;
    scoreDefault.textContent = score;
    numberCorrect = Math.trunc(Math.random() * 20) + 1;
    inputGuess.value = '';
    buttonCheck.disabled = false;
};

buttonCheck.addEventListener('click', guessingNumber);
buttonAgain.addEventListener('click', resetGameHandler);