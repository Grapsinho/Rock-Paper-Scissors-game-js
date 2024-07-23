export const getElement = (selector) => document.querySelector(selector);
export const getElementAll = (selector) => document.querySelectorAll(selector);

export const log = (message) => console.log(message);

export const gameThing = {
    choices: ['Rock', 'Paper', 'Scissors'],
    computerMove: function() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    },
    result: '',
}

const player_score = getElement('.player_score')
const comp_score = getElement('.comp_score')
const tieScore = getElement('.tie_score')

let player_score3 = parseInt(localStorage.getItem('player_score1')) || 0;
let comp_score3 = parseInt(localStorage.getItem('computer_score')) || 0;
let tieScore3 = parseInt(localStorage.getItem('tie_score')) || 0;

player_score.textContent = player_score3
comp_score.textContent = comp_score3
tieScore.textContent = tieScore3

export function startPlay(playerMove) {
    const computerChoice = gameThing.computerMove()

    if (playerMove === computerChoice) {
        gameThing.result = "It's a draw!";
        tieScore3++
    } else if (
        (playerMove === 'Rock' && computerChoice === 'Scissors') ||
        (playerMove === 'Paper' && computerChoice === 'Rock') ||
        (playerMove === 'Scissors' && computerChoice === 'Paper')
    ) {
        gameThing.result = "You win!";
        player_score3++
    } else {
        gameThing.result = "You lose!";
        comp_score3++
    }

    localStorage.setItem("player_score1", JSON.stringify(player_score3))
    localStorage.setItem("computer_score", JSON.stringify(comp_score3))
    localStorage.setItem("tie_score", JSON.stringify(tieScore3))

    player_score.textContent = player_score3
    comp_score.textContent = comp_score3
    tieScore.textContent = tieScore3
    document.getElementById('result').textContent = `Computer chose ${computerChoice}. ${gameThing.result}`;
}
