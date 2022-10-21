// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');

while((maxFilas * maxColumnas) % 2 != 0){
    alert('ERROR\nEl número de casillas debe permitir parejas');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}

let numCasillas = maxFilas * maxColumnas;

// Crear tablero
let arrayTablero = [];

for (let fila = 0; fila < maxFilas; fila++) {
    
    arrayTablero[fila] = new Array(maxColumnas);

    for (let columa = 0; columa < maxColumnas; columa++) {
        
        arrayTablero[fila][columa] = '';
        
    }
    
}

// Crear elementos para parejas y añadirlos al tablero

let parejas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

let contadorParejas;
let posFila;
let posColumna;
let posicionArrayParejas = 0;

while (contadorParejas < (numCasillas / 2)){

    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != '') {
        arrayTablero[posFila][posColumna] = 2;
    }

    posicionArrayParejas++;

}





// Pintar tablero en html
document.write('<table>');

for (let i = 0; i < maxFilas; i++) {
    
    document.write('<tr>');

    for (let j = 0; j < maxColumnas; j++) {
        
        document.write('<td>' + arrayTablero[i][j] + '</td>');
        
    }
    document.write('</tr>');
}


document.write('</table>');

document.write(arrayTablero[1][1]);