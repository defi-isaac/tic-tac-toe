const gameBoard = (() => {
    let board = ['','','',
                 '','','',
                 '','',''];   

    return {board};

})();


const displayController = (() => {

    const board = gameBoard.board;
    const boardBox = document.querySelectorAll('.boardBox'); 
    const displayResult = document.querySelector('.displayResult');
    const modal = document.querySelector('.modal');
    const exitModal = document.querySelector('.exitModal');
    let counter = 0;

    for (let i = 0; i < board.length; i++) {

        boardBox[i].addEventListener('click', () => {
                
            if(!boardBox[i].textContent) {
                if (counter % 2 === 0) {
                    board[i] = 'X';
                } else {
                    board[i] = 'O';
                }
                counter++;
            }

            boardBox[i].textContent = board[i];

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
                filledRow: ((((leftCol.top === midCol.top) && (leftCol.top === rightCol.top)) && leftCol.top !== '') || 
                            (((leftCol.mid === midCol.mid) && (leftCol.mid === rightCol.mid)) && leftCol.mid !== '') ||
                            (((leftCol.bot === midCol.bot) && (leftCol.bot === rightCol.bot)) && leftCol.bot !== '')),
                filledCol: ((((leftCol.top === leftCol.mid) && (leftCol.top === leftCol.bot)) && leftCol.top !== '') || 
                            (((midCol.top === midCol.mid) && (midCol.top === midCol.bot)) && midCol.top !== '') || 
                            (((rightCol.top === rightCol.mid) && (rightCol.top === rightCol.bot)) && rightCol.top !== '')),
                filledDiagonal: ((((leftCol.top === midCol.mid) && (leftCol.top === rightCol.bot)) && leftCol.top !== '') || 
                                 (((rightCol.top === midCol.mid) && (rightCol.top === leftCol.bot)) && rightCol.top !== '')),
                noWinner: (leftCol.top != '' && leftCol.mid != '' && leftCol.bot != '' && rightCol.top != '' && rightCol.mid != '' && rightCol.bot != '' && midCol.top != '' && midCol.mid != '' && midCol.bot != '')
            }

            if (endScenarios.filledRow === true || endScenarios.filledCol === true || endScenarios.filledDiagonal === true) { 
                // Display a modal that displays the who won (X or O)
                // Modal should have a button that says restart game which clears the gameBoard.board and the board content
                displayResult.textContent = 'Somebody won'
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
        }
    })

})();

const Players = () => {

};