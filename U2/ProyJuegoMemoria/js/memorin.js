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
/*
let parejas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

let contadorParejas = 0;
let posFila;
let posColumna;
let posFila2;
let posColumna2;

while (contadorParejas < (numCasillas / 2)){

    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    posFila2 = Math.floor(Math.random() * maxFilas);
    posColumna2 = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] == '') {
        arrayTablero[posFila][posColumna] = parejas[contadorParejas];
        arrayTablero[posFila2][posColumna2] = parejas[contadorParejas];
    }
    

    contadorParejas++;

}

*/

let parejas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (let i = 0; i < maxFilas; i++) {

    for (let j = 0; j < maxColumnas; j++) {
        
        if (arrayTablero[i][j] == '') {
            
            for (let index = 0; index < parejas.length; index++) {
            
                x = Math.floor(Math.random() * parejas.length + 1);
                arrayTablero[i][j] = x;
                
                /*

                while (true) {
                    
                    let filaPareja = Math.floor(Math.random() * arrayTablero.length + 1);
                    let columnaPareja = Math.floor(Math.random() * arrayTablero.length + 1);

                    if (arrayTablero[filaPareja][columnaPareja] == '') {
                        arrayTablero[filaPareja][columnaPareja] = ''
                        break;
                    }

                } */
            
            }

        }
        
    }
    
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

