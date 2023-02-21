window.onload = function() {

// Apartado 1
let h1 = document.getElementsByTagName("h1")[0];
h1.style.color = "red";
h1.setAttribute("id", "titulo1");
h1.setAttribute("data-position", "1");

let h2 = document.getElementsByTagName("h2")[0];

// Apartado 2
let divImagenes = document.getElementById("imagenes");

let imagen = document.createElement("img");
imagen.setAttribute("src", "img/descarga.jpg");

divImagenes.appendChild(imagen);

// Apartado 3
let body = document.getElementsByTagName("body")[0];


let img2 = document.createElement("img");
img2.setAttribute("src", "img/imagen1.webp");

divImagenes.appendChild(img2);

//body.insertBefore(img2, p);

// Apartado 4
let p = document.getElementsByTagName("p")[0];
p.innerHTML = "Mi gato hace <b>uyuyuyuy</b>";

    
}