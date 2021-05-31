'use strict'
var firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxxx",
    measurementId: "xxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const FORM = document.querySelector('#formulario');


FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const comentarios = document.getElementById('comentarios').value;
    const interes = document.getElementById('intereses').value;
    saveMessage(nombre, email, telefono, comentarios, interes);


});

function saveMessage(nombre, email, telefono, comentarios, interes) {
    let postListRef = firebase.database().ref('comentarios');
    let newPostRef = postListRef.push();
    newPostRef.set({
        nombre: nombre,
        email: email,
        telefono: telefono,
        comentarios: comentarios,
        interes: interes
    });

    FORM.rest();
}

function coment() {
    window.location = 'coment.html';
}