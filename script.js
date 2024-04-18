const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let currentPlayer = 'cross';
let hasCross = false;
let hasCircle = false;
const box = document.querySelectorAll('.box');
let finalMessage = document.querySelector('.final-message');
box.forEach(function (element) {
    element.addEventListener('click', function () {
        if (!element.classList.contains('circle') && !element.classList.contains('cross')) {
            console.log('clicked');
            element.classList.add(currentPlayer);
            changePlayer();
            if (checkResult('circle')) {
                finalMessage.style.display = 'flex';

                document.querySelector('.winner-symbol').textContent = ' Circle ';
            }
            else if (checkResult('cross')) {
                finalMessage.style.display = 'flex';
                document.querySelector('.winner-symbol').textContent = ' Cross ';
            }
        }
    });
});



function checkResult(symbol) {
    // if (box[0].classList.contains('circle') && box[1].classList.contains('circle') && box[2].classList.contains('circle')) {
    //     finalMessage.style.display = 'flex';
    // }


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


function changePlayer() {
    if (currentPlayer === 'circle') {
        currentPlayer = 'cross';
    } else {
        currentPlayer = 'circle';
    }
}