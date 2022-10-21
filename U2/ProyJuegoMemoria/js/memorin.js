// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');


while((maxFilas * maxColumnas) % 2 != 0){
    alert('ERROR\nEl número de casillas debe permitir parejas');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}

// Crear tablero
let arrayTablero = [];

for (let fila = 0; fila < maxFilas; fila++) {
    
    arrayTablero[fila] = new Array(maxColumnas);

    for (let columa = 0; columa < maxColumnas; columa++) {
        
        arrayTablero[fila][columa] = '';
        
    }
    
}