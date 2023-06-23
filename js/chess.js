import { renderHeader } from '../js/header.js';

renderHeader();

const board = document.querySelector(".board");
let row, rowCount = 0;

for (let i = 1; i < 64; i++) {
    if(i % 8 === 1) {
        rowCount++;

            row = document.createElement('div');
            row.className = 'row';
        
            board.appendChild(row);
        }
        let square = document.createElement('div');
        square.className = 'square';

        if((rowCount % 2 === 0 && i % 2 === 0) || (rowCount % 2 !== 0 && i % 2 !== 0)) {
            square.style.backgroundColor = '#fff';
        } else {
            square.style.backgroundColor = '#000';
        }
        row.appendChild(square);
    }


// function renderChessBoard(size = 8) {
//     console.log(size);
// }

// renderChessBoard(4);
// renderChessBoard();