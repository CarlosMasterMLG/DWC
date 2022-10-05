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


// intento de contar las minas alrededor

posFila = 2;
posColumna = 2;

let numeroMinasAlrededor = 0;

//de la fila anterior a la posterior
for (let zFila = fila-1; zFila <= fila+1; zFila++){

    //de la columna anterior a la posterior
    for(let zColumna = columna-1; zColumna <= columna+1; zColumna++){

        //si la casilla cae dentro dle tablero
        if(zFila>-1 && zFila<maxFilas && zColumna>-1 && zColumna<maxColumnas){

            //miramos si en esa posición hay bomba
            if(arrayTablero[posFila][posColumna]=='MINA'){

                //sumamos 1 al número de minas que hay alrededor de esa casilla
                numeroMinasAlrededor++;

            }

        }

    }

    //guardamos el número de minas
    arrayTablero[posFila][posColumna] = numeroMinasAlrededor;

}

console.log(numeroMinasAlrededor);