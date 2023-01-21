// Pedir datos al usuario
let maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
let maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');

while((maxFilas * maxColumnas) % 2 != 0 || maxColumnas * maxFilas < 4 || maxFilas > 5 || maxColumnas > 7){

    alert('ERROR\nEl número de casillas debe permitir hacer mas de una pareja sin que queden sueltas. También debe haber 5 filas y 6 columnas como maximo para que quepan en pantalla sin scrollear y sin redimensionar');
    maxFilas = prompt('¿Cuantas filas quiere que tenga el tablero?');
    maxColumnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
}
/*
window.onload = function() {

    
}*/

// Creamos la clase Tablero
class Tablero{
    constructor(filas, columnas){
    this.filas = filas;
    this.columnas = columnas;
    this.puntuacion =  parseFloat(0);
    this.puntuacionTotal = 10;

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

        let totalCasillas = this.filas*this.columnas;
        let totalParejas = totalCasillas/2;
        this.puntuacionTotal = totalParejas * 10;

    }

    // Dibujamos el tablero
    dibujarTableroDOM(){

        document.write('<h1>JUEGO DE MEMORIA<br>Carlos Blanco</h1>');


        /*La puntuación máxima es 10 POR PAREJA, es decir si hay 4 cartas
        hay 2 parejas y eso son 20 puntos.
        Aunque parezca trampa se reinicia con cada par de cartas que levantes.
        Se reinicia cada vez que levantes dos cartas distintas a la combinacion
        anterior*/
        
        let puntuacion = document.createElement('h3');
        puntuacion.innerHTML = `Puntuación: <b id="puntos"> ${this.puntuacion}/${this.puntuacionTotal}</b>`;
        document.body.appendChild(puntuacion);

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
                columna.dataset.despejado = false;
                fila.appendChild(columna);

            }
            document.body.appendChild(tablero);
        }

        

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

        this.totalDespejados = 0;
        this.numDespejados = 0;
        this.primerDespejado = "";
        this.posPrimerDespejado = "";
        this.colocarParejas();
        this.arrayCartas = [];
        this.esPareja = false;
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

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.onclick = function() {
            let seguro = confirm('¿Estás seguro?');

            if (seguro) {
                location.reload();
            }
        }
        boton.innerHTML = 'Nueva partida';
        document.body.appendChild(boton);
    }

    despejar(elEvento){
        
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.despejarCelda(celda);

    }

    despejarCelda(celda){

        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);

        /*let puntuacion = document.getElementByTagName('h3');*/

        celda.dataset.despejado = true;
        
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

                this.esPareja = true;

                setTimeout(() => {

                    celda.style.background = 'black';
                    this.posPrimerDespejado.style.background = 'black';

                    celda.style.pointerEvents = 'none';
                    this.posPrimerDespejado.style.pointerEvents = 'none';

                }, "500");

                //this.puntuacion.innerHTML = `Esto es una mierda`;

                if (this.totalDespejados == this.filas*this.columnas - 2) {

                    setTimeout(() => {
                        alert(`Enhorabuena, has obtenido una puntuación de ${this.puntuacion}`);
                    }, 600);
                }
                
                this.totalDespejados = this.totalDespejados + 2;

            } else {

                this.esPareja = false;
                
                setTimeout(() => {
                    this.posPrimerDespejado.style.backgroundImage = 'url(/img/p5_reversoCarta.png)';
                    this.posPrimerDespejado.style.backgroundSize = '320px';
                    this.posPrimerDespejado.style.backgroundPosition = '50% 50%';

                    celda.style.backgroundImage = 'url(/img/p5_reversoCarta.png)';
                    celda.style.backgroundSize = "320px";
                    celda.style.backgroundPosition = "50% 50%";

                }, "500");
                
            }

            this.numDespejados = 0;
            this.puntos(this.posPrimerDespejado, celda);
        }

    }

    puntos(carta1, carta2){
        
        this.arrayCartas.push(carta1);
        this.arrayCartas.push(carta2);

        if (this.arrayCartas.length >= 3) {
            
            for (let i = 0; i < this.arrayCartas.length; i++) {
            
                /*if (this.arrayCartas[i] == carta1 || this.arrayCartas[i] == carta2) {                    
                }*/

                if (this.arrayCartas[i] != carta1 && this.arrayCartas[i] != carta2) {
                    
                    delete this.arrayCartas[i];

                }
                
            }
            
        }

        let repeticiones = 0;

        if (this.esPareja) {
                
            for (let i = 0; i < this.arrayCartas.length; i++) {
                
                let cartaComparada = this.arrayCartas[i]
                    
                if (this.arrayCartas[i] = cartaComparada && this.arrayCartas != undefined) {
                       repeticiones++;
                }
                    
            }

            repeticiones = repeticiones-1;

            if (repeticiones == 1) {
                this.puntuacion = this.puntuacion + 10;
                document.getElementById('puntos').innerHTML = `${this.puntuacion}/${this.puntuacionTotal}`; 
            } else if (repeticiones == 2) {
                this.puntuacion = this.puntuacion + 5;
                document.getElementById('puntos').innerHTML = `${this.puntuacion}/${this.puntuacionTotal}`;
            } else if (repeticiones == 3) {
                this.puntuacion = this.puntuacion + 2.5;
                document.getElementById('puntos').innerHTML = `${this.puntuacion}/${this.puntuacionTotal}`;
            } else {
                this.puntuacion = this.puntuacion + 0;
                document.getElementById('puntos').innerHTML = `${this.puntuacion}/${this.puntuacionTotal}`;
            }

        }
    }

}

// Ejecutamos
let juegoMemoria1 = new JuegoMemoria(maxFilas, maxColumnas);
console.log(juegoMemoria1.arrayTablero);
juegoMemoria1.dibujarTableroDOM();



