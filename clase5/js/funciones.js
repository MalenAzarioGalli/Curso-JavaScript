//ubicamos elemento dentro de DOM
const caja = document.querySelector('#caja')

//declaramos funcion/es de control
//esta funcion la creamos para luego colocarla en los botones del html y no tener mucho codigo en el html
function pintarVerde()
{
    caja.style.backgroundColor='hsl(120, 50%, 50%)';
    caja.innerText='Verde';
}

function pintarCeleste()
{
    caja.style.backgroundColor= 'hsl(195, 50%, 50%)';
    caja.innerText='Celeste';
}

function pintarNaranja()
{
    caja.style.backgroundColor= 'hsl(30, 50%, 50%)';
    caja.innerText='Naranja';
}