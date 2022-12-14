// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');

while((maxFilas * maxColumnas) % 2 != 0 || maxColumnas * maxFilas < 4 || maxFilas > 5 || maxColumnas > 7){

    alert('ERROR\nEl número de casillas debe permitir hacer mas de una pareja sin que queden sueltas. También debe haber 5 filas y 6 columnas como maximo para que quepan en pantalla sin scrollear y sin redimensionar');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}

tableroMemoria = crearArrayTablero(maxFilas, maxColumnas);
tableroMemoria = colocarParejas(tableroMemoria, maxFilas, maxColumnas);
pintarTablero(tableroMemoria, maxFilas, maxColumnas);

function crearArrayTablero(maxFilas, maxColumnas){

    // Crear tablero
    let arrayTablero = [];

    for (let fila = 0; fila < maxFilas; fila++) {
    
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columa = 0; columa < maxColumnas; columa++) {
        
            arrayTablero[fila][columa] = '';
        
        }
    
    }

    return arrayTablero;

}

function colocarParejas(arrayTablero, maxFilas, maxColumnas){

    // Colocar parejas de forma equilibrada (que no haya, por ejemplo, cuatro parejas de dos y una del resto).
    let parejas = [
        "img/p5_joker.png",
        "img/p5_skull.jpg",
        "img/p5_panther.jpg",
        "img/p5_morgana.png",
        "img/p5_fox.png",
        "img/p5_makoto.png",
        "img/p5_futaba.jpg", 
        "img/p5_haru.png", 
        "img/p5_akechi.jpg",
        "img/p5_yoshizawa.png"
    ];
    let numCasillas = maxFilas * maxColumnas;
    let posFila = 0;
    let posColumna = 0;
    let numParejas = 0;
    let contadorArray = 0;

    while (numParejas != (numCasillas/2)) {

        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);

        while (arrayTablero[posFila][posColumna] != '') {

            posFila = Math.floor(Math.random() * maxFilas);
            posColumna = Math.floor(Math.random() * maxColumnas);

        }

        arrayTablero[posFila][posColumna] = parejas[contadorArray];

        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);

        while (arrayTablero[posFila][posColumna] != '') {

            posFila = Math.floor(Math.random() * maxFilas);
            posColumna = Math.floor(Math.random() * maxColumnas);

        }

        arrayTablero[posFila][posColumna] = parejas[contadorArray];

        contadorArray++;
        numParejas++;

        if (contadorArray == 10) {
        contadorArray = 0;
        }

    }

    return arrayTablero;

}

function pintarTablero(arrayTablero, maxFilas, maxColumnas){
    
    // Pintar tablero en html
    document.write('<h1>JUEGO DE MEMORIA<br>Carlos Blanco</h1>');
    document.write('<table>');

    for (let i = 0; i < maxFilas; i++) {
    
        document.write('<tr>');

        for (let j = 0; j < maxColumnas; j++) {
        
            document.write('<td><img src=' + arrayTablero[i][j] + '></td>');
        
        }
        document.write('</tr>');
    }

    document.write('</table>');

}