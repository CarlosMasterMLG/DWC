// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');

// Bucle que asegura que insertes un tamaño con casillas pares para meter parejas.
while((maxFilas * maxColumnas) % 2 != 0){
    alert('ERROR\nEl número de casillas debe permitir parejas');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}

tableroMemoria = crearArrayTablero(maxFilas, maxColumnas);
tableroMemoria = colocarParejas(tableroMemoria, maxFilas, maxColumnas);
pintarTablero(tableroMemoria, maxFilas, maxColumnas);

// Crear tablero
function crearArrayTablero(maxFilas, maxColumnas){

    let arrayTablero = [];

    for (let fila = 0; fila < maxFilas; fila++) {
    
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columa = 0; columa < maxColumnas; columa++) {
        
            arrayTablero[fila][columa] = '';
        
        }
    
    }

    return arrayTablero;

}

// Colocar parejas de forma equilibrada (que no haya, por ejemplo, 4 parejas de 2 y una del resto).
function colocarParejas(arrayTablero, maxFilas, maxColumnas){

    let parejas = [
        "/stickers/bluetooth.svg",
        "/stickers/discord.svg",
        "/stickers/gamepad-solid.svg",
        "/stickers/java.svg",
        "/stickers/jedi-order.svg",
        "/stickers/php.svg",
        "/stickers/square-github.svg", 
        "/stickers/twitch.svg", 
        "/stickers/user-ninja-solid.svg",
        "/stickers/xbox.svg"
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

// Pintar tablero en html
function pintarTablero(arrayTablero, maxFilas, maxColumnas){
    
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