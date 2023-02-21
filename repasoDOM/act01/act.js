window.onload = function () {

    parrafo = document.getElementById("demo");
    parrafo.innerHTML = "Hola Mundo!";

    let boton = document.getElementById("boton");
    boton.onclick = function () {

        boton.style.backgroundColor = "red";

        cambiarParrafo();
        agregarIMG();
        
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

    document.getElementById("demo").innerHTML = "Yo al recordar lo que tengo que recuperar";
    
}

function agregarIMG() {

    var image = new Image();
    image.src = '/mario.jpg';
    document.getElementById('imgContainer').appendChild(image);
    
}