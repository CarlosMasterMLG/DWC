girarPalabra('carlos');

function girarPalabra(palabra) {
    
    let arrayLetras = palabra.split('');
    console.log(arrayLetras);

    let tamanyoArray = arrayLetras.length;
    console.log(tamanyoArray);

    let arrayOrdenado = [];
    let j = arrayLetras.length;

    for (let i = 0; i < arrayLetras.length; i++) {
        
        arrayOrdenado[i] = arrayLetras[j];
        
        j = j-1;
    }

    console.log(arrayLetras);

}