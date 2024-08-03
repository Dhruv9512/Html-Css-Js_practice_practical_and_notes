let currentPlayer = 'X';
let cells = Array.from(document.getElementsByClassName('cell'));
let resultDisplay = document.getElementById('result');

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].innerText !== '' && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            return cells[a].innerText;
        }
    }

    if (cells.every(cell => cell.innerText !== '')) {
        return 'draw';
    }

    return null;
}

function computerMove() {
    // Check if computer can win in the next move
    for (let i = 0; i < 9; i++) {
        if (cells[i].innerText === '') {
            cells[i].innerText = 'O';
            if (checkWinner() === 'O') {
                return;
            }
            cells[i].innerText = '';
        }
    }

    // Check if player can win in the next move and block
    for (let i = 0; i < 9; i++) {
        if (cells[i].innerText === '') {
            cells[i].innerText = 'X';
            if (checkWinner() === 'X') {
                cells[i].innerText = 'O';
                return;
            }
            cells[i].innerText = '';
        }
    }

    // Make a random move
    let emptyCells = cells.filter(cell => cell.innerText === '');
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].innerText = 'O';
}

function handleClick(index) {
    if (cells[index].innerText === '') {
        cells[index].innerText = currentPlayer;
        let winner = checkWinner();
        if (winner) {
            if (winner === 'draw') {
                resultDisplay.innerText = "It's a draw!";
            } else {
                resultDisplay.innerText = `${winner} wins!`;
            }
            cells.forEach(cell => cell.style.pointerEvents = 'none');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                computerMove();
                winner = checkWinner();
                if (winner) {
                    if (winner === 'draw') {
                        resultDisplay.innerText = "It's a draw!";
                    } else {
                        resultDisplay.innerText = `${winner} wins!`;
                    }
                    cells.forEach(cell => cell.style.pointerEvents = 'none');
                } else {
                    currentPlayer = 'X';   
                }
            };
        }
    }
}

function reset() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.pointerEvents = 'auto';
    });
    resultDisplay.innerText = '';
    currentPlayer = 'X';
}


function toggleTheme() {
    const body = document.body;
    const result = document.getElementById("it");

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change text based on theme
    if (body.classList.contains('dark-mode')) {
        result.innerText = "Dark Mode";
    } else {
        result.innerText = "Light Mode";
    }
}
