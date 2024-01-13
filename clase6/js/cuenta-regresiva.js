//ubicamos elementos dentro del DOM 
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');

//declaramos funcion/es de control
function cuentaRegresiva()
{
    const final = new Date(2024, 03, 17); //primero viene el año, luego el mes y por ultimo el dia
    const actual = new Date();

    //calculamos la diferencia de los eventos 
        //expresada en milisegundos
    let diferencia = final - actual;
    console.log('diferencia:', diferencia);
}

//invocamos a la funcion 
cuentaRegresiva();