//ubicamos dentro elementos dentro del DOM
const caja = document.querySelector('#caja');

/*declaracion de funciones */
function saludar( nombre )
{
    console.log('hola', nombre);
}

function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}

/*function pintarVerde()
{
    caja.style.backgroundColor ='hsl(120, 50%, 50%)';
}
function pintarNaranja()
{
    caja.style.backgroundColor ='hsl(30, 50%, 50%)';
}*/

//invocamos funcion saludar
saludar('Luna');
saludar('Facundo');
saludar('Milo');