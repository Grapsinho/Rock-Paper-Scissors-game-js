export const getElement = (selector) => document.querySelector(selector);
export const getElementAll = (selector) => document.querySelectorAll(selector);

export const log = (message) => console.log(message);

export const gameThing = {
    choices: ['Rock', 'Paper', 'Scissors'],
    computerMove: function() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    },
    result: '',
    scorePlayer: 0,
    scoreComputer: 0,
}

const player_score = getElement('.player_score')
const comp_score = getElement('.comp_score')

export function startPlay(playerMove) {
    const computerChoice = gameThing.computerMove()
    if (playerMove === computerChoice) {
        gameThing.result = "It's a draw!";
        gameThing.scorePlayer++
        gameThing.scoreComputer++
    } else if (
        (playerMove === 'Rock' && computerChoice === 'Scissors') ||
        (playerMove === 'Paper' && computerChoice === 'Rock') ||
        (playerMove === 'Scissors' && computerChoice === 'Paper')
    ) {
        gameThing.result = "You win!";
        gameThing.scorePlayer++
    } else {
        gameThing.result = "You lose!";
        gameThing.scoreComputer++
    }

    player_score.textContent = gameThing.scorePlayer
    comp_score.textContent = gameThing.scoreComputer
    document.getElementById('result').textContent = `Computer chose ${computerChoice}. ${gameThing.result}`;
}