const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let currentPlayer = 'cross';
let startBtn = document.querySelector('.start-game');
let restartBtn = document.querySelector('.restart-game');
const box = document.querySelectorAll('.box');
let finalMessage = document.querySelector('.final-message');
let gameContainer = document.querySelector('.game-container');
let counter = 0;

startBtn.addEventListener('click', function () {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'grid';
    gameContainer.style.display = 'grid';
    startGame();
})

restartBtn.addEventListener('click', function () {
    startBtn.style.display = 'none';
    finalMessage.style.display = 'none';
    removeAllSymbols();
    gameContainer.style.display = 'grid';
    currentPlayer = 'cross';
    startGame();
})

function startGame() {
    counter = 0;
    box.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!element.classList.contains('circle') && !element.classList.contains('cross')) {
                element.classList.add(currentPlayer);
                counter++;
                changePlayer();
            }

            if (checkWinner('circle')) {
                finalMessage.style.display = 'flex';
                document.querySelector('.winner-symbol').textContent = ' Circle ';
                currentTurnMessage.style.display = 'none';
            }
            else if (checkWinner('cross')) {
                finalMessage.style.display = 'flex';
                document.querySelector('.winner-symbol').textContent = ' Cross ';
                currentTurnMessage.style.display = 'none';
            }

            else if (counter === 9) { draw(); }
        });
    });
}

function changePlayer() {
    if (currentPlayer === 'circle') {
        currentPlayer = 'cross';
    } else {
        currentPlayer = 'circle';
    }
}

function checkWinner(symbol) {
    for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];
        if (
            box[a].classList.contains(symbol) &&
            box[b].classList.contains(symbol) &&
            box[c].classList.contains(symbol)
        ) {
            return true;
        }
    }
    return false;
}

function draw() {
    finalMessage.style.display = 'flex';
    document.querySelector('.winner-symbol').textContent = ' Nobody ';
    currentTurnMessage.style.display = 'none';
}

function removeAllSymbols() {
    box.forEach(function (element) {
        element.classList.remove('circle');
        element.classList.remove('cross');
    })
}