'use strict'
const PREV = document.querySelector('#arrow-prev');
const NEXT = document.querySelector('#arrow-next');
const NAV = document.querySelectorAll('.dot-nav');
let arr_ind = [];
let index = 0;


function show_text(ind) {
    let text = document.querySelectorAll('.slide');


    for (let i = 0; i < text.length; i++) {
        text[i].style.display = 'none';
        NAV[i].classList.remove('active-dot');
        arr_ind.push(i);
    }

    index = arr_ind.indexOf(ind);

    if (ind >= text.length) {
        index = 0
    } else if (ind < 0) {
        index = text.length - 1
    };

    text[index].style.display = 'block';
    NAV[index].classList.add('active-dot');
}




PREV.addEventListener('click', () => {
    show_text(--index);
});


NEXT.addEventListener('click', () => {
    show_text(++index);
});


NAV.forEach((element, i) => {
    element.addEventListener('click', function() {

        show_text(i);
    })
});