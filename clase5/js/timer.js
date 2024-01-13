const texto = document.querySelector('#texto');

// valores iniciales
let numero = 0;
texto.innerText = numero;
let intervalo;
let flag = 0;

//declaramos funcion de control
function timer()
{
    //incrementamos el numero
    numero++;
    //actualizamos ese numero
    texto.innerText = numero;
}

/*creamos una nueva funcion 
que llame y llame nuevamente y otra vez....
a la funcion timer
*/
function iniciar()
{
    if( flag ==0 ){
        intervalo = setInterval( timer, 1000 );
        flag = 1;
    }
    
}
function detener()
{
    clearInterval( intervalo );
    flag = 0;
}

function resetTimer()
{
    numero = 0;
    texto.innerText = numero;
}