const gameBoard = (() => {
    let board = ['','','',
                 '','','',
                 '','',''];   

    return {board};

})();


const displayController = (() => {

    let board = gameBoard.board;
    const boardBox = document.querySelectorAll('.boardBox'); 
    const displayResult = document.querySelector('.displayResult');
    const modal = document.querySelector('.modal');
    const exitModal = document.querySelector('.exitModal');
    const content = document.querySelector('.content');
    const enterNames = document.querySelector('.enterNames');
    const nameDisplay = document.querySelector('.nameDisplay');
    const start = document.querySelector('.start');
    let counter = 0;

    
    // Initially hide the content div
    content.style.display = 'none';
    
    // Create a button that will show the content div and hide the current content 
    enterNames.addEventListener('submit', (event) => {
        const players = Players(`${player1.value}`, `${player2.value}`);
        event.preventDefault();
        enterNames.reset();
        enterNames.style.display = 'none';
        content.style.display = 'flex';
        nameDisplay.textContent = `${player1} (X) and ${player2} (O)`;
    })

    // The current content will be a form entering the player names and a button saying START GAME. Maybe keep the header of 'TIC TAC TOE' and just replace enterNames with .gameBoard

    // Something like:

    // Player 1 (X):

    // Player 2 (O):

    // Add a START NEW GAME button to the content div as well

    // In the Players Function: Read the info using .value() from the form at the start. Add conditional, if board[0] == 'X', displayResult.textContent = `${player1} won the game!`

    // For the displayController, I also want something between header and board that says `${player1} is X, ${player2} is O`
    
    
    for (let i = 0; i < board.length; i++) {

        boardBox[i].addEventListener('click', () => {

            /* If the box is empty
            Check when the button has been clicked, X always goes first then alternate 
            Depending on when box was clicked, make text content either X or O */    
            if(!boardBox[i].textContent) {
                if (counter % 2 === 0) {
                    boardBox[i].textContent = 'X';
                } else {
                    boardBox[i].textContent = 'O';
                }
                counter++;
            }
            // Assign the digital board what's inside the text box
            gameBoard.board[i] = boardBox[i].textContent;

            const leftCol = {
                top: board[0],
                mid: board[3],
                bot: board[6],
            }
            const midCol =  {
                top: board[1],
                mid: board[4],
                bot: board[7],
            }
            const rightCol = {
                top: board[2],
                mid: board[5],
                bot: board[8],
            }
        
            const endScenarios = {
                filledTopRow: ((leftCol.top === midCol.top) && (leftCol.top === rightCol.top)) && leftCol.top !== '', 
                filledMidRow: ((leftCol.mid === midCol.mid) && (leftCol.mid === rightCol.mid)) && leftCol.mid !== '',
                fileldBotRow: ((leftCol.bot === midCol.bot) && (leftCol.bot === rightCol.bot)) && leftCol.bot !== '',
                filledLeftCol: ((leftCol.top === leftCol.mid) && (leftCol.top === leftCol.bot)) && leftCol.top !== '',
                filledMidCol: ((midCol.top === midCol.mid) && (midCol.top === midCol.bot)) && midCol.top !== '', 
                filledRightCol: ((rightCol.top === rightCol.mid) && (rightCol.top === rightCol.bot)) && rightCol.top !== '',
                RtoLDiagonal: ((leftCol.top === midCol.mid) && (leftCol.top === rightCol.bot)) && leftCol.top !== '', 
                LtoRDiagonal: ((rightCol.top === midCol.mid) && (rightCol.top === leftCol.bot)) && rightCol.top !== '',
                noWinner: (leftCol.top != '' && leftCol.mid != '' && leftCol.bot != '' && rightCol.top != '' && rightCol.mid != '' && rightCol.bot != '' && midCol.top != '' && midCol.mid != '' && midCol.bot != '')
            }

            if (endScenarios.filledTopRow) {
                boardBox[0].classList.add('winningSquare');
                boardBox[1].classList.add('winningSquare');
                boardBox[2].classList.add('winningSquare');
                if (board[0] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.filledMidRow) {
                boardBox[3].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[5].classList.add('winningSquare');
                if (board[3] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.fileldBotRow) {
                boardBox[6].classList.add('winningSquare');
                boardBox[7].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                if (board[6] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.filledLeftCol) {
                boardBox[0].classList.add('winningSquare');
                boardBox[3].classList.add('winningSquare');
                boardBox[6].classList.add('winningSquare');
                if (board[0] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.filledMidCol) {
                boardBox[1].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[7].classList.add('winningSquare');
                if (board[1] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.filledRightCol) {
                boardBox[2].classList.add('winningSquare');
                boardBox[5].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                if (board[2] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.RtoLDiagonal) {
                boardBox[0].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                if (board[0] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.LtoRDiagonal) {
                boardBox[6].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[2].classList.add('winningSquare');
                if (board[2] == 'X') {
                    displayResult.textContent = `${player1} won the game!`
                } else {
                    displayResult.textContent = `${player2} won the game!`
                }
                modal.showModal();
            } else if (endScenarios.noWinner) {
                displayResult.textContent = 'It was a draw';
                modal.showModal();
            }

        })
    }

    exitModal.addEventListener('click', () => {
        modal.close();
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
            boardBox[i].textContent = board[i];
            boardBox[i].classList.remove('winningSquare');
        }
        counter = 0;
    })

})();

const Players = (player1, player2) => {
    this.player1 = player1;
    this.player2 = player2;
};