//ubicamos elementos dentro del DOM
const frase = document.querySelector('#frase');

/*
hacer una pregunta al usuario
-el usuario va a responder 
almacenar la respuesta en memoria
*/
let respuesta = prompt('¿Qué seleccionado ganó el mundial Qatar 2022?'); //let=variable

//condicional
if( respuesta.toLowerCase() == 'argentina' ){
    frase.innerHTML = '<img src="imgs/tilde.png">';
}
else {
    frase.innerHTML = '<img src="imgs/error.png">';
}