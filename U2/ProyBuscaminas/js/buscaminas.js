// Preguntamos cuantas filas, columnas y minas debe haber
let maxFilas = prompt("Filas requerias: ");
let maxColumnas = prompt("Columnas requerias: ");
let numMinas = prompt("¿Cuámtas minas quieres introducir?");

document.write('<table>');

// Creamos el tablero en html
for(let i = 0; i < maxFilas; i++){
    document.write('<tr>');

    for(let j = 0; j < maxColumnas; j++){
        document.write('<td></td>');
    }

    document.write('</tr>');
}

document.write('</table>');

// Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++) {
    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = '';
    }
    
}

while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random()*maxFilas);
    posColumna = Math.floor(Math.random()*maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++ ;
    };
}

console.log(arrayTablero);

