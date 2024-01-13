//ubicamos elemento dentro del DOM 
const texto = document.querySelector('#texto');

/*
mostrar la fecha 
formato: Miercoles 20/12/2023
*/

//creamos un objeto de fecha 
const fecha = new Date();
console.log( 'Fecha:', fecha );

// obtenemos un numero del dia de la semana
let numeroSemana = fecha.getDay();
switch( numeroSemana )
{
    case 0:
        diaSemana = "Domingo";
        break;
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miercoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sabado";
        break;
}
console.log('dia de la semana:', diaSemana);

// obtenemos el numero de dia del mes
let diaMes = fecha.getDate();
if( diaMes<10 ){
    diaMes ='0' + diaMes;
}
console.log('Dia del mes:',diaMes);

//obtenemos el numero del mes actual
let mes = fecha.getMonth() +1;
if(mes < 10){
    mes = '0' + mes;
}
console.log('Mes actual:',mes);

//obtenemos el numero del año actual
let anio = fecha.getFullYear();
console.log('Año actual:', anio);

//imprimimos dentro del span
texto.innerText = diaSemana + ' ' + diaMes + '/' + mes + '/' + anio;

