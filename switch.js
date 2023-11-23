var numero = 1; //genero una variable a validar con el condicional switch: y armo 3 case mas el default (para el caso que no cumpla con ninguno de los 3 case)

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;//el break es necesario para que no siga validando los otros "case" 
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
        console.log("No soy nada");
}