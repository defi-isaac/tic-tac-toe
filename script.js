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
    let counter = 0;

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
                displayResult.textContent = `Whoever played ${board[0]} won the game!`
                modal.showModal();
            } else if (endScenarios.filledMidRow) {
                boardBox[3].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[5].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[3]} won the game!`
                modal.showModal();
            } else if (endScenarios.fileldBotRow) {
                boardBox[6].classList.add('winningSquare');
                boardBox[7].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[6]} won the game!`
                modal.showModal();
            } else if (endScenarios.filledLeftCol) {
                boardBox[0].classList.add('winningSquare');
                boardBox[3].classList.add('winningSquare');
                boardBox[6].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[0]} won the game!`
                modal.showModal();
            } else if (endScenarios.filledMidCol) {
                boardBox[1].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[7].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[1]} won the game!`
                modal.showModal();
            } else if (endScenarios.filledRightCol) {
                boardBox[2].classList.add('winningSquare');
                boardBox[5].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[2]} won the game!`
                modal.showModal();
            } else if (endScenarios.RtoLDiagonal) {
                boardBox[0].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[8].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[0]} won the game!`
                modal.showModal();
            } else if (endScenarios.LtoRDiagonal) {
                boardBox[6].classList.add('winningSquare');
                boardBox[4].classList.add('winningSquare');
                boardBox[2].classList.add('winningSquare');
                displayResult.textContent = `Whoever played ${board[2]} won the game!`
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

const Players = () => {

};