/*
    una variable es: un espacio de memoria donde podemos almacenar informacion para utilizarlo luego.
    para declarar variables utilizamos la palabra reservada "let"
*/
let numero = 42;
let frase = 'Hola mundo';

/*
para declarar contantes utilizamos la palabra reservada "const"
*/
const nombre = 'Malen';



//imprimimos valor de variable en el documento
document.write( numero );
document.write('<br>');
document.write( frase );
document.write('<br>');
document.write( nombre );

//sobreescritura de valores almacenados
numero = 73;
document.write('<br>');
document.write( numero );
document.write('<br>');
frase = 'Chau mundo';
document.write( frase );

document.write('<br>');
//nombre = Facundo;  una constante no se puede sobreescribir
