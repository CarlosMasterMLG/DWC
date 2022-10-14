let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let numMinas = prompt('¿Cuántas minas quieres introducir?');
let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;
let numMinasAlrededor;

crearTablero(arrayTablero);
colocarMinas(arrayTablero, contadorMinas, numMinas, posFila, posColumna);
contarMinas(maxFilas, maxColumnas, numMinasAlrededor, arrayTablero);
pintarTablero(arrayTablero, maxFilas, maxColumnas);

function crearTablero(tablero) {
    for (let fila = 0; fila < maxFilas; fila++) {
        tablero[fila] = new Array(maxColumnas);
    
        for (let columna = 0; columna < maxColumnas; columna++) {
            tablero[fila][columna] = '';
        }
    }
    
}

function colocarMinas(arrayTablero, contadorMinas, numMinas, posFila, posColumna) {
    while (contadorMinas < numMinas) {
        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);
    
        if (arrayTablero[posFila][posColumna] != 'MINA') {
            arrayTablero[posFila][posColumna] = 'MINA';
            contadorMinas++;
        };
    };
}

function contarMinas(maxFilas, maxColumnas, numMinasAlrededor, arrayTablero) {

    for (let fila = 0; fila < maxFilas; fila++) {
        for (let columna = 0; columna < maxColumnas; columna++) {
            numMinasAlrededor = 0;
            if (arrayTablero[fila][columna] != 'MINA') {
                for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                    if (cFila >= 0 && cFila < maxFilas) {
                        for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                            if (cColumna >= 0 && cColumna < maxColumnas &&
                                arrayTablero[cFila][cColumna] == 'MINA') {
                                numMinasAlrededor++;
                            }
                        }
                    }
                    arrayTablero[fila][columna] = numMinasAlrededor;
                }
    
            }
        }
    }
    
}

function pintarTablero(tablero, filas, columnas) {

    document.write('<table>');

    for (let i = 0; i < filas; i++) {
        document.write('<tr>');

     for (let j = 0; j < columnas; j++) {
         if (tablero[i][j] != 0){
            document.write('<td>'+ tablero[i][j] +'</td>');
         } else{
            document.write('<td></td>');
        }
    }

    document.write('</tr>');
}
document.write('</table>');

}
