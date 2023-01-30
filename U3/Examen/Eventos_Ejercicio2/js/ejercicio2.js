window.onload = function() {
    
    let btn = document.getElementById("boton");
    btn.onclick = function() {
        
        btn.style.background="red";
        
        clicarBoton();

        /*document.getElementById('boton').innerHTML = 'hola'; 
        alert('¡FUNCIONA!');*/       

    }

    let textArea = document.getElementsByName("texto");
    textArea.keyup = function() {
        
        //textArea.style.background="blue";
        alert("hola");

        comprobarCaracteres();

    }
        
}

function clicarBoton() {
    let eventoEjercicio = new Ejercicio2();
    
}

class Ejercicio2{
    constructor(){
        this.maxCaracteres = document.getElementsByTagID("maxCaracteres");
        this.areaTexto = document.getElementsByName("texto");
    }

    comprobarCaracteres(elEvento) {
        let nodoActivo;
        
        alert(`Has introducido un caracter. 
        El número máximo de caracteres es ${this.maxCaracteres}`);
    }
}