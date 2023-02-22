girarPalabra('carlos');

function girarPalabra(palabra) {
    
    let arrayLetras = palabra.split('');

    arrayBien = arrayLetras.reverse();

    return arrayBien.toString();

}