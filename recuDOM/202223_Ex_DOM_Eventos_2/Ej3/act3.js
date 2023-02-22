girarPalabra('carlos');

function girarPalabra(palabra) {
    
    let arrayLetras = palabra.split('');

    let tamanyoArray = arrayLetras.length;

    arrayBien = arrayLetras.reverse();

    return arrayBien.toString();

}