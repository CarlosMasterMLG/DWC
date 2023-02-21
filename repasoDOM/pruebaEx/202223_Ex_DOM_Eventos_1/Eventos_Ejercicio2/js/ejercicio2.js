window.onload = function() {

    let btn = document.getElementById("boton");

    btn.onclick = function() {

        clicarBoton();
        btn.style.backgroundColor = 'green';
        
    }

    let textArea = document.getElementsByTagName("textarea")[0];

    textArea.onkeyup = function() {
        
        comprobarCaracteres();

    }

}

function clicarBoton() {

    let p = document.getElementById("maxCaracteres").textContent;
    let textArea = document.getElementsByTagName("textarea")[0].textContent;
    
    let eventoEjercicio = new Ejercicio2(p, textArea);
    //console.log(eventoEjercicio);

}

class Ejercicio2{
    constructor(p, textArea){
        this.maxCaracteres = p;
        this.areaTexto = textArea;
    }

    comprobarCaracteres(elEvento) {
        let nodoActivo;
        
        alert(`Has introducido un caracter. El número máximo de caracteres es ${this.maxCaracteres}`);
    }
}