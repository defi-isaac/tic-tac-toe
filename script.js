const gameBoard = (() => {
    let board = ['','','',
                 '','','',
                 '','',''];   

    return {board};

})();


const displayController = (() => {

    const board = gameBoard.board;
    const boardBox = document.querySelectorAll('.boardBox'); 
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

        })
    }

})();

const Players = () => {

};