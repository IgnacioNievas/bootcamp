const CARD = document.querySelectorAll(".flip-card-front");
const CARDBACK = document.querySelectorAll(".flip-card-back");
const ICO_AR = document.querySelectorAll(".arrows");
const ICO_CAN = document.querySelectorAll(".cancels");
const DOT = document.querySelectorAll('.dot-nav');
let index = 0;
let nume = [];

function slide(i) {

    for (let num = 0; num < CARD.length; num++) {
        nume.push(num);
    }
    let numex = nume.indexOf(i);

    if (!CARD[numex].classList.contains("lower")) {
        CARD[numex].classList.add("lower"),
            ICO_AR[numex].classList.add("acti");

    } else if (CARD[numex].classList.contains("lower")) {
        CARD[numex].classList.remove("lower");
        ICO_AR[numex].classList.remove("acti");
        CARDBACK[numex].classList.add("sin");
        ICO_CAN[numex].classList.add("acti");

    }


}

CARD.forEach((car, i) => {
    car.addEventListener("click",
        () => {
            slide(i)
        });
})

ICO_AR.forEach((ico_ar, i) => {
    ico_ar.addEventListener("click",
        () => {
            slide(i)
        });
})


ICO_CAN.forEach((ico_can, i) => {
    ico_can.addEventListener("click",
        function() {

            ICO_CAN[i].classList.remove("acti");
            CARDBACK[i].classList.remove("sin");

        });

});

function slide_dots(dot_i) {
    let div = document.querySelectorAll('.slide');
    let dots_in = [];


    for (let i = 0; i < DOT.length; i++) {
        div[i].style.display = 'none';
        DOT[i].classList.remove('active-dot');
        dots_in.push(i)
    }
    let div_index = dots_in.indexOf(dot_i);
    div[div_index].style.display = 'flex';
    DOT[div_index].classList.add('active-dot');

}

DOT.forEach((element, i) => {
    element.addEventListener('click', function() {
        slide_dots(i)
    })
});