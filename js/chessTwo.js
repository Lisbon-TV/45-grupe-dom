import { renderHeader } from '../js/header.js';
renderHeader();

const formDOM = document.querySelector('form');
const inputDOM = formDOM.querySelector('input');
const boardDOM = document.querySelector('.board');

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(inputDOM.value);

    if (number > 0 && number % 1 === 0) {
        renderChessBoard(number);
    }
});

function renderChessBoard(size = 8) {
    let HTML = '';

    // updated function:
    let blackHTML = '';
    let whiteHTML = '';

    for (let m = 0; m < size; m++) {
        blackHTML += `<div class="cell ${m % 2 === 0 ? 'black' : ''}"></div>`;
        whiteHTML += `<div class="cell ${m % 2 === 0 ? '' : 'black'}"></div>`;
    }

    for (let i = 0; i < size; i++) {
        HTML += `<div class="row">${i % 2 === 0 ? blackHTML : whiteHTML}</div>`
    }

    boardDOM.innerHTML = HTML;
}


//     for (let i = 0; i < size; i++) {
//         if (i % 2 === 0) {
//             HTML += '<div class="row">';
//             for (let j = 0; j < size; j++) {
//                 if (j % 2 === 0) {
//                     HTML += '<div class="cell black"></div>';
//                 } else {
//                     HTML += '<div class="cell"></div>';
//                 }
//             }
//             HTML += '</div>';
//         } else {
//             HTML += '<div class="row">';
//             for (let j = 0; j < size; j++) {
//                 if (j % 2 === 0) {
//                     HTML += '<div class="cell"></div>';
//                 } else {
//                     HTML += '<div class="cell black"></div>';
//                 }
//             }
//             HTML += '</div>';
//         }
//     }

//     boardDOM.innerHTML = HTML;
// }

renderChessBoard();