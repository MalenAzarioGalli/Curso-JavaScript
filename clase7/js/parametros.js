//ubicamos dentro elementos dentro del DOM
const caja = document.querySelector('#caja');
    //los a que estan dentro de #navegacion 
const botones = document.querySelectorAll('#navegacion a');

console.log( botones );

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

//centralizamos el código en el JavaScript
botones[0].addEventListener(
    'click',
    ()=>{
        pintar('hsl(120, 50%, 50%)');
    }
);
botones[1].addEventListener(
    'click',
    ()=>{
        pintar('hsl(30, 50%, 50%)');
    }
);
botones[2].addEventListener(
    'click',
    ()=>{
        pintar('hsl(200, 80%, 70%)')
    }
);