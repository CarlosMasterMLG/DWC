let maxFilas = prompt("Filas requerias: ");
let maxColumnas = prompt("Columnas requerias: ");
let numMinas = prompt("¿Cuámtas minas quieres introducir?");

document.write('<table>');

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

for(let mina = 0; mina < numMinas; mina++){

    posFila = Math.floor(Math.random()*maxFilas);
    console.log(posFila);
    // arrayTablero[posFila][posColumna] = 'MINA';
}
