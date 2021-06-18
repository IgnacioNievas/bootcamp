'use strict'
const NAVA = document.querySelector('.nav');
const ICON = document.querySelector('.icon');


function toggle() {
    if (NAVA.style.display === 'block') {
        NAVA.style.display = 'none';
    } else {
        NAVA.style.display = 'block';
    }

    if (ICON.classList.contains('fa-bars')) {
        ICON.classList.remove('fa-bars');
        ICON.classList.add('fa-times');
    } else {
        ICON.classList.remove('fa-times');
        ICON.classList.add('fa-bars');
    }
}