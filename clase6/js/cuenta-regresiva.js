//ubicamos elementos dentro del DOM 
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');
let intervalo = '';

//declaramos funcion/es de control
function cuentaRegresiva()
{
    const final = new Date(2024, 03, 17); //primero viene el año, luego el mes y por ultimo el dia
    const actual = new Date();

    //calculamos la diferencia de los eventos 
        //expresada en milisegundos
    let diferencia = final - actual;
    console.log('diferencia:', diferencia);

    /* convertimos a unidades de tiempo */
    //obtenemos el tiempo expresada en segundos (sin decimales)
    let segundos = Math.trunc(diferencia / 1000); //trunc sirve para sacar los decimales
    console.log( 'segundos: ', segundos);

    //obtenemos el tiempo expresada en minutos (sin decimales)
    let minutos = Math.trunc( segundos / 60);
    console.log( 'minutos: ', minutos);

    //obtenemos el tiempo expresada en horas (sin decimales)
    let horas = Math.trunc( minutos / 60);
    console.log( 'horas: ', horas);

    //obtenemos el tiempo expresada en dias (sin decimales)
    let dias = Math.trunc( horas / 24);
    console.log( 'dias: ', dias);

    /* calculamos los tiempos restantes*/ 
    horas = horas%24;
    console.log('horas: ', horas);
    
    minutos = minutos%60;
    console.log( 'minutos: ', minutos);

    segundos = segundos%60;
    console.log( 'segundos: ', segundos);

    /*agregamos cero (0) inicial para dos digitos */

    if( dias < 10 ){
        dias = '0' + dias;
    }

    if( horas < 10 ){
        horas = '0' + horas;
    }    

    if( minutos < 10 ){
        minutos = '0' + minutos;
    }

    if( segundos < 10 ){
        segundos = '0' + segundos;
    }  

    /*imprimimos en los span */
        txtDias.innerText = dias;
        txtHoras.innerText = horas;
        txtMinutos.innerText = minutos;
        txtSegundos.innerText = segundos;
        
}

//invocamos a la funcion 
cuentaRegresiva();
//actualizamos el llamado a la funcion
intervalo = setInterval( cuentaRegresiva, 1000 );