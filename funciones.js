//2 tipos de funciones:

// Declarativas, se generan con la palabra reservada "Function". La funcion tiene un nombre obligatorio
function mifuncion() {
    return 3;
}

mifuncion(); //llamo a la funcion

// Expresivas o anonimas, se generan con una variable. La funcion no tiene nombre
var mifuncion = function(a, b){
    return a + b;
}

mifuncion(); //llamo a la funcion
