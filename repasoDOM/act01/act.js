window.onload = function () {

    parrafo = document.getElementById("demo");
    parrafo.innerHTML = "Hola Mundo!";

    let boton = document.getElementById("boton");
    boton.onclick = function () {

        boton.style.backgroundColor = "red";

        cambiarParrafo();
        agregarIMG();

        /*const div = document.createElement("div");
        div.textContent = "No le veo utilidad al DOM";
        const app = document.querySelector("#app");
        app.insertBefore*/
        
    }
    borrarTitulo();
    crearP();
    crearTabla();
    nuevaIMG();
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

function crearP() {

    //let btn = document.getElementsByTagName("button")[0];
    let img = document.getElementById("imgContainer");
    let body = document.getElementsByTagName("body")[0];

    let p = document.createElement("p");
    p.innerHTML = "Funciona!";

    body.insertBefore(p, img);
    
}

function crearTabla() {
    
    // Forma rapida y realmente eficaz
    let body = document.getElementsByTagName("body")[0];
    let demo = document.getElementById("demo");

    let nuevoP = document.createElement("p");
    nuevoP.innerHTML = `<table>
                            <tr>
                                <td>
                                    TH
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TH
                                </td>
                            </tr>
                        </table>`;
    
    nuevoP.style.backgroundColor = 'grey';
    nuevoP.style.border = 'solid 2px black';

    body.insertBefore(nuevoP, demo);

    // Forma mas correcta y mas zzz
    let tabla = document.createElement("table");

    let tr1 = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerHTML = 'TH1';
    let th2 = document.createElement("th");
    th2.innerHTML = 'TH2';

    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = 'TD1';
    let td2 = document.createElement("td");
    td2.innerHTML = 'TD2';

    tr1.appendChild(th1);
    tr1.appendChild(th2);

    tr2.appendChild(td1);
    tr2.appendChild(td2);

    tabla.appendChild(tr1);
    tabla.appendChild(tr2);

    body.insertBefore(tabla, demo);

}

function nuevaIMG() {

    let body = document.getElementsByTagName("body")[0];
    let img = document.createElement("img");
    img.setAttribute("src", "/perrete_guts.png");
    img.setAttribute("width", "300px")

    body.insertBefore(img, document.getElementsByTagName("p")[3]);
    
}