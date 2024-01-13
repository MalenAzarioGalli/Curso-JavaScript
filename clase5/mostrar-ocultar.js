const caja= document.querySelector('#caja');

//caja.style.display = 'block';
function ocultar()
{
    caja.style.display = 'none';
}

function mostrar()
{
    caja.style.display ='block';
}

function mostrarOcultar()
{
//si la caja se ve
if(caja.style.display == 'block'){
    //ocultamos la caja
    ocultar();
}
else{
    //mostramos la caja
    mostrar();
}
}