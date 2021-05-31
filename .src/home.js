'use strict'

'use strict'
var firebaseConfig = {
    apiKey: "AIzaSyCWIOSlcxPQ3eppYm4cHXSQiCHlYK97CaQ",
    authDomain: "comentarios-2b309.firebaseapp.com",
    projectId: "comentarios-2b309",
    storageBucket: "comentarios-2b309.appspot.com",
    messagingSenderId: "1069149675998",
    appId: "1:1069149675998:web:3d1cea38647b71b2007d4f",
    measurementId: "G-GVJNKZG5RW"
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