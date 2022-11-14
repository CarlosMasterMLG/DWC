let numero = prompt('Dame un número entre el 1 y el 10');

while (numero < 1 || numero > 10) {

    numero = prompt('Dame un número entre el 1 y el 10');
    
}
//document.write(numero);

//let numRandom = Math.floor(Math.random() * 10 + 1);
//document.write('<br>');
//document.write(numRandom);

function comprobarNumero(){

    let numRandom = Math.floor(Math.random() * 10 + 1);
    //document.write(numRandom);
    //document.write('<br>');

    if (numero == numRandom) {
        return true;
    }else{
        return false;
    }

}

//document.write(comprobarNumero())

if (comprobarNumero() == true) {
    document.write('¡Enhorabuena, has acertado!');
} else{
    document.write('Lo sentimos, NO has acertado.');
}
