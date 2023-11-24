[] //corchetes: estructura de una Array, donde guardar valores de numeros, de string, objetos

//generando un Array: le damos de nombre: frutas
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas) //imprime lo que tiene el array Frutas
console.log(frutas.length) //imprime la longitud que tiene el array Frutas: 4, con la propiedad ".length" nos dice la longitud del array.
console.log(frutas[0]) //imprime el elemento de la posicion cero: "Manzana", porque en el indice del array frutas esta posicionado en cero el elemento Manzana...  se usa para averiguar cual es el elemento que esta en este caso en la posicion cero.

// Metodos de un Array: nos van a permitir mutar elementos del Array
var masFrutas = frutas.push("uva") //Con el Metodo ".push" va a añadir un elemento al final del array
