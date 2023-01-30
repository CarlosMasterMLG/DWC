let maximo = 0;
let num1 = 0;
let num2 = 1;
let lista = [1, 2, 3, 40, 27, 50, 72, 4, 3, 67];


function comparar(lista) {
    
    if (lista(maximo) < lista(num2)) {
        maximo = num2;
    }

    num2 = num2+1;

    if (num2 > lista.length - 1) {
        
        return lista(maximo);

    } else {
        comparar(lista);
    }
    
}

console.log(comparar(lista));
