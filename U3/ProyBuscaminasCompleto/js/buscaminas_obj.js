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

    dibujarTableroHTML() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td></td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    dibujarTableroDOM(){
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                columna.dataset.despejado = false;
                fila.appendChild(columna);
            }
        }

        document.body.appendChild(tabla);
    }

    
    

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas
        this.filas = nuevasFilas;

        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }


}

class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.banderasDisponibles = this.numMinas;
        this.banderasBienPuestas=0;
        this.celdasBienDespejadas=0;

        this.colocarMinas();
        this.colocarNumMinas();
    }

    colocarMinas() {
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

    colocarNumMinas() {
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

    dibujarTableroDOM(){
        super.dibujarTableroDOM();

        let celda;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++){
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar.bind(this));
                celda.addEventListener('contextmenu', this.marcar.bind(this));
            }
        }
    }

    ganar() {
        let banderasBuenas=(this.banderasBienPuestas==this.numMinas);
        let celdasDespejadas=(this.celdasBienDespejadas==(this.filas*this.columnas)-this.numMinas);

        if(banderasBuenas||celdasDespejadas){
            setTimeout(function () { alert("¡Has ganado!") }, 500);
        }
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        
        this.despejarCelda(celda);

        this.ganar();

    }

    despejarCelda(celda) {
        let fila = celda.dataset.fila;
        let columna = celda.dataset.columna;

        celda.dataset.despejado = true;

        let contenidoCelda = this.arrayTablero[fila][columna];
        let esNumero = (contenidoCelda != "MINA" && contenidoCelda != 0);
        let esMina = (contenidoCelda == "MINA");
        let esCero = (contenidoCelda == 0);
        let estaMarcado = (celda.getAttribute("class") == "bandera");

        let arrayFilas;
        let arrayColumnas;

        celda.setAttribute("class", "destapado");

        if (estaMarcado) {
            celda.setAttribute("class", "bandera");
        }
        else if (esNumero) {
            celda.innerHTML = contenidoCelda;
            switch (celda.innerHTML) {
                case "1":
                    celda.setAttribute("style", "color:rgb(0, 57, 214);");
                    break;
                case "2":
                    celda.setAttribute("style", "color:green;");
                    break;
                case "3":
                    celda.setAttribute("style", "color:red;");
                    break;
                case "4":
                    celda.setAttribute("style", "color:navy;");
                    break;
                case "5":
                    celda.setAttribute("style", "color:darkred")
                    break;
                case "6":
                    celda.setAttribute("style", "color:aqua")
                    break;
                case "7":
                    celda.setAttribute("style", "color:black")
                    break;
                case "8":
                    celda.setAttribute("style", "color:gray");
                    break;
            }
            this.celdasBienDespejadas++;
            this.ganar();
        } else if (esCero) {
            if(celda.getAttribute("class")!="bandera"){
                celda.innerHTML = "";
                let fila = parseInt(celda.dataset.fila);
                let columna = parseInt(celda.dataset.columna);

                let estaDestapada = (celda.dataset.despejado == "true");
                for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                    if (cFila >= 0 && cFila < this.filas) {
                        for (let cCol = columna - 1; cCol <= columna + 1; cCol++) {
                            if (cCol >= 0 && cCol < this.columnas) {
                                let celdaActual = document.getElementById(`f${cFila}_c${cCol}`);
                                let estaDestapada = (celdaActual.dataset.despejado == "true");

                                if (!estaDestapada) {
                                    this.despejarCelda(celdaActual);
                                }
                            }
                        }
                    }
                }
            }
            this.celdasBienDespejadas++;
            this.ganar();
        } else if (esMina) {
            arrayFilas = celda.parentNode.parentNode.childNodes;
            for (let tr of arrayFilas) {
                arrayColumnas = tr.childNodes;
                for (let td of arrayColumnas) {
                    let filaBomba = td.dataset.fila;
                    let columnaBomba = td.dataset.columna;
                    let valorCeldaBomba = this.arrayTablero[filaBomba][columnaBomba];

                    if (td.lastChild != "") {
                        let banderaMalPuesta = (celda.getAttribute("class") == 'bandera' && contenidoCelda != 'MINA');

                        if(valorCeldaBomba=="MINA"){
                            td.setAttribute("class","minaRoja")
                        }else if(valorCeldaBomba!="MINA"&&td.getAttribute("class")=="bandera"){
                            td.setAttribute("class","error");
                        }
                    }
                }
            }
            setTimeout(function () { alert("Has perdido.") }, 500);
        }
    }



    marcar(elEvento) {
        let evento = elEvento || window.event;
        let celda=evento.currentTarget;

        //let banderasDisponibles = this.numMinas;

        document.oncontextmenu = function(){return false}
        switch (celda.className) {
            case "":
                if (this.banderasDisponibles > 0) {
                    this.banderasDisponibles = this.banderasDisponibles - 1;
                    celda.className = "bandera";
                    break;
                } else {
                    celda.className = "interrogante";
                    break;
                }
            case "bandera":
                celda.className = "interrogante";
                this.banderasDisponibles = this.banderasDisponibles + 1;
                break;
            default:
                celda.className = "";
                break;
        }
    }
}

window.onload = function() {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.dibujarTableroDOM();
}