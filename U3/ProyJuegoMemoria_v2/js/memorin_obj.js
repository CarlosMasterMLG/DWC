// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');

while((maxFilas * maxColumnas) % 2 != 0 || maxColumnas * maxFilas < 4 || maxFilas > 5 || maxColumnas > 7){

    alert('ERROR\nEl número de casillas debe permitir hacer mas de una pareja sin que queden sueltas. También debe haber 5 filas y 6 columnas como maximo para que quepan en pantalla sin scrollear y sin redimensionar');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}

// Creamos la clase Tablero
class Tablero{
    constructor(filas, columnas){
    this.filas = filas;
    this.columnas = columnas;

    this.crearTablero();
    }

    // Creamos el tablero
    crearTablero(){

        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
    
            this.arrayTablero[fila] = new Array(this.columnas);

            for (let columa = 0; columa < this.columnas; columa++) {
        
                this.arrayTablero[fila][columa] = '';
        
            }
    
        }

    }

    // Dibujamos el tablero
    dibujarTableroDOM(){

        document.write('<h1>JUEGO DE MEMORIA<br>Carlos Blanco</h1>');

        let tablero = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            
            fila = document.createElement('tr');
            tablero.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                columna.dataset.despejado = false; // celda.dataset.despejado = true; en la función despejarCasilla
                fila.appendChild(columna);

            }
            document.body.appendChild(tablero);
        }


        /*
        for (let i = 0; i < this.filas; i++) {
    
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
        
                document.write('<td><img src=' + this.arrayTablero[i][j] + '></td>');
        
            }
            document.write('</tr>');
        }

        document.write('</table>');
*/
    }

    modificarFilas(nuevasFilas){

        this.filas = nuevasFilas;
        crearTablero();

    }

    modificarColumnas(nuevasColumnas){

        this.Columnas = nuevasColumnas;
        crearTablero();

    }
    
}

// Creamos clase JuegoMemoria
class JuegoMemoria extends Tablero{
    constructor(filas, columnas){
        super(filas, columnas);

        this.numDespejados = 0;
        this.primerDespejado = "";
        this.posPrimerDespejado = "";
        this.colocarParejas();
        // this.dibujarTableroDOM();
    }

    // Colocamos las parejas
    colocarParejas(){

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
        let numCasillas = this.filas * this.columnas;
        let posFila = 0;
        let posColumna = 0;
        let numParejas = 0;
        let contadorArray = 0;
    
        while (numParejas != (numCasillas/2)) {
    
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
    
            while (this.arrayTablero[posFila][posColumna] != '') {
    
                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);
    
            }
    
            this.arrayTablero[posFila][posColumna] = parejas[contadorArray];
    
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
    
            while (this.arrayTablero[posFila][posColumna] != '') {
    
                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);
    
            }
    
            this.arrayTablero[posFila][posColumna] = parejas[contadorArray];
    
            contadorArray++;
            numParejas++;
    
            if (contadorArray == 10) {
            contadorArray = 0;
            }
        }

    }




    dibujarTableroDOM(){
        super.dibujarTableroDOM();

        let celda;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {

                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar.bind(this));
            }   
        }
    }

    despejar(elEvento){
        
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.despejarCelda(celda);

    }

    despejarCelda(celda){

        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);

        celda.dataset.despejado = true;
        //celda.style.backgroundColor = 'grey';
        
        let contenidoCelda = this.arrayTablero[fila][columna];
        celda.style.backgroundImage = 'url(../'+contenidoCelda+')';
        celda.style.backgroundSize = "302px";

        

        this.numDespejados = this.numDespejados + 1;

        if (this.numDespejados == 1) {
            
            this.primerDespejado = contenidoCelda;
            this.posPrimerDespejado = celda;

        }

        if (this.numDespejados == 2) {
            
            if (this.primerDespejado == contenidoCelda) {
                
                //alert("Has desbloqueado una pareja");
                
                //celda.removeEventListener('click', this.despejarCelda);
                //this.posPrimerDespejado.removeEventListener('click', this.despejarCelda);
                //Este comentario es una prueba del GIT

            } else {
                
                this.posPrimerDespejado.style.background = "white";
                celda.style.background  = "white";
                //alert('Prueba otra vez');
            }



            this.numDespejados = 0;
        }

    }


}

// Ejecutamos
let juegoMemoria1 = new JuegoMemoria(maxFilas, maxColumnas);
console.log(juegoMemoria1.arrayTablero);
juegoMemoria1.dibujarTableroDOM();