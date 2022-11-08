class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero() {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    dibujarTablero() {
        // Creamos el tablero en HTML desde el DOM
        let tablero = document.createElement("table");
        document.body.appendChild(tablero);
        for (let i = 0; i < this.filas; i++) {
            
            let tr = document.createElement("tr");
            tablero.appendChild(tr);

            for (let j = 0; j < this.columnas; j++) {
                
                let td = document.createElement("td");
                //let contenido = document.createTextNode(`${this.arrayTablero[i][j]}`);
                let contenido = document.createTextNode("");
                td.appendChild(contenido);
                tr.appendChild(td);
            }

        }
    }

    modificarFilas(nuevasFilas){
        // Modificar el número de filas y crear de nuevo el tablero
        this.filas = nuevasFilas;
        crearTablero();
    }

    modificarColumnas(nuevasColumnas){
        // Modificar el número de columnas y crear de nuevo el tablero
        this.columnas = nuevasColumnas;
        crearTablero();
    }

}
/*
const buscaminas = new Tablero(4, 3);
buscaminas.dibujarTablero();
*/

class Buscaminas extends Tablero{
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.colocarMinas();
        this.colocarNumMinas();
    }

    colocarMinas(){
        let contadorMinas = 0;
        let posFila;
        let posColumna;
    
        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
    
            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas(){
        let numMinasAlrededor;
    
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
        
                }
            }
        }
    }

}

document.addEventListener("DOMContentLoades", function (event){})

window.onload=function(){

let buscaminas1 = new Buscaminas(5,5,5);
console.log(buscaminas1.arrayTablero);
buscaminas1.dibujarTablero();

}