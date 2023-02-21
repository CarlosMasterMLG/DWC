window.onload = function () {

    parrafo = document.getElementById("demo");
    parrafo.innerHTML = "Hola Mundo!";

    let boton = document.getElementById("boton");
    boton.onclick = function () {

        cambiarParrafo();
        
    }

    borrarTitulo();
    

/*
    let paragraf = document.createElement("p");
    let contingut = documentTextNode("Hello World!");
    paragraf.appendChild(contingut);
    document.body.appendChild(paragraf);*/
    
}

function borrarTitulo() {

    let h2 = document.getElementsByTagName("h2")[0];
    h2.parentNode.removeChild(h2);
    
}

function cambiarParrafo() {

    document.getElementById("demo").innerHTML = "Funciona el evento";
    
}