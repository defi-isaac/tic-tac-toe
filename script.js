const gameBoard = (() => {
    let board = ['','','X','','','','','',''];

    return {board};

})();


const displayController = (() => {

    const board = gameBoard.board;
    const boardBox = document.querySelectorAll('.boardBox'); 

    for (let i = 0; i < board.length; i++) {
        boardBox[i].textContent = board[i];
    }

})();

const Players = () => {

};