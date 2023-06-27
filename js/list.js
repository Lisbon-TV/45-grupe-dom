import { renderHeader } from "./header.js";

renderHeader(false);

// const goods = [
//     { name: 'Morka', price: 1, },
//     { name: 'Kopustas', price: 1.5, },
//     { name: 'Svogunas', price: 2, },
//     { name: 'Agurkas', price: 3, },
//     { name: 'Pomidoras', price: 4.5, },
//     { name: 'Bulve', price: 1.29, },
//     { name: 'Kalafioras', price: 102.99, },
// ];

// const listDOM = document.querySelector('ul');

// for (const { name, price } of goods) {
//     const formatedPrice = price.toFixed(2).replace('.', ',');

//     listDOM.innerHTML += `<li>${name} (${formatedPrice} Eur)</li>`;
// }

const url = 'http://localhost:4510/data/goods2.json';
const listDOM = document.querySelector('ul');
let HTML = '';

if (listDOM) {
    try {
        const response = await fetch(url);
        const goods = await response.json();

        for (const { name, price } of goods) {
            const formatedPrice = price.toFixed(2).replace('.', ',');
            HTML += `<li>${name} (${formatedPrice} Eur)</li>`;
        }
    } catch (error) {
        HTML = '<p>ERROR: kazkas blogai...</p>';
    } finally {
        listDOM.innerHTML = HTML;
    }
}

function sum(a, b) {
    return a + b;
}

console.log('>>>', sum(7, 5));