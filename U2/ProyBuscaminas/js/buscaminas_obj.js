class Tablero {
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
        this.pintarTablero();
    }

// Lo siguiente iria fuera de la clase (donde cierra la llave de la clase)
// const tableroBuscaminas = new Tablero(3,5);
// console.log(tableroBuscaminas);
// Ctrl + a y luego Ctrl + alt + n para ver en la terminal como el constructor cre un objeto Tablero

    crearTablero(){
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];
    
        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    pintarTablero(){
        // Creamos el tablero en html
        document.write('<table>');
    
        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
        
            for (let j = 0; j < this.columnas; j++) {
                if (this.crearTablero[i][j] != 0){
                   document.write('<td>'+ this.crearTablero[i][j] +'</td>');
                } else{
                   document.write('<td></td>');
               }
           }
       
           document.write('</tr>');
       }
       document.write('</table>');
       
       }





    }



const buscamminas = new Tablero(3,6);
console.log(buscamminas.filas);
console.log(buscamminas.columnas);
console.log(buscamminas.arrayTablero);

console.log(buscamminas.pintarTablero);