'use strict'

const CANC = document.querySelectorAll('.cancel');
const ARR = document.querySelectorAll('.arrow');
const SEC = document.querySelectorAll('.second');
const PREV = document.querySelector('#dot-prev');
const NEXT = document.querySelector('#dot-next');
let inde = [];


function slide(i) {

    for (let ind = 0; ind < ARR.length; ind++) {
        inde.push(ind);
    }
    let index = inde.indexOf(i);
    if (SEC[index].classList.contains('off')) {
        SEC[index].classList.remove('off');
        SEC[index].classList.add('active');
    } else {
        SEC[index].classList.remove('active');
        SEC[index].classList.add('off');
    }

    if (ARR[index].classList.contains('active-arrow')) {
        ARR[index].classList.remove('active-arrow');
    } else { ARR[index].classList.add('active-arrow'); };
}




ARR.forEach((ar, i) => {
    ar.addEventListener('click', () => {
        slide(i);
    });
});



CANC.forEach((can, i) => {
    can.addEventListener('click', () => {
        slide(i);
    })
});