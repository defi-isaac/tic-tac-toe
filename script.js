const gameBoard = (() => {
    let board = ['','','','','','','','',''];

    return {board};

})();


const displayController = (() => {

    const board = gameBoard.board;
    const boardBox = document.querySelectorAll('.boardBox'); 
    let counter = 0;

    for (let i = 0; i < board.length; i++) {

        boardBox[i].addEventListener('click', () => {
                
            if(!boardBox[i].textContent) {
                if (counter % 2 == 0) {
                    board[i] = 'X';
                } else {
                    board[i] = 'O';
                }
                counter++;
            }

            boardBox[i].textContent = board[i];
        })
    }



})();

const Players = () => {

};