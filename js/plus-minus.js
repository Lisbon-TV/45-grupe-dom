import { renderHeader } from "./header.js";

renderHeader(false);

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('.number');

let a = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a; 
    number.innerText = a;
    console.log(a);
});

minus.addEventListener("click", () => {
    if (a > 1){
    a--
    a = (a < 10) ? "0" + a : a; 
    number.innerText = a;
    }
});