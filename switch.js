var numero = 1;

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